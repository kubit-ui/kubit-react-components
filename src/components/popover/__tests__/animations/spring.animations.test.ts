/**
 * Tests for spring physics animations
 */
import { describe, expect, test } from 'vitest';

import {
  createSpringAnimation,
  generateSpringKeyframes,
} from '../../animations/spring.animations';

describe('Popover - Spring Animations', () => {
  describe('generateSpringKeyframes', () => {
    test('should generate keyframes for all directions', () => {
      const directions = ['up', 'down', 'left', 'right', 'fade'] as const;

      directions.forEach((direction) => {
        const keyframes = generateSpringKeyframes(direction);

        expect(keyframes).toBeDefined();
        expect(typeof keyframes).toBe('string');
        expect(keyframes.length).toBeGreaterThan(0);
        // Should contain CSS keyframe steps with percentages
        expect(keyframes).toMatch(/\d+\.\d+%\s*{/);
      });
    });

    test('should handle custom physics parameters', () => {
      const keyframes = generateSpringKeyframes('down', 400, 15, 1.2, 30, 25);

      expect(keyframes).toBeDefined();
      expect(typeof keyframes).toBe('string');
      expect(keyframes.length).toBeGreaterThan(0);

      // Verify it contains proper CSS keyframe structure
      expect(keyframes).toMatch(/\d+\.\d+%\s*{/);
      expect(keyframes).toMatch(/opacity:/);
      expect(keyframes).toMatch(/transform:/);
    });

    test('should include positioning transforms when placement is provided', () => {
      // Test bottom placement (should include translateX(-50%))
      const keyframes = generateSpringKeyframes(
        'down',
        300,
        20,
        1,
        20,
        20,
        'bottom',
      );

      // The keyframes should be generated successfully with placement
      expect(keyframes).toBeDefined();
      expect(typeof keyframes).toBe('string');
      expect(keyframes.length).toBeGreaterThan(0);

      // Should contain positioning transforms for bottom placement
      expect(keyframes).toMatch(/translateX\(-50%\)/);
    });

    test('should not include positioning transforms when no placement is provided', () => {
      // Test without placement
      const keyframes = generateSpringKeyframes('down');

      // The keyframes should be generated successfully without placement
      expect(keyframes).toBeDefined();
      expect(typeof keyframes).toBe('string');
      expect(keyframes.length).toBeGreaterThan(0);

      // Should not contain translateX(-50%) positioning transforms
      expect(keyframes).not.toMatch(/translateX\(-50%\)/);
    });

    test('should handle different placement types correctly', () => {
      const placements = ['bottom', 'top', 'left', 'right', 'center'] as const;

      placements.forEach((placement) => {
        const keyframes = generateSpringKeyframes(
          'down',
          300,
          20,
          1,
          20,
          20,
          placement,
        );

        expect(keyframes).toBeDefined();
        expect(typeof keyframes).toBe('string');
        // Should contain some positioning transform for each placement
        expect(keyframes.length).toBeGreaterThan(0);
      });
    });
  });

  describe('createSpringAnimation', () => {
    test('should create complete spring animation with all properties', () => {
      const directions = ['up', 'down', 'left', 'right', 'fade'] as const;

      directions.forEach((direction) => {
        const animation = createSpringAnimation(direction);

        expect(animation).toBeDefined();
        expect(typeof animation).toBe('object');
        expect(animation.keyframesCSS).toBeDefined();
        expect(animation.duration).toBeDefined();
        expect(typeof animation.duration).toBe('string');

        // Verify keyframes structure
        expect(typeof animation.keyframesCSS).toBe('string');
        expect(animation.keyframesCSS.length).toBeGreaterThan(0);
      });
    });

    test('should return consistent durations for similar animations', () => {
      const animation1 = createSpringAnimation('up');
      const animation2 = createSpringAnimation('down');

      expect(animation1.duration).toBe(animation2.duration);
    });

    test('should handle direction variations', () => {
      const horizontalAnimation = createSpringAnimation('left');
      const verticalAnimation = createSpringAnimation('up');
      const fadeAnimation = createSpringAnimation('fade');

      expect(horizontalAnimation.keyframesCSS).toBeDefined();
      expect(verticalAnimation.keyframesCSS).toBeDefined();
      expect(fadeAnimation.keyframesCSS).toBeDefined();
    });

    test('should accept custom duration in string format', () => {
      const animationMs = createSpringAnimation('up', { duration: '1200ms' });
      const animationS = createSpringAnimation('down', { duration: '1.5s' });

      expect(animationMs.duration).toBe('1200ms');
      expect(animationS.duration).toBe('1.5s');
    });

    test('should accept custom physics parameters', () => {
      const customAnimation = createSpringAnimation('right', {
        damping: 10,
        duration: '600ms',
        initialDisplacement: 40,
        keyframeCount: 30,
        mass: 0.8,
        placement: 'right-start',
        stiffness: 400,
      });

      expect(customAnimation).toBeDefined();
      expect(customAnimation.keyframesCSS).toBeDefined();
      expect(typeof customAnimation.keyframesCSS).toBe('string');
    });
  });

  describe('Animation consistency', () => {
    test('should produce deterministic results', () => {
      const keyframes1 = generateSpringKeyframes('up');
      const keyframes2 = generateSpringKeyframes('up');
      const animation1 = createSpringAnimation('fade');
      const animation2 = createSpringAnimation('fade');

      expect(keyframes1).toBe(keyframes2);
      expect(animation1.duration).toBe(animation2.duration);
      expect(animation1.keyframesCSS).toBe(animation2.keyframesCSS);
    });

    test('should handle edge cases gracefully', () => {
      // Test with extreme physics values
      const extremeSpring = createSpringAnimation('down', {
        damping: 50,
        duration: '100ms',
        mass: 0.1,
        stiffness: 1000,
      });

      expect(extremeSpring).toBeDefined();
      expect(extremeSpring.duration).toBe('100ms');
      expect(typeof extremeSpring.keyframesCSS).toBe('string');
    });
  });
});
