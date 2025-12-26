interface AdjustMaxCountersNumberType {
  propMaxCountersNumber?: number;
  maxStepsNumber: number;
}

const DEFAULT_MAX_COUNTERS_NUMBER = 5;

export const adjustMaxCountersNumber = ({
  maxStepsNumber,
  propMaxCountersNumber,
}: AdjustMaxCountersNumberType): number => {
  let maxCountersNumber: number;

  // To avoid break the pagination
  if (maxStepsNumber <= 3) {
    maxCountersNumber = maxStepsNumber;
    return maxCountersNumber;
  }

  maxCountersNumber = propMaxCountersNumber || DEFAULT_MAX_COUNTERS_NUMBER;

  // When maxStepsNumber is greater than 3, the min maxCounters should be 3
  if (maxStepsNumber > 3 && maxCountersNumber <= 2) {
    maxCountersNumber = 3;
  }

  maxCountersNumber = Math.min(maxStepsNumber, maxCountersNumber);

  return maxCountersNumber;
};
