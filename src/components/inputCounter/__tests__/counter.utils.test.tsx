import { render } from '@testing-library/react';
import React, { MutableRefObject } from 'react';

import { buildScreenReaderText, getCharactersLength } from '../utils/counter.utils';

const input = document.createElement('input');
const maxLength = 10;
const inputRef = { current: input };
describe('Counter Utils', () => {
  it('Should have value', async () => {
    const value = 'test';
    expect(getCharactersLength(value, inputRef)).toBe(value.length);
  });

  it('Should have inputRef', async () => {
    const refValue = 'test';
    render(<input ref={inputRef} value={refValue} onChange={jest.fn()} />);
    expect(getCharactersLength(undefined, inputRef as MutableRefObject<HTMLInputElement>)).toBe(
      refValue.length
    );
  });

  it('Should return 0', async () => {
    expect(getCharactersLength(undefined, inputRef)).toBe(0);
  });
  it('returns undefined when screenReaderText is undefined', () => {
    const input = document.createElement('input');
    const inputRef = { current: input };
    expect(buildScreenReaderText('test', inputRef, maxLength)).toBeUndefined();
  });

  it('replaces current characters and max length keys correctly', () => {
    const screenReaderText =
      'You have typed {{currentCharacters}} out of {{maxLength}} characters.';
    const expectedText = 'You have typed 4 out of 10 characters.';
    expect(buildScreenReaderText('test', inputRef, maxLength, screenReaderText)).toBe(expectedText);
  });
});
