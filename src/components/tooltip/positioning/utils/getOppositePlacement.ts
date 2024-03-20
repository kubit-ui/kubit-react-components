import { TooltipAlignType } from '../../types';

const oppositeSideMap = {
  [TooltipAlignType.LEFT]: TooltipAlignType.RIGHT,
  [TooltipAlignType.RIGHT]: TooltipAlignType.LEFT,
  [TooltipAlignType.BOTTOM]: TooltipAlignType.TOP,
  [TooltipAlignType.TOP]: TooltipAlignType.BOTTOM,
};

export const getOppositePlacement = (placement: TooltipAlignType): TooltipAlignType => {
  return oppositeSideMap[placement];
};
