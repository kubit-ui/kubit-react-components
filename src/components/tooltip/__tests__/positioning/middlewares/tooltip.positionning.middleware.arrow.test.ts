import { arrow } from '@/components/tooltip/positioning';
import { TooltipAlignType } from '@/components/tooltip/types';

describe('Tooltip - Positioning - Middleware - arrow', () => {
  it('When element is null an empty object should be returned', () => {
    const { fn } = arrow({ element: null });
    expect(
      fn({
        initialPlacement: TooltipAlignType.LEFT,
        placement: TooltipAlignType.BOTTOM,
        strategy: 'absolute',
        middlewareData: {},
        elements: { reference: null as unknown as Element, floating: {} },
        rects: {
          reference: { width: 10, height: 10, x: 0, y: 0 },
          floating: { width: 10, height: 10, x: 0, y: 0 },
        },
        x: 0,
        y: 0,
      })
    ).toEqual({});
  });
});
