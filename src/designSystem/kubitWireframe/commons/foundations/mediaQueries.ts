//           MOBILE          |     TABLET    |     DESKTOP
// |------------|------------|---------------|----------------
// 0            22.5         48              64
// ZERO         S            M               L
import { BREAKPOINTS } from './breakpoints';

const pxToRem = (px: number): number => px / 16;

const MOBILE = {
  max: `${BREAKPOINTS.M - pxToRem(1)}rem`,
} as const;
const TABLET = {
  min: `${BREAKPOINTS.M}rem`,
  max: `${BREAKPOINTS.L - pxToRem(1)}rem`,
} as const;
const DESKTOP = {
  min: `${BREAKPOINTS.L}rem`,
} as const;

const LARGE_DESKTOP = {
  min: `${BREAKPOINTS.XL}rem`,
} as const;

export const MEDIA_QUERIES = {
  onlyLargeDesktop: `@media (min-width: ${LARGE_DESKTOP.min})`,
  onlyDesktop: `@media (min-width: ${DESKTOP.min})`,
  tabletAndDesktop: `@media (min-width: ${TABLET.min})`,
  onlyTablet: `@media (max-width: ${TABLET.max}) and (min-width: ${TABLET.min})`,
  mobileAndTablet: `@media (max-width: ${TABLET.max})`,
  onlyMobile: `@media (max-width: ${MOBILE.max})`,
  // values for js mediaqueries
  matchMedia: {
    onlyDesktop: `(min-width: ${DESKTOP.min})`,
    onlyTablet: `(max-width: ${TABLET.max}) and (min-width: ${TABLET.min})`,
    onlyMobile: `(max-width: ${MOBILE.max})`,
    onlyLargeDesktop: `(min-width: ${LARGE_DESKTOP.min})`,
  },
} as const;
