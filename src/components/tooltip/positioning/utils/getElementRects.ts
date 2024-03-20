import { Rect, Strategy } from '../types';
import { getCssDimensions } from './getCssDimensions';
import { getOffsetParent } from './getOffsetParent';
import { getRectRelativeToOffsetParent } from './getRectRelativeToOffsetParent';

export const getElementRects = ({
  reference,
  floating,
  strategy,
}: {
  reference: Element;
  floating: Element;
  strategy: Strategy;
}): { reference: Rect; floating: Rect } => {
  return {
    reference: getRectRelativeToOffsetParent(reference, getOffsetParent(floating), strategy),
    floating: { x: 0, y: 0, ...getCssDimensions(floating) },
  };
};
