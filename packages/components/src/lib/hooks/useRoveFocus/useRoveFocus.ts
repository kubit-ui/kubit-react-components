import {
  type Dispatch,
  type SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  ARROW_DOWN,
  ARROW_LEFT,
  ARROW_RIGHT,
  ARROW_UP,
  PAGE_DOWN,
  PAGE_UP,
  TAB,
} from '@/lib/constants/keyboardKeys/keyboardKeys';

import type { UseRoveFocusProps } from './types/useRoveFocus';

/**
 * A custom hook that provides keyboard navigation functionality for a list of focusable elements.
 * It allows users to navigate through the list using various keyboard keys such as arrow keys,
 * tab, and page navigation keys. The hook supports customizable movement logic for each key.
 *
 * @param {UseRoveFocusProps} props - The configuration object for the hook.
 * @param {number} [props.currentFocusSelected=0] - The index of the initially focused element.
 * @param {number | ((prevValue: number, e: KeyboardEvent) => number)} [props.keyDownMove=1] -
 *        The movement logic for the "Arrow Down" key. Can be a number or a custom function.
 * @param {number | ((prevValue: number, e: KeyboardEvent) => number)} [props.keyUpMove=-1] -
 *        The movement logic for the "Arrow Up" key. Can be a number or a custom function.
 * @param {number | ((prevValue: number, e: KeyboardEvent) => number)} [props.keyLeftMove=-1] -
 *        The movement logic for the "Arrow Left" key. Can be a number or a custom function.
 * @param {number | ((prevValue: number, e: KeyboardEvent) => number)} [props.keyRightMove=1] -
 *        The movement logic for the "Arrow Right" key. Can be a number or a custom function.
 * @param {number | ((prevValue: number, e: KeyboardEvent) => number)} [props.keyTabMove=1] -
 *        The movement logic for the "Tab" key. Can be a number or a custom function.
 * @param {number | ((prevValue: number, e: KeyboardEvent) => number)} [props.keyPageDownMove=1] -
 *        The movement logic for the "Page Down" key. Can be a number or a custom function.
 * @param {number | ((prevValue: number, e: KeyboardEvent) => number)} [props.keyPageUpMove=-1] -
 *        The movement logic for the "Page Up" key. Can be a number or a custom function.
 * @param {number} props.size - The total number of focusable elements in the list.
 *
 * @returns {[number, Dispatch<SetStateAction<number>>, React.RefObject<HTMLElement | null>]}
 *          A tuple containing:
 *          - `currentFocus`: The index of the currently focused element.
 *          - `setCurrentFocus`: A state setter function to manually update the focused index.
 *          - `listEl`: A React ref object to be attached to the container element of the list.
 *
 * @remarks
 * - The hook attaches a `keydown` event listener to the container element (via `listEl`).
 * - Ensure the container element is focusable (e.g., by adding `tabIndex={0}`).
 * - The movement logic for each key can be customized by providing a number or a function.
 * - If a function is provided for movement logic, it receives the previous focus index and the
 *   keyboard event as arguments.
 */
export const useRoveFocus = ({
  currentFocusSelected = 0,
  keyDownMove = 1,
  keyLeftMove = -1,
  keyPageDownMove = 1,
  keyPageUpMove = -1,
  keyRightMove = 1,
  keyTabMove = 1,
  keyUpMove = -1,
  size,
}: UseRoveFocusProps): [
  number,
  Dispatch<SetStateAction<number>>,
  React.RefObject<HTMLElement | null>,
] => {
  const [currentFocus, setCurrentFocus] = useState(currentFocusSelected);
  const listEl = useRef<HTMLElement | null>(null);

  const moveDown = (e: KeyboardEvent) => {
    if (keyDownMove !== null) {
      e.preventDefault();
      if (typeof keyDownMove === 'function') {
        setCurrentFocus((prevValue) => keyDownMove(prevValue, e));
      } else {
        setCurrentFocus((previous) =>
          previous === size - 1 ? 0 : previous + keyDownMove,
        );
      }
    }
  };

  const moveUp = (e: KeyboardEvent) => {
    if (keyUpMove !== null) {
      e.preventDefault();
      if (typeof keyUpMove === 'function') {
        setCurrentFocus((prevValue) => keyUpMove(prevValue, e));
      } else {
        setCurrentFocus((previous) =>
          previous === 0 ? size - 1 : previous + keyUpMove,
        );
      }
    }
  };
  const moveLeft = (e: KeyboardEvent) => {
    if (keyLeftMove !== null) {
      e.preventDefault();
      if (typeof keyLeftMove === 'function') {
        setCurrentFocus((prevValue) => keyLeftMove(prevValue, e));
      } else {
        setCurrentFocus((previous) =>
          previous === 0 ? size - 1 : previous + keyLeftMove,
        );
      }
    }
  };
  const moveRight = (e: KeyboardEvent) => {
    if (keyRightMove !== null) {
      e.preventDefault();
      if (typeof keyRightMove === 'function') {
        setCurrentFocus((prevValue) => keyRightMove(prevValue, e));
      } else {
        setCurrentFocus((previous) =>
          previous === size - 1 ? 0 : previous + keyRightMove,
        );
      }
    }
  };

  const moveTab = (e: KeyboardEvent) => {
    if (keyTabMove !== null) {
      if (typeof keyTabMove === 'function') {
        setCurrentFocus((prevValue) => keyTabMove(prevValue, e));
      } else {
        setCurrentFocus((previous) => {
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
        setCurrentFocus((prevValue) => keyPageDownMove(prevValue, e));
      } else {
        setCurrentFocus((previous) => previous + keyPageDownMove);
      }
    }
  };

  const movePageUp = (e: KeyboardEvent) => {
    if (keyPageUpMove !== null) {
      e.preventDefault();
      if (typeof keyPageUpMove === 'function') {
        setCurrentFocus((prevValue) => keyPageUpMove(prevValue, e));
      } else {
        setCurrentFocus((previous) => previous + keyPageUpMove);
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
    ],
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
