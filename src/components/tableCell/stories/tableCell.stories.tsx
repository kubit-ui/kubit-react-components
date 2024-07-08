import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { TableCell as Story } from '../tableCell';
import { ITableCell } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Table/TableCell',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: React.PropsWithChildren<ITableCell> = {
  variant: Object.values(variantsObject[themeSelected].TableCellVariantType || {})[0] as string,
  children: 'children',
};

export const TableCell: Story = {
  args: {
    ...commonArgs,
    themeArgs: themesObject[themeSelected][STYLES_NAME.TABLE_CELL],
  },
};

export const TableCellWithCtv: Story = {
  args: {
    ...commonArgs,
    ctv: {
      container: {
        background_color: 'pink',
      },
    },
  },
};
