/**
 * TypeScript Definition Generator for Bernova CSS Framework
 *
 * Creates comprehensive TypeScript interfaces for CSS-in-JS objects.
 * Generates type definitions for CSS properties, pseudo-classes, selectors, and media queries.
 */

const {
  cssProps,
  cssPseudoClasses,
  cssPseudoElements,
  cssAdvancedSelectors,
} = require('../../constants');

/**
 * Generates TypeScript interface properties from an object's keys
 * Creates optional properties with specified type for each key
 *
 * @param {Object} object - Object to extract keys from
 * @param {string} type - TypeScript type to assign to each property
 * @returns {string} TypeScript interface properties
 */
const generateKeysType = ({ object, type }) => {
  return Object.keys(object).reduce((acc, prop) => {
    acc += `  ${prop}?: ${type};\n`;
    return acc;
  }, '');
};

/**
 * Generates TypeScript union types for advanced CSS selectors
 * Creates optional selector properties with target specification
 *
 * @param {Object} advancedSelectors - Advanced selectors object
 * @param {string} type - TypeScript type for selector values
 * @returns {string} TypeScript union type definition
 */
const generateAdvancedSelectorsType = ({ advancedSelectors, type }) => {
  return Object.keys(advancedSelectors).reduce((acc, selector, idx) => {
    const or = idx > 0 ? ' |' : '';
    acc += `${or} { ${selector}?: ${type}; }\n`;
    return acc;
  }, '');
};

/**
 * Generates TypeScript definitions for media query configuration
 * Creates responsive breakpoint properties from media config
 *
 * @param {Array} mediaConfig - Media queries configuration array
 * @param {string} type - TypeScript type for media query values
 * @returns {string} Media query TypeScript definitions
 */
const generateMediaTypes = ({ mediaConfig, type }) => {
  if (!mediaConfig || !Array.isArray(mediaConfig)) {
    return '';
  }
  return mediaConfig.reduce((acc, media) => {
    acc += `    '${media.name}'?: ${type};\n`;
    return acc;
  }, '');
};

const typingStyles = ({ mediaConfig }) => {
  const cssLibPropsName = 'CssLibPropsType'; //? <-- main type name
  const hasMediaConfig = Array.isArray(mediaConfig) && mediaConfig.length > 0;
  //? bases
  //* bases names
  const cssPropsName = 'CssPropsType';
  const cssPseudoClassesName = 'CssPseudoClassesType';
  const cssPseudoElementsName = 'CssPseudoElementsType';
  const cssAdvancedSelectorsName = 'CssAdvancedSelectorsType';
  const cssMediaQueriesName = 'CssMediaQueriesType';
  const cssForeignName = 'CssForeignType';
  //* bases types
  const cssPropsWithTarget = `${cssLibPropsName} & { $target?: string; }`;
  const cssPropsType = `export type ${cssPropsName} = {\n${generateKeysType({
    object: cssProps,
    type: 'string',
  })}}\n`;
  const cssPseudoClassesType = `export type ${cssPseudoClassesName} = {\n${generateKeysType(
    {
      object: cssPseudoClasses,
      type: `${cssPseudoClassesName} | ${cssPseudoElementsName} | ${cssPropsWithTarget}`,
    }
  )}}\n`;
  const cssPseudoElementsType = `export type ${cssPseudoElementsName} = {\n${generateKeysType(
    {
      object: cssPseudoElements,
      type: `${cssPseudoElementsName} | ${cssPseudoClassesName} | ${cssLibPropsName}`,
    }
  )}}\n`;
  const cssAdvancedSelectorsType = `export type ${cssAdvancedSelectorsName} = \n${generateAdvancedSelectorsType(
    {
      advancedSelectors: cssAdvancedSelectors,
      type: cssPropsWithTarget,
    }
  )}\n`;
  const mediaQueriesType = `export type ${cssMediaQueriesName} = ${cssPropsName} & { $type?: string; $values?: { [key: string]: string }; }\n`;
  const foreignType = `export type ${cssForeignName} = { [key:string]: { component: object; variant?: string | unknown; name: string; } }\n`;
  ///? lib
  //* lib names
  const cssLibPseudoClassesName = 'CssLibPseudoClassesType';
  const cssLibPseudoElementsName = 'CssLibPseudoElementsType';
  const cssLibAdvancedSelectorsName = 'CssLibAdvancedSelectorsType';
  const cssLibAttributesName = 'CssLibAttributesType';
  const cssLibMediaQueriesName = 'CssLibMediaQueriesType';
  const cssForeignLibName = 'CssForeignLibType';
  const cssDynamicValuesName = 'CssDynamicValuesType';
  //* lib types
  const libProps = `export type ${cssLibPropsName} = ${cssPropsName} & ${cssLibPseudoClassesName} & ${cssLibPseudoElementsName} & ${cssLibAdvancedSelectorsName} & ${cssDynamicValuesName} & ${cssLibAttributesName}${
    hasMediaConfig ? ` & ${cssLibMediaQueriesName}` : ''
  } & ${cssForeignLibName};\n`;
  const pseudoClasses = `export type ${cssLibPseudoClassesName} = {\n  $pseudoClasses?: ${cssPseudoClassesName} \n}\n`;
  const pseudoElements = `export type ${cssLibPseudoElementsName} = {\n  $pseudoElements?: ${cssPseudoElementsName} \n}\n`;
  const advancedSelectors = `export type ${cssLibAdvancedSelectorsName} = {\n  $advancedSelectors?: ${cssAdvancedSelectorsName}[] \n}\n`;
  const attributes = `export type ${cssLibAttributesName} = { $attributes?: { [key: string]: ${cssLibPropsName} } | { [key: string]: { [key: string]: ${cssLibPropsName} } } }\n`;
  const mediaQueries = hasMediaConfig
    ? `export type ${cssLibMediaQueriesName} = {\n  $mediaQueries?: {\n    [key: string]: ${cssMediaQueriesName}\n  } | {\n${generateMediaTypes(
        { mediaConfig, type: cssLibPropsName }
      )}  }\n}\n`
    : '';
  const foreign = `export type ${cssForeignLibName} = {\n  $foreign?: ${cssForeignName} \n}\n`;
  const dynamicValues = `export type ${cssDynamicValuesName} = {\n  $dynamicValues?: string[]; \n}\n`;

  return `
${cssPropsType}
${cssPseudoClassesType}
${cssPseudoElementsType}
${cssAdvancedSelectorsType}
${mediaQueriesType}
${foreignType}
${pseudoClasses}
${pseudoElements}
${dynamicValues}
${advancedSelectors}
${attributes}
${mediaQueries}
${foreign}
${libProps}
  `;
};

module.exports = { typingStyles };
