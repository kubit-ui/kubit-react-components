import * as React from 'react';

import { TagV2 } from '@/components/tagV2';
import { variantsObject } from '@/designSystem/themesObject';

import { IDataTable } from '../../types';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

export const DataTableSimpleBodyWithReactNodeStory: IDataTable = {
  variant: Object.values(variantsObject[themeSelected].DataTableVariantType || {})[0] as string,
  columns: [
    { field: 'ref', headerContent: 'Ref', textAlign: 'left' },
    { field: 'firstName', headerContent: 'First name', textAlign: 'left' },
    { field: 'lastName', headerContent: 'Last name', textAlign: 'left' },
    { field: 'profile', headerContent: 'Profile', textAlign: 'center' },
  ],
  rows: [
    {
      id: '1',
      ref: '1',
      firstName: 'John',
      lastName: 'Snow',
      profile: (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <TagV2 label={{ content: 'ADMIN' }} variant="DORMANT" />
        </div>
      ),
    },
    {
      id: '2',
      ref: '2',
      firstName: 'Arya',
      lastName: 'Stark',
      profile: (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <TagV2 label={{ content: 'USER' }} variant="INFORMATIVE" />
        </div>
      ),
    },
    {
      id: '3',
      ref: '3',
      firstName: 'Tyrion',
      lastName: 'Lannister',
      profile: (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <TagV2 label={{ content: 'USER' }} variant="INFORMATIVE" />
        </div>
      ),
    },
    {
      id: '4',
      ref: '4',
      firstName: 'Daenerys',
      lastName: 'Targaryen',
      profile: (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <TagV2 label={{ content: 'USER' }} variant="INFORMATIVE" />
        </div>
      ),
    },
    {
      id: '5',
      ref: '5',
      firstName: 'Cersei',
      lastName: 'Lannister',
      profile: (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <TagV2 label={{ content: 'ADMIN' }} variant="DORMANT" />
        </div>
      ),
    },
    {
      id: '6',
      ref: '6',
      firstName: 'Sansa',
      lastName: 'Stark',
      profile: (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <TagV2 label={{ content: 'USER' }} variant="INFORMATIVE" />
        </div>
      ),
    },
  ],
};
