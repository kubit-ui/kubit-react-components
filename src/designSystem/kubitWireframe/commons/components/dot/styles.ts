import { DotStylesType } from '@/components/dot/types';

import { shadowAfterStylesSpecificProps, transformShadow } from '../../../utils/wireframe';
import { BORDERS, RADIUS, SPACINGS } from '../../foundations';
import { DotSizeType, DotVariantType } from './variants';

export const getDotStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): DotStylesType<DotVariantType, DotSizeType> => {
  return {
    [DotVariantType.WITH_BORDER]: {
      container: {
        justify_content: 'center',
        align_items: 'center',
        display: 'inline-flex',
        background_color: COLORS.NEUTRAL.color_neutral_border_200,
        border_color: COLORS.NEUTRAL.color_neutral_border_50,
        border_style: 'solid',
        border_width: BORDERS.border_50,
        ...transformShadow(RADIUS.radius_300),
        ...shadowAfterStylesSpecificProps(
          RADIUS.radius_300,
          COLORS.BRAND.color_brand_bg_50,
          '2px',
          SPACINGS.spacing_200,
          SPACINGS.spacing_200
        ),
      },
    },
    [DotSizeType.SMALL]: {
      container: {
        border_radius: RADIUS.radius_300,
        border_width: BORDERS.border_100,
        height: SPACINGS.spacing_200,
        width: SPACINGS.spacing_200,
      },
    },
  };
};
