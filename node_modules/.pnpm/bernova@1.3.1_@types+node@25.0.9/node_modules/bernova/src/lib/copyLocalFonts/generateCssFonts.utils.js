/**
 * CSS Font Generator for Bernova CSS Framework
 *
 * Generates CSS font declarations for both Google Fonts and local font files.
 * Creates @import statements for Google Fonts and @font-face rules for local fonts.
 */

const path = require('path');

/**
 * Generates CSS font declarations from fonts configuration
 * Supports both Google Fonts (via @import) and local fonts (via @font-face)
 *
 * @param {Object} fonts - Fonts configuration object
 * @param {Array} fonts.google - Google Fonts configuration array
 * @param {Array} fonts.local - Local fonts configuration array
 * @returns {string} Generated CSS font declarations
 * @example
 * generateCssFonts({
 *   google: [{ name: 'Roboto', weights: [400, 700] }],
 *   local: [{ name: 'CustomFont', files: { 400: './custom.ttf' } }]
 * })
 */
const generateCssFonts = (fonts) => {
  let css = '';

  // Generate Google Fonts @import statements
  if (fonts?.google?.length) {
    fonts.google.forEach((font) => {
      const weights = font.weights.join(';');
      css += `@import url('https://fonts.googleapis.com/css2?family=${font.name.replace(
        / /g,
        '+'
      )}:wght@${weights}&display=swap');\n`;
    });
  }

  // Generate local fonts @font-face declarations
  if (fonts?.local?.length) {
    fonts.local.forEach((font) => {
      Object.entries(font.files).forEach(([weight, filePath]) => {
        css += `
  @font-face {
    font-family: '${font.name}';
    src: url('./fonts/${path.basename(filePath)}') format('truetype');
    font-weight: ${weight};
    font-style: normal;
  }\n`;
      });
    });
  }

  return css;
};

module.exports = { generateCssFonts };
