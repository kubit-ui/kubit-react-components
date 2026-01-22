/**
 * TypeScript Types Generator for Bernova CSS Framework
 *
 * Generates TypeScript definition files for CSS classes, components, and media queries.
 * Provides type safety and autocomplete support for generated CSS utilities.
 */

const path = require('path');
const { typingStyles } = require('../typingStyles');
const { writeDoc } = require('../writeDoc/writeDoc.utils');

/**
 * Generates TypeScript definition files for the compiled CSS theme
 * Creates type-safe interfaces for CSS classes, components, and media queries
 *
 * @param {Object} params - Generation parameters
 * @param {string} params.dir - Output directory for type files
 * @param {Object} params.typesTools - TypeScript generation configuration
 * @param {Object} params.mediaConfig - Media queries configuration for type generation
 * @param {Object} params.stylesDocs - Component styles documentation for type extraction
 */
const generateTypesTools = async ({
  dir,
  typesTools,
  mediaConfig,
  stylesDocs,
}) => {
  const { stylesTypes, componentsTypes } = typesTools;

  if (!!stylesTypes) {
    const { name: styleName, path: stylesPath } = stylesTypes;
    const stylesTypesPath = path.resolve(dir, stylesPath, `${styleName}.ts`);
    const stylesTyping = typingStyles({ mediaConfig });
    await writeDoc(stylesTypesPath, stylesTyping, `${styleName}.ts`);
  }
  if (!!componentsTypes && Object.keys(stylesDocs).length > 0) {
    const { name: componentsName, path: componentPath } = componentsTypes;
    const componentsTypesPath = path.resolve(
      dir,
      componentPath,
      `${componentsName}.ts`
    );
    const { comp, prov } = stylesDocs;
    const typeName =
      componentsName.charAt(0).toUpperCase() + componentsName.slice(1);
    const libAvailableComponents = `export type ${typeName}AvailableComponents = ${comp.simple}\n`;
    const libComponents = `export type ${typeName}Components = {\n${prov.declare}}`;
    const filteredKeys = `
type NonVariablesKeys<T> = {
  [K in keyof T]: K extends \`$\${string}\` ? never : K;
}[keyof T];
export type ComponentSelected<T> = Pick<T, NonVariablesKeys<T>>;
    `;
    const docComponents = `${libAvailableComponents}${filteredKeys}\n${libComponents}`;
    await writeDoc(componentsTypesPath, docComponents, `${componentsName}.ts`);
  }
};

module.exports = { generateTypesTools };
