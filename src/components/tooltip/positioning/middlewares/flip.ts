import { FlipOptionsMiddleware, Middleware } from '../types';
import { detectOverflow } from '../utils/detectOverflow';
import { getAlignmentSides } from '../utils/getAlignmentSides';
import { getOppositePlacement } from '../utils/getOppositePlacement';

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
export const flip = (options: FlipOptionsMiddleware = {}): Middleware => ({
  name: 'flip',
  options,

  fn(state) {
    const { placement, middlewareData, rects, initialPlacement } = state;

    const {
      mainAxis: checkMainAxis = true,
      crossAxis: checkCrossAxis = true,
      fallbackPlacements: specifiedFallbackPlacements,
      fallbackStrategy = 'bestFit',
      ...detectOverflowOptions
    } = options;

    const fallbackPlacements = specifiedFallbackPlacements || [
      getOppositePlacement(initialPlacement),
    ];

    const placements = [initialPlacement, ...fallbackPlacements];

    const overflow = detectOverflow(state, detectOverflowOptions);

    const overflows: number[] = [];
    let overflowsData = middlewareData.flip?.overflows || [];

    if (checkMainAxis) {
      overflows.push(overflow[placement]);
    }

    if (checkCrossAxis) {
      const { main, cross } = getAlignmentSides(placement, rects);
      overflows.push(overflow[main], overflow[cross]);
    }

    overflowsData = [...overflowsData, { placement, overflows }];

    // One or more sides is overflowing.
    if (!overflows.every(side => side <= 0)) {
      const nextIndex = (middlewareData.flip?.index || 0) + 1;
      const nextPlacement = placements[nextIndex];

      if (nextPlacement) {
        // Try next placement and re-run the lifecycle.
        return {
          data: {
            index: nextIndex,
            overflows: overflowsData,
          },
          reset: {
            placement: nextPlacement,
          },
        };
      }

      // First, find the candidates that fit on the mainAxis side of overflow,
      // then find the placement that fits the best on the main crossAxis side.
      let resetPlacement = overflowsData
        .filter(d => d.overflows[0] <= 0)
        .sort((a, b) => a.overflows[1] - b.overflows[1])[0]?.placement;

      // Otherwise fallback.
      if (!resetPlacement) {
        switch (fallbackStrategy) {
          case 'bestFit': {
            const placement = overflowsData
              .map(
                d =>
                  [
                    d.placement,
                    d.overflows
                      .filter(overflow => overflow > 0)
                      .reduce((acc, overflow) => acc + overflow, 0),
                  ] as const
              )
              .sort((a, b) => a[1] - b[1])[0]?.[0];
            if (placement) {
              resetPlacement = placement;
            }
            break;
          }
          case 'initialPlacement':
            resetPlacement = initialPlacement;
            break;
          default:
        }
      }

      if (placement !== resetPlacement) {
        return {
          reset: {
            placement: resetPlacement,
          },
        };
      }
    }

    return {};
  },
});
