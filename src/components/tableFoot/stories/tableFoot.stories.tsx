import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { themesObject, variantsObject } from '@/designSystem/themesObject/themesObject';

import { TableCell } from '../../tableCell/tableCell';
import { TableRow } from '../../tableRow/tableRow';
import { TableFoot as Story } from '../tableFoot';
import { ITableFoot } from '../types/tableFoot';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Table/TableFoot',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: React.PropsWithChildren<ITableFoot> = {
  variant: Object.values(variantsObject[themeSelected].TableFootVariantType || {})[0] as string,
  children: (
    <>
      <TableRow variant="BODY_ROW_DEFAULT">
        <TableCell variant="BODY_CELL_DEFAULT">Cell 1</TableCell>
        <TableCell variant="BODY_CELL_DEFAULT">Cell 2</TableCell>
      </TableRow>
    </>
  ),
};

export const TableFoot: Story = {
  args: {
    ...commonArgs,
    themeArgs: themesObject[themeSelected][STYLES_NAME.TABLE_FOOT],
  },
};

export const TableFootWithCtv: Story = {
  args: {
    ...commonArgs,
    ctv: {
      container: {
        background_color: 'pink',
      },
    },
  },
};
