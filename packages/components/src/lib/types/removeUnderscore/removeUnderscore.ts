/**
 * Helper type to remove underscore prefix from property names and convert to lowercase
 * @example
 * // Input: { _headerButton: CssLibPropsType, _innerContent: CssLibPropsType }
 * // Output: { headerbutton: string, innercontent: string }
 */
export type RemoveUnderscorePrefix<T> = {
  [K in keyof T as K extends `_${infer Rest}`
    ? Lowercase<Rest>
    : K extends `$${string}`
      ? never
      : K]: string;
};
