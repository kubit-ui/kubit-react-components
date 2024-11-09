import { InputState } from '../types/inputTheme';
import { buildAriaDescribedBy } from '../utils/aria.utils';

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
    ).toBe(' 56789 1234');
  });
});
