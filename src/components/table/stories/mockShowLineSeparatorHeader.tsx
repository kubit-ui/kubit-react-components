import React from 'react';

import { ICONS } from '@/assets';
import { Button } from '@/components/button/button';
import { ElementOrIcon } from '@/components/elementOrIcon';
import { DeviceBreakpointsType } from '@/types';

import { ITable } from '../types';

const ExpandedContent = () => {
  return (
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
  );
};

export const mockTableShowingLineSeparatorHeader: Omit<ITable, 'variant' | 'captionDescription'> = {
  expandedContentHelpMessage: 'Need to expand to show the content',
  headers: [
    {
      id: 'date',
      label: 'Date',
      config: {
        hasDivider: true,
        showDividerHeader: true,
        width: '100px',
      },
    },
    {
      id: 'icon',
      label: 'Icon',
      config: {
        srOnlyHeader: true,
        width: '100px',
      },
      value: () => <ElementOrIcon height="25px" icon={ICONS.ICON_PLACEHOLDER} width="25px" />,
    },
    {
      id: 'name',
      label: 'Name',
    },
    {
      id: 'routingNumber',
      label: 'Routing',
      config: { alignHeader: 'left', alignValue: 'left' },
    },
    {
      id: 'accountNumber',
      label: 'Account',
      config: {
        alignHeader: 'left',
        alignValue: 'left',
      },
    },
    {
      id: 'transferMoney',
      label: 'Transfer',
      config: { alignHeader: 'center', alignValue: 'center' },
      value: (): string | JSX.Element => (
        <Button size="MEDIUM" variant="SECONDARY">
          Transfer money
        </Button>
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
        [DeviceBreakpointsType.DESKTOP]: <ExpandedContent />,
        [DeviceBreakpointsType.TABLET]: <ExpandedContent />,
        [DeviceBreakpointsType.MOBILE]: <ExpandedContent />,
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
};
