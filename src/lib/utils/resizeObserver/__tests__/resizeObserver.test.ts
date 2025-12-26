import { ResizeObserver } from '../resizeObserver';

describe('ResizeObserver fallback', () => {
  let mockCallback: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockCallback = vi.fn();
  });

  it('can be observe', () => {
    const observer = new ResizeObserver(mockCallback as never);
    observer.observe(document.createElement('div'));
    expect(mockCallback).toHaveBeenCalled();
  });

  it('should not throw when calling unobserve', () => {
    const observer = new ResizeObserver(mockCallback as never);
    const testElement = document.createElement('div');
    expect(() => observer.unobserve(testElement)).not.toThrow();
  });

  it('should not throw when calling disconnect', () => {
    const observer = new ResizeObserver(mockCallback as never);
    expect(() => observer.disconnect()).not.toThrow();
  });
});
