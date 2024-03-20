import { CommonStyleType, IconTypes, TypographyTypes } from '@/types';
import { DeviceBreakpointsType } from '@/types/breakpoints';

import { DrawerLevelPositionTypes } from './level';
import { DrawerVariantPositionTypes } from './variantPosition';

export type DrawerDeviceStyleType = {
  container?: {
    [key in DrawerVariantPositionTypes]?: CommonStyleType;
  };
  iconContainer?: CommonStyleType;
  icon?: IconTypes;
  titleContentFooterContainer?: CommonStyleType & {
    paddingTopIsBlocking?: string;
  };
  titleContainer?: CommonStyleType & TypographyTypes;
  title?: TypographyTypes;
  content?: CommonStyleType & {
    childs?: CommonStyleType;
    firstChild?: CommonStyleType;
    lastChild?: CommonStyleType;
  };
  footer?: CommonStyleType & {
    variant?: string;
  };
  [DrawerLevelPositionTypes.FIRST_LEVEL]?: {
    containerPosition?: DrawerVariantPositionTypes;
  };
  [DrawerLevelPositionTypes.SECOND_LEVEL]?: {
    containerPosition?: DrawerVariantPositionTypes;
  };
};

export type DrawerVariantStylesType = {
  [DeviceBreakpointsType.DESKTOP]?: DrawerDeviceStyleType;
  [DeviceBreakpointsType.TABLET]?: DrawerDeviceStyleType;
  [DeviceBreakpointsType.MOBILE]?: DrawerDeviceStyleType;
};

export type DrawerStylesType<P extends string | number | symbol> = {
  [key in P]?: DrawerVariantStylesType;
};
