/**
 * Utility function to conditionally join class names into a single string.
 *
 * @param classes - A list of class names or objects representing conditional class names.
 * Each item in the list can be:
 * - A `string` representing a class name.
 * - `undefined` or `null`, which will be ignored.
 * - A `boolean`, which will also be ignored.
 * - An `object` where keys are class names and values are booleans indicating whether the class should be included.
 * @returns A single string containing all valid class names, separated by spaces.
 *
 * @remarks
 * - This function is useful for dynamically constructing class names in React components or other frameworks.
 * - It filters out invalid or falsy values (`null`, `undefined`, `false`) and includes only valid class names.
 * - For objects, only the keys with `true` values are included in the resulting string.
 *
 * @example
 * ```typescript
 * const classes = classNames(
 *   'btn',
 *   'btn-primary',
 *   { 'btn-disabled': isDisabled, 'btn-large': isLarge },
 *   undefined,
 *   null,
 *   false
 * );
 * console.log(classes); // Output: "btn btn-primary btn-large" (if `isDisabled` is false and `isLarge` is true)
 * ```
 */
export const classNames = (
  ...classes: (
    | string
    | undefined
    | null
    | boolean
    | { [key: string]: boolean }
  )[]
): string => {
  return (
    Array.from(
      new Set(
        classes
          .flatMap((cls) => {
            if (typeof cls === 'string') {
              return cls.split(' ');
            }
            if (typeof cls === 'object' && cls !== null) {
              return Object.entries(cls)
                .filter(([, value]) => value)
                .map(([key]) => key);
            }
            return [];
          })
          .filter(Boolean),
      ),
    ).join(' ') || ''
  );
};
