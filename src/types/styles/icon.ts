import { DeviceBreakpointsType } from '../breakpoints';

export type IconGenericType = {
  color?: string;
  width?: string;
  height?: string;
};

export type IconTypes = IconGenericType & {
  [key in DeviceBreakpointsType]?: IconGenericType;
};
