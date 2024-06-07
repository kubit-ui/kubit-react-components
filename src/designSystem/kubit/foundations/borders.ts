export const BORDERS = {
  border_00: '0rem', // 0px
  border_50: '0.0625rem', // 1px
  border_100: '0.125rem', // 2px
  border_200: '0.25rem', // 4px
} as const;

export const RADIUS = {
  radius_00: '0rem', // 0px
  radius_25: '0.13 rem', // 2px
  radius_50: '0.25rem', // 4px
  radius_75: '0.5rem', // 8px
  radius_100: '6.25rem', // 100px
  radius_circle: '50%',
};

export type BordersType = typeof BORDERS;
export type RadiusType = typeof RADIUS;
