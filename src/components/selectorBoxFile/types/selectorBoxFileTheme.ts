import { CommonStyleType } from '@/types/styles/commonStyle';
import { IconTypes } from '@/types/styles/icon';
import { TypographyTypes } from '@/types/styles/typography';

import { IconPositionType } from '../../button/types/buttonIconPosition';
import { SelectorBoxFileStateType } from './state';

export type SelectorBoxFileStateStylesType = {
  animationContainer?: CommonStyleType;
  topAnimationContainer?: CommonStyleType;
  leftAnimationContainer?: CommonStyleType;
  bottomAnimationContainer?: CommonStyleType;
  rightAnimationContainer?: CommonStyleType;
  borderAnimationContainer?: CommonStyleType;
  containerBoxContainer?: CommonStyleType;
  containerBoxIcon?: IconTypes;
  containerBoxLoader?: {
    variant: string;
    width?: string;
  };
  containerBoxTextsContainer?: CommonStyleType;
  containerBoxFilename?: TypographyTypes;
  containerBoxActionText?: TypographyTypes;
  containerBoxDescription?: TypographyTypes;
  actionIcon?: IconTypes;
  actionIconAndActionTextContainer?: CommonStyleType;
};

type SelectorBoxVariableStatesType = {
  [key in SelectorBoxFileStateType]: SelectorBoxFileStateStylesType;
};

export type SelectorBoxFilePropsStylesType = {
  header?: CommonStyleType;
  titleSubtitleContainer?: CommonStyleType;
  title?: TypographyTypes;
  subtitle?: TypographyTypes;
  descriptionContainer?: CommonStyleType;
  description?: TypographyTypes;
  button?: {
    size?: string;
    iconPosition?: IconPositionType;
    variant?: string;
  };
  tooltipIconContainer?: CommonStyleType;
  tooltipIcon?: IconTypes;
  tooltip?: { variant: string };
  errorMessageContainer?: CommonStyleType;
  errorMessageIcon?: IconTypes;
  errorMessage?: TypographyTypes;
  states?: SelectorBoxVariableStatesType;
  actionIconAndActionTextContainer?: CommonStyleType;
};

export type SelectorBoxFileStylesType<P extends string | number | symbol> = {
  [variant in P]?: SelectorBoxFilePropsStylesType;
};
