import * as React from 'react';

import { isArrowLeftPressed, isArrowRightPressed } from '@/utils';

import { CarouselControlled } from './carouselControlled';
import { useCarousel } from './hooks';
import { useAutomateControl } from './hooks/useAutomateControl';
import { ICarouselUnControlled } from './types';

const CarouselUnControlledComponent = <V extends string | unknown>(
  {
    defaultPage = 0,
    circular = true,
    centerMode = false,
    displayArrowsOnCarousel = true,
    centerExtremesWhenExtraPadding = false,
    numElementsPerPage,
    numElementsToSlide,
    onTransition,
    onePageAlign,
    disableSwipe = false,
    allowModifySliceWidth = false,
    onPageChange,
    ...props
  }: ICarouselUnControlled<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const [currentPage, setCurrentPage] = React.useState(defaultPage);
  const carouselContainerRef = React.useRef<HTMLDivElement>(null);
  const carouselContentRef = React.useRef<HTMLDivElement>(null);

  const handleClickLeftArrow = e => {
    if (!allowShift.current || numPages <= 1) {
      return;
    }
    props.leftArrow?.onClick?.(e);
    const newPage = currentPage === 0 ? numPages - 1 : currentPage - 1;
    setCurrentPage(newPage);
    handlePageChange(-1);
    onPageChange?.(newPage);
    onTransition?.(true);
  };

  const onLeftSwipe = () => {
    setCurrentPage(prevPage => {
      let newPage = prevPage;
      if (allowShift.current && (circular || prevPage !== 0)) {
        newPage = prevPage === 0 ? numPages - 1 : prevPage - 1;
        handlePageChange(-1);
        onPageChange?.(newPage);
        // onTransition is called internally when drag starts
      }
      return newPage;
    });
  };

  const handleClickRightArrow = e => {
    if (!allowShift.current || numPages <= 1) {
      return;
    }
    props.rightArrow?.onClick?.(e);
    const newPage = (currentPage + 1) % numPages;
    setCurrentPage(newPage);
    handlePageChange(1);
    onPageChange?.(newPage);
    onTransition?.(true);
  };

  const onRightSwipe = () => {
    setCurrentPage(prevPage => {
      let newPage = prevPage;
      if (allowShift.current && (circular || prevPage !== numPages - 1)) {
        newPage = (newPage + 1) % numPages;
        handlePageChange(1);
        onPageChange?.(newPage);
        // onTransition is called internally when drag starts
      }
      return newPage;
    });
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = event => {
    const leftArrowDisabled = !circular && currentPage === 0;
    const rightArrowDisabled = !circular && currentPage === numPages - 1;

    if (numPages <= 1) {
      return;
    }
    if (isArrowLeftPressed(event.key) && !props.pageControlAutomateConfig && !leftArrowDisabled) {
      handleClickLeftArrow(event);
    } else if (
      isArrowRightPressed(event.key) &&
      !props.pageControlAutomateConfig &&
      !rightArrowDisabled
    ) {
      handleClickRightArrow(event);
    }
  };

  const handleChangeIndicator = (indexIndicator: number) => {
    if (!allowShift.current || indexIndicator === currentPage) {
      return;
    }
    const newPage = indexIndicator < 0 ? numPages - 1 : indexIndicator % numPages;
    setCurrentPage(prevPage => {
      handlePageChange(indexIndicator - prevPage);
      onPageChange?.(newPage);
      props.pageControlAutomateConfig?.mediaProgressBar.onBarChange?.(newPage);
      onTransition?.(true);
      return newPage;
    });
  };

  const { handlePageChange, allowShift, numPages, innerCurrentPage } = useCarousel({
    carouselContainerRef,
    carouselContentRef,
    circular,
    centerMode,
    extraPadding: props.extraPadding,
    elements: props.elements,
    numElementsPerPage,
    numElementsToSlide,
    defaultPage,
    onePageAlign,
    disableSwipe,
    allowModifySliceWidth: allowModifySliceWidth && !!numElementsPerPage,
    centerExtremesWhenExtraPadding,
    onRightSwipe,
    onLeftSwipe,
    onTransition,
  });

  const { handleClickMediaButton, handleMouseOver, handleMouseOut, isPlaying } = useAutomateControl(
    {
      isPlayingInitially:
        props.pageControlAutomateConfig !== undefined
          ? props.pageControlAutomateConfig.playingInitially
          : false,
      onClickMediaButton: props.pageControlAutomateConfig?.playStop.onClick,
    }
  );

  React.useEffect(() => {
    setCurrentPage(innerCurrentPage.current);
  }, [numPages]);

  return (
    <CarouselControlled
      {...props}
      ref={ref}
      allowModifySliceWidth={allowModifySliceWidth && !!numElementsPerPage}
      carouselContainerRef={carouselContainerRef}
      carouselContentRef={carouselContentRef}
      centerMode={centerMode}
      circular={circular}
      currentPage={currentPage}
      disableSwipe={disableSwipe}
      displayArrowsOnCarousel={displayArrowsOnCarousel}
      numPages={numPages}
      playing={isPlaying}
      onIndicatorChange={handleChangeIndicator}
      onKeyDown={onKeyDown}
      onLeftArrowClick={handleClickLeftArrow}
      onMediaButtonClick={handleClickMediaButton}
      onMouseOut={handleMouseOut}
      onMouseOver={handleMouseOver}
      onRightArrowClick={handleClickRightArrow}
    />
  );
};

const CarouselUnControlled = React.forwardRef(CarouselUnControlledComponent) as <
  V extends string | unknown,
>(
  props: React.PropsWithChildren<ICarouselUnControlled<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => ReturnType<typeof CarouselUnControlledComponent>;

export { CarouselUnControlled };
