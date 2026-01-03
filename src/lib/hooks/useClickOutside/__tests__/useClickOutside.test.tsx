import { createRef } from 'react';

import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';

import { useClickOutside } from '../useClickOutside';

describe('useClickOutside', () => {
  it('calls handler when click is outside element', async () => {
    // Arrange
    const handler = vi.fn();
    const ref = createRef<HTMLDivElement>();
    const { container } = render(<div ref={ref} />);

    // Act
    renderHook(() => useClickOutside(ref, handler));
    fireEvent.mouseUp(document);

    // Assert
    expect(handler).toHaveBeenCalledTimes(1);
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('does not call handler when click is within element', async () => {
    // Arrange
    const handler = vi.fn();
    const ref = createRef<HTMLDivElement>();
    const { container } = render(
      <div ref={ref} data-testid="element-testid" />,
    );

    // Act
    renderHook(() => useClickOutside(ref, handler));
    fireEvent.mouseUp(screen.getByTestId('element-testid'));

    // Assert
    expect(handler).not.toHaveBeenCalled();
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('does not call handler when click is within preventOnClickElements', async () => {
    // Arrange
    const handler = vi.fn();
    const ref = createRef<HTMLDivElement>();
    const refPreventClick = createRef<HTMLDivElement>();
    const { container } = render(
      <>
        <div ref={ref} data-testid="element-testid" />
        <div ref={refPreventClick} data-testid="element-prevent-click-testid" />
      </>,
    );

    // Act
    renderHook(() => useClickOutside(ref, handler, [refPreventClick.current]));
    fireEvent.mouseUp(screen.getByTestId('element-prevent-click-testid'));

    // Assert
    expect(handler).not.toHaveBeenCalled();
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('uses the latest handler without re-registering listeners', () => {
    // Arrange
    const ref = createRef<HTMLDivElement>();
    const handler1 = vi.fn();
    const handler2 = vi.fn();
    render(<div ref={ref} data-testid="element-testid" />);

    // Act - Initial render with handler1
    const { rerender } = renderHook(
      ({ callback }) => useClickOutside(ref, callback),
      { initialProps: { callback: handler1 } },
    );
    fireEvent.mouseUp(document);

    // Assert - handler1 should be called
    expect(handler1).toHaveBeenCalledTimes(1);
    expect(handler2).not.toHaveBeenCalled();

    // Act - Re-render with handler2
    rerender({ callback: handler2 });
    fireEvent.mouseUp(document);

    // Assert - handler2 should be called, handler1 should not be called again
    expect(handler1).toHaveBeenCalledTimes(1);
    expect(handler2).toHaveBeenCalledTimes(1);
  });

  it('properly cleans up listeners on unmount', () => {
    // Arrange
    const handler = vi.fn();
    const ref = createRef<HTMLDivElement>();
    render(<div ref={ref} />);
    const removeEventListenerSpy = vi.spyOn(document, 'removeEventListener');

    // Act
    const { unmount } = renderHook(() => useClickOutside(ref, handler));
    unmount();
    fireEvent.mouseUp(document);

    // Assert
    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'mouseup',
      expect.any(Function),
      true,
    );
    expect(handler).not.toHaveBeenCalled();

    // Cleanup
    removeEventListenerSpy.mockRestore();
  });
});
