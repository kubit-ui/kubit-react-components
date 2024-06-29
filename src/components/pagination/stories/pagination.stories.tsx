import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

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
  },
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
  render: ({ ...args }) => <StoryWithHooks {...args} />,
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const StoryWithHooks = args => {
  const [step, setStep] = React.useState(0);
  const maxSteps = 10;

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
