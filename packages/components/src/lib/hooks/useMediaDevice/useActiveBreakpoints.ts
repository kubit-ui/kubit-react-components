import { DeviceBreakpointsTypeUtils } from '@/lib/utils/deviceBreakpointsTypeUtils/deviceBreakpointsTypeUtils';

import type { useActiveBreakpointsReturn } from './types/useActiveBreakpoints';

import { useMediaDevice } from './useMediaDevice';

/**
 * A custom hook that determines the active device breakpoint and provides
 * utility flags for common device types such as desktop, large desktop, mobile, and tablet.
 *
 * This hook relies on the `useMediaDevice` hook to determine the current device type
 * and maps it to the corresponding `DeviceBreakpointsType`.
 *
 * @returns {useActiveBreakpointsReturn} An object containing:
 * - `device`: The current device type as determined by `useMediaDevice`.
 * - `isDesktop`: A boolean indicating if the current device is a desktop.
 * - `isLargeDesktop`: A boolean indicating if the current device is a large desktop.
 * - `isMobile`: A boolean indicating if the current device is a mobile device.
 * - `isTablet`: A boolean indicating if the current device is a tablet.
 * - `isMobileOrTablet`: A boolean indicating if the current device is either mobile or tablet.
 *
 */
export const useActiveBreakpoints = (): useActiveBreakpointsReturn => {
  const device = useMediaDevice();

  return {
    device,
    isDesktop: DeviceBreakpointsTypeUtils.isDesktop(device),
    isLargeDesktop: DeviceBreakpointsTypeUtils.isLargeDesktop(device),
    isMobile: DeviceBreakpointsTypeUtils.isMobile(device),
    isMobileOrTablet: DeviceBreakpointsTypeUtils.isMobileOrTablet(device),
    isOnlyDesktop: DeviceBreakpointsTypeUtils.isOnlyDesktop(device),
    isTablet: DeviceBreakpointsTypeUtils.isTablet(device),
  };
};
