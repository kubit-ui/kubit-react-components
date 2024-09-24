import { MediaButtonSizeType } from '@/components/mediaButton/types/sizes';
import { DeviceBreakpointsType } from '@/types';
import { CommonStyleType, TypographyTypes } from '@/types/styles';

export type MediaButtonType = {
  variant?: string;
  color?: string;
  backgroundColor?: string;
  size?: { [key in DeviceBreakpointsType]?: MediaButtonSizeType };
};
export type SkeletonType = {
  width?: string;
  height?: string;
  variant?: string;
  shapeVariant?: string;
};

export type VideoStyleType = {
  progressBarVariant?: string;
  progressBarSize?: string;
  container?: CommonStyleType;
  videoContainer?: CommonStyleType;
  videoElement?: CommonStyleType;
  subtitles?: CommonStyleType &
    TypographyTypes & {
      padding_bottom?: string;
      additionalPaddingForSubtitles?: string;
    };
  screenIconContainer?: CommonStyleType;
  controlsContainer?: CommonStyleType;
  buttonsContainer?: CommonStyleType;
  screenPlayLoadingIcon?: MediaButtonType;
  buttonsBarPlayIcon?: MediaButtonType;
  buttonsBarVolumeIcon?: MediaButtonType;
  volumeBar?: CommonStyleType;
  videoDuration?: TypographyTypes;
  buttonsBarSubtitlesIcon?: MediaButtonType;
  buttonsBarFullScreenIcon?: MediaButtonType;
  buttonsBarFirstSubcontainer?: CommonStyleType;
  buttonsBarSecondSubcontainer?: CommonStyleType;
  bottomContainer?: CommonStyleType;
  link?: TypographyTypes;
  actionButton?: {
    size?: string;
    variant?: string;
  };
  videoSkeletonContainer?: CommonStyleType;
  videoSkeleton?: SkeletonType;
  buttonsSkeletonContainer?: CommonStyleType;
  buttonSkeleton?: SkeletonType;
  overlay?: CommonStyleType;
  tooltip?: {
    variant?: string;
  };
};

export type VideoStylesType<P extends string | number | symbol> = {
  [key in P]: VideoStyleType;
};
