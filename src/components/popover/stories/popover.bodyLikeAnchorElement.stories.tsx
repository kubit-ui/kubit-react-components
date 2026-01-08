import type { Meta, StoryObj } from '@storybook/react';

import { Overlay } from '@/lib/components/overlay/overlay';

import { Popover as Story } from '../popover';
import { argtypes } from './argtypes';
import { BodyPositionsDemo } from './demos/popoverBodyPositionDemo';

const meta = {
  argTypes: argtypes(),
  component: Story,
  parameters: {
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/Popover',
  },
  tags: ['autodocs', 'resources'],
  title: 'Components/Resources/Popover',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs = {
  children: <div>Content provided via render function</div>,
  overlay: <Overlay variant="DEFAULT" />,
};

/**
 * Story showcasing the different body positions for the popover
 *
 * This story demonstrates how to use the bodyPosition prop to control
 * where the popover appears relative to the viewport when no specific
 * anchor element is provided.
 */
export const PopoverBodyLikeAnchorElement: Story = {
  args: {
    ...commonArgs,
  },
  render: ({ ...args }) => <BodyPositionsDemo {...args} />,
};
