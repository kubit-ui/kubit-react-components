import { POSITIONS } from '@/types/positions/positions';

import { IInputValue, ToggleOnAndOffTextType } from '../types/toggle';
import { getTextOrIcon } from './getTextOrIcon';

describe('getTextOrIcon', () => {
  it('should return centerInputValue when position is CENTER', () => {
    const inputValues: IInputValue = { centerInputValue: 'Center Value' };
    const result = getTextOrIcon(POSITIONS.CENTER, inputValues);
    expect(result).toBe('Center Value');
  });

  it('should return onText content when position is RIGHT', () => {
    const onText: ToggleOnAndOffTextType = { content: 'On Text' };
    const result = getTextOrIcon(POSITIONS.RIGHT, undefined, undefined, onText);
    expect(result).toBe('On Text');
  });

  it('should return offText content when position is not CENTER or RIGHT', () => {
    const offText: ToggleOnAndOffTextType = { content: 'Off Text' };
    const result = getTextOrIcon(POSITIONS.LEFT, undefined, offText);
    expect(result).toBe('Off Text');
  });

  it('should return undefined when inputValues, offText, and onText are not provided', () => {
    const result = getTextOrIcon(POSITIONS.LEFT);
    expect(result).toBeUndefined();
  });
});
