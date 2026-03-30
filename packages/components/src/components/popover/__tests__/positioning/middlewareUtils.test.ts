import {
  type Middleware,
  arrow,
  flip,
  hide,
  offset,
  shift,
} from '@floating-ui/dom';

import {
  calculateMainAxisOffset,
  getMiddlewareStack,
} from '../../hooks/positioning/middlewareUtils';

// Mock floating-ui middleware functions - must be before imports
vi.mock('@floating-ui/dom', async () => {
  return {
    arrow: vi.fn(() => ({ name: 'arrow-mock' })),
    flip: vi.fn(() => ({ name: 'flip-mock' })),
    hide: vi.fn(() => ({ name: 'hide-mock' })),
    offset: vi.fn(() => ({ name: 'offset-mock' })),
    shift: vi.fn(() => ({ name: 'shift-mock' })),
  };
});

describe('middlewareUtils', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('getMiddlewareStack', () => {
    it('should create correct middleware stacks for body anchor', () => {
      const mockedShift = vi.mocked(shift);

      // Test center position
      const centerResult = getMiddlewareStack({
        edgePadding: 8,
        isBodyAnchor: true,
        mainAxisOffset: 10,
        placement: undefined,
      });

      expect(centerResult).toHaveLength(1);
      expect(mockedShift).toHaveBeenCalledWith({
        crossAxis: true,
        mainAxis: true,
        padding: 8,
      });

      vi.clearAllMocks();

      // Test directional positions
      const horizontalPlacements = ['right', 'left'] as const;
      const verticalPlacements = ['top', 'bottom'] as const;

      horizontalPlacements.forEach((placement) => {
        vi.clearAllMocks();
        const result = getMiddlewareStack({
          edgePadding: 8,
          isBodyAnchor: true,
          mainAxisOffset: 10,
          placement,
        });

        expect(result).toHaveLength(1);
        expect(vi.mocked(offset)).toHaveBeenCalledWith({
          alignmentAxis: 0,
          mainAxis: 0,
        });
      });

      verticalPlacements.forEach((placement) => {
        vi.clearAllMocks();
        const result = getMiddlewareStack({
          edgePadding: 8,
          isBodyAnchor: true,
          mainAxisOffset: 10,
          placement,
        });

        expect(result).toHaveLength(1);
        expect(vi.mocked(offset)).toHaveBeenCalledWith({ mainAxis: 0 });
      });
    });

    it('should handle element anchor and middleware options', () => {
      const mockArrowElement = document.createElement('div');

      // Test complete middleware stack for element anchor
      const elementResult = getMiddlewareStack({
        arrowElement: mockArrowElement,
        edgePadding: 8,
        enableFlip: true,
        isBodyAnchor: false,
        mainAxisOffset: 10,
        placement: 'bottom',
      });

      expect(elementResult.length).toBeGreaterThan(1);
      expect(vi.mocked(offset)).toHaveBeenCalled();
      expect(vi.mocked(flip)).toHaveBeenCalled();
      expect(vi.mocked(shift)).toHaveBeenCalled();
      expect(vi.mocked(arrow)).toHaveBeenCalledWith({
        element: mockArrowElement,
        padding: 8,
      });

      vi.clearAllMocks();

      // Test custom middlewares override default behavior
      const customMiddleware: Middleware = { fn: vi.fn(), name: 'custom' };
      const customResult = getMiddlewareStack({
        arrowElement: mockArrowElement,
        customMiddlewares: [customMiddleware],
        edgePadding: 8,
        isBodyAnchor: false,
        mainAxisOffset: 10,
        placement: 'bottom',
      });

      // Custom middlewares are used, plus arrow is still added
      expect(customResult.some((m) => m.name === 'custom')).toBe(true);
      expect(customResult.some((m) => m.name === 'arrow-mock')).toBe(true);

      vi.clearAllMocks();

      // Test hide middleware behavior
      getMiddlewareStack({
        edgePadding: 8,
        hideWhenDetached: true,
        isBodyAnchor: false,
        mainAxisOffset: 10,
        placement: 'bottom',
      });

      expect(vi.mocked(hide)).toHaveBeenCalled();

      vi.clearAllMocks();

      getMiddlewareStack({
        edgePadding: 8,
        hideWhenDetached: false,
        isBodyAnchor: false,
        mainAxisOffset: 10,
        placement: 'bottom',
      });

      expect(vi.mocked(hide)).not.toHaveBeenCalled();
    });
  });

  describe('calculateMainAxisOffset', () => {
    it('should calculate offset correctly based on parameters', () => {
      // Test with offsetDistance provided
      expect(
        calculateMainAxisOffset({
          arrowSize: 8,
          hasArrow: true,
          offsetDistance: [12, 0],
        }),
      ).toBe(12);

      // Test with arrow and no offsetDistance
      expect(
        calculateMainAxisOffset({
          arrowSize: 8,
          hasArrow: true,
          offsetDistance: undefined,
        }),
      ).toBe(8);

      // Test with no arrow and no offsetDistance
      expect(
        calculateMainAxisOffset({
          arrowSize: 8,
          hasArrow: false,
          offsetDistance: undefined,
        }),
      ).toBe(0);

      // Test priority: offsetDistance over arrow
      expect(
        calculateMainAxisOffset({
          arrowSize: 8,
          hasArrow: true,
          offsetDistance: [5, 0],
        }),
      ).toBe(5);
    });
  });
});
