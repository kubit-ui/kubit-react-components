import { DataTableVariantType } from '@/lib/designSystem/kubit/components/dataTable/variants';
import { DividerStory } from '@/lib/storybook/components/divider/divider';

import type { DataTableProps } from '../../types/dataTable';

export const DataTableGroupsTextAlignStory: DataTableProps = {
  columns: [
    { field: 'ref', headerContent: 'Ref', justifyContent: 'left' },
    { field: 'firstName', headerContent: 'First name', justifyContent: 'left' },
    { field: 'lastName', headerContent: 'Last name', justifyContent: 'left' },
    {
      field: 'profile',
      headerContent: 'Profiles',
      justifyContent: 'right',
      valueJustifyContent: 'center',
    },
  ],
  rowGroups: [
    {
      divider: {
        content: <DividerStory>STARK FAMILY</DividerStory>,
      },
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
          firstName: 'Sansa',
          id: '3',
          lastName: 'Stark',
          profile: 'User',
          ref: '3',
        },
      ],
    },
    {
      divider: {
        content: <DividerStory>LANNISTER FAMILY</DividerStory>,
      },
      rows: [
        {
          firstName: 'Tyrion',
          id: '4',
          lastName: 'Lannister',
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
      ],
    },
    {
      divider: {
        content: <DividerStory>TARGARYEN FAMILY</DividerStory>,
      },
      rows: [
        {
          firstName: 'Daenerys',
          id: '6',
          lastName: 'Targaryen',
          profile: 'User',
          ref: '6',
        },
      ],
    },
  ],
  variant: DataTableVariantType.DEFAULT,
};
