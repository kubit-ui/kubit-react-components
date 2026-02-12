import { useEffect, useMemo, useState } from 'react';

import { useActiveBreakpoints } from '@/lib/hooks/useMediaDevice/useActiveBreakpoints';
import { useRoveFocus } from '@/lib/hooks/useRoveFocus/useRoveFocus';

import { keyLeftMove } from '../../utils/keyMove/keLeftMove';
import { keyRightMove } from '../../utils/keyMove/keyRightMove';

interface ParamsType {
  tabsLength: number;
  numTabsInView: number;
  selectedTab?: string | number;
}

interface ReturnType {
  position: number;
  handleClickIcon: (isNextPosition: boolean) => void;
  focus: number;
  handleClickTab: (newFocus: number) => void;
  listEl: React.RefObject<HTMLElement | null>;
}

/**
 * Custom hook for managing tabs navigation and positioning.
 *
 * Handles tab scrolling, focus management, and keyboard navigation for tab components.
 * Includes responsive behavior and roving focus pattern.
 *
 * @param params - Configuration for tabs behavior
 * @param params.tabsLength - Total number of tabs
 * @param params.numTabsInView - Number of tabs visible at once
 * @param params.selectedTab - Currently selected tab index or id
 * @returns Object with position, focus state, and navigation handlers
 */
export const useTabs = ({
  numTabsInView,
  selectedTab,
  tabsLength,
}: ParamsType): ReturnType => {
  const { device, isMobile } = useActiveBreakpoints();
  const [position, setPosition] = useState(0);

  const roveFocusProps = useMemo(
    () => ({
      keyDownMove: 0,
      keyLeftMove: isMobile ? keyLeftMove(position, numTabsInView) : -1,
      keyRightMove: isMobile
        ? keyRightMove(tabsLength, position, numTabsInView)
        : 1,
      keyTabMove: null,
      keyUpMove: 0,
      size: tabsLength,
    }),
    [device, position, numTabsInView],
  );

  const [focus, setFocus, listEl] = useRoveFocus(roveFocusProps);

  useEffect(() => {
    if (listEl.current && isMobile) {
      const widthListOption = listEl?.current?.clientWidth / numTabsInView;
      const translate = widthListOption * position;
      listEl.current.style.transform = `translate(-${translate}px)`;
    }
    setFocus(position);
  }, [position, device]);

  const handlePositionUpdate = (positionVisible) =>
    setPosition((prevPos) => {
      let newPosition = prevPos;
      const positionVisibleInView =
        positionVisible >= prevPos && positionVisible < prevPos + numTabsInView;
      if (!positionVisibleInView) {
        newPosition = positionVisible - numTabsInView + 1;
        newPosition = newPosition < 0 ? 0 : newPosition;
      }
      return newPosition;
    });

  useEffect(() => {
    const positionVisible = selectedTab ?? 0;
    handlePositionUpdate(positionVisible);
  }, [selectedTab]);

  const handleClickIcon = (isNextPosition: boolean) => {
    setPosition(isNextPosition ? position + 1 : position - 1);
  };

  const handleClickTab = (newFocus: number) => {
    setFocus(newFocus);
  };

  return {
    focus,
    handleClickIcon,
    handleClickTab,
    listEl,
    position,
  };
};
