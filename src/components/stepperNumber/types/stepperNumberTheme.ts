import { CommonStyleType } from '@/types/styles/commonStyle';
import { IconTypes } from '@/types/styles/icon';
import { TypographyTypes } from '@/types/styles/typography';

import { StepperNumberOrientationType } from './orientation';
import { StepperNumberStateType } from './state';

export type StepperNumberPropsStylesType = {
  stepContainer?: CommonStyleType;
  stepCircle?: CommonStyleType;
  stepIndex?: TypographyTypes;
  iconSelected?: IconTypes;
  stepNameContainer?: CommonStyleType & { isLast?: CommonStyleType };
  stepName?: TypographyTypes;
  stepBar?: CommonStyleType;
};

export type StepperNumberStateStylesType = {
  container?: CommonStyleType;
} & {
  [i in StepperNumberStateType]?: StepperNumberPropsStylesType;
};

export type StepperNumberDimensionStylesType = {
  [d in StepperNumberOrientationType]?: StepperNumberStateStylesType;
};

export type StepperNumberStylesType<P extends string | number | symbol> = {
  [key in P]?: StepperNumberDimensionStylesType;
};
