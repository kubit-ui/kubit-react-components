const { generateCSS } = require('./generateCss/generateCSS.utils.js');
const {
  readConfigData,
  readThemeData,
} = require('./readFile/readFile.utils.js');
const { writeDoc } = require('./writeDoc/writeDoc.utils.js');
const {
  generateBaseCss,
} = require('./generateBaseCss/generateBaseCss.utils.js');
const { copyLocalFonts } = require('./copyLocalFonts/copyLocalFonts.utils.js');
const {
  generateCssFonts,
} = require('./copyLocalFonts/generateCssFonts.utils.js');
const {
  generateProvider,
} = require('./generateProvider/generateProvider.utils.js');
//* compilers
const { compileThemes } = require('./compileThemes.js');
const { compileConfig } = require('./compileConfig.js');
//* typing
const { typingStyles } = require('./typingStyles');
//* doc handlers
const {
  extractDocFragment,
} = require('./extractDocFragment/extractDocFragment.utils.js');
const { fileExists } = require('./fileExists/fileExists.utils.js');
const {
  handlerForeignThemes,
} = require('./handlerForeignThemes/handlerForeignThemes.utils.js');
//* helpers
const { simplifyName } = require('./simplifyName/simplifyName.utils.js');
const {
  processMediaConfig,
} = require('./processMediaConfig/processMediaConfig.util.js');
const { buildRelativePath } = require('./buildRelativePath/buildRelativePath.utils.js');
//* register
const {
  generateThemeRegister,
} = require('./generateThemeRegister/generateThemeRegister.utils.js');
//* generate css string doc
const { generateCssDoc } = require('./generateCssDoc/generateCssDoc.util.js');

module.exports = {
  generateCSS,
  readConfigData,
  readThemeData,
  writeDoc,
  generateBaseCss,
  copyLocalFonts,
  generateCssFonts,
  generateProvider,
  compileThemes,
  compileConfig,
  typingStyles,
  extractDocFragment,
  handlerForeignThemes,
  fileExists,
  simplifyName,
  processMediaConfig,
  buildRelativePath,
  generateThemeRegister,
  generateCssDoc,
};
