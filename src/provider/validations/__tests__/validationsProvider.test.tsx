import { renderHook } from '@testing-library/react-hooks';
import React from 'react';

import { useValidations } from '../validationsProvider';

describe('useValidations Hook', () => {
  it('When no validation should throw an error', () => {
    jest.spyOn(React, 'useContext').mockImplementation(() => ({}));
    const { result } = renderHook(() => useValidations());

    expect(result.current.validationValue).toThrow('Function does not exist');
  });
  it('can have a function validation', () => {
    jest.spyOn(React, 'useContext').mockImplementation(() => ({
      regex: { length: value => value.length < 4 },
    }));
    const { result } = renderHook(() => useValidations());

    expect(result.current.validationValue('length', 'abc')).toBe(true);
  });
  it('can have a regex validation', () => {
    jest.spyOn(React, 'useContext').mockImplementation(() => ({
      regex: { emailRegex: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/ },
    }));
    const { result } = renderHook(() => useValidations());

    expect(result.current.validationValue('emailRegex', 'test@gmail.com')).toBe(true);
  });
});
