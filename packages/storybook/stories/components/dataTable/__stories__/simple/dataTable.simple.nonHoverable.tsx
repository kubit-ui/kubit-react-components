import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';
import { Tag, type DataTableProps } from '@kubit-ui-web/react-components';

const { DataTableVariantType } = KUBIT_VARIANTS;

export const DataTableSimpleNonHoverableStory: DataTableProps = {
  columns: [
    { field: 'ref', headerContent: 'Ref' },
    { field: 'firstName', headerContent: 'First name' },
    { field: 'lastName', headerContent: 'Last name' },
    { field: 'profile', headerContent: 'Profile' },
    { field: 'status', headerContent: 'Status' },
  ],
  nonHoverableRows: ['1', '3', '5'],
  rows: [
    {
      firstName: 'John',
      id: '1',
      lastName: 'Snow',
      profile: 'Admin',
      ref: '1',
      status: (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Tag label={{ content: 'DISABLED' }} variant="DORMANT" />
        </div>
      ),
    },
    {
      firstName: 'Arya',
      id: '2',
      lastName: 'Stark',
      profile: 'User',
      ref: '2',
      status: (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Tag label={{ content: 'ACTIVE' }} variant="INFORMATIVE" />
        </div>
      ),
    },
    {
      firstName: 'Tyrion',
      id: '3',
      lastName: 'Lannister',
      profile: 'User',
      ref: '3',
      status: (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Tag label={{ content: 'DISABLED' }} variant="DORMANT" />
        </div>
      ),
    },
    {
      firstName: 'Daenerys',
      id: '4',
      lastName: 'Targaryen',
      profile: 'User',
      ref: '4',
      status: (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Tag label={{ content: 'ACTIVE' }} variant="INFORMATIVE" />
        </div>
      ),
    },
    {
      firstName: 'Cersei',
      id: '5',
      lastName: 'Lannister',
      profile: 'Admin',
      ref: '5',
      status: (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Tag label={{ content: 'DISABLED' }} variant="DORMANT" />
        </div>
      ),
    },
    {
      firstName: 'Sansa',
      id: '6',
      lastName: 'Stark',
      profile: 'User',
      ref: '6',
      status: (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Tag label={{ content: 'ACTIVE' }} variant="INFORMATIVE" />
        </div>
      ),
    },
  ],
  variant: DataTableVariantType.DEFAULT,
};
