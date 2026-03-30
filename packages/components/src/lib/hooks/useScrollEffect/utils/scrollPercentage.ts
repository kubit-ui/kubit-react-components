/**
 * Calculates the scroll percentage of a given scrollable element.
 *
 * @param scrollableElement - The HTML element whose scroll percentage is to be calculated.
 * @param proportionLimit - A limit for the proportion adjustment. Defaults to `1`.
 * @returns The scroll percentage as a number between `0` and `100`.
 *
 * @remarks
 * - The function calculates how far the user has scrolled within the element as a percentage of the total scrollable area.
 * - If the `scrollHeight` of the element is greater than its `clientHeight`, the function computes the percentage based on the visible and hidden scroll areas.
 * - The `proportionLimit` parameter adjusts the scroll calculation to account for elements with varying scroll proportions.
 * - If the element's `scrollHeight` is less than or equal to its `clientHeight` (i.e., no scrolling is possible), the function returns `0`.
 *
 * @example
 * ```typescript
 * const element = document.getElementById('scrollable-div');
 * const percentage = scrollPercentage(element); // Returns the scroll percentage of the element.
 * console.log(`Scroll percentage: ${percentage}%`);
 * ```
 */
export const scrollPercentage = (
  scrollableElement: HTMLElement,
  proportionLimit = 1,
): number => {
  const MAX_PERCENTAGE = 100;
  const { clientHeight, scrollHeight, scrollTop } = scrollableElement;

  if (scrollHeight > clientHeight) {
    const hiddenScroll = scrollHeight - clientHeight;
    const proportion = scrollHeight / clientHeight;
    const adjustedScrollTop =
      proportion > proportionLimit
        ? scrollTop * proportion
        : scrollTop / (proportion * 2);
    return (adjustedScrollTop * MAX_PERCENTAGE) / hiddenScroll;
  }

  return 0;
};
