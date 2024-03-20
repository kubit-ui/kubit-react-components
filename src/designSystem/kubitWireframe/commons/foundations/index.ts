import { DefaultTheme } from 'styled-components';

import { BORDERS } from './borders';
import { BREAKPOINTS } from './breakpoints';
import { getColors } from './colors';
import { MEDIA_QUERIES } from './mediaQueries';
import { SHADOW } from './shadow';
import { SIZES } from './sizes';
import { SPACINGS } from './spacings';
import { FONT_FAMILY, FONT_WEIGHT, HEADING, PARAGRAPH, TEXT_ALIGN } from './typography';
import { Z_INDEX } from './zIndex';

type Foundations = DefaultTheme & {
  COLORS: object;
  BORDERS: object;
  FONT_FAMILY: object;
  FONT_WEIGHT: object;
  HEADING: object;
  PARAGRAPH: object;
  TEXT_ALIGN: object;
  SIZES: object;
  SHADOW: object;
};

export const getFoundations = (COLORS: string): Foundations => ({
  COLORS: getColors(COLORS),
  BREAKPOINTS: BREAKPOINTS,
  MEDIA_QUERIES: MEDIA_QUERIES,
  Z_INDEX: Z_INDEX,
  SPACINGS: SPACINGS,
  BORDERS: BORDERS,
  FONT_FAMILY: FONT_FAMILY,
  FONT_WEIGHT: FONT_WEIGHT,
  HEADING: HEADING,
  PARAGRAPH: PARAGRAPH,
  TEXT_ALIGN: TEXT_ALIGN,
  SIZES: SIZES,
  SHADOW: SHADOW,
});

export * from './breakpoints';
export * from './mediaQueries';
export * from './zIndex';
export * from './spacings';
export * from './borders';
export * from './typography';
export * from './sizes';
export * from './shadow';
