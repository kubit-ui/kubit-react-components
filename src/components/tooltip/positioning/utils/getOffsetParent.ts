import { getParentNode } from './getParentNode';
import {
  isContainingBlock,
  isHTMLElement,
  isLastTraversableNode,
  isTableElement,
} from './is.utils';
import { getNodeName } from './node';

const getTrueOffsetParent = (element: Element) => {
  if (!isHTMLElement(element) || window.getComputedStyle(element).position === 'fixed') {
    return null;
  }
  return (element as HTMLElement).offsetParent;
};

/**
 * Manual search off the containing block
 */
const getContainingBlock = (element: Element) => {
  let currentNode: Node | null = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode as HTMLElement)) {
      return currentNode;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
};

/**
 * Get the closest ancestor positioned element
 */

export const getOffsetParent = (element: Element): Element | Window => {
  if (!isHTMLElement(element)) {
    return window;
  }

  let offsetParent = getTrueOffsetParent(element);
  // Do not take into account tables or static positions
  while (
    offsetParent &&
    isTableElement(offsetParent) &&
    window.getComputedStyle(offsetParent).position === 'static'
  ) {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  const oPIsHtml = offsetParent && getNodeName(offsetParent) === 'html';
  const oPIsStaticNoContainingBlockBody =
    offsetParent &&
    getNodeName(offsetParent) === 'body' &&
    window.getComputedStyle(offsetParent).position === 'static' &&
    !isContainingBlock(offsetParent);

  if (oPIsHtml && oPIsStaticNoContainingBlockBody) {
    return window;
  }

  return (
    (offsetParent as Element | null) || (getContainingBlock(element) as Element | null) || window
  );
};
