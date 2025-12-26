import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export interface ChecboxStyleProps extends CssLibPropsType {
  _checkboxWithLabelContainer?: CssLibPropsType;
  _errorMessageContainer?: CssLibPropsType;
  _label?: CssLibPropsType;
  _checkboxBase?: CssLibPropsType;
  _errorMessage?: CssLibPropsType;
}

export type ChecboxVariantStyles<Variant extends string> = ChecboxStyleProps & {
  [key in Variant]?: ChecboxStyleProps;
};
