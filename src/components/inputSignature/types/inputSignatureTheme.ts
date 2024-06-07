import { CommonStyleType, TypographyTypes } from '@/types';

import { InputSignatureState } from './inputSignatureState';

export type InputSignatureLineStyles = {
  color: string;
  lineWidth: number;
};

export type InputSignatureStateStyles = {
  container: CommonStyleType;
  placeholderContainer: CommonStyleType;
  placeholderText?: TypographyTypes;
};

export type InputSignatureStateTheme = {
  [state in InputSignatureState]: InputSignatureStateStyles;
};

export type InputSignatureFullTheme = {
  signatureStyle: InputSignatureLineStyles;
} & InputSignatureStateTheme;

export type InputSignatureStyles<V extends string | number | symbol> = {
  [variant in V]: InputSignatureFullTheme;
};
