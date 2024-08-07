import type { CommonStyleType, IconTypes, TypographyTypes } from '@/types/index';

import { PillStateType } from './pillStateType';

export type PillPropsStylesType = {
  rootContainer?: CommonStyleType;
  contentContainer?: CommonStyleType;
  leftIcon?: IconTypes;
  label?: TypographyTypes;
  rightIcon?: IconTypes;
  input?: CommonStyleType;
};

export type PillSizePropsStylesType = {
  [state in PillStateType]?: PillPropsStylesType;
};

export type PillVariantPropsStylesType = {
  [size in string]?: PillSizePropsStylesType;
};

export type PillStylesType = {
  [variant in string]: PillVariantPropsStylesType;
};
