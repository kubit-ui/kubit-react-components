import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ICONS } from '@/assets';
import { ReplaceContent } from '@/components/storybook/replaceContent/replaceContent';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';
import { DeviceBreakpointsType } from '@/types';

import { CarouselUnControlled as Story } from '../carouselUnControlled';
import { CarouselAlignType } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Navigation/Carousel',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const Carousel: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].CarouselVariantType || {})[0] as string,
    elements: [
      <ReplaceContent key={0} id="test0">
        0
      </ReplaceContent>,
      <ReplaceContent key={1} id="test1">
        1
      </ReplaceContent>,
      <ReplaceContent key={2} id="test2">
        2
      </ReplaceContent>,
      <ReplaceContent key={3} id="test3">
        3
      </ReplaceContent>,
      <ReplaceContent key={4} id="test4">
        4
      </ReplaceContent>,
      <ReplaceContent key={5} id="test5">
        5
      </ReplaceContent>,
    ],
    leftArrow: {
      icon: ICONS.ICON_CHEVRON_LEFT,
      ['aria-label']: 'Left arrow aria label',
    },
    rightArrow: {
      icon: ICONS.ICON_CHEVRON_RIGHT,
      ['aria-label']: 'Right arrow aria label',
    },
    circular: true,
    pageControlVariant: Object.values(
      variantsObject[themeSelected].PageControlVariant || {}
    )[0] as string,
    pageControlArrowsControlVariant: Object.values(
      variantsObject[themeSelected].PageControlAutomateVariant || {}
    )[0] as string,
    extraPadding: 0,
    disableSwipe: false,
    extraPaddingAsArrow: true,
    allowModifySliceWidth: true,
    centerMode: false,
    numElementsPerPage: 3,
    numElementsToSlide: 3,
    displayArrowsOnCarousel: true,
    onePageAlign: CarouselAlignType.CENTER,
    pageControlAutomateConfig: {
      variant: Object.values(
        variantsObject[themeSelected].PageControlAutomateVariant || {}
      )[0] as string,
      playStop: {
        icon: { icon: ICONS.ICON_PLACEHOLDER, altText: 'alt text play' },
        twistedIcon: { icon: ICONS.ICON_CLOSE, altText: 'alt text stop' },
      },
      leftArrow: {
        icon: { icon: ICONS.ICON_CHEVRON_LEFT, altText: 'alt text left arrow' },
      },
      rightArrow: {
        icon: { icon: ICONS.ICON_CHEVRON_RIGHT, altText: 'alt text right arrow' },
      },
      mediaProgressBar: {
        barsAriaLabels: ['aria-label-0', 'aria-label-1', 'aria-label-2', 'aria-label-3'],
        barProgressDuration: 2000,
        maxBars: {
          default: 5,
          [DeviceBreakpointsType.DESKTOP]: 5,
          [DeviceBreakpointsType.TABLET]: 4,
          [DeviceBreakpointsType.MOBILE]: 3,
        },
      },
      playingInitially: false,
    },
    themeArgs: themesObject[themeSelected][STYLES_NAME.CAROUSEL],
  },
};

export const CarouselWithCtv: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].CarouselVariantType || {})[0] as string,
    elements: [
      <ReplaceContent key={0} id="test0">
        0
      </ReplaceContent>,
      <ReplaceContent key={1} id="test1">
        1
      </ReplaceContent>,
      <ReplaceContent key={2} id="test2">
        2
      </ReplaceContent>,
      <ReplaceContent key={3} id="test3">
        3
      </ReplaceContent>,
      <ReplaceContent key={4} id="test4">
        4
      </ReplaceContent>,
      <ReplaceContent key={5} id="test5">
        5
      </ReplaceContent>,
      <ReplaceContent key={6} id="test6">
        6
      </ReplaceContent>,
      <ReplaceContent key={7} id="test7">
        7
      </ReplaceContent>,
      <ReplaceContent key={8} id="test8">
        8
      </ReplaceContent>,
      <ReplaceContent key={9} id="test9">
        9
      </ReplaceContent>,
      <ReplaceContent key={10} id="test10">
        10
      </ReplaceContent>,
    ],
    circular: true,
    leftArrow: {
      icon: ICONS.ICON_CHEVRON_LEFT,
      ['aria-label']: 'Left arrow aria label',
    },
    rightArrow: {
      icon: ICONS.ICON_CHEVRON_RIGHT,
      ['aria-label']: 'Right arrow aria label',
    },
    pageControlVariant: Object.values(
      variantsObject[themeSelected].PageControlVariant || {}
    )[0] as string,
    pageControlArrowsControlVariant: Object.values(
      variantsObject[themeSelected].PageControlAutomateVariant || {}
    )[0] as string,
    disableSwipe: false,
    extraPadding: 0,
    extraPaddingAsArrow: true,
    allowModifySliceWidth: true,
    centerMode: false,
    numElementsPerPage: 3,
    numElementsToSlide: 3,
    displayArrowsOnCarousel: true,
    onePageAlign: CarouselAlignType.CENTER,
    ctv: {
      carouselContainer: {
        background_color: 'green',
      },
    },
  },
};
