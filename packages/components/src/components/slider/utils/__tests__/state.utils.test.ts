import { describe, expect, it } from 'vitest';

import { STATES } from '@/lib/types/states/states';

import { getState } from '../state.utils';

describe('getState - slider utils', () => {
  it('Should return DISABLED state when disabled is true regardless of other states', () => {
    const result = getState({ disabled: true, hover: false, pressed: false });

    expect(result).toBe(STATES.DISABLED);
  });

  it('Should return DISABLED state even when hover and pressed are true', () => {
    const result = getState({ disabled: true, hover: true, pressed: true });

    expect(result).toBe(STATES.DISABLED);
  });

  it('Should return PRESSED state when pressed is true and disabled is false', () => {
    const result = getState({ disabled: false, hover: false, pressed: true });

    expect(result).toBe(STATES.PRESSED);
  });

  it('Should return PRESSED state even when hover is also true', () => {
    const result = getState({ disabled: false, hover: true, pressed: true });

    expect(result).toBe(STATES.PRESSED);
  });

  it('Should return HOVER state when hover is true and others are false', () => {
    const result = getState({ disabled: false, hover: true, pressed: false });

    expect(result).toBe(STATES.HOVER);
  });

  it('Should return DEFAULT state when all states are false', () => {
    const result = getState({ disabled: false, hover: false, pressed: false });

    expect(result).toBe(STATES.DEFAULT);
  });

  it('Should prioritize states in correct order: disabled > pressed > hover > default', () => {
    // Test priority: disabled first
    expect(getState({ disabled: true, hover: true, pressed: true })).toBe(
      STATES.DISABLED,
    );

    // Test priority: pressed second (when not disabled)
    expect(getState({ disabled: false, hover: true, pressed: true })).toBe(
      STATES.PRESSED,
    );

    // Test priority: hover third (when not disabled/pressed)
    expect(getState({ disabled: false, hover: true, pressed: false })).toBe(
      STATES.HOVER,
    );

    // Test priority: default last
    expect(getState({ disabled: false, hover: false, pressed: false })).toBe(
      STATES.DEFAULT,
    );
  });
});
