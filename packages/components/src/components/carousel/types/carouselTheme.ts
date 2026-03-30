import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

// TODO FIXME Improve types, right now it is not working properly with the current kubit-css-style-generator
export interface CarouselStyleProps extends CssLibPropsType {
  _viewer?: CssLibPropsType;
  _content?: CssLibPropsType;
}

export type CarouselVariantStyles<Variant extends string = string> = {
  [key in Variant]: CarouselStyleProps;
} & CarouselStyleProps;
