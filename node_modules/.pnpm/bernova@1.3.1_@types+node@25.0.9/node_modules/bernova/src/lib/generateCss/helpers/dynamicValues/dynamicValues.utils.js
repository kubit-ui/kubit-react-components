/**
 * Dynamic Values Processor for Bernova CSS Framework
 *
 * Handles runtime CSS variable generation and type definitions.
 * Processes dynamic values that can be updated at runtime via JavaScript.
 */

/**
 * Converts dynamic style objects to CSS custom properties
 * Generates both string format (for CSS injection) and object format (for JS access)
 *
 * @param {Object} styles - Dynamic styles object with $ prefixed keys
 * @returns {Object} CSS variables in string and object format
 * @example
 * dynamic_values({ $primaryColor: '#ff0000' })
 * // Returns: { string: '--primarycolor: #ff0000; ', object: { '--primarycolor': '#ff0000' } }
 */
const dynamic_values = (styles) => {
  return Object.entries(styles).reduce(
    (acc, [key, value]) => {
      // Generate CSS custom property name (lowercase, remove $)
      const varName = '--' + key.toLocaleLowerCase().replace('$', '');
      acc.string += varName + ': ' + value + '; ';
      acc.object[varName] = value;
      return acc;
    },
    {
      string: '', // CSS string format: '--var: value; '
      object: {}, // Object format: { '--var': 'value' }
    }
  );
};

/**
 * Generates TypeScript type definitions for dynamic values function
 * Creates type-safe interfaces for runtime CSS variable manipulation
 *
 * @param {Object} dynamicValues - Dynamic values object to generate types for
 * @returns {string} TypeScript function signature
 */
const dynamic_values_type = (dynamicValues) => {
  const types = Object.keys(dynamicValues).reduce(
    (acc, key) => (acc += `'${key}': string; `),
    ''
  );
  return `(styles: { ${types}}) => { string: string; object: object } `;
};

/**
 * Registers dynamic values in the component register system
 * Associates dynamic values with their parent components for provider generation
 *
 * @param {Object} params - Registration parameters
 * @param {Object} params.dynamicValues - Dynamic values to register
 * @param {Object} params.register - Component register to update
 * @param {string} params.ruleName - CSS rule name to extract component from
 * @param {string} params.prefix - CSS prefix to remove from component name
 */
const setDynamicRegister = ({ dynamicValues, register, ruleName, prefix }) => {
  const relatedComponent = ruleName
    .split('--')[0]
    .split('__')[0]
    .replace(prefix, '');
  if (!(relatedComponent in register)) {
    register[relatedComponent] = {};
  }
  register[relatedComponent].dynamic_values = dynamic_values;
  register[relatedComponent].dynamic_values_type = () =>
    dynamic_values_type(dynamicValues);
};

module.exports = { setDynamicRegister };
