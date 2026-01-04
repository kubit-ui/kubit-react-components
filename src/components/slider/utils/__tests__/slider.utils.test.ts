import { describe, expect, it, vi } from 'vitest';

import {
  calcScaleValueWithStepOffset,
  calcValueByOffset,
  calculateChange,
} from '../slider.utils';

describe('calculateChange', () => {
  it('should calculate offset from mouse event', () => {
    const container = document.createElement('div');
    Object.defineProperty(container, 'clientWidth', { value: 200 });
    Object.defineProperty(container, 'getBoundingClientRect', {
      value: () => ({ left: 100 }),
    });

    const event = {
      pageX: 150,
      preventDefault: vi.fn(),
    } as unknown as MouseEvent;

    const result = calculateChange({
      container,
      event,
      offsetBoundaries: { max: 100, min: 0 },
    });

    expect(event.preventDefault).toHaveBeenCalled();
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(100);
  });

  it('should calculate offset from touch event', () => {
    const container = document.createElement('div');
    Object.defineProperty(container, 'clientWidth', { value: 200 });
    Object.defineProperty(container, 'getBoundingClientRect', {
      value: () => ({ left: 100 }),
    });

    const event = {
      preventDefault: vi.fn(),
      touches: [{ pageX: 150 }],
    } as unknown as React.TouchEvent<Element>;

    const result = calculateChange({
      container,
      event,
      offsetBoundaries: { max: 100, min: 0 },
    });

    expect(event.preventDefault).toHaveBeenCalled();
    expect(result).toBeGreaterThanOrEqual(0);
  });

  it('should clamp offset to max boundary', () => {
    const container = document.createElement('div');
    Object.defineProperty(container, 'clientWidth', { value: 100 });
    Object.defineProperty(container, 'getBoundingClientRect', {
      value: () => ({ left: 0 }),
    });

    const event = {
      pageX: 200,
      preventDefault: vi.fn(),
    } as unknown as MouseEvent;

    const result = calculateChange({
      container,
      event,
      offsetBoundaries: { max: 100, min: 0 },
    });

    expect(result).toBe(100);
  });

  it('should clamp offset to min boundary', () => {
    const container = document.createElement('div');
    Object.defineProperty(container, 'clientWidth', { value: 100 });
    Object.defineProperty(container, 'getBoundingClientRect', {
      value: () => ({ left: 100 }),
    });

    const event = {
      pageX: 50,
      preventDefault: vi.fn(),
    } as unknown as MouseEvent;

    const result = calculateChange({
      container,
      event,
      offsetBoundaries: { max: 100, min: 0 },
    });

    expect(result).toBe(0);
  });
});

describe('calcValueByOffset', () => {
  it('should calculate value from offset', () => {
    const result = calcValueByOffset({
      max: 100,
      min: 0,
      offset: 50,
      offsetBoundaries: { max: 100, min: 0 },
      step: 1,
    });

    expect(result).toBe(50);
  });

  it('should round value to step with no decimals', () => {
    const result = calcValueByOffset({
      max: 100,
      min: 0,
      offset: 53.7,
      offsetBoundaries: { max: 100, min: 0 },
      step: 10,
    });

    expect(result).toBe(54);
  });

  it('should handle decimal steps', () => {
    const result = calcValueByOffset({
      max: 10,
      min: 0,
      offset: 55,
      offsetBoundaries: { max: 100, min: 0 },
      step: 0.5,
    });

    expect(result).toBeCloseTo(5.5, 1);
  });

  it('should respect min and max boundaries', () => {
    const resultMin = calcValueByOffset({
      max: 100,
      min: 20,
      offset: 0,
      offsetBoundaries: { max: 100, min: 0 },
      step: 1,
    });

    expect(resultMin).toBe(20);

    const resultMax = calcValueByOffset({
      max: 80,
      min: 0,
      offset: 100,
      offsetBoundaries: { max: 100, min: 0 },
      step: 1,
    });

    expect(resultMax).toBe(80);
  });

  it('should handle offset boundaries different from 0-100', () => {
    const result = calcValueByOffset({
      max: 100,
      min: 0,
      offset: 30,
      offsetBoundaries: { max: 60, min: 20 },
      step: 1,
    });

    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(100);
  });
});

describe('calcScaleValueWithStepOffset', () => {
  it('should calculate closest valid value with no step offset', () => {
    const result = calcScaleValueWithStepOffset({
      initialStepOffset: 0,
      max: 100,
      min: 0,
      step: 10,
      value: 47,
    });

    expect(result).toBe(50);
  });

  it('should calculate closest valid value with step offset', () => {
    const result = calcScaleValueWithStepOffset({
      initialStepOffset: 5,
      max: 100,
      min: 0,
      step: 10,
      value: 47,
    });

    expect(result).toBe(45);
  });

  it('should handle value at min boundary', () => {
    const result = calcScaleValueWithStepOffset({
      initialStepOffset: 0,
      max: 100,
      min: 0,
      step: 10,
      value: 0,
    });

    expect(result).toBe(0);
  });

  it('should handle value at max boundary', () => {
    const result = calcScaleValueWithStepOffset({
      initialStepOffset: 0,
      max: 100,
      min: 0,
      step: 10,
      value: 100,
    });

    expect(result).toBe(100);
  });

  it('should handle decimal steps with offset', () => {
    const result = calcScaleValueWithStepOffset({
      initialStepOffset: 0.5,
      max: 10,
      min: 0,
      step: 0.5,
      value: 5.2,
    });

    // 5.2 is closest to 5.0 (distance 0.2) rather than 5.5 (distance 0.3)
    expect(result).toBeCloseTo(5.0, 1);
  });
});
