import { renderHook } from '@testing-library/react-hooks';

import { useTooltipAsModalAriaLabel } from '../hooks/useTooltipAsModalAriaLabel';

describe('useTooltipAsModalAriaLabel', () => {
  it('should return the inner text of the ref', () => {
    const ref = {
      current: document.createElement('div'),
    };
    ref.current.innerText = 'Test text';

    const { result } = renderHook(() => useTooltipAsModalAriaLabel(ref));
    expect(result.current).toEqual('Test text');
  });

  it('should return undefined if the ref is null', () => {
    const ref = {
      current: null,
    };

    const { result } = renderHook(() => useTooltipAsModalAriaLabel(ref));
    expect(result.current).toBeUndefined();
  });
});
