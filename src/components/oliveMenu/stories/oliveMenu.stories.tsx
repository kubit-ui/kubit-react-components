import type { Meta, StoryObj } from '@storybook/react';

import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { OliveMenu as Story } from '../oliveMenu';
import { IOliveMenu, OliveMenuListOptions } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Navigation/OliveMenu',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} as Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const sections: OliveMenuListOptions[] = [
  {
    title: { content: 'list 1' },
    options: [
      {
        label: 'option 1',
        value: '1',
      },
      {
        label: 'option 2',
        value: '2',
      },
      {
        label: 'option 3',
        url: 'https://www.google.com/',
        ['aria-label']: 'link to google 1',
        value: '3',
      },
    ],
  },
  {
    title: { content: 'list 2' },
    options: [
      {
        label: 'option 1',
        value: '4',
      },
      {
        label: 'option 2',
        value: '5',
      },
      {
        label: 'option 3',
        url: 'https://www.google.com/',
        ['aria-label']: 'link to google 1',
        value: '6',
      },
    ],
  },
];

const commonArgs: IOliveMenu = {
  variant: Object.values(variantsObject[themeSelected].OliveMenuVariant || {})[0] as string,
  selectedValue: '2',
  trigger: {
    content: 'Options',
    variant: Object.values(variantsObject[themeSelected].ButtonVariantType || {})[0] as string,
  },
  sections: sections,
  screenReaderText: 'textReaderOpen',
  actionBottomSheetStructure: {
    hasHeader: false,
  },
};

export const OliveMenu: Story = {
  args: {
    ...commonArgs,
    themeArgs: themesObject[themeSelected][STYLES_NAME.OLIVE_MENU],
  },
};

export const OliveMenuWithCtv: Story = {
  args: {
    ...commonArgs,
    ctv: {
      container: {
        background_color: 'pink',
        padding: '10px',
      },
    },
  },
};
