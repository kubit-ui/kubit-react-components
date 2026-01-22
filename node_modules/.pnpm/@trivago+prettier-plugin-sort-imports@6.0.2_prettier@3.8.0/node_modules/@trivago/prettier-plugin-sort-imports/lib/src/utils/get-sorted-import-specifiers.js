import { naturalSort } from '../natural-sort/index.js';
/**
 * This function returns import nodes with alphabetically sorted module
 * specifiers
 * @param node Import declaration node
 */
export const getSortedImportSpecifiers = (node) => {
    node.specifiers.sort((a, b) => {
        if (a.type !== b.type) {
            return a.type === 'ImportDefaultSpecifier' ? -1 : 1;
        }
        return naturalSort(a.local.name, b.local.name);
    });
    return node;
};
