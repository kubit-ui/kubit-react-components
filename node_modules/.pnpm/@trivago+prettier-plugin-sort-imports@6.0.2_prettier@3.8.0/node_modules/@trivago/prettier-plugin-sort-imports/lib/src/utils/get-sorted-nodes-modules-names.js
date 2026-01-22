export const getSortedNodesModulesNames = (modules) => modules
    .filter((m) => [
    'ImportSpecifier',
    'ImportDefaultSpecifier',
    'ImportNamespaceSpecifier',
].includes(m.type))
    .map((m) => m.local.name); // TODO: get from specifier
