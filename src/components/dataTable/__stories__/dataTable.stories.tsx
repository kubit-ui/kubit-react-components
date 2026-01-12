import type { Meta, StoryObj } from '@storybook/react-vite';

import { useState } from 'react';

import { DataTableVariantType } from '@/lib/designSystem/kubit/components/dataTable/variants';

import type {
  DataTableColumnProps,
  DataTableProps,
  DataTableRowProps,
} from '../types/dataTable';

import { DataTable as Story } from '../dataTable';
import { argtypes } from './argtypes';

const meta: Meta<typeof Story> = {
  argTypes: argtypes(),
  component: Story,
  parameters: {
    layout: 'padded',
  },
  tags: ['table'],
  title: 'Components/Table/DataTable',
};

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

// Sample data for stories
const basicColumns: DataTableColumnProps[] = [
  { field: 'id', headerContent: 'ID', textAlign: 'left', width: '80px' },
  { field: 'name', headerContent: 'Name', textAlign: 'left' },
  { field: 'email', headerContent: 'Email', textAlign: 'left' },
  { field: 'role', headerContent: 'Role', textAlign: 'left' },
];

const basicRows: DataTableRowProps[] = [
  { email: 'john@example.com', id: '1', name: 'John Doe', role: 'Admin' },
  { email: 'jane@example.com', id: '2', name: 'Jane Smith', role: 'User' },
  { email: 'bob@example.com', id: '3', name: 'Bob Johnson', role: 'User' },
  {
    email: 'alice@example.com',
    id: '4',
    name: 'Alice Williams',
    role: 'Manager',
  },
  {
    email: 'charlie@example.com',
    id: '5',
    name: 'Charlie Brown',
    role: 'User',
  },
];

const commonArgs: DataTableProps = {
  variant: DataTableVariantType.DEFAULT,
};

/**
 * Basic data table with simple column and row configuration.
 * Default setup for displaying tabular data.
 */
export const Basic: Story = {
  args: {
    ...commonArgs,
    columns: basicColumns,
    rows: basicRows,
  },
  parameters: {
    docs: {
      source: {
        code: `const columns = [
  { field: 'id', headerContent: 'ID' },
  { field: 'name', headerContent: 'Name' },
  { field: 'email', headerContent: 'Email' },
  { field: 'role', headerContent: 'Role' }
];

const rows = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User' }
];

<DataTable
  variant="DEFAULT"
  columns={columns}
  rows={rows}
/>`,
      },
    },
  },
};

/**
 * Table with sticky header.
 * Header remains visible during vertical scrolling.
 */
