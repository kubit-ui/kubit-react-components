import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { Divider } from '@/components/divider';
import { variantsObject } from '@/designSystem/themesObject';

import { DataTable } from '../dataTable';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta: Meta<typeof DataTable> = {
  title: 'Components/Table/DataTable/Groups',
  component: DataTable,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
};

export default meta;
type Story = StoryObj<typeof DataTable>;

export const DataTableGroupsStickyColumns: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].DataTableVariantType || {})[0] as string,
    columns: [
      { field: 'ref', headerContent: 'Ref', textAlign: 'left', width: '400px' },
      { field: 'firstName', headerContent: 'First name', textAlign: 'left', width: '400px' },
      {
        field: 'lastName',
        headerContent: 'Last name',
        textAlign: 'left',
        width: '300px',
        sticky: true,
      },
      {
        field: 'profile',
        headerContent: 'Profile',
        textAlign: 'left',
        sticky: true,
        width: '300px',
      },
    ],
    rowGroups: [
      {
        divider: {
          content: <Divider leftLabel={{ content: 'STARK FAMILY' }} variant="DEFAULT" />,
        },
        rows: [
          { id: '1', ref: '1', firstName: 'John', lastName: 'Snow', profile: 'Admin' },
          { id: '2', ref: '2', firstName: 'Arya', lastName: 'Stark', profile: 'User' },
          { id: '3', ref: '3', firstName: 'Sansa', lastName: 'Stark', profile: 'User' },
        ],
      },
      {
        divider: {
          content: <Divider leftLabel={{ content: 'LANNISTER FAMILY' }} variant="DEFAULT" />,
        },
        rows: [
          { id: '4', ref: '4', firstName: 'Tyrion', lastName: 'Lannister', profile: 'User' },
          { id: '5', ref: '5', firstName: 'Cersei', lastName: 'Lannister', profile: 'Admin' },
        ],
      },
      {
        divider: {
          content: <Divider leftLabel={{ content: 'TARGARYEN FAMILY' }} variant="DEFAULT" />,
        },
        rows: [
          { id: '6', ref: '6', firstName: 'Daenerys', lastName: 'Targaryen', profile: 'User' },
        ],
      },
    ],
    ctv: {
      wrapper: { width: '800px' },
    },
  },
};