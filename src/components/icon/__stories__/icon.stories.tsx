import type { Meta, StoryObj } from '@storybook/react-vite';

import { ICONS } from '@/lib/storybook/assets/icons/icons';

import { IconHost as Story } from '../iconHost';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: Story,
  parameters: {
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/icon',
    layout: 'centered',
  },
  tags: ['autodocs', 'resources'],
  title: 'Components/Resources/Icon',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs = {
  complex: false,
  height: '48px',
  icon: ICONS.PLACEHOLDER,
  width: '48px',
};

export const Icon: Story = {
  args: {
    ...commonArgs,
  },
};

export const IconWithFallbackIcon: Story = {
  args: {
    ...commonArgs,
    fallbackIcon: ICONS.GHOST,
    icon: 'ItDoesntExist',
  },
};
