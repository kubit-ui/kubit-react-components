import { scrollPercentage } from '../scrollPercentage';

describe('scrollPercentage utils', () => {
  it('scrollPercentage - return 375 with proportion > proportionLimit', () => {
    const scrollableElement = {
      scrollHeight: 300,
      clientHeight: 200,
      scrollTop: 250,
    } as HTMLElement;
    const proportionLimit = 1;

    expect(scrollPercentage(scrollableElement, proportionLimit)).toBe(375);
  });
  it('scrollPercentage - return 83.33 with proportion < proportionLimit', () => {
    const scrollableElement = {
      scrollHeight: 300,
      clientHeight: 200,
      scrollTop: 250,
    } as HTMLElement;
    const proportionLimit = 2;

    const result = scrollPercentage(scrollableElement, proportionLimit);

    //We just get 2 decimals for testing
    expect(Number(result.toFixed(2))).toBe(83.33);
  });
  it('scrollPercentage - return 0', () => {
    const scrollableElement = {
      scrollHeight: 200,
      clientHeight: 300,
    } as HTMLElement;

    expect(scrollPercentage(scrollableElement)).toBe(0);
  });
});
