import { act, renderHook } from '@testing-library/react-hooks';

import { useChangeDimension } from '../useChangeDimension';

describe('useChangeDimension', () => {
  it('does not change dimensions when conditional is false', () => {
    const scrollableRef = { current: document.createElement('div') };
    const decorativeRef = { current: document.createElement('div') };

    const { result } = renderHook(() => useChangeDimension(scrollableRef, decorativeRef, false));

    expect(result.current).toBe(false);
  });

  it('does not change dimensions when scrollableRef is null', () => {
    const scrollableRef = { current: null };
    const decorativeRef = { current: document.createElement('div') };

    const { result } = renderHook(() => useChangeDimension(scrollableRef, decorativeRef));

    expect(result.current).toBe(false);
  });

  it('does not change dimensions when decorativeRef is null', () => {
    const scrollableRef = { current: document.createElement('div') };
    const decorativeRef = { current: null };

    const { result } = renderHook(() => useChangeDimension(scrollableRef, decorativeRef));

    expect(result.current).toBe(false);
  });

  it('does change decorative element style properties when scroll', () => {
    const scrollableRef = { current: document.createElement('div') };
    const decorativeRef = { current: document.createElement('div') };
    const setProperySpy = jest.spyOn(decorativeRef.current.style, 'setProperty');

    renderHook(() => useChangeDimension(scrollableRef, decorativeRef, true));

    act(() => {
      Object.defineProperty(scrollableRef.current, 'scrollHeight', { value: 100 });
      Object.defineProperty(scrollableRef.current, 'scrollTop', { value: 10 });
      const event = new Event('scroll');
      scrollableRef.current.dispatchEvent(event);
    });

    expect(setProperySpy).toHaveBeenCalled();
  });

  it('is not gone if the proportion is less than 95%', () => {
    const scrollableRef = { current: document.createElement('div') };
    const decorativeRef = { current: document.createElement('div') };
    // Proportion default is 4 -> it is gone after 25%
    const { result } = renderHook(() => useChangeDimension(scrollableRef, decorativeRef, true));

    act(() => {
      Object.defineProperty(scrollableRef.current, 'scrollHeight', { value: 100 });
      Object.defineProperty(scrollableRef.current, 'scrollTop', { value: 10 });
      const event = new Event('scroll');
      scrollableRef.current.dispatchEvent(event);
    });

    expect(result.current).toBe(false);
  });

  it('gone after overpass 95% of the proportion', () => {
    const scrollableRef = { current: document.createElement('div') };
    const decorativeRef = { current: document.createElement('div') };
    // Proportion default is 4 -> it is gone after 25%
    const { result } = renderHook(() => useChangeDimension(scrollableRef, decorativeRef, true));

    act(() => {
      Object.defineProperty(scrollableRef.current, 'scrollHeight', { value: 100 });
      Object.defineProperty(scrollableRef.current, 'scrollTop', { value: 24 });
      const event = new Event('scroll');
      scrollableRef.current.dispatchEvent(event);
    });

    expect(result.current).toBe(true);
  });

  it('gone after overpass 95% of the proportion, event if the percentage greter than 100', () => {
    const scrollableRef = { current: document.createElement('div') };
    const decorativeRef = { current: document.createElement('div') };
    // Proportion default is 4 -> it is gone after 25%
    const { result } = renderHook(() => useChangeDimension(scrollableRef, decorativeRef, true));

    act(() => {
      Object.defineProperty(scrollableRef.current, 'scrollHeight', { value: 100 });
      Object.defineProperty(scrollableRef.current, 'scrollTop', { value: 100 });
      const event = new Event('scroll');
      scrollableRef.current.dispatchEvent(event);
    });

    expect(result.current).toBe(true);
  });
});
