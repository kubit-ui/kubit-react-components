/**
 * Animation types for enter/exit animations
 */
export const ANIMATION_TYPES = {
  ENTER: 'enter',
  EXIT: 'exit',
} as const;

export type AnimationType =
  (typeof ANIMATION_TYPES)[keyof typeof ANIMATION_TYPES];

/**
 * Animation configuration types
 */
export const ANIMATION_CONFIG_TYPES = {
  CUSTOM: 'custom',
  SIMPLE: 'simple',
} as const;

export type AnimationConfigType =
  (typeof ANIMATION_CONFIG_TYPES)[keyof typeof ANIMATION_CONFIG_TYPES];

/**
 * Default fallback placement when none is specified
 */
export const DEFAULT_PLACEMENT = 'center';

/**
 * Valid placement strings from floating-ui
 * Common array used across the popover components to avoid duplication
 */
export const VALID_PLACEMENTS = [
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'left',
  'left-start',
  'left-end',
  'right',
  'right-start',
  'right-end',
] as const;

/**
 * Valid placement strings including 'center' for body positioning
 */
export const VALID_PLACEMENTS_WITH_CENTER = [
  ...VALID_PLACEMENTS,
  'center',
] as const;

/**
 * Timing functions available for Popover animations
 */
export const PopoverAnimationTimingFunction = {
  CUBIC_BEZIER: 'cubic-bezier(0.16, 1, 0.3, 1)', // Default smooth cubic bezier
  EASE: 'ease',
  EASE_IN: 'ease-in',
  EASE_IN_OUT: 'ease-in-out',
  EASE_IN_OUT_CUBIC: 'cubic-bezier(0.645, 0.045, 0.355, 1)', // Smooth cubic
  EASE_OUT: 'ease-out',
  EASE_OUT_BOUNCE: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)', // Bouncy easing
  LINEAR: 'linear',
} as const;

export type PopoverAnimationTimingFunction =
  (typeof PopoverAnimationTimingFunction)[keyof typeof PopoverAnimationTimingFunction];

/**
 * Internal animation configuration with all required properties
 */
export interface InternalAnimationConfig {
  type: AnimationConfigType;
  duration: string;
  delay: string;
  timingFunction: string;
  iterationCount: number;
  opacityStart: number;
  opacityEnd: number;
  scaleStart: number;
  animationDistanceInPx: number;
  animationRotationInDeg: number;
  transformOrigin: string;
  customKeyframes?: string;
}

/**
 * Extended configuration with separate enter/exit configs
 */
export interface ExtendedAnimationConfig {
  enter: InternalAnimationConfig;
  exit: InternalAnimationConfig;
}

/**
 * Simplified configuration type with required properties for animation generation
 */
export type RequiredSimpleAnimationConfig = Pick<
  InternalAnimationConfig,
  | 'type'
  | 'duration'
  | 'delay'
  | 'timingFunction'
  | 'iterationCount'
  | 'opacityStart'
  | 'opacityEnd'
  | 'scaleStart'
  | 'animationDistanceInPx'
  | 'animationRotationInDeg'
  | 'transformOrigin'
>;

/**
 * Default animation configuration
 */
export const DEFAULT_POPOVER_ANIMATION_CONFIG: InternalAnimationConfig = {
  animationDistanceInPx: 0,
  animationRotationInDeg: 0,
  delay: '0ms',
  duration: '500ms',
  iterationCount: 1,
  opacityEnd: 1,
  opacityStart: 0,
  scaleStart: 1,
  timingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  transformOrigin: '',
  type: ANIMATION_CONFIG_TYPES.SIMPLE,
};
