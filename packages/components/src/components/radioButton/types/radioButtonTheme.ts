import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export interface RadioButtonStyleProps extends CssLibPropsType {
  _rowContainer?: CssLibPropsType;
  _label?: CssLibPropsType;
  _labelContainer?: CssLibPropsType;
  _specialLabel?: CssLibPropsType;
  _sublabel?: CssLibPropsType;
  _errorMessage?: CssLibPropsType;
  _errorMessageContainer?: CssLibPropsType;
  _errorMessageIcon?: CssLibPropsType;
  _errorMessageIconContainer?: CssLibPropsType;
  _radioButtonContainer?: CssLibPropsType;
  _infoIconContainer?: CssLibPropsType;
  _infoContainer?: CssLibPropsType;
}

export type RadioButtonVariantStyles<Variant extends string> =
  RadioButtonStyleProps & {
    [key in Variant]: RadioButtonStyleProps;
  };
