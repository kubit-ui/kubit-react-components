import { describe, expect, test } from 'vitest';

import type { AnimationDirection } from '../../utils/animation.utils';

import {
  generateAnimation,
  generateAnimationStyles,
  getPlacementAnimation,
} from '../../animations/popover.animations';
import {
  ANIMATION_CONFIG_TYPES,
  type AnimationType,
  DEFAULT_POPOVER_ANIMATION_CONFIG,
  type InternalAnimationConfig,
} from '../../types/animation';

describe('PopoverV2 - Popover Animations', () => {
  const mockConfig = {
    ...DEFAULT_POPOVER_ANIMATION_CONFIG,
    delay: '0ms',
    duration: '300ms',
    iterationCount: 1,
    timingFunction: 'ease-in-out',
    type: ANIMATION_CONFIG_TYPES.SIMPLE,
  };

  describe('generateAnimation', () => {
    test('should generate animations for all directions and types', () => {
      const directions: AnimationDirection[] = [
        'fade',
        'up',
        'down',
        'left',
        'right',
      ];
      const types: AnimationType[] = ['enter', 'exit'];

      directions.forEach((direction) => {
        types.forEach((type) => {
          const keyframesResult = generateAnimation(
            mockConfig,
            direction,
            type,
          );
          expect(keyframesResult).toBeDefined();
          expect(typeof keyframesResult).toBe('string');
        });
      });
    });
  });

  describe('generateAnimation - fade animations', () => {
    test('should create fade animation with opacity transitions', () => {
      const enterAnimation = generateAnimation(mockConfig, 'fade', 'enter');
      const exitAnimation = generateAnimation(mockConfig, 'fade', 'exit');

      [enterAnimation, exitAnimation].forEach((animation) => {
        expect(animation).toBeDefined();
        expect(typeof animation).toBe('string');
      });
    });
  });

  describe('generateAnimation - slide animations', () => {
    test('should create slide animations for all directions', () => {
      const directions: Exclude<AnimationDirection, 'fade'>[] = [
        'up',
        'down',
        'left',
        'right',
      ];
      const types: AnimationType[] = ['enter', 'exit'];

      directions.forEach((direction) => {
        types.forEach((type) => {
          const animation = generateAnimation(mockConfig, direction, type);
          expect(animation).toBeDefined();
          expect(typeof animation).toBe('string');
        });
      });
    });
  });

  // Skip test that requires styled-components which is not available
  // describe('createCustomAnimation', () => {
  //   test('should create animation with custom keyframes', () => {
  //     const customKeyframes = keyframes`
  //       from { opacity: 0; }
  //       to { opacity: 1; }
  //     `;

  //     const animation = createCustomAnimation(mockConfig, {
  //       direction: 'fade',
  //       type: 'enter',
  //       customKeyframes,
  //     });
  //     expect(animation).toBeDefined();
  //     expect(typeof animation).toBe('object');
  //   });
  // });

  // Placement Animation Tests (formerly in placement.animations.test.ts)
  describe('Placement Animations', () => {
    const placementConfig: InternalAnimationConfig = {
      ...DEFAULT_POPOVER_ANIMATION_CONFIG,
      animationDistanceInPx: 10,
      animationRotationInDeg: 0,
      delay: '100ms',
      duration: '300ms',
      iterationCount: 1,
      opacityEnd: 1,
      opacityStart: 0,
      scaleStart: 0.95,
      timingFunction: 'ease-in-out',
      transformOrigin: 'center center',
      type: ANIMATION_CONFIG_TYPES.SIMPLE,
    };

    describe('getPlacementAnimation', () => {
      test('should generate valid animations for all placements and states', () => {
        const placements = [
          'top',
          'bottom',
          'left',
          'right',
          'center',
        ] as const;

        placements.forEach((placement) => {
          const openingAnimation = getPlacementAnimation(
            false,
            placementConfig,
            placement,
          );
          const closingAnimation = getPlacementAnimation(
            true,
            placementConfig,
            placement,
          );

          expect(typeof openingAnimation).toBe('string');
          expect(typeof closingAnimation).toBe('string');
          expect(openingAnimation.length).toBeGreaterThan(0);
          expect(closingAnimation.length).toBeGreaterThan(0);
          expect(openingAnimation).not.toBe(closingAnimation);
        });
      });

      test('should handle compound placements gracefully', () => {
        const compoundPlacements = [
          'top-start',
          'bottom-end',
          'left-center',
          'right-start',
        ];

        compoundPlacements.forEach((placement) => {
          const animation = getPlacementAnimation(
            false,
            placementConfig,
            placement,
          );
          expect(typeof animation).toBe('string');
          expect(animation.length).toBeGreaterThan(0);
        });
      });
    });

    describe('generateAnimationStyles', () => {
      test('should generate complete animation styles', () => {
        const styles = generateAnimationStyles(placementConfig);

        expect(typeof styles).toBe('string');
        expect(styles).toContain('animation-duration: 300ms');
        expect(styles).toContain('animation-delay: 100ms');
        expect(styles).toContain('animation-timing-function: ease-in-out');
        expect(styles).toContain('animation-iteration-count: 1');
        expect(styles).toContain('transform-origin: center center');
      });

      test('should handle different timing functions and values', () => {
        const customConfig: InternalAnimationConfig = {
          ...placementConfig,
          delay: '0ms',
          duration: '1000ms',
          iterationCount: 2,
          timingFunction: 'linear',
          transformOrigin: 'top left',
        };

        const styles = generateAnimationStyles(customConfig);

        expect(styles).toContain('animation-duration: 1000ms');
        expect(styles).toContain('animation-delay: 0ms');
        expect(styles).toContain('animation-timing-function: linear');
        expect(styles).toContain('animation-iteration-count: 2');
        expect(styles).toContain('transform-origin: top left');
      });

      test('should produce consistent output across calls', () => {
        const styles1 = generateAnimationStyles(placementConfig);
        const styles2 = generateAnimationStyles(placementConfig);

        expect(styles1).toBe(styles2);
      });
    });
  });
});
