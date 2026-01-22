import { PLACEMENT_TRANSFORM_ORIGINS } from '../../utils/animation.utils';

describe('animation.utils', () => {
  describe('PLACEMENT_TRANSFORM_ORIGINS', () => {
    it('should have correct transform origins for basic placements', () => {
      expect(PLACEMENT_TRANSFORM_ORIGINS.top).toBe('center top');
      expect(PLACEMENT_TRANSFORM_ORIGINS.center).toBe('center center');
      expect(PLACEMENT_TRANSFORM_ORIGINS.left).toBe('left center');
      expect(PLACEMENT_TRANSFORM_ORIGINS.bottom).toBe('center bottom');
      expect(PLACEMENT_TRANSFORM_ORIGINS.right).toBe('right center');
    });

    it('should have correct transform origins for positioned placements', () => {
      expect(PLACEMENT_TRANSFORM_ORIGINS['top-start']).toBe('left top');
      expect(PLACEMENT_TRANSFORM_ORIGINS['top-end']).toBe('right top');
      expect(PLACEMENT_TRANSFORM_ORIGINS['bottom-start']).toBe('left bottom');
      expect(PLACEMENT_TRANSFORM_ORIGINS['bottom-end']).toBe('right bottom');
      expect(PLACEMENT_TRANSFORM_ORIGINS['left-start']).toBe('left top');
      expect(PLACEMENT_TRANSFORM_ORIGINS['left-end']).toBe('left bottom');
      expect(PLACEMENT_TRANSFORM_ORIGINS['right-start']).toBe('right top');
      expect(PLACEMENT_TRANSFORM_ORIGINS['right-end']).toBe('right bottom');
    });
  });
});
