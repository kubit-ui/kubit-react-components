import { convertDurationToNumber } from '@/lib/hooks/useSwipeDown/utils/convertDurationToNumber';

import {
  type ExtendedAnimationConfig,
  type InternalAnimationConfig,
} from '../types/animation';

/**
 * Transform origin configuration for each placement direction
 * Used to determine the appropriate transform origin for animations based on placement
 */
export const PLACEMENT_TRANSFORM_ORIGINS = {
  bottom: 'center bottom',
  'bottom-end': 'right bottom',
  'bottom-start': 'left bottom',
  center: 'center center',
  left: 'left center',
  'left-end': 'left bottom',
  'left-start': 'left top',
  right: 'right center',
  'right-end': 'right bottom',
  'right-start': 'right top',
  top: 'center top',
  'top-end': 'right top',
  'top-start': 'left top',
} as const;

/**
 * Helper function to resolve animation configuration
 * Determines which config to use based on whether we have separate enter/exit configs
 */
export const resolveAnimationConfig = (
  animationConfig: InternalAnimationConfig | ExtendedAnimationConfig,
  closing: boolean,
): InternalAnimationConfig => {
  if ('enter' in animationConfig && 'exit' in animationConfig) {
    return closing ? animationConfig.exit : animationConfig.enter;
  }

  return animationConfig as InternalAnimationConfig;
};

/**
 * Helper function to get transform origin with fallback
 */
export const getTransformOrigin = (
  config: InternalAnimationConfig,
  fallback: string = PLACEMENT_TRANSFORM_ORIGINS.center,
): string => {
  return config.transformOrigin && config.transformOrigin !== ''
    ? config.transformOrigin
    : fallback;
};

/**
 * Helper function to get opacity values for animation type
 *
 * @param config - The popover animation configuration
 * @param isEnter - Whether this is an enter animation (true) or exit animation (false)
 * @returns Object with start and end opacity values
 */
export const getAnimationOpacities = (
  config: InternalAnimationConfig,
  isEnter: boolean,
): { end: number; start: number } => ({
  end: isEnter ? config.opacityEnd : config.opacityStart,
  start: isEnter ? config.opacityStart : config.opacityEnd,
});

/**
 * Validate animation configuration
 *
 * @param config - The popover animation configuration to validate
 * @returns true if the configuration is valid, false otherwise
 */
export const validateAnimationConfig = (
  config: InternalAnimationConfig,
): boolean => {
  // Convert duration strings to numeric values for validation
  const durationMs = convertDurationToNumber(config.duration);
  const delayMs = convertDurationToNumber(config.delay);

  return (
    durationMs > 0 &&
    delayMs >= 0 &&
    config.iterationCount > 0 &&
    config.opacityStart >= 0 &&
    config.opacityStart <= 1 &&
    config.opacityEnd >= 0 &&
    config.opacityEnd <= 1 &&
    config.scaleStart > 0
  );
};

// ================================
// TRANSFORM UTILITIES
// ================================

export type AnimationDirection = 'up' | 'down' | 'left' | 'right' | 'fade';

/**
 * Check if animation config uses default transform values (no scaling or rotation)
 *
 * @param config - The popover animation configuration
 * @returns true if the config uses default transform values
 */
export const isDefaultTransforms = (
  config: InternalAnimationConfig,
): boolean => {
  return config.scaleStart === 1 && config.animationRotationInDeg === 0;
};

/**
 * Generate slide distance value based on configuration
 *
 * @param config - The popover animation configuration
 * @returns The distance value as a string (either percentage or pixels)
 */
export const getSlideDistance = (config: InternalAnimationConfig): string => {
  return config.animationDistanceInPx === 0
    ? '100%'
    : `${config.animationDistanceInPx}px`;
};

/**
 * Transform configurations for different animation directions
 * Used to generate appropriate CSS transforms for slide animations
 */
