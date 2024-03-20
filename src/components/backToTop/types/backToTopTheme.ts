import { CommonStyleType, IconTypes } from '@/types';

import { BackToTopStateType } from './state';

/**
 * @description
 * interface for the action bottom sheet top styles
 * @interface BackToTopStylesType
 * @property {CommonStyleType} container
 * @property {IconTypes} icon
 */
export type BackToTopStylesType = {
  container?: CommonStyleType;
  icon?: IconTypes;
};

export type BackToTopStatesStyles = {
  [state in BackToTopStateType]?: BackToTopStylesType;
};

/**
 * @description
 * interface for the action bottom sheet styles
 * @template  V
 * @interface BackToTopVariantStyles
 */
export type BackToTopVariantStyles<V extends string | number | symbol> = {
  [variant in V]: BackToTopStatesStyles;
};
