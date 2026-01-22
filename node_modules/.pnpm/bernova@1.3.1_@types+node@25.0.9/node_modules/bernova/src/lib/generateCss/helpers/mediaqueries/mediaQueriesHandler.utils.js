/**
 * Media Queries Handler for Bernova CSS Framework
 *
 * Processes and generates CSS media queries from JavaScript objects.
 * Handles nested styles, pseudo-classes, and advanced selectors within media queries.
 */

const {
  advancedSelectorHandler,
} = require('../advanceselector/advancedSelectorHandler.utils');
const { attributeHandler } = require('../attribute/attributeHandler.utils');
const { formatClassName } = require('../classnames/formatClassName.utils');
const { pseudoHandler } = require('../pseudo/pseudoHandler.utils');
const { formatRuleName } = require('../rulename/formatRuleName.utils');
const { extractValues } = require('../utils/extractValues.utils');
const { separateStyles } = require('../utils/separateStyles.utils');

/**
 * Handles CSS generation within media queries context
 * Processes styles that should be applied at specific breakpoints
 *
 * @param {Object} mediaStyles - CSS styles object for media query
 * @param {string} parentRule - Parent CSS rule selector
 * @param {string} theRule - Current CSS rule being processed
 * @returns {Object} Generated CSS and register information
 */
const handleMediaQueriesStyles = ({ mediaStyles, parentRule, theRule }) => {
  let cssMediaStyles = '';
  let mediaRegister = {};

  /**
   * Recursively processes media query styles
   * Separates CSS properties from nested objects and generates appropriate selectors
   */
  const processMediaStyles = ({
    source,
    parentRule = undefined,
    theRule = undefined,
  }) => {
    const { styles, other } = separateStyles(source);
    const hasStyles = Object.entries(styles).length > 0;
    const hasOtherProps = Object.entries(other).length > 0;
    const ruleName = formatRuleName({
      key: parentRule,
      theRule,
      parentRule: undefined,
      register: mediaRegister,
      hasStyles,
      prefix: '',
    });

    if (hasStyles) {
      cssMediaStyles += `.${ruleName} { ${extractValues({ styles })} }\n`;
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
            $extends,
            $recycle,
            $variables,
            ...css
          } = value;

          const { styles, other } = separateStyles(css);
          const hasStyles = Object.entries(styles).length > 0;
          const ruleName = formatRuleName({
            key,
            theRule,
            parentRule,
            register: mediaRegister,
            hasStyles,
            prefix: '',
          });

          if (hasStyles) {
            cssMediaStyles += `.${ruleName} { ${extractValues({ styles })} }\n`;
          }
          if (Object.entries(other).length) {
            processMediaStyles({ source: other, parentRule: ruleName });
          }
          if ($pseudoClasses) {
            pseudoHandler({
              pseudoData: $pseudoClasses,
              ruleName,
              processSource: processMediaStyles,
            });
          }
          if ($pseudoElements) {
            pseudoHandler({
              pseudoData: $pseudoElements,
              ruleName,
              processSource: processMediaStyles,
            });
          }
          if ($attributes) {
            attributeHandler({
              attributes: $attributes,
              ruleName,
              processSource: processMediaStyles,
            });
          }
          if ($advancedSelectors) {
            advancedSelectorHandler(
              $advancedSelectors,
              ruleName,
              processMediaStyles
            );
          }
          if ($foreign) {
            const [comp, ..._] = ruleName.split('--');
            const component = comp.length ? comp : '';
            const mainComponent = component.includes('__')
              ? component.split('__')[0]
              : component;
            Object.entries($foreign).forEach(([key, value]) => {
              const foreignComponent = `${mainComponent}-${key}`;
              processSource({ source: value, parentRule: foreignComponent });
            });
          }
        }
      }
    }
  };

  processMediaStyles({ source: mediaStyles, theRule, parentRule });
  return cssMediaStyles;
};

const mediaQueriesHandler = ({
  config,
  mediaQueries,
  parentRule,
  theRule,
  mediaRegister,
}) => {
  Object.entries(mediaQueries).forEach(([media, mediaStyles]) => {
    const relatedConfig = config.find((c) => c.name === media);
    if (typeof mediaStyles === 'object' && Object.keys(mediaStyles).length) {
      const { $type = '', $values, ...rest } = mediaStyles;
      const cssMediaStyles = handleMediaQueriesStyles({
        mediaStyles: rest,
        parentRule,
        theRule,
      });
      let _type;
      let _values;
      if (!!relatedConfig) {
        const { type = '', values } = relatedConfig;
        _type = type;
        _values = values;
      } else if (!!$values) {
        _type = $type;
        _values = $values;
      }
      let localValues = '';
      Object.entries(_values).forEach(([key, value], idx) => {
        const formattedKey = formatClassName(key);
        if (idx > 0 || _type.length) {
          localValues += ' and';
        }
        localValues += ` (${formattedKey}: ${value})`;
      });

      const mediaName = `${_type}${localValues}`;
      if (!(mediaName in mediaRegister)) {
        mediaRegister[mediaName] = cssMediaStyles;
      } else {
        mediaRegister[mediaName] += cssMediaStyles;
      }
    }
  });
};

module.exports = { mediaQueriesHandler };
