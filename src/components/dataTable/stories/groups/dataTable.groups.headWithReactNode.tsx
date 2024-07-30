import * as React from 'react';

import { ICONS } from '@/assets';
import { Divider } from '@/components/divider';
import { ElementOrIcon } from '@/components/elementOrIcon';
import { variantsObject } from '@/designSystem/themesObject';

import { IDataTable } from '../../types';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

export const DataTableGroupsHeadWithReactNodeStory: IDataTable = {
  variant: Object.values(variantsObject[themeSelected].DataTableVariantType || {})[0] as string,
  columns: [
    { field: 'ref', headerContent: 'Ref', textAlign: 'left' },
    { field: 'firstName', headerContent: 'First name', textAlign: 'left' },
    { field: 'lastName', headerContent: 'Last name', textAlign: 'left' },
    {
      field: 'profile',
      headerContent: {
        complex: {
          content: (
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <p>Profile</p>
              <ElementOrIcon
                aria-label="Test icon"
                height="20px"
                icon={ICONS.ICON_PLACEHOLDER}
                width="20px"
                onClick={() => window.alert('pressed')}
              />
            </div>
          ),
        },
      },
      headerHiddenContent: 'Profile',
      textAlign: 'center',
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
      rows: [{ id: '6', ref: '6', firstName: 'Daenerys', lastName: 'Targaryen', profile: 'User' }],
    },
  ],
};
