import { Boundary, ClientRectObject, Rect, RootBoundary, Strategy } from '../types';
import { getBoundingClientRect } from './getBoundingClientRect';
import { getDocumentRect } from './getDocumentRect';
import { getOverflowAncestors } from './getOverflowAncestors';
import { getParentNode } from './getParentNode';
import { getViewportRect } from './getViewportRect';
import {
  isClientRectVisualViewportBased,
  isContainingBlock,
  isElement,
  isLastTraversableNode,
  isOverflowElement,
} from './is.utils';
import { getNodeName } from './node';
import { rectToClientRect } from './rectToClientRect';

/**
 * Get the client inner rect (with borders)
 */
export const getInnerBoundingClientRect = (element: Element, strategy: Strategy): Rect => {
  const clientRect = getBoundingClientRect(element, strategy === 'fixed');
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const width = element.clientWidth;
  const height = element.clientHeight;
  const x = left;
  const y = top;

  return {
    width,
    height,
    x,
    y,
  };
};

// eslint-disable-next-line complexity
export const getClientRectFromClippingAncestor = (
  clippingAncestor: Element | RootBoundary,
  strategy: Strategy
): ClientRectObject => {
  let rect: Rect;

  if (clippingAncestor === 'viewport') {
    rect = getViewportRect(strategy);
  } else if (clippingAncestor === 'document') {
    rect = getDocumentRect(window.document.documentElement);
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor as Element, strategy);
  } else {
    const mutableRect = { ...clippingAncestor } as Rect;
    if (isClientRectVisualViewportBased()) {
      mutableRect.x -= window.visualViewport?.offsetLeft || 0;
      mutableRect.y -= window.visualViewport?.offsetTop || 0;
    }
    rect = mutableRect;
  }

  return rectToClientRect(rect);
};

export const hasFixedPositionAncestor = (element: Element, stopNode: Node): boolean => {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return (
    window.getComputedStyle(parentNode as Element).position === 'fixed' ||
    hasFixedPositionAncestor(parentNode as Element, stopNode)
  );
};

/**
 * A "clipping ancestor" is an `overflow` element with the characteristic of
 * clipping (or hiding) child elements. This returns all clipping ancestors
 * of the given element up the tree.
 */
// eslint-disable-next-line complexity
export const getClippingElementAncestors = (element: Element): Array<Element> => {
  let result = getOverflowAncestors(element).filter(
    el => isElement(el) && getNodeName(el as Element) !== 'body'
  ) as Array<Element>;
  let currentContainingBlockComputedStyle: CSSStyleDeclaration | null = null;
  const elementIsFixed = window.getComputedStyle(element).position === 'fixed';
  let currentNode: Node | null = elementIsFixed ? getParentNode(element) : element;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = window.getComputedStyle(currentNode as Element);
    const currentNodeIsContaining = isContainingBlock(currentNode as Element);

    if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
      currentContainingBlockComputedStyle = null;
    }

    const shouldDropCurrentNode = elementIsFixed
      ? !currentNodeIsContaining && !currentContainingBlockComputedStyle
      : (!currentNodeIsContaining &&
          computedStyle.position === 'static' &&
          !!currentContainingBlockComputedStyle &&
          ['absolute', 'fixed'].includes(currentContainingBlockComputedStyle.position)) ||
        (isOverflowElement(currentNode as Element) &&
          !currentNodeIsContaining &&
          hasFixedPositionAncestor(element, currentNode));

    if (shouldDropCurrentNode) {
      // Drop non-containing blocks.
      result = result.filter(ancestor => ancestor !== currentNode);
    } else {
      // Record last containing block for next iteration.
      currentContainingBlockComputedStyle = computedStyle;
    }

    currentNode = getParentNode(currentNode);
  }

  return result;
};
/**
 * Gets the maximum area that the element is visible in due to any number of clipping ancestors.
 * A "clipping ancestor" is an `overflow` element with the characteristic of
 * clipping (or hiding) child elements. This returns all clipping ancestors
 * of the given element up the tree.
 */
export const getClippingRect = ({
  element,
  boundary,
  rootBoundary,
  strategy,
}: {
  element: Element;
  boundary: Boundary;
  rootBoundary: RootBoundary;
  strategy: Strategy;
}): Rect => {
  const elementClippingAncestors =
    boundary === 'clippingAncestors' ? getClippingElementAncestors(element) : [...boundary];
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];

  const clippingRect = clippingAncestors.reduce(
    (accRect: ClientRectObject, clippingAncestor) => {
      const rect = getClientRectFromClippingAncestor(clippingAncestor as Element, strategy);

      accRect.top = Math.max(rect.top, accRect.top);
      accRect.right = Math.min(rect.right, accRect.right);
      accRect.bottom = Math.min(rect.bottom, accRect.bottom);
      accRect.left = Math.max(rect.left, accRect.left);

      return accRect;
    },
    getClientRectFromClippingAncestor(firstClippingAncestor as Element, strategy)
  );

  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top,
  };
};
