import { DeviceBreakpointsType } from '@/types/breakpoints';

import { useMediaDevice } from './useMediaDevice';

type useActiveBreakpointsReturn = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLargeDesktop: boolean;
  device: DeviceBreakpointsType;
};

export const useActiveBreakpoints = (): useActiveBreakpointsReturn => {
  const device = useMediaDevice();
  return {
    isMobile: device === DeviceBreakpointsType.MOBILE,
    isTablet: device === DeviceBreakpointsType.TABLET,
    isDesktop: device === DeviceBreakpointsType.DESKTOP,
    isLargeDesktop: device === DeviceBreakpointsType.LARGE_DESKTOP,
    device,
  };
};
