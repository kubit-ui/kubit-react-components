import { CommonStyleType, IconTypes, TypographyTypes } from '@/types';

import { TextAreaStateType } from './state';

export type TextAreaPropsThemeType = {
  container?: CommonStyleType;
  titleContainer?: CommonStyleType;
  title?: TypographyTypes;
  labelTextAreaContainer?: CommonStyleType;
  label?: TypographyTypes;
  labelAndAdditionalInfoContainer?: CommonStyleType;
  required?: TypographyTypes;
  textArea?: CommonStyleType & TypographyTypes & { resize?: string };
  placeholder?: TypographyTypes;
  leftIcon?: IconTypes;
  leftIconContainer?: CommonStyleType;
  clearIcon?: IconTypes;
  clearIconContainer?: CommonStyleType;
  paddingBetweenIconAndText?: string;
  bottomContainer?: CommonStyleType;
  helpMessageErrorContainer?: CommonStyleType;
  helpMessage?: TypographyTypes;
  errorContainer?: CommonStyleType;
  errorIcon?: IconTypes;
  errorMessage?: TypographyTypes;
  counter?: TypographyTypes;
  counterLeft?: TypographyTypes;
  counterRight?: TypographyTypes;
  counterVariant?: string;
};

export type TextAreaVariantStylesType = {
  [i in TextAreaStateType]?: TextAreaPropsThemeType;
} & {
  labelInsideTextArea?: boolean;
};

export type TextAreaStylesType<P extends string | number | symbol> = {
  [key in P]?: TextAreaVariantStylesType;
};
