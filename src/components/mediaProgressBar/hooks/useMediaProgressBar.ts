import React, { useCallback, useEffect, useRef, useState } from 'react';

import { isKeyEnterPressed, isKeySpacePressed } from '@/utils/keyboard/keyboard.utility';

interface IUseMediaProgressBar {
  playingExternal: boolean;
  circular: boolean;
  currentBar: number;
  barsNum: number;
  onBarChange?: (
    indexBar: number,
    event?: React.KeyboardEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
  onFinish?: (playingInternal: boolean) => void;
  onBarClick?: (index: number, event: React.MouseEvent<HTMLDivElement>) => void;
  onBarKeyDown?: (index: number, event: React.KeyboardEvent<HTMLDivElement>) => void;
}

type useMediaProgressBarReturnType = {
  playing: boolean;
  barRef: React.RefObject<HTMLDivElement>;
  progressBarRef: React.RefObject<HTMLDivElement>;
  handleBarEnd: () => void;
  handleClickBar: (index: number, event: React.MouseEvent<HTMLDivElement>) => void;
  handleKeyDownBar: (index: number, event: React.KeyboardEvent<HTMLDivElement>) => void;
};

export const useMediaProgressBar = ({
  playingExternal,
  circular,
  currentBar,
  barsNum,
  onBarChange,
  onFinish,
  onBarClick,
  onBarKeyDown,
}: IUseMediaProgressBar): useMediaProgressBarReturnType => {
  //playing prop is managed between the user and the component itself
  const [playing, setplaying] = useState<boolean>(playingExternal);

  const barRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  //We are checking if user has changed "playing" prop
  useEffect(() => {
    setplaying(playingExternal);
  }, [playingExternal]);

  //function called when a bar ends
  const handleBarEnd = useCallback(() => {
    if (circular || currentBar !== barsNum - 1) {
      onBarChange?.(currentBar + 1);
    } else {
      //If it is the last one
      const playingFinal = false;
      setplaying(playingFinal);
      onFinish?.(playingFinal);
    }
  }, [currentBar, barsNum, onBarChange]);

  const handleClickBar = (index: number, event: React.MouseEvent<HTMLDivElement>): void => {
    onBarChange?.(index, event);
    onBarClick?.(index, event);
  };

  const handleKeyDownBar = (index: number, event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (isKeySpacePressed(event.key) || isKeyEnterPressed(event.key)) {
      event.preventDefault();
      onBarChange?.(index, event);
      onBarKeyDown?.(index, event);
    }
  };

  useEffect(() => {
    //Call handleBarEnd when animation ends
    if (progressBarRef.current && playing) {
      progressBarRef.current.addEventListener('animationend', handleBarEnd);
    }
    return () => {
      progressBarRef.current?.removeEventListener('animationend', handleBarEnd);
    };
  }, [playing, handleBarEnd]);

  return {
    playing,
    barRef,
    progressBarRef,
    handleBarEnd,
    handleClickBar,
    handleKeyDownBar,
  };
};
