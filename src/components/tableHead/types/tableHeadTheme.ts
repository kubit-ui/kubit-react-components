import { CommonStyleType, TypographyTypes } from '@/types';

export type TableHeadPropsStylesType = {
  container?: CommonStyleType & TypographyTypes;
};

export type TableHeadStylesType<P extends string | number | symbol> = {
  [variant in P]: TableHeadPropsStylesType;
};
