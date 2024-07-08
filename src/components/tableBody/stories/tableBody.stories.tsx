import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { TableCell } from '@/components/tableCell';
import { TableRow } from '@/components/tableRow';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { TableBody as Story } from '../tableBody';
import { ITableBody } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Table/TableBody',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: React.PropsWithChildren<ITableBody> = {
  variant: Object.values(variantsObject[themeSelected].TableBodyVariantType || {})[0] as string,
  children: (
    <>
      <TableRow variant="BODY_ROW_DEFAULT">
        <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 1</TableCell>
        <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 2</TableCell>
        <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 3</TableCell>
        <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 4</TableCell>
        <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 5</TableCell>
      </TableRow>
      <TableRow active variant="BODY_ROW_DEFAULT">
        <TableCell variant="BODY_CELL_DEFAULT">Row 2 - Cell 1</TableCell>
        <TableCell variant="BODY_CELL_DEFAULT">Row 2 - Cell 2</TableCell>
        <TableCell variant="BODY_CELL_DEFAULT">Row 2 - Cell 3</TableCell>
        <TableCell variant="BODY_CELL_DEFAULT">Row 2 - Cell 4</TableCell>
        <TableCell variant="BODY_CELL_DEFAULT">Row 2 - Cell 5</TableCell>
      </TableRow>
      <TableRow variant="BODY_ROW_DEFAULT">
        <TableCell variant="BODY_CELL_DEFAULT">Row 3 - Cell 1</TableCell>
        <TableCell variant="BODY_CELL_DEFAULT">Row 3 - Cell 2</TableCell>
        <TableCell variant="BODY_CELL_DEFAULT">Row 3 - Cell 3</TableCell>
        <TableCell variant="BODY_CELL_DEFAULT">Row 3 - Cell 4</TableCell>
        <TableCell variant="BODY_CELL_DEFAULT">Row 3 - Cell 5</TableCell>
      </TableRow>
    </>
  ),
};

export const TableBody: Story = {
  args: {
    ...commonArgs,
    themeArgs: themesObject[themeSelected][STYLES_NAME.TABLE_BODY],
  },
};

export const TableBodyWithCtv: Story = {
  args: {
    ...commonArgs,
    ctv: {
      container: {
        background_color: 'pink',
      },
    },
  },
};
