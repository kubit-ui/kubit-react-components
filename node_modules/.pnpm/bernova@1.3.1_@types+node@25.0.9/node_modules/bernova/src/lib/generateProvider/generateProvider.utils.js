/**
 * Provider Generation Module for Bernova
 *
 * Generates JavaScript/TypeScript provider utilities that allow applications
 * to consume Bernova-generated CSS classes, variables, and theme data.
 *
 * Creates:
 * - CSS class name mappings
 * - CSS variable exports
 * - Theme switching utilities
 * - TypeScript declarations
 * - Development statistics
 */

const f = require('fs');
const fs = require('fs').promises;
const path = require('path');
const { writeDoc } = require('../writeDoc/writeDoc.utils');
const { compilerTypeValid } = require('../../constants');
const {
  extractDocFragment,
} = require('../extractDocFragment/extractDocFragment.utils');

/**
 * Builds statistics document with theme data and CSS information
 * Handles incremental builds by preserving data from previous compilations
 *
 * @param {Object} params - Build parameters
 * @param {Object} params.providerDocs - Theme documentation data
 * @param {boolean} params.declarationHelp - Whether to generate TypeScript declarations
 * @param {string} params.compilerType - Type of compilation being performed
 * @param {string} params.dir - Output directory for provider files
 * @returns {Promise<Object>} Generated documentation structure
 */
