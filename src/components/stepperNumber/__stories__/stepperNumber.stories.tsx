import type { Meta, StoryObj } from '@storybook/react-vite';

import { StepperNumberVariantType } from '@/lib/designSystem/kubit/components/stepperNumber/variants';
import { ICONS } from '@/lib/storybook/assets/icons/icons';

import { StepperNumber as Story } from '../stepperNumber';
import type { StepperNumberProps } from '../types/stepperNumber';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: Story,
  tags: ['autodocs', 'navigation'],
  title: 'Components/Navigation/StepperNumber',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: StepperNumberProps = {
  completedStepIcon: { icon: ICONS.PLACEHOLDER },
  currentStep: 0,
  horizontalOrientationWidth: '5.75rem',
  orientation: 'vertical',
  screenReaderCompletedStep: { content: 'COMPLETED' },
  screenReaderTitle: { content: 'Screen reader title' },
  steps: [
    {
      ['aria-label']: 'User Registration',
      name: 'User Registration',
    },
    {
      ['aria-label']: 'Role Validation',
      name: 'Role Validation',
    },
    {
      ['aria-label']: 'Tutorial',
      name: 'Tutorial',
    },
  ],
  variant: StepperNumberVariantType.DEFAULT,
};

export const StepperNumber: Story = {
  args: {
    ...commonArgs,
  },
};
