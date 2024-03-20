import { InputState } from '../types';
import { getState, hasError, isDisabled } from '../utils';

describe('Utils state', () => {
  it('If disabled without value, it should return DISABLED_EMPTY state', () => {
    const value = undefined;
    const focus = true;
    const disabled = true;
    const error = undefined;
    const informationAssociated = undefined;
    expect(getState(value, focus, disabled, error, informationAssociated)).toBe(
      InputState.DISABLED_EMPTY
    );
  });
  it('If disabled with value, it should return DISABLED_FILLED state', () => {
    const value = 'value';
    const focus = true;
    const disabled = true;
    const error = undefined;
    const informationAssociated = undefined;
    expect(getState(value, focus, disabled, error, informationAssociated)).toBe(
      InputState.DISABLED_FILLED
    );
  });
  it('If disabled with informationAssociated, it should return DISABLED_FILLED_WITH_INFO state', () => {
    const value = 'value';
    const focus = false;
    const disabled = true;
    const error = undefined;
    const informationAssociated = 'info';
    expect(getState(value, focus, disabled, error, informationAssociated)).toBe(
      InputState.DISABLED_FILLED_WITH_INFO
    );
  });
  it('If error without value, it should return ERROR_EMPTY state', () => {
    const value = undefined;
    const focus = false;
    const disabled = false;
    const error = true;
    const informationAssociated = undefined;
    expect(getState(value, focus, disabled, error, informationAssociated)).toBe(
      InputState.ERROR_EMPTY
    );
  });
  it('If error with value, it should return ERROR_FILLED state', () => {
    const value = 'value';
    const focus = false;
    const disabled = false;
    const error = true;
    const informationAssociated = undefined;
    expect(getState(value, focus, disabled, error, informationAssociated)).toBe(
      InputState.ERROR_FILLED
    );
  });
  it('If error with focus, it should return ERROR_ACTIVE state', () => {
    const value = 'value';
    const focus = true;
    const disabled = false;
    const error = true;
    const informationAssociated = undefined;
    expect(getState(value, focus, disabled, error, informationAssociated)).toBe(
      InputState.ERROR_ACTIVE
    );
  });
  it('If focus, it should return ACTIVE state', () => {
    const value = 'value';
    const focus = true;
    const disabled = false;
    const error = false;
    const informationAssociated = undefined;
    expect(getState(value, focus, disabled, error, informationAssociated)).toBe(InputState.ACTIVE);
  });
  it('If filled, it should return FILLED state', () => {
    const value = 'value';
    const focus = false;
    const disabled = false;
    const error = false;
    const informationAssociated = undefined;
    expect(getState(value, focus, disabled, error, informationAssociated)).toBe(InputState.FILLED);
  });
  it('If not filled, it should return EMPTY state', () => {
    const value = undefined;
    const focus = false;
    const disabled = false;
    const error = false;
    const informationAssociated = undefined;
    expect(getState(value, focus, disabled, error, informationAssociated)).toBe(InputState.EMPTY);
  });
  it('If error with value and informationAssociated', () => {
    const value = 'value';
    const focus = false;
    const disabled = false;
    const error = true;
    const informationAssociated = 'info associated';
    expect(getState(value, focus, disabled, error, informationAssociated)).toBe(
      InputState.ERROR_FILLED_WITH_INFO
    );
  });
  it('check hasError function', () => {
    const state = InputState.ERROR_ACTIVE;
    expect(hasError(state)).toBe(true);
  });
  it('check isDisabled function', () => {
    const state = InputState.DISABLED_FILLED_WITH_INFO;
    expect(isDisabled(state)).toBe(true);
  });
});
