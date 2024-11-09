import { CommonStyleType } from '@/types/styles/commonStyle';
import { TypographyTypes } from '@/types/styles/typography';

export type TableBodyPropsStylesType = {
  container?: CommonStyleType & TypographyTypes;
};

export type TableBodyStylesType<P extends string | number | symbol> = {
  [variant in P]: TableBodyPropsStylesType;
};
