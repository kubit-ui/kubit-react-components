import type { Meta, StoryObj } from '@storybook/react';
import React, { useEffect } from 'react';

import { ICONS } from '@/assets';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

// fixture
import { Pagination as Story } from '../pagination';
import { IPaginationButtonControl } from '../types/pagination';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Navigation/Pagination',
  component: Story,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Pagination is a controlled component. This story is an example of how to use it. To see other examples or modify the component behavior, visit the other stories in Pagination section or change the props in the controls.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
  render: ({ ...args }) => <StoryWithHooks {...args} />,
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const StoryWithHooks = args => {
  const [step, setStep] = React.useState(0);
  const maxSteps = args.maxStepsNumber ? args.maxStepsNumber : 35;

  useEffect(() => {
    if (args.currentStep) {
      setStep(args.currentStep - 1);
    }
  }, [args.currentStep]);

  const leftEdge = step <= 0;
  const rightEdge = step >= maxSteps;

  const _onStepClick = (step: number) => () => {
    setStep(step);
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

  const leftButtonControl: IPaginationButtonControl = {
    icon: ICONS.ICON_CHEVRON_LEFT,
    ariaLabel: 'left button',
    onClick: leftButtonOnClick,
  };

  const rightButtonControl: IPaginationButtonControl = {
    icon: ICONS.ICON_CHEVRON_RIGHT,
    ariaLabel: 'right button',
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

export const Pagination = {
  args: {
    variant: Object.values(
      variantsObject[themeSelected].PaginationVariantsTheme || {}
    )[0] as string,
    themeArgs: themesObject[themeSelected][STYLES_NAME.PAGINATION],
    currentStep: 1,
    maxStepsNumber: 35,
    maxCountersNumber: 5,
  },
};

export const PaginationWithTwoSteps = {
  args: {
    variant: Object.values(
      variantsObject[themeSelected].PaginationVariantsTheme || {}
    )[0] as string,
    themeArgs: themesObject[themeSelected][STYLES_NAME.PAGINATION],
    currentStep: 1,
    maxStepsNumber: 2,
    maxCountersNumber: 2,
  },
};

export const PaginationWithFiveSteps = {
  args: {
    variant: Object.values(
      variantsObject[themeSelected].PaginationVariantsTheme || {}
    )[0] as string,
    themeArgs: themesObject[themeSelected][STYLES_NAME.PAGINATION],
    currentStep: 1,
    maxStepsNumber: 5,
    maxCountersNumber: 5,
  },
};

export const PaginationWithCtv = {
  args: {
    variant: Object.values(
      variantsObject[themeSelected].PaginationVariantsTheme || {}
    )[0] as string,
    ctv: {
      container: {
        background_color: 'pink',
      },
    },
  },
};
