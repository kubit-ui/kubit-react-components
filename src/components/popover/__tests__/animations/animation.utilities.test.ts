import { describe, expect, it } from 'vitest';

import { VALID_PLACEMENTS } from '../../types/animation';
import { getAvailableDirections } from '../../utils/placement.utils';

describe('Popover - Animation Utilities', () => {
  describe('getAvailableDirections', () => {
    it('should return correct directions for vertical placements', () => {
      const verticalPlacements = VALID_PLACEMENTS.filter(
        (p) => p.startsWith('top') || p.startsWith('bottom'),
      );

      verticalPlacements.forEach((placement) => {
        const result = getAvailableDirections(placement);
        expect(result).toEqual(['fade', 'up', 'down']);
      });
    });

    it('should return correct directions for horizontal placements', () => {
      const horizontalPlacements = VALID_PLACEMENTS.filter(
        (p) => p.startsWith('left') || p.startsWith('right'),
      );

      horizontalPlacements.forEach((placement) => {
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
