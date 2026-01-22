import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export interface TagStyleProps extends CssLibPropsType {
  _icon?: CssLibPropsType;
  _label?: CssLibPropsType;
}

export type TagVariantStyles<Variant extends string> = TagStyleProps & {
  [key in Variant]: TagStyleProps;
};
