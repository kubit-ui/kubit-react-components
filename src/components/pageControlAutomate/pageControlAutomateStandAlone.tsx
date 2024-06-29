import * as React from 'react';

import { MediaButton } from '@/components/mediaButton';
import { MediaProgressBar } from '@/components/mediaProgressBar';

import { MediaButtonSizeType } from '../mediaButton/types/sizes';
import {
  ArrowLeftWrapperStyled,
  ArrowRightWrapperStyled,
  IndicatorsContainerStyled,
  MediaButtonWrapperStyled,
  PageControlAutomateContainerStyled,
} from './pageControlAutomate.styled';
import { IPageControlAutomateStandAlone } from './types';

const dataTestIdIndicator = 'indicator';
const dataTestIdIndicatorProgress = 'indicatorProgress';

const PageControlAutomateStandAloneComponent = (
  props: IPageControlAutomateStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const showMediaButton = props.styles.mediaButton?.variant && props.styles.mediaButton?.iconSize;
  return (
    <PageControlAutomateContainerStyled ref={ref} styles={props.styles}>
      <MediaButtonWrapperStyled styles={props.styles}>
        {showMediaButton && (
          <MediaButton
            size={props.styles.mediaButton?.iconSize as MediaButtonSizeType}
            twisted={props.playing}
            variant={props.styles.mediaButton?.variant}
            {...props.playStop}
            onClick={props.onPlayStopClick}
          />
        )}
      </MediaButtonWrapperStyled>
      <ArrowLeftWrapperStyled styles={props.styles}>
        {showMediaButton && (
          <MediaButton
            disabled={!props.mediaProgressBar.circular && props.currentBar <= 0}
            size={props.styles.mediaButton?.iconSize as MediaButtonSizeType}
            variant={props.styles.mediaButton?.variant}
            {...props.leftArrow}
            onClick={props.onLeftArrowClick}
          />
        )}
      </ArrowLeftWrapperStyled>
      <IndicatorsContainerStyled styles={props.styles}>
        <MediaProgressBar
          clickableBars={true}
          currentBar={props.currentBar}
          dataTestIdBar={dataTestIdIndicator}
          dataTestIdProgressBar={dataTestIdIndicatorProgress}
          playingExternal={props.playing}
          variant={props.styles.mediaProgressBarVariant}
          {...props.mediaProgressBar}
        />
      </IndicatorsContainerStyled>
      <ArrowRightWrapperStyled styles={props.styles}>
        {showMediaButton && (
          <MediaButton
            disabled={
              !props.mediaProgressBar.circular &&
              props.currentBar >= props.mediaProgressBar.barsNum - 1
            }
            size={props.styles.mediaButton?.iconSize as MediaButtonSizeType}
            variant={props.styles.mediaButton?.variant}
            {...props.rightArrow}
            onClick={props.onRightArrowClick}
          />
        )}
      </ArrowRightWrapperStyled>
    </PageControlAutomateContainerStyled>
  );
};

export const PageControlAutomateStandAlone = React.forwardRef(
  PageControlAutomateStandAloneComponent
);
