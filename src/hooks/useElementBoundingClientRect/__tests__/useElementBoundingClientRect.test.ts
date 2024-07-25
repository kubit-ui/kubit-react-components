import { act, renderHook } from '@testing-library/react-hooks';

import { useElementBoundingClientRect } from '../useElementBoundingClientRect';

describe('useElementBoundingClientRect Hook', () => {
  it('should return the correct bounding client rect', () => {
    const ref = { current: document.createElement('div') };
    const { result } = renderHook(() => useElementBoundingClientRect({ ref }));

    act(() => {
      // Simulate a resize event
      window.dispatchEvent(new Event('resize'));
    });

    expect(result.current.measures).toEqual(ref.current.getBoundingClientRect());
  });

  it('should return undefined if the element reference is null', () => {
    const ref = { current: null };
    const { result } = renderHook(() => useElementBoundingClientRect({ ref }));

    expect(result.current.measures).toBeUndefined();
  });
});
