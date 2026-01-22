export const getSortedNodesNames = (imports) => imports
    .filter((i) => i.type === 'ImportDeclaration')
    .map((i) => i.source.value); // TODO: get from specifier
