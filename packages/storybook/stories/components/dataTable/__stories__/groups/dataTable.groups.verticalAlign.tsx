import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';
import type { DataTableProps } from '@kubit-ui-web/react-components';

import { DividerStory } from '@/stories/components/divider/divider';

const { DataTableVariantType } = KUBIT_VARIANTS;

export const DataTableGroupsVerticalAlignStory: DataTableProps = {
  columns: [
    {
      field: 'ref',
      headerContent: <span className="kbt-storybook-large-box">LARGE BOX</span>,
      textAlign: 'left',
    },
    { field: 'firstName', headerContent: 'First name', textAlign: 'left' },
    { field: 'lastName', headerContent: 'Last name', textAlign: 'left' },
    { field: 'profile', headerContent: 'Profile', textAlign: 'right' },
  ],
  config: {
    tableHeadRow: {
      cellsAlignItems: 'center',
    },
  },
  rowGroups: [
    {
      divider: {
        content: <DividerStory>STARK FAMILY</DividerStory>,
      },
      rows: [
        {
          config: {
            cellsAlignItems: 'center',
          },
          firstName: 'John',
          id: '1',
          lastName: 'Snow',
          profile: 'Admin',
          ref: <span className="kbt-storybook-large-box">LARGE BOX</span>,
        },
        {
          firstName: 'Arya',
          id: '2',
          lastName: 'Stark',
          profile: 'User',
          ref: <span className="kbt-storybook-large-box">LARGE BOX</span>,
        },
        {
          firstName: 'Sansa',
          id: '3',
          lastName: 'Stark',
          profile: 'User',
          ref: <span className="kbt-storybook-large-box">LARGE BOX</span>,
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
          ref: <span className="kbt-storybook-large-box">LARGE BOX</span>,
        },
        {
          firstName: 'Cersei',
          id: '5',
          lastName: 'Lannister',
          profile: 'Admin',
          ref: <span className="kbt-storybook-large-box">LARGE BOX</span>,
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
          ref: <span className="kbt-storybook-large-box">LARGE BOX</span>,
        },
      ],
    },
  ],
  variant: DataTableVariantType.DEFAULT,
};
