const {
  cssPseudoClasses,
  cssPseudoElements,
} = require('../../../../constants/index.js');
const { separateStyles } = require('../utils/separateStyles.utils.js');

/**
 * Handles pseudo-classes and pseudo-elements, and processes nested objects.
 *
 * @param {Object} pseudoData - The pseudo-classes and pseudo-elements to process.
 * @param {string} ruleName - The base rule name to be used.
 * @param {Function} processSource - A function to process nested objects.
 */
const pseudoHandler = ({ pseudoData, ruleName, processSource }) => {
  for (const [pseudo, properties] of Object.entries(pseudoData)) {
    //? Determine the pseudo type
    const pseudoType = (() => {
      if (pseudo in cssPseudoClasses) {
        return `:${cssPseudoClasses[pseudo]}`;
      } else if (pseudo in cssPseudoElements) {
        return `::${cssPseudoElements[pseudo]}`;
      }
      return '';
    })();
    //? Extract special property and the rest
    const { $target, ...props } = properties;
    //? Build the complete rule name
    const pseudoRule = $target ? `${pseudoType}(${$target})` : `${pseudoType}`;
    const completeRuleName = `${ruleName}${pseudoRule}`;
    //? Separate properties into special and regular
    /**
     * styles: regular CSS properties
     * lib: special properties like $pseudoClasses, $mediaQueries, etc.
     * other: any other properties that don't fit into styles or lib
     */
    const { styles, lib, other } = separateStyles(props);
    const processStyles =
      Object.entries(styles).length > 0 || Object.entries(lib).length > 0;
    const hasNestedStyles = Object.keys(other).some(
      (oth) => oth in cssPseudoClasses || oth in cssPseudoElements
    );
    if (hasNestedStyles) {
      pseudoHandler({
        pseudoData: other,
        ruleName: completeRuleName,
        processSource,
      });
    }
    if (processStyles) {
      const mergeStyles = { ...styles, ...lib };
      processSource({ source: mergeStyles, theRule: completeRuleName });
    }
  }
};

module.exports = { pseudoHandler };
