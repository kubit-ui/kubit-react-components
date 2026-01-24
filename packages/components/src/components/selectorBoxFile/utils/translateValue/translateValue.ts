/**
 * Translates a value from one range to another.
 * This is useful in scenarios where you need to map a value from one scale
 * to another, such as converting a temperature from Celsius to Fahrenheit,
 * or mapping a slider value to a different range.
 *
 * @param {Object} params - The parameters for the translation.
 * @param {number} params.inputMin - The minimum value of the input range.
 * @param {number} params.inputMax - The maximum value of the input range.
 * @param {number} params.outputMin - The minimum value of the output range.
 * @param {number} params.outputMax - The maximum value of the output range.
 * @param {number} params.value - The value to be translated.
 * @returns {number} - The translated value, constrained within the output range.
 *
 *  * @example
 * // Translates 50 from the range [0, 100] to the range [5, 10]
 * const output = translateValue({inputMin: 0, inputMax: 100, outputMin: 5, outputMax: 10, value: 50});
 * console.log(output); // 7.5
 */
export const translateValue = ({
  inputMax,
  inputMin,
  outputMax,
  outputMin,
  value,
}: {
  inputMin: number;
  inputMax: number;
  outputMin: number;
  outputMax: number;
  value: number;
}): number => {
  if (inputMin === inputMax) {
    return outputMin;
  }

  const inputRange = inputMax - inputMin;
  const outputRange = outputMax - outputMin;
  const scaledInputValue = (value - inputMin) / inputRange;
  const outputValue = outputMin + scaledInputValue * outputRange;

  return Math.min(outputMax, Math.max(outputMin, outputValue));
};
