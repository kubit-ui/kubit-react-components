import type { Meta, StoryObj } from '@storybook/react-vite';

import { LinkVariant } from '@/lib/designSystem/kubit/components/link/variants';
import { TextVariantType } from '@/lib/designSystem/kubit/components/text/variants';
import { ICONS } from '@/lib/storybook/assets/icons/icons';

import { Link as Story } from '../link';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: Story,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'actions'],
  title: 'Components/Actions/Link',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs = {
  action: 'navigation' as const,
  ['aria-current']: true,
  children: 'Link',
  draggable: false,
  icon: {
    altText: 'Alt text',
    icon: ICONS.PLACEHOLDER,
  },
  id: 'linkId',
  rel: 'noopener noreferrer',
  target: undefined,
  textVariant: TextVariantType.DEFAULT,
  url: 'www.google.com',
  variant: LinkVariant.PRIMARY,
};

export const Link: Story = {
  args: {
    ...commonArgs,
  },
};
