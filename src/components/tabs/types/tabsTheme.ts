import { CommonStyleType, DeviceBreakpointsType, IconTypes, TypographyTypes } from '@/types';

import { TabsStateTypes } from './state';

export type TabsVariantStylesType = {
  tabContainer?: Omit<CommonStyleType, 'MOBILE'> & {
    [Key in DeviceBreakpointsType]?: CommonStyleType & {
      focusWithin?: CommonStyleType;
      focus?: CommonStyleType;
      focusVisible?: CommonStyleType;
    };
  };
  arrowLeftIconContainer?: Omit<CommonStyleType, 'MOBILE'> & {
    [DeviceBreakpointsType.MOBILE]?: CommonStyleType & { focusVisible?: CommonStyleType };
  };
  leftIcon?: IconTypes;
  arrowRightIconContainer?: Omit<CommonStyleType, 'MOBILE'> & {
    [DeviceBreakpointsType.MOBILE]?: CommonStyleType & { focusVisible?: CommonStyleType };
  };
  rightIcon?: IconTypes;
  firstTabButton?: CommonStyleType;
  lastTabButton?: CommonStyleType;
  oneTabContainer?: CommonStyleType;
  contentContainer?: CommonStyleType;
  tabButtonsContainer?: CommonStyleType;
  container?: CommonStyleType;
  fullContainer?: CommonStyleType;
} & {
  [key in TabsStateTypes]?: {
    label?: TypographyTypes;
    tabButton?: CommonStyleType;
  };
};

export type TabsStylesType<P extends string | number | symbol> = {
  [key in P]?: TabsVariantStylesType;
};
