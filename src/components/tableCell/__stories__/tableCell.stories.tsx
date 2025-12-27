import type { Meta, StoryObj } from '@storybook/react-vite';
import type { PropsWithChildren } from 'react';

import { TableCellVariantType } from '@/lib/designSystem/kubit/components/tableCell/variants';

import type { TableCellProps } from '../types/tableCell';

import { TableCell as Story } from '../tableCell';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: Story,
  tags: ['autodocs', 'table'],
  title: 'Components/Table/TableCell',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: PropsWithChildren<TableCellProps> = {
  children: 'children',
  variant: TableCellVariantType.HEADER_CELL_DEFAULT,
};

export const TableCell: Story = {
  args: {
    ...commonArgs,
  },
};
