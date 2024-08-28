import { InputState } from '../types';
import { buildAriaDescribedBy } from '../utils';

const helpMessage = 'help';
const helpMessageId = '1234';
const errorMessage = 'error';
const errorMessageId = '56789';

describe('Utils aria', () => {
  it('If help message and error', () => {
    const state = InputState.ERROR_EMPTY;
    expect(
      buildAriaDescribedBy({
        helpMessage,
        helpMessageId,
        errorMessage,
        errorMessageId,
        state,
      })
    ).toBe(' 1234 56789');
  });
});
