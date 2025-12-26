import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export interface ProgressBarStyleProps extends CssLibPropsType {
  _barContainer?: CssLibPropsType;
  _bar?: CssLibPropsType;
  _progressBar?: CssLibPropsType;
}

export type ProgressBarVariantStyles<Variant extends string> = {
  [key in Variant]: ProgressBarStyleProps;
};

export type ProgressBarStyles<
  Variant extends string,
  Size extends string,
> = ProgressBarStyleProps &
  ProgressBarVariantStyles<Variant> &
  ProgressBarVariantStyles<Size>;
