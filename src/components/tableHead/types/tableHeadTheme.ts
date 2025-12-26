import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export type TableHeadVariantStyles<Variant extends string> = CssLibPropsType & {
  [key in Variant]: CssLibPropsType;
};
