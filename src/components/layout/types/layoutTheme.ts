import { GridConfigType } from '@/components/grid';
import { DeviceBreakpointsType } from '@/types/breakpoints';

export type ConfigByDevice = {
  gap?: string;
  margin?: number;
  columns?: number;
};

export type LayoutVariantStylesType = {
  padding_botom_size?: string;
  gridConfig?: {
    [deviceBreakpoint in DeviceBreakpointsType]?: GridConfigType;
  };
  defaultColumnsConfig?: {
    header?: {
      [deviceBreakpoint in DeviceBreakpointsType]?: number;
    };
    main?: {
      [DeviceBreakpointsType.LARGE_DESKTOP]?: number;
      [DeviceBreakpointsType.DESKTOP]?: number;
      DESKTOP_FULL?: number;
      [DeviceBreakpointsType.TABLET]?: number;
      [DeviceBreakpointsType.MOBILE]?: number;
    };
    aside?: {
      [deviceBreakpoint in DeviceBreakpointsType]?: number;
    };
    footer?: {
      [deviceBreakpoint in DeviceBreakpointsType]?: number;
    };
  };
};

export type LayoutStylesVariantType = {
  [key: string]: LayoutVariantStylesType;
};

export type LayoutStylesType<P extends string | number | symbol> = {
  [variant in P]: LayoutVariantStylesType;
};
