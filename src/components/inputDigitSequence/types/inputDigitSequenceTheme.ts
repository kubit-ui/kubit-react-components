import { CommonStyleType, IconGenericType, IconTypes, TypographyTypes } from '@/types';

import { InputDigitSequenceStateType } from './state';

export type InputDigitSequenceStyles = {
  rootContainer?: CommonStyleType;
  titleTooltipContainer?: CommonStyleType;
  title?: TypographyTypes;
  tooltipIcon?: IconTypes;
  tooltip?: {
    variant?: string;
  };
  animationInputsContainer?: CommonStyleType;
  inputDigitsContainer?: CommonStyleType;
  inputDigitAndNumberContainer?: CommonStyleType;
  inputDigitContainer?: CommonStyleType;
  inputDigitContainerError?: CommonStyleType;
  inputDigitContainerfocus?: CommonStyleType;
  inputDigitText?: TypographyTypes;
  inputDigitTextTypePassword?: TypographyTypes;
  inputNumber?: TypographyTypes;
  errorContainer?: CommonStyleType;
  errorText?: TypographyTypes;
  errorIcon?: IconGenericType;
  helpTextContainer?: CommonStyleType;
  helpText?: TypographyTypes;
  actionButtonContainer?: CommonStyleType;
  actionButtonSize?: string;
};

export type InputDigitSequenceStateStyles = {
  [state in InputDigitSequenceStateType]?: InputDigitSequenceStyles;
};

export type InputDigitSequenceStylesType<P extends string | number | symbol> = {
  [key in P]: InputDigitSequenceStateStyles;
};
