import { CommonStyleType, TypographyTypes } from '@/types';

export type TextCountPropsStylesType = {
  wrapper?: CommonStyleType;
  letfText?: TypographyTypes;
  rightText?: TypographyTypes;
};

export type TextCountStylesType<P extends string | number | symbol> = {
  [variant in P]: TextCountPropsStylesType;
};
