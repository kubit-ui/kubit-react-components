import { RadioButtonStateType } from '../types';
import { getState, radioButtonState } from '../utils';

const checked = undefined;
const disabled = undefined;
const error = undefined;
const state = undefined;

describe('Utils state', () => {
  it('If disabled, it should return DISABLED state', () => {
    const disabled = true;
    expect(getState(checked, disabled, error, state)).toBe(RadioButtonStateType.DISABLED);
  });
  it('If disabled with checked, it should return DISABLED_SELECTED state', () => {
    const checked = true;
    const disabled = true;
    expect(getState(checked, disabled, error, state)).toBe(RadioButtonStateType.DISABLED_SELECTED);
  });
  it('If error, it should return ERROR state', () => {
    const error = true;
    expect(getState(checked, disabled, error, state)).toBe(RadioButtonStateType.ERROR);
  });
  it('If error with checked, it should return ERROR_SELECTED state', () => {
    const checked = true;
    const error = true;
    expect(getState(checked, disabled, error, state)).toBe(RadioButtonStateType.ERROR_SELECTED);
  });
  it('If checked, it should return SELECTED state', () => {
    const checked = true;
    expect(getState(checked, disabled, error, state)).toBe(RadioButtonStateType.SELECTED);
  });
  it('If not checked, it should return DEFAULT state', () => {
    expect(getState(checked, disabled, error, state)).toBe(RadioButtonStateType.DEFAULT);
  });

  it('If checked, it should return isChecked true', () => {
    const { isChecked, isDisabled, hasError } = radioButtonState(RadioButtonStateType.SELECTED);
    expect(isChecked).toBeTruthy();
    expect(isDisabled).toBeFalsy();
    expect(hasError).toBeFalsy();
  });
  it('If SELECTED, it should return isChecked true, isDisabled false and hasError false', () => {
    const { isChecked, isDisabled, hasError } = radioButtonState(RadioButtonStateType.SELECTED);
    expect(isChecked).toBeTruthy();
    expect(isDisabled).toBeFalsy();
    expect(hasError).toBeFalsy();
  });
  it('If DISABLED_SELECTED, it should return isChecked true, isDisabled true and hasError false', () => {
    const { isChecked, isDisabled, hasError } = radioButtonState(
      RadioButtonStateType.DISABLED_SELECTED
    );
    expect(isChecked).toBeTruthy();
    expect(isDisabled).toBeTruthy();
    expect(hasError).toBeFalsy();
  });
  it('If DISABLED, it should return isChecked false, isDisabled true and hasError false', () => {
    const { isChecked, isDisabled, hasError } = radioButtonState(RadioButtonStateType.DISABLED);
    expect(isChecked).toBeFalsy();
    expect(isDisabled).toBeTruthy();
    expect(hasError).toBeFalsy();
  });
  it('If ERROR_SELECTED, it should return isChecked true, isDisabled false and hasError true', () => {
    const { isChecked, isDisabled, hasError } = radioButtonState(
      RadioButtonStateType.ERROR_SELECTED
    );
    expect(isChecked).toBeTruthy();
    expect(isDisabled).toBeFalsy();
    expect(hasError).toBeTruthy();
  });
  it('If ERROR, it should return isChecked false, isDisabled false and hasError true', () => {
    const { isChecked, isDisabled, hasError } = radioButtonState(RadioButtonStateType.ERROR);
    expect(isChecked).toBeFalsy();
    expect(isDisabled).toBeFalsy();
    expect(hasError).toBeTruthy();
  });
});
