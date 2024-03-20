export const BORDERS = {
  border_00: '0rem', // 0px
  border_50: '0.0625rem', // 1px
  border_100: '0.0625rem', // 1px
  border_150: '0rem', // 0px
  border_200: '0.0625rem', // 1px
} as const;

export const RADIUS = {
  radius_00: '0rem', // 0px
  radius_25: '100%', // 100%
  radius_50: '0.25rem', // 4px
  radius_60: '0.25rem', // 4px
  radius_80: '100%', // 100%
  radius_100: '0.5rem', // 8px
  radius_125: '0.75rem', // 12px
  radius_150: '1.5rem', // 24px
  radius_200: '1.75rem', // 28px
  radius_250: '100%', // 32px
  radius_275: '100%',
  radius_300: '2.25rem', // 36px
  radius_full: '100%',
};

export type BordersType = typeof BORDERS;
export type RadiusType = typeof RADIUS;
