const { compilerTypeValid } = require('../../../constants');
const { generateVars } = require('./cssVars/generateVars.utils');
const { generateCssStyles } = require('./generateCssStyles.utils');
const { generateGlobalStyles } = require('./other/generateGlobalStyles.utils');

/**
 * Filters and generates CSS content based on compiler type and source configuration
 * This function determines what CSS should be generated based on the compilation mode
 *
 * @param {Object} params - The parameters object
 * @param {Object} params.source - Source configuration containing foundations, theme, global, and media
 * @param {string} params.compilerType - Type of compilation: 'full', 'foundationOnly', or 'componentOnly'
 * @param {string} params.baseCss - Base CSS content to include in foundations
 * @param {string} params.prefix - CSS variable prefix for namespacing
 * @returns {Object} Object containing generated CSS parts and documentation
 */
const filterGenerateCss = ({ source, compilerType, baseCss, prefix }) => {
  const { foundations, theme, global, media } = source;

  // Determine what content to generate based on compiler type
  const hasFoundations =
    compilerType === compilerTypeValid.full ||
    compilerType === compilerTypeValid.foundationOnly;
  const hasTheme =
    compilerType === compilerTypeValid.full ||
    compilerType === compilerTypeValid.componentOnly;

  // Generate foundation CSS (CSS variables, base styles, global styles)
  const { foundationsCss, rootDocs, globalDocs } = (() => {
    if (!hasFoundations) {
      return {
        foundationsCss: '',
        rootDocs: { doc: '', declare: '' },
        globalDocs: { doc: '', declare: '' },
      };
    }
    // Generate CSS custom properties (variables) from foundations
    const { root, rootDocs } = foundations
      ? generateVars({
          source: foundations,
          varName: prefix ? `--${prefix}` : '-',
          prefix,
        })
      : { root: '', rootDocs: { doc: '', declare: '' } };

    // Generate global styles that apply to all elements
    const { globalStyles, globalDocs } = global
      ? generateGlobalStyles(global)
      : { globalStyles: '', globalDocs: { doc: '', declare: '' } };

    // Combine base CSS, root variables, and global styles
    const foundationsCss = `${baseCss}:root{\n${root}}\n${globalStyles}`;
    return { foundationsCss, rootDocs, globalDocs };
  })();

  // Generate component theme styles (classes, utilities, etc.)
  const { stylesCss, stylesDocs } = (() => {
    if (!hasTheme || !theme) {
      return { stylesCss: '', stylesDocs: {} };
    }
    const { styles, stylesDocs } = generateCssStyles({
      source: theme,
      mediaConfig: media,
      prefix,
    });
    return { stylesCss: styles, stylesDocs };
  })();

  // Return separated CSS parts for further processing
  return { stylesCss, foundationsCss, stylesDocs, rootDocs, globalDocs };
};

module.exports = { filterGenerateCss };
