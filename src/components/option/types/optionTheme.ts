import { CommonStyleType, IconTypes, TypographyTypes } from '@/types';

import { OptionStateType } from './state';

export type OptionPropsStateStylesType = {
  container?: CommonStyleType & TypographyTypes;
  containerBefore?: CommonStyleType;
  containerFocusVisible?: {
    border_radius?: string;
    outline_offset?: string;
  };
  labelIconContainer?: CommonStyleType;
  label?: TypographyTypes;
  labelHightlighted?: TypographyTypes;
  icon?: IconTypes;
  sublabelContainer?: CommonStyleType;
  sublabel?: TypographyTypes;
  checkedIcon?: IconTypes;
};

export type OptionPropsStylesType = {
  [state in OptionStateType]?: OptionPropsStateStylesType;
};

/**
 * @description
 * interface for the option
 * @interface IOptionStyled
 */
export type OptionStylesType<P extends string | number | symbol> = {
  [key in P]?: OptionPropsStylesType;
};
