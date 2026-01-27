import type { SliderOffsetBoundariesProps } from '../types/slider';
import type { SliderType } from '../types/type';

import { translateValue } from '../../selectorBoxFile/utils/translateValue/translateValue';

export const calculateChange = ({
  container,
  event,
  offsetBoundaries,
}: {
  event:
    | MouseEvent
    | React.TouchEvent<Element>
    | React.MouseEvent<Element, MouseEvent>;
  container: HTMLDivElement;
  offsetBoundaries: SliderOffsetBoundariesProps;
}): number => {
  event.preventDefault();
  const containerWidth = container.clientWidth;

  const x =
    typeof (event as MouseEvent)?.pageX === 'number'
      ? (event as MouseEvent).pageX
      : (event as React.TouchEvent<Element>).touches[0].pageX;

  const currentX = container.getBoundingClientRect().left + window.scrollX;

  const left = x - currentX;

  let offset = (left * 100) / containerWidth;
  offset = Math.min(
    offsetBoundaries.max,
    Math.max(offsetBoundaries.min, offset),
  );

  return offset;
};

/**
 * Given the offset of the slider, calculate the value
 * @param max
 * @param min
 * @param step
 * @param offset
 * @returns
 */
export const calcValueByOffset = ({
  max,
  min,
  offset,
  offsetBoundaries,
  step,
}: {
  max: number;
  min: number;
  step: number;
  offset: number;
  offsetBoundaries: SliderOffsetBoundariesProps;
}): number => {
  let value = translateValue({
    inputMax: offsetBoundaries.max,
    inputMin: offsetBoundaries.min,
    outputMax: max,
    outputMin: min,
    value: offset,
  });
  // Number of decimals
  const decimals =
    String(step).indexOf('.') > 0 ? String(step).split('.')[1].length : 0;

  if (decimals > 0) {
    const pow = Math.pow(10, decimals);
    value = Math.round(value * pow) / pow;
  } else {
    value = Math.round(value);
  }
  return value;
};

/**
 * Calculates the closest valid value based on the given parameters.
 * @param max - The maximum value allowed.
 * @param min - The minimum value allowed.
 * @param step - The step size between values.
 * @param initialStepOffset - The initial offset for the step.
 * @param value - The value to calculate the closest valid value for.
 * @returns The closest valid value based on the given parameters.
 */
export const calcScaleValueWithStepOffset = ({
  initialStepOffset,
  max,
  min,
  step,
  value,
}: {
  max: number;
  min: number;
  step: number;
  initialStepOffset: number;
  value: number;
}): number => {
  // Calculate the first step after initialStepOffset that is greater than or equal to min
  const firstValidStep =
    initialStepOffset + Math.ceil((min - initialStepOffset) / step) * step;
  if (firstValidStep > max) {
    return value; // If the first valid step is beyond max, return the original value
  }
  const stepsFromFirstValid = Math.round((value - firstValidStep) / step);
  let closestValue = firstValidStep + stepsFromFirstValid * step;
  // Ensure the closest value is within bounds
  closestValue = Math.max(min, closestValue);
  closestValue = Math.min(max, closestValue);

  // Include min and max as valid steps explicitly
  if (Math.abs(min - value) < Math.abs(closestValue - value)) {
    closestValue = min;
  }
  if (Math.abs(max - value) < Math.abs(closestValue - value)) {
    closestValue = max;
  }
  return closestValue;
};

/**
 * Calculates the scale value without considering the step offset.
 * @param {object} options - The options object.
 * @param {number} options.max - The maximum value of the scale.
 * @param {number} options.min - The minimum value of the scale.
 * @param {number} options.step - The step value of the scale.
 * @param {number} options.value - The current value of the scale.
 * @returns {number} - The calculated scale value without step offset.
 */
