import {
  ARROW_DOWN,
  ARROW_LEFT,
  ARROW_RIGHT,
  ARROW_UP,
  END,
  HOME,
} from '@/lib/constants/keyboardKeys/keyboardKeys';

type KeyPressResultTypeValue = number | number[] | undefined;

const incrementNoRangeValue = ({
  max,
  step,
  value,
}: {
  max: number;
  step: number;
  value: number;
}): number | undefined => {
  if (value + step > max) {
    return max;
  }
  return value + step;
};

const incrementRangeValue = ({
  activePointer,
  max,
  step,
  value,
}: {
  activePointer: string;
  max: number;
  step: number;
  value: number[];
}): number[] | undefined => {
  if (activePointer === 'left') {
    if (value[0] + step >= value[1]) {
      return undefined;
    }
    return [value[0] + step, value[1]];
  }
  // right
  if (value[1] + step > max) {
    return [value[0], max];
  }
  return [value[0], value[1] + step];
};

export const incrementValue = ({
  activePointer,
  max,
  range,
  step,
  value,
}: {
  activePointer: string;
  range: boolean;
  max: number;
  step: number;
  value: number | number[];
}): KeyPressResultTypeValue => {
  if (range) {
    return incrementRangeValue({
      activePointer,
      max,
      step,
      value: value as number[],
    });
  }
  return incrementNoRangeValue({ max, step, value: value as number });
};

const decrementNoRangeValue = ({
  min,
  step,
  value,
}: {
  min: number;
  step: number;
  value: number;
}): number | undefined => {
  if (value - step < min) {
    return min;
  }
  return value - step;
};

const decrementRangeValue = ({
  activePointer,
  min,
  step,
  value,
}: {
  activePointer: string;
  min: number;
  step: number;
  value: number[];
}): number[] | undefined => {
  if (activePointer === 'left') {
    if (value[0] - step < min) {
      return [min, value[1]];
    }
    return [value[0] - step, value[1]];
  }
  // right
  if (value[1] - step <= value[0]) {
    return undefined;
  }
  return [value[0], value[1] - step];
};

export const decrementValue = ({
  activePointer,
  min,
  range,
  step,
  value,
}: {
  activePointer: string;
  range: boolean;
  min: number;
  step: number;
  value: number | number[];
}): KeyPressResultTypeValue => {
  if (range) {
    return decrementRangeValue({
      activePointer,
      min,
      step,
      value: value as number[],
    });
  }
  return decrementNoRangeValue({ min, step, value: value as number });
};

const incrementNoRangeValueToMax = ({ max }: { max: number }): number => {
  return max;
};

const incrementRangeValueToMax = ({
  activePointer,
  max,
  step,
  value,
}: {
  activePointer: string;
  max: number;
  step: number;
  value: number[];
}): number[] => {
  if (activePointer === 'left') {
    return [value[1] - step, value[1]];
  }
  return [value[0], max];
};

const incrementValueToMax = ({
  activePointer,
  max,
  range,
  step,
  value,
}: {
  range: boolean;
  activePointer: string;
  max: number;
  step: number;
  value: number | number[];
}): number | number[] => {
  if (range) {
    return incrementRangeValueToMax({
      activePointer,
      max,
      step,
      value: value as number[],
    });
  }
  return incrementNoRangeValueToMax({ max });
};

const decrementNoRangeValueToMin = ({ min }: { min: number }): number => {
  return min;
};

const decrementRangeValueToMin = ({
  activePointer,
  min,
  step,
  value,
}: {
  activePointer: string;
  min: number;
  step: number;
  value: number[];
}): number[] => {
  if (activePointer === 'left') {
    return [min, value[1]];
  }
  // Right
  return [value[0], value[0] + step];
};

const decrementValueToMin = ({
  activePointer,
  min,
  range,
  step,
  value,
}: {
  range: boolean;
  activePointer: string;
  min: number;
  step: number;
  value: number | number[];
}): number | number[] => {
  if (range) {
    return decrementRangeValueToMin({
      activePointer,
      min,
      step,
      value: value as number[],
    });
  }
  return decrementNoRangeValueToMin({ min });
};

/**
 * @name calcNewValueAfterKeyPress
 * @description
 * Calculate the new value after a key press
 * @param {React.KeyboardEvent<HTMLInputElement>} event - The key press event
 * @param {boolean} range - If the slider is a range slider
 * @param {string} activePointer - The active pointer
 * @param {number} max - The max value
 * @param {number} min - The min value
 * @param {number} step - The step value
 * @param {number | number[]} value - The current value
 *  @returns {number | number[] | undefined} - The new value
 * @example
 * calcNewValueAfterKeyPress(event, range, activePointer, max, min, step, value);
 * @private
 * @ignore
 */
export const calcNewValueAfterKeyPress = ({
  activePointer,
  event,
  max,
  min,
  range,
  step,
  value,
}: {
  event: React.KeyboardEvent<HTMLInputElement>;
  range: boolean;
  activePointer: string;
  max: number;
  min: number;
  step: number;
  value: number | number[];
}): KeyPressResultTypeValue => {
  if ([ARROW_DOWN.key, ARROW_LEFT.key].includes(event.key)) {
    event.preventDefault();
    return decrementValue({ activePointer, min, range, step, value });
  }
  if ([ARROW_UP.key, ARROW_RIGHT.key].includes(event.key)) {
    event.preventDefault();
    return incrementValue({ activePointer, max, range, step, value });
  }
  if ([HOME.key].includes(event.key)) {
    event.preventDefault();
    return decrementValueToMin({ activePointer, min, range, step, value });
  }
  if ([END.key].includes(event.key)) {
    event.preventDefault();
    return incrementValueToMax({ activePointer, max, range, step, value });
  }
  return undefined;
};

// Arias
export const buildAriaDescribedBy = (
  listHelperText: { helperText: string | undefined; helperTextId: string }[],
): string | undefined => {
  const res = listHelperText
    .filter((helper) => helper.helperText)
    .map((helper) => helper.helperTextId)
    .join(' ');
  return res || undefined;
};
