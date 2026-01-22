/**
 * File Reading Utilities for Bernova
 *
 * Provides utilities for reading and parsing configuration files and theme data.
 * Includes TypeScript support via ts-node for importing .ts configuration files.
 */

const fs = require('fs').promises;
const path = require('path');
const { register } = require('ts-node');

// Configure ts-node for TypeScript file imports
register({
  compilerOptions: {
    module: 'commonjs',
    target: 'es6',
    moduleResolution: 'node',
    esModuleInterop: true,
    allowJs: true,
    skipLibCheck: true, // Skip type checking for faster compilation
    allowSyntheticDefaultImports: true,
    checkJs: false
  },
});

/**
 * Reads and parses JSON configuration data from a file
 * Supports both .json and .js configuration files
 *
 * @param {string} filePath - The absolute path to the configuration file
 * @returns {Promise<Object>} The parsed configuration data
 * @throws {Error} When file cannot be read or parsed
 */
const readConfigData = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const parsedData = JSON.parse(data);

    // Validate basic structure
    if (!parsedData || typeof parsedData !== 'object') {
      throw new Error('Configuration file must contain a valid JSON object');
    }

    return parsedData;
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error(`Configuration file not found: ${filePath}`);
    } else if (error instanceof SyntaxError) {
      throw new Error(`Invalid JSON in configuration file: ${error.message}`);
    }

    console.error(`Error reading config file at ${filePath}:`, error.message);
    throw error;
  }
};

/**
 * Reads and loads theme data from TypeScript/JavaScript modules
 * Dynamically requires modules and extracts named exports
 *
 * @param {Object} paths - Object containing path and export name configurations
 * @param {string} paths[].path - Relative or absolute path to the module file
 * @param {string} paths[].name - Named export to extract from the module
 * @returns {Object} Object with loaded theme data keyed by the original path keys
 * @throws {Error} When module cannot be loaded or export is not found
 *
 * @example
 * const paths = {
 *   foundations: { path: './design/foundations.ts', name: 'FOUNDATIONS' },
 *   theme: { path: './design/theme.ts', name: 'THEME' }
 * };
 * const data = readThemeData(paths);
 * // Returns: { foundations: {...}, theme: {...} }
 */
const readThemeData = (paths) => {
  const data = {};

  Object.entries(paths).forEach(([key, config]) => {
    try {
      const { path: modulePath, name } = config;

      if (!modulePath || !name) {
        throw new Error(
          `Invalid configuration for ${key}: missing path or name`
        );
      }

      // Resolve the module path
      const resolvedPath = path.resolve(modulePath);

      // Clear require cache to ensure fresh imports
      delete require.cache[resolvedPath];

      // Load the module
      const module = require(resolvedPath);

      // Extract the named export
      if (!(name in module)) {
        throw new Error(`Export "${name}" not found in module ${modulePath}`);
      }

      data[key] = module[name];
    } catch (error) {
      console.error(`Failed to load theme data for ${key}:`, error.message);
      throw new Error(`Cannot load theme data for "${key}": ${error.message}`);
    }
  });

  return data;
};

module.exports = { readConfigData, readThemeData };