const buildStatsDoc = async ({
  providerDocs,
  declarationHelp,
  compilerType,
  dir,
}) => {
  const initialState = {
    doc: {
      cssThemes: '/* CssThemes */\nexport const cssThemes = {\n',
      cssVars: '/* CssVars */\nexport const cssVars = {\n',
      cssClasses: '/* CssClasses */\nexport const cssClasses = {\n',
      cssAvailableComponents:
        '/* CssAvailableComponents */\nexport const cssAvailableComponents = {\n',
      cssGlobalStyles:
        '/* CssGlobalStyles */\nexport const cssGlobalStyles = {\n',
      cssMediaQueries:
        '/* CssMediaQueries */\nexport const cssMediaQueries = {\n',
    },
    declare: {
      cssThemes: '/* CssThemes */\nexport declare const cssThemes: {\n',
      cssVars: '/* CssVars */\nexport interface CssVars {\n',
      cssClasses: '/* CssClasses */\nexport interface CssClasses {\n',
      cssAvailableComponents:
        '/* CssAvailableComponents */\nexport interface CssAvailableComponents {\n',
      cssGlobalStyles:
        '/* CssGlobalStyles */\nexport interface CssGlobalStyles {\n',
      cssMediaQueries:
        '/* CssMediaQueries */\nexport interface CssMediaQueries {\n',
    },
  };
  const hasPreviouslyConfig = f.existsSync(dir);
  if (hasPreviouslyConfig) {
    //* recover the stats document previously generated
    const stats = await fs.readFile(
      path.resolve(dir, 'stats/stats.js'),
      'utf8'
    );

    //* extract the css variables
    if (compilerType === compilerTypeValid.componentOnly) {
      //? extract the css variables
      const cssVars = extractDocFragment({ section: 'CssVars', doc: stats });
      //? extract the global styles
      const cssGlobalStyles = extractDocFragment({
        section: 'CssGlobalStyles',
        doc: stats,
      });
      const cssMediaQueries = extractDocFragment({
        section: 'CssMediaQueries',
        doc: stats,
      });

      initialState.doc.cssVars = `/* CssVars */\n${cssVars}\n/* CssVars */\n`;
      initialState.doc.cssGlobalStyles = `/* CssGlobalStyles */\n${cssGlobalStyles}\n/* CssGlobalStyles */\n`;
      initialState.doc.cssMediaQueries = `/* CssMediaQueries */\n${cssMediaQueries}\n/* CssMediaQueries */\n`;
    }

    //* extract the css class names
    if (compilerType === compilerTypeValid.foundationOnly) {
      const cssClasses = extractDocFragment({
        section: 'CssClasses',
        doc: stats,
      });
      const cssAvailableComponents = extractDocFragment({
        section: 'CssAvailableComponents',
        doc: stats,
      });
      initialState.doc.cssClasses = `/* CssClasses */\n${cssClasses}\n/* CssClasses */\n`;
      initialState.doc.cssAvailableComponents = `/* CssAvailableComponents */\n${cssAvailableComponents}\n/* CssAvailableComponents */\n`;
    }
    //? extract the declarations
    if (declarationHelp) {
      const statsDeclare = await fs.readFile(
        path.resolve(dir, 'stats/stats.d.ts'),
        'utf8'
      );
      if (compilerType === compilerTypeValid.componentOnly) {
        const cssVarsDeclare = extractDocFragment({
          section: 'CssVars',
          doc: statsDeclare,
        });
        const cssGlobalStylesDeclare = extractDocFragment({
          section: 'CssGlobalStyles',
          doc: statsDeclare,
        });
        const cssMediaQueriesDeclare = extractDocFragment({
          section: 'CssMediaQueries',
          doc: statsDeclare,
        });

        initialState.declare.cssVars = `/* CssVars */\n${cssVarsDeclare}\n/* CssVars */\n`;
        initialState.declare.cssGlobalStyles = `/* CssGlobalStyles */\n${cssGlobalStylesDeclare}\n/* CssGlobalStyles */\n`;
        initialState.declare.cssMediaQueries = `/* CssMediaQueries */\n${cssMediaQueriesDeclare}\n/* CssMediaQueries */\n`;
      }
      if (compilerType === compilerTypeValid.foundationOnly) {
        const cssClassesDeclare = extractDocFragment({
          section: 'CssClasses',
          doc: statsDeclare,
        });
        const cssAvailableComponentsDeclare = extractDocFragment({
          section: 'CssAvailableComponents',
          doc: statsDeclare,
        });
        initialState.declare.cssClasses = `/* CssClasses */\n${cssClassesDeclare}\n/* CssClasses */\n`;
        initialState.declare.cssAvailableComponents = `/* CssAvailableComponents */\n${cssAvailableComponentsDeclare}\n/* CssAvailableComponents */\n`;
      }
    }
  }
  const providerEntries = Object.entries(providerDocs);
  const compilerVars = compilerType !== compilerTypeValid.componentOnly;
  const compilerClasses = compilerType !== compilerTypeValid.foundationOnly;
  return providerEntries.reduce((acc, [theme, values], idx) => {
    //? check if there are foreign styles docs
    const beforeFilesExists = values.beforeFiles?.length > 0;
    const afterFilesExists = values.afterFiles?.length > 0;
    const beforeKeyValue = beforeFilesExists
      ? ` before: ${values.beforeFiles}, `
      : '';
    const afterKeyValue = afterFilesExists
      ? ` after: ${values.afterFiles}, `
      : '';
    const foreignKeyValue =
      beforeFilesExists || afterFilesExists
        ? ` foreign: {${beforeKeyValue}${afterKeyValue}},`
        : '';
    //? add the theme css path
    acc.doc.cssThemes += `  '${theme}': { css: '${values.cssPath}',${foreignKeyValue} },\n`;
    if (declarationHelp) {
      acc.declare.cssThemes += `  '${theme}': { css: string; foreign?: { before?: string[]; after?: string[]; }; };\n`;
    }
    //? add the css variables
    if (compilerVars) {
      acc.doc.cssVars += `  '${theme}': {\n${
        values.variables?.doc || ''
      }  },\n`;
      acc.doc.cssGlobalStyles += `  '${theme}': {\n${
        values.globalStyles?.doc || ''
      }  },\n`;
      acc.doc.cssMediaQueries += `  '${theme}': {\n${
        values.mediaQueries?.doc || ''
      }  },\n`;
      if (declarationHelp) {
        acc.declare.cssVars += `  '${theme}': {\n${
          values.variables?.declare || ''
        }  },\n`;
        acc.declare.cssGlobalStyles += `  '${theme}': {\n${
          values.globalStyles?.declare || ''
        }  },\n`;
        acc.declare.cssMediaQueries += `  '${theme}': {\n${
          values.mediaQueries?.declare || ''
        }  },\n`;
      }
    }
    //? add the css class names amd available components
    if (compilerClasses) {
      acc.doc.cssClasses += `  '${theme}': {\n${
        values.classNames?.doc || ''
      }  },\n`;
      acc.doc.cssAvailableComponents += `  '${theme}': {\n${
        values.availableComp?.doc || ''
      }  },\n`;
      if (declarationHelp) {
        acc.declare.cssClasses += `  '${theme}': {\n${
          values.classNames?.declare || ''
        }  },\n`;
        acc.declare.cssAvailableComponents += `  '${theme}': {\n${
          values.availableComp?.declare || ''
        }  },\n`;
      }
    }
    if (idx === providerEntries.length - 1) {
      acc.doc.cssThemes += '}\n/* CssThemes */\n';
      acc.doc.cssVars += compilerVars ? '}\n/* CssVars */\n' : '';
      acc.doc.cssGlobalStyles += compilerVars
        ? '}\n/* CssGlobalStyles */\n'
        : '';
      acc.doc.cssMediaQueries += compilerVars
        ? '}\n/* CssMediaQueries */\n'
        : '';

      acc.doc.cssClasses += compilerClasses ? '}\n/* CssClasses */\n' : '';
      acc.doc.cssAvailableComponents += compilerClasses
        ? '}\n/* CssAvailableComponents */\n'
        : '';
      if (declarationHelp) {
        acc.declare.cssThemes += '}\n/* CssThemes */\n';
        acc.declare.cssVars += compilerVars ? '}\n/* CssVars */\n' : '';
        acc.declare.cssGlobalStyles += compilerVars
          ? '}\n/* CssGlobalStyles */\n'
          : '';
        acc.declare.cssMediaQueries += compilerVars
          ? '}\n/* CssMediaQueries */\n'
          : '';
        acc.declare.cssClasses += compilerClasses
          ? '}\n/* CssClasses */\n'
          : '';
        acc.declare.cssAvailableComponents += compilerClasses
          ? '}\n/* CssAvailableComponents */\n'
          : '';
      }
    }
    return acc;
  }, initialState);
};

