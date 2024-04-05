import { DeviceBreakpointsType } from '@/types';

import { buildMediaProgessBarAriaLabel, mediaProgressBarIndex } from '../mediaProgressBarUtils';

const mock_props = {
  barsNum: 5,
  device: DeviceBreakpointsType.DESKTOP,
  maxBars: {
    default: 5,
    [DeviceBreakpointsType.DESKTOP]: 5,
    [DeviceBreakpointsType.TABLET]: 4,
    [DeviceBreakpointsType.MOBILE]: 3,
  },
};

describe('mediaProgressBarIndex', () => {
  it('should return the correct index value when current bar goes to the last bar', () => {
    const props = {
      ...mock_props,
      index: 2,
      currentBar: 4,
    };

    const result = mediaProgressBarIndex(props);

    expect(result).toBe(2);
  });
  it('should return the correct index value when currentBar stays in the next to last bar when there is more bars than maxBarsOnDesktop', () => {
    const props = {
      ...mock_props,
      index: 2,
      currentBar: 3,
    };

    const result = mediaProgressBarIndex(props);

    expect(result).toBe(2);
  });

  it('should return the correct index value at first bars', () => {
    const props = {
      ...mock_props,
      index: 1,
      currentBar: 2,
    };

    const result = mediaProgressBarIndex(props);

    expect(result).toBe(1);
  });

  it('should return undefined when index is greater than max bars limit on desktop or tablet', () => {
    const props = {
      ...mock_props,
      index: 10,
      currentBar: 4,
    };

    const result = mediaProgressBarIndex(props);

    expect(result).toBeUndefined();
  });

  it('should return undefined when index is greater than max bars limit on mobile', () => {
    const props = {
      ...mock_props,
      index: 5,
      currentBar: 3,
      device: DeviceBreakpointsType.MOBILE,
    };

    const result = mediaProgressBarIndex(props);

    expect(result).toBeUndefined();
  });
  it('should return undefined when barAriaLabel is undefined', () => {
    const currentBar = 2;
    const barsNum = 5;
    const barAriaLabel = undefined;

    const result = buildMediaProgessBarAriaLabel(currentBar, barsNum, barAriaLabel);

    expect(result).toBeUndefined();
  });
  it('should return the correct aria label when barAriaLabel is defined', () => {
    const currentBar = 2;
    const barsNum = 5;
    const barAriaLabel = 'Page {{currentBar}} of {{barsNum}}';

    const result = buildMediaProgessBarAriaLabel(currentBar, barsNum, barAriaLabel);

    expect(result).toBe('Page 3 of 5');
  });
});
