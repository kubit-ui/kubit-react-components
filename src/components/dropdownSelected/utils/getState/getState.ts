import { STATES } from '@/lib/types/states/states';

import type { DropdownSelectedStateType } from '../../types/states';

/**
 * Utility function to determine the current state of a dropdown item.
 *
 * Returns the appropriate dropdown state based on the hover status. This is useful for
 * managing visual feedback or behavior in dropdown components, such as highlighting an item
 * when hovered.
 *
 * @example
 * ```typescript
 * const state = getState({ hover: true }); // Returns STATES.HOVER
 * ```
 */
export function getState({
  hover,
}: {
  hover: boolean;
}): DropdownSelectedStateType {
  return hover ? STATES.HOVER : STATES.DEFAULT;
}
