import { useState } from 'react';

const DEFAULT_PREFIX = '$component$';
const uniqueId = {};

const generateUniqueId = (prefix: string): number => {
  if (!uniqueId[prefix]) {
    uniqueId[prefix] = 0;
  }

  return uniqueId[prefix]++;
};

/**
 * Custom React hook to generate a unique ID for components.
 *
 * @param prefix - An optional string prefix to prepend to the generated ID. Defaults to `"$component$"`.
 *
 * @returns A unique string ID that combines the provided prefix (or default prefix) with a unique number.
 *
 * @remarks
 * - This hook is useful for generating unique IDs for components, especially when working with accessibility attributes (e.g., `aria-labelledby`, `aria-describedby`) or when dynamically creating elements that require unique identifiers.
 * - The IDs are generated using an internal counter that increments for each prefix, ensuring uniqueness within the application.
 * - The hook uses React's `useState` to ensure the ID remains stable across re-renders.
 *
 * @example
 * ```typescript
 * import { useId } from './useId';
 *
 * const MyComponent = () => {
 *   const id = useId('my-component-');
 *
 *   return (
 *     <div id={id}>
 *       <label htmlFor={`${id}-input`}>Enter text:</label>
 *       <input id={`${id}-input`} type="text" />
 *     </div>
 *   );
 * };
 * ```
 */
export const useId = (prefix?: string): string => {
  const [id] = useState<number>(() =>
    generateUniqueId(prefix || DEFAULT_PREFIX),
  );

  return `${prefix}${id}`;
};
