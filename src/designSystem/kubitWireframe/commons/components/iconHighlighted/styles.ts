import {
  IconHighlightedSizeType,
  IconHighlightedStylesType,
} from '@/components/iconHighlighted/types';
import { shadowAfterStyles, transformShadow } from '@/designSystem/kubitWireframe/utils/wireframe';

import { BORDERS, RADIUS, SIZES, SPACINGS } from '../../foundations';
import { IconHighlightedVariantType } from './variants';

export const getIconHighlightedStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): IconHighlightedStylesType<IconHighlightedVariantType> => {
  return {
    [IconHighlightedVariantType.ROUND]: {
      [IconHighlightedSizeType.EXTRA_SMALL]: {
        container: {
          width: SIZES.size_250,
          height: SIZES.size_250,
          border_radius: RADIUS.radius_100,
          border_color: COLORS.NEUTRAL.color_neutral_border_50,
          border_style: 'solid',
          border_width: BORDERS.border_50,
          ...transformShadow(RADIUS.radius_300),
          ...shadowAfterStyles(
            RADIUS.radius_300,
            COLORS.BRAND.color_brand_bg_50,
            SPACINGS.spacing_50
          ),
        },
        icon: {
          width: SIZES.size_150,
          height: SIZES.size_150,
        },
      },
      [IconHighlightedSizeType.SMALL]: {
        container: {
          width: SIZES.size_300,
          height: SIZES.size_300,
          border_radius: RADIUS.radius_100,
          border_color: COLORS.NEUTRAL.color_neutral_border_50,
          border_style: 'solid',
          border_width: BORDERS.border_50,
          ...transformShadow(RADIUS.radius_300),
          ...shadowAfterStyles(
            RADIUS.radius_300,
            COLORS.BRAND.color_brand_bg_50,
            SPACINGS.spacing_50
          ),
        },
        icon: {
          width: SIZES.size_250,
          height: SIZES.size_250,
        },
      },
      [IconHighlightedSizeType.MEDIUM]: {
        container: {
          width: SIZES.size_400,
          height: SIZES.size_400,
          border_radius: RADIUS.radius_100,
          border_color: COLORS.NEUTRAL.color_neutral_border_50,
          border_style: 'solid',
          border_width: BORDERS.border_50,
          ...transformShadow(RADIUS.radius_300),
          ...shadowAfterStyles(
            RADIUS.radius_300,
            COLORS.BRAND.color_brand_bg_50,
            SPACINGS.spacing_50
          ),
        },
        icon: {
          width: SIZES.size_300,
          height: SIZES.size_300,
        },
      },
      [IconHighlightedSizeType.LARGE]: {
        container: {
          width: SIZES.size_450,
          height: SIZES.size_450,
          border_radius: RADIUS.radius_100,
          border_color: COLORS.NEUTRAL.color_neutral_border_50,
          border_style: 'solid',
          border_width: BORDERS.border_50,
          ...transformShadow(RADIUS.radius_300),
          ...shadowAfterStyles(
            RADIUS.radius_300,
            COLORS.BRAND.color_brand_bg_50,
            SPACINGS.spacing_50
          ),
        },
        icon: {
          width: SIZES.size_300,
          height: SIZES.size_300,
        },
      },
      [IconHighlightedSizeType.EXTRA_LARGE]: {
        container: {
          width: SIZES.size_500,
          height: SIZES.size_500,
          border_radius: RADIUS.radius_100,
          border_color: COLORS.NEUTRAL.color_neutral_border_50,
          border_style: 'solid',
          border_width: BORDERS.border_50,
          ...transformShadow(RADIUS.radius_300),
          ...shadowAfterStyles(
            RADIUS.radius_300,
            COLORS.BRAND.color_brand_bg_50,
            SPACINGS.spacing_50
          ),
        },
        icon: {
          width: SIZES.size_300,
          height: SIZES.size_300,
        },
      },
    },
  };
};
