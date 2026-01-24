import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';
import type { DataTableProps } from '@kubit-ui-web/react-components';

import { DividerStory } from '@/stories/components/divider/divider';

const { DataTableVariantType } = KUBIT_VARIANTS;

export const DataTableGroupsStory: DataTableProps = {
  columns: [
    { field: 'ref', headerContent: 'Ref', textAlign: 'left' },
    { field: 'firstName', headerContent: 'First name', textAlign: 'left' },
    { field: 'lastName', headerContent: 'Last name', textAlign: 'left' },
    { field: 'profile', headerContent: 'Profile', textAlign: 'left' },
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
