import { CommonStyleType } from '@/types/styles/commonStyle';
import { TypographyTypes } from '@/types/styles/typography';

export type StepperProgressCommonProps = {
  container?: CommonStyleType;
  progress?: CommonStyleType & {
    webkitProgressBar?: CommonStyleType;
    webkitProgressValue?: CommonStyleType;
    mozProgressBar?: CommonStyleType;
  };
  helpTextContainer?: CommonStyleType;
  currentStep?: TypographyTypes;
  maxStep?: TypographyTypes;
};

export type StepperProgressStylesType<P extends string | number | symbol> = {
  [key in P]?: StepperProgressCommonProps;
};
