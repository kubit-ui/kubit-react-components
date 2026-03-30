export interface BreakpointsType {
  ZERO: number;
  S: number;
  M: number;
  L: number;
  XL?: number;
}

export type DeviceBreakpointsType =
  | 'mobile'
  | 'tablet'
  | 'desktop'
  | 'large_desktop';
