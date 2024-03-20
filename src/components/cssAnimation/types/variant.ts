// Variants reference: https://webcode.tools/generators/css/keyframe-animation

export enum CssAnimationVariants {
  SLIDE_IN = 'SLIDE_IN',
}

/**
 * @name CssAnimationType
 * @description
 * Interface for the CssAnimationType
 * @property {CssAnimationVariants} type - The type of the animation
 *
 */
export type CssAnimationType =
  // SlideIn
  { type: CssAnimationVariants.SLIDE_IN };
