import { CommonStyleType } from '@/types/styles/commonStyle';
import { IconTypes } from '@/types/styles/icon';
import { TypographyTypes } from '@/types/styles/typography';

import { QuickButtonState } from './state';

export type QuickButtonStatePropsStyles = {
  container?: CommonStyleType & TypographyTypes;
  button?: CommonStyleType & TypographyTypes;
  label?: TypographyTypes;
  icon?: IconTypes;
};

export type QuickButtonVariantStylesType = {
  [state in QuickButtonState]?: QuickButtonStatePropsStyles;
};

export type QuickButtonStylesType<V extends string | number | symbol> = {
  [variant in V]?: QuickButtonVariantStylesType;
};
