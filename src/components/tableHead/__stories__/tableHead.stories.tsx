import type { Meta, StoryObj } from '@storybook/react-vite';
import type { PropsWithChildren } from 'react';

import { TableHeadVariantType } from '@/lib/designSystem/kubit/components/tableHead/variants';

import type { TableHeadProps } from '../types/tableHead';

import { TableCell } from '../../tableCell/tableCell';
import { TableRow } from '../../tableRow/tableRow';
import { TableHead as Story } from '../tableHead';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: Story,
  tags: ['autodocs', 'table'],
  title: 'Components/Table/TableHead',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: PropsWithChildren<TableHeadProps> = {
  children: (
    <TableRow variant="HEADER_ROW_DEFAULT">
      <TableCell th={true} variant="HEADER_CELL_DEFAULT">
        Cell 1
      </TableCell>
      <TableCell th={true} variant="HEADER_CELL_DEFAULT">
        Cell 2
      </TableCell>
      <TableCell th={true} variant="HEADER_CELL_DEFAULT">
        Cell 3
      </TableCell>
      <TableCell th={true} variant="HEADER_CELL_DEFAULT">
        Cell 4
      </TableCell>
      <TableCell th={true} variant="HEADER_CELL_DEFAULT">
        Cell 5
      </TableCell>
    </TableRow>
  ),
  variant: TableHeadVariantType.DEFAULT,
};

export const TableHead: Story = {
  args: {
    ...commonArgs,
  },
};
