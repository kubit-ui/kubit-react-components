import { renderHook } from '@testing-library/react-hooks';

import { DeviceBreakpointsType } from '@/types/breakpoints';

import { useActiveBreakpoints } from '../useActiveBreakpoints';
// mock hooks
import { useMediaDevice } from '../useMediaDevice';

jest.mock('../useMediaDevice');

describe('useActiveBreakpoints', () => {
  const mockUseMediaDevice = jest.mocked(useMediaDevice);
  const baseReturn = {
    device: undefined,
    isDesktop: false,
    isLargeDesktop: false,
    isMobile: false,
    isTablet: false,
  };

  it('should return isDesktop as truthy value', () => {
    mockUseMediaDevice.mockReturnValue(DeviceBreakpointsType.DESKTOP);

    const { result } = renderHook(() => useActiveBreakpoints());

    expect(result.current).toEqual({
      ...baseReturn,
      isDesktop: true,
      device: DeviceBreakpointsType.DESKTOP,
    });
  });

  it('should return isMobile as truthy value', () => {
    mockUseMediaDevice.mockReturnValue(DeviceBreakpointsType.MOBILE);

    const { result } = renderHook(() => useActiveBreakpoints());

    expect(result.current).toEqual({
      ...baseReturn,
      isMobile: true,
      device: DeviceBreakpointsType.MOBILE,
    });
  });

  it('should return isTable as truthy value', () => {
    mockUseMediaDevice.mockReturnValue(DeviceBreakpointsType.TABLET);

    const { result } = renderHook(() => useActiveBreakpoints());

    expect(result.current).toEqual({
      ...baseReturn,
      isTablet: true,
      device: DeviceBreakpointsType.TABLET,
    });
  });

  it('should return isLargeDesktop as truthy value', () => {
    mockUseMediaDevice.mockReturnValue(DeviceBreakpointsType.LARGE_DESKTOP);

    const { result } = renderHook(() => useActiveBreakpoints());

    expect(result.current).toEqual({
      ...baseReturn,
      isLargeDesktop: true,
      device: DeviceBreakpointsType.LARGE_DESKTOP,
    });
  });
});
