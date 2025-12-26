/* eslint-disable consistent-return */
import { useEffect } from 'react';

import type { useEscPressedParamsType } from './types/useEscPressed';

/**
 * Custom React hook to handle the `Escape` key press event on a specified element.
 *
 * @param disablePreventDefault - A boolean flag to disable the default behavior of the `Escape` key. Defaults to `false`.
 * @param disableStopPropagation - A boolean flag to disable stopping the propagation of the `Escape` key event. Defaults to `false`.
 * @param onEscPress - A callback function that is triggered when the `Escape` key is pressed.
 * @param ref - A React ref object pointing to the target element where the `Escape` key press is detected.
 *
 * @returns `void`
 *
 * @remarks
 * - This hook is useful for handling `Escape` key events, such as closing modals, dropdowns, or other interactive components.
 * - By default, the hook prevents the default behavior of the `Escape` key and stops its propagation. These behaviors can be disabled using the `disablePreventDefault` and `disableStopPropagation` flags.
 * - The hook attaches a `keydown` event listener to the specified element and cleans it up when the component unmounts or the dependencies change.
 */
export const useEscPressed = ({
  disablePreventDefault = false,
  disableStopPropagation = false,
  onEscPress,
  ref,
}: useEscPressedParamsType): void => {
  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (!disablePreventDefault) {
          event.preventDefault();
        }
        if (!disableStopPropagation) {
          event.stopPropagation();
        }
        onEscPress(event);
      }
    };
    ref.current.addEventListener('keydown', handleKeyDown);
    return () => {
      ref.current?.removeEventListener('keydown', handleKeyDown);
    };
  }, [onEscPress]);
};
