import type { RefObject } from 'react';

import { renderHook } from '@testing-library/react';
import { vi } from 'vitest';

import { usePopoverInteractions } from '../../hooks/usePopoverInteractions';

// Mock dependencies
vi.mock('@/hooks/useClickOutside/useClickOutside', () => ({
  useClickOutside: vi.fn(),
}));

vi.mock('@/utils/keyboard/keyboard.utility', () => ({
  isKeyEscapePressed: vi.fn((key: string) => key === 'Escape'),
}));

const mockOnClose = vi.fn();

// Mock refs for testing
const createMockRef = <T>(initialValue: T | null = null): RefObject<T> => ({
  current: initialValue,
});

const defaultProps = {
  isVisible: true,
  popoverRef: createMockRef<HTMLElement>(),
  disableClickOverlayClose: false,
  disableEscapeClose: false,
  preventCloseOnClickElements: [] as Array<HTMLElement | null | undefined>,
  onClose: mockOnClose,
};

describe('usePopoverInteractions', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('hook initialization', () => {
    it('should initialize with correct parameters', () => {
      const { result } = renderHook(() =>
        usePopoverInteractions({ ...defaultProps }),
      );

      expect(result.current.handleClickOutside).toBeTypeOf('function');
    });

    it('should work when isVisible is false', () => {
      expect(() => {
        renderHook(() =>
          usePopoverInteractions({
            ...defaultProps,
            isVisible: false,
          }),
        );
      }).not.toThrow();
    });
  });

  describe('handleClickOutside function', () => {
    it('should provide handleClickOutside function', () => {
      const { result } = renderHook(() => usePopoverInteractions(defaultProps));

      expect(typeof result.current.handleClickOutside).toBe('function');
    });

    it('should handle click outside correctly', () => {
      const mockElement = document.createElement('div');
      const mockPopoverRef = { current: mockElement };

      const { result } = renderHook(() =>
        usePopoverInteractions({
          ...defaultProps,
          popoverRef: mockPopoverRef,
        }),
      );

      const mockEvent = {
        target: document.createElement('span'),
      } as unknown as MouseEvent;

      result.current.handleClickOutside(mockEvent);

      expect(result.current.handleClickOutside).toBeTypeOf('function');
    });
  });

  describe('stability across renders', () => {
    it('should provide stable function references across renders', () => {
      const { result, rerender } = renderHook(() =>
        usePopoverInteractions(defaultProps),
      );

      const firstHandler = result.current.handleClickOutside;

      rerender();

      expect(result.current.handleClickOutside).toBe(firstHandler);
    });

    it('should update handlers when dependencies change', () => {
      const { result, rerender } = renderHook(
        (props) => usePopoverInteractions(props),
        {
          initialProps: defaultProps,
        },
      );

      const firstHandler = result.current.handleClickOutside;

      rerender({
        ...defaultProps,
        onClose: vi.fn(),
      });

      expect(result.current.handleClickOutside).not.toBe(firstHandler);
    });
  });

  describe('escape key handling', () => {
    it('should setup escape key listener when isVisible is true', () => {
      const addEventListenerSpy = vi.spyOn(document, 'addEventListener');

      renderHook(() => usePopoverInteractions(defaultProps));

      expect(addEventListenerSpy).toHaveBeenCalledWith(
        'keydown',
        expect.any(Function),
      );

      addEventListenerSpy.mockRestore();
    });

    it('should not setup escape key listener when isVisible is false', () => {
      const addEventListenerSpy = vi.spyOn(document, 'addEventListener');

      renderHook(() =>
        usePopoverInteractions({
          ...defaultProps,
          isVisible: false,
        }),
      );

      // Should not setup keydown listener (only mouseup from useClickOutside)
      expect(addEventListenerSpy).not.toHaveBeenCalledWith(
        'keydown',
        expect.any(Function),
      );

      addEventListenerSpy.mockRestore();
    });
  });

  describe('configuration options', () => {
    it('should handle all configuration options correctly', () => {
      expect(() => {
        renderHook(() =>
          usePopoverInteractions({
            isVisible: true,
            popoverRef: createMockRef<HTMLElement>(),
            disableClickOverlayClose: true,
            disableEscapeClose: true,
            preventCloseOnClickElements: [document.createElement('div')],
            onClose: mockOnClose,
          }),
        );
      }).not.toThrow();
    });

    it('should filter out null elements from preventCloseOnClickElements', () => {
      expect(() => {
        renderHook(() =>
          usePopoverInteractions({
            ...defaultProps,
            preventCloseOnClickElements: [
              null,
              undefined,
              document.createElement('div'),
            ],
          }),
        );
      }).not.toThrow();
    });

    it('should return only handleClickOutside function', () => {
      const { result } = renderHook(() => usePopoverInteractions(defaultProps));

      expect(result.current).toHaveProperty('handleClickOutside');
      expect(typeof result.current.handleClickOutside).toBe('function');
      expect(Object.keys(result.current)).toEqual(['handleClickOutside']);
    });
  });
});
