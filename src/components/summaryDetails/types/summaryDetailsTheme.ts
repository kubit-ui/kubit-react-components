import { CommonStyleType } from '@/types/styles/commonStyle';
import { IconTypes } from '@/types/styles/icon';
import { TypographyTypes } from '@/types/styles/typography';

export type SummaryDetailsPropsStylesType = {
  container?: CommonStyleType;
  header?: CommonStyleType & {
    firstChild?: CommonStyleType;
    lastChild?: CommonStyleType;
  };
  leftIconContainer?: CommonStyleType & {
    allowRotate?: boolean;
  };
  leftOpenIcon?: IconTypes;
  leftClosedIcon?: IconTypes;
  titleContainer?: CommonStyleType;
  title?: TypographyTypes;
  rightIconContainer?: CommonStyleType & {
    allowRotate?: boolean;
  };
  rightOpenIcon?: IconTypes;
  rightClosedIcon?: IconTypes;
  description?: TypographyTypes;
  body?: CommonStyleType;
  // Line separator
  lineSeparatorVariant?: string;
  hasLineSeparator?: boolean;
};

export type SummaryDetailsStylesType<V extends PropertyKey> = {
  [key in V]: SummaryDetailsPropsStylesType;
};
