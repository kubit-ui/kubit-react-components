import {
  type ForwardedRef,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import { CarouselStandAlone } from './carouselStandAlone';
import { useCarousel } from './hooks/useCarousel';
import type { CarouselRefType, ICarousel } from './types/carousel';
import { buildScreenReaderOnly } from './utils/carousel.utils';

const CarouselComponent = (
  {
    additionalClasses,
    allowModifySliceWidth = false,
    autoFitContainer = false,
    centerExtremesWhenExtraPadding = false,
    centerMode = false,
    circular,
    defaultPage = 0,
    disabled = false,
    extraPadding,
    numElementsPerPage,
    numElementsToSlide,
    onePageAlign = 'center',
    onNumElementsPerPageChange,
    onNumPagesChange,
    onPageChange,
    screenReaderOnly,
    variant,
    ...props
  }: ICarousel,
  ref: ForwardedRef<CarouselRefType>,
) => {
  const [currentPage, setCurrentPage] = useState(defaultPage);
  const [numPages, setNumPages] = useState(0);

  const rootContainerRef = useRef<HTMLDivElement>(null);
  const viewerContainerRef = useRef<HTMLDivElement>(null);
  const contentContainerRef = useRef<HTMLDivElement>(null);

  const cssClasses = useClassName({
    additionalClassNames: additionalClasses,
    component: 'CAROUSEL',
    variant,
  });

  const handleNumPagesChange = useCallback(
    (newNumPages: number) => {
      setNumPages(newNumPages);
      onNumPagesChange?.(newNumPages);
    },
    [onNumPagesChange],
  );

  const handlePageChange = useCallback(
    (newCurrentPage: number) => {
      setCurrentPage(newCurrentPage);
      onPageChange?.(newCurrentPage);
    },
    [onPageChange],
  );

  // If numElementsPerPage is defined, it cannot be greater than the number of elements
  const _numElementsPerPage = numElementsPerPage
    ? Math.min(props.elements.length, numElementsPerPage)
    : numElementsPerPage;

  // allowModifySliceWidth is automatically set to false if numElementsPerPage is 0 or undefined or autoFitContainer
  const _allowModifySliceWidth =
    allowModifySliceWidth && !!numElementsPerPage && !autoFitContainer;

  const {
    allowShiftRef,
    changePage,
    currentPageRef,
    numElementsPerPageRef,
    numPagesRef,
  } = useCarousel({
    allowModifySliceWidth: _allowModifySliceWidth,
    autoFitContainer,
    centerExtremesWhenExtraPadding,
    centerMode,
    circular,
    contentContainerRef,
    defaultPage,
    disabled,
    elements: props.elements,
    extraPadding,
    numElementsPerPage: _numElementsPerPage,
    numElementsToSlide,
    onePageAlign,
    onNumElementsPerPageChange,
    onNumPagesChange: handleNumPagesChange,
    onPageChange: handlePageChange,
    rootContainerRef,
    viewerContainerRef,
  });

  useImperativeHandle(ref, () => {
    if (rootContainerRef.current) {
      rootContainerRef.current['changePage'] = changePage;
      rootContainerRef.current['allowShiftRef'] = allowShiftRef;
      rootContainerRef.current['currentPageRef'] = currentPageRef;
      rootContainerRef.current['numElementsPerPageRef'] = numElementsPerPageRef;
      rootContainerRef.current['numPagesRef'] = numPagesRef;
    }
    return rootContainerRef.current as CarouselRefType;
  }, [changePage]);

  const _screenReaderOnly = buildScreenReaderOnly({
    currentPage,
    numPages,
    screenReaderOnly,
  });

  return (
    <CarouselStandAlone
      ref={rootContainerRef}
      allowModifySliceWidth={_allowModifySliceWidth}
      centerMode={centerMode}
      contentContainerRef={contentContainerRef}
      cssClasses={cssClasses}
      disabled={disabled || numPages <= 1}
      screenReaderOnly={_screenReaderOnly}
      viewerContainerRef={viewerContainerRef}
      {...props}
    />
  );
};

export const Carousel = forwardRef(CarouselComponent);
