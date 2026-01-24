/**
 * Tooltip positioning utilities built on top of Floating UI.
 * @see https://floating-ui.com/docs/platform
 * @license MIT - Floating UI is licensed under MIT
 */
import {
  type Middleware,
  type MiddlewareData,
  type Strategy,
  computePosition as computePositionFloating,
} from '@floating-ui/dom';

import type { TooltipAlignType } from '../types/tooltipAlign';

export interface ComputePositionReturn {
  x: number;
  y: number;
  placement: TooltipAlignType;
  strategy: Strategy;
  middlewareData: MiddlewareData;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain positioning strategy.
 */
export const computePosition = async (
  reference: Element,
  floating: Element,
  config: {
    placement?: TooltipAlignType;
    strategy?: Strategy;
    middleware?: Array<Middleware>;
  },
): Promise<ComputePositionReturn> => {
  const { middleware = [], placement = 'top', strategy = 'fixed' } = config;
  const floatingPlacement = placement || 'top';

  // Call floating-ui's computePosition function
  const result = await computePositionFloating(
    reference as HTMLElement,
    floating as HTMLElement,
    {
      middleware,
      placement: floatingPlacement,
      strategy,
    },
  );

  // Convert resulting position from Placement to TooltipAlignType
  const tooltipPlacement = result.placement || 'top';

  return {
    middlewareData: result.middlewareData as MiddlewareData,
    placement: tooltipPlacement as TooltipAlignType,
    strategy: result.strategy,
    x: result.x,
    y: result.y,
  };
};