export const StickyHeader: Story = {
  args: {
    ...commonArgs,
    columns: basicColumns,
    rows: [...basicRows, ...basicRows, ...basicRows], // More rows to show scrolling
    stickyHead: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<DataTable
  variant="DEFAULT"
  columns={columns}
  rows={rows}
  stickyHead={true}
  aria-label="Scrollable user table"
/>`,
      },
    },
  },
};

/**
 * Table with sticky left columns.
 * Left columns stay visible during horizontal scrolling.
 */
export const StickyLeftColumns: Story = {
  args: {
    ...commonArgs,
    columns: [
      {
        field: 'id',
        headerContent: 'ID',
        sticky: 'left',
        textAlign: 'left',
        width: '80px',
      },
      {
        field: 'name',
        headerContent: 'Name',
        sticky: 'left',
        textAlign: 'left',
        width: '150px',
      },
      {
        field: 'email',
        headerContent: 'Email',
        textAlign: 'left',
        width: '250px',
      },
      {
        field: 'phone',
        headerContent: 'Phone',
        textAlign: 'left',
        width: '150px',
      },
      {
        field: 'address',
        headerContent: 'Address',
        textAlign: 'left',
        width: '300px',
      },
      {
        field: 'city',
        headerContent: 'City',
        textAlign: 'left',
        width: '150px',
      },
    ],
    rows: basicRows.map((row) => ({
      ...row,
      address: '123 Main Street',
      city: 'New York',
      phone: '555-1234',
    })),
  },
  parameters: {
    docs: {
      source: {
        code: `const columns = [
  { field: 'id', headerContent: 'ID', sticky: 'left' },
  { field: 'name', headerContent: 'Name', sticky: 'left' },
  { field: 'email', headerContent: 'Email' },
  { field: 'phone', headerContent: 'Phone' }
];

<DataTable
  variant="DEFAULT"
  columns={columns}
  rows={rows}
/>`,
      },
    },
  },
};

/**
 * Table with sticky right columns.
 * Right columns stay visible during horizontal scrolling.
 */
export const StickyRightColumns: Story = {
  args: {
    ...commonArgs,
    columns: [
      { field: 'id', headerContent: 'ID', textAlign: 'left', width: '80px' },
      {
        field: 'name',
        headerContent: 'Name',
        textAlign: 'left',
        width: '150px',
      },
      {
        field: 'email',
        headerContent: 'Email',
        textAlign: 'left',
        width: '250px',
      },
      {
        field: 'phone',
        headerContent: 'Phone',
        textAlign: 'left',
        width: '150px',
      },
      {
        field: 'actions',
        headerContent: 'Actions',
        sticky: 'right',
        textAlign: 'center',
        width: '120px',
      },
    ],
    rows: basicRows.map((row) => ({
      ...row,
      actions: '⋯',
      phone: '555-1234',
    })),
  },
  parameters: {
    docs: {
      source: {
        code: `const columns = [
  { field: 'id', headerContent: 'ID' },
  { field: 'name', headerContent: 'Name' },
  { field: 'email', headerContent: 'Email' },
  { field: 'actions', headerContent: 'Actions', sticky: 'right' }
];

<DataTable
  variant="DEFAULT"
  columns={columns}
  rows={rows}
/>`,
      },
    },
  },
};

/**
 * Table with both sticky left and right columns.
 * Combines fixed left and right columns with scrollable center.
 */
export const StickyLeftAndRight: Story = {
  args: {
    ...commonArgs,
    columns: [
      {
        field: 'id',
        headerContent: 'ID',
        sticky: 'left',
        textAlign: 'left',
        width: '80px',
      },
      {
        field: 'name',
        headerContent: 'Name',
        sticky: 'left',
        textAlign: 'left',
        width: '150px',
      },
      {
        field: 'email',
        headerContent: 'Email',
        textAlign: 'left',
        width: '250px',
      },
      {
        field: 'phone',
        headerContent: 'Phone',
        textAlign: 'left',
        width: '150px',
      },
      {
        field: 'address',
        headerContent: 'Address',
        textAlign: 'left',
        width: '300px',
      },
      {
        field: 'actions',
        headerContent: 'Actions',
        sticky: 'right',
        textAlign: 'center',
        width: '120px',
      },
    ],
    rows: basicRows.map((row) => ({
      ...row,
      actions: '⋯',
      address: '123 Main Street',
      phone: '555-1234',
    })),
  },
  parameters: {
    docs: {
      source: {
        code: `const columns = [
  { field: 'id', headerContent: 'ID', sticky: 'left' },
  { field: 'name', headerContent: 'Name', sticky: 'left' },
  { field: 'email', headerContent: 'Email' },
  { field: 'phone', headerContent: 'Phone' },
  { field: 'actions', headerContent: 'Actions', sticky: 'right' }
];

<DataTable
  variant="DEFAULT"
  columns={columns}
  rows={rows}
/>`,
      },
    },
  },
};

/**
 * Table with active rows highlighted.
 * Shows visual emphasis on selected rows.
 */
export const ActiveRows: Story = {
  args: {
    ...commonArgs,
    activeRows: ['2', '4'],
    columns: basicColumns,
    rows: basicRows,
  },
  parameters: {
    docs: {
      source: {
        code: `<DataTable
  variant="DEFAULT"
  columns={columns}
  rows={rows}
  activeRows={['2', '4']} // Row IDs to highlight
/>`,
      },
    },
  },
};

/**
 * Table with hoverable rows.
 * All rows show hover effect on mouse over.
 */
export const Hoverable: Story = {
  args: {
    ...commonArgs,
    columns: basicColumns,
    hoverable: true,
    rows: basicRows,
  },
  parameters: {
    docs: {
      source: {
        code: `<DataTable
  variant="DEFAULT"
  columns={columns}
  rows={rows}
  hoverable={true}
/>`,
      },
    },
  },
};

/**
 * Table with custom column alignment.
 * Different text alignment for different column types.
 */
export const CustomAlignment: Story = {
  args: {
    ...commonArgs,
    columns: [
      {
        field: 'id',
        headerContent: 'ID',
        textAlign: 'left',
        valueTextAlign: 'left',
        width: '80px',
      },
      {
        field: 'product',
        headerContent: 'Product',
        textAlign: 'left',
        valueTextAlign: 'left',
      },
      {
        field: 'quantity',
        headerContent: 'Qty',
        textAlign: 'center',
        valueTextAlign: 'center',
        width: '100px',
      },
      {
        field: 'price',
        headerContent: 'Price',
        textAlign: 'right',
        valueTextAlign: 'right',
        width: '120px',
      },
    ],
    rows: [
      { id: '1', price: '$29.99', product: 'Widget A', quantity: '10' },
      { id: '2', price: '$49.99', product: 'Widget B', quantity: '5' },
      { id: '3', price: '$19.99', product: 'Widget C', quantity: '25' },
    ],
  },
  parameters: {
    docs: {
      source: {
        code: `const columns = [
  { field: 'id', headerContent: 'ID', textAlign: 'left' },
  { field: 'product', headerContent: 'Product', textAlign: 'left' },
  { field: 'quantity', headerContent: 'Qty', textAlign: 'center' },
  { field: 'price', headerContent: 'Price', textAlign: 'right' }
];

<DataTable
  variant="DEFAULT"
  columns={columns}
  rows={rows}
/>`,
      },
    },
  },
};

/**
 * Table with custom value getter.
 * Transform cell values before rendering.
 */
export const WithValueGetter: Story = {
  args: {
    ...commonArgs,
    columns: [
      { field: 'name', headerContent: 'Name', textAlign: 'left' },
      {
        field: 'price',
        headerContent: 'Price',
        textAlign: 'right',
        valueGetter: (value) => `$${value}`,
        valueTextAlign: 'right',
      },
      {
        field: 'status',
        headerContent: 'Status',
        textAlign: 'left',
        valueGetter: (value) =>
          value === 'active' ? '✓ Active' : '✗ Inactive',
      },
    ],
    rows: [
      { id: '1', name: 'Product A', price: '29.99', status: 'active' },
      { id: '2', name: 'Product B', price: '49.99', status: 'inactive' },
      { id: '3', name: 'Product C', price: '19.99', status: 'active' },
    ],
  },
  parameters: {
    docs: {
      source: {
        code: `const columns = [
  { field: 'name', headerContent: 'Name' },
  {
    field: 'price',
    headerContent: 'Price',
    valueGetter: (value) => \`$\${value}\`
  },
  {
    field: 'status',
    headerContent: 'Status',
    valueGetter: (value) => value === 'active' ? '✓ Active' : '✗ Inactive'
  }
];

<DataTable
  variant="DEFAULT"
  columns={columns}
  rows={rows}
/>`,
      },
    },
  },
};

