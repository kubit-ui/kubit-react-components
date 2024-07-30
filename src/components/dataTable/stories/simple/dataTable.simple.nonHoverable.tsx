import * as React from 'react';

import { TagV2 } from '@/components/tagV2';
import { variantsObject } from '@/designSystem/themesObject';

import { IDataTable } from '../../types';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

export const DataTableSimpleNonHoverableStory: IDataTable = {
  variant: Object.values(variantsObject[themeSelected].DataTableVariantType || {})[0] as string,
  columns: [
    { field: 'ref', headerContent: 'Ref' },
    { field: 'firstName', headerContent: 'First name' },
    { field: 'lastName', headerContent: 'Last name' },
    { field: 'profile', headerContent: 'Profile' },
    { field: 'status', headerContent: 'Status' },
  ],
  rows: [
    {
      id: '1',
      ref: '1',
      firstName: 'John',
      lastName: 'Snow',
      profile: 'Admin',
      status: (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <TagV2 label={{ content: 'DISABLED' }} variant="DORMANT" />
        </div>
      ),
    },
    {
      id: '2',
      ref: '2',
      firstName: 'Arya',
      lastName: 'Stark',
      profile: 'User',
      status: (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <TagV2 label={{ content: 'ACTIVE' }} variant="INFORMATIVE" />
        </div>
      ),
    },
    {
      id: '3',
      ref: '3',
      firstName: 'Tyrion',
      lastName: 'Lannister',
      profile: 'User',
      status: (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <TagV2 label={{ content: 'DISABLED' }} variant="DORMANT" />
        </div>
      ),
    },
    {
      id: '4',
      ref: '4',
      firstName: 'Daenerys',
      lastName: 'Targaryen',
      profile: 'User',
      status: (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <TagV2 label={{ content: 'ACTIVE' }} variant="INFORMATIVE" />
        </div>
      ),
    },
    {
      id: '5',
      ref: '5',
      firstName: 'Cersei',
      lastName: 'Lannister',
      profile: 'Admin',
      status: (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <TagV2 label={{ content: 'DISABLED' }} variant="DORMANT" />
        </div>
      ),
    },
    {
      id: '6',
      ref: '6',
      firstName: 'Sansa',
      lastName: 'Stark',
      profile: 'User',
      status: (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <TagV2 label={{ content: 'ACTIVE' }} variant="INFORMATIVE" />
        </div>
      ),
    },
  ],
  nonHoverableRows: ['1', '3', '5'],
};
