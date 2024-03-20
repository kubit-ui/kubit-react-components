import { OperativeLayoutStylesType } from '@/components/operativeLayout';
import { DeviceBreakpointsType } from '@/types/breakpoints';

import { COLORS, SPACINGS } from '../../foundations';
import { OperativeLayoutVariantType } from './variants';

export const OPERATIVE_LAYOUT_STYLES: OperativeLayoutStylesType<OperativeLayoutVariantType> = {
  [OperativeLayoutVariantType.DEFAULT]: {
    gridConfig: {
      [DeviceBreakpointsType.LARGE_DESKTOP]: {
        gap: SPACINGS.spacing_0,
        margin: 0,
        columns: 12,
      },
      [DeviceBreakpointsType.DESKTOP]: {
        gap: SPACINGS.spacing_0,
        margin: 0,
        columns: 12,
      },
      [DeviceBreakpointsType.TABLET]: {
        gap: SPACINGS.spacing_100,
        margin: 0,
        columns: 8,
      },
      [DeviceBreakpointsType.MOBILE]: {
        gap: SPACINGS.spacing_50,
        margin: 0,
        columns: 4,
      },
    },
    defaultColumnsConfig: {
      main: {
        [DeviceBreakpointsType.LARGE_DESKTOP]: 9,
        [DeviceBreakpointsType.DESKTOP]: 9,
        DESKTOP_FULL: 12,
        [DeviceBreakpointsType.TABLET]: 8,
        [DeviceBreakpointsType.MOBILE]: 4,
      },
      aside: {
        [DeviceBreakpointsType.LARGE_DESKTOP]: 3,
        [DeviceBreakpointsType.DESKTOP]: 3,
        [DeviceBreakpointsType.TABLET]: 8,
        [DeviceBreakpointsType.MOBILE]: 4,
      },
    },
    paddingRightGridItem: SPACINGS.spacing_100,
    paddingLeftGridItem: SPACINGS.spacing_100,
    mainContainerColor: COLORS.NEUTRAL.color_neutral_bg_100,
    asideContainerColor: COLORS.NEUTRAL.color_neutral_bg_100,
    maxWidthParentContainer: { [DeviceBreakpointsType.DESKTOP]: '90rem' },
  },
};
