/**
 * Calculates the next focus position when moving to the left in a tab navigation system.
 *
 * @param position - The starting position of the visible tabs.
 * @param numTabsInView - The number of tabs currently visible in the view.
 * @returns A function that takes the current focus position (`prevFocus`) and returns the new focus position.
 *
 * @example
 * ```typescript
 * const moveLeft = keyLeftMove(2, 5);
 * const newFocus = moveLeft(3); // Moves focus to the previous tab or wraps around if at the beginning.
 * ```
 */
export const keyLeftMove =
  (position: number, numTabsInView: number): ((prevFocus: number) => number) =>
  (prevFocus) => {
    if (prevFocus - 1 < 0 || prevFocus - 1 < position) {
      return position - 1 + numTabsInView;
    }
    return prevFocus - 1;
  };
