import { isValidElement } from 'react';

/**
 * Checks if the given value is a valid React node.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a valid React node, otherwise `false`.
 */
export const isReactNode = (value: unknown): boolean => isValidElement(value);
