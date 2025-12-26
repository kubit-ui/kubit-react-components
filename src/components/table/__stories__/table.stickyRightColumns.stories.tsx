import './css/table.css';

import type { PropsWithChildren } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  TableBodyVariantType,
  TableHeadVariantType,
  TableVariantType,
} from '@/lib/designSystem/kubit/components/variants';

import { TableBody } from '../../tableBody/tableBody';
import { TableCell } from '../../tableCell/tableCell';
import { TableHead } from '../../tableHead/tableHead';
import { TableRow } from '../../tableRow/tableRow';
import { Table as Story } from '../table';
import type { TableProps } from '../types/table';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: Story,
  tags: ['autodocs', 'table'],
  title: 'Components/Table/Table/StickyRightColumns',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const tHeadVariant = TableHeadVariantType.DEFAULT;

const tBodyVariant = TableBodyVariantType.DEFAULT;

const commonArgs: PropsWithChildren<TableProps> = {
  variant: TableVariantType.DEFAULT,
};

export const TableWithStickyRightColumns: Story = {
  args: {
    ...commonArgs,
    additionalClasses: {
      container: 'container-over-width',
    },
    ['aria-label']: 'Aria label example',

    autoRightStickyCalc: true,

    children: (
      <>
        <TableHead variant={tHeadVariant}>
          <TableRow hoverable={false} variant="HEADER_ROW_DEFAULT">
            <TableCell th={true} variant="HEADER_CELL_DEFAULT">
              Header Cell 1
            </TableCell>
            <TableCell th={true} variant="HEADER_CELL_DEFAULT">
              Header Cell 2
            </TableCell>
            <TableCell th={true} variant="HEADER_CELL_DEFAULT">
              Header Cell 3
            </TableCell>
            <TableCell sticky="right" th={true} variant="HEADER_CELL_DEFAULT">
              Header Cell 4
            </TableCell>
            <TableCell sticky="right" th={true} variant="HEADER_CELL_DEFAULT">
              Header Cell 5
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody variant={tBodyVariant}>
          <TableRow variant="BODY_ROW_DEFAULT">
            <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 1</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 2</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 3</TableCell>
            <TableCell sticky="right" variant="BODY_CELL_DEFAULT">
              Row 1 - Cell 4
            </TableCell>
            <TableCell sticky="right" variant="BODY_CELL_DEFAULT">
              Row 1 - Cell 5
            </TableCell>
          </TableRow>
          <TableRow active={true} variant="BODY_ROW_DEFAULT">
            <TableCell variant="BODY_CELL_DEFAULT">Row 2 - Cell 1</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 2 - Cell 2</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 2 - Cell 3</TableCell>
            <TableCell sticky="right" variant="BODY_CELL_DEFAULT">
              Row 2 - Cell 4
            </TableCell>
            <TableCell sticky="right" variant="BODY_CELL_DEFAULT">
              Row 2 - Cell 5
            </TableCell>
          </TableRow>
          <TableRow variant="BODY_ROW_DEFAULT">
            <TableCell variant="BODY_CELL_DEFAULT">Row 3 - Cell 1</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 3 - Cell 2</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 3 - Cell 3</TableCell>
            <TableCell sticky="right" variant="BODY_CELL_DEFAULT">
              Row 3 - Cell 4
            </TableCell>
            <TableCell sticky="right" variant="BODY_CELL_DEFAULT">
              Row 3 - Cell 5
            </TableCell>
          </TableRow>
          <TableRow variant="BODY_ROW_DEFAULT">
            <TableCell variant="BODY_CELL_DEFAULT">Row 4 - Cell 1</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 4 - Cell 2</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 4 - Cell 3</TableCell>
            <TableCell sticky="right" variant="BODY_CELL_DEFAULT">
              Row 4 - Cell 4
            </TableCell>
            <TableCell sticky="right" variant="BODY_CELL_DEFAULT">
              Row 4 - Cell 5
            </TableCell>
          </TableRow>
          <TableRow variant="BODY_ROW_DEFAULT">
            <TableCell variant="BODY_CELL_DEFAULT">Row 5 - Cell 1</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 5 - Cell 2</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 5 - Cell 3</TableCell>
            <TableCell sticky="right" variant="BODY_CELL_DEFAULT">
              Row 5 - Cell 4
            </TableCell>
            <TableCell sticky="right" variant="BODY_CELL_DEFAULT">
              Row 5 - Cell 5
            </TableCell>
          </TableRow>
          <TableRow variant="BODY_ROW_DEFAULT">
            <TableCell variant="BODY_CELL_DEFAULT">Row 6 - Cell 1</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 6 - Cell 2</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 6 - Cell 3</TableCell>
            <TableCell sticky="right" variant="BODY_CELL_DEFAULT">
              Row 6 - Cell 4
            </TableCell>
            <TableCell sticky="right" variant="BODY_CELL_DEFAULT">
              Row 6 - Cell 5
            </TableCell>
          </TableRow>
          <TableRow variant="BODY_ROW_DEFAULT">
            <TableCell variant="BODY_CELL_DEFAULT">Row 7 - Cell 1</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 7 - Cell 2</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 7 - Cell 3</TableCell>
            <TableCell sticky="right" variant="BODY_CELL_DEFAULT">
              Row 7 - Cell 4
            </TableCell>
            <TableCell sticky="right" variant="BODY_CELL_DEFAULT">
              Row 7 - Cell 5
            </TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
};
