import { waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import { ButtonStateType } from '@/components/button';
import { STATES } from '@/types';

import { States, useManageState } from '../useManageState';

describe('useManageState Hook', () => {
  it('useManageState with default state', () => {
    const { result } = renderHook(() =>
      useManageState({
        states: Object.values(ButtonStateType) as States,
        ref: jest.fn(),
      })
    );

    expect(result.current.state).toBe(STATES.DEFAULT);
  });

  it('useManageState with disabled state', () => {
    const { result, rerender } = renderHook(useManageState, {
      initialProps: {
        states: Object.values(ButtonStateType) as States,
        ref: null,
        disabled: false,
        loading: false,
        active: false,
      },
    });

    rerender({
      states: Object.values(ButtonStateType) as States,
      ref: null,
      disabled: true,
      loading: false,
      active: false,
    });

    waitFor(() => {
      expect(result.current.state).toBe(STATES.DISABLED);
    });
  });

  it('useManageState with loading state', () => {
    const { result, rerender } = renderHook(useManageState, {
      initialProps: {
        states: Object.values(ButtonStateType) as States,
        ref: null,
        disabled: false,
        loading: false,
        active: false,
      },
    });

    rerender({
      states: Object.values(ButtonStateType) as States,
      ref: null,
      disabled: false,
      loading: true,
      active: false,
    });

    waitFor(() => {
      expect(result.current.state).toBe(STATES.LOADING);
    });
  });

  it('useManageState with active state', () => {
    const { result, rerender } = renderHook(useManageState, {
      initialProps: {
        states: Object.values(ButtonStateType) as States,
        ref: null,
        disabled: false,
        loading: false,
        active: false,
      },
    });

    rerender({
      states: Object.values(ButtonStateType) as States,
      ref: null,
      disabled: false,
      loading: false,
      active: true,
    });

    waitFor(() => {
      expect(result.current.state).toBe(STATES.ACTIVE);
    });
  });
});
