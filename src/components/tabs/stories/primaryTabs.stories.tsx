import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ICONS } from '@/assets';
import { ReplaceContent } from '@/components/storybook/replaceContent/replaceContent';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { TabsUnControlled as Story } from '../tabsUnControlled';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Navigation/Tabs',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
  parameters: {
    githubUrl: 'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/tabs',
    figmaUrl:
      'https://www.figma.com/file/EYQkbENTFO5r8muvXlPoOy/Kubit-v.1.0.0?type=design&node-id=3943-43438&mode=dev',
  },
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const Tabs: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].TabsVariantType || {})[0] as string,
    leftIcon: { icon: ICONS.ICON_CHEVRON_UP },
    rightIcon: { icon: ICONS.ICON_CHEVRON_DOWN },
    content: [
      <ReplaceContent key="content-0" width="100%">
        Content first tab
      </ReplaceContent>,
      <ReplaceContent key="content-1" width="100%">
        Content second tab
      </ReplaceContent>,
      <ReplaceContent key="content-2" width="100%">
        Content third tab
      </ReplaceContent>,
    ],
    tabs: [
      {
        content: 'First tab',
      },
      {
        content: 'Second tab',
        ['aria-label']: 'ariaLabelSecondTab',
        disabled: true,
      },
      {
        content: 'Third tab',
      },
    ],
    themeArgs: themesObject[themeSelected][STYLES_NAME.PRIMARY_TABS],
  },
};

export const OnePrimaryTab: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].TabsVariantType || {})[0] as string,
    leftIcon: { icon: ICONS.ICON_CHEVRON_UP },
    rightIcon: { icon: ICONS.ICON_CHEVRON_DOWN },
    content: [
      <ReplaceContent key="content-0" width="100%">
        Content first tab
      </ReplaceContent>,
    ],
    tabs: [
      {
        content: 'First tab',
        ['aria-label']: 'ariaLabelFirstTab',
      },
    ],
  },
};

export const TabsWithCtv: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].TabsVariantType || {})[0] as string,
    leftIcon: { icon: ICONS.ICON_CHEVRON_UP },
    rightIcon: { icon: ICONS.ICON_CHEVRON_DOWN },
    content: [
      <ReplaceContent key="content-0" width="100%">
        Content first tab
      </ReplaceContent>,
      <ReplaceContent key="content-1" width="100%">
        Content second tab
      </ReplaceContent>,
      <ReplaceContent key="content-2" width="100%">
        Content third tab
      </ReplaceContent>,
    ],
    tabs: [
      {
        content: 'First tab',
      },
      {
        content: 'Second tab',
      },
      {
        content: 'Third tab',
      },
    ],
    ctv: {
      container: {
        background_color: 'pink',
        padding: '10px',
      },
    },
  },
};
