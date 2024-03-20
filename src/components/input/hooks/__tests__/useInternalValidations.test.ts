import { act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import { InputTypeType, InternalErrorType } from '../../types';
import { useInternalValidations } from '../useInternalValidations';

test('Error email validation', async () => {
  const type = InputTypeType.EMAIL;
  const minLength = undefined;
  const { result } = renderHook(() => useInternalValidations(type, minLength));
  expect(result.current.internalErrors.length).toBe(0);
  act(() => {
    result.current.checkInternalValidations('emailError');
  });
  expect(result.current.internalErrors.length).toBe(1);
});

test('Min length validation', async () => {
  const type = InputTypeType.TEXT;
  const minLength = 10;
  const { result } = renderHook(() => useInternalValidations(type, minLength));
  expect(result.current.internalErrors.length).toBe(0);
  act(() => {
    result.current.checkInternalValidations('hello');
  });
  expect(result.current.internalErrors.length).toBe(1);
});

test('Add internal errors', async () => {
  const internalError: InternalErrorType = InternalErrorType.INVALID_EMAIL;
  const type = undefined;
  const minLength = undefined;
  const { result } = renderHook(() => useInternalValidations(type, minLength));
  expect(result.current.internalErrors.length).toBe(0);
  act(() => {
    result.current.addInternalError(internalError);
  });
  expect(result.current.internalErrors.length).toBe(1);
});

test('Remove internal errors', async () => {
  const internalError: InternalErrorType = InternalErrorType.INVALID_EMAIL;
  const type = undefined;
  const minLength = undefined;
  const { result } = renderHook(() => useInternalValidations(type, minLength));
  expect(result.current.internalErrors.length).toBe(0);
  act(() => {
    result.current.addInternalError(internalError);
  });
  expect(result.current.internalErrors.length).toBe(1);
  act(() => {
    result.current.removeInternalError(internalError);
  });
  expect(result.current.internalErrors.length).toBe(0);
});
