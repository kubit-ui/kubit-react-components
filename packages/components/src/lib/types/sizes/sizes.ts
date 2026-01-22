export type SizesType =
  | 'extra_small'
  | 'small'
  | 'medium'
  | 'large'
  | 'extra_large';

export const SIZES = {
  EXTRA_LARGE: 'extra_large',
  EXTRA_SMALL: 'extra_small',
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
} as const;
