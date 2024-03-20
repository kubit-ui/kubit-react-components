export const BREAKPOINTS = {
  ZERO: 0,
  S: 22.5,
  M: 48,
  L: 64,
  XL: 125,
} as const;

export type BreakPointsType = typeof BREAKPOINTS;
