import { CommonStyleType } from '@/types/styles/commonStyle';
import { TypographyTypes } from '@/types/styles/typography';

export type TextCountPropsStylesType = {
  wrapper?: CommonStyleType;
  letfText?: TypographyTypes;
  rightText?: TypographyTypes;
};

export type TextCountStylesType<P extends string | number | symbol> = {
  [variant in P]: TextCountPropsStylesType;
};
