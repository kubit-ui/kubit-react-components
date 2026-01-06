import {
  type DeviceBreakpointsType,
  DeviceBreakpointsTypeUtils,
} from '@/lib/types/breakpoints/breakpoints';

import type { SliderTooltipProps } from '../types/slider';

/**
 * Checks if a slider control point is currently active.
 *
 * @param state - Whether the state is active
 * @param currentActivePoint - The currently active point identifier
 * @param checkActivePoint - The point identifier to check
 * @returns True if the point is active
 */
export const isActive = (
  state: boolean,
  currentActivePoint: string,
  checkActivePoint: string,
): boolean => {
  return state && currentActivePoint === checkActivePoint;
};

/**
 * Determines if the slider tooltip should be visible.
 * Hides tooltip on desktop during drag/press.
 *
 * @param tooltip - Tooltip configuration
 * @param pressed - Whether the thumb is being pressed
 * @param device - Current device type
 * @returns True if tooltip should be shown
 */
export const isTooltipVisible = (
  tooltip: SliderTooltipProps | undefined,
  pressed: boolean,
  device: DeviceBreakpointsType,
): boolean => {
  return (
    !!tooltip && (!DeviceBreakpointsTypeUtils.isDesktop(device) || !pressed)
  );
};
