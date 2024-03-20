import { useEffect, useMemo, useState } from 'react';

import { DeviceBreakpointsType } from '@/types/breakpoints';
import { keyLeftMove, keyRightMove } from '@/utils';

import { useMediaDevice } from '../useMediaDevice/useMediaDevice';
import { useRoveFocus } from '../useRoveFocus/useRoveFocus';

type ParamsType = {
  tabsLength: number;
  numTabsInView: number;
  selectedTab?: string | number;
};

type ReturnType = {
  position: number;
  handleClickIcon: (isNextPosition: boolean) => void;
  focus: number;
  handleClickTab: (newFocus: number) => void;
  listEl: React.RefObject<HTMLElement>;
};

export const useTabs = ({ numTabsInView, tabsLength, selectedTab }: ParamsType): ReturnType => {
  const device = useMediaDevice();
  const [position, setPosition] = useState(0);

  const roveFocusProps = useMemo(
    () => ({
      size: tabsLength,
      keyDownMove: 0,
      keyUpMove: 0,
      keyRightMove:
        device === DeviceBreakpointsType.MOBILE
          ? keyRightMove(tabsLength, position, numTabsInView)
          : 1,
      keyLeftMove:
        device === DeviceBreakpointsType.MOBILE ? keyLeftMove(position, numTabsInView) : -1,
      keyTabMove: null,
    }),
    [device, position, numTabsInView]
  );

  const [focus, setFocus, listEl] = useRoveFocus(roveFocusProps);

  useEffect(() => {
    if (listEl.current && device === DeviceBreakpointsType.MOBILE) {
      const widthListOption = listEl?.current?.clientWidth / numTabsInView;
      const translate = widthListOption * position;
      listEl.current.style.transform = `translate(-${translate}px)`;
    }
    setFocus(position);
  }, [position, device]);

  const handlePositionUpdate = positionVisible =>
    setPosition(prevPos => {
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
    position,
    handleClickIcon,
    focus,
    handleClickTab,
    listEl,
  };
};
