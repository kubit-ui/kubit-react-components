// external types
import { CommonStyleType } from '@/types/styles/commonStyle';
import { IconTypes } from '@/types/styles/icon';
import { TypographyTypes } from '@/types/styles/typography';

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
