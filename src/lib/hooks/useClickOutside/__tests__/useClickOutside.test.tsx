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
});
