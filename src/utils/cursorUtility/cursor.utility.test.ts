import { BACKSPACE, DELETE } from '@/constants';
import { CursorType } from '@/types/type';

import { getPosition } from './cursor.utility';

const VALUE = 'test';
const CURSOR: CursorType = { start: 3, end: 3 };

describe('Cursor', () => {
  it('getPosition - should return -1', () => {
    const position = getPosition(BACKSPACE.key, VALUE, CURSOR);
    expect(position).toBe(-1);
  });
  it('getPosition - should return 0', () => {
    const position = getPosition(DELETE.key, VALUE, CURSOR);
    expect(position).toBe(0);
  });
  it('getPosition - should return 1', () => {
    const position = getPosition('t', VALUE, CURSOR);
    expect(position).toBe(1);
  });
  it('getPosition - should return 2', () => {
    const position = getPosition('a', `${VALUE} - `, CURSOR);
    expect(position).toBe(2);
  });
  it('getPosition - should return 4', () => {
    const position = getPosition('a', `${VALUE} - `, CURSOR, 4);
    expect(position).toBe(4);
  });
});
