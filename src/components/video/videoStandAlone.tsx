import * as React from 'react';

import { useId } from '@/hooks';

import { ProgressBar } from '../progressBar';
import {
  LinkAndActionButton,
  PlayStopButton,
  ScreenButtons,
  SubtitleFullScreenButtons,
  Time,
  VideoSkeleton,
  Volume,
} from './components';
import { IVideoStandAlone } from './types';
import {
  ButtonsBarFirstSubcontainerStyled,
  ButtonsBarSecondSubontainerStyled,
  ButtonsContainerStyled,
  ContainerStyled,
  ControlsContainerStyled,
  OverlayStyled,
  VideoContainerStyled,
  VideoElement,
} from './video.styled';

const VIDEO_BASE_ID = 'video';

const VideoStandAloneComponent = (
  props: IVideoStandAlone,
  ref: React.ForwardedRef<HTMLDivElement>
): React.JSX.Element => {
  const BASE_ID = useId(VIDEO_BASE_ID);
  const controlsContainerId = `${BASE_ID}-controlsContainer`;

  const getPaddingBottomSubtitles = (): string => {
    //This padding must be pressent always
    const paddingBottom = parseFloat(props.styles.subtitles?.padding_bottom ?? '0');

    //This additional padding only should be present when controls container is showed
    const additionalPadding = parseFloat(
      props.styles.subtitles?.additionalPaddingForSubtitles ?? '0'
    );
    return `${paddingBottom + additionalPadding}rem`;
  };

  if (props.hasSkeleton) {
    return (
      <VideoSkeleton
        dataTestIdVideoSkeleton={props.dataTestIdVideoSkeleton}
        skeletonText={props.skeletonText}
        styles={props.styles}
      />
    );
  }

  return (
    <ContainerStyled ref={ref} data-testid={props.dataTestIdParentContainer} styles={props.styles}>
      <VideoContainerStyled ref={props.videoContainerRef} styles={props.styles}>
        {props.hasOverlay && (
          <OverlayStyled data-testid={props.dataTestIdOverlay} styles={props.styles} />
        )}
        <VideoElement
          ref={props.videoRef}
          controls={false}
          isFullScreen={props.fullScreen}
          paddingBottomSubtitles={getPaddingBottomSubtitles()}
          poster={props.posterUrl}
          styles={props.styles}
          width="100%"
          onCanPlay={props.onCanPlay}
          onClick={props.onTogglePlay as React.MouseEventHandler<HTMLVideoElement>}
          onLoadedMetadata={props.onLoadedMetadata}
          onPause={props.onVideoPause}
          onPlay={props.onVideoPlay}
          onTimeUpdate={props.onTimeUpdate}
        >
          <source src={props.videoSrc} type={props.videoType} />
          {props.subtitlesActivated && (
            <track
              default
              kind={props.trackKind}
              label={props.trackLabel}
              src={props.trackSrc}
              srcLang={props.trackSrcLang}
            />
          )}
        </VideoElement>
        {props.showScreenButtons && (
          <ScreenButtons
            handlePlayStopVideo={props.onTogglePlay as React.MouseEventHandler<HTMLButtonElement>}
            loading={props.loading}
            playing={props.playing}
            screenLoadingIcon={props.screenLoadingIcon}
            screenPlayIcon={props.screenPlayIcon}
            styles={props.styles}
          />
        )}
        {!props.loading && !props.hasOverlay && (
          <ControlsContainerStyled
            id={controlsContainerId}
            showControls={props.showControls}
            styles={props.styles}
          >
            <ProgressBar
              barAriaLabel={props.barAriaLabel}
              percentProgressCompleted={(props.currentTime / (props.duration || 1)) * 100}
              size={props.styles.progressBarSize}
              variant={props.styles.progressBarVariant}
              onChange={props.onProgressBarChange}
              onDragEnd={props.onProgressBarDragEnd}
              onDragStart={props.onProgressBarDragStart}
            />
            <ButtonsContainerStyled styles={props.styles}>
              <ButtonsBarFirstSubcontainerStyled styles={props.styles}>
                <PlayStopButton
                  buttonsBarPlayIcon={props.buttonsBarPlayIcon}
                  buttonsBarPlayIconToTransition={props.buttonsBarPlayIconToTransition}
                  buttonsBarPlayIconTooltip={props.buttonsBarPlayIconTooltip}
                  handlePlayStopVideo={
                    props.onTogglePlay as React.MouseEventHandler<HTMLButtonElement>
                  }
                  playing={props.playing}
                  styles={props.styles}
                />
                <Volume
                  buttonsBarVolumeIcon={props.buttonsBarVolumeIcon}
                  buttonsBarVolumeIconToTransition={props.buttonsBarVolumeIconToTransition}
                  buttonsBarVolumeIconTooltip={props.buttonsBarVolumeIconTooltip}
                  dataTestIdVolumeInput={props.dataTestIdVolumeInput}
                  styles={props.styles}
                  volume={props.volume}
                  volumeBarAriaLabel={props.volumeBarAriaLabel}
                  onVolumeButtonClick={props.onVolumeButtonClick}
                  onVolumeChange={props.onVolumeChange}
                />
                <Time
                  currentTime={props.currentTime}
                  duration={props.duration}
                  styles={props.styles}
                />
              </ButtonsBarFirstSubcontainerStyled>
              <ButtonsBarSecondSubontainerStyled styles={props.styles}>
                <SubtitleFullScreenButtons
                  buttonsBarFullScreenIcon={props.buttonsBarFullScreenIcon}
                  buttonsBarFullScreenIconToTransition={props.buttonsBarFullScreenIconToTransition}
                  buttonsBarFullScreenIconTooltip={props.buttonsBarFullScreenIconTooltip}
                  buttonsBarSubtitlesIcon={props.buttonsBarSubtitlesIcon}
                  buttonsBarSubtitlesIconToTransition={props.buttonsBarSubtitlesIconToTransition}
                  buttonsBarSubtitlesIconTooltip={props.buttonsBarSubtitlesIconTooltip}
                  fullScreen={props.fullScreen}
                  styles={props.styles}
                  subtitlesActivated={props.subtitlesActivated}
                  onFullScreenClick={props.onFullScreenClick}
                  onSubtitlesClick={props.onSubtitlesClick}
                />
              </ButtonsBarSecondSubontainerStyled>
            </ButtonsContainerStyled>
          </ControlsContainerStyled>
        )}
      </VideoContainerStyled>
      <LinkAndActionButton
        actionButton={props.actionButton}
        componentLink={props.componentLink}
        linkAndActionButtonAlignment={props.linkAndActionButtonAlignment}
        linkTarget={props.linkTarget}
        linkText={props.linkText}
        linkUrl={props.linkUrl}
        styles={props.styles}
        onLinkClick={props.onLinkClick}
      />
    </ContainerStyled>
  );
};

export const VideoStandAlone = React.forwardRef(VideoStandAloneComponent);
