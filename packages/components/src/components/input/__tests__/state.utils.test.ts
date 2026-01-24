import { InputState } from '../types/state';
import { getState } from '../utils/state';

describe('Input getState', () => {
  it('should return DISABLED_FILLED when disabled and filled', () => {
    expect(
      getState({ disabled: true, error: true, filled: true, focused: false }),
    ).toBe(InputState.DISABLED_FILLED);
  });

  it('should return DISABLED_EMPTY when disabled and not filled', () => {
    expect(
      getState({ disabled: true, error: true, filled: false, focused: false }),
    ).toBe(InputState.DISABLED_EMPTY);
  });

  it('should return ERROR_FILLED when error and filled', () => {
    expect(
      getState({ disabled: false, error: true, filled: true, focused: false }),
    ).toBe(InputState.ERROR_FILLED);
  });

  it('should return ERROR_EMPTY when error and not filled', () => {
    expect(
      getState({ disabled: false, error: true, filled: false, focused: false }),
    ).toBe(InputState.ERROR_EMPTY);
  });

  it('should return FOCUSED when focused', () => {
    expect(
      getState({ disabled: false, error: false, filled: false, focused: true }),
    ).toBe(InputState.FOCUS);
  });

  it('should return FILLED when filled', () => {
    expect(
      getState({ disabled: false, error: false, filled: true, focused: false }),
    ).toBe(InputState.FILLED);
  });

  it('should return EMPTY when none of the conditions are met', () => {
    expect(
      getState({
        disabled: false,
        error: false,
        filled: false,
        focused: false,
      }),
    ).toBe(InputState.EMPTY);
  });
});
