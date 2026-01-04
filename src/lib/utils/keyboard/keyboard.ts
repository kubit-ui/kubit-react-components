/**
 * Universal keyboard key checker that supports single keys and arrays of keys.
 *
 * This function provides a flexible way to check if a pressed key matches any of the target keys.
 * It handles both simple string comparisons and arrays of possible key values (e.g., for browser compatibility).
 *
 * @param pressedKey - The key value from the keyboard event (e.g., event.key)
 * @param targetKeys - One or more target keys to check against. Can be strings or arrays of strings.
 * @returns `true` if the pressed key matches any of the target keys, otherwise `false`
 *
 * @example
 * ```typescript
 * import { ENTER, SPACE, ESCAPE } from '@/lib/constants/keyboardKeys/keyboardKeys';
 *
 * // Check for a single key
 * isKeyPressed(event.key, ENTER.key) // true if Enter was pressed
 *
 * // Check for multiple keys (e.g., Enter OR Space)
 * isKeyPressed(event.key, ENTER.key, SPACE.key) // true if Enter or Space
 *
 * // Works with arrays (e.g., ESCAPE has multiple values for browser compatibility)
 * isKeyPressed(event.key, ...ESCAPE.key) // true if Escape or Esc
 *
 * // Combine single and multiple keys
 * isKeyPressed(event.key, ENTER.key, SPACE.key, ...ESCAPE.key)
 * ```
 */
export const isKeyPressed = (
  pressedKey: string,
  ...targetKeys: (string | string[])[]
): boolean => {
  return targetKeys.some((target) => {
    if (Array.isArray(target)) {
      return target.includes(pressedKey);
    }
    return pressedKey === target;
  });
};
