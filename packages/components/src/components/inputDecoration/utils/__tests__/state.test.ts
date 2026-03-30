import { describe, expect, it } from 'vitest';

import { InputDecorationState } from '../../types/state';
import { getState } from '../state';

describe('getState - inputDecoration utils', () => {
  it('Should return DISABLED_FILLED when disabled and filled', () => {
    const result = getState({ disabled: true, filled: true });

    expect(result).toBe(InputDecorationState.DISABLED_FILLED);
  });

  it('Should return DISABLED_EMPTY when disabled and not filled', () => {
    const result = getState({ disabled: true, filled: false });

    expect(result).toBe(InputDecorationState.DISABLED_EMPTY);
  });

  it('Should return ERROR_FILLED when error and filled', () => {
    const result = getState({ error: true, filled: true });

    expect(result).toBe(InputDecorationState.ERROR_FILLED);
  });

  it('Should return ERROR_EMPTY when error and not filled', () => {
    const result = getState({ error: true, filled: false });

    expect(result).toBe(InputDecorationState.ERROR_EMPTY);
  });

  it('Should return FOCUS when focused', () => {
    const result = getState({ focused: true });

    expect(result).toBe(InputDecorationState.FOCUS);
  });

  it('Should return FILLED when filled but not disabled, error, or focused', () => {
    const result = getState({ filled: true });

    expect(result).toBe(InputDecorationState.FILLED);
  });

  it('Should return EMPTY when no states are true', () => {
    const result = getState({});

    expect(result).toBe(InputDecorationState.EMPTY);
  });

  it('Should prioritize disabled over error when both are true', () => {
    const result = getState({ disabled: true, error: true, filled: true });

    expect(result).toBe(InputDecorationState.DISABLED_FILLED);
  });

  it('Should prioritize disabled over focused when both are true', () => {
    const result = getState({ disabled: true, focused: true });

    expect(result).toBe(InputDecorationState.DISABLED_EMPTY);
  });

  it('Should prioritize error over focused when both are true', () => {
    const result = getState({ error: true, filled: false, focused: true });

    expect(result).toBe(InputDecorationState.ERROR_EMPTY);
  });

  it('Should prioritize focused over filled when both are true', () => {
    const result = getState({ filled: true, focused: true });

    expect(result).toBe(InputDecorationState.FOCUS);
  });

  it('Should handle all states false explicitly', () => {
    const result = getState({
      disabled: false,
      error: false,
      filled: false,
      focused: false,
    });

    expect(result).toBe(InputDecorationState.EMPTY);
  });

  it('Should return DISABLED_EMPTY when only disabled is true', () => {
    const result = getState({ disabled: true });

    expect(result).toBe(InputDecorationState.DISABLED_EMPTY);
  });

  it('Should return ERROR_EMPTY when only error is true', () => {
    const result = getState({ error: true });

    expect(result).toBe(InputDecorationState.ERROR_EMPTY);
  });
});
