import { render } from '@testing-library/react';
import React, { MutableRefObject, createRef } from 'react';

import { getCharactersLength } from '../utils';

describe('Counter Utils', () => {
  const ref = { current: null };
  it('Should have value', async () => {
    const value = 'test';
    expect(getCharactersLength(value, ref)).toBe(value.length);
  });

  it('Should have inputRef', async () => {
    const refValue = 'test';
    const ref = createRef<HTMLInputElement>();
    render(<input ref={ref} value={refValue} onChange={jest.fn()} />);
    expect(getCharactersLength(undefined, ref as MutableRefObject<HTMLInputElement>)).toBe(
      refValue.length
    );
  });

  it('Should return 0', async () => {
    expect(getCharactersLength(undefined, ref)).toBe(0);
  });
});
