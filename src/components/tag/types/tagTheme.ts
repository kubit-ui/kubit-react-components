import { CommonStyleType, IconTypes, TypographyTypes } from '@/types';

export type TagStylesOptionPropsType = {
  wrapper?: CommonStyleType;
  text?: TypographyTypes;
};

export type TagStylesVariantPropsType = {
  wrapper?: CommonStyleType;
  text?: TypographyTypes;
  icon?: IconTypes;
  truncateText?: TypographyTypes;
};

export type TagStylesOptionType<P extends string | number | symbol> = {
  [key in P]?: TagStylesOptionPropsType;
};

export type TagStateKeyOfType<S extends string | number | symbol = string> = {
  [key in S]?: TagStylesVariantPropsType;
};

/**
 * @description
 * Tag styles type
 * @interface TagStylesType
 */
export type TagStylesType<
  P extends string | number | symbol,
  V extends string | number | symbol,
  S extends string | number | symbol,
> = {
  [key in P]?: TagStylesOptionPropsType;
} & {
  [variant in V]: TagStateKeyOfType<S>;
};
