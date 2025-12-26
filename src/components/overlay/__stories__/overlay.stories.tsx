import type { Meta, StoryObj } from '@storybook/react-vite';

import { OverlayVariantType } from '@/lib/designSystem/kubit/components/overlay/variants';

import { Overlay as Story } from '../overlay';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: Story,
  parameters: {
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/overlay',
    layout: 'centered',
  },
  tags: ['autodocs', 'resources'],
  title: 'Components/Resources/Overlay',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs = {
  variant: OverlayVariantType.DEFAULT,
};

export const Overlay: Story = {
  args: {
    ...commonArgs,
  },
};
