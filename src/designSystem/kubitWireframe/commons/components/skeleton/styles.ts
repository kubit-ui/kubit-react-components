import { SkeletonStylesType } from '@/components/skeleton/types/skeletonTheme';

import { shadowAfterStyles, transformShadow } from '../../../utils/wireframe';
import { BORDERS, RADIUS } from '../../foundations';
import { SkeletonShapeVariant, SkeletonVariantType } from './variants';

export const getSkeletonStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): SkeletonStylesType<SkeletonShapeVariant, SkeletonVariantType> => {
  return {
    [SkeletonShapeVariant.SQUARE]: {
      [SkeletonVariantType.DEFAULT]: {
        skeleton: {
          background_size: '200% 100%',
          border_radius: RADIUS.radius_100,
          border_width: BORDERS.border_100,
          border_color: COLORS.NEUTRAL.color_neutral_border_50,
          border_style: 'solid',
          background_color: COLORS.NEUTRAL.color_neutral_bg_250,
          ...transformShadow(RADIUS.radius_300),
          ...shadowAfterStyles(RADIUS.radius_300, COLORS.BRAND.color_brand_bg_50, '2px'),
          background: `linear-gradient(90deg, ${COLORS.SECONDARY.color_secondary_bg_150} 0%, ${COLORS.SECONDARY.color_secondary_bg_150}00 45%, ${COLORS.SECONDARY.color_secondary_bg_150} 87%)`,
        },
      },
    },
    [SkeletonShapeVariant.CIRCLE]: {
      [SkeletonVariantType.DEFAULT]: {
        skeleton: {
          background_size: '200% 100%',
          border_radius: '50%',
          border_width: BORDERS.border_100,
          border_color: COLORS.NEUTRAL.color_neutral_border_50,
          border_style: 'solid',
          background_color: COLORS.NEUTRAL.color_neutral_bg_250,
          ...transformShadow('50%'),
          ...shadowAfterStyles('50%', COLORS.BRAND.color_brand_bg_50, '2px'),
          background: `linear-gradient(90deg, ${COLORS.SECONDARY.color_secondary_bg_150} 0%, ${COLORS.SECONDARY.color_secondary_bg_150}00 45%, ${COLORS.SECONDARY.color_secondary_bg_150} 87%)`,
        },
      },
    },
  };
};
