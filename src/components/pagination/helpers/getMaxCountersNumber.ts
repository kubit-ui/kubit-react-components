const buildBeforeCounters = (beforeNum, currentPosition) =>
  [...Array(beforeNum)].map((_, index) => currentPosition - (beforeNum - index));

const buildAfterCounters = (afterNum, currentPosition) =>
  [...Array(afterNum)].map((_, index) => currentPosition + 1 + index);

export const buildstepsNumber = (
  currentStep: number,
  maxSteps: number,
  themeMaxNumber: number | undefined = 0,
  propsMaxNumber: number | undefined
): Array<string | number> => {
  let maxCounters =
    propsMaxNumber && propsMaxNumber > themeMaxNumber ? propsMaxNumber : themeMaxNumber;

  let startWith: Array<string | number> = [];
  let endWith: Array<string | number> = [];
  let beforeCounters: Array<number> = [];
  let afterCounters: Array<number> = [];

  let currentPosition = currentStep + 1;

  if (currentPosition >= maxCounters && maxSteps !== maxCounters) {
    maxCounters--;
    startWith = [1, '...'];
  }

  if (Math.abs(maxSteps - currentPosition) >= maxCounters) {
    maxCounters--;
    endWith = ['...', maxSteps];
  }

  const isLeftEdge = currentPosition <= maxCounters;
  const isRightEdge = Math.abs(maxSteps - currentPosition) < maxCounters;

  if (isLeftEdge) {
    currentPosition = 1;
    afterCounters = buildAfterCounters(maxCounters - 1, currentPosition);
  } else if (isRightEdge) {
    currentPosition = maxSteps - maxCounters + 1;
    afterCounters = buildAfterCounters(maxCounters - 1, currentPosition);
  } else {
    const counterDivided = (maxCounters - 1) / 2;
    const beforeNum = Math.floor(counterDivided);
    const afterNum = Math.ceil(counterDivided);

    beforeCounters = buildBeforeCounters(beforeNum, currentPosition);
    afterCounters = buildAfterCounters(afterNum, currentPosition);
  }

  return [...startWith, ...beforeCounters, currentPosition, ...afterCounters, ...endWith];
};
