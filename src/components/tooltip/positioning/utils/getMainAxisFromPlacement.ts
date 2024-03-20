import { TooltipAlignType } from '../../types';
import { Axis } from '../types';

export const getMainAxisFromPlacement = (placement: TooltipAlignType): Axis => {
  return [TooltipAlignType.TOP, TooltipAlignType.BOTTOM].includes(placement) ? 'x' : 'y';
};
