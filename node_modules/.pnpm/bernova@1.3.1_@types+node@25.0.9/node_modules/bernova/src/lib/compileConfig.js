const path = require('path');
const tsConfigPaths = require('tsconfig-paths');
const { readConfigData } = require('./readFile/readFile.utils.js');

/**
 * Compiles and validates the Bernova configuration from bernova.config.json
 * Sets up TypeScript path mapping if configured
 *
 * @param {Object} params - The parameters object
 * @param {string} params.dir - The project directory containing the configuration file
 * @returns {Promise<Object>} Configuration object containing themes and provider settings
 * @throws {Error} When configuration file is invalid or missing
 */
const compileConfig = async ({ dir }) => {
  try {
    const configDir = path.resolve(dir, 'bernova.config.json');
    const configData = await readConfigData(configDir);

    if (!configData) {
      throw new Error(`Configuration file not found at ${configDir}`);
    }

    const { themes, provider, tsconfigPath } = configData;

    // Validate required configuration
    if (!themes || !Array.isArray(themes) || themes.length === 0) {
      throw new Error('Configuration must include at least one theme');
    }

    // Setup TypeScript path mapping if configured
    if (tsconfigPath) {
      try {
        const tsConfig = path.resolve(dir, tsconfigPath);
        const tsConfigData = await readConfigData(tsConfig);

        if (tsConfigData?.compilerOptions) {
          tsConfigPaths.register({
            baseUrl: tsConfigData.compilerOptions.baseUrl || dir,
            paths: tsConfigData.compilerOptions.paths || {},
          });
          console.log(`TypeScript paths configured from ${tsconfigPath}`);
        } else {
          console.warn(`Invalid or empty tsconfig at ${tsconfigPath}`);
        }
      } catch (error) {
        console.warn(
          `Failed to load TypeScript configuration: ${error.message}`
        );
      }
    }

    return { themes, provider };
  } catch (error) {
    console.error('Failed to compile configuration:', error.message);
    throw error;
  }
};

module.exports = { compileConfig };
