import { DeviceBreakpointsType } from '@/types';

export const onlyDesktopSize = (
  device: DeviceBreakpointsType,
  value?: string
): string | undefined => {
  return device === DeviceBreakpointsType.DESKTOP || device === DeviceBreakpointsType.LARGE_DESKTOP
    ? value
    : undefined;
};
