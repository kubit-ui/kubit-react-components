import { CommonStyleType, TypographyTypes } from '@/types';

export type CardImageVariantStylesType = {
  container?: CommonStyleType;
  imageContainer?: CommonStyleType;
  content?: CommonStyleType;
  textContainer?: CommonStyleType;
  titleContainer?: CommonStyleType;
  title?: TypographyTypes;
  descriptionContainer?: CommonStyleType;
  description?: TypographyTypes;
  linkContainer?: CommonStyleType;
};

export type CardImageStylesType<P extends string | number | symbol> = {
  [key in P]?: CardImageVariantStylesType;
};
