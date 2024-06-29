import { CommonStyleType, IconTypes, TypographyTypes } from '@/types';

import { BadgeStatus } from './status';

export type BadgeStatusIcon = {
  iconColor?: string;
  labelIconColor?: string;
  labelFontColor?: string;
};

export type BadgeVariantStylesType = {
  container?: CommonStyleType;
  labelContainer?: CommonStyleType;
  label?: TypographyTypes;
  labelIcon?: IconTypes;
  [BadgeStatus.OPEN]?: BadgeStatusIcon;
  [BadgeStatus.CLOSE]?: BadgeStatusIcon;
};

export type BadgeSizePropsType = {
  icon?: IconTypes;
  label?: TypographyTypes;
  customDotTranslate?: string;
  customDotNumberTranslate?: string;
};

export type BadgeStylesVariantType<P extends string | number | symbol> = {
  [key in P]?: BadgeVariantStylesType;
};

export type BadgeStylesSizeType<S extends string | number | symbol> = {
  [key in S]?: BadgeSizePropsType;
};

/**
 * @description
 * Badge styles type
 * @template P
 * @template S
 * @property {P} [key] - Variant of the badge.
 * @property {S} [key] - Size of the badge.
 */
export type BadgeStylesType<
  P extends string | number | symbol,
  S extends string | number | symbol,
> = BadgeStylesVariantType<P> & BadgeStylesSizeType<S>;
