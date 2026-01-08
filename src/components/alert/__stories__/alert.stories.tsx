import type { Meta, StoryObj } from '@storybook/react-vite';

import { AlertVariantType } from '@/lib/designSystem/kubit/components/variants';

import { Alert as Story } from '../alertControlled';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: Story,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'feedback'],
  title: 'Components/Feedback/Alert',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs = {
  content: {
    content: 'This is an alert message',
  },
  variant: AlertVariantType.INFORMATIVE,
};

export const Alert: Story = {
  args: {
    ...commonArgs,
  },
};
