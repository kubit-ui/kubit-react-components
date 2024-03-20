import { mergeObjectsStyles } from '../mergeObjectStyles';

describe('mergeObjectStyles utils', () => {
  it('If both are object, Styles are merged into one object', () => {
    const target = { color: 'red' };
    const source = { size: 'small' };

    expect(mergeObjectsStyles(target, source)).toStrictEqual({ color: 'red', size: 'small' });
  });
  it('If target is not an object, It returns source', () => {
    const target = 'string' as unknown as object;
    const source = { size: 'small' };

    expect(mergeObjectsStyles(target, source)).toBe(source);
  });
  it('If source is not an object, It returns source', () => {
    const target = { color: 'red' };
    const source = 'string' as unknown as object;

    expect(mergeObjectsStyles(target, source)).toBe(source);
  });
});
