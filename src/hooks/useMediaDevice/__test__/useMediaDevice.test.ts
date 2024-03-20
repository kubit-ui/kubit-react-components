import { renderHook } from '@testing-library/react-hooks';

// mock hooks
import * as styledComponents from 'styled-components';

import { windowMatchMedia } from '@/tests/windowMatchMedia/';
import { DeviceBreakpointsType } from '@/types/index';

import { useMediaDevice } from '../useMediaDevice';

describe('useMediaDevice', () => {
  beforeEach(() => {
    const useThemeHock = () => ({
      MEDIA_QUERIES: {
        onlyDesktop: 'onlyDesktop',
        tabletAndDesktop: 'tabletAndDesktop',
        onlyTablet: 'onlyTablet',
        mobileAndTablet: 'mobileAndTablet',
        onlyMobile: 'onlyMobile',
        matchMedia: {
          onlyDesktop: 'onlyDesktop',
          onlyMobile: 'onlyMobile',
          onlyTablet: 'onlyTablet',
        },
      },
      SPACINGS: {},
    });
    jest.spyOn(styledComponents, 'useTheme').mockImplementation(useThemeHock);
  });

  it('useMediaDevice - default match is DESKTOP', () => {
    window.matchMedia = windowMatchMedia('onlyDesktop');

    const { result } = renderHook(() => useMediaDevice());

    expect(result.current).toBe(DeviceBreakpointsType.DESKTOP);
  });
  it('useMediaDevice - can match MOBILE', () => {
    window.matchMedia = windowMatchMedia('onlyMobile');
    const { result } = renderHook(() => useMediaDevice());

    expect(result.current).toBe(DeviceBreakpointsType.MOBILE);
  });
  it('useMediaDevice - can match TABLET', () => {
    window.matchMedia = windowMatchMedia('onlyTablet');
    const { result } = renderHook(() => useMediaDevice());

    expect(result.current).toBe(DeviceBreakpointsType.TABLET);
  });
});
