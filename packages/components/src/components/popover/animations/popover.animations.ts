import {
  ANIMATION_TYPES,
  type AnimationType,
  DEFAULT_PLACEMENT,
  type ExtendedAnimationConfig,
  type InternalAnimationConfig,
  type RequiredSimpleAnimationConfig,
} from '../types/animation';
import {
  type AnimationDirection,
  PLACEMENT_TRANSFORM_ORIGINS,
  generateTransform,
  getAnimationOpacities,
  getSlideTransforms,
  getTransformOrigin,
  resolveAnimationConfig,
} from '../utils/animation.utils';
import { getPlacementDirection } from '../utils/placement.utils';

/**
 * Universal animation generator for simple animation configs only
 */
export const generateAnimation = (
  config: RequiredSimpleAnimationConfig,
  direction: AnimationDirection,
  type: AnimationType,
  placement?: string,
): string => {
  const isEnter = type === ANIMATION_TYPES.ENTER;
  const { end: endOpacity, start: startOpacity } = getAnimationOpacities(
    config,
    isEnter,
  );

  let startBaseTransform = '';
  let endBaseTransform = '';

  if (direction !== 'fade') {
    const { end, start } = getSlideTransforms(config, direction, isEnter);
    startBaseTransform = start;
    endBaseTransform = end;
  }

  const startTransform = generateTransform(
    config,
    startBaseTransform,
    !isEnter,
    false,
    placement,
  );
  const endTransform = generateTransform(
    config,
    endBaseTransform,
    isEnter,
    !isEnter,
    placement,
  );

  return `from {
    opacity: ${startOpacity};
    ${startTransform ? `transform: ${startTransform};` : ''}
  }
  to {
    opacity: ${endOpacity};
    ${endTransform ? `transform: ${endTransform};` : ''}
  }`;
};

/**
 * Create a custom animation with specific options
 * This is a more flexible alternative to the predefined functions
 *
 * @param config - The internal animation configuration
 * @param options - Animation options including direction, type, custom keyframes, and placement
 * @param options.direction - Animation direction ('up', 'down', 'left', 'right', 'fade')
 * @param options.type - Animation type ('enter' or 'exit')
 * @param options.placement - Optional placement string for positioning
 * @returns Generated keyframes CSS string
 * ```
 */
export const createCustomAnimation = (
  config: InternalAnimationConfig,
  options: {
    direction: AnimationDirection;
    type: AnimationType;
    placement?: string;
  },
): string => {
  const { direction, placement, type } = options;

  // Generate animation for simple configs
  return generateAnimation(config, direction, type, placement);
};

/**
 * Animation generator factory functions for better maintainability
 * Only works with simple configs
 */
const createAnimationGenerators = (
  enterDirection: AnimationDirection,
  exitDirection: AnimationDirection,
) => ({
  in: (config: RequiredSimpleAnimationConfig, placement: string) =>
    generateAnimation(config, enterDirection, ANIMATION_TYPES.ENTER, placement),
  out: (config: RequiredSimpleAnimationConfig, placement: string) =>
    generateAnimation(config, exitDirection, ANIMATION_TYPES.EXIT, placement),
});

/**
 * Animation generator map for each placement direction
 */
const ANIMATION_GENERATORS = {
  bottom: createAnimationGenerators('up', 'down'),
  'bottom-end': createAnimationGenerators('up', 'down'),
  'bottom-start': createAnimationGenerators('up', 'down'),
  center: createAnimationGenerators('fade', 'fade'),
  left: createAnimationGenerators('left', 'left'),
  'left-end': createAnimationGenerators('left', 'left'),
  'left-start': createAnimationGenerators('left', 'left'),
  right: createAnimationGenerators('right', 'right'),
  'right-end': createAnimationGenerators('right', 'right'),
  'right-start': createAnimationGenerators('right', 'right'),
  top: createAnimationGenerators('down', 'up'),
  'top-end': createAnimationGenerators('down', 'up'),
  'top-start': createAnimationGenerators('down', 'up'),
} as const;

/**
 * Get placement-specific animations with support for separate enter/exit configs
 * Automatically handles fallbacks for unsupported placements
 *
 * @param closing - Whether the popover is closing (true) or opening (false)
 * @param animationConfig - Animation configuration (unified or with separate enter/exit)
 * @param placement - Placement string (e.g., 'top', 'bottom-start', 'left-end')
 * @returns CSS keyframes string
 * ```
 */
export const getPlacementAnimation = (
  closing: boolean,
  animationConfig: InternalAnimationConfig | ExtendedAnimationConfig,
  placement?: string,
): string => {
  const configToUse = resolveAnimationConfig(animationConfig, closing);

  // Get generators with improved fallback logic
  const normalizedPlacement = placement || DEFAULT_PLACEMENT;
  let generators =
    ANIMATION_GENERATORS[
      normalizedPlacement as keyof typeof ANIMATION_GENERATORS
    ];
  let actualPlacement = normalizedPlacement;

  if (!generators) {
    const direction = getPlacementDirection(normalizedPlacement);
    generators =
      ANIMATION_GENERATORS[direction as keyof typeof ANIMATION_GENERATORS];
    actualPlacement = direction;
  }

  const generator = closing ? generators.out : generators.in;
  const keyframesCSS = generator(configToUse, normalizedPlacement);

  const transformOrigin = getTransformOrigin(
    configToUse,
    PLACEMENT_TRANSFORM_ORIGINS[
      actualPlacement as keyof typeof PLACEMENT_TRANSFORM_ORIGINS
    ],
  );

  let result = `@keyframes popover-animation {
    ${keyframesCSS}
  }`;

  if (transformOrigin) {
    result += `
  transform-origin: ${transformOrigin};`;
  }

  return result;
};

/**
 * Generate a complete CSS keyframes rule with a given name
 */
export const generateAnimationKeyframesRule = (
  keyframeName: string,
  config: RequiredSimpleAnimationConfig,
  direction: AnimationDirection,
  type: AnimationType,
  placement?: string,
): string => {
  const keyframeSteps = generateAnimation(config, direction, type, placement);

  return `@keyframes ${keyframeName} {
  ${keyframeSteps}
}`;
};

/**
 * Generate CSS animation styles with all configuration applied
 * Includes validation and safe defaults for all properties
 * Note: willChange should be managed externally via JavaScript for performance
 *
 * @param config - Animation configuration (unified or with separate enter/exit)
 * @param closing - Whether this is for a closing animation
 * @returns CSS properties as string
 * ```
 */
export const generateAnimationStyles = (
  config: InternalAnimationConfig | ExtendedAnimationConfig,
  closing: boolean = false,
): string => {
  const configToUse = resolveAnimationConfig(config, closing);

  const duration = configToUse.duration || '0ms';
  const delay = configToUse.delay || '0ms';
  const iterationCount = Math.max(1, configToUse.iterationCount || 1);
  const animationTimingFunction = configToUse.timingFunction || 'ease';

  let cssProperties = `
    animation-name: popover-animation;
    animation-duration: ${duration};
    animation-delay: ${delay};
    animation-timing-function: ${animationTimingFunction};
    animation-iteration-count: ${iterationCount};
    animation-fill-mode: forwards;`;

  if (configToUse.transformOrigin && configToUse.transformOrigin !== '') {
    cssProperties += `
    transform-origin: ${configToUse.transformOrigin};`;
  }

  return cssProperties;
};
