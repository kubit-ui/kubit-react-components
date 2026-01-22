/**
 * Base CSS Generation for Bernova
 *
 * Generates foundational CSS including font definitions and CSS reset.
 * Handles local font copying and CSS font-face generation.
 */

const { resetCss: defaultResetCss } = require('../../constants/resetCss');
const { copyLocalFonts } = require('../copyLocalFonts/copyLocalFonts.utils');
const {
  generateCssFonts,
} = require('../copyLocalFonts/generateCssFonts.utils');

/**
 * Generates base CSS content including fonts and optional reset styles
 *
 * @param {Object} params - Generation parameters
 * @param {Object} params.fonts - Font configuration object
 * @param {Array} params.fonts.local - Local font files to copy
 * @param {boolean} params.resetCss - Whether to include CSS reset
 * @param {string} params.stylesPath - Output path for font files
 * @returns {Promise<string>} Generated base CSS content
 */
const generateBaseCss = async ({ fonts, resetCss, stylesPath }) => {
  // Copy local font files to the output directory
  if (fonts?.local && Array.isArray(fonts.local) && fonts.local.length > 0) {
    await copyLocalFonts(fonts.local, stylesPath);
  }

  // Generate base CSS content
  return (() => {
    let baseCss = '';

    // Add font-face declarations if fonts are configured
    if (fonts) {
      const fontCss = generateCssFonts(fonts);
      if (fontCss) {
        baseCss += fontCss + '\n';
      }
    }

    // Add CSS reset if enabled
    if (resetCss) {
      baseCss += defaultResetCss + '\n';
    }

    return baseCss;
  })();
};

module.exports = { generateBaseCss };
