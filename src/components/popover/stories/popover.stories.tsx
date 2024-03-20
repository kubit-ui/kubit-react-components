import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { CssAnimationTimingFunction, CssAnimationVariants } from '@/components/cssAnimation';
import { ReplaceContent } from '@/components/storybook/replaceContent/replaceContent';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';
import { POSITIONS } from '@/types';

import { PopoverControlled as Story } from '../popoverControlled';
import { PopoverPositionVariantType } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Resources/Popover',
  component: Story,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const Popover: Story = {
  args: {
    open: true,
    hasBackDrop: true,
    positionVariant: PopoverPositionVariantType.ABSOLUTE,
    align: POSITIONS.CENTER,
    children: <ReplaceContent width="100%" />,
    variant: Object.values(variantsObject[themeSelected].PopoverVariantType || {})[0] as string,
    animation: {
      type: CssAnimationVariants.SLIDE_IN,
    },
    animationOptions: {
      duration: 0.5,
      delay: 0,
      timingFunction: CssAnimationTimingFunction.EASE_IN,
      iterationCount: 1,
      animationDistanceInPx: 500,
      animationRotationInDeg: 500,
    },
    themeArgs: themesObject[themeSelected][STYLES_NAME.POPOVER],
  },
};

export const PopoverWithCtv: Story = {
  args: {
    open: true,
    hasBackDrop: true,
    positionVariant: PopoverPositionVariantType.ABSOLUTE,
    align: POSITIONS.CENTER,
    children: <ReplaceContent width="100%" />,
    variant: Object.values(variantsObject[themeSelected].PopoverVariantType || {})[0] as string,
    animation: {
      type: CssAnimationVariants.SLIDE_IN,
    },
    animationOptions: {
      duration: 0.5,
      delay: 0,
      timingFunction: CssAnimationTimingFunction.EASE_IN,
      iterationCount: 1,
      animationDistanceInPx: 500,
      animationRotationInDeg: 500,
    },
    ctv: {
      DESKTOP: {
        fullWidth: true,
      },
    },
  },
};
