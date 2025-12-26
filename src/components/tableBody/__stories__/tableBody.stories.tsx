import type { PropsWithChildren } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { TableBodyVariantType } from '@/lib/designSystem/kubit/components/tableBody/variants';

import { TableCell } from '../../tableCell/tableCell';
import { TableRow } from '../../tableRow/tableRow';
import { TableBody as Story } from '../tableBody';
import type { TableBodyProps } from '../types/tableBody';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: Story,
  tags: ['autodocs', 'table'],
  title: 'Components/Table/TableBody',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: PropsWithChildren<TableBodyProps> = {
  children: (
    <>
      <TableRow variant="BODY_ROW_DEFAULT">
        <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 1</TableCell>
        <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 2</TableCell>
        <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 3</TableCell>
        <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 4</TableCell>
        <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 5</TableCell>
      </TableRow>
      <TableRow active={true} variant="BODY_ROW_DEFAULT">
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
  variant: TableBodyVariantType.DEFAULT,
};

export const TableBody: Story = {
  args: {
    ...commonArgs,
  },
};
