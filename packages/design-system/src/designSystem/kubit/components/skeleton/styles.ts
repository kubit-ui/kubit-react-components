import { RADIUS } from '../../foundations/borders';
import { COLORS } from '../../foundations/colors';
import { SkeletonShapeVariant, SkeletonVariantType } from './variants';

export const SKELETON = {
  margin: '0',
  [SkeletonShapeVariant.CIRCLE]: {
    border_radius: RADIUS.radius_circle,
  },
  [SkeletonShapeVariant.SQUARE]: {
    border_radius: RADIUS.radius_50,
  },
  [SkeletonVariantType.ALTERNATIVE]: {
    background: `linear-gradient(90deg, ${COLORS.NEUTRAL.color_neutral_font_200} 0%, ${COLORS.NEUTRAL.color_neutral_font_200}00 45%, ${COLORS.NEUTRAL.color_neutral_font_200} 87%)`,
    background_size: '200% 100%',
  },
  [SkeletonVariantType.DEFAULT]: {
    background: `linear-gradient(90deg, ${COLORS.NEUTRAL.color_neutral_bg_200} 0%, ${COLORS.NEUTRAL.color_neutral_bg_200}00 45%, ${COLORS.NEUTRAL.color_neutral_bg_200} 87%)`,
    background_size: '200% 100%',
  },
};
