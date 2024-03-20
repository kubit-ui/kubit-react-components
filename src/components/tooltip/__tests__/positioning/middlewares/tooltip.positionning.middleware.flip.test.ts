import { flip } from '@/components/tooltip/positioning/middlewares/flip';
import { MiddlewareState } from '@/components/tooltip/positioning/types';
import * as detectOverFlowUtils from '@/components/tooltip/positioning/utils/detectOverflow';
import { TooltipAlignType } from '@/components/tooltip/types';

describe('flip middleware', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });
  it('returns empty object when no overflow', () => {
    const state: MiddlewareState = {
      placement: TooltipAlignType.TOP,
      initialPlacement: TooltipAlignType.TOP,
      strategy: 'absolute',
      middlewareData: {
        flip: { overflows: [{ placement: TooltipAlignType.TOP, overflows: [0, 0] }] },
      },
      elements: { reference: document.createElement('div'), floating: {} },
      rects: {
        reference: { width: 10, height: 10, x: 100, y: 100 },
        floating: { width: 10, height: 10, x: 50, y: 50 },
      },
      x: 0,
      y: 0,
    };
    jest.spyOn(detectOverFlowUtils, 'detectOverflow').mockReturnValue({
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    });
    const result = flip().fn(state);

    expect(result).toEqual({});
  });

  it('returns fallback placement when overflow fails', () => {
    const state: MiddlewareState = {
      placement: TooltipAlignType.TOP,
      initialPlacement: TooltipAlignType.TOP,
      strategy: 'absolute',
      middlewareData: {
        flip: { overflows: [] },
      },
      elements: { reference: document.createElement('div'), floating: {} },
      rects: {
        reference: { width: 10, height: 10, x: 0, y: 0 },
        floating: { width: 10, height: 10, x: 0, y: 0 },
      },
      x: 0,
      y: 0,
    };

    jest.spyOn(detectOverFlowUtils, 'detectOverflow').mockReturnValue({
      top: 50,
      right: 0,
      bottom: 0,
      left: 0,
    });

    const result = flip({ fallbackPlacements: [TooltipAlignType.RIGHT] }).fn(state);

    expect((result.reset as unknown as { placement: TooltipAlignType })?.placement).toEqual(
      TooltipAlignType.RIGHT
    );
  });

  it('Return those placements that does not overflow (middlewareData.flip.overflows)', () => {
    const state: MiddlewareState = {
      placement: TooltipAlignType.LEFT,
      initialPlacement: TooltipAlignType.LEFT,
      strategy: 'absolute',
      middlewareData: {
        flip: {
          index: 1,
          overflows: [{ placement: TooltipAlignType.RIGHT, overflows: [0, 10] }],
        },
      },
      elements: { reference: document.createElement('div'), floating: {} },
      rects: {
        reference: { width: 10, height: 10, x: 100, y: 100 },
        floating: { width: 10, height: 10, x: 0, y: 0 },
      },
      x: 0,
      y: 0,
    };

    jest.spyOn(detectOverFlowUtils, 'detectOverflow').mockReturnValue({
      top: 50,
      right: 50,
      bottom: 50,
      left: 0,
    });

    const result = flip({ fallbackStrategy: 'bestFit' }).fn(state);

    expect((result.reset as unknown as { placement: TooltipAlignType })?.placement).toEqual(
      TooltipAlignType.RIGHT
    );
  });

  it('returns initialPlacement when strategy is initial placement, overflows and !resetPlacement flound', () => {
    const state: MiddlewareState = {
      placement: TooltipAlignType.BOTTOM,
      initialPlacement: TooltipAlignType.TOP,
      strategy: 'absolute',
      middlewareData: {
        flip: { index: 1, overflows: [{ placement: TooltipAlignType.BOTTOM, overflows: [10, 0] }] },
      },
      elements: { reference: document.createElement('div'), floating: {} },
      rects: {
        reference: { width: 10, height: 10, x: 0, y: 0 },
        floating: { width: 10, height: 10, x: 0, y: 0 },
      },
      x: 0,
      y: 0,
    };

    jest.spyOn(detectOverFlowUtils, 'detectOverflow').mockReturnValue({
      top: 50,
      right: 50,
      bottom: 50,
      left: 50,
    });

    const result = flip({ fallbackStrategy: 'initialPlacement' }).fn(state);

    expect((result.reset as unknown as { placement: TooltipAlignType })?.placement).toEqual(
      TooltipAlignType.TOP
    );
  });

  it('search the bestFit when bestFit when strategy, overflows and !resetPlacement flound', () => {
    const state: MiddlewareState = {
      placement: TooltipAlignType.LEFT,
      initialPlacement: TooltipAlignType.LEFT,
      strategy: 'absolute',
      middlewareData: {
        flip: { index: 1, overflows: [{ placement: TooltipAlignType.BOTTOM, overflows: [10, 0] }] },
      },
      elements: { reference: document.createElement('div'), floating: {} },
      rects: {
        reference: { width: 10, height: 10, x: 0, y: 0 },
        floating: { width: 10, height: 10, x: 0, y: 0 },
      },
      x: 0,
      y: 0,
    };

    jest.spyOn(detectOverFlowUtils, 'detectOverflow').mockReturnValue({
      top: 50,
      right: 0,
      bottom: 50,
      left: 50,
    });

    const result = flip({ fallbackStrategy: 'bestFit' }).fn(state);

    expect((result.reset as unknown as { placement: TooltipAlignType })?.placement).toEqual(
      TooltipAlignType.BOTTOM
    );
  });
});
