import { CommonStyleType, DeviceBreakpointsType, POSITIONS } from '@/types';

export type OliveMenuGlobalStylesType = {
  container?: CommonStyleType;
  buttonContainer?: CommonStyleType;
  button?: CommonStyleType & {
    [key in DeviceBreakpointsType]?: {
      size?: string;
    };
  };
  listOptionsContainer?: CommonStyleType;
  popover?: CommonStyleType;
  popoverVariant?: string;
  actionBottomSheet?: {
    variant?: string;
  } & {
    [key in DeviceBreakpointsType]?: {
      alignTitle?: POSITIONS;
    };
  };
  listOptions?: {
    variant?: string;
    optionVariant?: string;
  };
};

export type OliveMenuStylesType<P extends string | number | symbol> = {
  [key in P]?: OliveMenuGlobalStylesType;
};
