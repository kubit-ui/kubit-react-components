import { CommonStyleType, TypographyTypes } from '@/types';

export type TablePropsStylesTypeV2 = {
  wrapper?: CommonStyleType;
  scrollableContainer?: CommonStyleType;
  leftBoxShadowContainer?: CommonStyleType;
  rightBoxShadowContainer?: CommonStyleType;
  container?: CommonStyleType & TypographyTypes;
  headBoxShadow?: string;
  leftBoxShadow?: string;
  rightBoxShadow?: string;
};

export type TableStylesTypeV2<P extends string | number | symbol> = {
  [variant in P]: TablePropsStylesTypeV2;
};
