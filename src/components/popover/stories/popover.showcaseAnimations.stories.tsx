import type { Meta, StoryObj } from '@storybook/react';

import { Overlay } from '@/lib/components/overlay/overlay';

import { Popover as Story } from '../popover';
import { argtypes } from './argtypes';
import { AnimationsDemo } from './demos/animationsDemo';
import { popoverAnimationsNotes } from './notes';

const meta = {
  argTypes: argtypes(),
  component: Story,
  parameters: {
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/popoverV2',
    note: popoverAnimationsNotes,
  },
  tags: ['autodocs'],
  title: 'Components/Resources/PopoverV2',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs = {
  children: <div>Enhanced PopoverV2 Animation System</div>,
  overlay: <Overlay variant="DEFAULT" />,
};

export const PopoverAnimationsShowcase: Story = {
  args: {
    ...commonArgs,
  },
  render: ({ ...args }) => <AnimationsDemo {...args} />,
};
