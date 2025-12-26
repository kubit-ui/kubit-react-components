export interface CssProperty {
  cssPropertyName: string;
  cssPropertyValue: string;
}

/**
 * Updates the CSS properties of a given HTML element.
 *
 * @param element - The target HTML element whose CSS properties will be updated.
 * @param cssProperties - An array of objects representing the CSS properties to be updated.
 * Each object should have the following structure:
 * - `cssPropertyName`: The name of the CSS property (e.g., "background-color", "font-size").
 * - `cssPropertyValue`: The value to set for the CSS property (e.g., "red", "16px").
 *
 * @returns `void`
 *
 * @remarks
 * - This function iterates over the provided `cssProperties` array and applies each property to the specified element using `element.style.setProperty`.
 * - If the `cssProperties` array is empty, the function exits without making any changes.
 * - This function is useful for dynamically updating the styles of an element in a programmatic way.
 *
 * @example
 * ```typescript
 * const element = document.getElementById('my-element');
 * const cssProperties = [
 *   { cssPropertyName: 'background-color', cssPropertyValue: 'blue' },
 *   { cssPropertyName: 'color', cssPropertyValue: 'white' },
 *   { cssPropertyName: 'font-size', cssPropertyValue: '16px' },
 * ];
 * changeCssProperty(element, cssProperties);
 * // The element's background color will be blue, text color white, and font size 16px.
 * ```
 */
export const changeCssProperty = (
  element: HTMLElement,
  cssProperties: CssProperty[],
): void => {
  if (cssProperties.length < 1) {
    return;
  }
  for (let i = 0; i < cssProperties.length; i++) {
    element.style.setProperty(
      cssProperties[i].cssPropertyName,
      cssProperties[i].cssPropertyValue,
    );
  }
};
