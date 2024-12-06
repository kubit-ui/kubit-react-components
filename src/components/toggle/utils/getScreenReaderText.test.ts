import { IElementOrIcon } from '@/components/elementOrIcon/types/elementOrIcon';
import { POSITIONS } from '@/types/positions/positions';

import { IInputValue } from '../types/toggle';
import { getScreenReaderText } from './getScreenReaderText';

describe('getScreenReaderText', () => {
  const inputValues: IInputValue = {
    centerInputValue: 'Center Value',
    rightInputValue: 'Right Value',
    leftInputValue: 'Left Value',
  };

  const onIcon: IElementOrIcon = {
    altText: 'On Icon Alt Text',
  };

  const offIcon: IElementOrIcon = {
    altText: 'Off Icon Alt Text',
  };

  it('should return centerInputValue when position is CENTER', () => {
    const result = getScreenReaderText(POSITIONS.CENTER, inputValues);
    expect(result).toBe('Center Value');
  });

  it('should return rightInputValue when position is RIGHT', () => {
    const result = getScreenReaderText(POSITIONS.RIGHT, inputValues);
    expect(result).toBe('Right Value');
  });

  it('should return onIcon altText when position is RIGHT and rightInputValue is undefined', () => {
    const modifiedInputValues = { ...inputValues, rightInputValue: undefined };
    const result = getScreenReaderText(POSITIONS.RIGHT, modifiedInputValues, onIcon);
    expect(result).toBe('On Icon Alt Text');
  });

  it('should return leftInputValue when position is LEFT', () => {
    const result = getScreenReaderText(POSITIONS.LEFT, inputValues);
    expect(result).toBe('Left Value');
  });

  it('should return offIcon altText when position is LEFT and leftInputValue is undefined', () => {
    const modifiedInputValues = { ...inputValues, leftInputValue: undefined };
    const result = getScreenReaderText(POSITIONS.LEFT, modifiedInputValues, undefined, offIcon);
    expect(result).toBe('Off Icon Alt Text');
  });

  it('should return undefined when position is LEFT and both leftInputValue and offIcon altText are undefined', () => {
    const modifiedInputValues = { ...inputValues, leftInputValue: undefined };
    const result = getScreenReaderText(POSITIONS.LEFT, modifiedInputValues);
    expect(result).toBeUndefined();
  });
});
