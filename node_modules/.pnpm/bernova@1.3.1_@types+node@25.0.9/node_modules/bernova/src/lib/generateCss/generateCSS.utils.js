const { filterGenerateCss } = require('./helpers/filterGenerateCss.utils');

/**
 * Generates CSS based on the provided source, media queries, and other parameters.
 *
 * @param {Object} source - The source object containing foundations and theme.
 * @param {string} dir - The directory where the CSS files will be saved.
 * @param {Array} mediaQueries - An array of media queries to be used.
 * @param {string} name - The name to be used for the generated CSS.
 * @param {boolean} [generateProvider=false] - Flag to determine if a provider should be generated.
 * @param {string} [baseCss=''] - Base font CSS to be included in the generated CSS.
 * @returns {Promise<Object>} - A promise that resolves to an object containing the generated CSS and minified CSS.
 */
const generateCSS = async ({ source, prefix, baseCss = '', compilerType }) => {
  const { default: ora } = await import('ora');
  const spinner = ora('Generating CSS...').start();

  try {
    const { stylesCss, foundationsCss, stylesDocs, rootDocs, globalDocs } =
      filterGenerateCss({
        source,
        compilerType,
        baseCss,
        prefix,
      });

    spinner.succeed('CSS generation completed successfully.');
    return {
      stylesCss,
      foundationsCss,
      stylesDocs,
      rootDocs,
      globalDocs,
    };
  } catch (error) {
    spinner.fail('Error generating CSS.');
    console.error(error);
    throw error; // Re-throw the error after logging it
  }
};

module.exports = { generateCSS };
