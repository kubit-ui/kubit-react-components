import { MediaProgressBarStylesType } from '@/components/mediaProgressBar';
import { DeviceBreakpointsType } from '@/types';

import { COLORS, RADIUS, SPACINGS } from '../../foundations';
import { MediaProgressBarVariantType } from './variants';

const commonProps = {
  container: {
    width: 'inherit',
    display: 'flex',
    gap: SPACINGS.spacing_100,
  },
  barContainer: {
    position: 'relative',
    width: '100%',
    height: SPACINGS.spacing_200,
    cursor: 'pointer',
    [DeviceBreakpointsType.TABLET]: {
      min_width: SPACINGS.spacing_100,
    },
    [DeviceBreakpointsType.MOBILE]: {
      min_width: SPACINGS.spacing_100,
    },
  },
  progressBar: {
    position: 'absolute',
    top: '40%',
    left: '0',
    width: '0',
    height: SPACINGS.spacing_100,
    border_radius: RADIUS.radius_100,
    background: COLORS.BRAND.color_brand_bg_50,
  },
  bullet: {
    width: SPACINGS.spacing_200,
    height: SPACINGS.spacing_200,
    background_color: COLORS.ACCENT.color_accent_default_bg_100,
    position: 'absolute',
    top: '50%',
    right: '0',
    border_radius: RADIUS.radius_100,
    transform: 'translate(50%, -50%)',
    cursor: 'grab',
  },
};

const commonBar = {
  position: 'absolute',
  top: '50%',
  left: '0',
  width: 'inherit',
  height: SPACINGS.spacing_100,
  border_radius: RADIUS.radius_50,
};

export const MEDIA_PROGRESS_BAR_STYLES: MediaProgressBarStylesType<MediaProgressBarVariantType> = {
  [MediaProgressBarVariantType.DEFAULT]: {
    ...commonProps,
    bar: {
      ...commonBar,
      background: COLORS.NEUTRAL.color_neutral_bg_100,
    },
  },
};
