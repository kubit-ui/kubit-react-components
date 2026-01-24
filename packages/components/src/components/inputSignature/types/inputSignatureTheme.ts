import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export interface InputSignatureLineStyles {
  color: string;
  lineWidth: number;
}

export interface InputSignatureStyleProps extends CssLibPropsType {
  _placeholderContainer?: CssLibPropsType;
  _placeholderText?: CssLibPropsType;
  _canvas?: CssLibPropsType;
}

export type InputSignatureVariantStyles<Variant extends string> =
  InputSignatureStyleProps & {
    [key in Variant]: InputSignatureStyleProps;
  };
