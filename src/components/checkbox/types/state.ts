/**
 * Checkbox states as values
 */
export const CheckboxState = {
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
export type CheckboxStateType = (typeof CheckboxState)[keyof typeof CheckboxState];
