/**
 * Foreign Themes Handler for Bernova CSS Framework
 *
 * Processes external CSS theme files and extracts variables and class names.
 * Integrates foreign themes into the main compilation process by analyzing
 * their CSS content and generating appropriate documentation.
 */

const fs = require('fs').promises;
const path = require('path');
const { fileExists } = require('../fileExists/fileExists.utils');
const { simplifyName } = require('../simplifyName/simplifyName.utils');
const { buildRelativePath } = require('../buildRelativePath/buildRelativePath.utils');

/**
 * Processes and integrates foreign CSS theme files into Bernova compilation
 * Extracts CSS variables and class names from external stylesheets
 *
 * @param {string} dir - Base directory for resolving theme file paths
 * @param {string} providerDir - Directory of the provider for relative path calculation
 * @param {Array} foreignThemes - Array of foreign theme configurations
 * @param {string} foreignThemes[].path - Relative path to the theme CSS file
 * @param {string} foreignThemes[].position - Where to include ('before' or 'after')
 * @param {string} foreignThemes[].name - Theme identifier name
 * @returns {Object} Processed theme data with variables, classes, and file paths
 */
const handlerForeignThemes = async ({ dir, providerDir, foreignThemes }) => {
  // Initialize data structures for organizing theme content
  const themeByPosition = { after: '', before: '' }; // File paths by position
  const classesExtracted = { doc: '', declare: '' }; // CSS class documentation
  const variablesExtracted = { doc: '', declare: '' }; // CSS variables documentation
  const variablesRegistered = new Set(); // Track processed variables

  if (!!foreignThemes && foreignThemes.length > 0) {
    // Process each foreign theme configuration
    for (const { path: themePath, position, name } of foreignThemes) {
      if (!fileExists(dir, themePath)) continue;

      // Generate normalized theme name
      const themeName = simplifyName(name).toLocaleUpperCase();
      
      // Build absolute path to the theme CSS file
      const themePathAbsolute = path.resolve(dir, themePath);
      
      // build a relative path to CSS file from provider location
      const themeRoute = buildRelativePath({
        from: providerDir,
        to: themePathAbsolute
      });

      // Read and parse theme CSS content
      const data = await fs.readFile(themePathAbsolute, 'utf-8');
      //* save the route of the file read;
      // themeByPosition[position] +=
      //   idx === 0 ? `'${themeRoute}'` : `, '${themeRoute}'`;
      themeByPosition[position] +=
        themeByPosition[position].length === 0
          ? `'${themeRoute}'`
          : `, '${themeRoute}'`;
      //* get the css variables
      const variableMatches = data.match(/--[a-zA-Z0-9-_]+:\s*[^;]+;/g);
      if (variableMatches) {
        [...new Set(variableMatches)].forEach((variable) => {
          const [varName] = variable.split(':').map((s) => s.trim()); //? <-- recorver only the name
          const keyVarName = simplifyName(varName);
          //* avoid duplicate variables
          if (variablesRegistered.has(keyVarName)) return;
          variablesRegistered.add(keyVarName);
          //* set register by theme name
          variablesExtracted.doc += `  ${keyVarName}: 'var(${varName})',\n`;
          variablesExtracted.declare += `  ${keyVarName}: string; \n`;
        });
      }
      //* get the css classes
      const classMatches = data.match(/\.[a-zA-Z0-9_-]+/g);
      if (classMatches) {
        const { doc, declare } = [...new Set(classMatches)].reduce(
          (acc, cls) => {
            const className = cls.slice(1); //? <-- Remove the dot
            const keyClassName = simplifyName(className);
            acc.doc += `    ${keyClassName}: '${className}',\n`;
            acc.declare += `    ${keyClassName}: string; \n`;
            return acc;
          },
          { doc: '', declare: '' }
        );
        //* set register by theme name
        classesExtracted.doc += `  ${themeName}: {\n${doc}  },\n`;
        classesExtracted.declare += `  ${themeName}: {\n${declare}  },\n`;
      }
    }
  }

  return {
    themeByPosition: {
      after: `[${themeByPosition.after}]`,
      before: `[${themeByPosition.before}]`,
    },
    variablesExtracted,
    classesExtracted,
  };
};

module.exports = { handlerForeignThemes };
