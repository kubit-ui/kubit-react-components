import { convertValueToCoords, offset } from '@/components/tooltip/positioning/middlewares/offset';
import { MiddlewareState } from '@/components/tooltip/positioning/types';
import { TooltipAlignType } from '@/components/tooltip/types';

describe('offset middleware', () => {
  it('convertValueToCoords returns correct coords when TooltipAlignType is LEFT', () => {
    const state: MiddlewareState = {
      placement: TooltipAlignType.LEFT,
      initialPlacement: TooltipAlignType.LEFT,
      strategy: 'absolute',
      middlewareData: { data: {} },
      elements: { reference: document.createElement('div'), floating: {} },
      rects: {
        reference: { width: 10, height: 10, x: 0, y: 0 },
        floating: { width: 10, height: 10, x: 0, y: 0 },
      },
      x: 0,
      y: 0,
    };
    const value = 10;
    const result = convertValueToCoords(state, value);

    expect(result).toEqual({ x: -10, y: 0 });
  });

  it('convertValueToCoords returns correct coords when TooltipAlignType is RIGHT', () => {
    const state: MiddlewareState = {
      placement: TooltipAlignType.RIGHT,
      initialPlacement: TooltipAlignType.RIGHT,
      strategy: 'absolute',
      middlewareData: { data: {} },
      elements: { reference: document.createElement('div'), floating: {} },
      rects: {
        reference: { width: 10, height: 10, x: 0, y: 0 },
        floating: { width: 10, height: 10, x: 0, y: 0 },
      },
      x: 0,
      y: 0,
    };
    const value = 10;
    const result = convertValueToCoords(state, value);

    expect(result).toEqual({ x: 10, y: 0 });
  });

  it('convertValueToCoords returns correct coords when TooltipAlignType is TOP', () => {
    const state: MiddlewareState = {
      placement: TooltipAlignType.TOP,
      initialPlacement: TooltipAlignType.TOP,
      strategy: 'absolute',
      middlewareData: { data: {} },
      elements: { reference: document.createElement('div'), floating: {} },
      rects: {
        reference: { width: 10, height: 10, x: 0, y: 0 },
        floating: { width: 10, height: 10, x: 0, y: 0 },
      },
      x: 0,
      y: 0,
    };
    const value = 10;
    const result = convertValueToCoords(state, value);

    expect(result).toEqual({ x: 0, y: -10 });
  });

  it('convertValueToCoords returns correct coords when TooltipAlignType is BOTTOM', () => {
    const state: MiddlewareState = {
      placement: TooltipAlignType.BOTTOM,
      initialPlacement: TooltipAlignType.BOTTOM,
      strategy: 'absolute',
      middlewareData: { data: {} },
      elements: {
        reference: document.createElement('div'),
        floating: document.createElement('div'),
      },
      rects: {
        reference: { width: 10, height: 10, x: 0, y: 0 },
        floating: { width: 10, height: 10, x: 0, y: 0 },
      },
      x: 0,
      y: 0,
    };
    const value = 10;
    const result = convertValueToCoords(state, value);

    expect(result).toEqual({ x: 0, y: 10 });
  });

  it('offset', () => {
    const { fn } = offset(5);
    const fnResult = fn({
      initialPlacement: TooltipAlignType.RIGHT,
      placement: TooltipAlignType.RIGHT,
      strategy: 'absolute',
      middlewareData: {},
      elements: {
        reference: document.createElement('div'),
        floating: document.createElement('div'),
      },
      rects: {
        reference: { width: 10, height: 10, x: 0, y: 0 },
        floating: { width: 10, height: 10, x: 0, y: 0 },
      },
      x: 0,
      y: 0,
    });
    expect(fnResult.x).toEqual(5);
    expect(fnResult.y).toEqual(0);
  });

  it('offset default value is 0', () => {
    const { fn } = offset();
    const fnResult = fn({
      initialPlacement: TooltipAlignType.RIGHT,
      placement: TooltipAlignType.RIGHT,
      strategy: 'absolute',
      middlewareData: {},
      elements: {
        reference: document.createElement('div'),
        floating: document.createElement('div'),
      },
      rects: {
        reference: { width: 10, height: 10, x: 0, y: 0 },
        floating: { width: 10, height: 10, x: 0, y: 0 },
      },
      x: 0,
      y: 0,
    });
    expect(fnResult.x).toEqual(0);
    expect(fnResult.y).toEqual(0);
  });
});
