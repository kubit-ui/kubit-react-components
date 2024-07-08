import { screen } from '@testing-library/react';
import React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { ROLES } from '@/types';

import { DataTable } from '../';
import * as hooks from '../hooks/useDataTableHasScroll';

const mockProps = {
  ref: { current: null },
};

describe('DataTable', () => {
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

  it('Should render a unique table component when no rowGroups are used', async () => {
    const columns = [
      { field: 'field1', headerContent: 'Header 1' },
      { field: 'field2', headerContent: 'Header 2' },
    ];

    const rows = [{ field1: 'value1', field2: 'value2' }];

    const { container } = renderProvider(
      <DataTable
        {...mockProps}
        caption={{ content: 'Table Caption' }}
        columns={columns}
        rows={rows}
      />
    );

    const table = screen.getByRole(ROLES.TABLE);
    const caption = screen.getByText('Table Caption');

    const header1 = screen.getByText('Header 1');
    const header2 = screen.getByText('Header 2');

    const cell1 = screen.getByText('value1');
    const cell2 = screen.getByText('value2');

    expect(table).toBeInTheDocument();
    expect(caption).toBeInTheDocument();
    expect(header1).toBeInTheDocument();
    expect(header2).toBeInTheDocument();
    expect(cell1).toBeInTheDocument();
    expect(cell2).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('Should render multiple tables when no rowGroups are used', async () => {
    const columns = [
      { field: 'field1', headerContent: 'Header 1' },
      { field: 'field2', headerContent: 'Header 2' },
    ];

    const rowGroups = [
      { rows: [{ field1: 'value1', field2: 'value2' }], caption: { content: 'Table Caption 1' } },
      { rows: [{ field1: 'value3', field2: 'value4' }], caption: { content: 'Table Caption 2' } },
    ];

    const { container } = renderProvider(
      <DataTable
        {...mockProps}
        caption={{ content: 'Table Caption' }}
        columns={columns}
        rowGroups={rowGroups}
      />
    );

    const tables = screen.getAllByRole(ROLES.TABLE);
    expect(tables.length).toBe(2);

    const results = await axe(container);
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('Row groups can have divider', async () => {
    const columns = [
      { field: 'field1', headerContent: 'Header 1' },
      { field: 'field2', headerContent: 'Header 2' },
    ];

    const rowGroups = [
      { rows: [{ field1: 'value1', field2: 'value2' }], divider: { content: 'divider1' } },
      { rows: [{ field1: 'value3', field2: 'value4' }], divider: { content: 'divider2' } },
    ];

    renderProvider(
      <DataTable
        {...mockProps}
        caption={{ content: 'Table Caption' }}
        columns={columns}
        rowGroups={rowGroups}
      />
    );

    const divider1 = screen.getByText('divider1');
    const divider2 = screen.getByText('divider2');

    expect(divider1).toBeInTheDocument();
    expect(divider2).toBeInTheDocument();
  });

  it('When scrollable, its container should have a role region focusable with tabIndex of 0', () => {
    jest.spyOn(hooks, 'useDataTableHasScroll').mockReturnValueOnce({ hasScroll: true });
    const columns = [
      { field: 'field1', headerContent: 'Header 1' },
      { field: 'field2', headerContent: 'Header 2' },
    ];

    const rows = [{ field1: 'value1', field2: 'value2' }];

    renderProvider(
      <DataTable
        {...mockProps}
        aria-label="aria-label"
        caption={{ content: 'Table Caption' }}
        columns={columns}
        rows={rows}
      />
    );

    const scrollableContainer = screen.getByRole(ROLES.REGION, { name: 'aria-label' });
    expect(scrollableContainer).toHaveAttribute('tabIndex', '0');
  });
});
