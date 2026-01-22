export const BREAKPOINTS = {
  L: 64,
  M: 48,
  S: 22.5,
  XL: 125,
  ZERO: 0,
} as const;

export type BreakPointsType = typeof BREAKPOINTS;

export type DeviceBreakpointsType =
  | 'mobile'
  | 'tablet'
  | 'desktop'
  | 'large_desktop';

export const DEVICE_BREAKPOINTS = {
  DESKTOP: 'desktop',
  LARGE_DESKTOP: 'large_desktop',
  MOBILE: 'mobile',
  TABLET: 'tablet',
} as const;
