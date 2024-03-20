import { CommonStyleType, IconTypes, TypographyTypes } from '@/types';

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
