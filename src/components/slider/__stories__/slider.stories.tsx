import type { Meta, StoryObj } from '@storybook/react-vite';

import { SliderVariantType } from '@/lib/designSystem/kubit/components/slider/variants';

import { Slider as Story } from '../slider';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: Story,
  tags: ['autodocs', 'containment'],
  title: 'Components/Containment/Slider',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs = {
  ariaLabel: 'Left slider',
  leftHelperText: 'Left helper text',
  max: 100,
  min: 0,
  range: false,
  rightAriaLabel: 'Right slider',
  rightHelperText: 'Right helper text',
  step: 1,
  type: 'continuous' as const,
  variant: SliderVariantType.PRIMARY,
};

export const Slider: Story = {
  args: {
    ...commonArgs,
  },
};
