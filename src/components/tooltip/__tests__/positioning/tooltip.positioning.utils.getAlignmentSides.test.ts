import { getAlignmentSides } from '@/components/tooltip/positioning/utils/getAlignmentSides';
import { TooltipAlignType } from '@/components/tooltip/types';

describe('Tooltip positioning - getAlignmentSides', () => {
  it('main is y, length is height', () => {
    const placement = TooltipAlignType.RIGHT;
    const rects = {
      reference: { width: 20, height: 20, x: 0, y: 0 },
      floating: { width: 30, height: 20, x: 0, y: 0 },
    };

    const result = getAlignmentSides(placement, rects);

    expect(result).toEqual({
      main: TooltipAlignType.TOP,
      cross: TooltipAlignType.BOTTOM,
    });
  });

  it('main is y, length is height, with reference bigger than floating', () => {
    const placement = TooltipAlignType.RIGHT;
    const rects = {
      reference: { width: 50, height: 50, x: 0, y: 0 },
      floating: { width: 30, height: 20, x: 0, y: 0 },
    };

    const result = getAlignmentSides(placement, rects);

    expect(result).toEqual({
      main: TooltipAlignType.BOTTOM,
      cross: TooltipAlignType.TOP,
    });
  });

  it('main is x, length is height', () => {
    const placement = TooltipAlignType.TOP;
    const rects = {
      reference: { width: 20, height: 20, x: 0, y: 0 },
      floating: { width: 30, height: 20, x: 0, y: 0 },
    };

    const result = getAlignmentSides(placement, rects);

    expect(result).toEqual({
      main: TooltipAlignType.LEFT,
      cross: TooltipAlignType.RIGHT,
    });
  });

  it('main is x, length is height, with reference bigger than floating', () => {
    const placement = TooltipAlignType.TOP;
    const rects = {
      reference: { width: 50, height: 50, x: 0, y: 0 },
      floating: { width: 30, height: 20, x: 0, y: 0 },
    };

    const result = getAlignmentSides(placement, rects);

    expect(result).toEqual({
      main: TooltipAlignType.RIGHT,
      cross: TooltipAlignType.LEFT,
    });
  });
});
