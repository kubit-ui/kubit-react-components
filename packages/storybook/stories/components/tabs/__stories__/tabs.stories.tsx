import { TabsUnControlled as Story } from '@kubit-ui-web/react-components';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { ICONS } from '@/stories/assets/icons/icons';
import { ReplaceContent } from '@/stories/components/replaceContent/replaceContent';

import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: Story,
  parameters: {
    docs: {
      description: {
        component:
          'Tabs component for organizing content into separate views. Users can switch between different sections by clicking on tab labels. Supports icons, scrollable tabs, and various accessibility features.',
      },
    },
  },
  tags: ['navigation'],
  title: 'Components/Navigation/Tabs',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const BasicTabs: Story = {
  args: {
    content: [
      <ReplaceContent key="tab-content-1">
        Content for First tab
      </ReplaceContent>,
      <ReplaceContent key="tab-content-2">
        Content for Second tab
      </ReplaceContent>,
      <ReplaceContent key="tab-content-3">
        Content for Third tab
      </ReplaceContent>,
    ],
    tabs: [
      { content: 'First tab' },
      { content: 'Second tab' },
      { content: 'Third tab' },
    ],
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TabsUnControlled
  variant="DEFAULT"
  tabs={[
    { content: 'First tab' },
    { content: 'Second tab' },
    { content: 'Third tab' },
  ]}
  content={[
    <div>Content for First tab</div>,
    <div>Content for Second tab</div>,
    <div>Content for Third tab</div>,
  ]}
/>`,
      },
    },
  },
};

export const TabsWithIcons: Story = {
  args: {
    content: [
      <ReplaceContent key="tab-content-1">
        Content for First tab with icon
      </ReplaceContent>,
      <ReplaceContent key="tab-content-2">
        Content for Second tab with icon
      </ReplaceContent>,
      <ReplaceContent key="tab-content-3">
        Content for Third tab with icon
      </ReplaceContent>,
    ],
    leftIcon: { icon: ICONS.CHEVRON_UP },
    rightIcon: { icon: ICONS.CHEVRON_DOWN },
    tabs: [
      { content: 'First tab' },
      { content: 'Second tab' },
      { content: 'Third tab' },
    ],
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TabsUnControlled
  variant="DEFAULT"
  leftIcon={{ icon: ICONS.CHEVRON_UP }}
  rightIcon={{ icon: ICONS.CHEVRON_DOWN }}
  tabs={[
    { content: 'First tab' },
    { content: 'Second tab' },
    { content: 'Third tab' },
  ]}
  content={[
    <div>Content for First tab with icon</div>,
    <div>Content for Second tab with icon</div>,
    <div>Content for Third tab with icon</div>,
  ]}
/>`,
      },
    },
  },
};

