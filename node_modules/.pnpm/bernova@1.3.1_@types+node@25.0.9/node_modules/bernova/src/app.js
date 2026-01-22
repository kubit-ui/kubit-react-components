const path = require('path');
const {
  generateBaseCss,
  compileThemes,
  generateCSS,
  compileConfig,
  writeDoc,
  generateProvider,
  processMediaConfig,
  generateThemeRegister,
  generateCssDoc,
  handlerForeignThemes,
  buildRelativePath,
} = require('./lib');
const {
  validatePreviouslyExists,
  processCssWithPostcss,
} = require('./lib/generateCss/helpers');
const { compilerTypeValid } = require('./constants');
const {
  generateTypesTools,
} = require('./lib/generateTypesTools/generateTypesTools.utils');
const { generateTools } = require('./lib/generateTools/generateTools.utils');

/**
 * Main function to compile Bernova styles based on configuration
 * Processes themes, generates CSS, and creates necessary files for the styling system
 *
 * @param {string} compilerType - The type of compilation to perform:
 *   - 'foundationOnly': Generate only foundation styles (variables, base styles)
 *   - 'componentOnly': Generate only component/theme styles
 *   - 'full': Generate both foundation and component styles (default)
 * @returns {Promise<void>} Resolves when all styles have been compiled and written
 */
async function bernovaStyles(compilerType) {
  const dir = process.cwd();
  const themeRegister = {};
  const { default: ora } = await import('ora');
  const spinner = ora('Starting BernovaStyled process...').start();

  // Load and validate configuration from bernova.config.json
  const { themes, provider } = await compileConfig({ dir });

  // Process each theme configuration sequentially
  for (const themeConfig of themes) {
    const {
      themeCss,
      fonts,
      resetCss,
      bvTools,
      name,
      stylesPath,
      typesTools,
      foreignThemes,
      prefix,
    } = compileThemes({
      themeConfig,
      dir,
    });

    const baseCss = await generateBaseCss({ fonts, resetCss, stylesPath });

    const { theme, media = [], ...withoutTheme } = themeCss;
    const source = (() => {
      switch (compilerType) {
        case compilerTypeValid.foundationOnly:
          return withoutTheme;
        case compilerTypeValid.componentOnly:
          return { theme, media };
        default:
          return themeCss;
      }
    })();
    const { stylesCss, foundationsCss, stylesDocs, rootDocs, globalDocs } =
      await generateCSS({
        source,
        baseCss,
        compilerType,
        prefix,
      });

    const stylesDir = stylesPath
      ? path.resolve(dir, stylesPath)
      : path.resolve(dir, 'styles');

    const { cssDir, cssMinifiedDir, oldData } = await validatePreviouslyExists({
      stylesDir,
      compilerType,
      name,
    });

    const finalCss = generateCssDoc({
      compilerType,
      stylesCss,
      foundationsCss,
      oldData,
    });

    const cssContent = await processCssWithPostcss(finalCss, false, null);
    const cssMinified = await processCssWithPostcss(finalCss, true, null);

    // Write both regular and minified CSS files
    spinner.start(`Writing CSS to file for theme: ${name}...`);
    await writeDoc(cssDir, cssContent, 'css');
    await writeDoc(cssMinifiedDir, cssMinified, 'css minified');
    spinner.succeed(`CSS written to file for theme: ${name}.`);

    spinner.start(`Compiling register for theme: ${name}...`);
    // Register compilation is handled internally by theme processing
    spinner.succeed(`Register compiled for theme: ${name}.`);

    // Generate TypeScript type definitions if configured
    spinner.start('Verifying types tools...');
    if (typesTools) {
      spinner.succeed(`Types tools verified for theme: ${name}.`);
      await generateTypesTools({
        dir,
        typesTools,
        mediaConfig: media,
        stylesDocs,
      });
    } else {
      spinner.succeed(`No types tools found for theme: ${name}.`);
    }

    const mediaDocs = media ? processMediaConfig({ mediaConfig: media }) : null;

    // Generate development tools if configured (bvTools)
    spinner.start(`Processing bvTools for theme: ${name}...`);
    if (bvTools) {
      spinner.succeed(`bvTools found for theme: ${name}.`);
      await generateTools({
        bvTools,
        compilerType,
        name,
        dir,
        stylesDir,
        stylesDocs,
        rootDocs,
        globalDocs,
        mediaDocs,
      });
    } else {
      spinner.succeed(`No bvTools found for theme: ${name}.`);
    }

    if (provider) {
      spinner.start(`Generating theme register for theme: ${name}...`);
      // build a relative path to CSS file from provider
      const providerDir = path.resolve(provider.path);
      const cssPath = buildRelativePath({
        from: providerDir,
        to: path.join(stylesDir, `${name}.css`),
      })
      const { themeByPosition, variablesExtracted, classesExtracted } =
        await handlerForeignThemes({ dir, providerDir, foreignThemes });
      
      themeRegister[name] = generateThemeRegister({
        cssPath,
        rootDocs,
        stylesDocs,
        globalDocs,
        mediaDocs,
        foreignStyles: classesExtracted,
        foreignVars: variablesExtracted,
        foreignBeforeFiles: themeByPosition.before,
        foreignAfterFiles: themeByPosition.after,
      });
      spinner.succeed(`Theme register generated for provider for theme: ${name}`);
    }
  }

  // Generate React/framework provider if configured
  if (provider) {
    spinner.start('Provider configuration found, generating tools...');
    await generateProvider({
      dir: path.resolve(dir, provider.path),
      providerDocs: themeRegister,
      declarationHelp: provider.declarationHelp,
      providerName: provider.name,
      compilerType,
    });
    spinner.succeed('Provider tools generated successfully.');
  }
}

module.exports = { bernovaStyles };
