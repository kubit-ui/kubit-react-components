import userEvent from '@testing-library/user-event';

import { screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { Button } from '@/components/button';
import { Icon } from '@/components/icon';
import * as useMediaDevice from '@/hooks/useMediaDevice/useMediaDevice';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { windowMatchMedia } from '@/tests/windowMatchMedia';
import { DeviceBreakpointsType, ROLES } from '@/types';
import * as hasScrollUtils from '@/utils/scroll/hasScroll';

import { Table } from '../table';
import { FormatListHeaderPriorityType } from '../types';

const mockBaseNoOneExpanded = {
  variant: 'DEFAULT',
  footer: { content: <div>Footer</div> },
  headers: [
    {
      id: 'name',
      label: 'Recipient name',
      config: { alignHeader: 'left', alignValue: 'left' },
    },
  ],
  values: [
    {
      name: 'name',
      expandedContent: { [DeviceBreakpointsType.DESKTOP]: <span>expanded</span> },
    },
    {},
  ],
};

const mockBaseNoDivider = {
  variant: 'DEFAULT',
  footer: { content: <div>Footer</div> },
  headers: [
    {
      id: 'name',
      label: 'Recipient name',
      config: { alignHeader: 'left', alignValue: 'left' },
      value: value =>
        value.surname ? (
          <div>
            <div>{value.name}</div>
            <div>{value.surname}</div>
          </div>
        ) : (
          value.name
        ),
    },
  ],
  values: [
    {
      name: 'name',
      surname: 'surname',
    },
  ],
};

const mockBase = {
  variant: 'DEFAULT',
  headerVariant: 'PRIMARY',
  footer: { content: <div>Footer</div> },
  headers: [
    {
      id: 'date',
      label: 'Date',
      config: { hasDivider: true },
    },
    {
      id: 'name',
      label: 'Recipient name',
      config: { alignHeader: 'left', alignValue: 'left' },
      value: value =>
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
      value: () => (
        <Button size="LARGE" variant="PRIMARY">
          Transfer money
        </Button>
      ),
    },
    {
      id: 'edit',
      label: 'Edit',
      config: { alignHeader: 'center', alignValue: 'center' },
      value: () => 'plug',
    },
    {
      id: 'delete',
      label: 'Delete',
      config: { alignHeader: 'right' },
      value: () => 'edit active',
    },
  ],
  values: [
    {
      date: '18 DIC',
      name: 'Michael',
      surname: 'Scott',
      routingNumber: '113456789',
      accountNumber: '****999999',
      transactionNumber: '0000',
    },
  ],
};

const mockBaseCustomizable = {
  variant: 'DEFAULT',
  headerVariant: 'PRIMARY',
  footer: { content: <div>Footer</div> },
  headers: [
    {
      id: 'date',
      label: 'Date',
      config: { hasDivider: true },
    },
    {
      id: 'name',
      label: 'Recipient name',
      config: { alignHeader: 'left', alignValue: 'left' },
      value: value =>
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
      value: () => (
        <Button size="LARGE" variant="PRIMARY">
          Transfer money
        </Button>
      ),
    },
    {
      id: 'edit',
      label: 'Edit',
      config: { alignHeader: 'center', alignValue: 'center' },
      value: () => 'plug',
    },
    {
      id: 'delete',
      label: 'Delete',
      config: { alignHeader: 'right' },
      value: () => 'edit active',
    },
  ],
  values: [
    {
      date: '18 DIC',
      name: 'Michael',
      surname: 'Scott',
      routingNumber: { value: '113456789', backgroundColor: 'red' },
      accountNumber: '****999999',
      transactionNumber: '0000',
    },
    {
      date: '18 DIC',
      name: 'Dwight',
      surname: 'Schrute',
      routingNumber: '777456789',
      accountNumber: '****999777',
      transactionNumber: '7777',
      backgroundColor: 'blue',
    },
  ],
};

const mockExpanded = {
  variant: 'DEFAULT',
  headerVariant: 'PRIMARY',
  footer: { content: <div>Footer</div> },
  headers: [
    {
      id: 'date',
      label: 'Date',
      config: { hasDivider: true },
    },
    {
      id: 'name',
      label: 'Recipient name',
      config: { alignHeader: 'left', alignValue: 'left' },
      value: value =>
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
      value: () => (
        <Button size="LARGE" variant="PRIMARY">
          Transfer money
        </Button>
      ),
    },
    {
      id: 'edit',
      label: 'Edit',
      config: { alignHeader: 'center', alignValue: 'center' },
      value: () => (
        <Icon altText="edti" height="25px" icon="UNICORN" width="25px" onClick={() => null} />
      ),
    },
    {
      id: 'delete',
      label: 'Delete',
      config: { alignHeader: 'right', alignValue: 'right' },
      value: () => (
        <Icon altText="trash" height="25px" icon="UNICORN" width="25px" onClick={() => null} />
      ),
    },
  ],
  values: [
    {
      date: '18 DIC',
      name: 'Pam',
      surname: 'Beasley',
      routingNumber: '113456789',
      accountNumber: '****999999',
      transactionNumber: '0000',
      expandedContent: {
        [DeviceBreakpointsType.DESKTOP]: (
          <div>
            <div>
              <b>Routing number:</b> 123456789
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
      rowHeader: {
        label: 'Row header 1',
        variant: 'CUSTOMIZABLE_SECONDARY',
      },
    },
  ],
  accordionIcon: { icon: 'UNICORN' },
};

const mockDivider = {
  variant: 'DEFAULT',
  headerVariant: 'PRIMARY',
  headers: [
    {
      id: 'date',
      label: 'Date',
      config: { alignHeader: 'left', alignValue: 'left', hasDivider: true },
    },
    {
      id: 'name',
      label: 'Recipient name',
      config: { alignHeader: 'left', alignValue: 'left' },
    },
    {
      id: 'routingNumber',
      label: 'Routing number',
      config: { alignHeader: 'left', alignValue: 'left' },
    },
  ],
  values: [
    {
      date: '18 DIC',
      name: 'Michael',
      routingNumber: '113456789',
      dividerContent: {
        leftLabel: { content: '18 DIC Lorem ipsum' },
        icon: { icon: 'UNICORN', altText: 'Icon alt text' },
        tooltip: {
          title: { content: 'Tooltip title' },
          content: { content: 'Tooltip content' },
        },
      },
    },
  ],
};

const mockDividerFromHeader = {
  variant: 'DEFAULT',
  headerVariant: 'PRIMARY',
  headers: [
    {
      id: 'date',
      label: 'Date',
      config: { alignHeader: 'left', alignValue: 'left', hasDivider: true },
      value: val => ({
        dividerContent: {
          leftLabel: { content: val.date },
          icon: { icon: 'UNICORN', altText: 'Icon alt text' },
          tooltip: {
            title: { content: 'Tooltip title' },
            content: { content: 'Tooltip content' },
          },
        },
      }),
    },
    {
      id: 'name',
      label: 'Recipient name',
      config: { alignHeader: 'left', alignValue: 'left' },
    },
    {
      id: 'routingNumber',
      label: 'Routing number',
      config: { alignHeader: 'left', alignValue: 'left' },
    },
  ],
  values: [
    {
      date: '18 DIC',
      name: 'Jim',
      routingNumber: '113456789',
    },
  ],
};

describe('Table component', () => {
  beforeAll(() => {
    global.ResizeObserver = class ResizeObserver {
      callback;
      constructor(callback) {
        this.callback = callback;
      }
      observe() {
        // Call the callback
        this.callback();
      }
      unobserve() {
        // do nothing
      }
      disconnect() {
        // do nothing
      }
    };
  });

  it('Renders with a valid HTML structure', async () => {
    const { container } = renderProvider(
      <Table
        aria-label={'aria table label'}
        captionDescription={'caption description'}
        {...mockBase}
      />
    );
    const results = await axe(container);
    const table = screen.getByRole('table');

    expect(table).toBeDefined();
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Renders with a valid HTML structure as customizableTable', async () => {
    const { container } = renderProvider(
      <Table
        aria-label={'aria table label'}
        captionDescription={'caption description'}
        {...mockBaseCustomizable}
      />
    );
    const results = await axe(container);
    const table = screen.getByRole('table');

    expect(table).toBeDefined();
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('can have a divider configured from the values', async () => {
    const { container } = renderProvider(
      <Table
        aria-label={'aria table label'}
        captionDescription={'caption description'}
        {...mockDivider}
      />
    );

    const dividerContentText = screen.getByText('18 DIC Lorem ipsum');
    expect(dividerContentText).toBeDefined();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('can have a divider configured from the header', async () => {
    const { container } = renderProvider(
      <Table
        aria-label={'aria table label'}
        captionDescription={'caption description'}
        {...mockDividerFromHeader}
      />
    );

    const dividerContentText = screen.getByText('18 DIC');
    expect(dividerContentText).toBeDefined();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('dividers are not mandatory', async () => {
    const { container } = renderProvider(
      <Table
        aria-label={'aria table label'}
        captionDescription={'caption description'}
        {...mockBaseNoDivider}
      />
    );
    const results = await axe(container);
    const table = screen.getByRole('table');

    expect(table).toBeDefined();
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('can have expansible content', async () => {
    renderProvider(
      <Table
        aria-label={'aria table label'}
        captionDescription={'caption description'}
        {...mockExpanded}
      />
    );

    const buttonToExpand = screen.getByLabelText('Expand current last cell');

    await userEvent.click(buttonToExpand);

    const expantedContent = screen.getByText('113456789');

    expect(expantedContent).toBeDefined();
  });

  it('expanded content is optional', async () => {
    const { container } = renderProvider(
      <Table
        aria-label={'aria table label'}
        captionDescription={'caption description'}
        {...mockBaseNoOneExpanded}
      />
    );

    const results = await axe(container);
    const table = screen.getByRole('table');
    const emptytext = screen.getByText('-');

    expect(table).toBeDefined();
    expect(emptytext).toBeInTheDocument();
    expect(results).toHaveNoViolations();
  });

  it('When mobile formatListInMobile can be set to display the data in a list format', async () => {
    window.matchMedia = windowMatchMedia('onlyMobile');
    jest
      .spyOn(useMediaDevice, 'useMediaDevice')
      .mockImplementation(() => DeviceBreakpointsType.MOBILE);
    const { container } = renderProvider(
      <Table formatListInMobile captionDescription={'caption description'} {...mockBase} />
    );
    const results = await axe(container);
    const uls = screen.getAllByRole(ROLES.LIST);

    expect(uls.length).not.toBe(0);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
  it('When formatListHeaderPriority has ROW_HEADER', async () => {
    window.matchMedia = windowMatchMedia('onlyMobile');
    jest
      .spyOn(useMediaDevice, 'useMediaDevice')
      .mockImplementation(() => DeviceBreakpointsType.MOBILE);
    const { container } = renderProvider(
      <Table
        captionDescription={'caption description'}
        formatList={{
          [DeviceBreakpointsType.TABLET]: true,
          [DeviceBreakpointsType.MOBILE]: true,
        }}
        formatListHeaderPriority={FormatListHeaderPriorityType.ROW_HEADER}
        {...mockBase}
      />
    );
    const results = await axe(container);
    const uls = screen.getAllByRole(ROLES.LIST);

    expect(uls.length).not.toBe(0);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('ROW_HEADER can have expansible content', async () => {
    renderProvider(
      <Table
        captionDescription={'caption description'}
        formatList={{
          [DeviceBreakpointsType.TABLET]: true,
          [DeviceBreakpointsType.MOBILE]: true,
        }}
        formatListHeaderPriority={FormatListHeaderPriorityType.ROW_HEADER}
        {...mockExpanded}
      />
    );

    const buttonToExpand = screen.getByLabelText('Expand current last cell');
    await userEvent.click(buttonToExpand);
    const expantedContent = screen.getByText('113456789');
    expect(expantedContent).toBeDefined();
  });

  it('When formatListHeaderPriority has COLUMN_HEADER', async () => {
    window.matchMedia = windowMatchMedia('onlyMobile');
    jest
      .spyOn(useMediaDevice, 'useMediaDevice')
      .mockImplementation(() => DeviceBreakpointsType.MOBILE);
    const { container } = renderProvider(
      <Table
        captionDescription={'caption description'}
        formatList={{
          [DeviceBreakpointsType.TABLET]: true,
          [DeviceBreakpointsType.MOBILE]: true,
        }}
        formatListHeaderPriority={FormatListHeaderPriorityType.COLUMN_HEADER}
        {...mockBase}
      />
    );
    const results = await axe(container);
    const uls = screen.getAllByRole(ROLES.LIST);

    expect(uls.length).not.toBe(0);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('When scroll appears in the tbody, tBody surface is focusable and and labels can be added', async () => {
    // Mock hasScrollUtils and resize observer
    jest.spyOn(hasScrollUtils, 'hasScroll').mockImplementation(() => true);
    const { container } = renderProvider(
      <Table
        aria-label={'aria table label'}
        captionDescription={'caption description'}
        tBodyScrollArias={{ 'aria-label': 'aria-label' }}
        {...mockBase}
      />
    );
    const results = await axe(container);
    const tbody = screen.getByRole(ROLES.REGION, { name: 'aria-label' });

    expect(tbody).toBeDefined();
    expect(tbody).toHaveAttribute('tabindex', '0');
    expect(container).toHTMLValidate({
      rules: {
        'prefer-native-element': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });
});
