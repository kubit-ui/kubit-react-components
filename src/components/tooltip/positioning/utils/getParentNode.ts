import { isShadowRoot } from './is.utils';
import { getNodeName } from './node';

// eslint-disable-next-line complexity
export const getParentNode = (node: Node): Node => {
  if (getNodeName(node) === 'html') {
    return node;
  }

  const result =
    // Step into the shadow DOM of the parent of a slotted node.
    (node as Element).assignedSlot ||
    // DOM Element detected.
    node.parentNode ||
    // ShadowRoot detected.
    (isShadowRoot(node) && (node as ShadowRoot).host) ||
    // Fallback.
    window.document.documentElement;

  return isShadowRoot(result) ? (result as ShadowRoot).host : result;
};
