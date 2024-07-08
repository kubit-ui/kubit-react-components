import { act, renderHook } from '@testing-library/react-hooks';
import React, { ChangeEvent } from 'react';

import * as validationsProvider from '@/provider/validations/validationsProvider';

import { useInput } from '../useInput';

describe('useInput Hook', () => {
  it('useInput - on internal change should call parent onChange', () => {
    const onChange = jest.fn();
    const formatNumber = { style: 'decimal' };
    const ref = React.createRef<HTMLInputElement | undefined>();
    const currentValue = '123234';
    const regex = new RegExp('^[0-9]*$');
    const { result } = renderHook(() =>
      useInput({ onChange, formatNumber, ref, currentValue, regex })
    );

    act(() => {
      result.current.handleChangeInternal({
        target: { value: '12323' },
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
      useInput({ onError, errorExecution: 'onChange', keyValidation: 'keyValidation' })
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
    const formatNumber = { style: 'decimal' };
    const { result } = renderHook(() => useInput({ onBlur, formatNumber }));

    act(() => {
      result.current.handleBlurInternal({
        target: {
          value: '12323',
        },
      } as React.FocusEvent<HTMLInputElement>);
    });

    expect(onBlur).toHaveBeenCalled();
    expect(result.current.value).toBe('12,323');
  });
  it('useInput - on internal blur, if onError, errorExecution === onBlur and keyValidation should call parent onError', () => {
    jest.spyOn(validationsProvider, 'useValidations').mockImplementation(() => ({
      validationValue: jest.fn(),
    }));
    const onError = jest.fn();
    const { result } = renderHook(() =>
      useInput({ onError, errorExecution: 'onBlur', keyValidation: 'keyValidation' })
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
