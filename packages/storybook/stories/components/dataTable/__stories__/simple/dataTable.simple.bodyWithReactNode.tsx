import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';
import type { DataTableProps } from '@kubit-ui-web/react-components';
import { Tag } from '@kubit-ui-web/react-components';

const { DataTableVariantType } = KUBIT_VARIANTS;

export const DataTableSimpleBodyWithReactNodeStory: DataTableProps = {
  columns: [
    { field: 'ref', headerContent: 'Ref', textAlign: 'left' },
    { field: 'firstName', headerContent: 'First name', textAlign: 'left' },
    { field: 'lastName', headerContent: 'Last name', textAlign: 'left' },
    { field: 'profile', headerContent: 'Profile', textAlign: 'center' },
  ],
  rows: [
    {
      firstName: 'John',
      id: '1',
      lastName: 'Snow',
      profile: (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Tag label={{ content: 'ADMIN' }} variant="DORMANT" />
        </div>
      ),
      ref: '1',
    },
    {
      firstName: 'Arya',
      id: '2',
      lastName: 'Stark',
      profile: (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Tag label={{ content: 'USER' }} variant="INFORMATIVE" />
        </div>
      ),
      ref: '2',
    },
    {
      firstName: 'Tyrion',
      id: '3',
      lastName: 'Lannister',
      profile: (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Tag label={{ content: 'USER' }} variant="INFORMATIVE" />
        </div>
      ),
      ref: '3',
    },
    {
      firstName: 'Daenerys',
      id: '4',
      lastName: 'Targaryen',
      profile: (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Tag label={{ content: 'USER' }} variant="INFORMATIVE" />
        </div>
      ),
      ref: '4',
    },
    {
      firstName: 'Cersei',
      id: '5',
      lastName: 'Lannister',
      profile: (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Tag label={{ content: 'ADMIN' }} variant="DORMANT" />
        </div>
      ),
      ref: '5',
    },
    {
      firstName: 'Sansa',
      id: '6',
      lastName: 'Stark',
      profile: (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Tag label={{ content: 'USER' }} variant="INFORMATIVE" />
        </div>
      ),
      ref: '6',
    },
  ],
  variant: DataTableVariantType.DEFAULT,
};
