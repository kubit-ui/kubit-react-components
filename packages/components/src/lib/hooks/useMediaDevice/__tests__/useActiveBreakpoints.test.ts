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
    isDesktopOrLargeDesktop: false,
    isLargeDesktop: false,
    isMobile: false,
    isMobileOrTablet: true,
    isTablet: false,
  };

  it('should return isDesktop as truthy value', () => {
    mockUseMediaDevice.mockReturnValue(DEVICE_BREAKPOINTS.DESKTOP);

    const { result } = renderHook(() => useActiveBreakpoints());

    expect(result.current).toEqual({
      ...baseReturn,
      device: DEVICE_BREAKPOINTS.DESKTOP,
      isDesktop: true,
      isDesktopOrLargeDesktop: true,
      isMobileOrTablet: false,
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
      isDesktopOrLargeDesktop: false,
      isMobileOrTablet: true,
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
      isDesktopOrLargeDesktop: true,
      isLargeDesktop: true,
      isMobileOrTablet: false,
    });
    expect(document.body).toHTMLValidate();
  });
});
