export const SPACINGS = {
  spacing_0: '0rem', // 0px
  spacing_25: '0.063rem', // 1px
  spacing_50: '0.125rem', // 2px
  spacing_100: '0.25rem', // 4px
  spacing_150: '0.5rem', // 8px
  spacing_200: '0.625rem', // 10px
  spacing_250: '0.75rem', // 12px
  spacing_300: '1rem', // 16px
  spacing_350: '1.25rem', // 20px
  spacing_400: '1.5rem', // 24px
  spacing_450: '2rem', // 32px
  spacing_500: '2.5rem', // 40px
  spacing_550: '3rem', // 48px
  spacing_600: '3.5rem', // 56px
  spacing_650: '4rem', // 64px
  spacing_675: '4.5rem', // 72px
  spacing_700: '5rem', // 80px
  spacing_740: '7.5rem', // 120px
  spacing_750: '8rem', // 128px
  spacing_800: '8.5rem', // 136px
  // percentages
  spacing_100_percent: '100%',
  spacing_50_percent: '50%',
  spacing_70_percent: '70%',
  spacing_30_percent: '30%',
  spacing_25_percent: '25%',
  spacing_20_percent: '20%',
  spacing_10_percent: '10%',
  spacing_5_percent: '5%',
  // window
  spacing_100_vh: '100vh',
  spacing_100_vw: '100vw',
  // px
  spacing_100_px: '4px',
  spacing_180_px: '180px',
} as const;

export type SpacingsType = typeof SPACINGS;
