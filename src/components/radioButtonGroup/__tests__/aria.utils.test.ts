import { buildAriaLabelledBy } from '../utils';

const descriptionId = 'descriptionId';
const screenReaderId = 'screenReaderId';
const errorMessage = 'error';
const errorMessageId = '1234';
const error = false;

describe('Utils aria', () => {
  it('If descriptionId no exits', () => {
    const descriptionId = undefined;
    expect(
      buildAriaLabelledBy({
        descriptionId,
        screenReaderId,
        errorMessage,
        errorMessageId,
        error,
      })
    ).toBe('screenReaderId');
  });
  it('If descriptionId and error', () => {
    const error = true;
    expect(
      buildAriaLabelledBy({
        descriptionId,
        screenReaderId,
        errorMessage,
        errorMessageId,
        error,
      })
    ).toBe('descriptionId screenReaderId 1234');
  });
});
