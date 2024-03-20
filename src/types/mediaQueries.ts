/**
 * @description
 * Media queries for responsive design
 * @property {string} onlyDesktop - Media query for only desktop
 * @property {string} tabletAndDesktop - Media query for tablet and desktop
 * @property {string} onlyTablet - Media query for only tablet
 * @property {string} mobileAndTablet - Media query for mobile and tablet
 * @property {string} onlyMobile - Media query for only mobile
 * @property {object} matchMedia - Object with media queries for matchMedia
 * @property {string} matchMedia.onlyDesktop - Media query for only desktop
 * @property {string} matchMedia.onlyTablet - Media query for only tablet
 * @property {string} matchMedia.onlyMobile - Media query for only mobile
 */
export type MediaQueriesType = {
  onlyDesktop: string;
  tabletAndDesktop: string;
  onlyTablet: string;
  mobileAndTablet: string;
  onlyMobile: string;
  matchMedia: {
    onlyDesktop: string;
    onlyTablet: string;
    onlyMobile: string;
  };
};
