import { DataTableVariantType } from '@/lib/designSystem/kubit/components/dataTable/variants';

import type { DataTableProps } from '../../types/dataTable';

export const DataTableSimpleVerticalAlignStory: DataTableProps = {
  columns: [
    {
      field: 'ref',
      headerContent: <span className="kbt-storybook-large-box">LARGE BOX</span>,
      textAlign: 'left',
    },
    { field: 'firstName', headerContent: 'First name' },
    { field: 'lastName', headerContent: 'Last name' },
    { field: 'profile', headerContent: 'Profile' },
  ],
  config: {
    tableHeadRow: {
      cellsVerticalAlign: 'middle',
    },
  },
  rows: [
    {
      config: {
        cellsVerticalAlign: 'middle',
      },
      firstName: 'John',
      id: '1',
      lastName: 'Snow',
      profile: 'Admin',
      ref: <span className="kbt-storybook-large-box">LARGE BOX</span>,
    },
    {
      firstName: 'Arya',
      id: '2',
      lastName: 'Stark',
      profile: 'User',
      ref: <span className="kbt-storybook-large-box">LARGE BOX</span>,
    },
    {
      firstName: 'Tyrion',
      id: '3',
      lastName: 'Lannister',
      profile: 'User',
      ref: <span className="kbt-storybook-large-box">LARGE BOX</span>,
    },
    {
      firstName: 'Daenerys',
      id: '4',
      lastName: 'Targaryen',
      profile: 'User',
      ref: <span className="kbt-storybook-large-box">LARGE BOX</span>,
    },
    {
      firstName: 'Cersei',
      id: '5',
      lastName: 'Lannister',
      profile: 'Admin',
      ref: <span className="kbt-storybook-large-box">LARGE BOX</span>,
    },
    {
      firstName: 'Sansa',
      id: '6',
      lastName: 'Stark',
      profile: 'User',
      ref: <span className="kbt-storybook-large-box">LARGE BOX</span>,
    },
  ],
  variant: DataTableVariantType.DEFAULT,
};
