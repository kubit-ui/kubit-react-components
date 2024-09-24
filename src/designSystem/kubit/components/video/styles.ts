import { MediaButtonSizeType } from '@/components/mediaButton/types/sizes';
import { VideoStylesType } from '@/components/video';
import { DeviceBreakpointsType } from '@/types';

import { COLORS, FONT_WEIGHT, HEADING, SPACINGS, Z_INDEX } from '../../foundations';
import { ButtonSizeType, ButtonVariantType } from '../button';
import { MediaButtonVariantType } from '../mediaButton';
import { SkeletonShapeVariant, SkeletonVariantType } from '../skeleton';
import { TextVariantType } from '../text';
import { ProgressBarSizeType, ProgressBarVariantType, TooltipVariantType } from '../variants';
import { VideoVariantType } from './variants';

export const VIDEO_STYLES: VideoStylesType<VideoVariantType> = {
  [VideoVariantType.REGULAR]: {
    progressBarVariant: ProgressBarVariantType.INTERACTIVE,
    progressBarSize: ProgressBarSizeType.MEDIUM,
    buttonsContainer: {
      padding: SPACINGS.spacing_50,
      background_color: COLORS.NEUTRAL.color_neutral_bg_100,
      justify_content: 'space-between',
      width: '100%',
      [DeviceBreakpointsType.MOBILE]: {
        flex_direction: 'column',
        row_gap: SPACINGS.spacing_100,
      },
    },
    subtitles: {
      padding_bottom: SPACINGS.spacing_100,
      padding: SPACINGS.spacing_100,
      color: COLORS.NEUTRAL.color_neutral_bg_100,
      background_color: COLORS.NEUTRAL.color_neutral_bg_100,
      font_weight: FONT_WEIGHT.font_weight_400,
      [DeviceBreakpointsType.DESKTOP]: {
        font_size: HEADING.H1[DeviceBreakpointsType.DESKTOP].font_size,
        line_height: HEADING.H1[DeviceBreakpointsType.DESKTOP].line_height,
      },
      [DeviceBreakpointsType.TABLET]: {
        font_size: HEADING.H1[DeviceBreakpointsType.DESKTOP].font_size,
        line_height: HEADING.H1[DeviceBreakpointsType.DESKTOP].line_height,
      },
      [DeviceBreakpointsType.MOBILE]: {
        font_size: HEADING.H1[DeviceBreakpointsType.MOBILE].font_size,
        line_height: HEADING.H1[DeviceBreakpointsType.MOBILE].line_height,
      },
    },
    screenIconContainer: {
      z_index: Z_INDEX.INTERN_3,
    },
    screenPlayLoadingIcon: {
      variant: MediaButtonVariantType.DEFAULT,
      color: COLORS.BRAND.color_brand_bg_50,
      backgroundColor: COLORS.NEUTRAL.color_neutral_bg_100,
      size: {
        [DeviceBreakpointsType.DESKTOP]: MediaButtonSizeType.LARGE,
        [DeviceBreakpointsType.TABLET]: MediaButtonSizeType.LARGE,
        [DeviceBreakpointsType.MOBILE]: MediaButtonSizeType.LARGE,
        [DeviceBreakpointsType.LARGE_DESKTOP]: MediaButtonSizeType.LARGE,
      },
    },
    buttonsBarPlayIcon: {
      variant: MediaButtonVariantType.DEFAULT,
      color: COLORS.NEUTRAL.color_neutral_bg_100,
      backgroundColor: COLORS.NEUTRAL.color_neutral_bg_100,
      size: {
        [DeviceBreakpointsType.DESKTOP]: MediaButtonSizeType.LARGE,
        [DeviceBreakpointsType.TABLET]: MediaButtonSizeType.LARGE,
        [DeviceBreakpointsType.MOBILE]: MediaButtonSizeType.LARGE,
        [DeviceBreakpointsType.LARGE_DESKTOP]: MediaButtonSizeType.LARGE,
      },
    },
    buttonsBarVolumeIcon: {
      variant: MediaButtonVariantType.DEFAULT,
      color: COLORS.NEUTRAL.color_neutral_bg_100,
      backgroundColor: COLORS.NEUTRAL.color_neutral_bg_100,
      size: {
        [DeviceBreakpointsType.DESKTOP]: MediaButtonSizeType.LARGE,
        [DeviceBreakpointsType.TABLET]: MediaButtonSizeType.LARGE,
        [DeviceBreakpointsType.MOBILE]: MediaButtonSizeType.LARGE,
        [DeviceBreakpointsType.LARGE_DESKTOP]: MediaButtonSizeType.LARGE,
      },
    },
    volumeBar: {
      accent_color: COLORS.NEUTRAL.color_neutral_bg_100,
      width: SPACINGS.spacing_100,
    },
    videoDuration: {
      font_variant: TextVariantType.DEFAULT,
      color: COLORS.NEUTRAL.color_neutral_bg_100,
      font_weight: FONT_WEIGHT.font_weight_400,
    },
    buttonsBarSubtitlesIcon: {
      variant: MediaButtonVariantType.DEFAULT,
      color: COLORS.NEUTRAL.color_neutral_bg_100,
      backgroundColor: COLORS.NEUTRAL.color_neutral_bg_100,
      size: {
        [DeviceBreakpointsType.DESKTOP]: MediaButtonSizeType.LARGE,
        [DeviceBreakpointsType.TABLET]: MediaButtonSizeType.LARGE,
        [DeviceBreakpointsType.MOBILE]: MediaButtonSizeType.LARGE,
        [DeviceBreakpointsType.LARGE_DESKTOP]: MediaButtonSizeType.LARGE,
      },
    },
    buttonsBarFullScreenIcon: {
      variant: MediaButtonVariantType.DEFAULT,
      color: COLORS.NEUTRAL.color_neutral_bg_100,
      backgroundColor: COLORS.NEUTRAL.color_neutral_bg_100,
      size: {
        [DeviceBreakpointsType.DESKTOP]: MediaButtonSizeType.LARGE,
        [DeviceBreakpointsType.TABLET]: MediaButtonSizeType.LARGE,
        [DeviceBreakpointsType.MOBILE]: MediaButtonSizeType.LARGE,
        [DeviceBreakpointsType.LARGE_DESKTOP]: MediaButtonSizeType.LARGE,
      },
    },
    buttonsBarFirstSubcontainer: {
      column_gap: SPACINGS.spacing_50,
    },
    buttonsBarSecondSubcontainer: {
      column_gap: SPACINGS.spacing_50,
    },
    bottomContainer: {
      padding: SPACINGS.spacing_50,
      column_gap: SPACINGS.spacing_50,
      background_color: COLORS.NEUTRAL.color_neutral_bg_100,
    },
    actionButton: {
      variant: ButtonVariantType.PRIMARY,
      size: ButtonSizeType.LARGE,
    },
    link: {
      font_variant: TextVariantType.DEFAULT,
      font_weight: FONT_WEIGHT.font_weight_400,
      color: COLORS.ACCENT.color_accent_default_bg_100,
    },
    videoSkeletonContainer: {
      [DeviceBreakpointsType.DESKTOP]: {
        width: '1200px',
        height: '675px',
      },
      [DeviceBreakpointsType.TABLET]: {
        width: '720px',
        height: '405px',
      },
      [DeviceBreakpointsType.MOBILE]: {
        width: '328px',
        height: '185px',
      },
    },
    buttonsSkeletonContainer: {
      padding: `${SPACINGS.spacing_50} ${SPACINGS.spacing_50} ${SPACINGS.spacing_50} ${SPACINGS.spacing_0}`,
      column_gap: SPACINGS.spacing_50,
      justify_content: 'flex-end',
      [DeviceBreakpointsType.MOBILE]: {
        padding: SPACINGS.spacing_50,
        justify_content: 'flex-start',
      },
    },
    videoSkeleton: {
      variant: SkeletonVariantType.DEFAULT,
      shapeVariant: SkeletonShapeVariant.SQUARE,
      width: '100%',
      height: '100%',
    },
    buttonSkeleton: {
      variant: SkeletonVariantType.DEFAULT,
      shapeVariant: SkeletonShapeVariant.SQUARE,
      width: SPACINGS.spacing_100,
      height: SPACINGS.spacing_100,
    },
    overlay: {
      position: 'absolute',
      top: '0',
      z_index: Z_INDEX.OVERLAY,
      width: '100%',
      height: '100%',
      opacity: '0.7',
      background_color: COLORS.ACCENT.color_accent_default_bg_100,
    },
    tooltip: {
      variant: TooltipVariantType.DEFAULT,
    },
  },
};
