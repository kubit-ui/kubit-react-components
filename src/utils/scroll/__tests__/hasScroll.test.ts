import { hasHorizontalScroll, hasScroll, hasVerticalScroll } from '../hasScroll';

describe('Scroll detection functions', () => {
  let element: HTMLElement;

  beforeEach(() => {
    // Create a new element for each test
    element = document.createElement('div');
    document.body.appendChild(element);
  });

  afterEach(() => {
    // Clean up the element after each test
    document.body.removeChild(element);
  });

  it('hasVerticalScroll returns true when an element has a vertical scroll', () => {
    Object.defineProperty(element, 'scrollHeight', {
      value: 200,
    });
    Object.defineProperty(element, 'clientHeight', {
      value: 100,
    });

    expect(hasVerticalScroll(element)).toBe(true);
  });

  it('hasVerticalScroll returns false when an element does not have a vertical scroll', () => {
    Object.defineProperty(element, 'scrollHeight', {
      value: 50,
    });
    Object.defineProperty(element, 'clientHeight', {
      value: 100,
    });

    expect(hasVerticalScroll(element)).toBe(false);
  });

  it('hasHorizontalScroll returns true when an element has a horizontal scroll', () => {
    Object.defineProperty(element, 'scrollWidth', {
      value: 200,
    });
    Object.defineProperty(element, 'clientWidth', {
      value: 100,
    });

    expect(hasHorizontalScroll(element)).toBe(true);
  });

  it('hasHorizontalScroll returns false when an element does not have a horizontal scroll', () => {
    Object.defineProperty(element, 'scrollWidth', {
      value: 50,
    });
    Object.defineProperty(element, 'clientWidth', {
      value: 100,
    });

    expect(hasHorizontalScroll(element)).toBe(false);
  });

  it('hasScroll returns true when an element has a vertical or horizontal scroll', () => {
    Object.defineProperty(element, 'scrollWidth', {
      value: 200,
    });
    Object.defineProperty(element, 'clientWidth', {
      value: 100,
    });

    expect(hasHorizontalScroll(element)).toBe(true);
  });

  it('hasScroll returns false when an element does not have a vertical or horizontal scroll', () => {
    Object.defineProperty(element, 'scrollWidth', {
      value: 50,
    });
    Object.defineProperty(element, 'clientWidth', {
      value: 100,
    });

    expect(hasScroll(element)).toBe(false);
  });
});
