import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Popover as Story } from "@kubit-ui-web/react-components";

import { argtypes } from "./argtypes";
import { AnimationsDemo } from "./demos/animationsDemo";
import { popoverAnimationsNotes } from "./notes";

const meta = {
  argTypes: argtypes(),
  component: Story,
  parameters: {
    githubUrl:
      "https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/popover",
    note: popoverAnimationsNotes,
  },
  tags: ["autodocs"],
  title: "Components/Resources/Popover",
} satisfies Meta<typeof Story>;

export default meta;

type StoryType = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs = {
  children: <div>Enhanced Popover Animation System</div>,
};

export const PopoverAnimationsShowcase: StoryType = {
  args: {
    ...commonArgs,
  },
  render: ({ ...args }) => <AnimationsDemo {...args} />,
};
