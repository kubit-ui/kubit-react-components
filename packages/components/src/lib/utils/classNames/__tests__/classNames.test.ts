import { classNames } from '../classNames';

describe('classNames', () => {
  it('should concatenate multiple string class names', () => {
    expect(classNames('class1', 'class2', 'class3')).toBe(
      'class1 class2 class3',
    );
  });

  it('should ignore undefined, null, and false values', () => {
    expect(classNames('class1', undefined, null, false, 'class2')).toBe(
      'class1 class2',
    );
  });

  it('should include keys of objects with truthy values', () => {
    expect(
      classNames('class1', { class2: true, class3: false }, 'class4'),
    ).toBe('class1 class2 class4');
  });

  it('should handle an empty input', () => {
    expect(classNames()).toBe('');
  });

  it('should handle only object inputs', () => {
    expect(classNames({ class1: true, class2: false, class3: true })).toBe(
      'class1 class3',
    );
  });

  it('should handle mixed inputs', () => {
    expect(
      classNames('class1', { class2: true }, null, 'class3', {
        class4: false,
        class5: true,
      }),
    ).toBe('class1 class2 class3 class5');
  });
});
