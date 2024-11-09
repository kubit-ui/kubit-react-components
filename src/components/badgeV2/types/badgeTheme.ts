import { CommonStyleType } from '@/types/styles/commonStyle';
import { IconTypes } from '@/types/styles/icon';
import { TypographyTypes } from '@/types/styles/typography';

import { BadgeState } from './state';

export type BadgeVariantStylesType = {
  container?: CommonStyleType;
  labelContainer?: CommonStyleType;
  label?: TypographyTypes;
  labelIcon?: IconTypes;
  icon?: IconTypes;
};

export type BadgeSizePropsType = {
  icon?: IconTypes;
  label?: TypographyTypes;
  customDotTranslate?: string;
  customDotNumberTranslate?: string;
};

export type BadgeStateKeyOfType = { [key in BadgeState]?: BadgeVariantStylesType };

export type BadgeStylesStatesStyles<P extends string | number | symbol> = {
  [key in P]?: BadgeStateKeyOfType;
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
> = BadgeStylesStatesStyles<P> & BadgeStylesSizeType<S>;
