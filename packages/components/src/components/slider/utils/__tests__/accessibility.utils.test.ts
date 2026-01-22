import { describe, expect, it, vi } from 'vitest';

import {
  buildAriaDescribedBy,
  calcNewValueAfterKeyPress,
  decrementValue,
  incrementValue,
} from '../accessibility.utils';

describe('incrementValue', () => {
  describe('no range mode (single value)', () => {
    it('should increment value by step', () => {
      const result = incrementValue({
        activePointer: '',
        max: 100,
        range: false,
        step: 10,
        value: 50,
      });
      expect(result).toBe(60);
    });

    it('should return max when increment exceeds max', () => {
      const result = incrementValue({
        activePointer: '',
        max: 100,
        range: false,
        step: 10,
        value: 95,
      });
      expect(result).toBe(100);
    });

    it('should handle small steps', () => {
      const result = incrementValue({
        activePointer: '',
        max: 10,
        range: false,
        step: 0.5,
        value: 5,
      });
      expect(result).toBe(5.5);
    });
  });

  describe('range mode (array of values)', () => {
    it('should increment left pointer value', () => {
      const result = incrementValue({
        activePointer: 'left',
        max: 100,
        range: true,
        step: 10,
        value: [20, 80],
      });
      expect(result).toEqual([30, 80]);
    });

    it('should return undefined when left increment would exceed right value', () => {
      const result = incrementValue({
        activePointer: 'left',
        max: 100,
        range: true,
        step: 10,
        value: [70, 80],
      });
      expect(result).toBeUndefined();
    });

    it('should increment right pointer value', () => {
      const result = incrementValue({
        activePointer: 'right',
        max: 100,
        range: true,
        step: 10,
        value: [20, 50],
      });
      expect(result).toEqual([20, 60]);
    });

    it('should return max for right pointer when increment exceeds max', () => {
      const result = incrementValue({
        activePointer: 'right',
        max: 100,
        range: true,
        step: 10,
        value: [20, 95],
      });
      expect(result).toEqual([20, 100]);
    });

    it('should return undefined when left and right values would meet', () => {
      const result = incrementValue({
        activePointer: 'left',
        max: 100,
        range: true,
        step: 5,
        value: [75, 80],
      });
      expect(result).toBeUndefined();
    });
  });
});

describe('decrementValue', () => {
  describe('no range mode (single value)', () => {
    it('should decrement value by step', () => {
      const result = decrementValue({
        activePointer: '',
        min: 0,
        range: false,
        step: 10,
        value: 50,
      });
      expect(result).toBe(40);
    });

    it('should return min when decrement goes below min', () => {
      const result = decrementValue({
        activePointer: '',
        min: 0,
        range: false,
        step: 10,
        value: 5,
      });
      expect(result).toBe(0);
    });

    it('should handle small steps', () => {
      const result = decrementValue({
        activePointer: '',
        min: 0,
        range: false,
        step: 0.5,
        value: 5,
      });
      expect(result).toBe(4.5);
    });
  });

  describe('range mode (array of values)', () => {
    it('should decrement left pointer value', () => {
      const result = decrementValue({
        activePointer: 'left',
        min: 0,
        range: true,
        step: 10,
        value: [30, 80],
      });
      expect(result).toEqual([20, 80]);
    });

    it('should return min for left pointer when decrement goes below min', () => {
      const result = decrementValue({
        activePointer: 'left',
        min: 0,
        range: true,
        step: 10,
        value: [5, 80],
      });
      expect(result).toEqual([0, 80]);
    });

    it('should decrement right pointer value', () => {
      const result = decrementValue({
        activePointer: 'right',
        min: 0,
        range: true,
        step: 10,
        value: [20, 80],
      });
      expect(result).toEqual([20, 70]);
    });

    it('should return undefined when right decrement would meet left value', () => {
      const result = decrementValue({
        activePointer: 'right',
        min: 0,
        range: true,
        step: 10,
        value: [20, 30],
      });
      expect(result).toBeUndefined();
    });

    it('should return undefined when right and left values would cross', () => {
      const result = decrementValue({
        activePointer: 'right',
        min: 0,
        range: true,
        step: 5,
        value: [75, 80],
      });
      expect(result).toBeUndefined();
    });
  });
});

