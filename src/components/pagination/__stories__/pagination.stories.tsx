import { useEffect, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { PaginationVariantsTheme } from '@/lib/designSystem/kubit/components/pagination/variants';
import { ICONS } from '@/lib/storybook/assets/icons/icons';

import { Pagination as Story } from '../pagination';
import type { PaginationButtonControlProps } from '../types/pagination';
import { argtypes } from './argtypes';

const StoryWithHooks = (args) => {
  const [step, setStep] = useState(0);
  const maxSteps = args.maxStepsNumber ? args.maxStepsNumber : 35;

  useEffect(() => {
    if (args.currentStep) {
      setStep(args.currentStep - 1);
    }
  }, [args.currentStep]);

  const leftEdge = step <= 0;
  const rightEdge = step >= maxSteps;

  const _onStepClick = (stepClick: number) => () => {
    setStep(stepClick);
  };

  const leftButtonOnClick = () => {
    if (!leftEdge) {
      setStep(step - 1);
    }
  };

  const rightButtonOnClick = () => {
    if (!rightEdge) {
      setStep(step + 1);
    }
  };

  const leftButtonControl: PaginationButtonControlProps = {
    ariaLabel: 'left button',
    icon: ICONS.CHEVRON_LEFT,
    onClick: leftButtonOnClick,
  };

  const rightButtonControl: PaginationButtonControlProps = {
    ariaLabel: 'right button',
    icon: ICONS.CHEVRON_RIGHT,
    onClick: rightButtonOnClick,
  };

  return (
    <Story
      {...args}
      currentStep={step}
      maxStepsNumber={maxSteps}
      paginationLeftButtonControl={leftButtonControl}
      paginationRightButtonControl={rightButtonControl}
      onStepClick={_onStepClick}
    />
  );
};

const meta = {
  argTypes: argtypes(),
  component: Story,
  parameters: {
    docs: {
      description: {
        component:
          'Pagination is a controlled component. This story is an example of how to use it. To see other examples or modify the component behavior, visit the other stories in Pagination section or change the props in the controls.',
      },
    },
    layout: 'centered',
  },
  render: ({ ...args }) => <StoryWithHooks {...args} />,
  tags: ['autodocs', 'navigation'],
  title: 'Components/Navigation/Pagination',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs = {
  currentStep: 1,
  maxCountersNumber: 5,
  maxStepsNumber: 35,
  variant: PaginationVariantsTheme.DEFAULT,
};

export const Pagination = {
  args: {
    ...commonArgs,
  },
};

export const PaginationWithTwoSteps = {
  args: {
    ...commonArgs,
    maxCountersNumber: 2,
    maxStepsNumber: 2,
  },
};

export const PaginationWithFiveSteps = {
  args: {
    ...commonArgs,
    maxStepsNumber: 5,
  },
};
