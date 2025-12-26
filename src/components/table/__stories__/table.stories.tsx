import type { PropsWithChildren } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { TableVariantType } from '@/lib/designSystem/kubit/components/table/variants';
import { TableBodyVariantType } from '@/lib/designSystem/kubit/components/tableBody/variants';
import { TableFootVariantType } from '@/lib/designSystem/kubit/components/tableFoot/variants';
import { TableHeadVariantType } from '@/lib/designSystem/kubit/components/tableHead/variants';
import { TableCaptionVariantType } from '@/lib/designSystem/kubit/components/variants';

import { TableBody } from '../../tableBody/tableBody';
import { TableCaption } from '../../tableCaption/tableCaption';
import { TableCell } from '../../tableCell/tableCell';
import { TableFoot } from '../../tableFoot/tableFoot';
import { TableHead } from '../../tableHead/tableHead';
import { TableRow } from '../../tableRow/tableRow';
import { Table as Story } from '../table';
import type { TableProps } from '../types/table';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: Story,
  tags: ['autodocs', 'table'],
  title: 'Components/Table/Table',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const captionVariant = Object.values(
  TableCaptionVariantType || {},
)[0] as string;

const tHeadVariant = Object.values(TableHeadVariantType || {})[0] as string;

const tBodyVariant = Object.values(TableBodyVariantType || {})[0] as string;

const tFootVariant = Object.values(TableFootVariantType || {})[0] as string;

const commonArgs: PropsWithChildren<TableProps> = {
  variant: TableVariantType.DEFAULT,
};

export const Table: Story = {
  args: {
    ...commonArgs,

    children: (
      <>
        <TableCaption variant={captionVariant}>Caption Example</TableCaption>
        <TableHead variant={tHeadVariant}>
          <TableRow hoverable={false} variant="HEADER_ROW_DEFAULT">
            <TableCell hidden={true} th={true} variant="HEADER_CELL_DEFAULT">
              Header Cell 1
            </TableCell>
            <TableCell th={true} variant="HEADER_CELL_DEFAULT">
              Header Cell 2
            </TableCell>
            <TableCell th={true} variant="HEADER_CELL_DEFAULT">
              Header Cell 3
            </TableCell>
            <TableCell th={true} variant="HEADER_CELL_DEFAULT">
              Header Cell 4
            </TableCell>
            <TableCell th={true} variant="HEADER_CELL_DEFAULT">
              Header Cell 5
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody variant={tBodyVariant}>
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
          <TableRow variant="BODY_ROW_DEFAULT">
            <TableCell variant="BODY_CELL_DEFAULT">Row 4 - Cell 1</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 4 - Cell 2</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 4 - Cell 3</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 4 - Cell 4</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 4 - Cell 5</TableCell>
          </TableRow>
          <TableRow variant="BODY_ROW_DEFAULT">
            <TableCell variant="BODY_CELL_DEFAULT">Row 5 - Cell 1</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 5 - Cell 2</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 5 - Cell 3</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 5 - Cell 4</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 5 - Cell 5</TableCell>
          </TableRow>
          <TableRow variant="BODY_ROW_DEFAULT">
            <TableCell variant="BODY_CELL_DEFAULT">Row 6 - Cell 1</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 6 - Cell 2</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 6 - Cell 3</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 6 - Cell 4</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 6 - Cell 5</TableCell>
          </TableRow>
          <TableRow variant="BODY_ROW_DEFAULT">
            <TableCell variant="BODY_CELL_DEFAULT">Row 7 - Cell 1</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 7 - Cell 2</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 7 - Cell 3</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 7 - Cell 4</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 7 - Cell 5</TableCell>
          </TableRow>
        </TableBody>
        <TableFoot variant={tFootVariant}>
          <TableRow variant="BODY_ROW_DEFAULT">
            <TableCell
              colSpan={4}
              scope="row"
              textAlign="right"
              th={true}
              variant="BODY_CELL_DEFAULT"
            >
              Summary
            </TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Footer - Cell</TableCell>
          </TableRow>
        </TableFoot>
      </>
    ),
  },
};
