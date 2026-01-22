/**
 * CSS Class Name Formatter for Bernova
 *
 * Ensures consistent CSS class naming by converting JavaScript naming conventions
 * to CSS-friendly format. Follows CSS naming best practices.
 */

/**
 * Formats JavaScript property names into valid CSS class names
 * Converts to lowercase and replaces underscores with hyphens for CSS compatibility
 *
 * @param {string} className - The class name to format (JavaScript property name)
 * @returns {string} CSS-formatted class name (lowercase with hyphens)
 *
 * @example
 * formatClassName('primaryButton') // returns 'primarybutton'
 * formatClassName('nav_item_active') // returns 'nav-item-active'
 * formatClassName('HEADER_TITLE') // returns 'header-title'
 */
const formatClassName = (className) => {
  if (!className || typeof className !== 'string') {
    return '';
  }

  return className.toLowerCase().replace(/_/g, '-');
};

module.exports = { formatClassName };
