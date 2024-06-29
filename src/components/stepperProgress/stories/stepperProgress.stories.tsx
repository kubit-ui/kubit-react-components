import type { Meta, StoryObj } from '@storybook/react';

import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { StepperProgress as Story } from '../stepperProgress';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Navigation/StepperProgress',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const StepperProgress: Story = {
  args: {
    variant: Object.values(
      variantsObject[themeSelected].StepperProgressVariants || {}
    )[0] as string,
    maxSteps: 10,
    currentStep: 1,
    prefixAriaLabel: {
      step: 'step',
      of: 'of',
      completed: 'completed',
      steps: 'steps',
    },
    themeArgs: themesObject[themeSelected][STYLES_NAME.STEPPER_PROGRESS],
  },
};

export const StepperProgressWithCtv: Story = {
  args: {
    variant: Object.values(
      variantsObject[themeSelected].StepperProgressVariants || {}
    )[0] as string,
    maxSteps: 10,
    currentStep: 1,
    prefixAriaLabel: {
      step: 'step',
      of: 'of',
      completed: 'completed',
    },
    ctv: {
      container: {
        background_color: 'pink',
      },
    },
  },
};
