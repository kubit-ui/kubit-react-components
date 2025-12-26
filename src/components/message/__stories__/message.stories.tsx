import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  MessageVariantType,
  TagVariants,
} from '@/lib/designSystem/kubit/components/variants';
import { ICONS } from '@/lib/storybook/assets/icons/icons';

import { MessageUnControlled as Story } from '../messageUnControlled';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: Story,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'feedback'],
  title: 'Components/Feedback/Message',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs = {
  closeIcon: { altText: 'close', icon: ICONS.CLOSE },
  content: {
    content: 'This is a text content large message',
  },
  infoIcon: { altText: 'info', icon: ICONS.GHOST },
  inlineLink: {
    content: ' Inline Link',
    target: '_blank',
    url: 'https://www.google.com',
    variant: 'SECONDARY',
  },
  links: [
    {
      content: 'Link 1',
      target: '_blank',
      url: 'https://www.google.com',
      variant: 'SECONDARY',
    },
    {
      content: 'Link 2',
      target: '_blank',
      url: 'https://www.google.com',
      variant: 'SECONDARY',
    },
  ],
  tag: {
    content: 'Tag content',
    variant: TagVariants.CODE,
  },
  title: { content: 'Title' },
  variant: MessageVariantType.INFORMATIVE,
};

export const Message: Story = {
  args: {
    ...commonArgs,
  },
};
