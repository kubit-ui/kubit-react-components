import { SliderOffsetBoundaries, SliderType } from '../types';

export const calculateChange = ({
  event,
  container,
  offsetBoundaries,
}: {
  event: MouseEvent | React.TouchEvent<Element> | React.MouseEvent<Element, MouseEvent>;
  container: HTMLDivElement;
  offsetBoundaries: SliderOffsetBoundaries;
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
  offset = Math.min(offsetBoundaries.max, Math.max(offsetBoundaries.min, offset));

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
  step,
  offset,
  offsetBoundaries,
}: {
  max: number;
  min: number;
  step: number;
  offset: number;
  offsetBoundaries: SliderOffsetBoundaries;
}): number => {
  let value = translateValue({
    inputMin: offsetBoundaries.min,
    inputMax: offsetBoundaries.max,
    outputMin: min,
    outputMax: max,
    value: offset,
  });
  // Number of decimals
  const decimals = String(step).indexOf('.') > 0 ? String(step).split('.')[1].length : 0;

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
  max,
  min,
  step,
  initialStepOffset,
  value,
}: {
  max: number;
  min: number;
  step: number;
  initialStepOffset: number;
  value: number;
}): number => {
  // Calculate the first step after initialStepOffset that is greater than or equal to min
  const firstValidStep = initialStepOffset + Math.ceil((min - initialStepOffset) / step) * step;
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
  value -= min;
  let halfScaleLength = step / 2;
  if ((max - min) % step > 0 && value / step > Math.floor((max - min) / step)) {
    halfScaleLength = ((max - min) % step) / 2;
  }
  if (value % step > halfScaleLength) {
    const upValue = min + Math.ceil(value / step) * step;
    return upValue > max ? max : upValue;
  }
  return min + Math.floor(value / step) * step;
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
  max,
  min,
  step,
  initialStepOffset,
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
    return calcScaleValueWithStepOffset({ max, min, step, initialStepOffset, value });
  }
  return calcScaleValueWithoutStepOffset({ max, min, step, value });
};

export const calcNewRangeValue = ({
  prevValue,
  newValue,
  activePointer,
}: {
  prevValue: number[];
  newValue: number;
  activePointer: React.MutableRefObject<string>;
}): number[] => {
  if (shouldUpdateLeftThumb({ activePointer: activePointer.current, newValue, prevValue })) {
    if (activePointer.current === 'right') {
      activePointer.current = 'left';
    }
    return [newValue, prevValue[1]];
  } else if (
    shouldUpdateRightThumb({ activePointer: activePointer.current, newValue, prevValue })
  ) {
    if (activePointer.current === 'left') {
      activePointer.current = 'right';
    }
    return [prevValue[0], newValue];
  }
  return prevValue;
};

export const getScale = ({
  type,
  max,
  min,
  step,
  initialStepOffset,
}: {
  type: SliderType;
  max: number;
  min: number;
  step: number;
  initialStepOffset?: number;
}): { showScale: boolean; scaleOffsets: number[] } => {
  const showScale = type === SliderType.DISCRETE && step > 0 && step < max - min;
  let scaleOffsets: number[] = [];
  if (showScale) {
    const steps = [min];
    for (let i = initialStepOffset ?? min; i < max; i += step) {
      if (i > min) {
        steps.push(i);
      }
    }
    steps.push(max);
    scaleOffsets = steps.map(stepValue =>
      translateValue({
        inputMin: min,
        inputMax: max,
        outputMin: 0,
        outputMax: 100,
        value: stepValue,
      })
    );
  }
  return { showScale, scaleOffsets };
};

/**
 * Translates a value from one range to another.
 *
 * @param inputMin - The minimum value of the input range.
 * @param inputMax - The maximum value of the input range.
 * @param outputMin - The minimum value of the output range.
 * @param outputMax - The maximum value of the output range.
 * @param value - The input value to be translated.
 *
 * @returns The translated value in the output range.
 *
 * @example
 * // Translates 50 from the range [0, 100] to the range [5, 10]
 * const output = translateValue({inputMin: 0, inputMax: 100, outputMin: 5, outputMax: 10, value: 50});
 * console.log(output); // 7.5
 */
const translateValue = ({
  inputMin,
  inputMax,
  outputMin,
  outputMax,
  value,
}: {
  inputMin: number;
  inputMax: number;
  outputMin: number;
  outputMax: number;
  value: number;
}): number => {
  const inputRange = inputMax - inputMin;
  const outputRange = outputMax - outputMin;

  const scaledInputValue = (value - inputMin) / inputRange;

  let outputValue = outputMin + scaledInputValue * outputRange;
  outputValue = Math.min(outputMax, Math.max(outputMin, outputValue));

  return outputValue;
};

export const getOffset = ({
  range,
  max,
  min,
  value,
  offsetBoundaries,
}: {
  range: boolean;
  max: number;
  min: number;
  value: number | number[];
  offsetBoundaries: SliderOffsetBoundaries;
}): {
  offset: number;
  offsetLeft: number;
  offsetRight: number;
} => {
  let offset, offsetLeft, offsetRight;
  if (range) {
    offsetLeft = translateValue({
      inputMin: min,
      inputMax: max,
      outputMin: offsetBoundaries.min,
      outputMax: offsetBoundaries.max,
      value: value[0],
    });
    offsetRight =
      100.0 -
      translateValue({
        inputMin: min,
        inputMax: max,
        outputMin: offsetBoundaries.min,
        outputMax: offsetBoundaries.max,
        value: value[1],
      });
  } else {
    offset = translateValue({
      inputMin: min,
      inputMax: max,
      outputMin: offsetBoundaries.min,
      outputMax: offsetBoundaries.max,
      value: value as number,
    });
  }
  return { offset, offsetLeft, offsetRight };
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
  return (activePointer === 'left' && newValue < prevValue[1]) || newValue <= prevValue[0];
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
  return (activePointer === 'right' && newValue > prevValue[0]) || newValue >= prevValue[1];
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
  max,
  min,
  value,
  defaultValue,
}: {
  max: number;
  min: number;
  value: number;
  defaultValue: number;
}): number => {
  return isAllowValue({ max, min, value }) ? value : defaultValue;
};

const isValidRangeValue = ({ value }: { value: number | number[] }): boolean => {
  return Boolean(value && Array.isArray(value) && value.length === 2);
};

export const calcDefaultValue = ({
  range,
  max,
  min,
  step,
  initialStepOffset,
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
      const value1ToScale = allowValueOrDefault({ max, min, value: value1, defaultValue: min });
      const value2ToScale = allowValueOrDefault({ max, min, value: value2, defaultValue: max });
      const scaledValue1 = calcScaleValue({
        max,
        min,
        step,
        initialStepOffset,
        value: value1ToScale,
      });
      const scaledValue2 = calcScaleValue({
        max,
        min,
        step,
        initialStepOffset,
        value: value2ToScale,
      });
      values = [scaledValue1, scaledValue2];
    }
    return values;
  }
  // not range
  const valueToScale = allowValueOrDefault({ max, min, value: value as number, defaultValue: min });
  return calcScaleValue({ max, min, step, initialStepOffset, value: valueToScale });
};
