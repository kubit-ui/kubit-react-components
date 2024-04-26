import { convertDurationToNumber, maxCountBetweenChars } from './string.utility';

describe('Cursor', () => {
  it('maxCountBetweenChars - should return 3', () => {
    const position = maxCountBetweenChars('#', '## - ## - ##');
    expect(position).toBe(3);
  });
  it('maxCountBetweenChars - should return 0', () => {
    const position = maxCountBetweenChars('#');
    expect(position).toBe(0);
  });
  it('convertDurationToNumber - should return 0', () => {
    const duration = convertDurationToNumber();
    expect(duration).toBe(0);
  });
  it('convertDurationToNumber - should return same value', () => {
    const duration = convertDurationToNumber(0.3);
    expect(duration).toBe(0.3);
  });
  it('convertDurationToNumber - should return convert string', () => {
    const duration = convertDurationToNumber('0.3s');
    expect(duration).toBe(300);
  });
  it('convertDurationToNumber - should return convert string (ms)', () => {
    const duration = convertDurationToNumber('300ms');
    expect(duration).toBe(300);
  });
});
