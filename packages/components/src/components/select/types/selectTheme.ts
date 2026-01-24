import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export interface SelectStyleProps extends CssLibPropsType {
  _buttonOrLinkContainer?: CssLibPropsType;
  _labelOpened?: CssLibPropsType;
  _labelClosed?: CssLibPropsType;
  _iconOpened?: CssLibPropsType;
  _iconClosed?: CssLibPropsType;
  _listOptionsContainer?: CssLibPropsType;
}

export type SelectVariantStyles<Variant extends string> = SelectStyleProps & {
  [key in Variant]: SelectStyleProps;
};
