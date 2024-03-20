import { ENTER, SPACE } from '@/constants';

import { isKeyEnterPressed, isKeySpacePressed } from './keyboard.utility';

const DEFAULT_KEY_PRESSED = 'q';

describe('Keyboard utility', () => {
  it('should isKeyEnterPressed utility return false', () => {
    const result = isKeyEnterPressed(DEFAULT_KEY_PRESSED);

    expect(result).toBe(false);
  });

  it('should isKeyEnterPressed utility return true', () => {
    const result = isKeyEnterPressed(ENTER.key);

    expect(result).toBe(true);
  });

  it('should isKeySpacePressed utility return false', () => {
    const result = isKeySpacePressed(DEFAULT_KEY_PRESSED);

    expect(result).toBe(false);
  });

  it('should isKeySpacePressed utility return true', () => {
    const result = isKeySpacePressed(SPACE.key);

    expect(result).toBe(true);
  });
});
