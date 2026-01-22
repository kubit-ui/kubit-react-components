const path = require('path');
const fs = require('fs').promises;

/**
 * Copies local font files to the output directory.
 *
 * @param {Array} localFonts - The local fonts configuration.
 * @param {string} outputDir - The output directory.
 */
const copyLocalFonts = async (localFonts, outputDir) => {
  if (!localFonts || localFonts.length === 0) {
    console.log('No local fonts to copy.');
    return;
  }
  const { default: ora } = await import('ora');
  const spinner = ora('Copying local fonts...').start();

  try {
    for (const font of localFonts) {
      for (const weight in font.files) {
        const srcPath = path.resolve(font.files[weight]);
        const destDir = path.resolve(outputDir, 'fonts');
        const destPath = path.resolve(
          destDir,
          path.basename(font.files[weight])
        );

        // Ensure the destination directory exists
        await fs.mkdir(destDir, { recursive: true });

        // Copy the font file
        await fs.copyFile(srcPath, destPath);
        spinner.succeed(`Copied ${srcPath} to ${destPath}`);
      }
    }
  } catch (error) {
    spinner.fail('Failed to copy local fonts.');
    console.error(error);
  }
};

module.exports = { copyLocalFonts };
