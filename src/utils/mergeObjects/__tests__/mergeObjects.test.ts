import { mergeObjects } from '../mergeObjects';

describe('mergeObjects', () => {
  it('should merge multiple objects into one', () => {
    type TestObjectA = { a: number };
    type TestObjectB = { b: number };
    type TestObjectC = { c: number };
    type TestObjectBC = Partial<TestObjectB & TestObjectC>;

    const target: TestObjectA = { a: 1 };
    const source1: TestObjectB = { b: 2 };
    const source2: TestObjectC = { c: 3 };

    const result = mergeObjects<TestObjectA, TestObjectBC>(target, source1, source2);

    expect(result).toEqual({ a: 1, b: 2, c: 3 });
  });

  it('should overwrite properties with the same key', () => {
    type TestObject = { a: number; b: number };
    type TestObjectB = { b: number };
    type TestObjectC = { c: number };
    type TestObjectBC = Partial<TestObjectB & TestObjectC>;

    const target = { a: 1, b: 2 };
    const source1 = { b: 3 };
    const source2 = { c: 4 };

    const result = mergeObjects<TestObject, TestObjectBC>(target, source1, source2);

    expect(result).toEqual({ a: 1, b: 3, c: 4 });
  });

  it('should handle nested objects', () => {
    type TestObject = { a: { b: number } };
    type TestObjectTwo = { a: { c: number } };
    type TestObjectD = { d: number };
    type TestObjectTwoD = Partial<TestObjectTwo & TestObjectD>;

    const target = { a: { b: 1 } };
    const source1 = { a: { c: 2 } };
    const source2 = { d: 3 };

    const result = mergeObjects<TestObject, TestObjectTwoD>(target, source1, source2);

    expect(result).toEqual({ a: { b: 1, c: 2 }, d: 3 });
  });
});
