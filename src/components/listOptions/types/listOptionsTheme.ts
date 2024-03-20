import { CommonStyleType, TypographyTypes } from '@/types';

export type ListOptionsPropsStylesType = {
  parentContainer?: CommonStyleType;
  titleContainer?: CommonStyleType;
  title?: TypographyTypes;
  optionsContainer?: CommonStyleType;
};

export type ListOptionsStylesType<P extends string | number | symbol> = {
  [key in P]?: ListOptionsPropsStylesType;
};
