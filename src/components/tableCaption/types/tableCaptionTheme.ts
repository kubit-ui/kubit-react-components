import { CommonStyleType, TypographyTypes } from '@/types';

export type TableCaptionPropsStylesType = {
  container?: CommonStyleType & TypographyTypes;
};

export type TableCaptionStylesType<P extends string | number | symbol> = {
  [variant in P]: TableCaptionPropsStylesType;
};
