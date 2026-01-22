import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export type TableFootVariantStyles<Variant extends string> = CssLibPropsType & {
  [key in Variant]: CssLibPropsType;
};