describe('calcNewValueAfterKeyPress', () => {
  const createKeyboardEvent = (key: string) =>
    ({
      key,
      preventDefault: vi.fn(),
    }) as unknown as React.KeyboardEvent<HTMLInputElement>;

  describe('arrow keys', () => {
    it('should decrement on ArrowLeft', () => {
      const event = createKeyboardEvent('ArrowLeft');
      const result = calcNewValueAfterKeyPress({
        activePointer: '',
        event,
        max: 100,
        min: 0,
        range: false,
        step: 10,
        value: 50,
      });
      expect(result).toBe(40);
      expect(event.preventDefault).toHaveBeenCalled();
    });

    it('should decrement on ArrowDown', () => {
      const event = createKeyboardEvent('ArrowDown');
      const result = calcNewValueAfterKeyPress({
        activePointer: '',
        event,
        max: 100,
        min: 0,
        range: false,
        step: 10,
        value: 50,
      });
      expect(result).toBe(40);
      expect(event.preventDefault).toHaveBeenCalled();
    });

    it('should increment on ArrowRight', () => {
      const event = createKeyboardEvent('ArrowRight');
      const result = calcNewValueAfterKeyPress({
        activePointer: '',
        event,
        max: 100,
        min: 0,
        range: false,
        step: 10,
        value: 50,
      });
      expect(result).toBe(60);
      expect(event.preventDefault).toHaveBeenCalled();
    });

    it('should increment on ArrowUp', () => {
      const event = createKeyboardEvent('ArrowUp');
      const result = calcNewValueAfterKeyPress({
        activePointer: '',
        event,
        max: 100,
        min: 0,
        range: false,
        step: 10,
        value: 50,
      });
      expect(result).toBe(60);
      expect(event.preventDefault).toHaveBeenCalled();
    });
  });

  describe('Home and End keys', () => {
    it('should set to min on Home key', () => {
      const event = createKeyboardEvent('Home');
      const result = calcNewValueAfterKeyPress({
        activePointer: '',
        event,
        max: 100,
        min: 0,
        range: false,
        step: 10,
        value: 50,
      });
      expect(result).toBe(0);
      expect(event.preventDefault).toHaveBeenCalled();
    });

    it('should set to max on End key', () => {
      const event = createKeyboardEvent('End');
      const result = calcNewValueAfterKeyPress({
        activePointer: '',
        event,
        max: 100,
        min: 0,
        range: false,
        step: 10,
        value: 50,
      });
      expect(result).toBe(100);
      expect(event.preventDefault).toHaveBeenCalled();
    });
  });

  describe('range mode', () => {
    it('should handle ArrowRight for left pointer in range', () => {
      const event = createKeyboardEvent('ArrowRight');
      const result = calcNewValueAfterKeyPress({
        activePointer: 'left',
        event,
        max: 100,
        min: 0,
        range: true,
        step: 10,
        value: [20, 80],
      });
      expect(result).toEqual([30, 80]);
    });

    it('should handle ArrowLeft for right pointer in range', () => {
      const event = createKeyboardEvent('ArrowLeft');
      const result = calcNewValueAfterKeyPress({
        activePointer: 'right',
        event,
        max: 100,
        min: 0,
        range: true,
        step: 10,
        value: [20, 80],
      });
      expect(result).toEqual([20, 70]);
    });
  });

  describe('other keys', () => {
    it('should return undefined for non-slider keys', () => {
      const event = createKeyboardEvent('a');
      const result = calcNewValueAfterKeyPress({
        activePointer: '',
        event,
        max: 100,
        min: 0,
        range: false,
        step: 10,
        value: 50,
      });
      expect(result).toBeUndefined();
    });
  });
});

describe('buildAriaDescribedBy', () => {
  it('should build aria-describedby string from helper texts', () => {
    const listHelperText = [
      { helperText: 'Helper 1', helperTextId: 'helper-1' },
      { helperText: 'Helper 2', helperTextId: 'helper-2' },
      { helperText: 'Helper 3', helperTextId: 'helper-3' },
    ];
    const result = buildAriaDescribedBy(listHelperText);
    expect(result).toBe('helper-1 helper-2 helper-3');
  });

  it('should filter out undefined helper texts', () => {
    const listHelperText = [
      { helperText: 'Helper 1', helperTextId: 'helper-1' },
      { helperText: undefined, helperTextId: 'helper-2' },
      { helperText: 'Helper 3', helperTextId: 'helper-3' },
    ];
    const result = buildAriaDescribedBy(listHelperText);
    expect(result).toBe('helper-1 helper-3');
  });

  it('should return undefined when all helper texts are undefined', () => {
    const listHelperText = [
      { helperText: undefined, helperTextId: 'helper-1' },
      { helperText: undefined, helperTextId: 'helper-2' },
    ];
    const result = buildAriaDescribedBy(listHelperText);
    expect(result).toBeUndefined();
  });

  it('should return undefined for empty list', () => {
    const result = buildAriaDescribedBy([]);
    expect(result).toBeUndefined();
  });

  it('should handle single helper text', () => {
    const listHelperText = [
      { helperText: 'Helper 1', helperTextId: 'helper-1' },
    ];
    const result = buildAriaDescribedBy(listHelperText);
    expect(result).toBe('helper-1');
  });
});
