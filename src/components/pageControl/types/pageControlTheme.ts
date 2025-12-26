import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export interface PageControlStyleProps extends CssLibPropsType {
  _dotsContainer?: CssLibPropsType;
  _leftButtonControl?: CssLibPropsType;
  _rightButtonControl?: CssLibPropsType;
  _pageDot?: CssLibPropsType;
}

export type PageControlVariantStyles<Variant extends string> =
  PageControlStyleProps & {
    [key in Variant]: PageControlStyleProps;
  };

export interface ArrowsControlStyleProps extends CssLibPropsType {
  _leftArrowControlContainer?: CssLibPropsType;
  _rightArrowControlContainer?: CssLibPropsType;
  _icon?: CssLibPropsType;
}

export type ArrowsControlVariantStyles<Variant extends string> =
  ArrowsControlStyleProps & {
    [key in Variant]: ArrowsControlStyleProps;
  };

export type PageControlStyles<
  Variant extends string,
  AVariant extends string,
> = PageControlStyleProps &
  ArrowsControlStyleProps &
  PageControlVariantStyles<Variant> &
  ArrowsControlVariantStyles<AVariant>;
