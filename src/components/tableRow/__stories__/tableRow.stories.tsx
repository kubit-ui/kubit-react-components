import type { Meta, StoryObj } from '@storybook/react-vite';
import type { PropsWithChildren } from 'react';

import { TableRowVariantType } from '@/lib/designSystem/kubit/components/tableRow/variants';

import type { TableRowProps } from '../types/tableRow';

import { TableCell } from '../../tableCell/tableCell';
import { TableRow as Story } from '../tableRow';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: Story,
  tags: ['autodocs', 'table'],
  title: 'Components/Table/TableRow',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: PropsWithChildren<TableRowProps> = {
  children: (
    <>
      <TableCell variant="HEADER_CELL_DEFAULT">Cell 1</TableCell>
      <TableCell variant="HEADER_CELL_DEFAULT">Cell 2</TableCell>
      <TableCell variant="HEADER_CELL_DEFAULT">Cell 3</TableCell>
      <TableCell variant="HEADER_CELL_DEFAULT">Cell 4</TableCell>
      <TableCell variant="HEADER_CELL_DEFAULT">Cell 5</TableCell>
    </>
  ),
  variant: TableRowVariantType.BODY_ROW_DEFAULT,
};

export const TableRow: Story = {
  args: {
    ...commonArgs,
  },
};
