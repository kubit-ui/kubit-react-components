import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Popover as Story } from "@kubit-ui-web/react-components";

import { argtypes } from "./argtypes";
import { BodyPositionsDemo } from "./demos/popoverBodyPositionDemo";

const meta = {
  argTypes: argtypes(),
  component: Story,
  parameters: {
    githubUrl:
      "https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/Popover",
  },
  tags: ["resources"],
  title: "Components/Resources/Popover",
} satisfies Meta<typeof Story>;

export default meta;

type StoryType = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs = {
  children: <div>Content provided via render function</div>,
};

/**
 * Story showcasing the different body positions for the popover
 *
 * This story demonstrates how to use the bodyPosition prop to control
 * where the popover appears relative to the viewport when no specific
 * anchor element is provided.
 */
export const PopoverBodyLikeAnchorElement: StoryType = {
  args: {
    ...commonArgs,
  },
  render: ({ ...args }) => <BodyPositionsDemo {...args} />,
};