/**
 * Table with row groups, dividers, and captions.
 * Organize data into logical sections.
 */
export const WithRowGroups: Story = {
  args: {
    ...commonArgs,
    columns: basicColumns,
    rowGroups: [
      {
        caption: { content: 'Administrators' },
        divider: { content: 'Admin Group' },
        rows: [
          {
            email: 'john@example.com',
            id: '1',
            name: 'John Doe',
            role: 'Admin',
          },
          {
            email: 'alice@example.com',
            id: '4',
            name: 'Alice Williams',
            role: 'Admin',
          },
        ],
      },
      {
        caption: { content: 'Regular Users' },
        divider: { content: 'User Group' },
        rows: [
          {
            email: 'jane@example.com',
            id: '2',
            name: 'Jane Smith',
            role: 'User',
          },
          {
            email: 'bob@example.com',
            id: '3',
            name: 'Bob Johnson',
            role: 'User',
          },
          {
            email: 'charlie@example.com',
            id: '5',
            name: 'Charlie Brown',
            role: 'User',
          },
        ],
      },
    ],
  },
  parameters: {
    docs: {
      source: {
        code: `const rowGroups = [
  {
    caption: { content: 'Administrators' },
    divider: { content: 'Admin Group' },
    rows: [
      { id: '1', name: 'John Doe', role: 'Admin' }
    ]
  },
  {
    caption: { content: 'Regular Users' },
    divider: { content: 'User Group' },
    rows: [
      { id: '2', name: 'Jane Smith', role: 'User' }
    ]
  }
];

<DataTable
  variant="DEFAULT"
  columns={columns}
  rowGroups={rowGroups}
/>`,
      },
    },
  },
};

