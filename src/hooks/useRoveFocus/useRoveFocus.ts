import { Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from 'react';

import {
  ARROW_DOWN,
  ARROW_LEFT,
  ARROW_RIGHT,
  ARROW_UP,
  PAGE_DOWN,
  PAGE_UP,
  TAB,
} from '@/constants';

type keyMoveType = number | ((previous: number, e?: KeyboardEvent) => number) | null;

export type UseRoveFocusProps = {
  size: number;
  keyDownMove?: keyMoveType;
  keyUpMove?: keyMoveType;
  keyRightMove?: keyMoveType;
  keyLeftMove?: keyMoveType;
  keyTabMove?: keyMoveType;
  keyPageDownMove?: keyMoveType;
  keyPageUpMove?: keyMoveType;
  currentFocusSelected?: number;
};

export const useRoveFocus = ({
  size,
  keyDownMove = 1,
  keyUpMove = -1,
  keyRightMove = 1,
  keyLeftMove = -1,
  keyTabMove = 1,
  keyPageDownMove = 1,
  keyPageUpMove = -1,
  currentFocusSelected = 0,
}: UseRoveFocusProps): [number, Dispatch<SetStateAction<number>>, React.RefObject<HTMLElement>] => {
  const [currentFocus, setCurrentFocus] = useState(currentFocusSelected);
  const listEl = useRef<HTMLElement>(null);

  const moveDown = (e: KeyboardEvent) => {
    if (keyDownMove !== null) {
      e.preventDefault();
      if (typeof keyDownMove === 'function') {
        setCurrentFocus(prevValue => keyDownMove(prevValue, e));
      } else {
        setCurrentFocus(previous => (previous === size - 1 ? 0 : previous + keyDownMove));
      }
    }
  };

  const moveUp = (e: KeyboardEvent) => {
    if (keyUpMove !== null) {
      e.preventDefault();
      if (typeof keyUpMove === 'function') {
        setCurrentFocus(prevValue => keyUpMove(prevValue, e));
      } else {
        setCurrentFocus(previous => (previous === 0 ? size - 1 : previous + keyUpMove));
      }
    }
  };
  const moveLeft = (e: KeyboardEvent) => {
    if (keyLeftMove !== null) {
      e.preventDefault();
      if (typeof keyLeftMove === 'function') {
        setCurrentFocus(prevValue => keyLeftMove(prevValue, e));
      } else {
        setCurrentFocus(previous => (previous === 0 ? size - 1 : previous + keyLeftMove));
      }
    }
  };
  const moveRight = (e: KeyboardEvent) => {
    if (keyRightMove !== null) {
      e.preventDefault();
      if (typeof keyRightMove === 'function') {
        setCurrentFocus(prevValue => keyRightMove(prevValue, e));
      } else {
        setCurrentFocus(previous => (previous === size - 1 ? 0 : previous + keyRightMove));
      }
    }
  };

  const moveTab = (e: KeyboardEvent) => {
    if (keyTabMove !== null) {
      if (typeof keyTabMove === 'function') {
        setCurrentFocus(prevValue => keyTabMove(prevValue, e));
      } else {
        setCurrentFocus(previous => {
          if (previous === size - 1) {
            return previous;
          }
          e.preventDefault();
          if (previous === 0) {
            return previous + keyTabMove + 1;
          }
          return previous + keyTabMove;
        });
      }
    }
  };

  const movePageDown = (e: KeyboardEvent) => {
    if (keyPageDownMove !== null) {
      e.preventDefault();
      if (typeof keyPageDownMove === 'function') {
        setCurrentFocus(prevValue => keyPageDownMove(prevValue, e));
      } else {
        setCurrentFocus(previous => previous + keyPageDownMove);
      }
    }
  };

  const movePageUp = (e: KeyboardEvent) => {
    if (keyPageUpMove !== null) {
      e.preventDefault();
      if (typeof keyPageUpMove === 'function') {
        setCurrentFocus(prevValue => keyPageUpMove(prevValue, e));
      } else {
        setCurrentFocus(previous => previous + keyPageUpMove);
      }
    }
  };

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case ARROW_DOWN.code:
          moveDown(e);
          break;
        case ARROW_UP.code:
          moveUp(e);
          break;
        case ARROW_LEFT.code:
          moveLeft(e);
          break;
        case ARROW_RIGHT.code:
          moveRight(e);
          break;
        case TAB.code:
          moveTab(e);
          break;
        case PAGE_DOWN.code:
          movePageDown(e);
          break;
        case PAGE_UP.code:
          movePageUp(e);
          break;
        default:
          (() => null)();
      }
    },
    [
      size,
      setCurrentFocus,
      keyDownMove,
      keyUpMove,
      keyLeftMove,
      keyRightMove,
      keyTabMove,
      keyPageUpMove,
      keyPageDownMove,
    ]
  );

  useEffect(() => {
    const element = listEl.current;
    if (element) {
      element.addEventListener('keydown', handleKeyDown, false);
    }
    return () => {
      element?.removeEventListener('keydown', handleKeyDown, false);
    };
  }, [handleKeyDown, listEl]);

  return [currentFocus, setCurrentFocus, listEl];
};
