const path = require('path');
const fs = require('fs');

const indexFiles = ['index.js', 'index.jsx', 'index.ts', 'index.tsx'];

/**
 * Checks if a path points to an index file or a directory containing an index file.
 * @param {string} fullPath - The full path to check.
 * @returns {boolean} - Returns true if the path points to an index file or a directory containing an index file, otherwise false.
 */
function isIndexOrDirectoryWithIndex(fullPath) {
  try {
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      return indexFiles.some((indexFile) =>
        fs.existsSync(path.join(fullPath, indexFile))
      );
    } else if (stat.isFile()) {
      return indexFiles.includes(path.basename(fullPath));
    }
  } catch (err) {
    // If there's an error (e.g., file doesn't exist), return false
    return false;
  }
  return false;
}

/**
 * Resolves the full path of an import considering aliases.
 * @param {string} importPath - The import path.
 * @param {Object} aliases - The aliases configuration.
 * @param {string} contextFilename - The filename of the current context.
 * @returns {string} - The resolved full path.
 */
function resolveFullPath(importPath, aliases, contextFilename) {
  for (const [alias, aliasPath] of Object.entries(aliases)) {
    if (importPath.startsWith(alias)) {
      const relativePath = importPath.slice(alias.length);
      return path.resolve(aliasPath.replace(/\/\*$/, ''), `.${relativePath}`);
    }
  }
  return path.resolve(path.dirname(contextFilename), importPath);
}

/**
 * Checks if the import path ends with '/index'.
 * @param {string} importPath - The import path.
 * @returns {boolean} - Returns true if the import path ends with '/index', otherwise false.
 */
function endsWithIndex(importPath) {
  return (
    importPath.endsWith('/index') ||
    importPath.endsWith('/index.js') ||
    importPath.endsWith('/index.jsx') ||
    importPath.endsWith('/index.ts') ||
    importPath.endsWith('/index.tsx')
  );
}

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow imports from index files',
      category: 'Best Practices',
      recommended: false,
    },
    schema: [
      {
        type: 'object',
        properties: {
          aliases: {
            type: 'object',
            additionalProperties: { type: 'string' },
          },
          ignoreImports: {
            type: 'array',
            items: { type: 'string' },
          },
        },
        additionalProperties: false,
      },
    ],
  },
  /**
   * Creates the rule to disallow imports from index files.
   * @param {Object} context - The ESLint rule context.
   * @returns {Object} - The visitor object.
   */
  create: function (context) {
    const options = context.options[0] || {};
    const aliases = options.aliases || {};
    const ignoreImports = options.ignoreImports || [];

    return {
      /**
       * Visitor for ImportDeclaration nodes.
       * @param {Object} node - The AST node.
       */
      ImportDeclaration(node) {
        const importPath = node.source.value;

        // Ignore specified imports
        if (ignoreImports.includes(importPath)) {
          return;
        }

        const fullPath = resolveFullPath(
          importPath,
          aliases,
          context.getFilename()
        );

        // Check if the import path points to an index file, a directory containing an 'index' file, or ends with '/index'
        if (
          isIndexOrDirectoryWithIndex(fullPath) ||
          endsWithIndex(importPath)
        ) {
          context.report({
            node,
            message: 'Importing from index files is not allowed.',
          });
        }
      },
    };
  },
};
