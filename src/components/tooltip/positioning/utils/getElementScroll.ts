import { ElementScroll } from '../types';
import { isHTMLElement } from './is.utils';

export const getElementScroll = (element: Element | Window): ElementScroll => {
  if (isHTMLElement(element)) {
    return {
      scrollLeft: (element as HTMLElement).scrollLeft,
      scrollTop: (element as HTMLElement).scrollTop,
    };
  }

  return {
    scrollLeft: window.scrollX,
    scrollTop: window.scrollY,
  };
};
