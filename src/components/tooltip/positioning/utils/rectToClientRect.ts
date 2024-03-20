import { ClientRectObject, Rect } from '../types';

export const rectToClientRect = (rect: Rect): ClientRectObject => {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height,
  };
};
