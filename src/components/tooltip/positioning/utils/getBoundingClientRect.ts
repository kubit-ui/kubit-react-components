import { ClientRectObject, VirtualElement } from '../types';
import { isClientRectVisualViewportBased, isElement } from './is.utils';
import { rectToClientRect } from './rectToClientRect';
import { unwrapElement } from './unwrapElement';

export const getBoundingClientRect = (
  element: Element | VirtualElement,
  isFixedStrategy = false,
  offsetParent?: Element | Window
): ClientRectObject => {
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);

  const addVisualOffsets = isClientRectVisualViewportBased() && isFixedStrategy;

  let x = clientRect.left + (addVisualOffsets ? window.visualViewport?.offsetLeft || 0 : 0);
  let y = clientRect.top + (addVisualOffsets ? window.visualViewport?.offsetTop || 0 : 0);
  const width = clientRect.width;
  const height = clientRect.height;

  // If iFrame apply iframeScale and rect
  if (domElement) {
    const offsetWin = offsetParent && isElement(offsetParent) ? window : offsetParent;
    let currentIFrame = window.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== window) {
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = window.getComputedStyle(currentIFrame);

      iframeRect.x += currentIFrame.clientLeft + parseFloat(css.paddingLeft || '0');
      iframeRect.y += currentIFrame.clientTop + parseFloat(css.paddingTop || '0');

      x += iframeRect.x;
      y += iframeRect.y;

      currentIFrame = window.frameElement;
    }
  }

  return rectToClientRect({ width, height, x, y });
};
