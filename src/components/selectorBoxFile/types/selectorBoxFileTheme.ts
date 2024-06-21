import { IconPositionType } from '@/components/button';
import { CommonStyleType, IconTypes, TypographyTypes } from '@/types/styles';

import { SelectorBoxFileStateType } from './state';

type SelectorBoxFileStateStylesType = {
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
