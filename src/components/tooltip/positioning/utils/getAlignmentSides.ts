import { TooltipAlignType } from '../../types';
import { ElementRects } from '../types';
import { getLengthFromAxis } from './getLengthFromAxis';
import { getMainAxisFromPlacement } from './getMainAxisFromPlacement';
import { getOppositePlacement } from './getOppositePlacement';

export const getAlignmentSides = (
  placement: TooltipAlignType,
  rects: ElementRects
): { main: TooltipAlignType; cross: TooltipAlignType } => {
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);

  let mainAlignmentSide: TooltipAlignType =
    mainAxis === 'x' ? TooltipAlignType.LEFT : TooltipAlignType.TOP;

  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }

  return {
    main: mainAlignmentSide,
    cross: getOppositePlacement(mainAlignmentSide),
  };
};
