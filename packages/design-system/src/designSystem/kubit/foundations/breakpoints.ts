export const BREAKPOINTS = {
  L: 64,
  M: 48,
  S: 22.5,
  XL: 125,
  ZERO: 0,
} as const;

export type BreakPointsType = typeof BREAKPOINTS;
