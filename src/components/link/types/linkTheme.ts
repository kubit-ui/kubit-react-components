import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export interface LinkStylesProps extends CssLibPropsType {
  _labelAndIconContainer?: CssLibPropsType;
  _icon?: CssLibPropsType;
  _childrenContainer?: CssLibPropsType;
}

export type LinkVariantStyles<Variant extends string> = LinkStylesProps & {
  [key in Variant]?: LinkStylesProps;
};
