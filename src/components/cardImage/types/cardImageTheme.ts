import { CommonStyleType } from '@/types/styles/commonStyle';
import { TypographyTypes } from '@/types/styles/typography';

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
