import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { variantsObject } from '@/designSystem/themesObject/themesObject';

import { TableBody } from '../../tableBody/tableBody';
import { TableCaption } from '../../tableCaption/tableCaption';
import { TableCell } from '../../tableCell/tableCell';
import { TableFoot } from '../../tableFoot/tableFoot';
import { TableHead } from '../../tableHead/tableHead';
import { TableRow } from '../../tableRow/tableRow';
import { Table as Story } from '../table';
import { ITableV2 } from '../types/table';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Table/TableV2/WithCtv',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const captionVariant = Object.values(
  variantsObject[themeSelected].TableCaptionVariantType || {}
)[0] as string;

const tHeadVariant = Object.values(
  variantsObject[themeSelected].TableHeadVariantType || {}
)[0] as string;

const tBodyVariant = Object.values(
  variantsObject[themeSelected].TableBodyVariantType || {}
)[0] as string;

const tFootVariant = Object.values(
  variantsObject[themeSelected].TableFootVariantType || {}
)[0] as string;

const commonArgs: React.PropsWithChildren<ITableV2> = {
  variant: Object.values(variantsObject[themeSelected].TableV2VariantType || {})[0] as string,
};

export const TableWithCtv: Story = {
  args: {
    ...commonArgs,
    ctv: {
      wrapper: {
        background_color: 'pink',
        padding: '10px',
      },
    },
    children: (
      <>
        <TableCaption variant={captionVariant}>Caption Example</TableCaption>
        <TableHead variant={tHeadVariant}>
          <TableRow hoverable={false} variant="HEADER_ROW_DEFAULT">
            <TableCell th variant="HEADER_CELL_DEFAULT">
              Header Cell 1
            </TableCell>
            <TableCell th variant="HEADER_CELL_DEFAULT">
              Header Cell 2
            </TableCell>
            <TableCell th variant="HEADER_CELL_DEFAULT">
              Header Cell 3
            </TableCell>
            <TableCell th variant="HEADER_CELL_DEFAULT">
              Header Cell 4
            </TableCell>
            <TableCell th variant="HEADER_CELL_DEFAULT">
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
            <TableCell th colSpan={4} scope="row" textAlign="right" variant="BODY_CELL_DEFAULT">
              Summary
            </TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Footer - Cell</TableCell>
          </TableRow>
        </TableFoot>
      </>
    ),
  },
};
