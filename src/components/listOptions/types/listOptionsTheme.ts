import { CommonStyleType } from '@/types/styles/commonStyle';
import { TypographyTypes } from '@/types/styles/typography';

export type ListOptionsPropsStylesType = {
  parentContainer?: CommonStyleType;
  titleContainer?: CommonStyleType;
  title?: TypographyTypes;
  optionsContainer?: CommonStyleType;
};

export type ListOptionsStylesType<P extends string | number | symbol> = {
  [key in P]?: ListOptionsPropsStylesType;
};
