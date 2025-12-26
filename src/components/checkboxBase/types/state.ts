/**
 * CheckboxBase states
 */
export const CheckboxBaseState = {
  DISABLED_SELECTED: 'DISABLED_SELECTED',
  DISABLED_UNSELECTED: 'DISABLED_UNSELECTED',
  ERROR_SELECTED: 'ERROR_SELECTED',
  ERROR_UNSELECTED: 'ERROR_UNSELECTED',
  SELECTED: 'SELECTED',
  UNSELECTED: 'UNSELECTED',
} as const;

/**
 * Checkbox states as type
 */
export type CheckboxBaseStateType =
  (typeof CheckboxBaseState)[keyof typeof CheckboxBaseState];
