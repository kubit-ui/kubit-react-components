/**
 * Checks if an HTML element has vertical scroll.
 *
 * This function determines whether the content of the given element
 * overflows vertically, meaning the element has a scrollable vertical area.
 *
 * @param {HTMLElement} element - The HTML element to check for vertical scroll.
 * @returns {boolean} - `true` if the element has vertical scroll, otherwise `false`.
 *
 * @example
 * const element = document.getElementById('content');
 * if (hasVerticalScroll(element)) {
 *   console.log('The element has vertical scroll.');
 * }
 */
export const hasVerticalScroll = (element: HTMLElement): boolean => {
  return element.scrollHeight > element.clientHeight;
};

/**
 * Checks if an HTML element has horizontal scroll.
 *
 * This function determines whether the content of the given element
 * overflows horizontally, meaning the element has a scrollable horizontal area.
 *
 * @param {HTMLElement} element - The HTML element to check for horizontal scroll.
 * @returns {boolean} - `true` if the element has horizontal scroll, otherwise `false`.
 *
 * @example
 * const element = document.getElementById('content');
 * if (hasHorizontalScroll(element)) {
 *   console.log('The element has horizontal scroll.');
 * }
 */
export const hasHorizontalScroll = (element: HTMLElement): boolean => {
  return element.scrollWidth > element.clientWidth;
};

/**
 * Checks if an HTML element has any scroll (vertical or horizontal).
 *
 * This function combines the checks for both vertical and horizontal scroll
 * to determine if the given element has any scrollable area.
 *
 * @param {HTMLElement} element - The HTML element to check for scroll.
 * @returns {boolean} - `true` if the element has either vertical or horizontal scroll, otherwise `false`.
 *
 * @example
 * const element = document.getElementById('content');
 * if (hasScroll(element)) {
 *   console.log('The element has scroll.');
 * }
 */
export const hasScroll = (element: HTMLElement): boolean => {
  return hasVerticalScroll(element) || hasHorizontalScroll(element);
};
