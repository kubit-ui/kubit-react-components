import type { Meta, StoryObj } from '@storybook/react-vite';

import { TagVariants } from '@/lib/designSystem/kubit/components/variants';
import { ICONS } from '@/lib/storybook/assets/icons/icons';

import { Tag as Story } from '../tag';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: Story,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'status'],
  title: 'Components/Status/Tag',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs = {
  icon: ICONS.PLACEHOLDER,
  label: 'LABEL',
  variant: TagVariants.CODE,
};

export const Tag: Story = {
  args: {
    ...commonArgs,
  },
};

export const TagWithAdditionalClasses: Story = {
  args: {
    ...commonArgs,
    additionalClasses: {
      label: 'custom-background',
    },
  },
};
