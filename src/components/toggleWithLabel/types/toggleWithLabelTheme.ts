import { CommonStyleType, PointerTypes, TypographyTypes } from '@/types';

export type ToggleWithLabelStylePropsType = {
  container?: CommonStyleType & TypographyTypes & PointerTypes;
  legendContainer?: CommonStyleType;
  rowContainer?: CommonStyleType & TypographyTypes;
  rowLegendContainer?: CommonStyleType;
  legend?: TypographyTypes & { disabled?: TypographyTypes };
  required?: TypographyTypes;
};

export type ToggleWithLabelStylesType<P extends string | number | symbol> = {
  [key in P]?: ToggleWithLabelStylePropsType;
};
