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

export const DEVICE_BREAKPOINTS = {
  DESKTOP: 'desktop',
  LARGE_DESKTOP: 'large_desktop',
  MOBILE: 'mobile',
  TABLET: 'tablet',
} as const;

/**
 * Utility functions for checking device breakpoint types.
 * These helpers allow you to easily determine if a given DeviceBreakpointsType
 * matches a specific device category (mobile, tablet, desktop, etc).
 */
export const DeviceBreakpointsTypeUtils = {
  /**
   * Returns true if the device is a desktop device.
   */
  isDesktop: (device: DeviceBreakpointsType): boolean =>
    device === DEVICE_BREAKPOINTS.DESKTOP,

  /**
   * Returns true if the device is either desktop or large desktop.
   */
  isDesktopOrLargeDesktop: (device: DeviceBreakpointsType): boolean =>
    DeviceBreakpointsTypeUtils.isDesktop(device) ||
    DeviceBreakpointsTypeUtils.isLargeDesktop(device),

  /**
   * Returns true if the device is a large desktop device.
   */
  isLargeDesktop: (device: DeviceBreakpointsType): boolean =>
    device === DEVICE_BREAKPOINTS.LARGE_DESKTOP,

  /**
   * Returns true if the device is a mobile device.
   */
  isMobile: (device: DeviceBreakpointsType): boolean =>
    device === DEVICE_BREAKPOINTS.MOBILE,

  /**
   * Returns true if the device is either mobile or tablet.
   */
  isMobileOrTablet: (device: DeviceBreakpointsType): boolean =>
    DeviceBreakpointsTypeUtils.isMobile(device) ||
    DeviceBreakpointsTypeUtils.isTablet(device),

  /**
   * Returns true if the device is a tablet device.
   */
  isTablet: (device: DeviceBreakpointsType): boolean =>
    device === DEVICE_BREAKPOINTS.TABLET,
};
