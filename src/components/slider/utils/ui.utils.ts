import {
  type DeviceBreakpointsType,
  DeviceBreakpointsTypeUtils,
} from '@/lib/types/breakpoints/breakpoints';

import type { SliderTooltipProps } from '../types/slider';

export const isActive = (
  state: boolean,
  currentActivePoint: string,
  checkActivePoint: string,
): boolean => {
  return state && currentActivePoint === checkActivePoint;
};

// Do not show tooltip on grabbing if desktops
export const isTooltipVisible = (
  tooltip: SliderTooltipProps | undefined,
  pressed: boolean,
  device: DeviceBreakpointsType,
): boolean => {
  return (
    !!tooltip && (!DeviceBreakpointsTypeUtils.isDesktop(device) || !pressed)
  );
};
