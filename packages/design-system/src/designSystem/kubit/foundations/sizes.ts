export const SIZES = {
  max_size_image: '68rem',
  size_25: '0.25rem',
  size_50: '0.5rem',
  size_100: '0.75rem',
  size_150: '1rem',
  size_200: '1.25rem',
  size_250: '1.5rem',
  size_300: '2rem',
  size_350: '2.5rem',
  size_400: '3rem',
  size_450: '3.5rem',
  size_500: '4.5rem',
  size_550: '6rem',
} as const;

export type SizesType = typeof SIZES;
