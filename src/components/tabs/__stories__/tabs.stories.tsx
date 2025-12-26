import type { Meta, StoryObj } from '@storybook/react-vite';

import { TabsVariantType } from '@/lib/designSystem/kubit/components/tabs/variants';
import { ICONS } from '@/lib/storybook/assets/icons/icons';

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
    <replace-content key="1" width="100%">
      Content First tab
    </replace-content>,
    <replace-content key="2" width="100%">
      Content Second tab
    </replace-content>,
    <replace-content key="3" width="100%">
      Content Third tab
    </replace-content>,
    <replace-content key="4" width="100%">
      Content Fourth tab
    </replace-content>,
    <replace-content key="5" width="100%">
      Content Fifth tab
    </replace-content>,
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
    content: [
      <replace-content key="1" width="100%">
        Content First tab
      </replace-content>,
    ],
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
