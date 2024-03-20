import { TooltipAlignType } from '../../types';
import { Coords, Middleware, MiddlewareState } from '../types';
import { getMainAxisFromPlacement } from '../utils/getMainAxisFromPlacement';

export const convertValueToCoords = (state: MiddlewareState, value: number): Coords => {
  const { placement } = state;

  const isVertical = getMainAxisFromPlacement(placement) === 'x';
  const mainAxisMulti = [TooltipAlignType.LEFT, TooltipAlignType.TOP].includes(placement) ? -1 : 1;
  const crossAxisMulti = 1;

  const rawValue = value;

  const { mainAxis, crossAxis } = {
    mainAxis: rawValue,
    crossAxis: 0,
  };

  return isVertical
    ? { x: crossAxis * crossAxisMulti, y: mainAxis * mainAxisMulti }
    : { x: mainAxis * mainAxisMulti, y: crossAxis * crossAxisMulti };
};

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 */
export const offset = (value = 0): Middleware => ({
  name: 'offset',
  options: value,
  fn(state) {
    const { x, y } = state;
    const diffCoords = convertValueToCoords(state, value);

    return {
      x: x + diffCoords.x,
      y: y + diffCoords.y,
      data: diffCoords,
    };
  },
});
