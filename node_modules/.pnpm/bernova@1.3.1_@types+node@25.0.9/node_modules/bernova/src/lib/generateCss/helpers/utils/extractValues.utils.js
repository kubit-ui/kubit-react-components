const { cssProps } = require('../../../../constants/cssProps.js');

/**
 * Extracts CSS values from an object and formats them as CSS properties.
 * Accepts both real CSS properties and custom properties defined in cssProps.
 *
 * @param {Object} styles - The object containing CSS values.
 * @returns {string} The formatted CSS properties.
 */
const extractValues = ({ styles, dynamicValues }) => {
  return Object.entries(styles)
    .filter(([key]) => cssProps[key])
    .map(([key, value]) => {
      //* replace the js key for css property
      const cssProperty = cssProps[key];
      //* handle dynamic values
      //? Count how many times '$' appears in the value
      //? the length is always 1 more than the count of '$', becase the first values is a empty string
      const varsFinded = String(value).split('$').length - 1;
      const validValue = (() => {
        if (!!dynamicValues && varsFinded > 0) {
          return String(value)
            .split(' ')
            .reduce((acc, curr, idx) => {
              if (curr in dynamicValues) {
                if (idx > 0) {
                  acc += ' ';
                }
                acc += dynamicValues[curr];
              }
              return acc;
            }, '');
        }
        return value;
      })();

      return cssProperty === cssProps.$content
        ? `${cssProperty}: '${validValue}';`
        : `${cssProperty}: ${validValue};`;
    })
    .join(' ');
};

module.exports = { extractValues };
