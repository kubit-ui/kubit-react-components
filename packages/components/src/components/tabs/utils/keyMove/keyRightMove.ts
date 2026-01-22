/**
 * Calculates the next focus position when moving to the right in a tab navigation system.
 *
 * @param lengthOptions - The total number of options (tabs) available.
 * @param position - The starting position of the visible tabs.
 * @param numTabsInView - The number of tabs currently visible in the view.
 * @returns A function that takes the current focus position (`prevFocus`) and returns the new focus position.
 *
 * @example
 * ```typescript
 * const moveRight = keyRightMove(10, 2, 5);
 * const newFocus = moveRight(4); // Moves focus to the next tab or wraps around if at the end.
 * ```
 */
export const keyRightMove =
  (
    lengthOptions: number,
    position: number,
    numTabsInView: number,
  ): ((prevFocus: number) => number) =>
  (prevFocus) => {
    if (
      prevFocus + 1 >= lengthOptions ||
      prevFocus + 1 === position + numTabsInView
    ) {
      return position;
    }
    return prevFocus + 1;
  };
