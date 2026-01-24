import { act, renderHook } from '@testing-library/react';

import { useRoveFocus } from '../useRoveFocus';

describe('useRoveFocus', () => {
  describe('Basic functionality', () => {
    it('should initialize with default currentFocusSelected', () => {
      const { result } = renderHook(() => useRoveFocus({ size: 5 }));
      expect(result.current[0]).toBe(0);
    });

    it('should initialize with custom currentFocusSelected', () => {
      const { result } = renderHook(() =>
        useRoveFocus({ currentFocusSelected: 3, size: 5 }),
      );
      expect(result.current[0]).toBe(3);
    });

    it('should provide ref object', () => {
      const { result } = renderHook(() => useRoveFocus({ size: 5 }));
      expect(result.current[2]).toBeDefined();
      expect(result.current[2].current).toBeNull();
    });

    it('should allow manual focus update via setCurrentFocus', () => {
      const { result } = renderHook(() => useRoveFocus({ size: 5 }));

      act(() => {
        result.current[1](3);
      });

      expect(result.current[0]).toBe(3);
    });

    it('should update focus when setCurrentFocus is called with different values', () => {
      const { result } = renderHook(() => useRoveFocus({ size: 10 }));

      act(() => {
        result.current[1](5);
      });
      expect(result.current[0]).toBe(5);

      act(() => {
        result.current[1](7);
      });
      expect(result.current[0]).toBe(7);

      act(() => {
        result.current[1](0);
      });
      expect(result.current[0]).toBe(0);
    });

    it('should maintain ref object across renders', () => {
      const { rerender, result } = renderHook(() => useRoveFocus({ size: 5 }));
      const initialRef = result.current[2];

      rerender();

      expect(result.current[2]).toBe(initialRef);
    });
  });

  describe('Configuration options', () => {
    it('should accept null values for move functions', () => {
      expect(() => {
        renderHook(() =>
          useRoveFocus({
            keyDownMove: null,
            keyLeftMove: null,
            keyPageDownMove: null,
            keyPageUpMove: null,
            keyRightMove: null,
            keyTabMove: null,
            keyUpMove: null,
            size: 5,
          }),
        );
      }).not.toThrow();
    });

    it('should accept custom numeric values for move increments', () => {
      const { result } = renderHook(() =>
        useRoveFocus({
          keyDownMove: 2,
          keyUpMove: -3,
          size: 10,
        }),
      );

      expect(result.current[0]).toBe(0);
    });

    it('should accept custom functions for move logic', () => {
      const customMove = vi.fn((prevValue) => prevValue + 1);
      const { result } = renderHook(() =>
        useRoveFocus({
          keyDownMove: customMove,
          size: 10,
        }),
      );

      expect(result.current[0]).toBe(0);
    });
  });

  describe('State management', () => {
    it('should handle focus updates with boundaries', () => {
      const { result } = renderHook(() => useRoveFocus({ size: 5 }));

      act(() => {
        result.current[1](4);
      });
      expect(result.current[0]).toBe(4);

      act(() => {
        result.current[1](0);
      });
      expect(result.current[0]).toBe(0);
    });

    it('should allow setting focus to any valid index', () => {
      const { result } = renderHook(() => useRoveFocus({ size: 20 }));

      for (let i = 0; i < 20; i++) {
        act(() => {
          result.current[1](i);
        });
        expect(result.current[0]).toBe(i);
      }
    });
  });

  describe('Hook lifecycle', () => {
    it('should handle null element ref gracefully', () => {
      expect(() => {
        renderHook(() => useRoveFocus({ size: 5 }));
      }).not.toThrow();
    });

    it('should not throw when unmounting', () => {
      const { unmount } = renderHook(() => useRoveFocus({ size: 5 }));

      expect(() => {
        unmount();
      }).not.toThrow();
    });

    it('should handle re-renders without issues', () => {
      const { rerender, result } = renderHook(
        ({ size }) => useRoveFocus({ size }),
        { initialProps: { size: 5 } },
      );

      expect(result.current[0]).toBe(0);

      rerender({ size: 10 });

      expect(result.current[0]).toBe(0);
    });
  });

  describe('Return value structure', () => {
    it('should return array with currentFocus, setCurrentFocus, and ref', () => {
      const { result } = renderHook(() => useRoveFocus({ size: 5 }));

      expect(Array.isArray(result.current)).toBe(true);
      expect(result.current).toHaveLength(3);
      expect(typeof result.current[0]).toBe('number');
      expect(typeof result.current[1]).toBe('function');
      expect(typeof result.current[2]).toBe('object');
    });

    it('should provide a working setCurrentFocus function', () => {
      const { result } = renderHook(() => useRoveFocus({ size: 5 }));

      act(() => {
        result.current[1]((prev) => prev + 1);
      });

      expect(result.current[0]).toBe(1);
    });

    it('should provide ref with current property', () => {
      const { result } = renderHook(() => useRoveFocus({ size: 5 }));

      expect(result.current[2]).toHaveProperty('current');
    });
  });
});
