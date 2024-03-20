import { CommonStyleType, IconTypes, IllustrationTypes, TypographyTypes } from '@/types';

export type EmptyStatePropsStyles = {
  isHorizontalOrientation: boolean;
};

export type EmptyStatePropsStylesType = {
  illustration?: IllustrationTypes;
  icon?: IconTypes;
  titleAndSubTitleContainer?: CommonStyleType;
  titleContainer?: CommonStyleType & TypographyTypes;
  title?: TypographyTypes;
  subtitleContainer?: CommonStyleType & TypographyTypes;
  subtitle?: TypographyTypes;
  buttonLinkContainer?: CommonStyleType;
  buttonContainer?: CommonStyleType;
  buttonSize?: string;
  container?: CommonStyleType;
};

export type EmptyStateVariantStylesType<S extends string | number | symbol> = {
  [state in S]?: EmptyStatePropsStylesType;
};

export type EmptyStateStylesType<
  V extends string | number | symbol,
  S extends string | number | symbol,
> = {
  [variant in V]: EmptyStateVariantStylesType<S>;
};
