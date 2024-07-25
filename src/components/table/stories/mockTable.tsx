import React from 'react';

import { ICONS } from '@/assets';
import { Button } from '@/components/button';
import { FooterPositionType } from '@/components/footer';
import { Icon } from '@/components/icon';
import { DeviceBreakpointsType } from '@/types';

import { FormatListHeaderPriorityType } from '../types';

export const mockTableWithLineSeparatorAndCenterFooter = {
  expandedContentHelpMessage: 'Need to expand to show the content',
  headers: [
    {
      id: 'date',
      label: 'Date',
      config: { hasDivider: true },
    },
    {
      id: 'name',
      label: (
        <span>
          Recipient name<sup>*</sup>
        </span>
      ),
      config: {
        alignHeader: 'left',
        alignValue: 'left',
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
      config: { alignHeader: 'left', alignValue: 'left' },
    },
    {
      id: 'accountNumber',
      label: 'Account number',
      config: {
        alignHeader: {
          [DeviceBreakpointsType.LARGE_DESKTOP]: 'left',
          [DeviceBreakpointsType.DESKTOP]: 'left',
          [DeviceBreakpointsType.TABLET]: 'right',
          [DeviceBreakpointsType.MOBILE]: 'right',
        },
        alignValue: {
          [DeviceBreakpointsType.LARGE_DESKTOP]: 'left',
          [DeviceBreakpointsType.DESKTOP]: 'left',
          [DeviceBreakpointsType.TABLET]: 'right',
          [DeviceBreakpointsType.MOBILE]: 'right',
        },
      },
    },
    {
      id: 'transferMoney',
      label: 'Transfer money',
      config: { alignHeader: 'center', alignValue: 'center' },
      value: (): string | JSX.Element => (
        <Button size="MEDIUM" variant="SECONDARY">
          Transfer money
        </Button>
      ),
    },
    {
      id: 'edit',
      label: 'Edit',
      config: { alignHeader: 'center', alignValue: 'center' },
      value: (): string | JSX.Element => (
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
      config: { alignHeader: 'center' },
      value: (): string | JSX.Element => (
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
    },
    {
      date: '18 DIC',
      name: 'Pam',
      surname: 'Beasley',
      routingNumber: '123456789',
      accountNumber: '****999999',
      transactionNumber: '0000',
      accordionIconExpandedAriaLabel: 'Collapse content',
      accordionIconCollapsedAriaLabel: 'Expand content',
      expandedContent: {
        [DeviceBreakpointsType.DESKTOP]: (
          <div
            style={{
              padding: '16px',
              backgroundColor: '#F5F5F5',
              borderRadius: '10px',
              display: 'inline-flex',
              gap: '8px',
              width: '50%',
              flexDirection: 'column',
            }}
          >
            <div>
              <b>Routing number:</b> 123456789-DESKTOP-EXPANDED-CONTENT
            </div>
            <div>
              <b>Account number:</b> 98765
            </div>
            <div>
              <b>Transaction number:</b> 00000
            </div>
          </div>
        ),
        [DeviceBreakpointsType.TABLET]: (
          <div
            style={{
              padding: '16px',
              backgroundColor: '#F5F5F5',
              borderRadius: '10px',
              display: 'inline-flex',
              gap: '15px',
              width: '50%',
              flexDirection: 'column',
            }}
          >
            <div>
              <b>Routing number:</b> 123456789-TABLET-EXPANDED-CONTENT
            </div>
            <div>
              <b>Account number:</b> 98765
            </div>
            <div>
              <b>Transaction number:</b> 00000
            </div>
          </div>
        ),

        [DeviceBreakpointsType.MOBILE]: (
          <div
            style={{
              padding: '16px',
              backgroundColor: '#F5F5F5',
              borderRadius: '10px',
              display: 'inline-flex',
              gap: '15px',
              width: '100%',
              flexDirection: 'column',
            }}
          >
            <div>
              <b>Routing number:</b> 123456789-MOBILE-EXPANDED-CONTENT
            </div>
            <div>
              <b>Account number:</b> 98765
            </div>
            <div>
              <b>Transaction number:</b> 00000
            </div>
          </div>
        ),
      },
      rowVariant: 'DEFAULT',
    },
    {
      date: '19 DIC',
      name: 'Dwight',
      routingNumber: '987654321',
      accountNumber: '****333333',
      rowVariant: 'DEFAULT',
    },
    {
      date: '21 DIC',
      name: 'Jim',
      routingNumber: '987654321',
      accountNumber: '****444444',
      rowVariant: 'DEFAULT',
    },
  ],
  accordionIcon: { icon: ICONS.ICON_PLACEHOLDER },
  footer: {
    content: (
      <div data-position={FooterPositionType.CENTER} style={{ marginLeft: '2rem' }}>
        <Button
          data-position={FooterPositionType.CENTER}
          icon={{ icon: ICONS.ICON_PLACEHOLDER }}
          size="MEDIUM"
          variant="ACTION_SECONDARY_ALT"
        >
          See more recipients
        </Button>
      </div>
    ),
  },
};

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
        icon: { icon: 'UNICORN', altText: 'Icon alt text' },
        tooltip: {
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
        icon: { icon: 'UNICORN', altText: 'Icon alt text' },
        tooltip: {
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
        icon: { icon: 'UNICORN', altText: 'Icon alt text' },
        tooltip: {
          title: { content: 'Tooltip title' },
          content: { content: 'Tooltip content' },
        },
      },
    },
  ],
};

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
          (value.name.value ?? value.name)
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
