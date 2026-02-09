import { renderHook } from '@testing-library/react';

import { DEVICE_BREAKPOINTS } from '@/lib/types/breakpoints/breakpoints';

import { useActiveBreakpoints } from '../useActiveBreakpoints';
// mock hooks
import { useMediaDevice } from '../useMediaDevice';

vi.mock('../useMediaDevice');

describe('useActiveBreakpoints', () => {
  const mockUseMediaDevice = vi.mocked(useMediaDevice);
  const baseReturn = {
    device: undefined,
    isDesktop: false,
    isLargeDesktop: false,
    isMobile: false,
    isMobileOrTablet: true,
    isOnlyDesktop: false,
    isTablet: false,
  };

  it('should return isDesktop as truthy value', () => {
    mockUseMediaDevice.mockReturnValue(DEVICE_BREAKPOINTS.DESKTOP);

    const { result } = renderHook(() => useActiveBreakpoints());

    expect(result.current).toEqual({
      ...baseReturn,
      device: DEVICE_BREAKPOINTS.DESKTOP,
      isDesktop: true,
      isMobileOrTablet: false,
      isOnlyDesktop: true,
    });
    expect(document.body).toHTMLValidate();
  });

  it('should return isMobile as truthy value', () => {
    mockUseMediaDevice.mockReturnValue(DEVICE_BREAKPOINTS.MOBILE);

    const { result } = renderHook(() => useActiveBreakpoints());

    expect(result.current).toEqual({
      ...baseReturn,
      device: DEVICE_BREAKPOINTS.MOBILE,
      isMobile: true,
    });
    expect(document.body).toHTMLValidate();
  });

  it('should return isTablet as truthy value', () => {
    mockUseMediaDevice.mockReturnValue(DEVICE_BREAKPOINTS.TABLET);

    const { result } = renderHook(() => useActiveBreakpoints());

    expect(result.current).toEqual({
      ...baseReturn,
      device: DEVICE_BREAKPOINTS.TABLET,
      isMobileOrTablet: true,
      isOnlyDesktop: false,
      isTablet: true,
    });
    expect(document.body).toHTMLValidate();
  });

  it('should return isLargeDesktop as truthy value', () => {
    mockUseMediaDevice.mockReturnValue(DEVICE_BREAKPOINTS.LARGE_DESKTOP);

    const { result } = renderHook(() => useActiveBreakpoints());

    expect(result.current).toEqual({
      ...baseReturn,
      device: DEVICE_BREAKPOINTS.LARGE_DESKTOP,
      isDesktop: true,
      isLargeDesktop: true,
      isMobileOrTablet: false,
      isOnlyDesktop: false,
    });
    expect(document.body).toHTMLValidate();
  });
});
