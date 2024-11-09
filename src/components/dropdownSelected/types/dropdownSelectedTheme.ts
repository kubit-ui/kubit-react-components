import { CommonStyleType } from '@/types/styles/commonStyle';
import { IconTypes } from '@/types/styles/icon';
import { TypographyTypes } from '@/types/styles/typography';

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
