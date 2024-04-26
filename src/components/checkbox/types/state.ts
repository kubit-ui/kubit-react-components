/**
 * Checkbox state types
 * @enum {string}
 */
export enum CheckboxStateType {
  DEFAULT_UNSELECTED = 'DEFAULT_UNSELECTED',
  DEFAULT_SELECTED = 'DEFAULT_SELECTED',
  DISABLED_UNSELECTED = 'DISABLED_UNSELECTED',
  DISABLED_SELECTED = 'DISABLED_SELECTED',
  ERROR_UNSELECTED = 'ERROR_UNSELECTED',
  ERROR_SELECTED = 'ERROR_SELECTED',
  // deprecated - This `error` state will be deprecated in the future
  ERROR = 'ERROR',
}
