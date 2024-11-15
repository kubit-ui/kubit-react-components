import { CommonStyleType } from '@/types/styles/commonStyle';
import { IconTypes } from '@/types/styles/icon';
import { TypographyTypes } from '@/types/styles/typography';

import { ButtonKeyboardStateType, VirtualKeyboardStateType } from './state';

export type DigitButtonStylesProps = CommonStyleType & TypographyTypes;

export type RemoveButtonStylesProps = CommonStyleType;

export type VirtualKeyboardPropsStylesType = {
  container?: CommonStyleType & {
    icon?: IconTypes;
  };
  // buttons
  removeButton?: {
    [key in ButtonKeyboardStateType]?: RemoveButtonStylesProps;
  };

  digitButtons?: {
    wrapper?: CommonStyleType & {
      [key in ButtonKeyboardStateType]?: {
        button?: DigitButtonStylesProps;
        text?: DigitButtonStylesProps;
      };
    };
  };
};

export type VirtualKeyboardStateStylesType = {
  [key in VirtualKeyboardStateType]?: VirtualKeyboardPropsStylesType;
};

export type VirtualKeyboardStylesType<V extends string | number | symbol> = {
  [key in V]: VirtualKeyboardStateStylesType;
};
