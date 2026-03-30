import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export type TableRowVariantStyles<Variant extends string> = CssLibPropsType & {
  [key in Variant]: CssLibPropsType;
};
