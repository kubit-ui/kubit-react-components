import { act, renderHook } from '@testing-library/react-hooks';

// mock hooks
import * as styledComponents from 'styled-components';

import { windowMatchMedia } from '@/tests/windowMatchMedia';

import { useTabs } from '../useTabs';

let tabsLength;
let numTabsInView;
let selectedTab;

describe('useTabs Hook', () => {
  beforeEach(() => {
    window.matchMedia = windowMatchMedia();

    tabsLength = 5;
    numTabsInView = 3;
    selectedTab = 0;

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

  it('calls handleClickIcon first next position and then previous position again', () => {
    const { result } = renderHook(() => useTabs({ tabsLength, numTabsInView, selectedTab }));

    act(() => {
      result.current.handleClickIcon(true);
    });

    expect(result.current.position).toBe(1);

    act(() => {
      result.current.handleClickIcon(false);
    });

    expect(result.current.position).toBe(0);
  });

  it('calls handleClickTab', () => {
    window.matchMedia = windowMatchMedia('onlyMobile');
    const { result } = renderHook(() => useTabs({ tabsLength, numTabsInView, selectedTab }));

    act(() => {
      result.current.handleClickTab(2);
    });

    expect(result.current.focus).toBe(2);
  });
});
