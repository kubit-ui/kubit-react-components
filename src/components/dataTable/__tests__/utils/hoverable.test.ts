import { isRowHoverable } from '../../utils/hoverable';

describe('isRowHoverable', () => {
  it('should return true if row id is in hoverableRows', () => {
    const row = { id: '1' };
    const hoverableRows = ['1', '2', '3'];
    expect(isRowHoverable({ row, hoverableRows })).toBe(true);
  });

  it('should return false if row id is in nonHoverableRows', () => {
    const row = { id: '1' };
    const nonHoverableRows = ['1', '2', '3'];
    expect(isRowHoverable({ row, nonHoverableRows })).toBe(false);
  });

  it('should return hoverable if neither hoverableRows nor nonHoverableRows is provided', () => {
    const row = { id: '1' };
    expect(isRowHoverable({ row, hoverable: true })).toBe(true);
    expect(isRowHoverable({ row, hoverable: false })).toBe(false);
  });

  it('should return undefined if no conditions are met', () => {
    const row = { id: '1' };
    expect(isRowHoverable({ row })).toBeUndefined();
  });
});
