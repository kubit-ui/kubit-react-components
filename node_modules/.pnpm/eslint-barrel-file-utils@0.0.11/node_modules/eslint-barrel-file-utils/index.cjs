const {
  countModuleGraphSizeRs: count_module_graph_size_rs,
  isBarrelFileRs: is_barrel_file,
  resolveRs: resolve_rs
} = require('./rs.cjs');
const { builtinModules } = require("module");

/**
 * @param {string} importer - the file that is importing the module
 * @param {string} importee - the module being imported
 * @param {{
*  mainFields?: string[],
*  exportConditions?: string[],
*  extensions?: string[],
* }} [options]
* @returns {string} the resolved path to the module
*/
function resolve(importer, importee, options) {
 const mainFields = options?.mainFields || ["module", "browser", "main"];
 const exportConditions = options?.exportConditions || ["node", "import"];
 const extensions = options?.extensions || [".js", ".ts", ".tsx", ".jsx", ".json", ".node"];

 return resolve_rs(importer, importee, exportConditions, mainFields, extensions);
}

/**
* @param {string[]} entrypoints 
* @param {{
*  basePath?: string,
*  exportConditions?: string[],
*  mainFields?: string[],
*  extensions?: string[],
* }} [options]
* @returns {number}
*/
function count_module_graph_size(entrypoints, options = {}) {
 const {
   basePath = process.cwd(),
   exportConditions = ["node", "import"],
   mainFields = ["module", "browser", "main"],
   extensions = [".js", ".ts", ".tsx", ".jsx", ".json", ".node"],
   tsconfig,
 } = options;

 const tsConfigFile = tsconfig?.configFile;
 const tsReferences = tsconfig?.references;
 
 // alias is expected to be a vector
 let alias = options.alias ?? [];
 if (options.alias && typeof options.alias === "object") {
    alias = Object.entries(options.alias);
 }
 
 const processedEntrypoints = (typeof entrypoints === "string" ? [entrypoints] : entrypoints);
 const result = count_module_graph_size_rs(
   processedEntrypoints, 
   basePath, 
   exportConditions, 
   mainFields,
   extensions,
   builtinModules,
   tsConfigFile,
   tsReferences,
   alias
 );
 return result;
}

module.exports = {
  resolve,
  count_module_graph_size,
  is_barrel_file
}
