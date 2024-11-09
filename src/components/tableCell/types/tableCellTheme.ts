import { CommonStyleType } from '@/types/styles/commonStyle';
import { TypographyTypes } from '@/types/styles/typography';

export type TableCellPropsStylesType = {
  container?: CommonStyleType & TypographyTypes;
};

export type TableCellStylesType<P extends string | number | symbol> = {
  [variant in P]: TableCellPropsStylesType;
};
