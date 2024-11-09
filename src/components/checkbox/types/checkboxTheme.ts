import { CommonStyleType } from '@/types/styles/commonStyle';
import { IconTypes } from '@/types/styles/icon';
import { TypographyTypes } from '@/types/styles/typography';

import { CheckboxStateType } from './state';

/**
 * @description
 * interface for the checkbox error standAlone
 */
export type CheckboxPropsStylesType = {
  label?: TypographyTypes;
  specialLabel?: TypographyTypes;
  checkbox?: CommonStyleType;
  checkedIcon?: IconTypes;
  extraContentWrapper?: CommonStyleType;
  helpContentTextWrapper?: CommonStyleType;
  helpContent?: TypographyTypes;
  helperText?: TypographyTypes;
  specialHelperText?: TypographyTypes;
  errorWrapper?: CommonStyleType;
  errorIcon?: IconTypes;
  textError?: TypographyTypes;
  container?: CommonStyleType;
  iconLabelWrapper?: CommonStyleType;
  frameContainer?: CommonStyleType;
};

export type CheckboxPropsStateStylesType = {
  [state in CheckboxStateType]?: CheckboxPropsStylesType;
};

/**
 * @description
 * interface for the checkbox error standAlone
 */
export type CheckboxStylesType<P extends string | number | symbol> = {
  [variant in P]?: CheckboxPropsStateStylesType;
};
