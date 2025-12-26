import type { Meta, StoryObj } from '@storybook/react-vite';

import { InputSignatureUnControlled as Story } from '../inputSignatureUncontrolled';
import { argtypes } from './argTypes';

const meta = {
  argTypes: argtypes(),
  component: Story,
  parameters: {
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/icon',
    layout: 'centered',
  },
  tags: ['autodocs', 'forms'],
  title: 'Components/Forms/InputSignature',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs = {
  errorText: { content: 'Invalid signature' },
  placeholder: { content: 'Sign here' },
  state: 'active' as const,
  variant: 'DEFAULT',
};

export const InputSignature: Story = {
  args: {
    ...commonArgs,
  },
};
