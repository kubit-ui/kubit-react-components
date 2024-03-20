import { fireEvent } from '@testing-library/react';
import { act, renderHook } from '@testing-library/react-hooks';

import { useKeyPressed } from './useKeyPressed';

describe('useKeyPressed hook suite test', () => {
  it('isKeyPressed', () => {
    const { result } = renderHook(() => {
      const keyPressed = useKeyPressed('Enter');
      return { keyPressed };
    });

    expect(result.current.keyPressed).toBe(false);
  });

  it('useKeyPressed - keyPressed', () => {
    const { result } = renderHook(() => {
      const keyPressed = useKeyPressed('Enter');
      return { keyPressed };
    });

    act(() => {
      fireEvent.keyDown(window, { key: 'Enter', code: 'Enter' });
    });
    expect(result.current.keyPressed).toBe(true);
    act(() => {
      fireEvent.keyUp(window, { key: 'Enter', code: 'Enter' });
    });
    expect(result.current.keyPressed).toBe(false);
  });
});
