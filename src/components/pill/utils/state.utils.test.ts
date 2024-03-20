import { PillStateType } from '../types';
import { getPillState } from './state.utils';

describe('"getPillState" utility tests suite', () => {
  test('Default values', () => {
    const result = getPillState();

    expect(result).toBe(PillStateType.DEFAULT);
  });

  test('Selected', () => {
    const result = getPillState(true, false);

    expect(result).toBe(PillStateType.SELECTED);
  });

  test('Disabled', () => {
    const result = getPillState(false, true);

    expect(result).toBe(PillStateType.DISABLED);
  });

  test('Disabled selected', () => {
    const result = getPillState(true, true);

    expect(result).toBe(PillStateType.DISABLED_SELECTED);
  });
});
