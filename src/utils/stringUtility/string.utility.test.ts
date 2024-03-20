import { maxCountBetweenChars } from './string.utility';

describe('Cursor', () => {
  it('maxCountBetweenChars - should return 3', () => {
    const position = maxCountBetweenChars('#', '## - ## - ##');
    expect(position).toBe(3);
  });
});
