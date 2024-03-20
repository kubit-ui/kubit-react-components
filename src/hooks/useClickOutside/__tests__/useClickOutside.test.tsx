import { fireEvent, render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import React, { createRef } from 'react';

// hook
import { useClickOutside } from '../useClickOutside';

describe('useClickOutside', () => {
  it('calls handler when click is outside element', () => {
    // Arrange
    const handler = jest.fn();
    const ref = createRef<HTMLDivElement>();
    render(<div ref={ref}></div>);

    // Act
    renderHook(() => useClickOutside(ref, handler));
    fireEvent.mouseUp(document);

    // Assert
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('does not calls handler when click is within element', () => {
    // Arrange
    const handler = jest.fn();
    const ref = createRef<HTMLDivElement>();
    render(<div ref={ref} data-testid="element-testid"></div>);

    // Act
    renderHook(() => useClickOutside(ref, handler));
    fireEvent.mouseUp(screen.getByTestId('element-testid'));

    //  Assert
    expect(handler).not.toHaveBeenCalled();
  });

  it('does not calls handler when click is whitin preventOnClickElements', () => {
    // Arrange
    const handler = jest.fn();
    const ref = createRef<HTMLDivElement>();
    const refPreventClick = createRef<HTMLDivElement>();
    render(
      <>
        <div ref={ref} data-testid="element-testid" />
        <div ref={refPreventClick} data-testid="element-prevent-click-testid" />
      </>
    );

    // Act
    renderHook(() => useClickOutside(ref, handler, [refPreventClick.current]));
    fireEvent.mouseUp(screen.getByTestId('element-prevent-click-testid'));

    //  Assert
    expect(handler).not.toHaveBeenCalled();
  });
});
