import { Rect, Strategy } from '../types';
import { getBoundingClientRect } from './getBoundingClientRect';
import { getElementScroll } from './getElementScroll';
import { isHTMLElement, isOverflowElement } from './is.utils';
import { getNodeName } from './node';

// eslint-disable-next-line complexity
export const convertOffsetParentRelativeRectToViewportRelativeRect = ({
  rect,
  offsetParent,
  strategy,
}: {
  rect: Rect;
  offsetParent: Element | Window;
  strategy: Strategy;
}): Rect => {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = window.document.documentElement;

  if (offsetParent === documentElement) {
    return rect;
  }

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
    }
  }

  return {
    width: rect.width,
    height: rect.height,
    x: rect.x - scroll.scrollLeft + offsets.x,
    y: rect.y - scroll.scrollTop + offsets.y,
  };
};
