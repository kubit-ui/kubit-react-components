const { simplifyName } = require('../../../simplifyName/simplifyName.utils.js');
const { extractValues } = require('../utils/extractValues.utils.js');

/**
 * Generates globalStyles CSS styles from the provided globalStyles styles object.
 *
 * @param {Array} globalStyles - An array of objects containing targets and styles.
 * @returns {string} The generated globalStyles CSS styles.
 */
const generateGlobalStyles = (globalStyles) => {
  return globalStyles.reduce(
    (acc, { targets, styles }) => {
      const stylesString = extractValues({ styles });
      acc.globalStyles += `${targets} { ${stylesString} }\n`;
      //* Set the globalStyles register
      const allTargets = targets.split(' ').filter((t) => t.startsWith('.'));
      if (allTargets.length) {
        allTargets.forEach((target) => {
          const formattedTarget = simplifyName(target);
          acc.globalDocs.doc += `  ${formattedTarget}: '${target}',\n`;
          acc.globalDocs.declare += `  ${formattedTarget}: string;\n`;
        });
      }
      return acc;
    },
    { globalStyles: '', globalDocs: { doc: '', declare: '' } }
  );
};

module.exports = { generateGlobalStyles };