export const calcScaleValueWithoutStepOffset = ({
  max,
  min,
  step,
  value,
}: {
  max: number;
  min: number;
  step: number;
  value: number;
}): number => {
  const modifiedValue = value - min;
  let halfScaleLength = step / 2;
  if (
    (max - min) % step > 0 &&
    modifiedValue / step > Math.floor((max - min) / step)
  ) {
    halfScaleLength = ((max - min) % step) / 2;
  }
  if (modifiedValue % step > halfScaleLength) {
    const upValue = min + Math.ceil(modifiedValue / step) * step;
    return upValue > max ? max : upValue;
  }
  return min + Math.floor(modifiedValue / step) * step;
};

/**
 * Calculates the scaled value based on the given parameters.
 * If `initialStepOffset` is provided, it uses `calcScaleValueWithStepOffset` function,
 * otherwise it uses `calcScaleValueWithoutStepOffset` function.
 * Setting initialStepOffset will change the available steps to be from initialStepOffset to max.
 * Without initialStepOffset, min=1, step=5 -> [1, 6, 11, 16, ...]
 * With initialStepOffset=0, min=1, step=5 -> [1, 5, 10, 15, ...]
 * @param max - The maximum value of the scale.
 * @param min - The minimum value of the scale.
 * @param step - The step size of the scale.
 * @param initialStepOffset - The initial step offset (optional).
 * @param value - The value to be scaled.
 * @returns The scaled value.
 */
export const calcScaleValue = ({
  initialStepOffset,
  max,
  min,
  step,
  value,
}: {
  max: number;
  min: number;
  step: number;
  initialStepOffset?: number;
  value: number;
}): number => {
  if (step <= 0) {
    return value;
  }
  if (initialStepOffset !== undefined) {
    return calcScaleValueWithStepOffset({
      initialStepOffset,
      max,
      min,
      step,
      value,
    });
  }
  return calcScaleValueWithoutStepOffset({ max, min, step, value });
};

export const shouldUpdateLeftThumb = ({
  activePointer,
  newValue,
  prevValue,
}: {
  activePointer: string;
  newValue: number;
  prevValue: number[];
}): boolean => {
  return (
    (activePointer === 'left' && newValue < prevValue[1]) ||
    newValue <= prevValue[0]
  );
};

export const shouldUpdateRightThumb = ({
  activePointer,
  newValue,
  prevValue,
}: {
  activePointer: string;
  newValue: number;
  prevValue: number[];
}): boolean => {
  return (
    (activePointer === 'right' && newValue > prevValue[0]) ||
    newValue >= prevValue[1]
  );
};

export const calcNewRangeValue = ({
  activePointer,
  newValue,
  prevValue,
}: {
  prevValue: number[];
  newValue: number;
  activePointer: React.MutableRefObject<string>;
}): number[] => {
  if (
    shouldUpdateLeftThumb({
      activePointer: activePointer.current,
      newValue,
      prevValue,
    })
  ) {
    if (activePointer.current === 'right') {
      activePointer.current = 'left';
    }
    return [newValue, prevValue[1]];
  }
  if (
    shouldUpdateRightThumb({
      activePointer: activePointer.current,
      newValue,
      prevValue,
    })
  ) {
    if (activePointer.current === 'left') {
      activePointer.current = 'right';
    }
    return [prevValue[0], newValue];
  }
  return prevValue;
};

export const getScale = ({
  initialStepOffset,
  max,
  min,
  step,
  type,
}: {
  type: SliderType;
  max: number;
  min: number;
  step: number;
  initialStepOffset?: number;
}): { showScale: boolean; scaleOffsets: number[] } => {
  const showScale = type === 'discrete' && step > 0 && step < max - min;
  let scaleOffsets: number[] = [];
  if (showScale) {
    const steps = [min];
    for (let i = initialStepOffset ?? min; i < max; i += step) {
      if (i > min) {
        steps.push(i);
      }
    }
    steps.push(max);
    scaleOffsets = steps.map((stepValue) =>
      translateValue({
        inputMax: max,
        inputMin: min,
        outputMax: 100,
        outputMin: 0,
        value: stepValue,
      }),
    );
  }
  return { scaleOffsets, showScale };
};

