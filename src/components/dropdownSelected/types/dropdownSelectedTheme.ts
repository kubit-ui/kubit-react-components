import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export interface DropdownSelectedStyleProps extends CssLibPropsType {
  _buttonOrLinkContainer?: CssLibPropsType;
  _labelOpened?: CssLibPropsType;
  _labelClosed?: CssLibPropsType;
  _iconOpened?: CssLibPropsType;
  _iconClosed?: CssLibPropsType;
  _listOptionsContainer?: CssLibPropsType;
}

export type DropdownSelectedVariantStyles<Variant extends string> =
  DropdownSelectedStyleProps & {
    [key in Variant]: DropdownSelectedStyleProps;
  };
