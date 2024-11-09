import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ReplaceContent } from '@/components/storybook/replaceContent/replaceContent';

import { CssAnimation as Story } from '../cssAnimation';
import { CssAnimationExecuteOption, CssAnimationTimingFunction } from '../types/cssAnimation';
import { CssAnimationVariants } from '../types/variant';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Resources/CssAnimation',
  component: Story,
  parameters: {
    layout: 'centered',
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/cssAnimation',
  },
  tags: ['autodocs'],
  argTypes: argtypes(),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const CssAnimation: Story = {
  render: args => (
    <Story {...args}>
      <ReplaceContent />
    </Story>
  ),
  args: {
    variant: {
      type: Object.values(CssAnimationVariants || {})[0],
    },
    exec: CssAnimationExecuteOption.START,
    options: {
      duration: 0.5,
      delay: 0,
      timingFunction: CssAnimationTimingFunction.EASE_IN,
      iterationCount: 1,
      animationDistanceInPx: 500,
      animationRotationInDeg: 500,
    },
  },
};
