const fs = require('fs');
const path = require('path');

/**
 * Checks if a file exists at the specified path
 * Safely handles path resolution and filesystem access errors
 *
 * @param {string} dir - The base directory path
 * @param {string} currentPath - The relative file path to check
 * @returns {boolean} True if the file exists, false otherwise
 *
 * @example
 * fileExists('/project', 'src/index.js') // true if /project/src/index.js exists
 * fileExists('.', 'package.json') // true if ./package.json exists
 */
const fileExists = (dir, currentPath) => {
  try {
    if (!dir || !currentPath) {
      return false;
    }

    const fullPath = path.resolve(dir, currentPath);
    return fs.existsSync(fullPath);
  } catch (error) {
    // Handle any filesystem or path resolution errors
    console.warn(`Error checking file existence: ${error.message}`);
    return false;
  }
};

module.exports = { fileExists };
