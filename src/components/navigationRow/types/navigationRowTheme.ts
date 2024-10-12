import { IconHighlightedSizeType } from '@/components/iconHighlighted';
import { CommonStyleType, IconTypes, TypographyTypes } from '@/types';

export type NavigationRowStylesPropsType = {
  container?: CommonStyleType;
  textSectionContainer?: CommonStyleType;
  iconTextContainer?: CommonStyleType;
  // text
  text?: TypographyTypes;
  // description
  descriptionContainer?: CommonStyleType;
  description?: TypographyTypes;
  decorativeElementContainer?: CommonStyleType;
  // icons
  arrowIcon?: IconTypes;
  /**
   * @deprecated remove when deconrativeIcon props is removed in the next major version.
   */
  decorativeIcon?: IconTypes;
  /**
   * @deprecated remove when deconrativeIcon props is removed in the next major version.
   */
  iconHighlighted?: {
    variant: string;
    color: string;
    backgroundColor: string;
    size?: IconHighlightedSizeType;
  };
  lineSeparatorLineVariant?: string;
};

export type NavigationRowStylesVariant<P extends string | number | symbol> = {
  [key in P]: NavigationRowStylesPropsType;
};

export type NavigationRowStylesDimension<S extends string | number | symbol> = {
  [key in S]: NavigationRowStylesPropsType;
};

export type NavigationRowStylesType<
  P extends string | number | symbol,
  S extends string | number | symbol,
> = NavigationRowStylesVariant<P> & NavigationRowStylesDimension<S>;
