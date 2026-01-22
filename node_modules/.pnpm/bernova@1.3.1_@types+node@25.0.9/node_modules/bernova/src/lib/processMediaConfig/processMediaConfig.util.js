/**
 * Media Configuration Processor for Bernova CSS Framework
 *
 * Processes media query configurations and generates documentation strings
 * for provider and tool generation systems.
 */

const { simplifyName } = require('../simplifyName/simplifyName.utils.js');

/**
 * Processes media configuration array and generates object property strings
 * Creates key-value pairs for media query name mappings
 *
 * @param {Object} params - Processing parameters
 * @param {Array} params.mediaConfig - Array of media query configurations
 * @param {string} params.mediaConfig[].name - Media query breakpoint name
 * @returns {string} Formatted object properties for media queries
 * @example
 * processMediaConfig({
 *   mediaConfig: [{ name: 'mobile' }, { name: 'tablet' }]
 * })
 * // Returns: '  mobile: \'mobile\',\n  tablet: \'tablet\',\n'
 */
const processMediaConfig = ({ mediaConfig }) => {
  return mediaConfig.reduce((acc, { name }) => {
    // Generate simplified property name and original value mapping
    acc += `  ${simplifyName(name)}: '${name}',\n`;
    return acc;
  }, '');
};

module.exports = { processMediaConfig };
