import { expandPaddingObject } from '../../positioning/utils/expandPaddingObject';

describe('Tooltip Positioning - expandPaddingObject', () => {
  it('returns top, right, bottom and left', () => {
    const { top, right, bottom, left } = expandPaddingObject({ right: 15 });
    expect(top).toBe(0);
    expect(right).toBe(15);
    expect(bottom).toBe(0);
    expect(left).toBe(0);
  });
});
