/**
 * Filters and processes custom attributes from a given object, returning only
 * attributes that are valid for HTML or other use cases.
 *
 * This function is particularly useful for extracting `aria-*`, `data-*`, or
 * other custom attributes from an object and ensuring they are properly formatted
 * for HTML rendering or other contexts.
 *
 * @param attributes - An optional object containing key-value pairs of attributes.
 *   - Keys can be strings representing attribute names.
 *   - Values can be strings, booleans, or any other type.
 * @param forHtml - A boolean flag indicating whether the values should be
 *   converted to strings for HTML compatibility.
 *   - `true` (default): Converts all values to strings.
 *   - `false`: Keeps the original value types.
 *
 * @returns A new object containing only the filtered attributes:
 *   - Includes attributes that start with `aria-` or `data-`.
 *   - Includes attributes that do not contain a hyphen (`-`).
 *   - Excludes all other attributes.
 *   - If `forHtml` is `true`, all values are converted to strings.
 *   - If `forHtml` is `false`, values retain their original types.
 */
export const pickCustomAttributes = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  attributes?: Record<string, string | boolean | any>,
  forHtml: boolean = true,
): Record<string, string | boolean> => {
  if (!attributes) {
    return {};
  }

  return Object.entries(attributes).reduce(
    (acc, [key, value]) => {
      if (
        (key.startsWith('aria-') || key.startsWith('data-')) &&
        value !== null &&
        value !== undefined
      ) {
        acc[key] = forHtml ? String(value) : value;
      }
      return acc;
    },
    {} as Record<string, string | boolean>,
  );
};
