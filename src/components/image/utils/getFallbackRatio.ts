/**
 * Calculates the fallback ratio as a percentage.
 *
 * This utility function takes a numeric ratio (e.g., 0.5625 for 16:9) and converts it
 * into a percentage value that can be used for CSS styles, such as padding or aspect ratios.
 *
 * @param ratio - The numeric ratio to convert (e.g., 0.5625 for 16:9).
 * @returns The ratio converted to a percentage (e.g., 56.25 for 16:9).
 *
 * @example
 * ```typescript
 * const percentage = getFallbackRatio(0.5625); // 56.25
 * ```
 */
export const getFallbackRatio = (ratio: number): number => ratio * 100;
