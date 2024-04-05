import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ICONS } from '@/assets';
import { ReplaceContent } from '@/components/storybook/replaceContent/replaceContent';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';
import { DeviceBreakpointsType, ROLES } from '@/types';

import { CarouselUnControlled as Story } from '../carouselUnControlled';
import { CarouselAlignType } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Navigation/Carousel',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
  parameters: {
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/carousel',
    figmaUrl:
      'https://www.figma.com/file/EYQkbENTFO5r8muvXlPoOy/Kubit-v.1.0.0?type=design&node-id=3942-37713&mode=dev',
  },
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const storyArgs = {
  variant: Object.values(variantsObject[themeSelected].CarouselVariantType || {})[0] as string,
  elements: [
    <ReplaceContent
      key={0}
      aria-label="1 of 10"
      aria-roledescription="slide"
      id="carousel-item-1"
      role={ROLES.GROUP}
    >
      First Slide
    </ReplaceContent>,
    <ReplaceContent
      key={1}
      aria-label="2 of 10"
      aria-roledescription="slide"
      id="carousel-item-2"
      role={ROLES.GROUP}
    >
      Second Slide
    </ReplaceContent>,
    <ReplaceContent
      key={2}
      aria-label="3 of 10"
      aria-roledescription="slide"
      id="carousel-item-3"
      role={ROLES.GROUP}
    >
      Third Slide
    </ReplaceContent>,
    <ReplaceContent
      key={3}
      aria-label="4 of 10"
      aria-roledescription="slide"
      id="carousel-item-4"
      role={ROLES.GROUP}
    >
      Fourth Slide
    </ReplaceContent>,
    <ReplaceContent
      key={4}
      aria-label="5 of 10"
      aria-roledescription="slide"
      id="carousel-item-5"
      role={ROLES.GROUP}
    >
      Fifth Slice
    </ReplaceContent>,
    <ReplaceContent
      key={5}
      aria-label="6 of 10"
      aria-roledescription="slide"
      id="carousel-item-6"
      role={ROLES.GROUP}
    >
      Sixth Slide
    </ReplaceContent>,
    <ReplaceContent
      key={6}
      aria-label="7 of 10"
      aria-roledescription="slide"
      id="carousel-item-7"
      role={ROLES.GROUP}
    >
      Seventh Slide
    </ReplaceContent>,
    <ReplaceContent
      key={7}
      aria-label="8 of 10"
      aria-roledescription="slide"
      id="carousel-item-8"
      role={ROLES.GROUP}
    >
      Eighth Slide
    </ReplaceContent>,
    <ReplaceContent
      key={8}
      aria-label="9 of 10"
      aria-roledescription="slide"
      id="carousel-item-9"
      role={ROLES.GROUP}
    >
      Ninth Slide
    </ReplaceContent>,
    <ReplaceContent
      key={9}
      aria-label="10 of 10"
      aria-roledescription="slide"
      id="carousel-item-10"
      role={ROLES.GROUP}
    >
      Tenth Slide
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
    variantsObject[themeSelected].ArrowsControlVariant || {}
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
  screenReaderText: '{{currentPage}} of {{numPages}}',
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
      barAriaLabel: 'Bar {{currentBar}} of {{barsNum}}',
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
};

export const Carousel: Story = {
  args: {
    ...storyArgs,
    themeArgs: themesObject[themeSelected][STYLES_NAME.CAROUSEL],
  },
};

export const CarouselWithCtv: Story = {
  args: {
    ...storyArgs,
    ctv: {
      carouselContainer: {
        background_color: 'green',
      },
    },
  },
};
