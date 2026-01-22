import { parse as babelParser } from '@babel/parser';
import traverse from '@babel/traverse';
export const getImportNodes = (code, options) => {
    const importNodes = [];
    const ast = babelParser(code, {
        ...options,
        sourceType: 'module',
    });
    traverse(ast, {
        ImportDeclaration(path) {
            const tsModuleParent = path.findParent((p) => p.isTSModuleDeclaration());
            if (!tsModuleParent) {
                importNodes.push(path.node);
            }
        },
    });
    return importNodes;
};
