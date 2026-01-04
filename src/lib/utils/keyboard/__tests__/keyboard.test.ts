import {
  ARROW_LEFT,
  ARROW_RIGHT,
  ENTER,
  ESCAPE,
  SPACE,
  TAB,
} from '@/lib/constants/keyboardKeys/keyboardKeys';

import { isKeyPressed } from '../keyboard';

const DEFAULT_KEY_PRESSED = 'q';

describe('Keyboard utility', () => {
  describe('isKeyPressed (universal function)', () => {
    it('should return true for a single matching key', () => {
      expect(isKeyPressed(ENTER.key, ENTER.key)).toBe(true);
      expect(isKeyPressed(SPACE.key, SPACE.key)).toBe(true);
      expect(isKeyPressed(TAB.key, TAB.key)).toBe(true);
    });

    it('should return false for a non-matching key', () => {
      expect(isKeyPressed(DEFAULT_KEY_PRESSED, ENTER.key)).toBe(false);
      expect(isKeyPressed('a', SPACE.key)).toBe(false);
    });

    it('should check multiple keys (OR logic)', () => {
      expect(isKeyPressed(ENTER.key, ENTER.key, SPACE.key)).toBe(true);
      expect(isKeyPressed(SPACE.key, ENTER.key, SPACE.key)).toBe(true);
      expect(isKeyPressed(TAB.key, ENTER.key, SPACE.key)).toBe(false);
    });

    it('should handle array of keys (like ESCAPE for browser compatibility)', () => {
      expect(isKeyPressed('Escape', ...ESCAPE.key)).toBe(true);
      expect(isKeyPressed('Esc', ...ESCAPE.key)).toBe(true); // IE11 compatibility
      expect(isKeyPressed('Enter', ...ESCAPE.key)).toBe(false);
    });

    it('should combine single keys and arrays', () => {
      expect(isKeyPressed(ENTER.key, ENTER.key, SPACE.key, ...ESCAPE.key)).toBe(
        true,
      );
      expect(isKeyPressed('Escape', ENTER.key, SPACE.key, ...ESCAPE.key)).toBe(
        true,
      );
      expect(isKeyPressed('Esc', ENTER.key, SPACE.key, ...ESCAPE.key)).toBe(
        true,
      );
      expect(isKeyPressed(TAB.key, ENTER.key, SPACE.key, ...ESCAPE.key)).toBe(
        false,
      );
    });

    it('should work with arrow keys', () => {
      expect(isKeyPressed(ARROW_LEFT.key, ARROW_LEFT.key)).toBe(true);
      expect(isKeyPressed(ARROW_RIGHT.key, ARROW_RIGHT.key)).toBe(true);
      expect(
        isKeyPressed(ARROW_LEFT.key, ARROW_LEFT.key, ARROW_RIGHT.key),
      ).toBe(true);
      expect(isKeyPressed(ARROW_LEFT.key, ARROW_RIGHT.key)).toBe(false);
    });

    it('should return false when no target keys provided', () => {
      expect(isKeyPressed(ENTER.key)).toBe(false);
    });

    it('should handle empty array in targetKeys', () => {
      expect(isKeyPressed('a', [])).toBe(false);
    });

    it('should handle mixed empty and non-empty arrays', () => {
      expect(isKeyPressed(ENTER.key, [], ENTER.key)).toBe(true);
      expect(isKeyPressed('x', [], 'y', 'z')).toBe(false);
    });
  });
});
