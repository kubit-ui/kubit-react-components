import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export interface TableStyleProps extends CssLibPropsType {
  _scrollableContainer?: CssLibPropsType;
  _leftBoxShadowContainer?: CssLibPropsType;
  _rightBoxShadowContainer?: CssLibPropsType;
  _container?: CssLibPropsType;
  _headBoxShadow?: CssLibPropsType;
  _leftBoxShadow?: CssLibPropsType;
  _rightBoxShadow?: CssLibPropsType;
}

export type TableVariantStyles<Variant extends string> = TableStyleProps & {
  [key in Variant]: TableStyleProps;
};
