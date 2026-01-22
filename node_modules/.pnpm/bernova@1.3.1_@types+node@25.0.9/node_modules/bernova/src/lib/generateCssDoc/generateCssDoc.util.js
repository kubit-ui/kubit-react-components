/**
 * CSS Documentation Generator for Bernova
 *
 * Combines foundation and component CSS into a single document with proper
 * sectioning and comments. Handles different compilation modes and preserves
 * existing data when doing partial compilation.
 */

const { compilerTypeValid } = require('../../constants');

/**
 * Generates final CSS document by combining foundations and components
 * Adds section comments and handles partial compilation modes
 *
 * @param {Object} params - Generation parameters
 * @param {string} params.compilerType - Type of compilation being performed
 * @param {string} params.stylesCss - Generated component/theme CSS
 * @param {string} params.foundationsCss - Generated foundation CSS (variables, reset)
 * @param {string} params.oldData - Existing CSS data to preserve (optional)
 * @returns {string} Complete CSS document with sections and comments
 */
const generateCssDoc = ({
  compilerType,
  stylesCss,
  foundationsCss,
  oldData = '',
}) => {
  // Determine what sections to include based on compilation type
  const createFoundations = compilerType !== compilerTypeValid.componentOnly;
  const createComponents = compilerType !== compilerTypeValid.foundationOnly;

  // Generate foundations section (CSS variables, reset, base styles)
  const foundations = createFoundations
    ? `/* === BERNOVA FOUNDATIONS === */\n${foundationsCss}/* === END FOUNDATIONS === */\n\n`
    : oldData;

  // Generate components section (component styles, utilities, media queries)
  const components = createComponents
    ? `/* === BERNOVA COMPONENTS === */\n${stylesCss}/* === END COMPONENTS === */\n`
    : oldData;

  // Combine sections into final CSS document
  const cssDocument = `${foundations}${components}`;
  return cssDocument;
};

module.exports = { generateCssDoc };
