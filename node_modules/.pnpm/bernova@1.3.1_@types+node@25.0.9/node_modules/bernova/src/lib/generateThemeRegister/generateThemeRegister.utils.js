/**
 * Theme Register Generator for Bernova CSS Framework
 *
 * Manages the registration and organization of CSS variables, styles, and components
 * into structured documentation for provider and tool generation.
 */

/**
 * Registers CSS custom properties (variables) from root and foreign themes
 * Consolidates variable documentation for provider generation
 *
 * @param {Object} rootDocs - Root CSS variables documentation
 * @param {Object} foreignVars - Foreign theme variables documentation
 * @param {Object} register - Theme register to update with variables
 */
const registerCssVariables = ({ rootDocs, foreignVars, register }) => {
  // Check if documentation exists for root or foreign variables
  const rootDocsExists =
    rootDocs?.doc?.length > 0 && rootDocs?.declare?.length > 0;
  const foreignVarExists =
    foreignVars?.doc?.length > 0 && foreignVars?.declare?.length > 0;

  // Initialize variables section if any documentation exists
  if (rootDocsExists || foreignVarExists) {
    register.variables = { doc: '', declare: '' };
  }

  // Add root variables documentation
  if (rootDocsExists) {
    register.variables.doc += rootDocs.doc;
    register.variables.declare += rootDocs.declare;
  }

  // Add foreign variables documentation
  if (foreignVarExists) {
    register.variables.doc += foreignVars.doc;
    register.variables.declare += foreignVars.declare;
  }
};

/**
 * Registers CSS class names and component styles for theme documentation
 * Consolidates component styles from local and foreign themes
 *
 * @param {Object} stylesDocs - Local component styles documentation
 * @param {Object} foreignStyles - Foreign theme styles documentation
 * @param {Object} register - Theme register to update with styles
 */
const registerCssStyles = ({ stylesDocs, foreignStyles, register }) => {
  // Check existence of various style documentation types
  const availableCompExists = stylesDocs?.comp?.object?.length > 0;
  const stylesDocsExists =
    stylesDocs?.prov?.doc?.length > 0 && stylesDocs?.prov?.declare?.length > 0;
  const foreignStylesExists =
    foreignStyles?.doc?.length > 0 && foreignStyles?.declare?.length > 0;

  // Initialize classNames section if any style documentation exists
  if (stylesDocsExists || foreignStylesExists) {
    register.classNames = { doc: '', declare: '' };
  }

  // Add local styles documentation
  if (stylesDocsExists) {
    register.classNames.doc += stylesDocs.prov.doc;
    register.classNames.declare += stylesDocs.prov.declare;
  }
  if (foreignStylesExists) {
    register.classNames.doc += foreignStyles.doc;
    register.classNames.declare += foreignStyles.declare;
  }
  if (availableCompExists) {
    register.availableComp = {
      doc: stylesDocs.comp.object,
      declare: stylesDocs.comp.object,
    };
  }
};

const registerCssGlobalDocs = ({ globalDocs, register }) => {
  if (globalDocs?.doc?.length > 0 && globalDocs?.declare?.length > 0) {
    register.globalStyles = globalDocs;
  }
};

const registerCssMedia = ({ mediaDocs, register }) => {
  if (mediaDocs?.length > 0) {
    register.mediaQueries = {
      doc: mediaDocs,
      declare: mediaDocs,
    };
  }
};

const registerBeforeAfterFiles = ({
  foreignBeforeFiles,
  foreignAfterFiles,
  register,
}) => {
  if (foreignBeforeFiles?.length > 0) {
    register.beforeFiles = foreignBeforeFiles;
  }
  if (foreignAfterFiles?.length > 0) {
    register.afterFiles = foreignAfterFiles;
  }
};

const generateThemeRegister = ({
  cssPath,
  rootDocs,
  stylesDocs,
  globalDocs,
  mediaDocs,
  foreignStyles,
  foreignVars,
  foreignBeforeFiles,
  foreignAfterFiles,
}) => {
  const register = { cssPath };
  //* register css variables (include foreign vars)
  registerCssVariables({ rootDocs, foreignVars, register });
  //* register css class names and available components (include foreign styles)
  registerCssStyles({ stylesDocs, foreignStyles, register });
  //* register global styles docs
  registerCssGlobalDocs({ globalDocs, register });
  //* register media queries docs
  registerCssMedia({ mediaDocs, register });
  //* register lower and higher files
  registerBeforeAfterFiles({
    foreignBeforeFiles,
    foreignAfterFiles,
    register,
  });
  return register;
};

module.exports = { generateThemeRegister };
