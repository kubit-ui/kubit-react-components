import { CommonStyleType, IconTypes, TypographyTypes } from '@/types';

import { DividerEmbebed } from './dividerEmbebed';

export type DividerVariantStylesProps = {
  container?: CommonStyleType;
  row?: CommonStyleType;
  labelIconContainer?: CommonStyleType;
  label?: TypographyTypes;
  icon?: IconTypes;
  tooltipVariant?: string;
  sublabel?: TypographyTypes;
  embebed?: DividerEmbebedType;
};

export type DividerEmbebedType = {
  [border in DividerEmbebed]?: CommonStyleType;
};

export type DividerStylesType<P extends string | number | symbol> = {
  [variant in P]: DividerVariantStylesProps;
};
