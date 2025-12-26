import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export interface OptionStyleProps extends CssLibPropsType {
  _containerBefore?: CssLibPropsType;
  _containerFocusVisible?: CssLibPropsType;
  _labelIconContainer?: CssLibPropsType;
  _label?: CssLibPropsType;
  _labelHighlighted?: CssLibPropsType;
  _icon?: CssLibPropsType;
  _sublabelContainer?: CssLibPropsType;
  _sublabel?: CssLibPropsType;
  _checkedIcon?: CssLibPropsType;
  _firstRowContainer?: CssLibPropsType;
}

export type OptionVariantStyles<Variant extends string> = OptionStyleProps & {
  [key in Variant]: OptionStyleProps;
};
