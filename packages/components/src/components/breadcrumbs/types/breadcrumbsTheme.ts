import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export interface BreadcrumbsStyleProps extends CssLibPropsType {
  _linkContainer?: CssLibPropsType;
  _link?: CssLibPropsType;
  _lastOneCrumb?: CssLibPropsType;
  _iconDividerContainer?: CssLibPropsType;
  _iconDivider?: CssLibPropsType;
  _crumb?: CssLibPropsType;
}

export type BreadcrumbsVariantStyles<Variant extends string> =
  BreadcrumbsStyleProps & {
    [key in Variant]: BreadcrumbsStyleProps;
  };
