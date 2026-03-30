import { type DeviceBreakpointsType } from '@/lib/types/breakpoints/breakpoints';
import { DeviceBreakpointsTypeUtils } from '@/lib/utils/deviceBreakpointsTypeUtils/deviceBreakpointsTypeUtils';

export const onlyDesktopSize = (
  device: DeviceBreakpointsType,
  value?: string,
): string | undefined => {
  return DeviceBreakpointsTypeUtils.isDesktop(device) ? value : undefined;
};
