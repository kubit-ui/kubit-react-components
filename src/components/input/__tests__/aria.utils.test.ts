import { InputState } from '../types';
import { buildAriaLabelledBy } from '../utils';

const extraAriaLabelledBy = '0000';
const labelId = 'labelId';
const helpMessage = 'help';
const helpMessageId = '1234';
const errorMessage = 'error';
const errorMessageId = '56789';

describe('Utils aria', () => {
  it('If help message and error', () => {
    const extraAriaLabelledBy = undefined;
    const state = InputState.ERROR_EMPTY;
    expect(
      buildAriaLabelledBy({
        extraAriaLabelledBy,
        labelId,
        helpMessage,
        helpMessageId,
        errorMessage,
        errorMessageId,
        state,
      })
    ).toBe('labelId 56789 1234');
  });
  it('If help message and extraAriaLabelledBy', () => {
    const state = InputState.EMPTY;
    expect(
      buildAriaLabelledBy({
        extraAriaLabelledBy,
        labelId,
        helpMessage,
        helpMessageId,
        errorMessage,
        errorMessageId,
        state,
      })
    ).toBe('labelId 0000 1234');
  });
});
