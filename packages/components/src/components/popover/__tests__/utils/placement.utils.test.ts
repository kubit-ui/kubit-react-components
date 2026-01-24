import type { Placement } from '@floating-ui/dom';

import {
  getAvailableDirections,
  getPlacementDirection,
  normalizeToValidPlacement,
} from '../../utils/placement.utils';

describe('placement.utils', () => {
  describe('normalizeToValidPlacement', () => {
    it('should return "center" for undefined placement', () => {
      const result = normalizeToValidPlacement(undefined);
      expect(result).toBe('center');
    });

    it('should preserve placement information for centered positions', () => {
      expect(normalizeToValidPlacement('top')).toBe('top');
      expect(normalizeToValidPlacement('bottom')).toBe('bottom');
      expect(normalizeToValidPlacement('left')).toBe('left');
      expect(normalizeToValidPlacement('right')).toBe('right');
    });

    it('should preserve placement information for aligned positions', () => {
      expect(normalizeToValidPlacement('top-start')).toBe('top-start');
      expect(normalizeToValidPlacement('top-end')).toBe('top-end');
      expect(normalizeToValidPlacement('bottom-start')).toBe('bottom-start');
      expect(normalizeToValidPlacement('bottom-end')).toBe('bottom-end');
      expect(normalizeToValidPlacement('left-start')).toBe('left-start');
      expect(normalizeToValidPlacement('left-end')).toBe('left-end');
      expect(normalizeToValidPlacement('right-start')).toBe('right-start');
      expect(normalizeToValidPlacement('right-end')).toBe('right-end');
    });

    it('should handle edge cases correctly', () => {
      // Test with null (should be handled gracefully)
      expect(normalizeToValidPlacement(null as unknown as Placement)).toBe(
        'center',
      );

      // Test with empty string (should be handled gracefully)
      expect(normalizeToValidPlacement('' as unknown as Placement)).toBe(
        'center',
      );
    });

    it('should handle fallback to base directions for unknown variants', () => {
      // Test that unknown variants still fall back to base directions
      expect(normalizeToValidPlacement('top-center' as Placement)).toBe('top');
      expect(normalizeToValidPlacement('bottom-center' as Placement)).toBe(
        'bottom',
      );
      expect(normalizeToValidPlacement('left-center' as Placement)).toBe(
        'left',
      );
      expect(normalizeToValidPlacement('right-center' as Placement)).toBe(
        'right',
      );
    });

    it('should default to center for unrecognized placements', () => {
      const invalidPlacements = [
        'invalid-placement',
        'unknown',
        'auto',
        'auto-start',
        'auto-end',
      ];

      invalidPlacements.forEach((placement) => {
        expect(normalizeToValidPlacement(placement as Placement)).toBe(
          'center',
        );
      });
    });
  });

  describe('getPlacementDirection', () => {
    it('should return correct direction for top placements', () => {
      expect(getPlacementDirection('top')).toBe('top');
      expect(getPlacementDirection('top-start')).toBe('top');
      expect(getPlacementDirection('top-end')).toBe('top');
    });

    it('should return correct direction for bottom placements', () => {
      expect(getPlacementDirection('bottom')).toBe('bottom');
      expect(getPlacementDirection('bottom-start')).toBe('bottom');
      expect(getPlacementDirection('bottom-end')).toBe('bottom');
    });

    it('should return correct direction for left placements', () => {
      expect(getPlacementDirection('left')).toBe('left');
      expect(getPlacementDirection('left-start')).toBe('left');
      expect(getPlacementDirection('left-end')).toBe('left');
    });

    it('should return correct direction for right placements', () => {
      expect(getPlacementDirection('right')).toBe('right');
      expect(getPlacementDirection('right-start')).toBe('right');
      expect(getPlacementDirection('right-end')).toBe('right');
    });

    it('should return center for undefined or invalid placements', () => {
      expect(getPlacementDirection(undefined)).toBe('center');
      expect(getPlacementDirection('')).toBe('center');
      expect(getPlacementDirection('invalid')).toBe('center');
    });
  });

  describe('getAvailableDirections', () => {
    it('should return correct directions for top placements', () => {
      ['top', 'top-start', 'top-end'].forEach((placement) => {
        const result = getAvailableDirections(placement);
        expect(result).toEqual(['fade', 'up', 'down']);
      });
    });

    it('should return correct directions for bottom placements', () => {
      ['bottom', 'bottom-start', 'bottom-end'].forEach((placement) => {
        const result = getAvailableDirections(placement);
        expect(result).toEqual(['fade', 'up', 'down']);
      });
    });

    it('should return correct directions for left placements', () => {
      ['left', 'left-start', 'left-end'].forEach((placement) => {
        const result = getAvailableDirections(placement);
        expect(result).toEqual(['fade', 'left', 'right']);
      });
    });

    it('should return correct directions for right placements', () => {
      ['right', 'right-start', 'right-end'].forEach((placement) => {
        const result = getAvailableDirections(placement);
        expect(result).toEqual(['fade', 'left', 'right']);
      });
    });

    it('should return all directions for center placement', () => {
      const result = getAvailableDirections('center');
      expect(result).toEqual(['fade', 'up', 'down', 'left', 'right']);
    });

    it('should handle unknown placements gracefully', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result = getAvailableDirections('unknown-placement' as any);
      expect(Array.isArray(result)).toBe(true);
      expect(result).toContain('fade');
    });
  });
});