const generateProvider = async ({
  dir,
  providerDocs,
  declarationHelp,
  providerName,
  compilerType,
}) => {
  const { doc, declare } = await buildStatsDoc({
    providerDocs,
    declarationHelp,
    compilerType,
    dir,
  });

  //? write stats document
  const docsTemplate = `${doc.cssThemes}\n${doc.cssVars}\n${doc.cssClasses}\n${doc.cssAvailableComponents}\n${doc.cssGlobalStyles}\n${doc.cssMediaQueries}\n`;
  await writeDoc(`${dir}/stats/stats.js`, docsTemplate, 'stats.js');
  //? write provider
  const providerDir = path.resolve(__dirname, './template/providerTemplate.js');
  let template = await fs.readFile(providerDir, 'utf8');
  //* customize provider name
  template = template.replace(/\$_Provider_\$/g, providerName);
  await writeDoc(`${dir}/${providerName}.js`, template, `${providerName}.js`);

  if (declarationHelp) {
    //? write stats declare document
    const declareTemplate = `${declare.cssThemes}\n${declare.cssVars}\n${declare.cssClasses}\n${declare.cssAvailableComponents}\n${declare.cssGlobalStyles}\n${declare.cssMediaQueries}\nexport declare const cssVars: CssVars;\nexport declare const cssClasses: CssClasses;\nexport declare const cssAvailableComponents: CssAvailableComponents;\nexport declare const cssGlobalStyles: CssGlobalStyles;\nexport declare const cssMediaQueries: CssMediaQueries;\n`;
    await writeDoc(`${dir}/stats/stats.d.ts`, declareTemplate, 'stats.d.ts');
    //? write provider declare document
    const providerDirDeclare = path.resolve(
      __dirname,
      './template/providerTemplate.d.ts'
    );
    let templateDeclare = await fs.readFile(providerDirDeclare, 'utf8');
    templateDeclare = templateDeclare.replace(/\$_Provider_\$/g, providerName);
    await writeDoc(
      `${dir}/${providerName}.d.ts`,
      templateDeclare,
      `${providerName}.d.ts`
    );
  }
};

module.exports = { generateProvider };
