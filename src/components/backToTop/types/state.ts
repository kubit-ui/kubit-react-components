import { STATES } from '@/types/states';

/**
 * @description
 * enum for the action bottom sheet state
 * @enum BackToTopStateType
 * @property {string} DEFAULT
 * @property {string} HOVER
 * @property {string} PRESSED
 */
export enum BackToTopStateType {
  DEFAULT = STATES.DEFAULT,
  HOVER = STATES.HOVER,
  PRESSED = STATES.PRESSED,
}
