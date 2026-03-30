import { act, renderHook } from '@testing-library/react';

import { usePopoverLifecycle } from '../../hooks/usePopoverLifecycle';

// Mock focus handlers

// Mock the dependencies
vi.mock('@/lib/hooks/useSwipeDown/utils/convertDurationToNumber', () => ({
  convertDurationToNumber: vi.fn((duration: string) => parseInt(duration, 10)),
}));

vi.mock('../../utils/willChange.utils', () => ({
  manageWillChange: vi.fn(),
}));

vi.mock('@/utils/focusHandlers/focusHandlers', () => ({
  focusFirstDescendantV2: vi.fn(),
}));

vi.mock('@/hooks/useScrollBlock/useScrollBlock', () => ({
  useScrollBlock: () => ({
    allowScroll: vi.fn(),
    blockScroll: vi.fn(),
  }),
}));

describe('usePopoverLifecycle', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it('should initialize with correct states', () => {
    // Test closed state
    const { result: closedResult } = renderHook(() =>
      usePopoverLifecycle({
        animationExitDuration: 500,
        open: false,
      }),
    );

    expect(closedResult.current.isVisible).toBe(false);
    expect(closedResult.current.isClosing).toBe(false);

    // Test open state
    const { result: openResult } = renderHook(() =>
      usePopoverLifecycle({
        animationExitDuration: 500,
        open: true,
      }),
    );

    expect(openResult.current.isVisible).toBe(true);
    expect(openResult.current.isClosing).toBe(false);
  });

  it('should handle opening transition correctly', () => {
    const { rerender, result } = renderHook(
      ({ open }) =>
        usePopoverLifecycle({
          animationExitDuration: 500,
          open,
        }),
      { initialProps: { open: false } },
    );

    expect(result.current.isVisible).toBe(false);

    // Open the popover
    rerender({ open: true });

    expect(result.current.isVisible).toBe(true);
    expect(result.current.isClosing).toBe(false);
  });

  it('should handle closing transitions correctly', () => {
    // Test with animations enabled
    const { rerender: rerenderAnimated, result: resultAnimated } = renderHook(
      ({ open }) =>
        usePopoverLifecycle({
          animationExitDuration: 500,
          disableAnimations: false,
          open,
        }),
      { initialProps: { open: true } },
    );

    rerenderAnimated({ open: false });
    expect(resultAnimated.current.isClosing).toBe(true);
    expect(resultAnimated.current.isVisible).toBe(true);

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(resultAnimated.current.isVisible).toBe(false);
    expect(resultAnimated.current.isClosing).toBe(false);

    // Test with animations disabled
    const { rerender: rerenderDisabled, result: resultDisabled } = renderHook(
      ({ open }) =>
        usePopoverLifecycle({
          animationExitDuration: 500,
          disableAnimations: true,
          open,
        }),
      { initialProps: { open: true } },
    );

    rerenderDisabled({ open: false });
    expect(resultDisabled.current.isVisible).toBe(false);
    expect(resultDisabled.current.isClosing).toBe(false);
  });

  it('should handle string animation duration and rapid transitions', () => {
    // Test string duration
    const { rerender, result } = renderHook(
      ({ open }) =>
        usePopoverLifecycle({
          animationExitDuration: '300ms',
          disableAnimations: false,
          open,
        }),
      { initialProps: { open: true } },
    );

    rerender({ open: false });
    expect(result.current.isClosing).toBe(true);

    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(result.current.isVisible).toBe(false);

    // Test rapid transitions
    rerender({ open: true });
    expect(result.current.isVisible).toBe(true);

    rerender({ open: false });
    expect(result.current.isClosing).toBe(true);

    // Open again before closing completes
    rerender({ open: true });
    expect(result.current.isVisible).toBe(true);
    expect(result.current.isClosing).toBe(false);
  });

  it('should clean up timeouts on unmount', () => {
    const { rerender, result, unmount } = renderHook(
      ({ open }) =>
        usePopoverLifecycle({
          animationExitDuration: 500,
          disableAnimations: false,
          open,
        }),
      { initialProps: { open: true } },
    );

    // Start closing
    rerender({ open: false });
    expect(result.current.isClosing).toBe(true);

    // Unmount before animation completes
    unmount();

    // Should not throw errors or cause memory leaks
    act(() => {
      vi.advanceTimersByTime(500);
    });
  });

  it('should provide stable ref objects across renders', () => {
    const { rerender, result } = renderHook(() => usePopoverLifecycle({}));

    const initialRefs = {
      handleInnerRef: result.current.handleInnerRef,
      popoverRef: result.current.popoverRef,
    };

    rerender();

    expect(result.current.popoverRef).toBe(initialRefs.popoverRef);
    expect(result.current.handleInnerRef).toBeTypeOf('function');
  });

  it('should provide handleInnerRef function', () => {
    const { result } = renderHook(() => usePopoverLifecycle({}));

    expect(result.current.handleInnerRef).toBeTypeOf('function');
  });

  it('should handle opening popover with element', () => {
    const { result } = renderHook(() => usePopoverLifecycle({}));
    const mockElement = document.createElement('div');

    result.current.handleInnerRef(mockElement);

    expect(result.current.popoverRef.current).toBe(mockElement);
  });

  it('should handle closing popover with null', () => {
    const { result } = renderHook(() => usePopoverLifecycle({}));
    const mockElement = document.createElement('div');

    // First open
    result.current.handleInnerRef(mockElement);
    expect(result.current.popoverRef.current).toBe(mockElement);

    // Then close
    result.current.handleInnerRef(null);
    expect(result.current.popoverRef.current).toBe(null);
  });

  it('should handle configuration options', () => {
    const { result } = renderHook(() =>
      usePopoverLifecycle({
        disableAutoFocusFirstDescendant: true,
        disableAutoFocusFirstDescendantAfterClose: true,
        disableRestoreFocusAfterClose: true,
        disableScrollBackground: true,
        preventScrollOnCloseFocus: true,
      }),
    );

    expect(result.current.popoverRef.current).toBe(null);
    expect(result.current.handleInnerRef).toBeTypeOf('function');
  });
});
