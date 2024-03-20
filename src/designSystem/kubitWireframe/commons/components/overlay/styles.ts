import { OverlayStylesType } from '@/components/overlay/types';

import { shadowAfterStyles, transformShadow } from '../../../utils/wireframe';
import { RADIUS, SPACINGS, Z_INDEX } from '../../foundations';
import { OverlayVariantType } from './variants';

export const getOverlayStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): OverlayStylesType<OverlayVariantType> => {
  return {
    [OverlayVariantType.DEFAULT]: {
      container: {
        top: SPACINGS.spacing_0,
        left: SPACINGS.spacing_0,
        z_index: Z_INDEX.OVERLAY,
        width: `calc(${SPACINGS.spacing_100_vw} - ${SPACINGS.spacing_150})`,
        height: `calc(${SPACINGS.spacing_100_vh} - ${SPACINGS.spacing_150})`,
        background_color: COLORS.NEUTRAL.color_neutral_border_200,
        ...transformShadow(RADIUS.radius_00),
        ...shadowAfterStyles(RADIUS.radius_00, COLORS.BRAND.color_brand_bg_50, SPACINGS.spacing_50),
        position: 'fixed',
      },
    },
  };
};
