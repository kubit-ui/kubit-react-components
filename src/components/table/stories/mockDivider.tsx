import React from 'react';

import { ICONS } from '@/assets/storybook/icons/icons';
import { Button } from '@/components/button/button';
import { IconBasic as Icon } from '@/components/icon/icon';
import { DeviceBreakpointsType } from '@/types/breakpoints/breakpoints';

export const mockTableWithDivider = {
  headers: [
    {
      id: 'date',
      label: 'Date',
      config: { hasDivider: true },
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
          [DeviceBreakpointsType.TABLET]: true,
          [DeviceBreakpointsType.MOBILE]: true,
        },
      },
      value: (value): JSX.Element =>
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
      config: { alignHeader: 'left', alignValue: 'left' },
    },
    {
      id: 'accountNumber',
      label: 'Account number',
      config: { alignHeader: 'left', alignValue: 'left' },
    },
    {
      id: 'transferMoney',
      label: 'Transfer money',
      config: { alignHeader: 'center', alignValue: 'center' },
      value: (): JSX.Element => (
        <Button size="MEDIUM" variant="SECONDARY">
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
      name: 'Michael',
      surname: 'Scott',
      routingNumber: '123456789',
      accountNumber: '****999999',
      transactionNumber: '0000',
      dividerContent: {
        leftLabel: { content: '18 DIC Lorem ipsum' },
        icon: { icon: ICONS.ICON_PLACEHOLDER, altText: 'Icon alt text' },
        iconTooltip: {
          title: { content: 'Tooltip title' },
          content: { content: 'Tooltip content' },
        },
      },
    },
    {
      date: '18 DIC',
      name: 'Pam',
      surname: 'Beasley',
      routingNumber: '123456789',
      accountNumber: '****999999',
      transactionNumber: '0000',
      dividerContent: {
        leftLabel: { content: '18 DIC Lorem ipsum' },
        icon: { icon: ICONS.ICON_PLACEHOLDER, altText: 'Icon alt text' },
        iconTooltip: {
          title: { content: 'Tooltip title' },
          content: { content: 'Tooltip content' },
        },
      },
    },
    {
      date: '19 DIC',
      name: 'Dwight',
      routingNumber: '987654321',
      accountNumber: '****333333',
      dividerContent: {
        leftLabel: { content: '19 DIC Lorem ipsum' },
        icon: { icon: ICONS.ICON_PLACEHOLDER, altText: 'Icon alt text' },
        iconTooltip: {
          title: { content: 'Tooltip title' },
          content: { content: 'Tooltip content' },
        },
      },
    },
  ],
};
