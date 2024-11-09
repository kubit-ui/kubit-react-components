import { Rect, VirtualElement } from '../types';
import { getNodeName } from './node';
import { getUAString } from './userAgent';

export const isHTMLElement = (value: Window | Node): boolean => {
  return value instanceof window.HTMLElement;
};

export const isElement = (
  value: Window | Node | VisualViewport | VirtualElement | Rect | object
): boolean => {
  return value instanceof window.Element;
};

export const isShadowRoot = (node: Node): boolean => {
  // Some browsers do not suppeort "ShadowRoot"
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }
  return node instanceof window.ShadowRoot || node instanceof ShadowRoot;
};

export const isTableElement = (element: Element): boolean => {
  return ['table', 'td', 'th'].includes(getNodeName(element));
};

export const isWebKit = (): boolean => {
  if (typeof CSS === 'undefined' || !CSS.supports) return false;
  return CSS.supports('-webkit-backdrop-filter', 'none');
};

// eslint-disable-next-line complexity
export const isContainingBlock = (element: Element): boolean => {
  const webkit = isWebKit();
  const css = getComputedStyle(element);

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  return (
    css.transform !== 'none' ||
    css.perspective !== 'none' ||
    (css.containerType ? css.containerType !== 'normal' : false) ||
    (!webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false)) ||
    (!webkit && (css.filter ? css.filter !== 'none' : false)) ||
    ['transform', 'perspective', 'filter'].some(value => (css.willChange || '').includes(value)) ||
    ['paint', 'layout', 'strict', 'content'].some(value => (css.contain || '').includes(value))
  );
};

export const isLastTraversableNode = (node: Node): boolean => {
  return ['html', 'body', '#document'].includes(getNodeName(node));
};

export const isOverflowElement = (element: Element): boolean => {
  const { overflow, overflowX, overflowY, display } = window.getComputedStyle(element);
  return (
    /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) &&
    !['inline', 'contents'].includes(display)
  );
};

/**
 * Determines whether or not `.getBoundingClientRect()` is affected by visual
 * viewport offsets. In Safari, the `x`/`y` offsets are values relative to the
 * visual viewport, while in other engines, they are values relative to the
 * layout viewport.
 */
export function isClientRectVisualViewportBased(): boolean {
  return /^((?!chrome|android).)*safari/i.test(getUAString());
}
