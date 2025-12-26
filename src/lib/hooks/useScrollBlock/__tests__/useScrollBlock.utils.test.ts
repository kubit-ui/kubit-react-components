import * as useScrollBlockUtils from '../utils/useScrollBlock.utils';

describe('isElementScrollable', () => {
  it('returns true if element is scrollable', () => {
    const element = document.createElement('div');
    Object.defineProperty(element, 'scrollHeight', { value: 200 });
    Object.defineProperty(element, 'clientHeight', { value: 100 });
    const result = useScrollBlockUtils.isElementScrollable(element);
    expect(result).toBe(true);
  });

  it('returns false if element is not scrollable', () => {
    const element = document.createElement('div');
    Object.defineProperty(element, 'scrollHeight', { value: 100 });
    Object.defineProperty(element, 'clientHeight', { value: 200 });
    const result = useScrollBlockUtils.isElementScrollable(element);
    expect(result).toBe(false);
  });
});
