import { POSITIONS } from '@/types/positions/positions';

import { IInputValue } from '../types/toggle';
import { getValueOfRadioButton } from './getValueOfRadioButton';

describe('getValueOfRadioButton', () => {
  it('should return rightInputValue when position is RIGHT', () => {
    const inputValues: IInputValue = {
      rightInputValue: 'right',
      leftInputValue: 'left',
      centerInputValue: 'center',
    };
    const result = getValueOfRadioButton(POSITIONS.RIGHT, inputValues);
    expect(result).toBe('right');
  });

  it('should return leftInputValue when position is LEFT', () => {
    const inputValues: IInputValue = {
      rightInputValue: 'right',
      leftInputValue: 'left',
      centerInputValue: 'center',
    };
    const result = getValueOfRadioButton(POSITIONS.LEFT, inputValues);
    expect(result).toBe('left');
  });

  it('should return centerInputValue when position is CENTER', () => {
    const inputValues: IInputValue = {
      rightInputValue: 'right',
      leftInputValue: 'left',
      centerInputValue: 'center',
    };
    const result = getValueOfRadioButton(POSITIONS.CENTER, inputValues);
    expect(result).toBe('center');
  });

  it('should return undefined when inputValues is undefined', () => {
    const result = getValueOfRadioButton(POSITIONS.RIGHT);
    expect(result).toBeUndefined();
  });

  it('should return undefined when inputValues does not have the corresponding value', () => {
    const inputValues: IInputValue = {
      rightInputValue: 'right',
      leftInputValue: 'left',
    };
    const result = getValueOfRadioButton(POSITIONS.CENTER, inputValues);
    expect(result).toBeUndefined();
  });
});
