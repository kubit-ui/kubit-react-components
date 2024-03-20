import { POSITIONS } from '@/types';

import { ToggleStateType } from '../types';
import { getToggleState } from './getToggleState';

describe('getToggleState utility', () => {
  // States for 3 position toggle
  it('should return the ToggleStateType DEFAULT_SELECTED', () => {
    const result = getToggleState(true, POSITIONS.RIGHT, false);

    expect(result).toBe(ToggleStateType.DEFAULT_SELECTED);
  });

  it('should return the ToggleStateType DEFAULT', () => {
    const result = getToggleState(true, POSITIONS.CENTER, false);

    expect(result).toBe(ToggleStateType.DEFAULT);
  });

  it('should return the ToggleStateType DEFAULT_UNSELECTED', () => {
    const result = getToggleState(true, POSITIONS.LEFT, false);

    expect(result).toBe(ToggleStateType.DEFAULT_UNSELECTED);
  });

  // States for 2 position toggle
  it('should be disabled and return the ToggleStateType DISABLED_SELECTED', () => {
    const result = getToggleState(false, POSITIONS.RIGHT, true);

    expect(result).toBe(ToggleStateType.DISABLED_SELECTED);
  });

  it('should be disabled and return the ToggleStateType DISABLED_UNSELECTED', () => {
    const result = getToggleState(false, POSITIONS.LEFT, true);

    expect(result).toBe(ToggleStateType.DISABLED_UNSELECTED);
  });

  it('should not be disabled and return the ToggleStateType DEFAULT_SELECTED', () => {
    const result = getToggleState(false, POSITIONS.RIGHT, false);

    expect(result).toBe(ToggleStateType.DEFAULT_SELECTED);
  });

  it('should not return the ToggleStateType DEFAULT_UNSELECTED', () => {
    const result = getToggleState(false, POSITIONS.LEFT, false);

    expect(result).toBe(ToggleStateType.DEFAULT_UNSELECTED);
  });
});
