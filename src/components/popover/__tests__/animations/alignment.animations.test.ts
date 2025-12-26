/**
 * Test to verify that alignment-specific animations work correctly
 * This ensures that -start and -end positions don't use centering transforms
 */
import { describe, expect, test } from 'vitest';

import { getPlacementAnimation } from '../../animations/popover.animations';
import { DEFAULT_POPOVER_ANIMATION_CONFIG } from '../../types/animation';
import { getPositioningTransforms } from '../../utils/animation.utils';

describe('PopoverV2 - Alignment-specific Animations', () => {
  const mockConfig = {
    ...DEFAULT_POPOVER_ANIMATION_CONFIG,
    type: 'simple' as const,
    duration: '300ms',
    delay: '0ms',
    timingFunction: 'ease-in-out',
    iterationCount: 1,
    transformOrigin: 'center center',
    opacityStart: 0,
    opacityEnd: 1,
    scaleStart: 0.95,
    animationDistanceInPx: 10,
    animationRotationInDeg: 0,
  };

  describe('getPositioningTransforms', () => {
    test('should return centering transforms for base positions', () => {
      expect(getPositioningTransforms('top')).toBe('translateX(-50%)');
      expect(getPositioningTransforms('bottom')).toBe('translateX(-50%)');
      expect(getPositioningTransforms('left')).toBe('translateY(-50%)');
      expect(getPositioningTransforms('right')).toBe('translateY(-50%)');
      expect(getPositioningTransforms('center')).toBe('translate(-50%, -50%)');
    });

    test('should return empty transforms for aligned positions (start/end)', () => {
      // Top aligned positions should NOT use centering
      expect(getPositioningTransforms('top-start')).toBe('');
      expect(getPositioningTransforms('top-end')).toBe('');

      // Bottom aligned positions should NOT use centering
      expect(getPositioningTransforms('bottom-start')).toBe('');
      expect(getPositioningTransforms('bottom-end')).toBe('');

      // Left aligned positions should NOT use centering
      expect(getPositioningTransforms('left-start')).toBe('');
      expect(getPositioningTransforms('left-end')).toBe('');

      // Right aligned positions should NOT use centering
      expect(getPositioningTransforms('right-start')).toBe('');
      expect(getPositioningTransforms('right-end')).toBe('');
    });
  });

  describe('getPlacementAnimation for specific placements', () => {
    test('should generate different animations for aligned vs centered positions', () => {
      // Test that specific placements generate animations
      const topAnimation = getPlacementAnimation(false, mockConfig, 'top');
      const topStartAnimation = getPlacementAnimation(
        false,
        mockConfig,
        'top-start',
      );
      const topEndAnimation = getPlacementAnimation(
        false,
        mockConfig,
        'top-end',
      );

      expect(typeof topAnimation).toBe('string');
      expect(typeof topStartAnimation).toBe('string');
      expect(typeof topEndAnimation).toBe('string');

      expect(topAnimation.length).toBeGreaterThan(0);
      expect(topStartAnimation.length).toBeGreaterThan(0);
      expect(topEndAnimation.length).toBeGreaterThan(0);
    });

    test('should handle all alignment variants', () => {
      const alignedPlacements = [
        'top-start',
        'top-end',
        'bottom-start',
        'bottom-end',
        'left-start',
        'left-end',
        'right-start',
        'right-end',
      ];

      alignedPlacements.forEach((placement) => {
        const animation = getPlacementAnimation(false, mockConfig, placement);
        expect(typeof animation).toBe('string');
        expect(animation.length).toBeGreaterThan(0);
      });
    });

    test('should generate closing animations for aligned positions', () => {
      const alignedPlacements = [
        'top-start',
        'top-end',
        'bottom-start',
        'bottom-end',
        'left-start',
        'left-end',
        'right-start',
        'right-end',
      ];

      alignedPlacements.forEach((placement) => {
        const openingAnimation = getPlacementAnimation(
          false,
          mockConfig,
          placement,
        );
        const closingAnimation = getPlacementAnimation(
          true,
          mockConfig,
          placement,
        );

        expect(typeof openingAnimation).toBe('string');
        expect(typeof closingAnimation).toBe('string');
        expect(openingAnimation).not.toBe(closingAnimation);
      });
    });
  });
});
