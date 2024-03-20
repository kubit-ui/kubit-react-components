import { DeviceBreakpointsType } from '../breakpoints';

export type IllustrationGenericType = {
  width?: string;
  height?: string;
};

export type IllustrationTypes = IllustrationGenericType & {
  [key in DeviceBreakpointsType]?: IllustrationGenericType;
};