export const TabsWithDisabled: Story = {
  args: {
    content: [
      <ReplaceContent key="tab-content-1">
        Content for First tab
      </ReplaceContent>,
      <ReplaceContent key="tab-content-2">
        Content for Second tab (disabled)
      </ReplaceContent>,
      <ReplaceContent key="tab-content-3">
        Content for Third tab
      </ReplaceContent>,
      <ReplaceContent key="tab-content-4">
        Content for Fourth tab
      </ReplaceContent>,
    ],
    tabs: [
      { content: 'First tab' },
      {
        ['aria-label']: 'Second tab disabled',
        content: 'Second tab',
        disabled: true,
      },
      { content: 'Third tab' },
      { content: 'Fourth tab' },
    ],
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TabsUnControlled
  variant="DEFAULT"
  tabs={[
    { content: 'First tab' },
    {
      'aria-label': 'Second tab disabled',
      content: 'Second tab',
      disabled: true,
    },
    { content: 'Third tab' },
    { content: 'Fourth tab' },
  ]}
  content={[
    <div>Content for First tab</div>,
    <div>Content for Second tab (disabled)</div>,
    <div>Content for Third tab</div>,
    <div>Content for Fourth tab</div>,
  ]}
/>`,
      },
    },
  },
};

export const ManyTabs: Story = {
  args: {
    content: [
      <ReplaceContent key="tab-content-1">Content First tab</ReplaceContent>,
      <ReplaceContent key="tab-content-2">Content Second tab</ReplaceContent>,
      <ReplaceContent key="tab-content-3">Content Third tab</ReplaceContent>,
      <ReplaceContent key="tab-content-4">Content Fourth tab</ReplaceContent>,
      <ReplaceContent key="tab-content-5">Content Fifth tab</ReplaceContent>,
      <ReplaceContent key="tab-content-6">Content Sixth tab</ReplaceContent>,
      <ReplaceContent key="tab-content-7">Content Seventh tab</ReplaceContent>,
      <ReplaceContent key="tab-content-8">Content Eighth tab</ReplaceContent>,
    ],
    leftIcon: { icon: ICONS.CHEVRON_UP },
    maxTabsInView: 4,
    rightIcon: { icon: ICONS.CHEVRON_DOWN },
    tabs: [
      { content: 'First tab' },
      { content: 'Second tab' },
      { content: 'Third tab' },
      { content: 'Fourth tab' },
      { content: 'Fifth tab' },
      { content: 'Sixth tab' },
      { content: 'Seventh tab' },
      { content: 'Eighth tab' },
    ],
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TabsUnControlled
  variant="DEFAULT"
  maxTabsInView={4}
  leftIcon={{ icon: ICONS.CHEVRON_UP }}
  rightIcon={{ icon: ICONS.CHEVRON_DOWN }}
  tabs={[
    { content: 'First tab' },
    { content: 'Second tab' },
    { content: 'Third tab' },
    { content: 'Fourth tab' },
    { content: 'Fifth tab' },
    { content: 'Sixth tab' },
    { content: 'Seventh tab' },
    { content: 'Eighth tab' },
  ]}
  content={[...]}
/>`,
      },
    },
  },
};

export const SingleTab: Story = {
  args: {
    content: [
      <ReplaceContent key="tab-content-1">
        Content for the only tab
      </ReplaceContent>,
    ],
    tabs: [
      {
        ['aria-label']: 'Single tab',
        content: 'Only Tab',
      },
    ],
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TabsUnControlled
  variant="DEFAULT"
  tabs={[
    {
      'aria-label': 'Single tab',
      content: 'Only Tab',
    },
  ]}
  content={[
    <div>Content for the only tab</div>,
  ]}
/>`,
      },
    },
  },
};

export const TabsWithAutoWidth: Story = {
  args: {
    autoWidth: true,
    content: [
      <ReplaceContent key="tab-content-1">Content for Short</ReplaceContent>,
      <ReplaceContent key="tab-content-2">
        Content for Medium Length Tab
      </ReplaceContent>,
      <ReplaceContent key="tab-content-3">
        Content for Very Long Tab Name
      </ReplaceContent>,
    ],
    tabs: [
      { content: 'Short' },
      { content: 'Medium Length Tab' },
      { content: 'Very Long Tab Name' },
    ],
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TabsUnControlled
  variant="DEFAULT"
  autoWidth={true}
  tabs={[
    { content: 'Short' },
    { content: 'Medium Length Tab' },
    { content: 'Very Long Tab Name' },
  ]}
  content={[
    <div>Content for Short</div>,
    <div>Content for Medium Length Tab</div>,
    <div>Content for Very Long Tab Name</div>,
  ]}
/>`,
      },
    },
  },
};

