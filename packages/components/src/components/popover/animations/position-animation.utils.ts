/**
 * Helper functions for applying position-based CSS animations
 */
import type { BodyDirection } from '../utils/placement.utils';

/**
 * Map of position keys to their corresponding CSS animation class names
 */
const POSITION_ANIMATION_MAP: Record<string, string> = {
  bottom: 'bottom',
  'bottom-end': 'bottom-end',
  'bottom-start': 'bottom-start',
  center: 'center',
  left: 'left',
  'left-end': 'left-end',
  'left-start': 'left-start',
  right: 'right',
  'right-end': 'right-end',
  'right-start': 'right-start',
  top: 'top',
  'top-end': 'top-end',
  'top-start': 'top-start',
} as const;

/**
 * Gets the appropriate CSS animation class name for a given position and animation state
 *
 * @param placement - The placement/position of the popover
 * @param isClosing - Whether the popover is in closing state (true) or opening state (false)
 * @returns The CSS class name for the animation
 *
 * @example
 * ```typescript
 * // For opening animation at top position
 * const className = getPositionAnimationClass('top', false);
 * // Returns: 'popover-animate popover-enter-top'
 *
 * // For closing animation at bottom-start position
 * const className = getPositionAnimationClass('bottom-start', true);
 * // Returns: 'popover-animate popover-exit-bottom-start'
 *
 * // When no placement is provided, uses center as fallback
 * const className = getPositionAnimationClass(undefined, false);
 * // Returns: 'popover-animate popover-enter-center'
 * ```
 */
export const getPositionAnimationClass = (
  placement?: BodyDirection | string,
  isClosing: boolean = false,
): string => {
  if (!placement) {
    const animationType = isClosing ? 'exit' : 'enter';
    return `popover-animate popover-${animationType}-center`;
  }

  // Map the placement to a normalized key
  const normalizedPlacement = POSITION_ANIMATION_MAP[placement] || 'center';

  // Determine animation type based on state
  const animationType = isClosing ? 'exit' : 'enter';

  // Build the complete class name
  return `popover-animate popover-${animationType}-${normalizedPlacement}`;
};

/**
 * Gets just the animation name (without the base popover-animate class)
 * Useful for applying animations programmatically via the animation-name CSS property
 *
 * @param placement - The placement/position of the popover
 * @param isClosing - Whether the popover is in closing state
 * @returns The animation name without class prefix
 *
 * @example
 * ```typescript
 * const animationName = getPositionAnimationName('center', false);
 * // Returns: 'popover-enter-center'
 *
 * // Can be used in style objects:
 * const styles = {
 *   animationName: getPositionAnimationName('center', false),
 *   animationDuration: '200ms',
 *   animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
 * };
 * ```
 */
export const getPositionAnimationName = (
  placement?: BodyDirection | string,
  isClosing: boolean = false,
): string => {
  const fullClass = getPositionAnimationClass(placement, isClosing);

  // Extract just the animation name part
  const parts = fullClass.split(' ');
  return (
    parts.find(
      (part) =>
        part.startsWith('popover-enter-') || part.startsWith('popover-exit-'),
    ) || 'popover-enter-center'
  );
};

/**
 * Gets CSS properties object for applying position-based animations via inline styles
 * This is useful when you want to apply animations programmatically without CSS classes
 *
 * @param placement - The placement/position of the popover
 * @param isClosing - Whether the popover is in closing state
 * @param duration - Animation duration in milliseconds (default: 200)
 * @param timingFunction - CSS timing function (default: cubic-bezier(0.16, 1, 0.3, 1))
 * @returns CSS properties object
 *
 * @example
 * ```typescript
 * const animationStyles = getPositionAnimationStyles('top', false, 300);
 * // Returns: {
 * //   animationName: 'popover-enter-top',
 * //   animationDuration: '300ms',
 * //   animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
 * //   animationFillMode: 'forwards'
 * // }
 *
 * // Apply to element:
 * <div style={animationStyles}>Content</div>
 * ```
 */
export const getPositionAnimationStyles = (
  placement?: BodyDirection | string,
  isClosing: boolean = false,
  duration: number = 200,
  timingFunction: string = 'cubic-bezier(0.16, 1, 0.3, 1)',
): React.CSSProperties => {
  const animationName = getPositionAnimationName(placement, isClosing);

  return {
    animationDuration: `${duration}ms`,
    animationFillMode: 'forwards',
    animationName,
    animationTimingFunction: timingFunction,
  };
};

/**
 * Utility to check if a given placement has a specific animation defined
 *
 * @param placement - The placement to check
 * @returns Whether the placement has a specific animation
 */
export const hasPositionAnimation = (placement?: string): boolean => {
  if (!placement) {
    return false;
  }
  return placement in POSITION_ANIMATION_MAP;
};

/**
 * Gets all available position animation class names
 * Useful for debugging or documentation purposes
 *
 * @returns Object containing all animation class combinations
 */
export const getAllPositionAnimationClasses = (): Record<
  string,
  { enter: string; exit: string }
> => {
  const result: Record<string, { enter: string; exit: string }> = {};

  Object.keys(POSITION_ANIMATION_MAP).forEach((placement) => {
    const normalizedPlacement = POSITION_ANIMATION_MAP[placement] || 'center';
    result[placement] = {
      enter: `popover-animate popover-enter-${normalizedPlacement}`,
      exit: `popover-animate popover-exit-${normalizedPlacement}`,
    };
  });

  return result;
};
