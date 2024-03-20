export const isNode = (value: Node | Window): value is Node => {
  return value instanceof window.Node;
};
export const getNodeName = (node: Node | Window): string => {
  return isNode(node) ? (node.nodeName || '').toLowerCase() : '';
};