export const TRANSFORM_CONFIGURATIONS = {
  down: {
    axis: 'Y',
    enterFrom: (distance: string) => `translateY(-${distance})`,
    exitTo: (distance: string) => `translateY(${distance})`,
    neutral: 'translateY(0)',
  },
  fade: {
    axis: null,
    enterFrom: () => '',
    exitTo: () => '',
    neutral: '',
  },
  left: {
    axis: 'X',
    enterFrom: (distance: string) => `translateX(-${distance})`,
    exitTo: (distance: string) => `translateX(-${distance})`,
    neutral: 'translateX(0)',
  },
  right: {
    axis: 'X',
    enterFrom: (distance: string) => `translateX(${distance})`,
    exitTo: (distance: string) => `translateX(${distance})`,
    neutral: 'translateX(0)',
  },
  up: {
    axis: 'Y',
    enterFrom: (distance: string) => `translateY(${distance})`,
    exitTo: (distance: string) => `translateY(-${distance})`,
    neutral: 'translateY(0)',
  },
} as const;

/**
 * Helper function to get base transforms for slide animations
 *
 * @param config - The popover animation configuration
 * @param direction - Animation direction (excluding 'fade')
 * @param isEnter - Whether this is an enter animation
 * @returns Object with start and end transform strings
 */
export const getSlideTransforms = (
  config: InternalAnimationConfig,
  direction: Exclude<keyof typeof TRANSFORM_CONFIGURATIONS, 'fade'>,
  isEnter: boolean,
): { start: string; end: string } => {
  const distance = getSlideDistance(config);
  const transformConfig = TRANSFORM_CONFIGURATIONS[direction];

  return {
    end: isEnter ? transformConfig.neutral : transformConfig.exitTo(distance),
    start: isEnter
      ? transformConfig.enterFrom(distance)
      : transformConfig.neutral,
  };
};

/**
 * Get positioning transforms that need to be preserved during animations
 * These are the transforms used for centering and positioning elements
 */
export const getPositioningTransforms = (placement: string): string => {
  const placementMap = {
    bottom: 'translateX(-50%)',
    'bottom-end': '',
    'bottom-start': '',
    center: 'translate(-50%, -50%)',
    left: 'translateY(-50%)',
    'left-end': '',
    'left-start': '',
    right: 'translateY(-50%)',
    'right-end': '',
    'right-start': '',
    top: 'translateX(-50%)',
    'top-end': '',
    'top-start': '',
  } as const;

  return placementMap[placement as keyof typeof placementMap] || '';
};

/**
 * Combine positioning transforms with animation transforms
 * Ensures that positioning transforms (like centering) are preserved during animations
 */
export const combineTransforms = (
  positioningTransform: string,
  animationTransform: string,
  additionalTransforms: string[] = [],
): string => {
  const transforms = [
    positioningTransform,
    animationTransform,
    ...additionalTransforms,
  ]
    .filter(Boolean)
    .join(' ');

  return transforms;
};

/**
 * Generate transform string based on configuration with placement-aware positioning
 * Combines positioning transforms (for centering) with animation transforms
 *
 * @param config - The popover animation configuration
 * @param baseTransform - Base animation transform string (e.g., 'translateY(0)')
 * @param isEnd - Whether this is the end state of the animation
 * @param inverted - Whether to invert the rotation direction
 * @param placement - The placement string to determine positioning transforms
 * @returns The complete transform string
 */
export const generateTransform = (
  config: InternalAnimationConfig,
  baseTransform: string = '',
  isEnd: boolean = false,
  inverted: boolean = false,
  placement?: string,
): string => {
  const positioningTransform = placement
    ? getPositioningTransforms(placement)
    : '';

  if (isDefaultTransforms(config)) {
    return combineTransforms(positioningTransform, baseTransform);
  }

  const scale = isEnd ? 1 : config.scaleStart;
  const rotation = isEnd
    ? 0
    : inverted
      ? -config.animationRotationInDeg
      : config.animationRotationInDeg;

  const additionalTransforms = [
    `scale(${scale})`,
    `rotate(${rotation}deg)`,
  ].filter(Boolean);

  return combineTransforms(
    positioningTransform,
    baseTransform,
    additionalTransforms,
  );
};
