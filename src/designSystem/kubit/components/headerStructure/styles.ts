// fundations
import { HeaderStructureStylesType } from '@/components/headerStructure/types/headerStructureTheme';
import { DeviceBreakpointsType } from '@/types/breakpoints/breakpoints';
import { CommonStyleType } from '@/types/styles/commonStyle';

import { RADIUS } from '../../foundations/borders';
import { SPACINGS } from '../../foundations/spacings';
import { HeaderStructureVariantType } from './variants';

const leftCenterRightContentCommonProps: CommonStyleType = {
  gap: SPACINGS.spacing_50,
  [DeviceBreakpointsType.MOBILE]: {
    gap: SPACINGS.spacing_150,
  },
  [DeviceBreakpointsType.TABLET]: {
    gap: SPACINGS.spacing_150,
  },
};

export const HEADER_STRUCTURE_STYLES: HeaderStructureStylesType<HeaderStructureVariantType> = {
  [HeaderStructureVariantType.DEFAULT]: {
    container: {
      border_radius: RADIUS.radius_00,
    },
    breadcrumbs: {
      margin_bottom: SPACINGS.spacing_150,
    },
    content: {
      gap: SPACINGS.spacing_250,
    },
    leftContent: {
      ...leftCenterRightContentCommonProps,
    },
    centerContent: {
      ...leftCenterRightContentCommonProps,
    },
    rightContent: {
      ...leftCenterRightContentCommonProps,
    },
  },
};
