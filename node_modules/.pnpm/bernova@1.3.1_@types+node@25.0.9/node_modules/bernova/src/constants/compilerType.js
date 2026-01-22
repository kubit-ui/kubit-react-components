/**
 * Valid compiler types for Bernova CSS generation
 * Determines what parts of the CSS will be compiled and output
 */
const compilerTypeValid = {
  /** Generate only foundation styles (CSS variables, base styles, reset CSS) */
  foundationOnly: 'foundationOnly',
  /** Generate only component/theme styles (classes, utilities, media queries) */
  componentOnly: 'componentOnly',
  /** Generate both foundation and component styles (complete build) */
  full: 'full',
};

module.exports = { compilerTypeValid };
