import { act, renderHook } from '@testing-library/react-hooks';
import { ChangeEvent } from 'react';

import * as validationsProvider from '@/provider/validations/validationsProvider';

import { useInputDeprecated } from '../useInputDeprecated';

describe('useInputDeprecated Hook', () => {
  it('useInput - on internal change should call parent onChange', () => {
    const onChange = jest.fn();
    const { result } = renderHook(() => useInputDeprecated({ onChange }));

    act(() => {
      result.current.handleChangeInternal({
        target: { value: 'value' },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(onChange).toHaveBeenCalled();
  });
  it('useInput - on internal change, if onError, errorExecution === onChange and keyValidation should call parent onError', () => {
    jest.spyOn(validationsProvider, 'useValidations').mockImplementation(() => ({
      validationValue: jest.fn(),
    }));
    const onError = jest.fn();
    const { result } = renderHook(() =>
      useInputDeprecated({ onError, errorExecution: 'onChange', keyValidation: 'keyValidation' })
    );

    act(() => {
      result.current.handleChangeInternal({
        target: { value: 'value' },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(onError).toHaveBeenCalled();
  });
  it('useInput - on internal blur should call parent onBlur', () => {
    const onBlur = jest.fn();
    const { result } = renderHook(() => useInputDeprecated({ onBlur }));

    act(() => {
      result.current.handleBlurInternal({
        target: {
          value: 'value',
        },
      } as React.FocusEvent<HTMLInputElement>);
    });

    expect(onBlur).toHaveBeenCalled();
  });
  it('useInput - on internal blur, if onError, errorExecution === onBlur and keyValidation should call parent onError', () => {
    jest.spyOn(validationsProvider, 'useValidations').mockImplementation(() => ({
      validationValue: jest.fn(),
    }));
    const onError = jest.fn();
    const { result } = renderHook(() =>
      useInputDeprecated({ onError, errorExecution: 'onBlur', keyValidation: 'keyValidation' })
    );

    act(() => {
      act(() => {
        result.current.handleBlurInternal({
          target: {
            value: 'value',
          },
        } as React.FocusEvent<HTMLInputElement>);
      });
    });

    expect(onError).toHaveBeenCalled();
  });
});
