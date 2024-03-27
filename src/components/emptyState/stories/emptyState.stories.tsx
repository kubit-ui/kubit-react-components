import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ICONS } from '@/assets';
import { ReplaceContent } from '@/components/storybook/replaceContent/replaceContent';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { EmptyState as Story } from '../emptyState';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Feedback/EmptyState',
  component: Story,
  parameters: {
    layout: 'centered',
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/emptyState',
    figmaUrl:
      'https://www.figma.com/file/EYQkbENTFO5r8muvXlPoOy/Kubit-v.1.0.0?type=design&node-id=3922-25686&mode=dev',
  },
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const EmptyState: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].EmptyStateVariantType || {})[0] as string,
    state: Object.values(variantsObject[themeSelected].EmptyStateStateType || {})[0] as string,
    title: { content: 'Empty state title' },
    subtitle: { content: <ReplaceContent width="100%" /> },
    button: {
      variant: Object.values(variantsObject[themeSelected].ButtonVariantType || {})[0] as string,
      icon: { icon: ICONS.ICON_PLACEHOLDER },
      content: 'Click on me!',
    },
    link: {
      variant: Object.values(variantsObject[themeSelected].LinkVariantType || {})[0] as string,
      content: 'link text',
      url: 'https://www.google.es',
    },
    icon: {
      icon: ICONS.ICON_PLACEHOLDER,
      altText: 'Main image',
    },
    themeArgs: themesObject[themeSelected][STYLES_NAME.EMPTY_STATE],
  },
};

export const EmptyStateWithCtv: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].EmptyStateVariantType || {})[0] as string,
    state: Object.values(variantsObject[themeSelected].EmptyStateStateType || {})[0] as string,
    title: { content: 'Empty state title' },
    subtitle: { content: <ReplaceContent /> },
    button: {
      variant: Object.values(variantsObject[themeSelected].ButtonVariantType || {})[0] as string,
      icon: { icon: ICONS.ICON_PLACEHOLDER },
      content: 'Click on me!',
    },
    link: {
      variant: Object.values(variantsObject[themeSelected].LinkVariantType || {})[0] as string,
      content: 'link text',
      url: 'https://www.google.es',
    },
    icon: {
      icon: ICONS.ICON_PLACEHOLDER,
      altText: 'Main image',
    },
    ctv: {
      DEFAULT: {
        title: {
          color: 'red',
        },
      },
    },
  },
};
