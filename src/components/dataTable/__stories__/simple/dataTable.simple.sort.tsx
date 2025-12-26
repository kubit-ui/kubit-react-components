import { useState } from 'react';

import { DataTableVariantType } from '@/lib/designSystem/kubit/components/dataTable/variants';
import { ICONS } from '@/lib/storybook/assets/icons/icons';

import { ElementOrIcon } from '../../../elementOrIcon/elementOrIcon';
import { DataTable } from '../../dataTable';
import type { DataTableColumnProps } from '../../types/dataTable';

const DataTableWithHooks = () => {
  const [sort, setSort] = useState({ direction: 'asc', field: 'ref' });

  const handleSort = (field: string) => {
    if (sort.field === field) {
      setSort({ direction: sort.direction === 'asc' ? 'desc' : 'asc', field });
    } else {
      setSort({ direction: 'asc', field });
    }
  };

  const rows = [
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
  ];

  const columns: DataTableColumnProps[] = [
    {
      field: 'ref',
      headerContent: {
        complex: {
          content: (
            <button
              style={{
                alignItems: 'center',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'row',
                gap: '4px',
                justifyContent: 'center',
                margin: 'auto',
              }}
              type="button"
              onClick={() => handleSort('ref')}
            >
              Ref
              <ElementOrIcon
                aria-label="Test icon"
                height="20px"
                icon={
                  sort.direction === 'asc'
                    ? ICONS.CHEVRON_UP
                    : ICONS.CHEVRON_DOWN
                }
                width="20px"
              />
            </button>
          ),
        },
      },
      textAlign: 'left',
    },
    { field: 'firstName', headerContent: 'First name', textAlign: 'left' },
    { field: 'lastName', headerContent: 'Last name', textAlign: 'left' },
    { field: 'profile', headerContent: 'Profile', textAlign: 'left' },
  ];

  const sortedRows = rows.sort((a, b) => {
    if (sort.direction === 'asc') {
      return a[sort.field] > b[sort.field] ? 1 : -1;
    }
    return a[sort.field] < b[sort.field] ? 1 : -1;
  });

  return (
    <DataTable
      columns={columns}
      rows={sortedRows}
      variant={DataTableVariantType.DEFAULT}
    />
  );
};

export const code = `
const DataTableWithHooks = () => {
  const [sort, setSort] = useState({ field: 'ref', direction: 'asc' });

  const handleSort = (field: string) => {
    if (sort.field === field) {
      setSort({ field, direction: sort.direction === 'asc' ? 'desc' : 'asc' });
    } else {
      setSort({ field, direction: 'asc' });
    }
  };

  const rows = [
    { id: '1', ref: '1', firstName: 'John', lastName: 'Snow', profile: 'Admin' },
    { id: '2', ref: '2', firstName: 'Arya', lastName: 'Stark', profile: 'User' },
    { id: '3', ref: '3', firstName: 'Tyrion', lastName: 'Lannister', profile: 'User' },
    { id: '4', ref: '4', firstName: 'Daenerys', lastName: 'Targaryen', profile: 'User' },
    { id: '5', ref: '5', firstName: 'Cersei', lastName: 'Lannister', profile: 'Admin' },
    { id: '6', ref: '6', firstName: 'Sansa', lastName: 'Stark', profile: 'User' },
  ];

  const columns: DataTableColumnType[] = [
    {
      field: 'ref',
      headerContent: {
        complex: {
          content: (
            <button
              style={{
                margin: 'auto',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '4px',
                cursor: 'pointer',
              }}
              type="button"
              onClick={() => handleSort('ref')}
            >
              Ref
              <ElementOrIcon
                aria-label="Test icon"
                height="20px"
                icon={sort.direction === 'asc' ? ICONS.CHEVRON_UP : ICONS.CHEVRON_DOWN}
                width="20px"
              />
            </button>
          ),
        },
      },
      textAlign: 'left',
    },
    { field: 'firstName', headerContent: 'First name', textAlign: 'left' },
    { field: 'lastName', headerContent: 'Last name', textAlign: 'left' },
    { field: 'profile', headerContent: 'Profile', textAlign: 'left' },
  ];

  const sortedRows = rows.sort((a, b) => {
    if (sort.direction === 'asc') {
      return a[sort.field] > b[sort.field] ? 1 : -1;
    }
    return a[sort.field] < b[sort.field] ? 1 : -1;
  });

  return (
    <DataTable
      columns={columns}
      rows={sortedRows}
      variant={Object.values(DataTableVariantType || {})[0] as string}
    />
  );
};
`;

export const DataTableSimpleSortStory: {
  render: () => JSX.Element;
  code: string;
} = {
  code,
  render: () => <DataTableWithHooks />,
};
