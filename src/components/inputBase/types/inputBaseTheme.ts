import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export type InputBaseVariantStyles<Variant extends string> = CssLibPropsType & {
  [key in Variant]: CssLibPropsType;
};
