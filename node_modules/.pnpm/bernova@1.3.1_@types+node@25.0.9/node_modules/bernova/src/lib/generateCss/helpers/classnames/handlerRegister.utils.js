/**
 * CSS Register Handler for Bernova
 *
 * Processes the CSS class register to generate provider utilities and tools.
 * Creates structured exports for components, class mappings, and TypeScript types.
 */

const { simplifyName } = require('../../../simplifyName/simplifyName.utils');

/**
 * Handles the CSS register to generate provider documentation and tools
 * Recursively processes nested component structures and creates exports
 *
 * @param {Object} params - Handler parameters
 * @param {Object} params.register - CSS class register with component mappings
 * @param {string} params.prefix - CSS class prefix to remove from names
 * @returns {Object} Processed documentation for providers and tools
 */
const handlerRegister = ({ register, prefix }) => {
  // Track registered components to avoid duplicates
  const componentsRegistered = new Set();

  /**
   * Recursively processes the register object to generate structured documentation
   * @param {Object} rg - Current register level to process
   * @param {number} space - Indentation spacing for formatting
   * @param {number} lv - Current nesting level (1 = top level)
   */
  const processRegister = ({ rg, space = 2, lv = 1 }) => {
    const currentSpace = ' '.repeat(space);
    return Object.entries(rg).reduce(
      (acc, [comp, value]) => {
        // Clean component name by removing CSS prefix
        const component = comp.replace(`${prefix}-`, '');

        if (typeof value === 'object') {
          // Handle nested component structures
          const isFirstLevel = lv === 1;
          const UC = isFirstLevel ? component.toUpperCase() : component;

          // Generate provider documentation (opening braces)
          acc.prov.doc += `${currentSpace}${UC}: {\n`;
          acc.prov.declare += `${currentSpace}${UC}: {\n`;

          // Add to components list (union types and object mapping)
          acc.comp.simple += acc.comp.simple.length ? ` | '${UC}'` : `'${UC}'`;
          acc.comp.object += isFirstLevel
            ? `${currentSpace}${UC}: '${UC}',\n`
            : '';
          // Recursively process nested structures with increased indentation
          const nextSpace = space + 2;
          const nextLv = lv + 1;
          const {
            prov: { doc, declare: declareType },
            tools: { doc: toolsDoc, declare: toolsDeclare },
          } = processRegister({
            rg: value,
            space: nextSpace,
            lv: nextLv,
          });

          // Close provider documentation (closing braces)
          acc.prov.doc += doc;
          acc.prov.declare += declareType;
          acc.prov.doc += `${currentSpace}},\n`;
          acc.prov.declare += `${currentSpace}},\n`;

          // Append tools documentation from nested processing
          acc.tools.doc += toolsDoc;
          acc.tools.declare += toolsDeclare;
        } else if (typeof value === 'boolean' && value) {
          // Handle leaf nodes (actual CSS class mappings)

          // Generate tools documentation (simplified component names)
          const componentTools = simplifyName(component);
          if (!componentsRegistered.has(componentTools)) {
            componentsRegistered.add(componentTools);
            acc.tools.doc += `  ${componentTools}: '${component}',\n`;
            acc.tools.declare += `  ${component}: string,\n`;
          }

          // Generate provider documentation (use last part after __ as key)
          const provKey = component.split('__').at(-1);
          acc.prov.doc += `${currentSpace}${provKey}: '${component}',\n`;
          acc.prov.declare += `${currentSpace}${provKey}: string,\n`;
        } else if (typeof value === 'string') {
          // Handle string mappings (class name aliases)

          // Generate tools documentation from string value
          const compFromValue = simplifyName(value).replace(`${prefix}_`, '');
          if (!componentsRegistered.has(compFromValue)) {
            componentsRegistered.add(compFromValue);
            acc.tools.doc += `  ${compFromValue}: '${value}',\n`;
            acc.tools.declare += `  ${compFromValue}: string,\n`;
          }

          // Generate provider documentation with string value
          const provKey = component.split('__').at(-1);
          acc.prov.doc += `${currentSpace}${provKey}: '${value}',\n`;
          acc.prov.declare += `${currentSpace}${provKey}: string,\n`;
        } else if (typeof value === 'function') {
          // Handle dynamic value functions (special cases for type generation)
          if (component === 'dynamic_values') {
            acc.prov.doc += `${currentSpace}${component}: ${value.toString()},\n`;
          } else if (component === 'dynamic_values_type') {
            acc.prov.declare += `${currentSpace}dynamic_values: ${value()},\n`;
          }
        }
        return acc;
      },
      // Initialize accumulator with empty documentation structures
      {
        comp: { simple: '', object: '' }, // Component type definitions
        prov: { doc: '', declare: '' }, // Provider documentation and types
        tools: { doc: '', declare: '' }, // Tools utilities and types
      }
    );
  };

  // Start processing from the root register
  return processRegister({ rg: register });
};

module.exports = { handlerRegister };
