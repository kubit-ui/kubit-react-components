import { getDocumentRect } from '../../positioning/utils/getDocumentRect';

describe('Tooltip Positioning - getDocumentRect', () => {
  it('Return width, height, x and y values', () => {
    const element = document.createElement('div');
    const { width, height, x, y } = getDocumentRect(element);
    expect(typeof width).toBe('number');
    expect(typeof height).toBe('number');
    expect(typeof x).toBe('number');
    expect(typeof y).toBe('number');
  });
});
