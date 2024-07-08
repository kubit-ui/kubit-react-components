import { CommonStyleType, TypographyTypes } from '@/types';

export type TableFootPropsStylesType = {
  container?: CommonStyleType & TypographyTypes;
};

export type TableFootStylesType<P extends string | number | symbol> = {
  [variant in P]: TableFootPropsStylesType;
};
