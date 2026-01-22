/**
 * Style Separation Utility for Bernova CSS Framework
 *
 * Separates CSS object properties into different categories:
 * - Standard CSS properties (styles)
 * - Library-specific properties (lib) - starting with $
 * - Other properties (nested objects, pseudo-classes, etc.)
 */

const { cssProps } = require('../../../../constants/index.js');

/**
 * Separates a CSS object into different property categories
 *
 * @param {Object} css - CSS object to categorize
 * @returns {Object} Separated properties: { styles, lib, other }
 * @example
 * separateStyles({
 *   color: 'red',           // → styles
 *   $dynamic: 'value',      // → lib
 *   hover: { color: 'blue' } // → other
 * })
 */
const separateStyles = (css) => {
  const styles = {}; // Standard CSS properties
  const other = {}; // Nested objects (pseudo-classes, selectors, etc.)
  const lib = {}; // Library-specific properties (starting with $)

  // Categorize each property based on its type and prefix
  Object.entries(css).forEach(([key, value]) => {
    if (key in cssProps) {
      styles[key] = value; // Standard CSS properties
    } else if (key.startsWith('$') && !!value) {
      lib[key] = value; // Library-specific properties
    } else {
      other[key] = value; // Everything else (nested objects)
    }
  });

  return { styles, lib, other };
};

module.exports = { separateStyles };
