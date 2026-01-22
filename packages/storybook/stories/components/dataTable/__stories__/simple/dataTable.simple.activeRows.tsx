import { DataTableVariantType } from '@/lib/designSystem/kubit/components/dataTable/variants';

import type { DataTableProps } from '../../types/dataTable';

export const DataTableSimpleActiveRowsStory: DataTableProps = {
  activeRows: ['2', '5'],
  columns: [
    { field: 'ref', headerContent: 'Ref' },
    { field: 'firstName', headerContent: 'First name' },
    { field: 'lastName', headerContent: 'Last name' },
    { field: 'profile', headerContent: 'Profile' },
  ],
  rows: [
    {
      firstName: 'John',
      id: '1',
      lastName: 'Snow',
      profile: 'Admin',
      ref: '1',
    },
    {
      firstName: 'Arya',
      id: '2',
      lastName: 'Stark',
      profile: 'User',
      ref: '2',
    },
    {
      firstName: 'Tyrion',
      id: '3',
      lastName: 'Lannister',
      profile: 'User',
      ref: '3',
    },
    {
      firstName: 'Daenerys',
      id: '4',
      lastName: 'Targaryen',
      profile: 'User',
      ref: '4',
    },
    {
      firstName: 'Cersei',
      id: '5',
      lastName: 'Lannister',
      profile: 'Admin',
      ref: '5',
    },
    {
      firstName: 'Sansa',
      id: '6',
      lastName: 'Stark',
      profile: 'User',
      ref: '6',
    },
  ],
  variant: DataTableVariantType.DEFAULT,
};
