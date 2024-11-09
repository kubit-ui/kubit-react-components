import React from 'react';

import { useId } from '@/hooks/useId/useId';

import { AriaLiveOptionType } from '../../types/ariaLiveOption/ariaLiveOption';
import { ElementOrIcon } from '../elementOrIcon/elementOrIcon';
import { PageControl } from '../pageControl/pageControl';
import { PageControlArrowControlType } from '../pageControl/types/pageControl';
import { PageControlAutomateUnControlled as PageControlAutomate } from '../pageControlAutomate/pageControlAutomateUnControlled';
import { ScreenReaderOnly } from '../screenReaderOnly/screenReaderOnly';
import {
  ArrowAndCarouselWrapperStyled,
  ArrowLeftIconContainer,
  ArrowRightIconContainer,
  CarouselContainerStyled,
  CarouselContentStyled,
  PageControlAutomateContainerStyled,
  PageControlContainerStyled,
  RootStyled,
} from './carousel.styled';
import { ExtraPaddingArrowStandAlone } from './components/extraPaddingArrowStandAlone';
import { ICarouselStandAlone } from './types/carousel';
import { buildScreenReaderText } from './utils/carousel.utils';

const CarouselStandAloneComponent = (
  {
    styles,
    carouselContainerRef,
    carouselContentRef,
    elements,
    numPages,
    centerMode,
    extraPadding,
    extraPaddingAsArrow = true,
    currentPage,
    onLeftArrowClick,
    onRightArrowClick,
    hasPagination,
    pageControlVariant,
    pageControlArrowsControlVariant,
    onKeyDown,
    dataTestId = 'carousel',
    displayArrowsOnCarousel,
    disableSwipe,
    allowModifySliceWidth,
    pageControlAutomateConfig,
    onIndicatorChange,
    onMediaButtonClick,
    onMouseOut,
    onMouseOver,
    playing,
    screenReaderText,
    ...props
  }: ICarouselStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const id = useId('carousel');
  const leftArrowDisabled = !props.circular && currentPage === 0;
  const rightArrowDisabled = !props.circular && currentPage === numPages - 1;
  const leftArrowControlPageControl: PageControlArrowControlType | undefined =
    displayArrowsOnCarousel
      ? undefined
      : {
          icon: props.leftArrow?.icon,
          ['aria-label']: props.leftArrow?.['aria-label'],
          disabled: leftArrowDisabled,
          onClick: onLeftArrowClick,
        };
  const rightArrowControlPageControl: PageControlArrowControlType | undefined =
    displayArrowsOnCarousel
      ? undefined
      : {
          icon: props.rightArrow?.icon,
          ['aria-label']: props.rightArrow?.['aria-label'],
          disabled: rightArrowDisabled,
          onClick: onRightArrowClick,
        };

  return (
    <RootStyled
      ref={ref}
      allowModifySliceWidth={allowModifySliceWidth}
      aria-label={props['aria-label']}
      aria-labelledby={props['aria-labelledby']}
      aria-roledescription="carousel"
      data-testid={dataTestId}
      styles={styles}
      onKeyDown={onKeyDown}
    >
      <ArrowAndCarouselWrapperStyled allowModifySliceWidth={allowModifySliceWidth} styles={styles}>
        {displayArrowsOnCarousel && numPages > 1 && (
          <ArrowLeftIconContainer data-disabled={leftArrowDisabled} styles={styles}>
            <ElementOrIcon
              aria-controls={id}
              customIconStyles={
                !leftArrowDisabled ? styles.leftArrowIcon : styles.leftArrowIconDisabled
              }
              disabled={leftArrowDisabled}
              {...props.leftArrow}
              onClick={onLeftArrowClick}
            />
          </ArrowLeftIconContainer>
        )}
        <CarouselContainerStyled
          ref={carouselContainerRef}
          data-testid={`${dataTestId}-container`}
          styles={styles}
          tabIndex={-1}
          onMouseOutCapture={onMouseOut}
          onMouseOverCapture={onMouseOver}
        >
          <CarouselContentStyled
            ref={carouselContentRef}
            aria-live={
              props['aria-live'] ?? (playing ? AriaLiveOptionType.OFF : AriaLiveOptionType.POLITE)
            }
            centerMode={centerMode}
            data-testid={`${dataTestId}-content`}
            disableSwipe={disableSwipe}
            id={id}
            styles={styles}
          >
            {elements}
          </CarouselContentStyled>
          <ExtraPaddingArrowStandAlone
            ariaControls={id}
            ariaLabel={props.leftArrow?.['aria-label']}
            dataTestId={`${dataTestId}-left-arrow`}
            extraPadding={extraPadding}
            extraPaddingAsArrow={extraPaddingAsArrow}
            styles={styles}
            onClick={onLeftArrowClick}
          />
          <ExtraPaddingArrowStandAlone
            right
            ariaControls={id}
            ariaLabel={props.rightArrow?.['aria-label']}
            dataTestId={`${dataTestId}-right-arrow`}
            extraPadding={extraPadding}
            extraPaddingAsArrow={extraPaddingAsArrow}
            styles={styles}
            onClick={onRightArrowClick}
          />
        </CarouselContainerStyled>
        {displayArrowsOnCarousel && numPages > 1 && (
          <ArrowRightIconContainer data-disabled={rightArrowDisabled} styles={styles}>
            <ElementOrIcon
              aria-controls={id}
              customIconStyles={
                !rightArrowDisabled ? styles.rightArrowIcon : styles.rightArrowIconDisabled
              }
              disabled={rightArrowDisabled}
              {...props.rightArrow}
              onClick={onRightArrowClick}
            />
          </ArrowRightIconContainer>
        )}
      </ArrowAndCarouselWrapperStyled>
      {hasPagination && pageControlArrowsControlVariant && pageControlVariant && numPages > 1 && (
        <PageControlContainerStyled styles={styles}>
          <PageControl
            arrowsControlVariant={pageControlArrowsControlVariant}
            currentPosition={currentPage}
            leftArrowControl={leftArrowControlPageControl}
            pages={numPages}
            rightArrowControl={rightArrowControlPageControl}
            variant={pageControlVariant}
          />
        </PageControlContainerStyled>
      )}
      {pageControlAutomateConfig && numPages > 1 && (
        <PageControlAutomateContainerStyled styles={styles}>
          <PageControlAutomate
            {...pageControlAutomateConfig}
            currentBar={currentPage}
            mediaProgressBar={{
              ...pageControlAutomateConfig.mediaProgressBar,
              barsNum: numPages,
              circular: props.circular,
              onBarChange: onIndicatorChange,
            }}
            playStop={{ ...pageControlAutomateConfig.playStop, onClick: onMediaButtonClick }}
            playing={playing}
          />
        </PageControlAutomateContainerStyled>
      )}
      <ScreenReaderOnly ariaLive={playing ? AriaLiveOptionType.OFF : AriaLiveOptionType.POLITE}>
        {buildScreenReaderText(currentPage, numPages, screenReaderText)}
      </ScreenReaderOnly>
    </RootStyled>
  );
};

export const CarouselStandAlone = React.forwardRef(CarouselStandAloneComponent);
