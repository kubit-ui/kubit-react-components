import { SkeletonStylesType } from '@/components/skeleton/types/skeletonTheme';

import { RADIUS } from '../../foundations/borders';
import { COLORS } from '../../foundations/colors';
import { SkeletonShapeVariant, SkeletonVariantType } from './variants';

export const SKELETON_STYLES: SkeletonStylesType<SkeletonShapeVariant, SkeletonVariantType> = {
  [SkeletonShapeVariant.SQUARE]: {
    [SkeletonVariantType.DEFAULT]: {
      skeleton: {
        background_size: '200% 100%',
        border_radius: RADIUS.radius_50,
        background: `linear-gradient(90deg, ${COLORS.NEUTRAL.color_neutral_font_200} 0%, ${COLORS.NEUTRAL.color_neutral_font_200}00 45%, ${COLORS.NEUTRAL.color_neutral_font_200} 87%)`,
      },
    },
    [SkeletonVariantType.ALTERNATIVE]: {
      skeleton: {
        background_size: '200% 100%',
        border_radius: RADIUS.radius_50,
        background: `linear-gradient(90deg, ${COLORS.NEUTRAL.color_neutral_bg_200} 0%, ${COLORS.NEUTRAL.color_neutral_bg_200}00 45%, ${COLORS.NEUTRAL.color_neutral_bg_200} 87%)`,
      },
    },
  },
  [SkeletonShapeVariant.CIRCLE]: {
    [SkeletonVariantType.DEFAULT]: {
      skeleton: {
        background_size: '200% 100%',
        border_radius: RADIUS.radius_circle,
        background: `linear-gradient(90deg, ${COLORS.NEUTRAL.color_neutral_font_200} 0%, ${COLORS.NEUTRAL.color_neutral_font_200}00 45%, ${COLORS.NEUTRAL.color_neutral_font_200} 87%)`,
      },
    },
    [SkeletonVariantType.ALTERNATIVE]: {
      skeleton: {
        background_size: '200% 100%',
        border_radius: RADIUS.radius_circle,
        background: `linear-gradient(90deg, ${COLORS.NEUTRAL.color_neutral_bg_200} 0%, ${COLORS.NEUTRAL.color_neutral_bg_200}00 45%, ${COLORS.NEUTRAL.color_neutral_bg_200} 87%)`,
      },
    },
  },
};
