import { renderHook } from '@testing-library/react';

import { useId } from '../useId';

describe('useId hook suite test', () => {
  it('useId', () => {
    const { result } = renderHook(() => {
      const idValue = useId('id');
      return { idValue };
    });

    expect(result.current.idValue).toBe('id0');
    expect(document.body).toHTMLValidate();
  });

  it('useId with default prefix', () => {
    const { result } = renderHook(() => {
      const idValue = useId();
      return { idValue };
    });

    expect(result.current.idValue).toBe('undefined0');
    expect(document.body).toHTMLValidate();
  });
});
