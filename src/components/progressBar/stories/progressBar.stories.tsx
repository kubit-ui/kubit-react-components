import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { ProgressBar as Story } from '../progressBar';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Resources/ProgressBar',
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
  return (
    <div style={{ width: '600px', gap: '60px', display: 'flex', flexDirection: 'column' }}>
      <Story {...args} />
    </div>
  );
};

export const ProgressBar: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].ProgressBarVariantType || {})[0] as string,
    size: Object.values(variantsObject[themeSelected].ProgressBarSizeType || {})[0] as string,
    percentProgressCompleted: 50,
    barAriaLabel: 'aria-label-0',
    themeArgs: themesObject[themeSelected][STYLES_NAME.PROGRESS_BAR],
  },
};

export const ProgressBarWithCtv: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].ProgressBarVariantType || {})[0] as string,
    size: Object.values(variantsObject[themeSelected].ProgressBarSizeType || {})[0] as string,
    percentProgressCompleted: 50,
    barAriaLabel: 'aria-label-0',
    ctv: {
      bar: {
        background_color: 'green',
      },
      progressBar: {
        background_color: 'pink',
      },
    },
  },
};
