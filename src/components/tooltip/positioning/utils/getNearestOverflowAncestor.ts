import { getParentNode } from './getParentNode';
import { isHTMLElement, isLastTraversableNode, isOverflowElement } from './is.utils';

export const getNearestOverflowAncestor = (node: Node): HTMLElement => {
  const parentNode = getParentNode(node);

  if (isLastTraversableNode(parentNode)) {
    // `getParentNode` will never return a `Document` due to the fallback
    // check, so it's either the <html> or <body> element.
    return (parentNode as HTMLElement).ownerDocument.body;
  }

  if (isHTMLElement(parentNode) && isOverflowElement(parentNode as HTMLElement)) {
    return parentNode as HTMLElement;
  }

  return getNearestOverflowAncestor(parentNode);
};
