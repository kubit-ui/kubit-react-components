const { cssAdvancedSelectors } = require('../../../../constants/index.js');

/**
 * Handles advanced CSS selectors and processes nested objects.
 *
 * @param {Array} selectors - An array of selector objects.
 * @param {string} ruleName - The base rule name to be used.
 * @param {Function} processSource - A function to process nested objects.
 */
const advancedSelectorHandler = (selectors, ruleName, processSource) => {
  selectors.forEach((key) => {
    for (const [selector, { $target, ...value }] of Object.entries(key)) {
      if (cssAdvancedSelectors[selector] && $target) {
        const parsedSelector = cssAdvancedSelectors[selector];
        const completeRuleName = `${ruleName}${parsedSelector}${$target}`;
        processSource({ source: value, theRule: completeRuleName });
      }
    }
  });
};

module.exports = { advancedSelectorHandler };
