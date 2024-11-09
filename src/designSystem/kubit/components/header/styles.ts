// fundations
import { HeaderStylesType } from '@/components/header/types/headerTheme';
import { DeviceBreakpointsType } from '@/types/breakpoints/breakpoints';

import { RADIUS } from '../../foundations/borders';
import { SPACINGS } from '../../foundations/spacings';
import { HeaderVariantType } from './variants';

export const HEADER_STYLES: HeaderStylesType<HeaderVariantType> = {
  [HeaderVariantType.DEFAULT]: {
    container: {
      border_radius: RADIUS.radius_00,
    },
    breadcrumbs: {
      margin_top: SPACINGS.spacing_200,
    },
    content: {
      gap: SPACINGS.spacing_200,
      margin: `${SPACINGS.spacing_50} ${SPACINGS.spacing_0} ${SPACINGS.spacing_250} ${SPACINGS.spacing_0}`,
    },
    leftContent: {
      gap: SPACINGS.spacing_50,
      border_radius: RADIUS.radius_00,
      [DeviceBreakpointsType.MOBILE]: {
        width: '100%',
        max_width: '100%',
        gap: SPACINGS.spacing_150,
      },
      [DeviceBreakpointsType.TABLET]: {
        width: '100%',
        max_width: '100%',
        gap: SPACINGS.spacing_150,
      },
    },
    rightContent: {
      gap: SPACINGS.spacing_50,
      border_radius: RADIUS.radius_00,
      [DeviceBreakpointsType.MOBILE]: {
        gap: SPACINGS.spacing_150,
      },
      [DeviceBreakpointsType.TABLET]: {
        gap: SPACINGS.spacing_150,
      },
    },
  },
};
