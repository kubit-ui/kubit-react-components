// external types
import { CommonStyleType, IconTypes, TypographyTypes } from '@/types/index';

import { ChipStateType } from './state';

/**
 * @description
 * interface for the checkbox error standAlone
 * @interface IChipErrorStandAlone
 */
export type ChipPropsStylesType = {
  chipContainer?: CommonStyleType;
  leftIcon?: IconTypes;
  label?: TypographyTypes;
  rangeItemWrapper?: CommonStyleType;
  rangeItemText?: TypographyTypes;
  rangeItemSeparator?: TypographyTypes;
  rangeIcon?: IconTypes;
  closeIcon?: IconTypes;
  errorContainer?: CommonStyleType;
  errorMessage?: TypographyTypes;
  errorIcon?: IconTypes;
};

export type ChipPropsStateStylesType = {
  [state in ChipStateType]?: ChipPropsStylesType;
};

/**
 * @description
 * interface for the checkbox error standAlone
 * @interface IChipErrorStandAlone
 */
export type ChipStylesType<P extends string | number | symbol> = {
  [variant in P]?: ChipPropsStateStylesType;
};
