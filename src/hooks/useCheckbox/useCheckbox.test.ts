import { act, renderHook } from '@testing-library/react-hooks';

import { useCheckbox } from './useCheckbox';

// mocks
const mockProps = {
  initialChecked: false,
  disabled: false,
};

const mockPropsDisabled = {
  initialChecked: false,
  disabled: true,
};

describe('useCheckbox Hook', () => {
  it('should change isChecked when calling handleToggleIsChecked', () => {
    const { result } = renderHook(() => useCheckbox(mockProps));

    expect(result.current).toHaveProperty('isChecked', false);
    expect(result.current).toHaveProperty('handleToggleIsChecked');

    act(() => {
      result.current.handleToggleIsChecked();
    });

    expect(result.current.isChecked).toBeTruthy();
  });

  it('should not change isChecked when calling handleToggleIsChecked if disabled', () => {
    const { result } = renderHook(() => useCheckbox(mockPropsDisabled));

    expect(result.current).toHaveProperty('isChecked', false);
    expect(result.current).toHaveProperty('handleToggleIsChecked');

    act(() => {
      result.current.handleToggleIsChecked();
    });

    expect(result.current.isChecked).toBeFalsy();
  });
});
