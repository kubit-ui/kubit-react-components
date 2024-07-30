import { DeviceBreakpointsType } from '@/types';

interface Configuration {
  [key: string]: {
    flexReverse: boolean;
    reverse: boolean;
  };
}

export const getOrderConfiguration = (
  tabInverse: DeviceBreakpointsType[],
  orderInverse: DeviceBreakpointsType[]
): Configuration => {
  const breakpoints = [
    DeviceBreakpointsType.MOBILE,
    DeviceBreakpointsType.TABLET,
    DeviceBreakpointsType.DESKTOP,
  ];

  const configuration: Configuration = {};

  breakpoints.forEach(breakpoint => {
    configuration[breakpoint] = {
      flexReverse: tabInverse.includes(breakpoint),
      reverse:
        (tabInverse.includes(breakpoint) && !orderInverse.includes(breakpoint)) ||
        (orderInverse.includes(breakpoint) && !tabInverse.includes(breakpoint)),
    };
  });

  return configuration;
};
