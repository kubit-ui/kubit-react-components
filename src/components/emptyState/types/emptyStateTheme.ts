import { CommonStyleType } from '@/types/styles/commonStyle';
import { IconTypes } from '@/types/styles/icon';
import { IllustrationTypes } from '@/types/styles/illustration';
import { TypographyTypes } from '@/types/styles/typography';

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
