/**
 * Breakpoints
 * @description Breakpoints for responsive design
 */
export type BreakpointsType = {
  ZERO: number;
  S: number;
  M: number;
  L: number;
  XL?: number;
};

/**
 * Device Breakpoints
 * @description Breakpoints for responsive design
 * @enum {string}
 * @readonly
 * @property {string} MOBILE - Mobile breakpoint
 * @property {string} TABLET - Tablet breakpoint
 * @property {string} DESKTOP - Desktop breakpoint
 * @property {string} LARGE_DESKTOP - Large desktop breakpoint
 */
export enum DeviceBreakpointsType {
  MOBILE = 'MOBILE',
  TABLET = 'TABLET',
  DESKTOP = 'DESKTOP',
  LARGE_DESKTOP = 'LARGE_DESKTOP',
}
