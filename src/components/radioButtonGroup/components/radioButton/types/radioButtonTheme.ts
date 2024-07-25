import { TooltipAlignType } from '@/components/tooltip';
import { CommonStyleType, IconTypes, TypographyTypes } from '@/types/styles';

import { RadioButtonStateType } from './state';

export type RadioButtonBaseStyles = {
  title?: CommonStyleType & TypographyTypes;
  icon?: IconTypes & CommonStyleType;
  rowContainer?: CommonStyleType;
  label?: TypographyTypes;
  specialLabel?: TypographyTypes;
  sublabel?: TypographyTypes;
  errorMessage?: TypographyTypes;
  errorMessageContainer?: CommonStyleType;
  errorMessageIcon?: IconTypes;
  errorMessageIconContainer?: CommonStyleType;
  radioButtonContainer?: CommonStyleType;
  radioButton?: CommonStyleType;
  infoIconContainer?: CommonStyleType;
  tooltip?: {
    icon?: IconTypes;
    variant?: string;
    align?: TooltipAlignType;
  };
};

export type RadioButtonStateStylesType = {
  [state in RadioButtonStateType]?: RadioButtonBaseStyles;
};

export type RadioButtonStylesType<P extends string = string> = {
  [variant in P]: RadioButtonStateStylesType;
};
