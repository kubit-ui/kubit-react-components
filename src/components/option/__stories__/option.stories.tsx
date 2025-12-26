import type { Meta, StoryObj } from '@storybook/react-vite';

import { OptionVariantType } from '@/lib/designSystem/kubit/components/option/variants';

import { Option as Story } from '../option';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: Story,
  parameters: {
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/option',
    layout: 'centered',
  },
  tags: ['autodocs', 'selector'],
  title: 'Components/Selector/Option',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs = {
  ['aria-label']: 'Aria label',
  label: 'Option',
  variant: OptionVariantType.CODE_VIEWER_SUBTHEME,
};

export const Option: Story = {
  args: {
    ...commonArgs,
  },
};

export const OptionLabelReactNode: Story = {
  args: {
    ...commonArgs,
    label: (
      <span>
        This is a <sup style={{ color: 'red' }}>ReactNode</sup> label
      </span>
    ),
    variant: OptionVariantType.INPUT_OPTION,
  },
};
