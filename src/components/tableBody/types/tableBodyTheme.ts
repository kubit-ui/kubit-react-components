import { CommonStyleType, TypographyTypes } from '@/types';

export type TableBodyPropsStylesType = {
  container?: CommonStyleType & TypographyTypes;
};

export type TableBodyStylesType<P extends string | number | symbol> = {
  [variant in P]: TableBodyPropsStylesType;
};
