import type { Meta, StoryObj } from '@storybook/react-vite';

import { ChipVariantType } from '@/lib/designSystem/kubit/components/chip/variants';
import { ICONS } from '@/lib/storybook/assets/icons/icons';

import { Chip as ChipStory } from '../chip';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: ChipStory,
  tags: ['autodocs', 'forms'],
  title: 'Components/Forms/Chip',
} satisfies Meta<typeof ChipStory>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs = {
  closeIcon: {
    altText: 'Simple close icon alt text',
    icon: ICONS.PLACEHOLDER,
  },
  errorMessage: { content: 'errorMessage' },
  label: { content: 'Content' },
  range: [{ label: 'range1' }, { label: 'range2' }],
  rangeSeparator: { content: 'to' },
  variant: ChipVariantType.DEFAULT,
};

export const Chip: Story = {
  args: {
    ...commonArgs,
  },
};
