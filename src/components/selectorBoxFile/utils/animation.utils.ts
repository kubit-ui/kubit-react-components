import { translateValue } from '../../../utils/translateValue/translateValue';

const FIRST_QUARTER = 25;
const SECOND_QUARTER = 50;
const THIRD_QUARTER = 75;
const MAX = 100;

const getBarMeasure = (percentage: number, inputMin: number, inputMax: number): number => {
  if (percentage > inputMax) {
    return MAX;
  }
  return translateValue({
    inputMin,
    inputMax,
    outputMin: 0,
    outputMax: MAX,
    value: percentage,
  });
};

export const getTopBarWith = (percentage: number): number =>
  getBarMeasure(percentage, 0, FIRST_QUARTER);
export const getRightBarHeight = (percentage: number): number =>
  getBarMeasure(percentage, FIRST_QUARTER, SECOND_QUARTER);
export const getBottomBarWith = (percentage: number): number =>
  getBarMeasure(percentage, SECOND_QUARTER, THIRD_QUARTER);
export const getLeftBarHeight = (percentage: number): number =>
  getBarMeasure(percentage, THIRD_QUARTER, MAX);
