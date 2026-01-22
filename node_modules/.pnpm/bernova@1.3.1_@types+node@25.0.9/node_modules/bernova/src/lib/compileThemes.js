/**
 * Theme Compilation Module for Bernova
 *
 * Compiles theme configurations by resolving file paths and loading theme data.
 * Validates file existence and structures theme data for CSS generation.
 */

const path = require('path');
const fs = require('fs');
const { readThemeData } = require('./readFile/readFile.utils');
const { fileExists } = require('./fileExists/fileExists.utils');

/**
 * Compiles a theme configuration by loading and validating theme files
 *
 * @param {Object} params - Compilation parameters
 * @param {Object} params.themeConfig - Theme configuration object
 * @param {string} params.themeConfig.name - Theme name (defaults to 'bernova')
 * @param {string} params.themeConfig.prefix - CSS variable prefix
 * @param {Object} params.themeConfig.theme - Theme styles configuration
 * @param {Object} params.themeConfig.foundations - Foundation styles configuration
 * @param {Object} params.themeConfig.globalStyles - Global styles configuration
 * @param {Object} params.themeConfig.mediaQueries - Media queries configuration
 * @param {string} params.themeConfig.stylesPath - Output path for generated styles
 * @param {Array} params.themeConfig.fonts - Font configurations
 * @param {boolean} params.themeConfig.resetCss - Whether to include CSS reset
 * @param {Object} params.themeConfig.bvTools - Development tools configuration
 * @param {Object} params.themeConfig.typesTools - TypeScript tools configuration
 * @param {Array} params.themeConfig.foreignThemes - External theme integrations
 * @param {string} params.dir - Base directory for resolving relative paths
 * @returns {Object} Compiled theme data and configuration
 */
const compileThemes = ({
  themeConfig: {
    name = 'bernova',
    prefix,
    theme,
    foundations,
    globalStyles,
    mediaQueries,
    stylesPath,
    fonts,
    resetCss,
    bvTools,
    typesTools,
    foreignThemes,
  },
  dir,
}) => {
  // Resolve and validate theme file paths
  const paths = (() => {
    const resolvedPaths = {};

    // Process foundations (CSS variables, base tokens)
    if (
      foundations?.name &&
      foundations?.path &&
      fileExists(dir, foundations.path)
    ) {
      resolvedPaths.foundations = {
        path: path.resolve(dir, foundations.path),
        name: foundations.name,
      };
    }

    // Process theme styles (component styles, utilities)
    if (theme?.name && theme?.path && fileExists(dir, theme.path)) {
      resolvedPaths.theme = {
        path: path.resolve(dir, theme.path),
        name: theme.name,
      };
    }

    // Process global styles (CSS resets, base element styles)
    if (
      globalStyles?.name &&
      globalStyles?.path &&
      fileExists(dir, globalStyles.path)
    ) {
      resolvedPaths.global = {
        path: path.resolve(dir, globalStyles.path),
        name: globalStyles.name,
      };
    }

    // Process media queries (responsive breakpoints)
    if (
      mediaQueries?.name &&
      mediaQueries?.path &&
      fileExists(dir, mediaQueries.path)
    ) {
      resolvedPaths.media = {
        path: path.resolve(dir, mediaQueries.path),
        name: mediaQueries.name,
      };
    }

    return resolvedPaths;
  })();

  // Load theme data from resolved file paths
  const themeCss = readThemeData(paths);

  // Return compiled theme configuration
  return {
    themeCss, // Loaded CSS-in-JS theme data
    fonts, // Font configuration
    resetCss, // CSS reset flag
    bvTools, // Development tools configuration
    name, // Theme name
    stylesPath, // Output directory for generated CSS
    typesTools, // TypeScript generation tools
    prefix, // CSS variable prefix
    foreignThemes, // External theme dependencies
  };
};

module.exports = { compileThemes };
