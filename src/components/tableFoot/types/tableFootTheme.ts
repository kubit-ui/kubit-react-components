import { CommonStyleType } from '@/types/styles/commonStyle';
import { TypographyTypes } from '@/types/styles/typography';

export type TableFootPropsStylesType = {
  container?: CommonStyleType & TypographyTypes;
};

export type TableFootStylesType<P extends string | number | symbol> = {
  [variant in P]: TableFootPropsStylesType;
};
