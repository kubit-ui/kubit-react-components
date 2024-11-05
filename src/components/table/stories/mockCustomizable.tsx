import React from 'react';

import { ICONS } from '@/assets';
import { Button } from '@/components/button/button';
import { Icon } from '@/components/icon';
import { DeviceBreakpointsType } from '@/types';

import { FormatListHeaderPriorityType } from '../types';

export const mockCustomizableTable = {
  headerVariant: 'CUSTOMIZABLE_HEADER',
  hiddenHeaderOn: {
    [DeviceBreakpointsType.LARGE_DESKTOP]: false,
    [DeviceBreakpointsType.DESKTOP]: false,
    [DeviceBreakpointsType.TABLET]: true,
    [DeviceBreakpointsType.MOBILE]: true,
  },
  formatList: {
    [DeviceBreakpointsType.TABLET]: true,
    [DeviceBreakpointsType.MOBILE]: true,
  },
  formatListHeaderPriority: FormatListHeaderPriorityType.ROW_HEADER,
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
        // width: '100px',
      },
      value: (value): string | JSX.Element =>
        value.surname ? (
          <div>
            <div>{value.name.value ?? value.name}</div>
            <div>{value.surname}</div>
          </div>
        ) : (
          value.name.value ?? value.name
        ),
    },
    {
      id: 'routingNumber',
      label: 'Routing number',
      config: { alignHeader: 'center', alignValue: 'center' },
      variant: 'PRIMARY',
    },
    {
      id: 'accountNumber',
      label: 'Account number',
      config: { alignHeader: 'center', alignValue: 'center', backgroundColor: 'red' },
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
      name: { value: 'Kevin' },
      surname: 'Malone',
      routingNumber: '123456789',
      accountNumber: '****999999',
      transactionNumber: '0000',
      rowVariant: 'CUSTOMIZABLE_ROW',
      rowHeader: {
        label: 'Row header 1',
        variant: 'CUSTOMIZABLE_HEADER',
        // config: {
        // alignHeader: 'center',
        // alignValue: 'center',
        // width: '100px',
        // backgroundColor: 'green',
        // },
      },
    },
    {
      date: '18 DIC',
      name: { value: 'Dwight', backgroundColor: 'green', align: 'right' },
      surname: 'Malone',
      routingNumber: '123456789',
      accountNumber: '****999999',
      transactionNumber: '0000',
      rowVariant: 'CUSTOMIZABLE_ROW',
      backgroundColor: 'aqua',
      rowHeader: {
        label: 'Row header 1',
        variant: 'CUSTOMIZABLE_HEADER',
      },
    },
    {
      date: '19 DIC',
      name: 'Marta',
      routingNumber: '987654321',
      accountNumber: '****333333',
      rowVariant: 'CUSTOMIZABLE_ROW',
      rowHeader: {
        label: 'Row header 1',
        variant: 'CUSTOMIZABLE_HEADER',
      },
    },
    {
      date: '19 DIC',
      name: 'John',
      routingNumber: '9876234234',
      accountNumber: '****5234234',
      rowVariant: 'CUSTOMIZABLE_ROW',
      rowHeader: {
        label: 'Row header 1',
        variant: 'CUSTOMIZABLE_HEADER',
      },
    },
    {
      date: '19 DIC',
      name: 'Jes',
      routingNumber: '9876132224',
      accountNumber: '****5986756',
      rowVariant: 'CUSTOMIZABLE_ROW',
      delete: { backgroundColor: 'pink' },
      rowHeader: {
        label: 'Row header 1',
        variant: 'CUSTOMIZABLE_HEADER',
      },
    },
  ],
};
