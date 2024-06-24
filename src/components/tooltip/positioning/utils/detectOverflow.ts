import { DetectOverflowOptions, MiddlewareState, SideObject, VirtualElement } from '../types';
import { convertOffsetParentRelativeRectToViewportRelativeRect } from './convertOffsetParentRelativeRectToViewportRelativeRect';
import { getClippingRect } from './getClippinRect';
import { getOffsetParent } from './getOffsetParent';
import { getSideObjectFromPadding } from './getPaddingObject';
import { isElement } from './is.utils';
import { rectToClientRect } from './rectToClientRect';

export const detectOverflow = (
  state: MiddlewareState,
  options: Partial<DetectOverflowOptions> = {}
): SideObject => {
  const { x, y, rects, elements, strategy } = state;

  const {
    boundary = 'clippingAncestors',
    rootBoundary = 'viewport',
    elementContext = 'floating',
    altBoundary = false,
    padding = 0,
  } = options;

  const paddingObject = getSideObjectFromPadding(padding);
  const altContext = elementContext === 'floating' ? 'reference' : 'floating';
  const element = elements[altBoundary ? altContext : elementContext];

  const clippingClientRect = rectToClientRect(
    getClippingRect({
      element:
        isElement(element) ?? true
          ? (element as Element)
          : (element as VirtualElement).contextElement || window.document.documentElement,
      boundary,
      rootBoundary,
      strategy,
    })
  );

  const rect = elementContext === 'floating' ? { ...rects.floating, x, y } : rects.reference;

  const offsetParent = getOffsetParent(elements.floating as Element);

  const elementClientRect = rectToClientRect(
    convertOffsetParentRelativeRectToViewportRelativeRect({
      rect,
      offsetParent,
      strategy,
    })
  );

  return {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right,
  };
};
