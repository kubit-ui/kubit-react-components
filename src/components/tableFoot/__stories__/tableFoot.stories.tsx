import type { PropsWithChildren } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { TableFootVariantType } from '@/lib/designSystem/kubit/components/tableFoot/variants';

import { TableCell } from '../../tableCell/tableCell';
import { TableRow } from '../../tableRow/tableRow';
import { TableFoot as Story } from '../tableFoot';
import type { TableFootProps } from '../types/tableFoot';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: Story,
  tags: ['autodocs', 'table'],
  title: 'Components/Table/TableFoot',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: PropsWithChildren<TableFootProps> = {
  children: (
    <TableRow variant="BODY_ROW_DEFAULT">
      <TableCell variant="BODY_CELL_DEFAULT">Cell 1</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">Cell 2</TableCell>
    </TableRow>
  ),
  variant: TableFootVariantType.DEFAULT,
};

export const TableFoot: Story = {
  args: {
    ...commonArgs,
  },
};
