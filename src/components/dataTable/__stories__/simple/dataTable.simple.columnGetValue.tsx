import { DataTableVariantType } from '@/lib/designSystem/kubit/components/dataTable/variants';
import { ICONS } from '@/lib/storybook/assets/icons/icons';

import { Button } from '../../../button/button';
import type { DataTableProps } from '../../types/dataTable';

export const DataTableSimpleColumnGetValueStory: DataTableProps = {
  columns: [
    { field: 'ref', headerContent: 'Ref', textAlign: 'left' },
    { field: 'firstName', headerContent: 'First name', textAlign: 'left' },
    { field: 'lastName', headerContent: 'Last name', textAlign: 'left' },
    { field: 'profile', headerContent: 'Profile', textAlign: 'left' },
    {
      field: 'delete',
      headerContent: 'Delete',
      textAlign: 'center',
      valueGetter: () => (
        <Button
          aria-label="Delete"
          icon={{ icon: ICONS.PLACEHOLDER }}
          size="SMALL"
          variant="PRIMARY"
        />
      ),
    },
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
