import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export interface ChipStyleProps extends CssLibPropsType {
  _leftIcon?: CssLibPropsType;
  _label?: CssLibPropsType;
  _rangeItemWrapper?: CssLibPropsType;
  _rangeItemText?: CssLibPropsType;
  _rangeItemSeparator?: CssLibPropsType;
  _rangeIcon?: CssLibPropsType;
  _closeIcon?: CssLibPropsType;
  _errorContainer?: CssLibPropsType;
  _errorMessage?: CssLibPropsType;
  _errorIcon?: CssLibPropsType;
}

export type ChipVariantStyles<Variant extends string> = ChipStyleProps & {
  [key in Variant]: ChipStyleProps;
};
