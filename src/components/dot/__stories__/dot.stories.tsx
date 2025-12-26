import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  DotSizeType,
  DotVariantType,
} from '@/lib/designSystem/kubit/components/dot/variants';

import { Dot as Story } from '../dot';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: Story,
  tags: ['autodocs', 'resources'],
  title: 'Components/Resources/Dot',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs = {
  label: 'label',
  number: 2,
  size: DotSizeType.BIG,
  variant: DotVariantType.ALTERNATIVE,
};

export const Dot: Story = {
  args: {
    ...commonArgs,
  },
};

export const ButtonWithAdditionalClasses: Story = {
  args: {
    ...commonArgs,
    additionalVariantClasses: {
      dot: 'custom-background',
    },
  },
};
