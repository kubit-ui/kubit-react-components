import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export interface NavBarStyleProps extends CssLibPropsType {
  _itemContainer?: CssLibPropsType;
}

export type NavBarVariantStyles<Variant extends string> = NavBarStyleProps & {
  [key in Variant]: NavBarStyleProps;
};
