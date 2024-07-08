import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ICONS } from '@/assets';
import { TagV2 } from '@/components';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { TableDivider as Story } from '../tableDivider';
import { ITableDivider } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Table/TableDivider',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: React.PropsWithChildren<ITableDivider> = {
  variant: Object.values(variantsObject[themeSelected].TableDividerVariantType || {})[0] as string,
  children: (
    <TagV2
      icon={{ icon: ICONS.ICON_PLACEHOLDER }}
      label={{ content: 'LABEL' }}
      variant="INFORMATIVE"
    />
  ),
};

export const TableDivider: Story = {
  args: {
    ...commonArgs,
    themeArgs: themesObject[themeSelected][STYLES_NAME.TABLE_DIVIDER],
  },
};

export const TableDividerWithCtv: Story = {
  args: {
    ...commonArgs,
    ctv: {
      container: {
        background_color: 'pink',
      },
    },
  },
};
