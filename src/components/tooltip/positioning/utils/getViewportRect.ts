import { Rect, Strategy } from '../types';
import { isClientRectVisualViewportBased } from './is.utils';

export const getViewportRect = (strategy: Strategy): Rect => {
  const html = window.document.documentElement;
  const visualViewport = window.visualViewport;

  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;

    const visualViewportBased = isClientRectVisualViewportBased();

    if (!visualViewportBased || (visualViewportBased && strategy === 'fixed')) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width,
    height,
    x,
    y,
  };
};
