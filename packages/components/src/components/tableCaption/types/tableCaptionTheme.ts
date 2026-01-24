import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export type TableCaptionVariantStyles<Variant extends string> =
  CssLibPropsType & {
    [key in Variant]: CssLibPropsType;
  };
