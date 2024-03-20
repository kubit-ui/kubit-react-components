import { DeviceBreakpointsType } from '@/types';

import { getBgColor, getHorizontalMargin } from '../helpers';
import { IOperativeLayoutHorizontalMargin } from '../types';

describe('OperativeLayout helpers - getBgColor', () => {
  const mainContainerWidth = 1080;
  const asideContainerPosition = 768;
  const contentBgColorSimple = 'white';
  const contentBgColorObject = { leftContainerColor: 'red', rightContainerColor: 'blue' };
  const contentOverflowColorTruthy = true;
  const contentOverflowColorFalsy = false;
  const themeLeftColor = 'pink';
  const themeRightColor = 'marine';

  it('Should return a simply color, when contentBgColor is a string', () => {
    const { bgColor } = getBgColor(
      mainContainerWidth,
      asideContainerPosition,
      contentBgColorSimple,
      contentOverflowColorTruthy,
      undefined,
      undefined,
      DeviceBreakpointsType.DESKTOP
    );

    expect(bgColor).toBe(contentBgColorSimple);
  });

  it('Should return the same color in the boxes, when the contentBgColor is a string and is not overflow', () => {
    const { leftBgColor, rightBgColor } = getBgColor(
      mainContainerWidth,
      asideContainerPosition,
      contentBgColorSimple,
      contentOverflowColorFalsy,
      undefined,
      undefined,
      DeviceBreakpointsType.DESKTOP
    );

    expect(leftBgColor).toBe(contentBgColorSimple);
    expect(rightBgColor).toBe(contentBgColorSimple);
  });
  it('Should return the theme colors, when the contentBgColor is not set', () => {
    const { leftBgColor, rightBgColor } = getBgColor(
      mainContainerWidth,
      asideContainerPosition,
      undefined,
      contentOverflowColorFalsy,
      themeLeftColor,
      themeRightColor,
      DeviceBreakpointsType.DESKTOP
    );

    expect(leftBgColor).toBe(themeLeftColor);
    expect(rightBgColor).toBe(themeRightColor);
  });
  it('should return the colors setter into contentBgColor for the boxes, when is an object', () => {
    const { leftBgColor, rightBgColor } = getBgColor(
      mainContainerWidth,
      asideContainerPosition,
      contentBgColorObject,
      contentOverflowColorFalsy,
      undefined,
      undefined,
      DeviceBreakpointsType.DESKTOP
    );

    expect(leftBgColor).toBe(contentBgColorObject.leftContainerColor);
    expect(rightBgColor).toBe(contentBgColorObject.rightContainerColor);
  });
  it('should return a color gradient for bgColor, when the contentBgColor is a object', () => {
    const { bgColor } = getBgColor(
      mainContainerWidth,
      asideContainerPosition,
      contentBgColorObject,
      contentOverflowColorTruthy,
      undefined,
      undefined,
      DeviceBreakpointsType.DESKTOP
    );

    expect(bgColor).toMatch('linear-gradient');
  });

  it('should the color on the left will be the main color of the component If the side content does not exist', () => {
    const { bgColor } = getBgColor(
      mainContainerWidth,
      null,
      contentBgColorObject,
      contentOverflowColorTruthy,
      undefined,
      undefined,
      DeviceBreakpointsType.DESKTOP
    );

    expect(bgColor).toMatch(contentBgColorObject.leftContainerColor);
  });
});

describe('OperativeLayout helpers - getHorizontalMargin', () => {
  const marginString = '120px';
  const marginObject: IOperativeLayoutHorizontalMargin = {
    leftMargin: '90px',
    rightMargin: '60px',
  };

  it('should return a string with the value set, when the prop is a string', () => {
    const margin = getHorizontalMargin(marginString);

    expect(margin?.includes(marginString)).toBeTruthy();
  });

  it('should return a string with both values, when the prop is a object', () => {
    const margin = getHorizontalMargin(marginObject);

    expect(
      margin?.includes(marginObject.leftMargin) && margin?.includes(marginObject.rightMargin)
    ).toBeTruthy();
  });
});
