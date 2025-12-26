import { changeCssProperty } from '../changeCssProperty';

describe('changeCssProperty', () => {
  it('does not change css properties when cssProperties array is empty', () => {
    const element = document.createElement('div');
    const cssProperties = [];

    changeCssProperty(element, cssProperties);

    expect(element.style.cssText).toBe('');
  });

  it('changes css properties when cssProperties array is not empty', () => {
    const element = document.createElement('div');
    const cssProperties = [
      { cssPropertyName: 'color', cssPropertyValue: 'red' },
      { cssPropertyName: 'background-color', cssPropertyValue: 'blue' },
    ];

    changeCssProperty(element, cssProperties);

    expect(element.style.cssText).toBe('color: red; background-color: blue;');
  });
});
