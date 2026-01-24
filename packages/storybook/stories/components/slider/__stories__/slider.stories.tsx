import type { Meta, StoryObj } from '@storybook/react-vite';

import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';
import { Slider as Story } from '@kubit-ui-web/react-components';

import { argtypes } from './argtypes';

const { SliderVariantType } = KUBIT_VARIANTS;

const meta = {
  argTypes: argtypes(),
  component: Story,
  tags: ['containment'],
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
