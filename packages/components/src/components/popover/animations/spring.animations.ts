import { getPositioningTransforms } from '../utils/animation.utils';

/**
 * Generate spring keyframes with realistic physics calculations
 *
 * Simulates real spring behavior using mathematical formulas to calculate
 * natural bounce animations based on stiffness, damping, and mass properties.
 */
export const generateSpringKeyframes = (
  direction: 'up' | 'down' | 'left' | 'right' | 'fade',
  stiffness: number = 300, // How "tight" the spring is - higher = snappier animation
  damping: number = 20, // How much the spring slows down - higher = less bouncy
  mass: number = 1, // How "heavy" the element feels - higher = slower to start/stop
  initialDisplacement: number = 20, // Starting distance in pixels
  keyframeCount: number = 20, // How many animation steps to create
  placement?: string, // Optional placement to determine positioning transforms
): string => {
  // Calculate basic spring properties (mathematical formulas for spring behavior)
  const w0 = Math.sqrt(stiffness / mass); // How fast the spring naturally oscillates
  const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass)); // How bouncy vs smooth the animation is

  /**
   * Calculate how far the element should be displaced at any given time
   *
   * This uses different math formulas depending on how bouncy the animation should be:
   * - Low damping = bouncy (oscillates back and forth)
   * - Medium damping = smooth (returns to position without bouncing)
   * - High damping = slow (takes a long time to reach final position)
   */
  const calculateDisplacement = (t: number): number => {
    if (dampingRatio < 1) {
      // BOUNCY ANIMATION (dampingRatio < 1)
      // The element will bounce back and forth, getting smaller bounces each time
      // This is what most UI animations should use for a natural feel

      const wd = w0 * Math.sqrt(1 - dampingRatio * dampingRatio); // Bounce frequency

      // Set up the bounce calculation with starting position
      const A = initialDisplacement; // How far we start from final position
      const B = (dampingRatio * w0 * initialDisplacement) / wd; // Bounce adjustment

      // Calculate current position with decreasing bounces over time
      return (
        Math.exp(-dampingRatio * w0 * t) *
        (A * Math.cos(wd * t) + B * Math.sin(wd * t))
      );
    }
    if (dampingRatio === 1) {
      // SMOOTH ANIMATION (dampingRatio = 1)
      // The element moves smoothly to final position without any bouncing
      // This is the fastest way to reach the target without overshoot

      // Calculate smooth movement that slows down as it approaches target
      return initialDisplacement * Math.exp(-w0 * t) * (1 + w0 * t);
    }
    // SLOW ANIMATION (dampingRatio > 1)
    // The element moves very slowly to final position
    // Usually too slow for UI, but can be useful for heavy/dramatic effects

    // Calculate two different rates of slowing down
    const sqrtTerm = Math.sqrt(dampingRatio * dampingRatio - 1);
    const r1 = -w0 * (dampingRatio + sqrtTerm); // Faster slowdown rate
    const r2 = -w0 * (dampingRatio - sqrtTerm); // Slower slowdown rate

    // Combine both rates to get the final position
    const A = (initialDisplacement * r2) / (r2 - r1);
    const B = (-initialDisplacement * r1) / (r2 - r1);

    // Calculate position using both slowdown rates
    return A * Math.exp(r1 * t) + B * Math.exp(r2 * t);
  };

  // Generate keyframes based on physics calculations
  const animationDuration = 1.0; // 1 second in time units
  const physicsKeyframes: Array<{ time: number; displacement: number }> = [];

  // Create animation frames by sampling the displacement at regular intervals
  for (let i = 0; i <= keyframeCount; i++) {
    const t = (i / keyframeCount) * animationDuration; // Current time in seconds
    const timePercent = (i / keyframeCount) * 100; // Convert to percentage for CSS keyframes
    const displacement = calculateDisplacement(t); // Calculate how far element should be

    physicsKeyframes.push({
      displacement: displacement,
      time: timePercent,
    });
  }

  /**
   * Generate transform string based on animation direction and current displacement
   */
  const getAnimationTransform = (displacement: number): string => {
    if (displacement === 0) {
      return direction === 'up' || direction === 'down'
        ? 'translateY(0)'
        : 'translateX(0)';
    }

    switch (direction) {
      case 'up':
        return `translateY(${-displacement}px)`;
      case 'down':
        return `translateY(${displacement}px)`;
      case 'left':
        return `translateX(${-displacement}px)`;
      case 'right':
        return `translateX(${displacement}px)`;
      case 'fade': {
        const scale = 1 + (displacement / initialDisplacement) * 0.1;
        return `scale(${Math.max(0.9, Math.min(1.1, scale))})`;
      }
      default:
        return 'translateY(0)';
    }
  };

  /**
   * Combine positioning transforms with animation transforms
   * Preserves element positioning during animation for all placement types
   */
  const getTransform = (displacement: number) => {
    const positioningTransform = placement
      ? getPositioningTransforms(placement)
      : '';
    const animationTransform = getAnimationTransform(displacement);

    return positioningTransform
      ? `${positioningTransform} ${animationTransform}`
      : animationTransform;
  };

  const keyframeSteps = physicsKeyframes
    .map((point) => {
      const transform = getTransform(point.displacement);
      const opacity =
        direction === 'fade'
          ? Math.max(
              0,
              Math.min(
                1,
                1 - (Math.abs(point.displacement) / initialDisplacement) * 0.3,
              ),
            )
          : 1;

      return `${point.time.toFixed(1)}% {
    opacity: ${opacity.toFixed(3)};
    transform: ${transform};
  }`;
    })
    .join('\n  ');

  return keyframeSteps;
};

/**
 * Generate a complete CSS keyframes rule with a given name
 */
export const generateSpringKeyframesRule = (
  keyframeName: string,
  direction: 'up' | 'down' | 'left' | 'right' | 'fade',
  stiffness: number = 300,
  damping: number = 20,
  mass: number = 1,
  initialDisplacement: number = 20,
  keyframeCount: number = 20,
  placement?: string,
): string => {
  const keyframeSteps = generateSpringKeyframes(
    direction,
    stiffness,
    damping,
    mass,
    initialDisplacement,
    keyframeCount,
    placement,
  );

  return `@keyframes ${keyframeName} {
  ${keyframeSteps}
}`;
};

/**
 * Create a spring animation configuration with physics-based keyframes as CSS string
 */
export const createSpringAnimation = (
  direction: 'up' | 'down' | 'left' | 'right' | 'fade',
  options: {
    stiffness?: number;
    damping?: number;
    mass?: number;
    duration?: string;
    initialDisplacement?: number;
    keyframeCount?: number;
    placement?: string;
  } = {},
): { duration: string; keyframesCSS: string } => {
  const {
    damping = 20,
    duration = '800ms',
    initialDisplacement = 20,
    keyframeCount = 20,
    mass = 1,
    placement,
    stiffness = 300,
  } = options;

  return {
    duration,
    keyframesCSS: generateSpringKeyframes(
      direction,
      stiffness,
      damping,
      mass,
      initialDisplacement,
      keyframeCount,
      placement,
    ),
  };
};
