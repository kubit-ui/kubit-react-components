import { CommonStyleType, IconTypes, TypographyTypes } from '@/types';

import { ToggleStateType } from './state';

export type ToggleStyleType = {
  wrapper?: CommonStyleType;
  wrapperThreePositions?: CommonStyleType;
  thumb?: CommonStyleType;
  label?: TypographyTypes & CommonStyleType;
  labelWithIcons?: TypographyTypes & CommonStyleType;
  icon?: IconTypes;
};

export type ToggleStateStyleType = {
  [key in ToggleStateType]?: ToggleStyleType;
};

/**
 * @name ToggleStylesType
 * @description
 * Toggle styles type
 * @property {string} wrapper - The wrapper style
 * @property {string} thumb - The thumb style
 * @property {string} label - The label style
 * @property {string} icon - The icon style
 */
export type ToggleStylesType<P extends string | number | symbol> = {
  [key in P]: ToggleStateStyleType;
};
