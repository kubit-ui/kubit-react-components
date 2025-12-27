import { waitFor, renderHook } from '@testing-library/react';
import { type RefObject } from 'react';

import { useInputFocus } from '../useInputFocus';

describe('useInputFocus', () => {
  let inputRef: RefObject<HTMLInputElement>;

  beforeEach(() => {
    inputRef = { current: document.createElement('input') };
    Object.defineProperty(inputRef.current, 'value', { configurable: true, writable: true });
  });

  it('should initialize focused state as false', async () => {
    const { result } = renderHook(() => useInputFocus({ inputRef }));
    await waitFor(() => expect(result.current.focused).toBeFalsy());
  });

  it('should update focused state on focus event', async () => {
    const { result } = renderHook(() => useInputFocus({ inputRef }));
    if (inputRef.current) {
      inputRef.current.dispatchEvent(new Event('focus'));
    }
    await waitFor(() => expect(result.current.focused).toBeTruthy());
  });

  it('should update focused state on blur event', async () => {
    const { result } = renderHook(() => useInputFocus({ inputRef }));
    if (inputRef.current) {
      inputRef.current.dispatchEvent(new Event('focus'));
      inputRef.current.dispatchEvent(new Event('blur'));
    }
    await waitFor(() => expect(result.current.focused).toBeFalsy());
  });

  it('should clean up event listeners on unmount', () => {
    const { unmount } = renderHook(() => useInputFocus({ inputRef }));
    let removeEventListenerSpy;
    if (inputRef.current) {
      removeEventListenerSpy = vi.spyOn(inputRef.current, 'removeEventListener');
    }
    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith('focus', expect.any(Function));
    expect(removeEventListenerSpy).toHaveBeenCalledWith('blur', expect.any(Function));
  });
});
