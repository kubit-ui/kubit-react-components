import { renderHook } from '@testing-library/react-hooks';

import { useId } from './useId';

describe('useId hook suite test', () => {
  it('useId', () => {
    const { result } = renderHook(() => {
      const idValue = useId('id');
      return { idValue };
    });

    expect(result.current.idValue).toBe('id0');
  });

  it('useId with default prefix', () => {
    const { result } = renderHook(() => {
      const idValue = useId();
      return { idValue };
    });

    expect(result.current.idValue).toBe('undefined0');
  });
});
