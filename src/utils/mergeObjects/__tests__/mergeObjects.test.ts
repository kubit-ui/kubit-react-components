import { mergeObjects } from '../mergeObjects';

describe('mergeObjects', () => {
  it('should merge multiple objects into one', () => {
    const target = { a: 1 };
    const source1 = { b: 2 };
    const source2 = { c: 3 };

    const result = mergeObjects(target, source1, source2);

    expect(result).toEqual({ a: 1, b: 2, c: 3 });
  });

  it('should overwrite properties with the same key', () => {
    const target = { a: 1, b: 2 };
    const source1 = { b: 3 };
    const source2 = { c: 4 };

    const result = mergeObjects(target, source1, source2);

    expect(result).toEqual({ a: 1, b: 3, c: 4 });
  });

  it('should handle nested objects', () => {
    const target = { a: { b: 1 } };
    const source1 = { a: { c: 2 } };
    const source2 = { d: 3 };

    const result = mergeObjects(target, source1, source2);

    expect(result).toEqual({ a: { b: 1, c: 2 }, d: 3 });
  });
});
