import type { Meta, StoryObj } from '@storybook/react-vite';

import { ListOptionsVariantType } from '@/lib/designSystem/kubit/components/listOptions/variants';
import { OptionVariantType } from '@/lib/designSystem/kubit/components/option/variants';

import { ListOptions as Story } from '../listOptions';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: Story,
  tags: ['autodocs', 'selector'],
  title: 'Components/Selector/ListOptions',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs = {
  highlightedOptionVariant: OptionVariantType.CODE_VIEWER_SUBTHEME,
  options: [
    {
      label: 'label 1',
      value: 1,
    },
    {
      label: 'label 2',
      value: 2,
    },
    {
      disabled: true,
      label: 'label 3',
      value: 3,
    },
    {
      label: 'label 4',
      value: 4,
    },
  ],
  optionVariant: OptionVariantType.INPUT_DROPDOWN,
  selectedValue: 2,
  type: 'selection' as const,
  variant: ListOptionsVariantType.DEFAULT,
};

export const ListOptions: Story = {
  args: {
    ...commonArgs,
  },
};
