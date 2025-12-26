import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export interface ErrorMessageStyleProps extends CssLibPropsType {
  _icon?: CssLibPropsType;
  _typography?: CssLibPropsType;
}

export type ErrorMessageVariantStyles<Variant extends string> =
  ErrorMessageStyleProps & {
    [key in Variant]: ErrorMessageStyleProps;
  };
