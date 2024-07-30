import { DeviceBreakpointsType } from '@/types';

import { getOrderConfiguration } from './getOrderConfiguration';

describe('getOrderConfiguration', () => {
  it('should return the correct configuration', () => {
    const tabInverse: DeviceBreakpointsType[] = [
      DeviceBreakpointsType.MOBILE,
      DeviceBreakpointsType.DESKTOP,
    ];
    const orderInverse: DeviceBreakpointsType[] = [
      DeviceBreakpointsType.TABLET,
      DeviceBreakpointsType.DESKTOP,
    ];

    const expectedConfiguration = {
      [DeviceBreakpointsType.MOBILE]: {
        flexReverse: true,
        reverse: true,
      },
      [DeviceBreakpointsType.TABLET]: {
        flexReverse: false,
        reverse: true,
      },
      [DeviceBreakpointsType.DESKTOP]: {
        flexReverse: true,
        reverse: false,
      },
    };

    const configuration = getOrderConfiguration(tabInverse, orderInverse);

    expect(configuration).toEqual(expectedConfiguration);
  });

  it('should return an empty configuration when tabInverse and orderInverse are empty', () => {
    const tabInverse: DeviceBreakpointsType[] = [];
    const orderInverse: DeviceBreakpointsType[] = [];

    const expectedConfiguration = {
      [DeviceBreakpointsType.MOBILE]: {
        flexReverse: false,
        reverse: false,
      },
      [DeviceBreakpointsType.TABLET]: {
        flexReverse: false,
        reverse: false,
      },
      [DeviceBreakpointsType.DESKTOP]: {
        flexReverse: false,
        reverse: false,
      },
    };

    const configuration = getOrderConfiguration(tabInverse, orderInverse);

    expect(configuration).toEqual(expectedConfiguration);
  });
});
