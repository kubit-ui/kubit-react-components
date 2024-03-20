import { TooltipAlignType } from '../types';
import { Coords, Middleware, MiddlewareData, Strategy } from './types';
import { computeCoordsFromPlacement } from './utils/computeCoordsFromPlacement';
import { getElementRects } from './utils/getElementRects';

export interface ComputePositionReturn extends Coords {
  placement: TooltipAlignType;
  strategy: Strategy;
  middlewareData: MiddlewareData;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain positioning strategy.
 */
// eslint-disable-next-line complexity
export const computePosition = (
  reference: Element,
  floating: Element,
  config: { placement?: TooltipAlignType; strategy?: Strategy; middleware?: Middleware[] }
): ComputePositionReturn => {
  const { placement = TooltipAlignType.TOP, strategy = 'fixed', middleware = [] } = config;

  let rects = getElementRects({ reference, floating, strategy });
  let { x, y } = computeCoordsFromPlacement(rects, placement);
  let statefulPlacement = placement;
  let middlewareData: MiddlewareData = {};
  let resetCount = 0;

  for (let i = 0; i < middleware.length; i++) {
    const { name, fn } = middleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset,
    } = fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      elements: { reference, floating },
    });

    x = nextX ?? x;
    y = nextY ?? y;

    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data,
      },
    };

    if (reset && resetCount <= 50) {
      resetCount++;

      if (typeof reset === 'object') {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }

        if (reset.rects) {
          rects =
            reset.rects === true ? getElementRects({ reference, floating, strategy }) : reset.rects;
        }

        ({ x, y } = computeCoordsFromPlacement(rects, statefulPlacement));
      }

      i = -1;
      continue;
    }
  }

  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData,
  };
};
