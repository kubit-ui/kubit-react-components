import { DeviceBreakpointsType } from '@/types';

import { SliderTooltipType } from '../types';

export const isActive = (
  state: boolean,
  currentActivePoint: string,
  checkActivePoint: string
): boolean => {
  return state && currentActivePoint === checkActivePoint;
};

// Do not show tooltip on grabbing if desktops
export const isTooltipVisible = (
  tooltip: SliderTooltipType | undefined,
  pressed: boolean,
  device: DeviceBreakpointsType
): boolean => {
  return !!tooltip && (device !== DeviceBreakpointsType.DESKTOP || !pressed);
};
