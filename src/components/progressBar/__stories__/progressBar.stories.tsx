import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  ProgressBarSizeType,
  ProgressBarVariantType,
} from '@/lib/designSystem/kubit/components/progressBar/variants';

import { ProgressBar as Story } from '../progressBar';
import { argtypes } from './argtypes';

const StoryWithHooks = (args) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '60px',
        width: '600px',
      }}
    >
      <Story {...args} />
    </div>
  );
};

const meta = {
  argTypes: argtypes(),
  component: Story,
  parameters: {
    layout: 'centered',
  },
  render: ({ ...args }) => <StoryWithHooks {...args} />,
  tags: ['autodocs', 'resources'],
  title: 'Components/Resources/ProgressBar',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs = {
  barAriaLabel: 'aria-label-0',
  percentProgressCompleted: 50,
  progressAnimation: {
    duration: '0s',
    timingFunction: 'ease-out',
  },
  size: ProgressBarSizeType.MEDIUM,
  variant: ProgressBarVariantType.DEFAULT,
};

export const ProgressBar: Story = {
  args: {
    ...commonArgs,
  },
};

export const ProgressBarWithColor: Story = {
  args: {
    ...commonArgs,
    color: {
      bar: 'lightblue',
      progressBar: 'darkblue',
    },
    percentProgressCompleted: 50,
    progressAnimation: {
      duration: '0s',
      timingFunction: 'ease-out',
    },
    size: ProgressBarSizeType.MEDIUM,
    variant: ProgressBarVariantType.DEFAULT,
  },
};
