/**
 * CSS File Validation Utility for Bernova
 *
 * Validates and handles existing CSS files during compilation.
 * Supports partial compilation by preserving existing sections
 * when generating foundation-only or component-only builds.
 */

const fs = require('fs').promises;
const path = require('path');
const { compilerTypeValid } = require('../../../../constants');
const {
  extractDocFragment,
} = require('../../../extractDocFragment/extractDocFragment.utils');

/**
 * Validates if CSS files exist and handles partial compilation preservation
 *
 * @param {Object} params - Validation parameters
 * @param {string} params.stylesDir - Directory where CSS files are stored
 * @param {string} params.compilerType - Type of compilation (full, foundationOnly, componentOnly)
 * @param {string} params.name - Base name for CSS files
 * @returns {Object} Directory paths and existing CSS data
 */
const validatePreviouslyExists = async ({ stylesDir, compilerType, name }) => {
  const dirs = {
    cssDir: path.resolve(stylesDir, `${name}.css`),
    cssMinifiedDir: path.resolve(stylesDir, `${name}.min.css`),
    oldData: '',
  };
  try {
    await fs.access(stylesDir);
    try {
      await fs.access(dirs.cssDir);
      if (!compilerType || compilerType === compilerTypeValid.full) {
        return dirs;
      }
      const oldCss = await fs.readFile(dirs.cssDir, 'utf8');
      const section = (() => {
        switch (compilerType) {
          case compilerTypeValid.foundationOnly:
            return 'COMPONENTS';
          case compilerTypeValid.componentOnly:
            return 'FOUNDATIONS';
          default:
            return '';
        }
      })();
      dirs.oldData = extractDocFragment({
        section: `=== BERNOVA ${section} ===`,
        endSection: `=== END ${section} ===`,
        doc: oldCss
      });
    } catch {
      return dirs;
    }
  } catch {
    await fs.mkdir(stylesDir, { recursive: true });
    return dirs;
  }

  return dirs;
};

module.exports = { validatePreviouslyExists };
