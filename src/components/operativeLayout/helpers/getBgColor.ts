import { DeviceBreakpointsType } from '@/types';

import { IOperativeLayoutBiColor } from '../types';

const MAX_PERCENTAGE = 100;

type getBgColorReturnValuesType = {
  bgColor?: string;
  leftBgColor?: string;
  rightBgColor?: string;
};

// eslint-disable-next-line complexity
export const getBgColor = (
  mainContainerWidth: number | null,
  asideContainerPosition: number | null,
  contentBgColor: string | IOperativeLayoutBiColor | undefined,
  contentOverflowColor: boolean | undefined,
  themeLeftColor: string | undefined,
  themeRightColor: string | undefined,
  device: DeviceBreakpointsType
): getBgColorReturnValuesType => {
  // If the width of the content does not exist, it does not execute the function
  if (!mainContainerWidth) {
    return {};
  }
  // The contentBgColor can be a string, in which case it returns the following object
  if (typeof contentBgColor === 'string') {
    return contentOverflowColor
      ? { bgColor: contentBgColor }
      : { leftBgColor: contentBgColor, rightBgColor: contentBgColor };
  }
  const isObject = typeof contentBgColor === 'object';
  const leftColor = isObject ? contentBgColor.leftContainerColor : themeLeftColor;
  const rightColor = isObject ? contentBgColor.rightContainerColor : themeRightColor;
  // When the content does not overflow the color, it just paints the color in the left and right containers
  if (!contentOverflowColor || device !== DeviceBreakpointsType.DESKTOP) {
    return { leftBgColor: leftColor, rightBgColor: rightColor };
  }
  // If the side content does not exist, the color on the left will be the main color of the component
  if (!asideContainerPosition) {
    return { bgColor: leftColor };
  }
  // If the component is two-color, it will return this string for the styled component
  const sidePercentage = (asideContainerPosition * MAX_PERCENTAGE) / mainContainerWidth;
  const color = `linear-gradient(to right, ${leftColor} ${sidePercentage}%, ${rightColor} ${sidePercentage}% 100%)`;
  return { bgColor: color };
};
