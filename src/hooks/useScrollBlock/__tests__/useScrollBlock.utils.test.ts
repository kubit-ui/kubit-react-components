import * as useScrollBlockUtils from '../utils/useScrollBlock.utils';

describe('getFirstScrollableElement', () => {
  it('returns null if element is null', () => {
    const result = useScrollBlockUtils.getFirstScrollableElement({
      element: null,
      parentsToStop: [],
    });
    expect(result).toBeNull();
  });

  it('returns null if element is not contained in any parent', () => {
    const element = document.createElement('div');
    const parent = document.createElement('div');
    const result = useScrollBlockUtils.getFirstScrollableElement({
      element,
      parentsToStop: [parent],
    });
    expect(result).toBeNull();
  });

  it('returns null if element and its parent are not scrollable', () => {
    const element = document.createElement('div');
    const parent = document.createElement('div');
    parent.appendChild(element);
    const result = useScrollBlockUtils.getFirstScrollableElement({
      element,
      parentsToStop: [parent],
    });
    expect(result).toBe(null);
  });

  it('returns element if it is scrollable', () => {
    const element = document.createElement('div');
    const parent = document.createElement('div');
    parent.appendChild(element);
    jest.spyOn(useScrollBlockUtils, 'isElementScrollable').mockReturnValueOnce(true);
    const result = useScrollBlockUtils.getFirstScrollableElement({
      element,
      parentsToStop: [parent],
    });
    expect(result).toBe(element);
  });

  it('returns parent element if element is not scrollable but parent', () => {
    const element = document.createElement('div');
    const parent = document.createElement('div');
    parent.appendChild(element);
    jest
      .spyOn(useScrollBlockUtils, 'isElementScrollable')
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(true);
    const result = useScrollBlockUtils.getFirstScrollableElement({
      element,
      parentsToStop: [parent],
    });
    expect(result).toBe(parent);
  });
});
