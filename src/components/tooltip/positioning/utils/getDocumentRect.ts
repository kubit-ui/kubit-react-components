import { Rect } from '../types';
import { getElementScroll } from './getElementScroll';
import { getWindowScrollBarX } from './getWindowScrollBarX';

/**
 * Gets the entire size of the scrollable document area, even extending outside
 * of the `<html>` and `<body>` rect bounds if horizontally scrollable.
 */
export const getDocumentRect = (element: HTMLElement): Rect => {
  const html = window.document.documentElement;
  const scroll = getElementScroll(element);
  const body = element.ownerDocument.body;

  const width = Math.max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = Math.max(
    html.scrollHeight,
    html.clientHeight,
    body.scrollHeight,
    body.clientHeight
  );

  const x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;

  return {
    width,
    height,
    x,
    y,
  };
};
