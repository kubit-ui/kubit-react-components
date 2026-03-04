import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export interface SnackbarStyleProps extends CssLibPropsType {
  _container?: CssLibPropsType;
}

export type SnackbarVariantStyles<Variant extends string> = {
  [key in Variant]: SnackbarStyleProps;
};

export type SnackBarStyles<Variant extends string = string> =
  SnackbarStyleProps & SnackbarVariantStyles<Variant>;
