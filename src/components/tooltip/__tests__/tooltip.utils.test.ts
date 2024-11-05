import { getAriaDescriptorsBy } from '../utils';

describe('getAriaDescriptorsBy utility', () => {
  it('should return both titleId and contentId when title and content are provided', () => {
    const result = getAriaDescriptorsBy({
      title: 'Test Title',
      content: 'Test Content',
      titleId: 'title1',
      contentId: 'content1',
    });

    expect(result).toBe('title1 content1');
  });

  it('should return only titleId when only title is provided', () => {
    const result = getAriaDescriptorsBy({
      title: 'Test Title',
      titleId: 'title1',
      contentId: 'content1',
    });

    expect(result).toBe('title1');
  });

  it('should return only contentId when only content is provided', () => {
    const result = getAriaDescriptorsBy({
      content: 'Test Content',
      titleId: 'title1',
      contentId: 'content1',
    });

    expect(result).toBe('content1');
  });

  it('should return undefined when neither title nor content is provided', () => {
    const result = getAriaDescriptorsBy({
      titleId: 'title1',
      contentId: 'content1',
    });

    expect(result).toBeUndefined();
  });
});
