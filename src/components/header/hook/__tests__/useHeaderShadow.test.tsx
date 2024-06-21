import { fireEvent } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import React, { createRef } from 'react';

import { useHeaderShadow } from '../useHeaderShadow';

const mockRef = {
  current: {
    style: {
      setProperty: jest.fn(),
      removeProperty: jest.fn(),
    },
  },
};

describe('useHeaderShadow', () => {
  beforeAll(() => {
    window.innerHeight = 100;
  });
  it('should return a ref', () => {
    const { result } = renderHook(() => useHeaderShadow({ ref: undefined, shadow: {} }));
    expect(result.current.headerRef).toBeDefined();
  });

  it('should no set box-shadow when shadow is not defined', () => {
    const innerRefMock = jest.spyOn(React, 'useRef').mockReturnValue(mockRef);
    const ref = createRef<HTMLDivElement>();

    renderHook(() => useHeaderShadow({ ref, shadow: {} }));

    expect(mockRef.current.style.removeProperty).toHaveBeenCalledWith('top');
    expect(mockRef.current.style.removeProperty).toHaveBeenCalledWith('position');

    innerRefMock.mockRestore();
  });

  it('should set box-shadow style when scroll percentage is greater than showShadowFrom', () => {
    const innerRefMock = jest.spyOn(React, 'useRef').mockReturnValue(mockRef);
    const documentBodyScrollHeight = jest
      .spyOn(document.body, 'scrollHeight', 'get')
      .mockReturnValue(100);
    const addEventListenerSpy = jest.spyOn(window, 'addEventListener');
    const ref = createRef<HTMLDivElement>();

    renderHook(() =>
      useHeaderShadow({
        ref,
        shadow: { showShadowFrom: 10, boxShadow: '10px 5px 5px black' },
      })
    );

    fireEvent.scroll(window, { scrollY: 15 });

    expect(addEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
    addEventListenerSpy.mockRestore();
    innerRefMock.mockRestore();
    documentBodyScrollHeight.mockRestore();
  });
});
