import { ResizeObserver } from './resizeObserver';

describe('ResizeObserver fallback', () => {
  let mockCallback: jest.Mock;

  beforeEach(() => {
    mockCallback = jest.fn();
  });

  it('can be observe', () => {
    const observer = new ResizeObserver(mockCallback);
    observer.observe(document.createElement('div'));
    expect(mockCallback).toHaveBeenCalled();
  });

  it('should not throw when calling unobserve', () => {
    const observer = new ResizeObserver(mockCallback);
    const testElement = document.createElement('div');
    expect(() => observer.unobserve(testElement)).not.toThrow();
  });

  it('should not throw when calling disconnect', () => {
    const observer = new ResizeObserver(mockCallback);
    expect(() => observer.disconnect()).not.toThrow();
  });
});
