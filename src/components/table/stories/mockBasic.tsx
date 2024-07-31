import React from 'react';

import { ICONS } from '@/assets';
import { Button } from '@/components/button/button';
import { Icon } from '@/components/icon';
import { DeviceBreakpointsType } from '@/types';

export const mockBasicTable = {
  headers: [
    {
      id: 'date',
      label: 'Date',
      config: { alignHeader: 'center', alignValue: 'center' },
    },
    {
      id: 'name',
      label: 'Recipient name',
      config: {
        alignHeader: 'left',
        alignValue: 'left',
        hidden: {
          [DeviceBreakpointsType.LARGE_DESKTOP]: false,
          [DeviceBreakpointsType.DESKTOP]: false,
          [DeviceBreakpointsType.TABLET]: false,
          [DeviceBreakpointsType.MOBILE]: false,
        },
      },
      value: (value): string | JSX.Element =>
        value.surname ? (
          <div>
            <div>{value.name}</div>
            <div>{value.surname}</div>
          </div>
        ) : (
          value.name
        ),
    },
    {
      id: 'routingNumber',
      label: 'Routing number',
      config: { alignHeader: 'center', alignValue: 'center' },
    },
    {
      id: 'accountNumber',
      label: 'Account number',
      config: { alignHeader: 'center', alignValue: 'center' },
    },
    {
      id: 'transferMoney',
      label: 'Transfer money',
      config: { alignHeader: 'center', alignValue: 'center' },
      value: (): JSX.Element => (
        <Button size="MEDIUM" variant="PRIMARY">
          Transfer money
        </Button>
      ),
    },
    {
      id: 'edit',
      label: 'Edit',
      config: { alignHeader: 'center', alignValue: 'center' },
      value: (): JSX.Element => (
        <Icon
          altText="edit"
          height="25px"
          icon={ICONS.ICON_PLACEHOLDER}
          width="25px"
          onClick={() => null}
        />
      ),
    },
    {
      id: 'delete',
      label: 'Delete',
      config: { alignHeader: 'center', alignValue: 'center' },
      value: (): JSX.Element => (
        <Icon
          altText="delete"
          height="25px"
          icon={ICONS.ICON_PLACEHOLDER}
          width="25px"
          onClick={() => null}
        />
      ),
    },
  ],
  values: [
    {
      date: '18 DIC',
      name: 'Pam',
      surname: 'Beasley',
      routingNumber: '123456789',
      accountNumber: '****999999',
      transactionNumber: '0000',
    },
    {
      date: '18 DIC',
      name: 'Dwight',
      surname: 'Schrute',
      routingNumber: '123456789',
      accountNumber: '****999999',
      transactionNumber: '0000',
    },
    {
      date: '19 DIC',
      name: 'Jim',
      surname: 'Halpert',
      routingNumber: '987654321',
      accountNumber: '****333333',
    },
  ],
};
