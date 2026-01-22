import traverseModule from '@babel/traverse';
const traverse = traverseModule.default || traverseModule;
export function extractASTNodes(ast) {
    const importNodes = [];
    let injectIdx = 0;
    traverse(ast, {
        Program(path) {
            /**
             * Imports will be injected before the first node of the body and
             * its comments, skipping InterpreterDirective and Directive nodes.
             * If the body is empty, default to 0, there will be no imports to
             * inject anyway.
             */
            for (const node of path.node.body) {
                injectIdx = node.leadingComments?.[0]?.start ?? node.start ?? 0;
                break;
            }
        },
        ImportDeclaration(path) {
            const tsModuleParent = path.findParent((p) => p.isTSModuleDeclaration());
            if (!tsModuleParent) {
                importNodes.push(path.node);
            }
        },
    });
    return { importNodes, injectIdx };
}
