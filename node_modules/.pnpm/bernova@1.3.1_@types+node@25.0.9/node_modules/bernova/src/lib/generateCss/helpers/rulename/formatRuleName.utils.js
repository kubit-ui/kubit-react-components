/**
 * CSS Rule Name Formatter for Bernova CSS Framework
 *
 * Handles CSS class name generation, registration, and formatting.
 * Manages component-variant relationships and maintains class name registry.
 */

const { formattedStatKey } = require('../utils');

/**
 * Registers component and variant information in the CSS class registry
 * Manages hierarchical component structure with variants and base classes
 *
 * @param {Object} register - CSS class registry to update
 * @param {string} component - Component name to register
 * @param {string} variant - Optional variant name for the component
 * @param {string} mainComponent - Main parent component name
 * @param {boolean} hasStyles - Whether component has actual CSS styles
 * @param {string} prefix - CSS class prefix for namespacing
 */
const setRegister = ({
  register,
  component,
  variant,
  mainComponent,
  hasStyles,
  prefix,
}) => {
  // Initialize main component in register if not exists
  if (!(mainComponent in register)) {
    register[mainComponent] = {};
  }

  // Register base component (only if it has styles)
  if (!(component in register[mainComponent])) {
    register[mainComponent][component] = !!hasStyles && `${prefix}${component}`;
  }

  // Handle variant registration
  if (!!variant) {
    const v = `$_${formattedStatKey(variant)}`;

    // Initialize variant section
    if (!(v in register[mainComponent])) {
      register[mainComponent][v] = {};
    }

    // Register component with variant
    if (!(component in register[mainComponent][v])) {
      const regWithoutVariant = !!register[mainComponent][component];
      register[mainComponent][v][component] = regWithoutVariant
        ? `${prefix}${component} ${prefix}${component}--${variant}` // Base + variant classes
        : `${prefix}${component}--${variant}`; // Variant only
    }
  }
};

const getRuleNameSlices = ({ parentRule, key, prefix }) => {
  //? extract the component from the parentRule
  const [mainComponent, rest] = parentRule.split('--');
  //? format the key to lower case and remove any brackets
  const variant = rest && rest.length && rest.replace(/\[.*?\]/g, '');
  //? format the key to lower case
  const lowerKey = !!key && key.length && key.toLocaleLowerCase();

  return {
    mainComponent,
    variant,
    lowerKey,
  };
};

const setForeignRegister = ({ ruleName, foreignRegister, register }) => {
  const { mainComponent, variant } = getRuleNameSlices({
    parentRule: ruleName,
  });
  if (!(mainComponent in register)) {
    register[mainComponent] = {};
  }
  if (!!variant) {
    const v = `$_${formattedStatKey(variant)}`;
    if (!(v in register[mainComponent])) {
      register[mainComponent][v] = {};
    }
    register[mainComponent][v] = {
      ...register[mainComponent][v],
      ...foreignRegister,
    };
  } else {
    register[mainComponent] = {
      ...register[mainComponent],
      ...foreignRegister,
    };
  }
};

const formatRuleName = ({
  key = '',
  parentRule,
  theRule,
  hasStyles,
  prefix,
  register = {},
}) => {
  let className = '';
  // Use theRule directly if provided (for pseudo-classes, selectors, etc.)
  if (theRule) {
    className = theRule;

    // Generate base className from key if no parent rule exists
  } else if (!parentRule) {
    const cleanKey = key.toLocaleLowerCase().replace(/\[.*?\]/g, '');
    className = `${prefix}${cleanKey}`;

    if (key.length) {
      setRegister({
        register,
        component: cleanKey,
        mainComponent: cleanKey,
        hasStyles,
        prefix,
      });
    }
  } else {
    // Handle component with parent rule (nested components, variants)
    const { mainComponent, variant, lowerKey } = getRuleNameSlices({
      parentRule,
      key,
    });
    const componentRegistered = mainComponent.replace(prefix, '');
    const keyTarget = key.startsWith('_');

    if (keyTarget) {
      className = !!variant
        ? `${mainComponent}_${lowerKey}--${variant}`
        : `${mainComponent}_${lowerKey}`;

      setRegister({
        register,
        mainComponent: componentRegistered,
        component: `${componentRegistered}_${lowerKey}`,
        variant,
        hasStyles,
        prefix,
      });
    } else if (lowerKey) {
      className = `${mainComponent}--${lowerKey}`;

      setRegister({
        register,
        mainComponent: componentRegistered,
        component: componentRegistered,
        variant: lowerKey,
        hasStyles,
        prefix,
      });
    }
  }

  return className;
};

module.exports = { formatRuleName, setForeignRegister };
