import { CommonStyleType } from '@/types/styles/commonStyle';
import { TypographyTypes } from '@/types/styles/typography';

export type TableHeadPropsStylesType = {
  container?: CommonStyleType & TypographyTypes;
};

export type TableHeadStylesType<P extends string | number | symbol> = {
  [variant in P]: TableHeadPropsStylesType;
};
