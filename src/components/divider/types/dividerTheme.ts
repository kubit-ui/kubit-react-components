import { CommonStyleType } from '@/types/styles/commonStyle';
import { IconTypes } from '@/types/styles/icon';
import { TypographyTypes } from '@/types/styles/typography';

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
