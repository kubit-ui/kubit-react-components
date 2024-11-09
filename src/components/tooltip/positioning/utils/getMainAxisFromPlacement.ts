import { TooltipAlignType } from '../../types/tooltipAlign';
import { Axis } from '../types';

export const getMainAxisFromPlacement = (placement: TooltipAlignType): Axis => {
  return [TooltipAlignType.TOP, TooltipAlignType.BOTTOM].includes(placement) ? 'x' : 'y';
};
