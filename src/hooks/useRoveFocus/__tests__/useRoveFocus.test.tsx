import { act, renderHook } from '@testing-library/react-hooks';
import React from 'react';

import { useRoveFocus } from '../useRoveFocus';

describe('useRoveFocus', () => {
  it('should not update currentFocus when the key triggered differs from Arrows or Tab', () => {
    const element = document.createElement('div');
    jest.spyOn(React, 'useRef').mockReturnValue({ current: element });
    const { result } = renderHook(() => useRoveFocus({ size: 5 }));

    act(() => {
      const event = new KeyboardEvent('keydown', { key: 'Espace' });
      element.dispatchEvent(event);
    });

    expect(result.current[0]).toBe(0);
  });

  it('should call keyDownMove with currentValue when key ArrowDown is triggered when provided', () => {
    const mockKeyMove = jest.fn();
    const element = document.createElement('div');
    jest.spyOn(React, 'useRef').mockReturnValue({ current: element });
    renderHook(() =>
      useRoveFocus({ size: 5, keyDownMove: currentValue => mockKeyMove(currentValue) })
    );

    act(() => {
      const event = new KeyboardEvent('keydown', { key: 'ArrowDown' });
      element.dispatchEvent(event);
    });

    expect(mockKeyMove).toHaveBeenCalledWith(0);
  });

  it('should update currentFocus when key ArrowDown is triggered (+1)', () => {
    const element = document.createElement('div');
    jest.spyOn(React, 'useRef').mockReturnValue({ current: element });
    const { result } = renderHook(() => useRoveFocus({ size: 5 }));

    act(() => {
      const event = new KeyboardEvent('keydown', { key: 'ArrowDown' });
      element.dispatchEvent(event);
    });

    expect(result.current[0]).toBe(1);
  });

  it('should update currentFocus to the first position when key ArrowDown is triggered, and last position was size-1 (+1)', () => {
    const element = document.createElement('div');
    jest.spyOn(React, 'useRef').mockReturnValue({ current: element });
    const { result } = renderHook(() => useRoveFocus({ size: 5, currentFocusSelected: 4 }));

    act(() => {
      const event = new KeyboardEvent('keydown', { key: 'ArrowDown' });
      element.dispatchEvent(event);
    });

    expect(result.current[0]).toBe(0);
  });

  it('should call keyUpMove with currentValue when key ArrowUp is triggered when provided', () => {
    const mockKeyMove = jest.fn();
    const element = document.createElement('div');
    jest.spyOn(React, 'useRef').mockReturnValue({ current: element });
    renderHook(() =>
      useRoveFocus({ size: 5, keyUpMove: currentValue => mockKeyMove(currentValue) })
    );

    act(() => {
      const event = new KeyboardEvent('keydown', { key: 'ArrowUp' });
      element.dispatchEvent(event);
    });

    expect(mockKeyMove).toHaveBeenCalledWith(0);
  });

  it('should update currentFocus when key ArrowUp is triggered (-1)', () => {
    const element = document.createElement('div');
    jest.spyOn(React, 'useRef').mockReturnValue({ current: element });
    const { result } = renderHook(() => useRoveFocus({ size: 5, currentFocusSelected: 4 }));

    act(() => {
      const event = new KeyboardEvent('keydown', { key: 'ArrowUp' });
      element.dispatchEvent(event);
    });

    expect(result.current[0]).toBe(3);
  });

  it('should update currentFocus to the last position when key ArrowUp is triggered, and last position was 0 (-1)', () => {
    const element = document.createElement('div');
    jest.spyOn(React, 'useRef').mockReturnValue({ current: element });
    const { result } = renderHook(() => useRoveFocus({ size: 5, currentFocusSelected: 0 }));

    act(() => {
      const event = new KeyboardEvent('keydown', { key: 'ArrowUp' });
      element.dispatchEvent(event);
    });

    expect(result.current[0]).toBe(4);
  });

  it('should call keyLeftMove with currentValue when key ArrowLeft is triggered when provided', () => {
    const mockKeyMove = jest.fn();
    const element = document.createElement('div');
    jest.spyOn(React, 'useRef').mockReturnValue({ current: element });
    renderHook(() =>
      useRoveFocus({ size: 5, keyLeftMove: currentValue => mockKeyMove(currentValue) })
    );

    act(() => {
      const event = new KeyboardEvent('keydown', { key: 'ArrowLeft' });
      element.dispatchEvent(event);
    });

    expect(mockKeyMove).toHaveBeenCalledWith(0);
  });

  it('should update currentFocus when key ArrowLeft is triggered (-1)', () => {
    const element = document.createElement('div');
    jest.spyOn(React, 'useRef').mockReturnValue({ current: element });
    const { result } = renderHook(() => useRoveFocus({ size: 5, currentFocusSelected: 4 }));

    act(() => {
      const event = new KeyboardEvent('keydown', { key: 'ArrowLeft' });
      element.dispatchEvent(event);
    });

    expect(result.current[0]).toBe(3);
  });

  it('should update currentFocus to the last position when key ArrowLeft is triggered, and last position was 0 (-1)', () => {
    const element = document.createElement('div');
    jest.spyOn(React, 'useRef').mockReturnValue({ current: element });
    const { result } = renderHook(() => useRoveFocus({ size: 5, currentFocusSelected: 0 }));

    act(() => {
      const event = new KeyboardEvent('keydown', { key: 'ArrowLeft' });
      element.dispatchEvent(event);
    });

    expect(result.current[0]).toBe(4);
  });

  it('should call keyRightMove with currentValue when key ArrowRight is triggered when provided', () => {
    const mockKeyMove = jest.fn();
    const element = document.createElement('div');
    jest.spyOn(React, 'useRef').mockReturnValue({ current: element });
    renderHook(() =>
      useRoveFocus({ size: 5, keyRightMove: currentValue => mockKeyMove(currentValue) })
    );

    act(() => {
      const event = new KeyboardEvent('keydown', { key: 'ArrowRight' });
      element.dispatchEvent(event);
    });

    expect(mockKeyMove).toHaveBeenCalledWith(0);
  });

  it('should update currentFocus when key ArrowRight is triggered (+1)', () => {
    const element = document.createElement('div');
    jest.spyOn(React, 'useRef').mockReturnValue({ current: element });
    const { result } = renderHook(() => useRoveFocus({ size: 5 }));

    act(() => {
      const event = new KeyboardEvent('keydown', { key: 'ArrowRight' });
      element.dispatchEvent(event);
    });

    expect(result.current[0]).toBe(1);
  });

  it('should update currentFocus to the first position when key ArrowRight is triggered, and last position was size-1 (+1)', () => {
    const element = document.createElement('div');
    jest.spyOn(React, 'useRef').mockReturnValue({ current: element });
    const { result } = renderHook(() => useRoveFocus({ size: 5, currentFocusSelected: 4 }));

    act(() => {
      const event = new KeyboardEvent('keydown', { key: 'ArrowRight' });
      element.dispatchEvent(event);
    });

    expect(result.current[0]).toBe(0);
  });

  it('should call keyTabMove with currentValue when key Tab is triggered when provided', () => {
    const mockKeyMove = jest.fn();
    const element = document.createElement('div');
    jest.spyOn(React, 'useRef').mockReturnValue({ current: element });
    renderHook(() =>
      useRoveFocus({ size: 5, keyTabMove: currentValue => mockKeyMove(currentValue) })
    );

    act(() => {
      const event = new KeyboardEvent('keydown', { key: 'Tab' });
      element.dispatchEvent(event);
    });

    expect(mockKeyMove).toHaveBeenCalledWith(0);
  });

  it('should update currentFocus when key Tab is triggered (+1)', () => {
    const element = document.createElement('div');
    jest.spyOn(React, 'useRef').mockReturnValue({ current: element });
    const { result } = renderHook(() => useRoveFocus({ size: 5, currentFocusSelected: 1 }));

    act(() => {
      const event = new KeyboardEvent('keydown', { key: 'Tab' });
      element.dispatchEvent(event);
    });

    expect(result.current[0]).toBe(2);
  });

  it('should update currentFocus two movements (keyTabMove + 1) when key Tab is triggered and the currentFocus is 0', () => {
    const element = document.createElement('div');
    jest.spyOn(React, 'useRef').mockReturnValue({ current: element });
    const { result } = renderHook(() => useRoveFocus({ size: 5, currentFocusSelected: 0 }));

    act(() => {
      const event = new KeyboardEvent('keydown', { key: 'Tab' });
      element.dispatchEvent(event);
    });

    expect(result.current[0]).toBe(2);
  });

  it('should update keep the currentFocus when key Tab is triggered but it is the last position', () => {
    const element = document.createElement('div');
    jest.spyOn(React, 'useRef').mockReturnValue({ current: element });
    const { result } = renderHook(() => useRoveFocus({ size: 5, currentFocusSelected: 4 }));

    act(() => {
      const event = new KeyboardEvent('keydown', { key: 'Tab' });
      element.dispatchEvent(event);
    });

    expect(result.current[0]).toBe(4);
  });
});
