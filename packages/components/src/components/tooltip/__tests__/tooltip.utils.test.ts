import { getAriaDescriptorsBy } from '../utils/tooltip.utils';

describe('getAriaDescriptorsBy utility', () => {
  it('should return both titleId and contentId when title and content are provided', () => {
    const result = getAriaDescriptorsBy(
      {contentId: 'content1',
      hasContent: true,
      hasTitle: true,
      titleId: 'title1'}
    );

    expect(result).toBe('title1 content1');
    expect(document.body).toHTMLValidate();
  });

  it('should return only titleId when only title is provided', () => {
    const result = getAriaDescriptorsBy({
      contentId: 'content1',
      hasTitle: true,
      titleId: 'title1',
    });

    expect(result).toBe('title1');
    expect(document.body).toHTMLValidate();
  });

  it('should return only contentId when only content is provided', () => {
    const result = getAriaDescriptorsBy({
      contentId: 'content1',
      hasContent: true,
      titleId: 'title1',
    });

    expect(result).toBe('content1');
    expect(document.body).toHTMLValidate();
  });

  it('should return undefined when neither title nor content is provided', () => {
    const result = getAriaDescriptorsBy({
      contentId: 'content1',
      titleId: 'title1',
    });

    expect(result).toBeUndefined();
    expect(document.body).toHTMLValidate();
  });
});
