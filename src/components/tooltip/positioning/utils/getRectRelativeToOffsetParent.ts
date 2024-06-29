import { Rect, Strategy, VirtualElement } from '../types';
import { getBoundingClientRect } from './getBoundingClientRect';
import { getElementScroll } from './getElementScroll';
import { getWindowScrollBarX } from './getWindowScrollBarX';
import { isHTMLElement, isOverflowElement } from './is.utils';
import { getNodeName } from './node';

export const getRectRelativeToOffsetParent = (
  element: Element | VirtualElement,
  offsetParent: Element | Window,
  strategy: Strategy
): Rect => {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = window.document.documentElement;
  const rect = getBoundingClientRect(element, strategy === 'fixed', offsetParent);

  let scroll = { scrollLeft: 0, scrollTop: 0 };
  const offsets = { x: 0, y: 0 };

  if (isOffsetParentAnElement || (!isOffsetParentAnElement && strategy !== 'fixed')) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getElementScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent as HTMLElement);
      offsets.x = offsetRect.x + (offsetParent as HTMLElement).clientLeft;
      offsets.y = offsetRect.y + (offsetParent as HTMLElement).clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height,
  };
};
