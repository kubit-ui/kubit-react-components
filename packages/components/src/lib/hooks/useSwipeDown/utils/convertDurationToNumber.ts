/**
 * Converts a duration value (string or number) into a numeric value in milliseconds.
 *
 * @param duration - The duration to convert. It can be a string (e.g., "500ms", "2s") or a number (already in milliseconds).
 * If no value is provided, it defaults to `0`.
 * @returns The numeric value of the duration in milliseconds.
 *
 * @remarks
 * - If the input is a number, it is returned as-is.
 * - If the input is a string:
 *   - It removes the "ms" or "s" suffix and converts the remaining value to a number.
 *   - If the string contains "s" (seconds) but not "ms" (milliseconds), the value is multiplied by 1000 to convert seconds to milliseconds.
 * - If the input is `undefined` or an empty value, the function returns `0`.
 *
 * @example
 * ```typescript
 * convertDurationToNumber(500); // Returns 500
 * convertDurationToNumber("500ms"); // Returns 500
 * convertDurationToNumber("2s"); // Returns 2000
 * convertDurationToNumber(); // Returns 0
 * ```
 */
export const convertDurationToNumber = (duration?: string | number): number => {
  if (!duration) {
    return 0;
  }
  if (typeof duration === 'number') {
    return duration;
  }

  const value = Number(duration.replace('ms', '').replace('s', ''));

  if (duration.includes('s') && !duration.includes('ms')) {
    return value * 1000;
  }

  return value;
};
