import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  ButtonSizeType,
  ButtonVariantType,
} from '@/lib/designSystem/kubit/components/button/variants';
import { LoaderStory as Loader } from '@/lib/storybook/assets/loader/loader';

import { LinkAsButton as LinkAsButtonStory } from '../linkAsButton';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: LinkAsButtonStory,
  parameters: {
    layout: 'centered',
  },
  render: ({ ...args }) => {
    return <LinkAsButtonStory {...args} loader={<Loader />} />;
  },
  tags: ['actions'],
  title: 'Components/Actions/LinkAsButton',
} satisfies Meta<typeof LinkAsButtonStory>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs = {
  ['aria-label']: 'ariaLabel',
  ariaLabelText: 'Link as button',
  children: 'Link as button',
  size: ButtonSizeType.LARGE,
  state: 'default' as const,
  url: 'https://www.google.com',
  variant: ButtonVariantType.ACTION_PRIMARY,
};

export const LinkAsButton: Story = {
  args: {
    ...commonArgs,
  },
};
