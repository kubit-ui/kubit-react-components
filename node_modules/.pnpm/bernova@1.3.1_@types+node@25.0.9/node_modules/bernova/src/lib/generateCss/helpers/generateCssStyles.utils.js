/**
 * CSS Styles Generation Module for Bernova
 *
 * Processes CSS-in-JS objects and generates CSS strings with support for:
 * - Nested styles and components
 * - Pseudo-classes and pseudo-elements
 * - Media queries and responsive design
 * - Advanced selectors (child, sibling, etc.)
 * - Attribute selectors
 * - Foreign theme integration
 * - Dynamic value interpolation
 */

const {
  formatRuleName,
  setForeignRegister,
  pseudoHandler,
  foreignHandler,
  attributeHandler,
  advancedSelectorHandler,
  separateStyles,
  extractValues,
  mediaQueriesHandler,
  generateMediaQueries,
  handlerRegister,
  setDynamicRegister,
  processDynamicProps,
} = require('./index.js');

/**
 * Generates CSS styles from a JavaScript object representation
 *
 * @param {Object} params - Generation parameters
 * @param {Object} params.source - CSS-in-JS source object
 * @param {Object} params.mediaConfig - Media query configuration
 * @param {string} params.prefix - CSS class prefix for namespacing
 * @returns {Object} Generated CSS styles and documentation
 */
const generateCssStyles = ({ source, mediaConfig, prefix }) => {
  // Initialize generation state
  let cssStyles = ''; // Accumulates generated CSS
  let register = {}; // Tracks generated class names
  const mediaRegister = {}; // Tracks media query styles
  const prefixed = prefix ? `${prefix}-` : ''; // CSS class prefix

  /**
   * Recursively processes CSS-in-JS source objects
   * Handles nested structures, special properties, and generates CSS rules
   *
   * @param {Object} params - Processing parameters
   * @param {Object} params.source - CSS object to process
   * @param {string} params.parentRule - Parent CSS rule for nesting
   * @param {string} params.theRule - Current rule name
   */
  const processSource = ({
    source,
    parentRule = undefined,
    theRule = undefined,
  }) => {
    const {
      styles,
      lib: { $dynamicValues, ...lib },
      other,
    } = separateStyles(source);
    const hasStyles = Object.entries(styles).length > 0;
    const hasOtherProps = Object.entries(other).length > 0;
    const hasLibProps = Object.entries(lib).length > 0;

    const dynamicValues = $dynamicValues
      ? processDynamicProps($dynamicValues)
      : undefined;

    const ruleName = formatRuleName({
      theRule,
      parentRule,
      register,
      hasStyles,
      prefix: prefixed,
    });

    if (hasStyles) {
      cssStyles += `.${ruleName} { ${extractValues({
        styles,
        dynamicValues,
      })} }\n`;
    }
    if (hasLibProps) {
      const {
        $pseudoClasses,
        $pseudoElements,
        $mediaQueries,
        $attributes,
        $advancedSelectors,
        $foreign,
      } = lib;

      if (Object.entries(other).length) {
        processSource({ source: other, parentRule: ruleName });
      }
      if ($pseudoClasses) {
        pseudoHandler({ pseudoData: $pseudoClasses, ruleName, processSource });
      }
      if ($pseudoElements) {
        pseudoHandler({ pseudoData: $pseudoElements, ruleName, processSource });
      }
      if ($mediaQueries && !!mediaConfig) {
        mediaQueriesHandler({
          config: mediaConfig,
          mediaQueries: $mediaQueries,
          parentRule: ruleName,
          theRule,
          mediaRegister,
        });
      }
      if ($attributes) {
        attributeHandler({ attributes: $attributes, ruleName, processSource });
      }
      if ($advancedSelectors) {
        advancedSelectorHandler($advancedSelectors, ruleName, processSource);
      }
      if ($foreign) {
        const foreignRegister = foreignHandler({
          foreign: $foreign,
          prefix: prefixed,
        });
        const foreignName = ruleName.replace(prefixed, '');
        setForeignRegister({
          ruleName: foreignName,
          foreignRegister,
          register,
        });
      }
      if (dynamicValues) {
        setDynamicRegister({
          dynamicValues,
          register,
          ruleName,
          prefix: prefixed,
        });
      }
    }
    if (hasOtherProps) {
      for (const [key, value] of Object.entries(other)) {
        if (typeof value === 'object') {
          const {
            $pseudoClasses,
            $pseudoElements,
            $mediaQueries,
            $attributes,
            $advancedSelectors,
            $foreign,
            $dynamicValues,
            ...css
          } = value;

          const { styles, other } = separateStyles(css);
          const hasStyles = Object.entries(styles).length > 0;

          const dynamicValues = $dynamicValues
            ? processDynamicProps($dynamicValues)
            : undefined;

          const ruleName = formatRuleName({
            key,
            theRule,
            parentRule,
            register,
            hasStyles,
            prefix: prefixed,
          });

          if (hasStyles) {
            cssStyles += `.${ruleName} { ${extractValues({
              styles,
              dynamicValues,
            })} }\n`;
          }
          if (Object.entries(other).length) {
            processSource({ source: other, parentRule: ruleName });
          }
          if ($pseudoClasses) {
            pseudoHandler({
              pseudoData: $pseudoClasses,
              ruleName,
              processSource,
            });
          }
          if ($pseudoElements) {
            pseudoHandler({
              pseudoData: $pseudoElements,
              ruleName,
              processSource,
            });
          }
          if ($mediaQueries && !!mediaConfig) {
            mediaQueriesHandler({
              config: mediaConfig,
              mediaQueries: $mediaQueries,
              parentRule: ruleName,
              theRule,
              mediaRegister,
            });
          }
          if ($attributes) {
            attributeHandler({
              attributes: $attributes,
              ruleName,
              processSource,
            });
          }
          if ($advancedSelectors) {
            advancedSelectorHandler(
              $advancedSelectors,
              ruleName,
              processSource
            );
          }
          if ($foreign) {
            const foreignRegister = foreignHandler({
              foreign: $foreign,
              prefix: prefixed,
            });
            const foreignName = ruleName.replace(prefixed, '');
            setForeignRegister({
              ruleName: foreignName,
              foreignRegister,
              register,
            });
          }
          if (dynamicValues) {
            setDynamicRegister({
              dynamicValues,
              register,
              ruleName,
              prefix: prefixed,
            });
          }
        }
      }
    }
  };

  processSource({ source });
  const stylesDocs = handlerRegister({ register, prefix });
  const cssMediaStyles = generateMediaQueries(mediaRegister);
  return { styles: cssStyles.concat(cssMediaStyles), stylesDocs };
};

module.exports = { generateCssStyles };
