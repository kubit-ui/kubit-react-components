import { ElementOrIcon } from '@/lib/components/elementOrIcon/elementOrIcon';
import { DataTableVariantType } from '@/lib/designSystem/kubit/components/dataTable/variants';
import { ICONS } from '@/stories/assets/icons/icons';
import { DividerStory } from '@/stories/components/divider/divider';

import type { DataTableProps } from '../../types/dataTable';

export const DataTableGroupsHeadWithReactNodeStory: DataTableProps = {
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
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'row',
                gap: '4px',
                justifyContent: 'center',
              }}
            >
              <p>Profile</p>
              <ElementOrIcon
                aria-label="Test icon"
                height="20px"
                icon={ICONS.PLACEHOLDER}
                width="20px"
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
