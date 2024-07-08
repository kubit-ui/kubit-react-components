import type { Meta, StoryObj } from '@storybook/react';

import { variantsObject } from '@/designSystem/themesObject';

import { DataTable } from '../dataTable';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta: Meta<typeof DataTable> = {
  title: 'Components/Table/DataTable/Simple',
  component: DataTable,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
};

export default meta;
type Story = StoryObj<typeof DataTable>;

export const DataTableSimpleCustomConfig: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].DataTableVariantType || {})[0] as string,
    columns: [
      { field: 'ref', headerContent: 'Ref' },
      { field: 'firstName', headerContent: 'First name' },
      { field: 'lastName', headerContent: 'Last name' },
      { field: 'profile', headerContent: 'Profile' },
    ],
    rows: [
      { id: '1', ref: '1', firstName: 'John', lastName: 'Snow', profile: 'Admin' },
      { id: '2', ref: '2', firstName: 'Arya', lastName: 'Stark', profile: 'User' },
      { id: '3', ref: '3', firstName: 'Tyrion', lastName: 'Lannister', profile: 'User' },
      {
        id: '4',
        ref: '4',
        firstName: 'Daenerys',
        lastName: 'Targaryen',
        profile: 'User',
        config: {
          ctv: {
            container: {
              border: '10px solid green',
              border_bottom: '10px solid green',
            },
          },
          onClick: () => window.alert('Mouse click'),
        },
      },
      { id: '5', ref: '5', firstName: 'Cersei', lastName: 'Lannister', profile: 'Admin' },
      { id: '6', ref: '6', firstName: 'Sansa', lastName: 'Stark', profile: 'User' },
    ],
    config: {
      table: {
        ctv: {
          wrapper: {
            padding: '10px',
            background_color: 'pink',
          },
        },
      },
    },
  },
};
