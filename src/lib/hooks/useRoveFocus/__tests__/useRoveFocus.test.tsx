// eslint-disable-next-line no-restricted-imports
import React from 'react';

import { act, renderHook } from '@testing-library/react';

import { useRoveFocus } from '../useRoveFocus';

describe('useRoveFocus', () => {
  it('should not update currentFocus when the key triggered differs from Arrows or Tab', () => {
    const element = document.createElement('button');
    element.innerHTML = 'Button';
    element.type = 'button';
    vi.spyOn(React, 'useRef').mockReturnValue({ current: element });
    const { result } = renderHook(() => useRoveFocus({ size: 5 }));

    act(() => {
      const event = new KeyboardEvent('keydown', { key: 'Espace' });
      element.dispatchEvent(event);
    });

    expect(result.current[0]).toBe(0);
    expect(document.body).toHTMLValidate();
  });

  // it('should call keyDownMove with currentValue when key ArrowDown is triggered when provided', () => {
  //   const mockKeyMove = vi.fn();
  //   const element = document.createElement('button');
  //   element.innerHTML = 'Button';
  //   element.type = 'button';
  //   vi.spyOn(React, 'useRef').mockReturnValue({ current: element });

  //   renderHook(() =>
  //     useRoveFocus({ size: 5, keyDownMove: currentValue => mockKeyMove(currentValue) })
  //   );

  //   act(() => {
  //     const event = new KeyboardEvent('keydown', { key: 'ArrowDown' });
  //     element.dispatchEvent(event);
  //   });

  //   expect(mockKeyMove).toHaveBeenCalledWith(0);
  // });

  // it('should update currentFocus to the next position when key ArrowDown is triggered', () => {
  //   const element = document.createElement('div');
  //   const button = document.createElement('button');
  //   button.innerHTML = 'Button';
  //   button.type = 'button';
  //   element.appendChild(button);

  //   vi.spyOn(React, 'useRef').mockReturnValue({ current: element });

  //   const { result } = renderHook(() => useRoveFocus({ size: 5 }));

  //   act(() => {
  //     const event = new KeyboardEvent('keydown', { key: 'ArrowDown' });
  //     button.dispatchEvent(event);
  //   });

  //   expect(result.current[0]).toBe(1);
  //   expect(document.body).toHTMLValidate();
  // });

  // it('should update currentFocus to the first position when key ArrowDown is triggered, and last position was size-1 (+1)', () => {
  //   const element = document.createElement('button');
  //   element.innerHTML = 'Button';
  //   element.type = 'button';
  //   vi.spyOn(React, 'useRef').mockReturnValue({ current: element });
  //   const { result } = renderHook(() => useRoveFocus({ size: 5, currentFocusSelected: 4 }));

  //   act(() => {
  //     const event = new KeyboardEvent('keydown', { key: 'ArrowDown' });
  //     element.dispatchEvent(event);
  //   });

  //   expect(result.current[0]).toBe(0);
  //   expect(document.body).toHTMLValidate();
  // });

  // it('should call keyUpMove with currentValue when key ArrowUp is triggered when provided', () => {
  //   const mockKeyMove = vi.fn();
  //   const element = document.createElement('button');
  //   element.innerHTML = 'Button';
  //   element.type = 'button';
  //   vi.spyOn(React, 'useRef').mockReturnValue({ current: element });
  //   renderHook(() =>
  //     useRoveFocus({ size: 5, keyUpMove: currentValue => mockKeyMove(currentValue) })
  //   );

  //   act(() => {
  //     const event = new KeyboardEvent('keydown', { key: 'ArrowUp' });
  //     element.dispatchEvent(event);
  //   });

  //   expect(mockKeyMove).toHaveBeenCalledWith(0);
  //   expect(document.body).toHTMLValidate();
  // });

  // it('should update currentFocus when key ArrowUp is triggered (-1)', () => {
  //   const element = document.createElement('button');
  //   element.innerHTML = 'Button';
  //   element.type = 'button';
  //   vi.spyOn(React, 'useRef').mockReturnValue({ current: element });
  //   const { result } = renderHook(() => useRoveFocus({ size: 5, currentFocusSelected: 4 }));

  //   act(() => {
  //     const event = new KeyboardEvent('keydown', { key: 'ArrowUp' });
  //     element.dispatchEvent(event);
  //   });

  //   expect(result.current[0]).toBe(3);
  //   expect(document.body).toHTMLValidate();
  // });

  // it('should update currentFocus to the last position when key ArrowUp is triggered, and last position was 0 (-1)', () => {
  //   const element = document.createElement('button');
  //   element.innerHTML = 'Button';
  //   element.type = 'button';
  //   vi.spyOn(React, 'useRef').mockReturnValue({ current: element });
  //   const { result } = renderHook(() => useRoveFocus({ size: 5, currentFocusSelected: 0 }));

  //   act(() => {
  //     const event = new KeyboardEvent('keydown', { key: 'ArrowUp' });
  //     element.dispatchEvent(event);
  //   });

  //   expect(result.current[0]).toBe(4);
  //   expect(document.body).toHTMLValidate();
  // });

  // it('should call keyLeftMove with currentValue when key ArrowLeft is triggered when provided', () => {
  //   const mockKeyMove = vi.fn();
  //   const element = document.createElement('button');
  //   element.innerHTML = 'Button';
  //   element.type = 'button';
  //   vi.spyOn(React, 'useRef').mockReturnValue({ current: element });
  //   renderHook(() =>
  //     useRoveFocus({ size: 5, keyLeftMove: currentValue => mockKeyMove(currentValue) })
  //   );

  //   act(() => {
  //     const event = new KeyboardEvent('keydown', { key: 'ArrowLeft' });
  //     element.dispatchEvent(event);
  //   });

  //   expect(mockKeyMove).toHaveBeenCalledWith(0);
  //   expect(document.body).toHTMLValidate();
  // });

  // it('should update currentFocus when key ArrowLeft is triggered (-1)', () => {
  //   const element = document.createElement('button');
  //   element.innerHTML = 'Button';
  //   element.type = 'button';
  //   vi.spyOn(React, 'useRef').mockReturnValue({ current: element });
  //   const { result } = renderHook(() => useRoveFocus({ size: 5, currentFocusSelected: 4 }));

  //   act(() => {
  //     const event = new KeyboardEvent('keydown', { key: 'ArrowLeft' });
  //     element.dispatchEvent(event);
  //   });

  //   expect(result.current[0]).toBe(3);
  //   expect(document.body).toHTMLValidate();
  // });

  // it('should update currentFocus to the last position when key ArrowLeft is triggered, and last position was 0 (-1)', () => {
  //   const element = document.createElement('button');
  //   element.innerHTML = 'Button';
  //   element.type = 'button';
  //   vi.spyOn(React, 'useRef').mockReturnValue({ current: element });
  //   const { result } = renderHook(() => useRoveFocus({ size: 5, currentFocusSelected: 0 }));

  //   act(() => {
  //     const event = new KeyboardEvent('keydown', { key: 'ArrowLeft' });
  //     element.dispatchEvent(event);
  //   });

  //   expect(result.current[0]).toBe(4);
  //   expect(document.body).toHTMLValidate();
  // });

  // it('should call keyRightMove with currentValue when key ArrowRight is triggered when provided', () => {
  //   const mockKeyMove = vi.fn();
  //   const element = document.createElement('button');
  //   element.innerHTML = 'Button';
  //   element.type = 'button';
  //   vi.spyOn(React, 'useRef').mockReturnValue({ current: element });
  //   renderHook(() =>
  //     useRoveFocus({ size: 5, keyRightMove: currentValue => mockKeyMove(currentValue) })
  //   );

  //   act(() => {
  //     const event = new KeyboardEvent('keydown', { key: 'ArrowRight' });
  //     element.dispatchEvent(event);
  //   });

  //   expect(mockKeyMove).toHaveBeenCalledWith(0);
  //   expect(document.body).toHTMLValidate();
  // });

  // it('should update currentFocus when key ArrowRight is triggered (+1)', () => {
  //   const element = document.createElement('button');
  //   element.innerHTML = 'Button';
  //   element.type = 'button';
  //   vi.spyOn(React, 'useRef').mockReturnValue({ current: element });
  //   const { result } = renderHook(() => useRoveFocus({ size: 5 }));

  //   act(() => {
  //     const event = new KeyboardEvent('keydown', { key: 'ArrowRight' });
  //     element.dispatchEvent(event);
  //   });

  //   expect(result.current[0]).toBe(1);
  //   expect(document.body).toHTMLValidate();
  // });

  // it('should update currentFocus to the first position when key ArrowRight is triggered, and last position was size-1 (+1)', () => {
  //   const element = document.createElement('button');
  //   element.innerHTML = 'Button';
  //   element.type = 'button';
  //   vi.spyOn(React, 'useRef').mockReturnValue({ current: element });
  //   const { result } = renderHook(() => useRoveFocus({ size: 5, currentFocusSelected: 4 }));

  //   act(() => {
  //     const event = new KeyboardEvent('keydown', { key: 'ArrowRight' });
  //     element.dispatchEvent(event);
  //   });

  //   expect(result.current[0]).toBe(0);
  //   expect(document.body).toHTMLValidate();
  // });

  // it('should call keyTabMove with currentValue when key Tab is triggered when provided', () => {
  //   const mockKeyMove = vi.fn();
  //   const element = document.createElement('button');
  //   element.innerHTML = 'Button';
  //   element.type = 'button';
  //   vi.spyOn(React, 'useRef').mockReturnValue({ current: element });
  //   renderHook(() =>
  //     useRoveFocus({ size: 5, keyTabMove: currentValue => mockKeyMove(currentValue) })
  //   );

  //   act(() => {
  //     const event = new KeyboardEvent('keydown', { key: 'Tab' });
  //     element.dispatchEvent(event);
  //   });

  //   expect(mockKeyMove).toHaveBeenCalledWith(0);
  //   expect(document.body).toHTMLValidate();
  // });

  // it('should update currentFocus when key Tab is triggered (+1)', () => {
  //   const element = document.createElement('button');
  //   element.innerHTML = 'Button';
  //   element.type = 'button';
  //   vi.spyOn(React, 'useRef').mockReturnValue({ current: element });
  //   const { result } = renderHook(() => useRoveFocus({ size: 5, currentFocusSelected: 1 }));

  //   act(() => {
  //     const event = new KeyboardEvent('keydown', { key: 'Tab' });
  //     element.dispatchEvent(event);
  //   });

  //   expect(result.current[0]).toBe(2);
  //   expect(document.body).toHTMLValidate();
  // });

  // it('should update currentFocus two movements (keyTabMove + 1) when key Tab is triggered and the currentFocus is 0', () => {
  //   const element = document.createElement('button');
  //   element.innerHTML = 'Button';
  //   element.type = 'button';
  //   vi.spyOn(React, 'useRef').mockReturnValue({ current: element });
  //   const { result } = renderHook(() => useRoveFocus({ size: 5, currentFocusSelected: 0 }));

  //   act(() => {
  //     const event = new KeyboardEvent('keydown', { key: 'Tab' });
  //     element.dispatchEvent(event);
  //   });

  //   expect(result.current[0]).toBe(2);
  //   expect(document.body).toHTMLValidate();
  // });

  it('should update keep the currentFocus when key Tab is triggered but it is the last position', () => {
    const element = document.createElement('button');
    element.innerHTML = 'Button';
    element.type = 'button';
    vi.spyOn(React, 'useRef').mockReturnValue({ current: element });
    const { result } = renderHook(() =>
      useRoveFocus({ currentFocusSelected: 4, size: 5 }),
    );

    act(() => {
      const event = new KeyboardEvent('keydown', { key: 'Tab' });
      element.dispatchEvent(event);
    });

    expect(result.current[0]).toBe(4);
    expect(document.body).toHTMLValidate();
  });
});
