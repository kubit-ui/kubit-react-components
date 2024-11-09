import { CommonStyleType } from '@/types/styles/commonStyle';
import { TypographyTypes } from '@/types/styles/typography';

export type TableCaptionPropsStylesType = {
  container?: CommonStyleType & TypographyTypes;
};

export type TableCaptionStylesType<P extends string | number | symbol> = {
  [variant in P]: TableCaptionPropsStylesType;
};
