import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { TableBody } from '@/components/tableBody';
import { TableCaption } from '@/components/tableCaption';
import { TableCell } from '@/components/tableCell';
import { TableFoot } from '@/components/tableFoot';
import { TableHead } from '@/components/tableHead';
import { TableRow } from '@/components/tableRow';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { Table as Story } from '../table';
import { ITableV2 } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Table/TableV2',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
  render: ({ ...args }) => <StoryWithHooks {...args} />,
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const StoryWithHooks = args => {
  return <Story {...args} />;
};

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

interface IMockTableChildren {
  hasStickyHead?: boolean;
  hasStickyColumn?: boolean;
}

const MockTableChildren = ({ hasStickyHead, hasStickyColumn }: IMockTableChildren) => {
  return (
    <>
      {!hasStickyHead && !hasStickyColumn && (
        <TableCaption variant={captionVariant}>Caption Example</TableCaption>
      )}
      <TableHead sticky={hasStickyHead} variant={tHeadVariant}>
        <TableRow hoverable={false} variant="HEADER_ROW_DEFAULT">
          <TableCell hidden th variant="HEADER_CELL_DEFAULT">
            Header Cell 1
          </TableCell>
          <TableCell th variant="HEADER_CELL_DEFAULT">
            Header Cell 2
          </TableCell>
          <TableCell th variant="HEADER_CELL_DEFAULT">
            Header Cell 3
          </TableCell>
          <TableCell th sticky={hasStickyColumn} variant="HEADER_CELL_DEFAULT">
            Header Cell 4
          </TableCell>
          <TableCell th sticky={hasStickyColumn} variant="HEADER_CELL_DEFAULT">
            Header Cell 5
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody variant={tBodyVariant}>
        <TableRow variant="BODY_ROW_DEFAULT">
          <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 1</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 2</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 3</TableCell>
          <TableCell sticky={hasStickyColumn} variant="BODY_CELL_DEFAULT">
            Row 1 - Cell 4
          </TableCell>
          <TableCell sticky={hasStickyColumn} variant="BODY_CELL_DEFAULT">
            Row 1 - Cell 5
          </TableCell>
        </TableRow>
        <TableRow active variant="BODY_ROW_DEFAULT">
          <TableCell variant="BODY_CELL_DEFAULT">Row 2 - Cell 1</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 2 - Cell 2</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 2 - Cell 3</TableCell>
          <TableCell sticky={hasStickyColumn} variant="BODY_CELL_DEFAULT">
            Row 2 - Cell 4
          </TableCell>
          <TableCell sticky={hasStickyColumn} variant="BODY_CELL_DEFAULT">
            Row 2 - Cell 5
          </TableCell>
        </TableRow>
        <TableRow variant="BODY_ROW_DEFAULT">
          <TableCell variant="BODY_CELL_DEFAULT">Row 3 - Cell 1</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 3 - Cell 2</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 3 - Cell 3</TableCell>
          <TableCell sticky={hasStickyColumn} variant="BODY_CELL_DEFAULT">
            Row 3 - Cell 4
          </TableCell>
          <TableCell sticky={hasStickyColumn} variant="BODY_CELL_DEFAULT">
            Row 3 - Cell 5
          </TableCell>
        </TableRow>
        <TableRow variant="BODY_ROW_DEFAULT">
          <TableCell variant="BODY_CELL_DEFAULT">Row 4 - Cell 1</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 4 - Cell 2</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 4 - Cell 3</TableCell>
          <TableCell sticky={hasStickyColumn} variant="BODY_CELL_DEFAULT">
            Row 4 - Cell 4
          </TableCell>
          <TableCell sticky={hasStickyColumn} variant="BODY_CELL_DEFAULT">
            Row 4 - Cell 5
          </TableCell>
        </TableRow>
        <TableRow variant="BODY_ROW_DEFAULT">
          <TableCell variant="BODY_CELL_DEFAULT">Row 5 - Cell 1</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 5 - Cell 2</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 5 - Cell 3</TableCell>
          <TableCell sticky={hasStickyColumn} variant="BODY_CELL_DEFAULT">
            Row 5 - Cell 4
          </TableCell>
          <TableCell sticky={hasStickyColumn} variant="BODY_CELL_DEFAULT">
            Row 5 - Cell 5
          </TableCell>
        </TableRow>
        <TableRow variant="BODY_ROW_DEFAULT">
          <TableCell variant="BODY_CELL_DEFAULT">Row 6 - Cell 1</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 6 - Cell 2</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 6 - Cell 3</TableCell>
          <TableCell sticky={hasStickyColumn} variant="BODY_CELL_DEFAULT">
            Row 6 - Cell 4
          </TableCell>
          <TableCell sticky={hasStickyColumn} variant="BODY_CELL_DEFAULT">
            Row 6 - Cell 5
          </TableCell>
        </TableRow>
        <TableRow variant="BODY_ROW_DEFAULT">
          <TableCell variant="BODY_CELL_DEFAULT">Row 7 - Cell 1</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 7 - Cell 2</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 7 - Cell 3</TableCell>
          <TableCell sticky={hasStickyColumn} variant="BODY_CELL_DEFAULT">
            Row 7 - Cell 4
          </TableCell>
          <TableCell sticky={hasStickyColumn} variant="BODY_CELL_DEFAULT">
            Row 7 - Cell 5
          </TableCell>
        </TableRow>
      </TableBody>
      {!hasStickyColumn && (
        <TableFoot variant={tFootVariant}>
          <TableRow variant="BODY_ROW_DEFAULT">
            <TableCell th colSpan={4} scope="row" textAlign="right" variant="BODY_CELL_DEFAULT">
              Summary
            </TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Footer - Cell</TableCell>
          </TableRow>
        </TableFoot>
      )}
    </>
  );
};

const commonArgs: React.PropsWithChildren<ITableV2> = {
  variant: Object.values(variantsObject[themeSelected].TableV2VariantType || {})[0] as string,
};

export const Table: Story = {
  args: {
    ...commonArgs,
    children: <MockTableChildren />,
    themeArgs: themesObject[themeSelected][STYLES_NAME.TABLE_HEAD],
  },
};

export const TableWithStickyHead: Story = {
  args: {
    ...commonArgs,
    ctv: {
      scrollableContainer: { height: '200px' },
    },
    ['aria-label']: 'Aria label example',
    children: <MockTableChildren hasStickyHead />,
    themeArgs: themesObject[themeSelected][STYLES_NAME.TABLE_HEAD],
  },
};

export const TableWithStickyColumns: Story = {
  args: {
    ...commonArgs,
    autoRightStickyCalc: true,
    ctv: {
      container: { width: '120%' },
    },
    ['aria-label']: 'Aria label example',
    children: <MockTableChildren hasStickyColumn />,
    themeArgs: themesObject[themeSelected][STYLES_NAME.TABLE_HEAD],
  },
};

export const TableWithCtv: Story = {
  args: {
    ...commonArgs,
    children: <MockTableChildren />,
    ctv: {
      wrapper: {
        background_color: 'pink',
      },
    },
  },
};
