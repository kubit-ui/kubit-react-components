import type { DeviceBreakpointsType } from '@/lib/types/breakpoints/breakpoints';

export interface useActiveBreakpointsReturn {
  isMobile: boolean;
  isTablet: boolean;
  isMobileOrTablet: boolean;
  isDesktop: boolean;
  isLargeDesktop: boolean;
  isOnlyDesktop: boolean;
  device: DeviceBreakpointsType;
}
