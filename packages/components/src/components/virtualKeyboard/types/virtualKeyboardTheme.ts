import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export interface VirtualKeyboardStyleProps extends CssLibPropsType {
  _iconContainer?: CssLibPropsType;
  _removeButton?: CssLibPropsType;
  _digitWrapper?: CssLibPropsType;
  _digitButtons?: CssLibPropsType;
  _digitText?: CssLibPropsType;
}

export type VirtualKeyboardVariantStyles<Variant extends string> =
  VirtualKeyboardStyleProps & {
    [key in Variant]: VirtualKeyboardStyleProps;
  };
