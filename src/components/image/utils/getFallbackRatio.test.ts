import { getFallbackRatio } from './getFallbackRatio';

const DEFAULT_NUMBER = 1;

describe('getFallbackRatio utility', () => {
  it('should return the aspect ratio', () => {
    const result = getFallbackRatio(DEFAULT_NUMBER);

    expect(result).toBe(100);
  });
});
