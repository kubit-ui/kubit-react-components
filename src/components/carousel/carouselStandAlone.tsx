/* eslint-disable complexity */
import * as React from 'react';

import { ElementOrIcon } from '@/components/elementOrIcon';
import { PageControl } from '@/components/pageControl';
import { useId } from '@/hooks';
import { AriaLiveOptionType } from '@/types';

import { PageControlArrowControlType } from '../pageControl/types';
import { PageControlAutomate } from '../pageControlAutomate';
import { ScreenReaderOnly } from '../screenReaderOnly';
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
import { ExtraPaddingArrowStandAlone } from './components';
import { ICarouselStandAlone } from './types';
import { buildScreenReaderText } from './utils';

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
    dataTestId = 'dataTestIdCarousel',
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
      aria-labelledby={props['aria-labelledby']}
      aria-roledescription="carousel"
      data-testid={`${dataTestId}Wrapper`}
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
              dataTestId={`${dataTestId}LeftArrow`}
              disabled={leftArrowDisabled}
              {...props.leftArrow}
              onClick={onLeftArrowClick}
            />
          </ArrowLeftIconContainer>
        )}
        <CarouselContainerStyled
          ref={carouselContainerRef}
          data-testid={`${dataTestId}Container`}
          styles={styles}
          tabIndex={-1}
          onMouseOutCapture={onMouseOut}
          onMouseOverCapture={onMouseOver}
        >
          <CarouselContentStyled
            ref={carouselContentRef}
            aria-live={playing ? AriaLiveOptionType.OFF : AriaLiveOptionType.POLITE}
            centerMode={centerMode}
            data-testid={`${dataTestId}Content`}
            disableSwipe={disableSwipe}
            id={id}
            styles={styles}
          >
            {elements}
          </CarouselContentStyled>
          <ExtraPaddingArrowStandAlone
            ariaControls={id}
            ariaLabel={props.leftArrow?.['aria-label']}
            dataTestId={`${dataTestId}LeftArrow`}
            extraPadding={extraPadding}
            extraPaddingAsArrow={extraPaddingAsArrow}
            styles={styles}
            onClick={onLeftArrowClick}
          />
          <ExtraPaddingArrowStandAlone
            right
            ariaControls={id}
            ariaLabel={props.rightArrow?.['aria-label']}
            dataTestId={`${dataTestId}RightArrow`}
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
              dataTestId={`${dataTestId}RightArrow`}
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
            dataTestId={`${dataTestId}PageControl`}
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
      <ScreenReaderOnly
        ariaLive={playing ? AriaLiveOptionType.OFF : AriaLiveOptionType.POLITE}
        dataTestId={`${dataTestId}CarouselScreenReader`}
      >
        {buildScreenReaderText(currentPage, numPages, screenReaderText)}
      </ScreenReaderOnly>
    </RootStyled>
  );
};

export const CarouselStandAlone = React.forwardRef(CarouselStandAloneComponent);
