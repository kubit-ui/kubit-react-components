import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Popover as Story } from "@kubit-ui-web/react-components";

import { argtypes } from "./argtypes";
import { ScrollBehaviorDemo } from "./demos/popoverScrollBehaviorDemo";
import { popoverScrollBehaviorNotes } from "./notes";

const meta = {
  argTypes: argtypes(),
  component: Story,
  parameters: {
    githubUrl:
      "https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/Popover",
    note: popoverScrollBehaviorNotes,
  },
  tags: ["resources"],
  title: "Components/Resources/Popover",
} satisfies Meta<typeof Story>;

export default meta;

type StoryType = StoryObj<typeof meta> & { args: { themeArgs?: object } };

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
export const PopoverScrollBehavior: StoryType = {
  args: {
    ...commonArgs,
  },
  render: ({ ...args }) => <ScrollBehaviorDemo {...args} />,
};
