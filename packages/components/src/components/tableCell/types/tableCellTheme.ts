import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export type TableCellVariantStyles<Variant extends string> = CssLibPropsType & {
  [key in Variant]: CssLibPropsType;
};
