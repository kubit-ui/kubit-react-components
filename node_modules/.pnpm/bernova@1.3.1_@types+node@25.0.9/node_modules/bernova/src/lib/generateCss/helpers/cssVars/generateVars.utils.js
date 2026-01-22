/**
 * CSS Variables Generator for Bernova
 *
 * Converts JavaScript objects into CSS custom properties (CSS variables).
 * Handles nested objects recursively and generates corresponding TypeScript types.
 */

const { simplifyName } = require('../../../simplifyName/simplifyName.utils');
const { formatClassName } = require('../classnames/formatClassName.utils');

/**
 * Recursively generates CSS variables from a JavaScript object structure
 * Creates CSS custom properties with proper naming and generates documentation
 *
 * @param {Object} params - Generation parameters
 * @param {Object} params.source - Source object with variable definitions
 * @param {string} params.varName - CSS variable prefix (defaults to '-')
 * @param {string} params.prefix - Theme prefix for variable naming
 * @returns {Object} Generated CSS variables and TypeScript documentation
 *
 * @example
 * const source = { colors: { primary: '#007bff', secondary: '#6c757d' } };
 * const { root, rootDocs } = generateVars({ source, varName: '--theme', prefix: 'app' });
 * // Generates: --theme-colors-primary: #007bff; --theme-colors-secondary: #6c757d;
 */

const generateVars = ({ source, varName = '-', prefix }) => {
  const sourceEntries = Object.entries(source);

  // Process each key-value pair in the source object
  const { root, rootDocs } = sourceEntries.reduce(
    (acc, [key, value]) => {
      // Create CSS variable name with proper formatting
      const varKey = `${varName}-${formatClassName(key)}`;

      if (typeof value === 'object' && value !== null) {
        // Recursively process nested objects
        const { root: nestedRoot, rootDocs: nestedDocs } = generateVars({
          source: value,
          varName: varKey,
          prefix,
        });

        // Accumulate nested CSS variables and documentation
        acc.root += nestedRoot;
        acc.rootDocs.doc += nestedDocs.doc;
        acc.rootDocs.declare += nestedDocs.declare;
      } else {
        // Generate CSS variable for primitive values
        const rootRegisterKey = simplifyName(varKey).replace(`${prefix}_`, '');

        // Add CSS custom property declaration
        acc.root += `${varKey}: ${value};\n`;

        // Add JavaScript object property for provider
        acc.rootDocs.doc += `  ${rootRegisterKey}: 'var(${varKey})',\n`;

        // Add TypeScript declaration
        acc.rootDocs.declare += `  ${rootRegisterKey}: string;\n`;
      }

      return acc;
    },
    { root: '', rootDocs: { doc: '', declare: '' } }
  );

  return {
    root,
    rootDocs,
  };
};

module.exports = { generateVars };
