import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { TableBody } from '@/components/tableBody';
import { TableCell } from '@/components/tableCell';
import { TableHead } from '@/components/tableHead';
import { TableRow } from '@/components/tableRow';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { Table as Story } from '../table';
import { ITableV2 } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Table/TableV2/StickyLeftColumns',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const tHeadVariant = Object.values(
  variantsObject[themeSelected].TableHeadVariantType || {}
)[0] as string;

const tBodyVariant = Object.values(
  variantsObject[themeSelected].TableBodyVariantType || {}
)[0] as string;

const commonArgs: React.PropsWithChildren<ITableV2> = {
  variant: Object.values(variantsObject[themeSelected].TableV2VariantType || {})[0] as string,
};

export const TableWithStickyLeftColumns: Story = {
  args: {
    ...commonArgs,
    autoRightStickyCalc: true,
    ctv: {
      container: { width: '120%' },
    },
    ['aria-label']: 'Aria label example',
    themeArgs: themesObject[themeSelected][STYLES_NAME.TABLE_HEAD],
    children: (
      <>
        <TableHead variant={tHeadVariant}>
          <TableRow hoverable={false} variant="HEADER_ROW_DEFAULT">
            <TableCell th sticky="left" variant="HEADER_CELL_DEFAULT">
              Header Cell 1
            </TableCell>
            <TableCell th sticky="left" variant="HEADER_CELL_DEFAULT">
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
            <TableCell sticky="left" variant="BODY_CELL_DEFAULT">
              Row 1 - Cell 1
            </TableCell>
            <TableCell sticky="left" variant="BODY_CELL_DEFAULT">
              Row 1 - Cell 2
            </TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 3</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 4</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 5</TableCell>
          </TableRow>
          <TableRow active variant="BODY_ROW_DEFAULT">
            <TableCell sticky="left" variant="BODY_CELL_DEFAULT">
              Row 2 - Cell 1
            </TableCell>
            <TableCell sticky="left" variant="BODY_CELL_DEFAULT">
              Row 2 - Cell 2
            </TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 2 - Cell 3</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 2 - Cell 4</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 2 - Cell 5</TableCell>
          </TableRow>
          <TableRow variant="BODY_ROW_DEFAULT">
            <TableCell sticky="left" variant="BODY_CELL_DEFAULT">
              Row 3 - Cell 1
            </TableCell>
            <TableCell sticky="left" variant="BODY_CELL_DEFAULT">
              Row 3 - Cell 2
            </TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 3 - Cell 3</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 3 - Cell 4</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 3 - Cell 5</TableCell>
          </TableRow>
          <TableRow variant="BODY_ROW_DEFAULT">
            <TableCell sticky="left" variant="BODY_CELL_DEFAULT">
              Row 4 - Cell 1
            </TableCell>
            <TableCell sticky="left" variant="BODY_CELL_DEFAULT">
              Row 4 - Cell 2
            </TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 4 - Cell 3</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 4 - Cell 4</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 4 - Cell 5</TableCell>
          </TableRow>
          <TableRow variant="BODY_ROW_DEFAULT">
            <TableCell sticky="left" variant="BODY_CELL_DEFAULT">
              Row 5 - Cell 1
            </TableCell>
            <TableCell sticky="left" variant="BODY_CELL_DEFAULT">
              Row 5 - Cell 2
            </TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 5 - Cell 3</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 5 - Cell 4</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 5 - Cell 5</TableCell>
          </TableRow>
          <TableRow variant="BODY_ROW_DEFAULT">
            <TableCell sticky="left" variant="BODY_CELL_DEFAULT">
              Row 6 - Cell 1
            </TableCell>
            <TableCell sticky="left" variant="BODY_CELL_DEFAULT">
              Row 6 - Cell 2
            </TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 6 - Cell 3</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 6 - Cell 4</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 6 - Cell 5</TableCell>
          </TableRow>
          <TableRow variant="BODY_ROW_DEFAULT">
            <TableCell sticky="left" variant="BODY_CELL_DEFAULT">
              Row 7 - Cell 1
            </TableCell>
            <TableCell sticky="left" variant="BODY_CELL_DEFAULT">
              Row 7 - Cell 2
            </TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 7 - Cell 3</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 7 - Cell 4</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 7 - Cell 5</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
};
