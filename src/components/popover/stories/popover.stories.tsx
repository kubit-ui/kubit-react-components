import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ReplaceContent } from '@/components/storybook/replaceContent/replaceContent';
import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { themesObject, variantsObject } from '@/designSystem/themesObject/themesObject';
import { POSITIONS } from '@/types/positions/positions';

import { CssAnimationTimingFunction } from '../../cssAnimation/types/cssAnimation';
import { CssAnimationVariants } from '../../cssAnimation/types/variant';
import { PopoverControlled as Story } from '../popoverControlled';
import { PopoverPositionVariantType } from '../types/positionVariant';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Resources/Popover',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
  parameters: {
    layout: 'centered',
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/popover',
  },
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