/**
 * Interactive sortable table.
 * Click column headers to sort data.
 */
export const Sortable: Story = {
  args: commonArgs,
  parameters: {
    docs: {
      source: {
        code: `const [rows, setRows] = useState(initialRows);
const [sortField, setSortField] = useState<string | null>(null);
const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

const handleSort = (field: string) => {
  const direction = sortField === field && sortDirection === 'asc' ? 'desc' : 'asc';
  setSortField(field);
  setSortDirection(direction);

  const sorted = [...rows].sort((a, b) => {
    const aVal = a[field];
    const bVal = b[field];
    return direction === 'asc'
      ? String(aVal).localeCompare(String(bVal))
      : String(bVal).localeCompare(String(aVal));
  });

  setRows(sorted);
};

const columns = [
  {
    field: 'name',
    headerContent: (
      <button onClick={() => handleSort('name')}>
        Name {sortField === 'name' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}
      </button>
    )
  }
];

<DataTable variant="DEFAULT" columns={columns} rows={rows} />`,
      },
    },
  },
  render: (args: DataTableProps) => {
    const [rows, setRows] = useState(basicRows);
    const [sortField, setSortField] = useState<string | null>(null);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

    const handleSort = (field: string) => {
      const direction =
        sortField === field && sortDirection === 'asc' ? 'desc' : 'asc';
      setSortField(field);
      setSortDirection(direction);

      const sorted = [...rows].sort((a, b) => {
        const aVal = a[field];
        const bVal = b[field];
        return direction === 'asc'
          ? String(aVal).localeCompare(String(bVal))
          : String(bVal).localeCompare(String(aVal));
      });

      setRows(sorted);
    };

    const sortableColumns: DataTableColumnProps[] = [
      { field: 'id', headerContent: 'ID', textAlign: 'left', width: '80px' },
      {
        field: 'name',
        headerContent: {
          complex: {
            content: (
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
                onClick={() => handleSort('name')}
              >
                Name{' '}
                {sortField === 'name'
                  ? sortDirection === 'asc'
                    ? '↑'
                    : '↓'
                  : ''}
              </button>
            ),
          },
        },
        textAlign: 'left',
      },
      {
        field: 'email',
        headerContent: {
          complex: {
            content: (
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
                onClick={() => handleSort('email')}
              >
                Email{' '}
                {sortField === 'email'
                  ? sortDirection === 'asc'
                    ? '↑'
                    : '↓'
                  : ''}
              </button>
            ),
          },
        },
        textAlign: 'left',
      },
      { field: 'role', headerContent: 'Role', textAlign: 'left' },
    ];

    return <Story {...args} columns={sortableColumns} rows={rows} />;
  },
};

/**
 * Table with custom CSS classes.
 * Demonstrates style customization capabilities.
 */
export const WithCustomClasses: Story = {
  args: {
    ...commonArgs,
    additionalClasses: {
      data_table: 'custom-data-table',
    },
    columns: basicColumns,
    rows: basicRows,
  },
  parameters: {
    docs: {
      source: {
        code: `<DataTable
  variant="DEFAULT"
  columns={columns}
  rows={rows}
  additionalClasses={{
    data_table: 'custom-data-table'
  }}
/>`,
      },
    },
  },
};
