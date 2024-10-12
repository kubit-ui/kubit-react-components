import { fireEvent } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import { useEscPressedV2 } from './useEscPressedV2';

describe('useEscPressedV2', () => {
  const mockRef = { current: document.createElement('div') };

  it('does not call onEscPress when ref is not set', () => {
    const mockEscPress = jest.fn();
    renderHook(() => useEscPressedV2({ ref: { current: null }, onEscPress: mockEscPress }));
    fireEvent.keyDown(mockRef.current, { key: 'Escape' });

    expect(mockEscPress).not.toHaveBeenCalled();
  });

  it('calls onEscPress when Escape is pressed', () => {
    const mockEscPress = jest.fn();
    renderHook(() => useEscPressedV2({ ref: mockRef, onEscPress: mockEscPress }));
    fireEvent.keyDown(mockRef.current, { key: 'Escape' });

    expect(mockEscPress).toHaveBeenCalled();
  });

  it('does not call onEscPress when another key is pressed', () => {
    const mockEscPress = jest.fn();
    renderHook(() => useEscPressedV2({ ref: mockRef, onEscPress: mockEscPress }));
    fireEvent.keyDown(mockRef.current, { key: 'A' });

    expect(mockEscPress).not.toHaveBeenCalled();
  });
});
