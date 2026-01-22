import { parse as babelParser } from '@babel/parser';
import { extractASTNodes } from '../utils/extract-ast-nodes.js';
import { getAllCommentsFromNodes } from '../utils/get-all-comments-from-nodes.js';
import { getCodeFromAst } from '../utils/get-code-from-ast.js';
import { getExperimentalParserPlugins } from '../utils/get-experimental-parser-plugins.js';
import { getSortedNodes } from '../utils/get-sorted-nodes.js';
import { isSortImportsIgnored } from '../utils/is-sort-imports-ignored.js';
import { shouldSkipFile } from '../utils/should-skip-file.js';
export function preprocessor(code, options) {
    const { importOrderParserPlugins, importOrder, importOrderCaseInsensitive, importOrderSeparation, importOrderGroupNamespaceSpecifiers, importOrderSortSpecifiers, importOrderSortByLength, importOrderSideEffects, importOrderImportAttributesKeyword, importOrderExclude, filepath, } = options;
    // Check if the file should be skipped
    if (filepath &&
        shouldSkipFile(filepath, (importOrderExclude || []))) {
        return code;
    }
    const parserOptions = {
        sourceType: 'module',
        plugins: getExperimentalParserPlugins(importOrderParserPlugins),
        errorRecovery: true,
    };
    const ast = babelParser(code, parserOptions);
    if (isSortImportsIgnored(ast.program.body[0]?.leadingComments ?? []))
        return code;
    const { importNodes, injectIdx, } = extractASTNodes(ast);
    // short-circuit if there are no import declaration
    if (importNodes.length === 0)
        return code;
    if (isSortImportsIgnored(getAllCommentsFromNodes(importNodes)))
        return code;
    const allImports = getSortedNodes(importNodes, {
        importOrder,
        importOrderCaseInsensitive,
        importOrderSeparation,
        importOrderGroupNamespaceSpecifiers,
        importOrderSortSpecifiers,
        importOrderSortByLength,
        importOrderSideEffects,
    });
    return getCodeFromAst(allImports, code, injectIdx, {
        importOrderImportAttributesKeyword,
    });
}
