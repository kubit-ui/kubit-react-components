import { STATES } from '@/lib/types/states/states';

import type { SelectStateType } from '../../types/states';

/**
 * Utility function to determine the current state of a select item.
 *
 * Returns the appropriate select state based on the hover status. This is useful for
 * managing visual feedback or behavior in select components, such as highlighting an item
 * when hovered.
 *
 * @example
 * ```typescript
 * const state = getState({ hover: true }); // Returns STATES.HOVER
 * ```
 */
export function getState({ hover }: { hover: boolean }): SelectStateType {
  return hover ? STATES.HOVER : STATES.DEFAULT;
}
