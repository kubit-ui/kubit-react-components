import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { TableCell } from '@/components/tableCell';
import { TableRow } from '@/components/tableRow';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { TableHead as Story } from '../tableHead';
import { ITableHead } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Table/TableHead',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: React.PropsWithChildren<ITableHead> = {
  variant: Object.values(variantsObject[themeSelected].TableHeadVariantType || {})[0] as string,
  children: (
    <>
      <TableRow variant="HEADER_ROW_DEFAULT">
        <TableCell th variant="HEADER_CELL_DEFAULT">
          Cell 1
        </TableCell>
        <TableCell th variant="HEADER_CELL_DEFAULT">
          Cell 2
        </TableCell>
        <TableCell th variant="HEADER_CELL_DEFAULT">
          Cell 3
        </TableCell>
        <TableCell th variant="HEADER_CELL_DEFAULT">
          Cell 4
        </TableCell>
        <TableCell th variant="HEADER_CELL_DEFAULT">
          Cell 5
        </TableCell>
      </TableRow>
    </>
  ),
};

export const TableHead: Story = {
  args: {
    ...commonArgs,
    themeArgs: themesObject[themeSelected][STYLES_NAME.TABLE_HEAD],
  },
};

export const TableHeadWithCtv: Story = {
  args: {
    ...commonArgs,
    ctv: {
      container: {
        background_color: 'pink',
      },
    },
  },
};
