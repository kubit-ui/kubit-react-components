import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export interface InputDecorationStyleProps extends CssLibPropsType {
  _decoration?: CssLibPropsType;
}

export type InputDecorationVariantStyles<Variant extends string> =
  InputDecorationStyleProps & {
    [key in Variant]: InputDecorationStyleProps;
  };
