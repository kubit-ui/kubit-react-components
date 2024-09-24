import styled, { css } from 'styled-components';

import { getStyles } from '@/utils/getStyles/getStyles';

import { LinkAndActionButtonAlignment, VideoStyleType } from './types';

type VideoPropsStyleType = {
  styles: VideoStyleType;
};
type VideoContainerPropsStyleType = VideoPropsStyleType & { paddingBottomSubtitles: string };

export const ContainerStyled = styled.div<VideoPropsStyleType>`
  ${({ styles }) => getStyles(styles?.container)}
`;

export const VideoContainerStyled = styled.div<VideoPropsStyleType>`
  ${({ styles }) => getStyles(styles?.videoContainer)}
`;

export const VideoElement = styled.video<VideoContainerPropsStyleType & { isFullScreen: boolean }>`
  // Allow to set aspect radio to 16:9
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: ${({ isFullScreen }) => (isFullScreen ? 'content' : 'fill')};
  ${({ styles }) => getStyles(styles?.videoElement)};
  //Style text subtitles
  ::cue {
    ${({
      styles,
      theme: {
        MEDIA_QUERIES: { onlyDesktop, onlyTablet, onlyMobile },
      },
    }) => css`
      ${onlyDesktop} {
        color: ${styles?.subtitles?.color};
        font-size: ${styles?.subtitles?.DESKTOP?.font_size};
        line-height: ${styles?.subtitles?.DESKTOP?.line_height};
        font-weight: ${styles?.subtitles?.font_weight};
        background-color: ${styles?.subtitles?.background_color};
      }
      ${onlyTablet} {
        color: ${styles?.subtitles?.color};
        font-size: ${styles?.subtitles?.TABLET?.font_size};
        line-height: ${styles?.subtitles?.TABLET?.line_height};
        font-weight: ${styles?.subtitles?.font_weight};
        background-color: ${styles?.subtitles?.background_color};
        margin-bottom: ${styles?.subtitles?.margin_bottom};
      }
      ${onlyMobile} {
        color: ${styles?.subtitles?.color};
        font-size: ${styles?.subtitles?.MOBILE?.font_size};
        line-height: ${styles?.subtitles?.MOBILE?.line_height};
        font-weight: ${styles?.subtitles?.font_weight};
        background-color: ${styles?.subtitles?.background_color};
        margin-bottom: ${styles?.subtitles?.margin_bottom};
      }
    `};
  }
  ::-webkit-media-text-track-display {
    padding-bottom: ${({ paddingBottomSubtitles }) => paddingBottomSubtitles};
  }
  // Safari: get margins/paddings for subtitles containers
  ::-webkit-media-text-track-container {
    padding-bottom: ${({ paddingBottomSubtitles }) => paddingBottomSubtitles};
  }
  //Safari. If "::cue" doesnt work, use this
  /* ::-webkit-media-text-track-display-backdrop {
    ${({
    styles,
    theme: {
      MEDIA_QUERIES: { onlyDesktop, onlyTablet, onlyMobile },
    },
  }) => css`
    ${onlyDesktop} {
      color: ${styles?.subtitles?.color};
      font-size: ${styles?.subtitles?.DESKTOP?.font_size};
      line-height: ${styles?.subtitles?.DESKTOP?.line_height};
      font-weight: ${styles?.subtitles?.font_weight};
      background-color: ${styles?.subtitles?.background_color};
    }
    ${onlyTablet} {
      color: ${styles?.subtitles?.color};
      font-size: ${styles?.subtitles?.TABLET?.font_size};
      line-height: ${styles?.subtitles?.TABLET?.line_height};
      font-weight: ${styles?.subtitles?.font_weight};
      background-color: ${styles?.subtitles?.background_color};
      margin-bottom: ${styles?.subtitles?.margin_bottom};
    }
    ${onlyMobile} {
      color: ${styles?.subtitles?.color};
      font-size: ${styles?.subtitles?.MOBILE?.font_size};
      line-height: ${styles?.subtitles?.MOBILE?.line_height};
      font-weight: ${styles?.subtitles?.font_weight};
      background-color: ${styles?.subtitles?.background_color};
      margin-bottom: ${styles?.subtitles?.margin_bottom};
    }
  `};
  } */
`;

export const ScreenIconContainerStyled = styled.div<VideoPropsStyleType>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${({ styles }) => getStyles(styles?.screenIconContainer)}
`;

export const ControlsContainerStyled = styled.div<VideoPropsStyleType & { showControls: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
  ${({ styles }) => getStyles(styles?.controlsContainer)}
  opacity: ${({ showControls }) => (!showControls ? '0' : undefined)};
`;

export const ButtonsContainerStyled = styled.div<VideoPropsStyleType>`
  display: flex;
  ${({ styles }) => getStyles(styles?.buttonsContainer)}
`;

export const VolumeContainerStyled = styled.input<VideoPropsStyleType>`
  ${({ styles }) => getStyles(styles?.volumeBar)}
`;

export const ButtonsBarFirstSubcontainerStyled = styled.div<VideoPropsStyleType>`
  display: flex;
  ${({ styles }) => getStyles(styles?.buttonsBarFirstSubcontainer)}
`;

export const ButtonsBarSecondSubontainerStyled = styled.div<VideoPropsStyleType>`
  display: flex;
  ${({ styles }) => getStyles(styles?.buttonsBarSecondSubcontainer)}
`;

export const BottomContainerStyled = styled.div<
  VideoPropsStyleType & { linkAndActionButtonAlignment?: LinkAndActionButtonAlignment }
>`
  display: flex;
  justify-content: ${({ linkAndActionButtonAlignment }) =>
    linkAndActionButtonAlignment ?? 'flex-end'};
  width: 100%;
  ${({ styles }) => getStyles(styles?.bottomContainer)}
`;

export const VideoSkeletonContainerStyled = styled.div<VideoPropsStyleType>`
  ${({ styles }) => getStyles(styles?.videoSkeletonContainer)}
`;

export const ButtonsSkeletonContainerStyled = styled.div<VideoPropsStyleType>`
  display: flex;
  ${({ styles }) => getStyles(styles?.buttonsSkeletonContainer)}
`;

export const OverlayStyled = styled.div<VideoPropsStyleType>`
  ${({ styles }) => getStyles(styles?.overlay)}
`;
