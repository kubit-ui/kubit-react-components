import { buildAriaDescribedBy } from '../../utils/aria.utils';

describe('Checkbox Aria Utils', () => {
  describe('buildAriaDescribedBy', () => {
    it('returns empty string when no content is provided', () => {
      const result = buildAriaDescribedBy({
        ariaDescribedBy: '',
        error: false,
        errorMessageId: 'errorId',
        screenReaderId: 'screenReaderId',
      });
      expect(result).toBeUndefined();
    });

    it('includes error id when error is true and error text is provided', () => {
      const result = buildAriaDescribedBy({
        ariaDescribedBy: '',
        error: true,
        errorMessageId: 'errorId',
        screenReaderId: 'screenReaderId',
      });
      expect(result).toBe('errorId');
    });

    it('includes screen reader id when screen reader text is provided', () => {
      const result = buildAriaDescribedBy({
        ariaDescribedBy: '',
        error: false,
        errorMessageId: 'errorId',
        screenReader: true,
        screenReaderId: 'screenReaderId',
      });
      expect(result).toBe('screenReaderId');
    });

    it('includes extra aria described by when provided', () => {
      const result = buildAriaDescribedBy({
        ariaDescribedBy: 'extraId',
        error: false,
        errorMessageId: 'errorId',
        screenReaderId: 'screenReaderId',
      });
      expect(result).toBe('extraId');
    });

    it('combines all ids with spaces when multiple content types are provided', () => {
      const result = buildAriaDescribedBy({
        ariaDescribedBy: 'extraId',
        error: true,
        errorMessageId: 'errorId',
        screenReader: true,
        screenReaderId: 'screenReaderId',
      });
      expect(result).toBe('extraId screenReaderId errorId');
    });
  });
});
