import React, { useState } from 'react';

import { ICONS } from '@/assets/storybook/icons/icons';
import { variantsObject } from '@/designSystem/themesObject/themesObject';

import { ElementOrIcon } from '../../../elementOrIcon/elementOrIcon';
import { DataTable } from '../../dataTable';
import { DataTableColumnType } from '../../types/dataTable';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

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
                icon={sort.direction === 'asc' ? ICONS.ICON_CHEVRON_UP : ICONS.ICON_CHEVRON_DOWN}
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
      variant={Object.values(variantsObject[themeSelected].DataTableVariantType || {})[0] as string}
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
                icon={sort.direction === 'asc' ? ICONS.ICON_CHEVRON_UP : ICONS.ICON_CHEVRON_DOWN}
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
      variant={Object.values(variantsObject[themeSelected].DataTableVariantType || {})[0] as string}
    />
  );
};
`;

export const DataTableSimpleSortStory: { render: () => JSX.Element; code: string } = {
  render: () => <DataTableWithHooks />,
  code,
};
