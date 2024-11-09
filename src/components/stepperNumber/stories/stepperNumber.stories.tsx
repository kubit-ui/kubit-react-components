import type { Meta, StoryObj } from '@storybook/react';

import { ICONS } from '@/assets/storybook/icons/icons';
import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { themesObject, variantsObject } from '@/designSystem/themesObject/themesObject';

import { StepperNumber as Story } from '../stepperNumber';
import { StepperNumberOrientationType } from '../types/orientation';
import { IStepperNumber } from '../types/stepperNumber';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Navigation/StepperNumber',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
  parameters: {
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/stepperNumber',
    figmaUrl:
      'https://www.figma.com/file/EYQkbENTFO5r8muvXlPoOy/Kubit-v.1.0.0?type=design&node-id=3942-37747&mode=dev',
  },
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: IStepperNumber = {
  variant: Object.values(variantsObject[themeSelected].StepperNumberVariantType || {})[0] as string,
  orientation: StepperNumberOrientationType.VERTICAL,
  horizontalOrientationWidth: '5.75rem',
  completedStepIcon: { icon: ICONS.ICON_PLACEHOLDER },
  steps: ['User Registration', 'Role Validation', 'Tutorial'],
  currentStep: 0,
  screenReaderTitle: { content: 'Screen reader title' },
  screenReaderCompletedStep: { content: 'COMPLETED' },
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
