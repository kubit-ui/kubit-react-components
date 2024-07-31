import React from 'react';

import { ICONS } from '@/assets';
import { Button } from '@/components/button/button';
import { FooterPositionType } from '@/components/footer';
import { Icon } from '@/components/icon';
import { DeviceBreakpointsType } from '@/types';

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
  accordionIcon: { icon: ICONS.ICON_CHEVRON_DOWN },
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
