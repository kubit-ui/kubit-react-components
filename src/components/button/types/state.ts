import { STATES } from '@/types/states';

/**
 * @description
 * Button state type
 * @enum {string}
 * @property {string} PRESSED - Pressed state
 * @property {string} LOADING - Loading state
 * @property {string} DEFAULT - Default state
 * @property {string} DISABLED - Disabled state
 * @property {string} HOVER - Hover state
 * @example
 * <Button state={ButtonStateType.PRESSED} />
 */
export enum ButtonStateType {
  PRESSED = STATES.PRESSED,
  LOADING = STATES.LOADING,
  DEFAULT = STATES.DEFAULT,
  DISABLED = STATES.DISABLED,
  HOVER = STATES.HOVER,
}
