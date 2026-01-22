/**
 * Tools Generator for Bernova CSS Framework
 *
 * Generates JavaScript utility files for CSS class names, variables, and components.
 * Creates developer tools for accessing generated CSS classes and custom properties.
 */

const path = require('path');
const { compilerTypeValid } = require('../../constants');
const { writeDoc } = require('../writeDoc/writeDoc.utils');

/**
 * Generates developer tools and utility files for the compiled CSS theme
 * Creates JavaScript exports for class names, variables, and component mappings
 *
 * @param {Object} params - Generation parameters
 * @param {string} params.dir - Output directory for tools
 * @param {Object} params.bvTools - Tools configuration and paths
 * @param {string} params.compilerType - Compilation type (full, foundation-only, component-only)
 * @param {string} params.name - Theme name
 * @param {Object} params.stylesDocs - Styles documentation data
 * @param {Object} params.rootDocs - Root/variables documentation
 * @param {Object} params.globalDocs - Global styles documentation
 * @param {Object} params.mediaDocs - Media queries documentation
 */
const generateTools = async ({
  dir,
  bvTools,
  compilerType,
  name,
  stylesDocs,
  rootDocs,
  globalDocs,
  mediaDocs,
}) => {
  const {
    path: bvToolsPath,
    cssClassNames,
    cssVariables,
    availableComponents,
    cssMediaQueries,
    cssGlobalStyles,
    declarationHelp,
  } = bvTools;

  const hasClassNames = compilerType !== compilerTypeValid.foundationOnly;
  const hasFoundations = compilerType !== compilerTypeValid.componentOnly;

  //* Generate tools for classNames
  if (!!cssClassNames && hasClassNames) {
    // Generate CSS class names utility file
    const {
      tools: { doc, declare },
    } = stylesDocs;
    const classNamePath = path.resolve(dir, bvToolsPath, 'cssClasses.js');
    const docClassNames = `export const cssClasses = {\n${doc}}`;
    await writeDoc(classNamePath, docClassNames, 'cssClasses.js');
    if (declarationHelp) {
      const classNameDeclarePath = path.resolve(
        dir,
        bvToolsPath,
        'cssClasses.d.ts'
      );
      const docClassNamesDeclare = `export declare const cssClasses: {\n${declare}}`;
      await writeDoc(
        classNameDeclarePath,
        docClassNamesDeclare,
        'cssClasses.d.ts'
      );
    }
    // CSS class names tools generated successfully
  }
  //* Generate tools for cssVariables
  if (!!cssVariables && hasFoundations) {
    // Generate CSS variables utility file
    const { doc, declare } = rootDocs;
    const cssVariablesPath = path.resolve(dir, bvToolsPath, 'cssVars.js');
    const docCssVariables = `export const cssVars = {\n${doc}}`;
    await writeDoc(cssVariablesPath, docCssVariables, 'cssVars.js');
    if (declarationHelp) {
      const cssVariablesDeclarePath = path.resolve(
        dir,
        bvToolsPath,
        'cssVars.d.ts'
      );
      const docCssVariablesDeclare = `export declare const cssVars: {\n${declare}}`;
      await writeDoc(
        cssVariablesDeclarePath,
        docCssVariablesDeclare,
        'cssVars.d.ts'
      );
    }
    // CSS variables tools generated successfully
  }
  //* Generate tools for cssMediaQueries
  if (!!availableComponents && hasClassNames) {
    // spinner.start(
    //   `Generating Available Components Tools for theme: ${name}...`
    // );
    const { comp } = stylesDocs;
    const availableComponentsPath = path.resolve(
      dir,
      bvToolsPath,
      'cssAvailableComponents.js'
    );
    const docAvailableComponents = `export const cssAvailableComponents = {\n${comp.object}}`;
    await writeDoc(
      availableComponentsPath,
      docAvailableComponents,
      'cssAvailableComponents.js'
    );
    if (declarationHelp) {
      const availableComponentsDeclarePath = path.resolve(
        dir,
        bvToolsPath,
        'cssAvailableComponents.d.ts'
      );
      const declareAvailableComponents = `export declare const cssAvailableComponents: {\n${comp.object}}`;
      await writeDoc(
        availableComponentsDeclarePath,
        declareAvailableComponents,
        'cssAvailableComponents.d.ts'
      );
    }
    // spinner.succeed(
    //   `Available Components Tools generated for theme: ${name}.`
    // );
  }
  //* Generate tools for cssMediaQueries
  if (hasFoundations && !!cssMediaQueries) {
    const mediaQueriesPath = path.resolve(
      dir,
      bvToolsPath,
      'cssMediaQueries.js'
    );
    const docMediaQueries = `export const cssMediaQueries = {\n${mediaDocs}}`;
    await writeDoc(mediaQueriesPath, docMediaQueries, 'cssMediaQueries.js');
    if (declarationHelp) {
      const mediaQueriesDeclarePath = path.resolve(
        dir,
        bvToolsPath,
        'cssMediaQueries.d.ts'
      );
      const docMediaQueriesDeclare = `export declare const cssMediaQueries: {\n${mediaDocs}}`;
      await writeDoc(
        mediaQueriesDeclarePath,
        docMediaQueriesDeclare,
        'cssMediaQueries.d.ts'
      );
    }
  }

  //* Generate tools for cssGlobalStyles
  if (hasFoundations && !!cssGlobalStyles) {
    const { doc, declare } = globalDocs;
    const globalStylesPath = path.resolve(
      dir,
      bvToolsPath,
      'cssGlobalStyles.js'
    );
    const docGlobalStyles = `export const cssGlobalStyles = {\n${doc}}`;
    await writeDoc(globalStylesPath, docGlobalStyles, 'cssGlobalStyles.js');
    if (declarationHelp) {
      const globalStylesDeclarePath = path.resolve(
        dir,
        bvToolsPath,
        'cssGlobalStyles.d.ts'
      );
      const docGlobalStylesDeclare = `export declare const cssGlobalStyles: {\n${declare}}`;
      await writeDoc(
        globalStylesDeclarePath,
        docGlobalStylesDeclare,
        'cssGlobalStyles.d.ts'
      );
    }
  }

  return true;
};

module.exports = { generateTools };
