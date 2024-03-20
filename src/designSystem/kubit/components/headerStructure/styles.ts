// fundations
import { HeaderStructureStylesType } from '@/components/headerStructure/types';
import { CommonStyleType, DeviceBreakpointsType } from '@/types';

import { RADIUS, SPACINGS } from '../../foundations';
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
