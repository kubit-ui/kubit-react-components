import { CommonStyleType, IconTypes, TypographyTypes } from '@/types';

import { DropdownSelectedStateType } from './states';

export type DropdownSelectedPropsStylesType = {
  container?: CommonStyleType;
  buttonOrLinkContainer?: CommonStyleType & TypographyTypes;
  labelOpened?: TypographyTypes;
  labelClosed?: TypographyTypes;
  iconOpened?: IconTypes;
  iconClosed?: IconTypes;
  popover?: { variant?: string };
  listOptionsContainer?: CommonStyleType;
  listOptions?: { variant?: string; optionVariant?: string };
};

export type DropdownSelectedStateStylesType = {
  [state in DropdownSelectedStateType]?: DropdownSelectedPropsStylesType;
};

export type DropdownSelectedStylesType<V extends string | number | symbol> = {
  [variant in V]: DropdownSelectedStateStylesType;
};
