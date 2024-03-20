import { Dimensions } from '../types';
import { isHTMLElement } from './is.utils';

/**
 * Return the dimensions of the element, if fallback is true we should retrieve this information in another way
 */
// eslint-disable-next-line complexity
export const getCssDimensions = (element: Element): Dimensions & { fallback: boolean } => {
  const css = window.getComputedStyle(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? (element as HTMLElement).offsetWidth : width;
  const offsetHeight = hasOffset ? (element as HTMLElement).offsetHeight : height;
  const shouldFallback = Math.round(width) !== offsetWidth || Math.round(height) !== offsetHeight;

  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }

  return {
    width,
    height,
    fallback: shouldFallback,
  };
};
