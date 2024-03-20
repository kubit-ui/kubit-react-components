import { TooltipAlignType } from '../../types';
import { Coords, ElementRects } from '../types';

export const computeCoordsFromPlacement = (
  { reference, floating }: ElementRects,
  placement: TooltipAlignType
): Coords => {
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;

  let coords;
  switch (placement) {
    case TooltipAlignType.TOP:
      coords = { x: commonX, y: reference.y - floating.height };
      break;
    case TooltipAlignType.BOTTOM:
      coords = { x: commonX, y: reference.y + reference.height };
      break;
    case TooltipAlignType.RIGHT:
      coords = { x: reference.x + reference.width, y: commonY };
      break;
    case TooltipAlignType.LEFT:
      coords = { x: reference.x - floating.width, y: commonY };
      break;
    default:
      coords = { x: reference.x, y: reference.y };
  }

  return coords;
};
