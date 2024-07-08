import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { TableCell } from '@/components/tableCell';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { TableRow as Story } from '../tableRow';
import { ITableRow } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Table/TableRow',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: React.PropsWithChildren<ITableRow> = {
  variant: Object.values(variantsObject[themeSelected].TableRowVariantTypeV2 || {})[0] as string,
  children: (
    <>
      <TableCell variant="HEADER_CELL_DEFAULT">Cell 1</TableCell>
      <TableCell variant="HEADER_CELL_DEFAULT">Cell 2</TableCell>
      <TableCell variant="HEADER_CELL_DEFAULT">Cell 3</TableCell>
      <TableCell variant="HEADER_CELL_DEFAULT">Cell 4</TableCell>
      <TableCell variant="HEADER_CELL_DEFAULT">Cell 5</TableCell>
    </>
  ),
};

export const TableRow: Story = {
  args: {
    ...commonArgs,
    themeArgs: themesObject[themeSelected][STYLES_NAME.TABLE_ROW],
  },
};

export const TableRowWithCtv: Story = {
  args: {
    ...commonArgs,
    ctv: {
      container: {
        background_color: 'pink',
      },
    },
  },
};
