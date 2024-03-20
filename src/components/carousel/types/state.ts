import { STATES } from '@/types/states';

/**
 * @description
 * enum for the carousel arrows state
 * @enum CarouselArrowStateType
 * @property {string} DEFAULT
 * @property {string} HOVER
 * @property {string} PRESSED
 */
export enum CarouselArrowStateType {
  DEFAULT = STATES.DEFAULT,
  HOVER = STATES.HOVER,
  PRESSED = STATES.PRESSED,
  DISABLED = STATES.DISABLED,
}
