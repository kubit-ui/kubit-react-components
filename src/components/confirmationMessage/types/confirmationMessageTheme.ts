import { CommonStyleType } from '@/types/styles/commonStyle';
import { IconTypes } from '@/types/styles/icon';
import { IllustrationTypes } from '@/types/styles/illustration';
import { TypographyTypes } from '@/types/styles/typography';

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