export const getOffset = ({
  max,
  min,
  offsetBoundaries,
  range,
  value,
}: {
  range: boolean;
  max: number;
  min: number;
  value: number | number[];
  offsetBoundaries: SliderOffsetBoundariesProps;
}): {
  offset: number;
  offsetLeft: number;
  offsetRight: number;
} => {
  // Is it not possible to translate the value when min and max are the same
  // translateValue would return NaN
  if (min === max) {
    return { offset: 100, offsetLeft: 0, offsetRight: 0 };
  }
  let offset, offsetLeft, offsetRight;
  if (range) {
    offsetLeft = translateValue({
      inputMax: max,
      inputMin: min,
      outputMax: offsetBoundaries.max,
      outputMin: offsetBoundaries.min,
      value: value[0],
    });
    offsetRight =
      100.0 -
      translateValue({
        inputMax: max,
        inputMin: min,
        outputMax: offsetBoundaries.max,
        outputMin: offsetBoundaries.min,
        value: value[1],
      });
  } else {
    offset = translateValue({
      inputMax: max,
      inputMin: min,
      outputMax: offsetBoundaries.max,
      outputMin: offsetBoundaries.min,
      value: value as number,
    });
  }
  return { offset, offsetLeft, offsetRight };
};

export const equalsRangeValues = ({
  values1,
  values2,
}: {
  values1: number[];
  values2: number[];
}): boolean => {
  if (
    !Array.isArray(values1) ||
    !Array.isArray(values2) ||
    values1.length !== 2 ||
    values2.length !== 2
  ) {
    return false;
  }
  return values1[0] === values2[0] && values1[1] === values2[1];
};

const isAllowValue = ({
  max,
  min,
  value,
}: {
  max: number;
  min: number;
  value: number;
}): boolean => {
  return value !== undefined && value >= min && value <= max;
};

const allowValueOrDefault = ({
  defaultValue,
  max,
  min,
  value,
}: {
  max: number;
  min: number;
  value: number;
  defaultValue: number;
}): number => {
  return isAllowValue({ max, min, value }) ? value : defaultValue;
};

const isValidRangeValue = ({
  value,
}: {
  value: number | number[];
}): boolean => {
  return Boolean(value && Array.isArray(value) && value.length === 2);
};

export const calcDefaultValue = ({
  initialStepOffset,
  max,
  min,
  range,
  step,
  value,
}: {
  range: boolean;
  max: number;
  min: number;
  step: number;
  initialStepOffset?: number;
  value: number | number[];
}): number | number[] => {
  // range
  if (range) {
    let values = [min, max];
    if (isValidRangeValue({ value })) {
      const value1 = value[0];
      const value2 = value[1];
      const value1ToScale = allowValueOrDefault({
        defaultValue: min,
        max,
        min,
        value: value1,
      });
      const value2ToScale = allowValueOrDefault({
        defaultValue: max,
        max,
        min,
        value: value2,
      });
      const scaledValue1 = calcScaleValue({
        initialStepOffset,
        max,
        min,
        step,
        value: value1ToScale,
      });
      const scaledValue2 = calcScaleValue({
        initialStepOffset,
        max,
        min,
        step,
        value: value2ToScale,
      });
      values = [scaledValue1, scaledValue2];
    }
    return values;
  }
  // not range
  const valueToScale = allowValueOrDefault({
    defaultValue: min,
    max,
    min,
    value: value as number,
  });
  return calcScaleValue({
    initialStepOffset,
    max,
    min,
    step,
    value: valueToScale,
  });
};

export const focusThumb = ({
  container,
  currentActivePointer,
  range,
}: {
  container: HTMLDivElement | null;
  range: boolean;
  currentActivePointer: string;
}): void => {
  if (!container) {
    return;
  }
  let thumb: null | Element = null;
  if (range) {
    const [leftThumb, rightThumb] = Array.from(
      container.querySelectorAll('[role="slider"]'),
    );
    thumb = currentActivePointer === 'left' ? leftThumb : rightThumb;
  } else {
    thumb = container.querySelector('[role="slider"]');
  }
  if (thumb instanceof HTMLElement && document.activeElement !== thumb) {
    thumb.focus();
  }
};
