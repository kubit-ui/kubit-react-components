import {
  type DeviceBreakpointsType,
  DeviceBreakpointsTypeUtils,
} from '@/lib/types/breakpoints/breakpoints';

export const onlyDesktopSize = (
  device: DeviceBreakpointsType,
  value?: string,
): string | undefined => {
  return DeviceBreakpointsTypeUtils.isDesktopOrLargeDesktop(device)
    ? value
    : undefined;
};
