import { CommonStyleType, TypographyTypes } from '@/types';

export type TableCellPropsStylesType = {
  container?: CommonStyleType & TypographyTypes;
};

export type TableCellStylesType<P extends string | number | symbol> = {
  [variant in P]: TableCellPropsStylesType;
};
