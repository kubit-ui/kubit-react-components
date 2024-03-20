// helper
import { CheckboxStateType } from '../types';
import { checkboxState } from '../utils';

it('Should return isChecked = true and isDisabled = false, when the state is DEFAULT_SELECTED', () => {
  const { isChecked, isDisabled } = checkboxState(CheckboxStateType.DEFAULT_SELECTED);

  expect(isChecked).toBeTruthy();
  expect(isDisabled).toBeFalsy();
});

it('Should return isChecked = true and isDisabled = true, when the state is DISABLED_SELECTED', () => {
  const { isChecked, isDisabled } = checkboxState(CheckboxStateType.DISABLED_SELECTED);

  expect(isChecked).toBeTruthy();
  expect(isDisabled).toBeTruthy();
});

it('Should return isChecked = false and isDisabled = true, when the state is DISABLED_UNSELECTED', () => {
  const { isChecked, isDisabled } = checkboxState(CheckboxStateType.DISABLED_UNSELECTED);

  expect(isChecked).toBeFalsy();
  expect(isDisabled).toBeTruthy();
});
