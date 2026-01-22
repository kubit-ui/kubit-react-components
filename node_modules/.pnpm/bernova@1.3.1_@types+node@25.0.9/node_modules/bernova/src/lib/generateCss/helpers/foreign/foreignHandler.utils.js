/**
 * Foreign Theme Handler for Bernova CSS Framework
 *
 * Processes external/foreign theme components and integrates them
 * into the main CSS generation system. Handles variant mapping
 * and component structure transformation.
 */

const { cssProps } = require('../../../../constants/cssProps');

/**
 * Handles integration of foreign theme components into Bernova system
 * Transforms external component structures into compatible CSS class mappings
 *
 * @param {Object} foreign - Foreign theme components to integrate
 * @param {string} prefix - CSS class prefix for generated classes
 * @returns {Object} Transformed component structure with register data
 */
const foreignHandler = ({ foreign, prefix }) => {
  return Object.entries(foreign).reduce(
    (acc, [foreignName, { component, variant, name = '' }]) => {
      if (!component) {
        return acc;
      }
      let isMainSet = false;
      let structure = {};
      const lowerName = name.toLocaleLowerCase();
      const componentVariant = variant && component[variant];
      if (componentVariant) {
        const lowerVariant = variant.toLocaleLowerCase();
        Object.entries(componentVariant).forEach(([key, value]) => {
          if (key in cssProps && !(key in structure)) {
            structure[lowerName] = `${prefix}${lowerName}--${lowerVariant}`;
          }
          if (key.startsWith('_')) {
            const subComponent = key.toLocaleLowerCase().substring(1);
            structure[
              subComponent
            ] = `${prefix}${lowerName}__${subComponent}--${lowerVariant}`;
          }
          if (key === '$foreign') {
            const v = `$_${lowerVariant}`;
            if (!(v in structure)) {
              structure[v] = {};
            }
            structure[v] = {
              ...structure[v],
              ...foreignHandler({ foreign: value, prefix }),
            };
          }
        });
      }
      Object.entries(component).forEach(([key, value]) => {
        if (key in cssProps && !isMainSet) {
          const cssClass =
            lowerName in structure
              ? `${prefix}${lowerName} ${structure[lowerName]}`
              : `${prefix}${lowerName}`;
          structure[lowerName] = cssClass;
          isMainSet = true;
        }
        if (key.startsWith('_')) {
          const subComponent = key.toLocaleLowerCase().substring(1);
          const compoundedComponent = `${lowerName}__${subComponent}`;
          const cssClass =
            subComponent in structure
              ? `${prefix}${compoundedComponent} ${structure[subComponent]}`
              : `${prefix}${compoundedComponent}`;
          structure[subComponent] = cssClass;
        }
        if (key === '$foreign') {
          structure = {
            ...structure,
            ...foreignHandler({ foreign: value, prefix }),
          };
        }
      });
      acc[foreignName] = structure;
      return acc;
    },
    {}
  );
};

module.exports = { foreignHandler };
