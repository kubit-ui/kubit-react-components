import type { Meta, StoryObj } from '@storybook/react-vite';

import { TabsVariantType } from '@/lib/designSystem/kubit/components/tabs/variants';
import { ICONS } from '@/lib/storybook/assets/icons/icons';
import { ReplaceContent } from '@/lib/storybook/components/replaceContent/replaceContent';

import { TabsUnControlled as Story } from '../tabsUnControlled';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: Story,
  tags: ['autodocs', 'navigation'],
  title: 'Components/Navigation/Tabs',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs = {
  content: [
    <ReplaceContent key="1">Content First tab</ReplaceContent>,
    <ReplaceContent key="2">Content Second tab</ReplaceContent>,
    <ReplaceContent key="3">Content Third tab</ReplaceContent>,
    <ReplaceContent key="4">Content Fourth tab</ReplaceContent>,
    <ReplaceContent key="5">Content Fifth tab</ReplaceContent>,
  ],
  leftIcon: { icon: ICONS.CHEVRON_UP },
  rightIcon: { icon: ICONS.CHEVRON_DOWN },
  tabs: [
    {
      content: 'First tab',
    },
    {
      ['aria-label']: 'ariaLabelSecondTab',
      content: 'Second tab',
      disabled: true,
    },
    {
      content: 'Third tab',
    },
    {
      content: 'Fourth tab',
    },
    {
      content: 'Fifth tab',
    },
  ],
  unMountContent: true,
  variant: TabsVariantType.DEFAULT,
};

export const Tabs: Story = {
  args: {
    ...commonArgs,
  },
};

export const OnePrimaryTab: Story = {
  args: {
    content: [<ReplaceContent key="1">Content First tab</ReplaceContent>],
    leftIcon: { icon: ICONS.CHEVRON_UP },
    rightIcon: { icon: ICONS.CHEVRON_DOWN },
    tabs: [
      {
        ['aria-label']: 'ariaLabelFirstTab',
        content: 'First tab',
      },
    ],
    variant: TabsVariantType.DEFAULT,
  },
};
