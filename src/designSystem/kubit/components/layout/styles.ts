import { LayoutStylesType } from '@/components/layout/types';
import { DeviceBreakpointsType } from '@/types';

import { SPACINGS } from '../../foundations';
import { LayoutVariantType } from './variants';

export const LAYOUT_STYLES: LayoutStylesType<LayoutVariantType> = {
  [LayoutVariantType.DEFAULT]: {
    gridConfig: {
      [DeviceBreakpointsType.LARGE_DESKTOP]: {
        gap: SPACINGS.spacing_450,
        margin: 7.5,
        columns: 12,
      },
      [DeviceBreakpointsType.DESKTOP]: {
        gap: SPACINGS.spacing_450,
        margin: 7.5,
        columns: 12,
      },
      [DeviceBreakpointsType.TABLET]: {
        gap: SPACINGS.spacing_400,
        margin: 1.5,
        columns: 8,
      },
      [DeviceBreakpointsType.MOBILE]: {
        gap: SPACINGS.spacing_50,
        margin: 1,
        columns: 4,
      },
    },
    defaultColumnsConfig: {
      header: {
        [DeviceBreakpointsType.LARGE_DESKTOP]: 12,
        [DeviceBreakpointsType.DESKTOP]: 12,
        [DeviceBreakpointsType.TABLET]: 8,
        [DeviceBreakpointsType.MOBILE]: 4,
      },
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
  },
};
