import { describe, expect, it } from 'vitest';

import {
  generateSpringKeyframes,
  generateSpringKeyframesRule,
} from '../spring.animations';

describe('generateSpringKeyframes', () => {
  it('should generate keyframes for "up" direction', () => {
    const result = generateSpringKeyframes('up');
    expect(result).toContain('translateY');
    expect(result).toContain('%');
    expect(result).toContain('opacity');
  });

  it('should generate keyframes for "down" direction', () => {
    const result = generateSpringKeyframes('down');
    expect(result).toContain('translateY');
    expect(result).toContain('%');
  });

  it('should generate keyframes for "left" direction', () => {
    const result = generateSpringKeyframes('left');
    expect(result).toContain('translateX');
  });

  it('should generate keyframes for "right" direction', () => {
    const result = generateSpringKeyframes('right');
    expect(result).toContain('translateX');
  });

  it('should generate keyframes for "fade" direction', () => {
    const result = generateSpringKeyframes('fade');
    expect(result).toContain('scale');
    expect(result).toContain('opacity');
  });

  it('should handle dampingRatio less than 1 (bouncy animation)', () => {
    const result = generateSpringKeyframes('up', 300, 10);
    expect(result).toContain('translateY');
  });

  it('should handle dampingRatio equal to 1 (smooth animation)', () => {
    const result = generateSpringKeyframes('up', 300, 34.64);
    expect(result).toContain('translateY');
  });

  it('should handle dampingRatio greater than 1 (slow animation)', () => {
    const result = generateSpringKeyframes('up', 300, 50);
    expect(result).toContain('translateY');
  });

  it('should handle zero displacement', () => {
    const result = generateSpringKeyframes('up', 300, 20, 1, 0);
    expect(result).toContain('translateY(0)');
  });

  it('should generate specified number of keyframes', () => {
    const result = generateSpringKeyframes('up', 300, 20, 1, 20, 10);
    const keyframeCount = (result.match(/%/g) || []).length;
    expect(keyframeCount).toBeGreaterThan(5);
  });

  it('should generate keyframes with custom parameters', () => {
    const result = generateSpringKeyframes('down', 500, 30, 2, 40, 15);
    expect(result).toContain('translateY');
  });

  it('should handle placement parameter for positioning', () => {
    const result = generateSpringKeyframes('up', 300, 20, 1, 20, 20, 'top');
    expect(result).toContain('translateY');
  });

  it('should generate opacity changes for fade direction', () => {
    const result = generateSpringKeyframes('fade', 300, 20, 1, 20, 10);
    expect(result).toMatch(/opacity:\s+[\d.]+/);
  });

  it('should clamp scale values for fade direction', () => {
    const result = generateSpringKeyframes('fade', 300, 20, 1, 100, 10);
    expect(result).toContain('scale');
  });
});

describe('generateSpringKeyframesRule', () => {
  it('should generate complete CSS keyframes rule', () => {
    const result = generateSpringKeyframesRule('slideUp', 'up');
    expect(result).toContain('@keyframes slideUp');
    expect(result).toContain('translateY');
  });

  it('should generate keyframes rule for down direction', () => {
    const result = generateSpringKeyframesRule('slideDown', 'down');
    expect(result).toContain('@keyframes slideDown');
    expect(result).toContain('translateY');
  });

  it('should generate keyframes rule for left direction', () => {
    const result = generateSpringKeyframesRule('slideLeft', 'left');
    expect(result).toContain('@keyframes slideLeft');
    expect(result).toContain('translateX');
  });

  it('should generate keyframes rule for right direction', () => {
    const result = generateSpringKeyframesRule('slideRight', 'right');
    expect(result).toContain('@keyframes slideRight');
    expect(result).toContain('translateX');
  });

  it('should generate keyframes rule for fade direction', () => {
    const result = generateSpringKeyframesRule('fade', 'fade');
    expect(result).toContain('@keyframes fade');
    expect(result).toContain('scale');
  });

  it('should accept custom spring parameters', () => {
    const result = generateSpringKeyframesRule(
      'custom',
      'up',
      500,
      30,
      2,
      40,
      15,
    );
    expect(result).toContain('@keyframes custom');
  });

  it('should handle placement parameter in rule generation', () => {
    const result = generateSpringKeyframesRule(
      'slideUp',
      'up',
      300,
      20,
      1,
      20,
      20,
      'bottom',
    );
    expect(result).toContain('@keyframes slideUp');
  });
});
