import { DeviceBreakpointsType } from '@/types/breakpoints';

export type OperativeLayoutConfigByDevice = {
  gap?: string;
  margin?: number;
  columns?: number;
};

export type OperativeLayoutVariantStylesType = {
  gridConfig?: {
    [deviceBreakpoint in DeviceBreakpointsType]?: OperativeLayoutConfigByDevice;
  };
  defaultColumnsConfig?: {
    main?: {
      [DeviceBreakpointsType.LARGE_DESKTOP]?: number;
      [DeviceBreakpointsType.DESKTOP]?: number;
      DESKTOP_FULL?: number;
      [DeviceBreakpointsType.TABLET]?: number;
      [DeviceBreakpointsType.MOBILE]?: number;
    };
    aside?: {
      [deviceBreakpoint in DeviceBreakpointsType]: number;
    };
  };
  paddingRightGridItem?: string;
  paddingLeftGridItem?: string;
  mainContainerColor?: string;
  asideContainerColor?: string;
  maxWidthParentContainer?: { [key in DeviceBreakpointsType]?: string };
  paddingBottomSize?: string;
};

export type OperativeLayoutStylesVariantType = {
  [key: string]: OperativeLayoutVariantStylesType;
};

export type OperativeLayoutStylesType<P extends string | number | symbol> = {
  [variant in P]?: OperativeLayoutVariantStylesType;
};