export const TabsWithDefaultSelected: Story = {
  args: {
    content: [
      <ReplaceContent key="tab-content-1">Content First tab</ReplaceContent>,
      <ReplaceContent key="tab-content-2">Content Second tab</ReplaceContent>,
      <ReplaceContent key="tab-content-3">
        Content Third tab (default selected)
      </ReplaceContent>,
    ],
    defaultSelectedTab: 2,
    tabs: [
      { content: 'First tab' },
      { content: 'Second tab' },
      { content: 'Third tab' },
    ],
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TabsUnControlled
  variant="DEFAULT"
  defaultSelectedTab={2}
  tabs={[
    { content: 'First tab' },
    { content: 'Second tab' },
    { content: 'Third tab' },
  ]}
  content={[
    <div>Content First tab</div>,
    <div>Content Second tab</div>,
    <div>Content Third tab (default selected)</div>,
  ]}
/>`,
      },
    },
  },
};

export const TabsWithUnmountContent: Story = {
  args: {
    content: [
      <ReplaceContent key="tab-content-1">
        Content First tab - unmounted when not visible
      </ReplaceContent>,
      <ReplaceContent key="tab-content-2">
        Content Second tab - unmounted when not visible
      </ReplaceContent>,
      <ReplaceContent key="tab-content-3">
        Content Third tab - unmounted when not visible
      </ReplaceContent>,
    ],
    tabs: [
      { content: 'First tab' },
      { content: 'Second tab' },
      { content: 'Third tab' },
    ],
    unMountContent: true,
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TabsUnControlled
  variant="DEFAULT"
  unMountContent={true}
  tabs={[
    { content: 'First tab' },
    { content: 'Second tab' },
    { content: 'Third tab' },
  ]}
  content={[
    <div>Content First tab - unmounted when not visible</div>,
    <div>Content Second tab - unmounted when not visible</div>,
    <div>Content Third tab - unmounted when not visible</div>,
  ]}
/>`,
      },
    },
  },
};

export const TabsWithHiddenLabel: Story = {
  args: {
    content: [
      <ReplaceContent key="tab-content-1">
        Content for the tab with hidden label
      </ReplaceContent>,
    ],
    hideLabelForSingleTab: true,
    tabs: [
      {
        ['aria-label']: 'Single hidden tab label',
        content: 'This label is hidden',
      },
    ],
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TabsUnControlled
  variant="DEFAULT"
  hideLabelForSingleTab={true}
  tabs={[
    {
      'aria-label': 'Single hidden tab label',
      content: 'This label is hidden',
    },
  ]}
  content={[
    <div>Content for the tab with hidden label</div>,
  ]}
/>`,
      },
    },
  },
};

export const Tabs: Story = {
  args: {
    content: [
      <ReplaceContent key="tab-content-1">Content First tab</ReplaceContent>,
      <ReplaceContent key="tab-content-2">Content Second tab</ReplaceContent>,
      <ReplaceContent key="tab-content-3">Content Third tab</ReplaceContent>,
      <ReplaceContent key="tab-content-4">Content Fourth tab</ReplaceContent>,
      <ReplaceContent key="tab-content-5">Content Fifth tab</ReplaceContent>,
    ],
    leftIcon: { icon: ICONS.CHEVRON_UP },
    rightIcon: { icon: ICONS.CHEVRON_DOWN },
    tabs: [
      { content: 'First tab' },
      {
        ['aria-label']: 'ariaLabelSecondTab',
        content: 'Second tab',
        disabled: true,
      },
      { content: 'Third tab' },
      { content: 'Fourth tab' },
      { content: 'Fifth tab' },
    ],
    unMountContent: true,
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TabsUnControlled
  variant="DEFAULT"
  leftIcon={{ icon: ICONS.CHEVRON_UP }}
  rightIcon={{ icon: ICONS.CHEVRON_DOWN }}
  unMountContent={true}
  tabs={[
    { content: 'First tab' },
    {
      'aria-label': 'ariaLabelSecondTab',
      content: 'Second tab',
      disabled: true,
    },
    { content: 'Third tab' },
    { content: 'Fourth tab' },
    { content: 'Fifth tab' },
  ]}
  content={[
    <div>Content First tab</div>,
    <div>Content Second tab</div>,
    <div>Content Third tab</div>,
    <div>Content Fourth tab</div>,
    <div>Content Fifth tab</div>,
  ]}
/>`,
      },
    },
  },
};
