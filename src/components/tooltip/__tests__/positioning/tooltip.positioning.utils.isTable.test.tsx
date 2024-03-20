import * as isUtils from '../../positioning/utils/is.utils';

describe('Tooltip Positioning - isTable', () => {
  it('div', () => {
    const element = document.createElement('div');
    expect(isUtils.isTableElement(element)).toBe(false);
  });
  it('table', () => {
    const element = document.createElement('table');
    expect(isUtils.isTableElement(element)).toBe(true);
  });
  it('td', () => {
    const element = document.createElement('td');
    expect(isUtils.isTableElement(element)).toBe(true);
  });
  it('th', () => {
    const element = document.createElement('th');
    expect(isUtils.isTableElement(element)).toBe(true);
  });
});
