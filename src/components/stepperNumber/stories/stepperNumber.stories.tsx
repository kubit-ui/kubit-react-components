import type { Meta, StoryObj } from '@storybook/react';

import { ICONS } from '@/assets';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { StepperNumber as Story } from '../stepperNumber';
import { IStepperNumber, StepperNumberOrientationType } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Navigation/StepperNumber',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: IStepperNumber = {
  variant: Object.values(variantsObject[themeSelected].StepperNumberVariantType || {})[0] as string,
  orientation: StepperNumberOrientationType.HORIZONTAL,
  horizontalOrientationWidth: '5.75rem',
  completedStepIcon: { icon: ICONS.ICON_PLACEHOLDER },
  steps: ['Step 1', 'Step 2', 'Step 3'],
  currentStep: 0,
  ['aria-label']: 'ariaLabel',
};

export const StepperNumber: Story = {
  args: {
    ...commonArgs,
    themeArgs: themesObject[themeSelected][STYLES_NAME.STEPPER_NUMBER],
  },
};

export const StepperNumberWithCtv: Story = {
  args: {
    ...commonArgs,
    ctv: {
      HORIZONTAL: {
        container: {
          background_color: 'pink',
        },
      },
    },
  },
};
