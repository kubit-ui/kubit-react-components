import * as React from 'react';

import { CssAnimationType } from './variant';

/**
 * @name CssAnimationTimingFunction
 * @description
 * The timing function of the animation
 * @enum {string}
 * @property {string} EASE_IN - The animation starts slowly and speeds up towards the end
 * @property {string} EASE_OUT - The animation starts quickly and slows down towards the end
 * @property {string} EASE_IN_OUT - The animation starts slowly, speeds up in the middle, and then slows down again towards the end
 * @property {string} EASE - The animation starts slowly, speeds up in the middle, and then slows down again towards the end
 * @property {string} LINEAR - The animation has the same speed from start to end
 */
export enum CssAnimationTimingFunction {
  EASE_IN = 'ease-in',
  EASE_OUT = 'ease-out',
  EASE_IN_OUT = 'ease-in-out',
  EASE = 'ease',
  LINEAR = 'linear',
}

/**
 * @name ICssAnimationOptions
 * @description
 * Interface for the CssAnimationOptions
 */
export interface ICssAnimationOptions {
  duration?: number;
  enterDuration?: number;
  exitDuration?: number;
  timingFunction: CssAnimationTimingFunction;
  delay: number;
  iterationCount: number;
  animationDistanceInPx?: number;
  animationRotationInDeg?: number;
  /// news ///
  animationYStartPosition?: string;
  animationXStartPosition?: string;
  animationYEndPosition?: string;
  animationXEndPosition?: string;
  opacityStart?: number;
  opacityEnd?: number;
}

/**
 * @name CssAnimationExecuteOption
 * @description
 * The execute option of the animation
 */
export enum CssAnimationExecuteOption {
  HIDDEN = 'HIDDEN',
  START = 'START',
  END = 'END',
}

/**
 * @name ICssAnimationStyled
 * @description
 * Interface for the CssAnimationStyled
 */
export interface ICssAnimationStyled {
  variant: CssAnimationType;
  options?: ICssAnimationOptions;
  exec?: CssAnimationExecuteOption;
}

/**
 * @name ICssAnimation
 * @description
 * Interface for the CssAnimation
 *
 */
export interface ICssAnimation
  extends React.PropsWithChildren<ICssAnimationStyled>,
    Omit<ICssAnimationStyled, 'styles'> {
  dataTestId?: string;
}

/**
 * @name CssAnimationConfig
 * @description
 * Interface for the CssAnimationConfig
 * @property {CssAnimationType} animation - The animation
 * @property {ICssAnimationOptions} animationOptions - The options of the animation
 */
export type CssAnimationConfig = {
  animation?: CssAnimationType;
  animationOptions?: ICssAnimationOptions;
};
