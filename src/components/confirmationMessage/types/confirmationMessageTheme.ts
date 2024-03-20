import { CommonStyleType, IconTypes, IllustrationTypes, TypographyTypes } from '@/types/styles';

import { ConfirmationMessageStateType } from './state';

export type ConfirmationMessagePropsStylesType = {
  container?: CommonStyleType;
  titleAndDescriptionContainer?: CommonStyleType;
  icon?: IconTypes;
  illustration?: IllustrationTypes;
  titleContainer?: CommonStyleType;
  title?: TypographyTypes;
  descriptionContainer?: CommonStyleType;
  description?: TypographyTypes;
  secondaryDescription?: TypographyTypes;
  content?: CommonStyleType;
  footer?: CommonStyleType & {
    variant?: string;
  };
};

export type ConfirmationMessagePropsStateStylesType = {
  [state in ConfirmationMessageStateType]?: ConfirmationMessagePropsStylesType;
};

export type ConfirmationMessageStylesType<P extends string | number | symbol> = {
  [variant in P]?: ConfirmationMessagePropsStateStylesType;
};
