// fundations
// types
import { HeaderStylesType } from '@/components/header/types';
import { DeviceBreakpointsType } from '@/types';

import { COLORS, RADIUS, SPACINGS } from '../../foundations';
import { TopbarVariantType } from './variants';

const commonProps = {
  container: {
    background_color: COLORS.SECONDARY.color_secondary_bg_50,
    border_radius: RADIUS.radius_00,
  },
  breadcrumbs: {
    margin_top: SPACINGS.spacing_700,
  },
  content: {
    gap: SPACINGS.spacing_0,
  },
  leftContent: {
    gap: SPACINGS.spacing_50,
    [DeviceBreakpointsType.MOBILE]: {
      gap: SPACINGS.spacing_300,
    },
    [DeviceBreakpointsType.TABLET]: {
      gap: SPACINGS.spacing_300,
    },
  },
  rightContent: {
    gap: SPACINGS.spacing_50,
    [DeviceBreakpointsType.MOBILE]: {
      gap: SPACINGS.spacing_300,
    },
    [DeviceBreakpointsType.TABLET]: {
      gap: SPACINGS.spacing_300,
    },
  },
};

export const TOPBAR_STYLES: HeaderStylesType<TopbarVariantType> = {
  [TopbarVariantType.DEFAULT]: {
    ...commonProps,
  },
  [TopbarVariantType.SECONDARY]: {
    ...commonProps,
    container: {
      background_color: COLORS.NEUTRAL.color_neutral_bg_250,
      border_radius: RADIUS.radius_00,
    },
  },
};
