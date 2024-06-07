import { MediaProgressBarStylesType } from '@/components/mediaProgressBar';
import { DeviceBreakpointsType } from '@/types';

import { BORDERS, COLORS, RADIUS, SPACINGS } from '../../foundations';
import { MediaProgressBarVariantType } from './variants';

const commonProps = {
  container: {
    display: 'flex',
  },
  barContainer: {
    display: 'flex',
    align_items: 'center',
    cursor: 'pointer',
    justify_content: 'center',
    width: SPACINGS.spacing_400,
    height: SPACINGS.spacing_400,
    filled: {
      width: SPACINGS.spacing_500,
    },
    [DeviceBreakpointsType.TABLET]: {
      width: SPACINGS.spacing_550,
      height: SPACINGS.spacing_550,
    },
    [DeviceBreakpointsType.MOBILE]: {
      width: SPACINGS.spacing_550,
      height: SPACINGS.spacing_550,
    },
  },
  progressBar: {
    top: '40%',
    left: '0',
    width: SPACINGS.spacing_150,
    height: SPACINGS.spacing_150,
    margin: SPACINGS.spacing_100,
    border_radius: RADIUS.radius_75,
    background: COLORS.NEUTRAL.color_neutral_bg_150,
  },
  bullet: {
    width: SPACINGS.spacing_400,
    height: SPACINGS.spacing_400,
    background_color: COLORS.ACCENT.color_accent_default_bg_100,
    position: 'absolute',
    top: '50%',
    right: '0',
    border_radius: RADIUS.radius_75,
    transform: 'translate(50%, -50%)',
    cursor: 'grab',
  },
};

const commonBar = {
  border_radius: RADIUS.radius_75,
  border_style: 'solid',
  border_width: BORDERS.border_50,
  width: SPACINGS.spacing_450,
  height: SPACINGS.spacing_300,
  display: 'flex',
  align_items: 'center',
};

export const MEDIA_PROGRESS_BAR_STYLES: MediaProgressBarStylesType<MediaProgressBarVariantType> = {
  [MediaProgressBarVariantType.DEFAULT]: {
    ...commonProps,
    bar: {
      ...commonBar,
      background: COLORS.NEUTRAL.color_neutral_bg_200,
      border_color: COLORS.BRAND.color_brand_border_50,
      filled: {
        padding: SPACINGS.spacing_100,
        width: SPACINGS.spacing_300,
        height: SPACINGS.spacing_300,
      },
    },
  },
};
