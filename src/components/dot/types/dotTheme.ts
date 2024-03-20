// external types
import { CommonStyleType, TypographyTypes } from '@/types';

/**
 * @interface IDotStyled
 */
export type DotSizePropsType = {
  container?: CommonStyleType & TypographyTypes;
};

/**
 * @interface IDotStyled
 */
export type DotVariantStylesType = {
  container?: CommonStyleType & TypographyTypes;
};

/**
 * @interface IDotStyled
 */
export type DotStylesVariantType<P extends string | number | symbol> = {
  [key in P]?: DotVariantStylesType;
};

/**
 * @interface IDotStyled
 */
export type DotStylesSizeType<S extends string | number | symbol> = {
  [key in S]?: DotSizePropsType;
};

/**
 * @interface IDotStyled
 */
export type DotStylesType<
  P extends string | number | symbol,
  S extends string | number | symbol,
> = DotStylesVariantType<P> & DotStylesSizeType<S>;
