/**
 * Simplifies a name by extracting alphanumeric parts, removing duplicates, and joining with underscores
 * Useful for creating clean CSS class names or identifiers from complex strings
 *
 * @param {string} name - The original name to simplify
 * @returns {string} Simplified name with alphanumeric parts joined by underscores
 *
 * @example
 * simplifyName('my-button--large') // returns 'my_button_large'
 * simplifyName('header.nav.item') // returns 'header_nav_item'
 * simplifyName('duplicate-duplicate-word') // returns 'duplicate_word'
 */
const simplifyName = (name) => {
  if (!name || typeof name !== 'string') {
    return '';
  }

  // Extract alphanumeric sequences from the string
  const alphanumericParts = name.match(/[a-zA-Z0-9]+/g) || [];

  // Remove duplicate parts while preserving order
  const uniqueParts = new Set(alphanumericParts);

  // Join unique parts with underscores
  return [...uniqueParts].join('_');
};

module.exports = { simplifyName };
