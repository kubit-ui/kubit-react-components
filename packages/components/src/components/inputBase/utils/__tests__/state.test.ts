import { describe, expect, it } from 'vitest';

import { InputBaseState } from '../../types/state';
import { getState } from '../state';

describe('getState - inputBase utils', () => {
  it('Should return DISABLED_FILLED when disabled and filled', () => {
    const result = getState({ disabled: true, filled: true });

    expect(result).toBe(InputBaseState.DISABLED_FILLED);
  });

  it('Should return DISABLED_EMPTY when disabled and not filled', () => {
    const result = getState({ disabled: true, filled: false });

    expect(result).toBe(InputBaseState.DISABLED_EMPTY);
  });

  it('Should return ERROR_FILLED when error and filled', () => {
    const result = getState({ error: true, filled: true });

    expect(result).toBe(InputBaseState.ERROR_FILLED);
  });

  it('Should return ERROR_EMPTY when error and not filled', () => {
    const result = getState({ error: true, filled: false });

    expect(result).toBe(InputBaseState.ERROR_EMPTY);
  });

  it('Should return FOCUS when focused', () => {
    const result = getState({ focused: true });

    expect(result).toBe(InputBaseState.FOCUS);
  });

  it('Should return FILLED when filled but not disabled, error, or focused', () => {
    const result = getState({ filled: true });

    expect(result).toBe(InputBaseState.FILLED);
  });

  it('Should return EMPTY when no states are true', () => {
    const result = getState({});

    expect(result).toBe(InputBaseState.EMPTY);
  });

  it('Should prioritize disabled over error', () => {
    const result = getState({ disabled: true, error: true, filled: true });

    expect(result).toBe(InputBaseState.DISABLED_FILLED);
  });

  it('Should prioritize disabled over focused', () => {
    const result = getState({ disabled: true, focused: true });

    expect(result).toBe(InputBaseState.DISABLED_EMPTY);
  });

  it('Should prioritize error over focused', () => {
    const result = getState({ error: true, filled: false, focused: true });

    expect(result).toBe(InputBaseState.ERROR_EMPTY);
  });

  it('Should prioritize focused over filled', () => {
    const result = getState({ filled: true, focused: true });

    expect(result).toBe(InputBaseState.FOCUS);
  });

  it('Should handle all states false explicitly', () => {
    const result = getState({
      disabled: false,
      error: false,
      filled: false,
      focused: false,
    });

    expect(result).toBe(InputBaseState.EMPTY);
  });
});
