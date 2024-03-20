import { CommonStyleType, TypographyTypes } from '@/types';

export enum LoadingStateState {
  PRIMARY = 'PRIMARY',
  PRIMARY_ALTERNATIVE = 'PRIMARY_ALTERNATIVE',
  SECONDARY = 'SECONDARY',
  LOGO_WITH_CONTAINER = 'LOGO_WITH_CONTAINER',
  LOGO = 'LOGO',
  SPINNER_BLUE = 'SPINNER_BLUE',
  SPINNER_WHITE = 'SPINNER_WHITE',
  FOR_BUTTONS = 'FOR_BUTTONS',
}

export type LoadingStateGlobalStateStylesType = {
  titleContainer?: CommonStyleType;
  title?: TypographyTypes;
  descriptionContainer?: CommonStyleType;
  description?: TypographyTypes;
  states?: LoadingStateVariableStatesType;
};

export type LoadingStateStateStylesType = {
  thirdPartyAnimation?: {
    variant?: string;
    height?: string;
    width?: string;
  };
};

export type LoadingStateVariableStatesType = {
  [key in LoadingStateState]?: LoadingStateStateStylesType;
};
export type LoadingStateStylesType<P extends string | number | symbol> = {
  [key in P]: LoadingStateGlobalStateStylesType;
};
