import { Middleware, ShiftOptionsMiddleware } from '../types';
import { detectOverflow } from '../utils/detectOverflow';
import { getCrossAxis } from '../utils/getCrossAxis';
import { getMainAxisFromPlacement } from '../utils/getMainAxisFromPlacement';
import { within } from '../utils/within';

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 */
export const shift = (options: ShiftOptionsMiddleware = {}): Middleware => ({
  name: 'shift',
  options,

  fn(state) {
    const { x, y, placement } = state;
    const {
      mainAxis: checkMainAxis = true,
      crossAxis: checkCrossAxis = false,
      limiter = { fn: ({ x, y }) => ({ x, y }) },
      ...detectOverflowOptions
    } = options;

    const coords = { x, y };
    const overflow = detectOverflow(state, detectOverflowOptions);
    const mainAxis = getMainAxisFromPlacement(placement);
    const crossAxis = getCrossAxis(mainAxis);

    let mainAxisCoord = coords[mainAxis];
    let crossAxisCoord = coords[crossAxis];

    if (checkMainAxis) {
      const minSide = mainAxis === 'y' ? 'top' : 'left';
      const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
      const min = mainAxisCoord + overflow[minSide];
      const max = mainAxisCoord - overflow[maxSide];

      mainAxisCoord = within(min, mainAxisCoord, max);
    }

    if (checkCrossAxis) {
      const minSide = crossAxis === 'y' ? 'top' : 'left';
      const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
      const min = crossAxisCoord + overflow[minSide];
      const max = crossAxisCoord - overflow[maxSide];

      crossAxisCoord = within(min, crossAxisCoord, max);
    }

    const limitedCoords = limiter.fn({
      ...state,
      [mainAxis]: mainAxisCoord,
      [crossAxis]: crossAxisCoord,
    });

    return {
      ...limitedCoords,
      data: {
        x: limitedCoords.x - x,
        y: limitedCoords.y - y,
      },
    };
  },
});
