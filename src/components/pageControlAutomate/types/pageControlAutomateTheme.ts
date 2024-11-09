import { CommonStyleType } from '@/types/styles/commonStyle';
import { IconTypes } from '@/types/styles/icon';

export type PageControlAutomatePropsStylesType = {
  container?: CommonStyleType;
  indicatorsContainer?: CommonStyleType;
  mediaButtonContainer?: CommonStyleType;
  leftArrowContainer?: CommonStyleType;
  rightArrowContainer?: CommonStyleType;
  iconContainer?: CommonStyleType;
  leftArrowIcon?: IconTypes & { disabled?: IconTypes };
  rightArrowIcon?: IconTypes & { disabled?: IconTypes };
  mediaButton?: {
    iconSize?: string;
    variant?: string;
  };
  mediaProgressBarVariant?: string;
};

export type PageControlAutomateStylesType<V extends string | number | symbol> = {
  [variant in V]: PageControlAutomatePropsStylesType;
};
