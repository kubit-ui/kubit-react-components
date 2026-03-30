import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export type TableDividerVariantStyles<Variant extends string> =
  CssLibPropsType & {
    [key in Variant]: CssLibPropsType;
  };
