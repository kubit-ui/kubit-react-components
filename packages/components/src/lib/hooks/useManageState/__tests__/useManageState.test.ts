import { renderHook, waitFor } from '@testing-library/react';

import { STATES } from '@/lib/types/states/states';

import { useManageState } from '../useManageState';

const StateTypeTest = {
  ACTIVE: STATES.ACTIVE,
  DEFAULT: STATES.DEFAULT,
  DISABLED: STATES.DISABLED,
  HOVER: STATES.HOVER,
  LOADING: STATES.LOADING,
  PRESSED: STATES.PRESSED,
} as const;

describe('useManageState Hook', () => {
  it('useManageState with default state', () => {
    const { result } = renderHook(() =>
      useManageState({
        ref: vi.fn() as never,
        states: Object.values(STATES),
      }),
    );

    expect(result.current.states).toBe(STATES.DEFAULT);
    expect(document.body).toHTMLValidate();
  });

  it('useManageState with loading state', async () => {
    const { rerender, result } = renderHook(useManageState, {
      initialProps: {
        active: false,
        disabled: false,
        loading: false,
        ref: null,
        states: Object.values(StateTypeTest),
      },
    });

    rerender({
      active: false,
      disabled: false,
      loading: true,
      ref: null,
      states: Object.values(StateTypeTest),
    });

    await waitFor(() => {
      expect(result.current.states).toBe(STATES.LOADING);
    });
    expect(document.body).toHTMLValidate();
  });

  it('useManageState with active state ', async () => {
    const { rerender, result } = renderHook(useManageState, {
      initialProps: {
        active: false,
        disabled: false,
        loading: false,
        ref: null,
        states: Object.values(StateTypeTest),
      },
    });

    rerender({
      active: true,
      disabled: false,
      loading: false,
      ref: null,
      states: Object.values(StateTypeTest),
    });

    await waitFor(() => {
      expect(result.current.states).toBe(STATES.ACTIVE);
    });
    expect(document.body).toHTMLValidate();
  });
});
