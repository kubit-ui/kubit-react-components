import { getBoundingClientRect } from './getBoundingClientRect';
import { getElementScroll } from './getElementScroll';

export const getWindowScrollBarX = (element: Element): number => {
  return (
    getBoundingClientRect(window.document.documentElement).left +
    getElementScroll(element).scrollLeft
  );
};
