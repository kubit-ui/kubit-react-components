import { renderHook } from '@testing-library/react';

import { useStylesContext } from '@/lib/provider/stylesProvider/stylesProvider';
import { DEVICE_BREAKPOINTS } from '@/lib/types/breakpoints/breakpoints';

import { useMediaDevice } from '../useMediaDevice';

vi.mock('@/lib/provider/stylesProvider/stylesProvider', () => ({
  useStylesContext: vi.fn(),
}));

describe('useMediaDevice', () => {
  const mediaQueries = {
    onlyDesktop: '(min-width: 1025px)',
    onlyMobile: '(max-width: 767px)',
    onlyTablet: '(min-width: 768px) and (max-width: 1024px)',
  };

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (useStylesContext as any).mockReturnValue({ mediaQueries });
  });

  const mockMatchMedia = (matches: boolean) => {
    return vi.fn().mockImplementation((query) => ({
      addEventListener: vi.fn(),
      matches,
      media: query,
      onchange: null,
      removeEventListener: vi.fn(),
    }));
  };

  it('should return MOBILE when onlyMobile media query matches', () => {
    window.matchMedia = mockMatchMedia(true);

    const { result } = renderHook(() => useMediaDevice());

    expect(result.current).toBe(DEVICE_BREAKPOINTS.MOBILE);
  });

  it('should return TABLET when onlyTablet media query matches', () => {
    window.matchMedia = mockMatchMedia(false);
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      addEventListener: vi.fn(),
      matches: query === mediaQueries.onlyTablet,
      media: query,
      onchange: null,
      removeEventListener: vi.fn(),
    }));

    const { result } = renderHook(() => useMediaDevice());

    expect(result.current).toBe(DEVICE_BREAKPOINTS.TABLET);
  });

  it('should return DESKTOP when onlyDesktop media query matches', () => {
    window.matchMedia = mockMatchMedia(false);
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      addEventListener: vi.fn(),
      matches: query === mediaQueries.onlyDesktop,
      media: query,
      onchange: null,
      removeEventListener: vi.fn(),
    }));

    const { result } = renderHook(() => useMediaDevice());

    expect(result.current).toBe(DEVICE_BREAKPOINTS.DESKTOP);
  });
});
