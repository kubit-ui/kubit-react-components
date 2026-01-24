import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export type TextVariantStyles<Variant extends string> = CssLibPropsType & {
  [key in Variant]?: CssLibPropsType;
};
