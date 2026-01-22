const { separateStyles } = require('../utils/separateStyles.utils.js');

/**
 * Handles custom attributes and processes nested objects.
 *
 * @param {Object} attributes - The custom attributes to process.
 * @param {string} ruleName - The base rule name to be used.
 * @param {Function} processSource - A function to process nested objects.
 * @param {string} [carry] - An optional carry attribute for nested processing.
 */
const attributeHandler = ({
  attributes,
  ruleName,
  processSource,
  carry = undefined,
}) => {
  for (const [attr, properties] of Object.entries(attributes)) {
    //* lower case the attribute name for consistency
    const attrLower = attr.toLowerCase();
    //* build the complete attribute selector
    const attrName = carry
      ? `${ruleName}[${carry}="${attrLower}"]`
      : `${ruleName}[${attrLower}="true"]`;
    //* separate properties into special and regular
    const { styles, lib, other } = separateStyles(properties);
    //* check if existe styles
    const hasStyles = Object.entries(styles).length > 0;
    const hasLib = Object.entries(lib).length > 0;
    const hasOther = Object.entries(other).length > 0;
    //* Process styles and lib if they exist
    if (hasStyles || hasLib) {
      const mergeStyles = { ...styles, ...lib };
      processSource({ source: mergeStyles, theRule: attrName });
    }
    //* Process nested attributes if they exist
    if (hasOther) {
      attributeHandler({
        attributes: other,
        ruleName,
        processSource,
        carry: attrLower,
      });
    }
  }
};

module.exports = { attributeHandler };
