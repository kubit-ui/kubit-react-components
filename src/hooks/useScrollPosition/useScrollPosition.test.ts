// vendors
import { fireEvent } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
// mock hooks
import React from 'react';

// hook
import { useScrollPosition } from './useScrollPosition';

describe('Test on useScrollPosition', () => {
  test('Should return the correctly data type', () => {
    // mock use state
    const setScrollPosition = jest.fn();
    const mockUseState: () => [unknown, React.Dispatch<unknown>] = () => [1, setScrollPosition];
    jest.spyOn(React, 'useState').mockImplementation(mockUseState);
    // render hook
    const { result } = renderHook(() => useScrollPosition());
    // expect value
    expect(result.current).toEqual(expect.any(Number));
    // when scroll, expect value to have change
    fireEvent.scroll(window);
    expect(setScrollPosition).toHaveBeenCalled();
  });
});
