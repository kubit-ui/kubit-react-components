import { POSITIONS } from '@/types/index';

/**
 * @description
 * Button icon position type
 * @enum {string}
 * @property {string} LEFT - Left position
 * @property {string} RIGHT - Right position
 * @example
 * <Button iconPosition={IconPositionType.LEFT} />
 * <Button iconPosition={IconPositionType.RIGHT} />
 */
export enum IconPositionType {
  LEFT = POSITIONS.LEFT,
  RIGHT = POSITIONS.RIGHT,
}
