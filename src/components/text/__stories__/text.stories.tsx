import type { Meta, StoryObj } from '@storybook/react-vite';

import { TextVariantType } from '@/lib/designSystem/kubit/components/text/variants';

import { Text as Story } from '../text';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: Story,
  parameters: {
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/text',
    layout: 'centered',
  },
  tags: ['autodocs', 'resources'],
  title: 'Components/Resources/Text',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs = {
  children: 'Text',
  variant: TextVariantType.DEFAULT,
};

export const Text: Story = {
  args: {
    ...commonArgs,
  },
};
