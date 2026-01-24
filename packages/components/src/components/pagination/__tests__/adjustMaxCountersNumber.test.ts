import { adjustMaxCountersNumber } from '../helpers/adjustMaxCountersNumber';

describe('Pagination - Utils - adjustMaxCountersNumber', () => {
  it('Should return maxStepsNumber if maxStepsNumber <= 3', () => {
    const propMaxCountersNumber = undefined;
    const maxStepsNumber = 2;
    expect(
      adjustMaxCountersNumber({ maxStepsNumber, propMaxCountersNumber }),
    ).toBe(2);
  });

  it('Should return DEFAULT_MAX_COUNTERS_NUMBER if !propMaxCountersNumber', () => {
    const propMaxCountersNumber = undefined;
    const maxStepsNumber = 10;
    expect(
      adjustMaxCountersNumber({ maxStepsNumber, propMaxCountersNumber }),
    ).toBe(5);
  });

  it('Should return 3 if maxCountersNumber <= 2 but maxStepsNumber > 3', () => {
    const propMaxCountersNumber = 2;
    const maxStepsNumber = 4;
    expect(
      adjustMaxCountersNumber({ maxStepsNumber, propMaxCountersNumber }),
    ).toBe(3);
  });

  it('Should return propMaxCountersNumber', () => {
    const propMaxCountersNumber = 4;
    const maxStepsNumber = 10;
    expect(
      adjustMaxCountersNumber({ maxStepsNumber, propMaxCountersNumber }),
    ).toBe(4);
  });
});
