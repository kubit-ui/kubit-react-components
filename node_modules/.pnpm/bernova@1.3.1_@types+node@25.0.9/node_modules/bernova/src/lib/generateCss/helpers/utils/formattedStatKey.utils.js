/**
 * Statistical Key Formatter for Bernova Analytics
 *
 * Normalizes CSS class names and component keys for statistical tracking.
 * Removes special prefixes and standardizes separators to underscores.
 */

/**
 * Formats a statistical key by normalizing separators and removing prefixes
 * Used for consistent analytics and tracking across the CSS generation process
 *
 * @param {string} key - The key to format and normalize
 * @returns {string} Normalized key with standardized separators
 * @example
 * formattedStatKey('$_component--name') → 'component_name'
 * formattedStatKey('my-class__name') → 'my_class_name'
 */
const formattedStatKey = (key) => {
  let k = key;

  // Remove library-specific prefix
  if (k.includes('$_')) {
    k = k.replace('$_', '');
  }

  // Normalize all separators to underscores
  if (k.includes(' ', '_')) {
    k = k.replace(' ', '_');
  }
  if (k.includes('__')) {
    k = k.replace('__', '_');
  }
  if (k.includes('--')) {
    k = k.replace('--', '_');
  }
  if (k.includes('-')) {
    k = k.replace('-', '_');
  }

  return k;
};

module.exports = { formattedStatKey };
