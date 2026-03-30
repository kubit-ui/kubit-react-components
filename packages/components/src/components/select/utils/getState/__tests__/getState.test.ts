import { describe, expect, it } from 'vitest';

import { STATES } from '@/lib/types/states/states';

import { getState } from '../getState';

describe('getState', () => {
  it('returns STATES.HOVER when hover is true', () => {
    expect(getState({ hover: true })).toBe(STATES.HOVER);
  });

  it('returns STATES.DEFAULT when hover is false', () => {
    expect(getState({ hover: false })).toBe(STATES.DEFAULT);
  });
});
