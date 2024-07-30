import { CommonStyleType, IconTypes, TypographyTypes } from '@/types';

import type { PillStateType } from './state';

export type PillStateStylesType = {
  parentContainer?: CommonStyleType;
  altVariant?: boolean;
  container?: CommonStyleType;
  container_focus?: {
    z_index?: number;
    outline?: string;
    box_shadow?: string;
  };
  input?: CommonStyleType;
  decorativeIconContainer?: CommonStyleType;
  decorativeIcon?: IconTypes;
  selectedIcon?: IconTypes;
  // deprecated - "label" prop is applied to children. Change this name.
  label?: TypographyTypes;
  // deprecated - "labelContent" should be called "label". Change this name.
  labelContent?: TypographyTypes;
  labelContainer?: CommonStyleType;
};

export type PillVariantStylesType = {
  [key in PillStateType]?: PillStateStylesType;
};

export type PillSizeStylesType<P extends string | number | symbol> = {
  [key in P]?: PillVariantStylesType;
};

export type PillStylesType<
  P extends string | number | symbol = never,
  S extends string | number | symbol = never,
> = {
  [key in P]?: PillSizeStylesType<S>;
};
