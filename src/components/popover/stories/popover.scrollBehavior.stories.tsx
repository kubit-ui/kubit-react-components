import type { Meta, StoryObj } from '@storybook/react';

import { Popover as Story } from '../popover';
import { argtypes } from './argtypes';
import { ScrollBehaviorDemo } from './demos/popoverScrollBehaviorDemo';
import { popoverScrollBehaviorNotes } from './notes';

const meta = {
  argTypes: argtypes(),
  component: Story,
  parameters: {
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/Popover',
    note: popoverScrollBehaviorNotes,
  },
  tags: ['autodocs', 'resources'],
  title: 'Components/Resources/PopoverV2',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs = {
  children: <div>Select dropdown content</div>,
};

/**
 * Story showcasing the scroll behavior of Popover with floating-ui
 *
 * This story demonstrates how the popover automatically repositions itself
 * when there's insufficient space below the anchor element during scrolling.
 * The floating-ui library handles the repositioning logic automatically.
 *
 * Features demonstrated:
 * - Automatic repositioning on scroll
 * - Dropdown-style popover usage
 * - Proper accessibility attributes
 * - Custom select component implementation
 */
export const PopoverScrollBehavior: Story = {
  args: {
    ...commonArgs,
  },
  render: ({ ...args }) => <ScrollBehaviorDemo {...args} />,
};
