import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export type DotThemeStyles<
  variant extends string,
  size extends string,
> = CssLibPropsType & {
  [v in variant]: CssLibPropsType;
} & {
  [s in size]: CssLibPropsType;
};
