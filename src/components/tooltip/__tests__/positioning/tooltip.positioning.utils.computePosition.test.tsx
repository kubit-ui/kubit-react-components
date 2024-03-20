import { computePosition } from '../../positioning';
import { TooltipAlignType } from '../../types';

describe('Tooltip Positioning - computePosition', () => {
  const reference = document.createElement('div');
  const floating = document.createElement('div');

  it('default placement is top', () => {
    const reference = document.createElement('div');
    const floating = document.createElement('div');
    const { placement } = computePosition(reference, floating, {});
    expect(placement).toBe('top');
  });

  it('returns correct position when no middleware is provided', () => {
    const result = computePosition(reference, floating, {});

    expect(result).toEqual({
      x: expect.any(Number),
      y: expect.any(Number),
      placement: TooltipAlignType.TOP,
      strategy: 'fixed',
      middlewareData: {},
    });
  });

  it('applies middleware correctly', () => {
    const middleware = [
      {
        name: 'test',
        fn: ({ x, y }) => ({ x: x + 10, y: y + 10, data: { test: true } }),
      },
    ];

    const result = computePosition(reference, floating, { middleware });

    expect(result).toEqual({
      x: expect.any(Number),
      y: expect.any(Number),
      placement: TooltipAlignType.TOP,
      strategy: 'fixed',
      middlewareData: { test: { test: true } },
    });
  });

  it('resets correctly when reset is requested by middleware', () => {
    const middleware = [
      {
        name: 'test',
        fn: ({ x, y, reset }: { x: number; y: number; reset?: boolean }) => ({
          x: x + 10,
          y: y + 10,
          data: { test: true },
          reset: reset ? false : { placement: TooltipAlignType.BOTTOM },
        }),
      },
    ];

    const result = computePosition(reference, floating, { middleware });

    expect(result).toEqual({
      x: expect.any(Number),
      y: expect.any(Number),
      placement: TooltipAlignType.BOTTOM,
      strategy: 'fixed',
      middlewareData: { test: { test: true } },
    });
  });
});
