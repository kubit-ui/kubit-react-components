import { fireEvent } from '@testing-library/dom';
import { renderHook } from '@testing-library/react';

import { useEscPressed } from '../useEscPressed';

describe('useEscPressed', () => {
  const mockRef = { current: document.createElement('div') };

  it('does not call onEscPress when ref is not set', async () => {
    const mockEscPress = vi.fn();
    const result = renderHook(() =>
      useEscPressed({ onEscPress: mockEscPress, ref: { current: null } }),
    );
    fireEvent.keyDown(mockRef.current, { key: 'Escape' });

    expect(mockEscPress).not.toHaveBeenCalled();
    expect(result).toBeDefined();
  });

  it('calls onEscPress when Escape is pressed', async () => {
    const mockEscPress = vi.fn();
    const result = renderHook(() =>
      useEscPressed({ onEscPress: mockEscPress, ref: mockRef }),
    );
    fireEvent.keyDown(mockRef.current, { key: 'Escape' });

    expect(mockEscPress).toHaveBeenCalled();
    expect(result).toBeDefined();
  });

  it('does not call onEscPress when another key is pressed', async () => {
    const mockEscPress = vi.fn();
    renderHook(() => useEscPressed({ onEscPress: mockEscPress, ref: mockRef }));
    fireEvent.keyDown(mockRef.current, { key: 'A' });

    expect(mockEscPress).not.toHaveBeenCalled();
  });
});
