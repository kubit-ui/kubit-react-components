// fundations
import { HeaderStylesType } from '@/components/header/types';
import { shadowAfterStyles, transformShadow } from '@/designSystem/kubitWireframe/utils/wireframe';
import { DeviceBreakpointsType } from '@/types';

import { BORDERS, RADIUS, SPACINGS } from '../../foundations';
import { HeaderVariantType } from './variants';

export const getHeaderStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): HeaderStylesType<HeaderVariantType> => {
  return {
    [HeaderVariantType.DEFAULT]: {
      container: {
        border_radius: RADIUS.radius_00,
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        border: `${BORDERS.border_50} solid ${COLORS.NEUTRAL.color_neutral_border_50}`,
        ...transformShadow(RADIUS.radius_00),
        ...shadowAfterStyles(RADIUS.radius_00, COLORS.BRAND.color_brand_bg_50, SPACINGS.spacing_50),
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
};
