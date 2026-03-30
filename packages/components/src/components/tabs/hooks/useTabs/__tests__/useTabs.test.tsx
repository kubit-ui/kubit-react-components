import { act } from '@testing-library/react';

import { renderHook } from '@/lib/tests/render/renderHook';
import { windowMatchMedia } from '@/lib/tests/windowMatchMedia/windowMatchMedia';

import { useTabs } from '../useTabs';

let tabsLength;
let numTabsInView;
let selectedTab;

describe('useTabs Hook', () => {
  beforeEach(() => {
    tabsLength = 5;
    numTabsInView = 3;
    selectedTab = 0;
  });

  it('calls handleClickIcon first next position and then previous position again', () => {
    const { result } = renderHook(() =>
      useTabs({ numTabsInView, selectedTab, tabsLength }),
    );

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
    const { result } = renderHook(() =>
      useTabs({ numTabsInView, selectedTab, tabsLength }),
    );

    act(() => {
      result.current.handleClickTab(2);
    });

    expect(result.current.focus).toBe(2);
  });
});
