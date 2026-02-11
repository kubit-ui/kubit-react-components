const buildBeforeCounters = (beforeNum: number, currentPosition: number) =>
  [...Array(beforeNum)].map(
    (_, index) => currentPosition - (beforeNum - index),
  );

const buildAfterCounters = (afterNum: number, currentPosition: number) =>
  [...Array(afterNum)].map((_, index) => currentPosition + 1 + index);

export const buildstepsNumber = (
  currentStep: number,
  maxSteps: number,
  maxCountersNumber: number,
): Array<string | number> => {
  // Number of counters to shown in the pagination
  let maxCounters = maxCountersNumber;

  let startWith: Array<string | number> = [];
  let endWith: Array<string | number> = [];
  let beforeCounters: Array<number> = [];
  let afterCounters: Array<number>;

  // Current position is selected page. Have in mind that currentStep is 0 based
  let currentPosition = currentStep + 1;

  // If there is enought space between the start of the pagination and the current position
  if (currentPosition >= maxCountersNumber && maxSteps !== maxCountersNumber) {
    // The pagination will start with 1, ...
    startWith = [1, '...'];
    // Since we have already written a counter (1), number of counters to shown is decreased by 1
    maxCounters--;
  }

  // If there is enought space between the current position and the end of the pagination,
  // or all the first maxCountersNumber -1 numbers has been added, and there is space between the last number
  if (
    (maxSteps + 1 - currentPosition >= maxCountersNumber ||
      (currentPosition < maxCountersNumber &&
        maxSteps - maxCountersNumber >= 1)) &&
    maxSteps !== maxCountersNumber
  ) {
    // The pagination will end with ..., maxSteps
    endWith = ['...', maxSteps];
    // Since we have already written a counter (maxSteps), number of counters to shown is decreased by 1
    maxCounters--;
  }

  // If isLeftEdge is true, the pagination will start from the first page and show the subsequent pages up to the maximum number of counters.
  const isLeftEdge = currentPosition <= maxCounters;
  // If isRightEdge is true, the pagination will start from a position such that the last page is included and show the preceding pages up to the maximum number of counters.
  const isRightEdge = Math.abs(maxSteps - currentPosition) < maxCounters;

  if (isLeftEdge) {
    currentPosition = 1;
    // maxCounters - 1 because currentPosition will count as one of the counters
    afterCounters = buildAfterCounters(maxCounters - 1, currentPosition);
  } else if (isRightEdge) {
    currentPosition = maxSteps - maxCounters + 1;
    // maxCounters - 1 because currentPosition will count as one of the counters
    afterCounters = buildAfterCounters(maxCounters - 1, currentPosition);
  } else {
    // The rest of the number of counters (-1) should go before and after the current position
    // number - 1 because currentPosition will count as one of the counters
    const counterDivided = (maxCounters - 1) / 2;
    const beforeNum = Math.floor(counterDivided);
    const afterNum = Math.ceil(counterDivided);

    beforeCounters = buildBeforeCounters(beforeNum, currentPosition);
    afterCounters = buildAfterCounters(afterNum, currentPosition);
  }

  return [
    ...startWith,
    ...beforeCounters,
    currentPosition,
    ...afterCounters,
    ...endWith,
  ];
};
