import { RADIUS } from '../../foundations/borders';
import { COLORS } from '../../foundations/colors';
import { SkeletonShapeVariant, SkeletonVariantType } from './variants';

export const SKELETON = {
  $dynamicValues: [
    '$skeletonWidth',
    '$skeletonHeight',
    '$skeletonBorderRadius',
    '$skeletonDuration',
  ],
  animation_delay: '1ms',
  animation_duration: '$skeletonDuration',
  animation_iteration_count: 'infinite',
  animation_timing_function: 'linear',
  background_size: '200% 100%',
  height: '$skeletonHeight',
  margin: '0',
  [SkeletonShapeVariant.CIRCLE]: {
    border_radius: `var(--skeletonborderradius, ${RADIUS.radius_circle})`,
  },
  [SkeletonShapeVariant.SQUARE]: {
    border_radius: `var(--skeletonborderradius, ${RADIUS.radius_50})`,
  },
  [SkeletonVariantType.ALTERNATIVE]: {
    background: `linear-gradient(90deg, ${COLORS.NEUTRAL.color_neutral_font_200} 0%, ${COLORS.NEUTRAL.color_neutral_font_200}00 45%, ${COLORS.NEUTRAL.color_neutral_font_200} 87%)`,
    background_size: '200% 100%',
  },
  [SkeletonVariantType.DEFAULT]: {
    background: `linear-gradient(90deg, ${COLORS.NEUTRAL.color_neutral_bg_200} 0%, ${COLORS.NEUTRAL.color_neutral_bg_200}00 45%, ${COLORS.NEUTRAL.color_neutral_bg_200} 87%)`,
    background_size: '200% 100%',
  },
  width: '$skeletonWidth',
};
