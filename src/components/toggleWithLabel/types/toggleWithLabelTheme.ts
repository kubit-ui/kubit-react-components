import { CommonStyleType, TypographyTypes } from '@/types';

export type ToggleWithLabelStylePropsType = {
  container?: CommonStyleType & TypographyTypes;
  legendContainer?: CommonStyleType;
  rowContainer?: CommonStyleType & TypographyTypes;
  rowLegendContainer?: CommonStyleType;
  legend?: TypographyTypes;
  required?: TypographyTypes;
};

export type ToggleWithLabelStylesType<P extends string | number | symbol> = {
  [key in P]?: ToggleWithLabelStylePropsType;
};
