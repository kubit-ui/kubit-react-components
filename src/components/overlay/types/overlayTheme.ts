import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export type OverlayVariantStyles<Variant extends string> = CssLibPropsType & {
  [key in Variant]: CssLibPropsType;
};
