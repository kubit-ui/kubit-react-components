# DataTable Component

A powerful and flexible data table component for displaying structured tabular data with advanced features like sticky columns, scrolling, sorting, row grouping, and custom cell rendering.

## Features

- **Flexible columns**: Define custom columns with field mapping and custom headers
- **Sticky positioning**: Sticky header, left columns, and right columns
- **Row selection**: Active row highlighting and hover states
- **Row grouping**: Organize data with dividers and captions
- **Custom rendering**: Custom cell content and value getters
- **Responsive scrolling**: Automatic scroll detection with shadows
- **Column alignment**: Custom text alignment and justification
- **Accessibility**: Full ARIA support and keyboard navigation
- **Configurable styling**: Extensive customization through variants and CSS classes

## Basic Usage

### Simple Table

```tsx
import { DataTable } from '@/components/dataTable';

const columns = [
  { field: 'id', headerContent: 'ID' },
  { field: 'name', headerContent: 'Name' },
  { field: 'email', headerContent: 'Email' },
];

const rows = [
  { id: '1', name: 'John Doe', email: 'john@example.com' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
  { id: '3', name: 'Bob Johnson', email: 'bob@example.com' },
];

function MyComponent() {
  return <DataTable variant="DEFAULT" columns={columns} rows={rows} />;
}
```

### Table with Sticky Header

```tsx
import { DataTable } from '@/components/dataTable';

function MyComponent() {
  return (
    <DataTable
      variant="DEFAULT"
      columns={columns}
      rows={rows}
      stickyHead={true}
      aria-label="Scrollable data table"
    />
  );
}
```

## Sticky Columns

### Sticky Left Columns

Pin columns to the left side during horizontal scrolling:

```tsx
import { DataTable } from '@/components/dataTable';

const columns = [
  { field: 'id', headerContent: 'ID', sticky: 'left' },
  { field: 'name', headerContent: 'Name', sticky: 'left' },
  { field: 'email', headerContent: 'Email' },
  { field: 'phone', headerContent: 'Phone' },
  { field: 'address', headerContent: 'Address' },
];

function MyComponent() {
  return <DataTable variant="DEFAULT" columns={columns} rows={rows} />;
}
```

### Sticky Right Columns

Pin columns to the right side:

```tsx
const columns = [
  { field: 'id', headerContent: 'ID' },
  { field: 'name', headerContent: 'Name' },
  { field: 'email', headerContent: 'Email' },
  { field: 'actions', headerContent: 'Actions', sticky: 'right' },
];
```

### Mixed Sticky Columns

Combine left and right sticky columns:

```tsx
const columns = [
  { field: 'id', headerContent: 'ID', sticky: 'left' },
  { field: 'name', headerContent: 'Name', sticky: 'left' },
  { field: 'email', headerContent: 'Email' },
  { field: 'phone', headerContent: 'Phone' },
  { field: 'actions', headerContent: 'Actions', sticky: 'right' },
];
```

## Row States

### Active Rows

Highlight specific rows:

```tsx
import { DataTable } from '@/components/dataTable';

function MyComponent() {
  return (
    <DataTable
      variant="DEFAULT"
      columns={columns}
      rows={rows}
      activeRows={['1', '3']} // Row IDs to highlight
    />
  );
}
```

### Hoverable Rows

Enable hover effects on all or specific rows:

```tsx
// Hoverable for all rows
<DataTable
  variant="DEFAULT"
  columns={columns}
  rows={rows}
  hoverable={true}
/>

// Hoverable for specific rows only
<DataTable
  variant="DEFAULT"
  columns={columns}
  rows={rows}
  hoverableRows={['1', '2', '3']}
/>

// Disable hover on specific rows
<DataTable
  variant="DEFAULT"
  columns={columns}
  rows={rows}
  hoverable={true}
  nonHoverableRows={['2']}
/>
```

## Advanced Features

### Custom Cell Content

Use complex objects for custom cell rendering:

```tsx
const rows = [
  {
    id: '1',
    name: 'John Doe',
    status: {
      complex: {
        content: <span style={{ color: 'green' }}>Active</span>,
      },
    },
  },
];
```

### Value Getters

Transform cell values before rendering:

```tsx
const columns = [
  {
    field: 'price',
    headerContent: 'Price',
    valueGetter: (value) => `$${value}`,
  },
  {
    field: 'date',
    headerContent: 'Date',
    valueGetter: (value) => new Date(value).toLocaleDateString(),
  },
];
```

### Column Configuration

```tsx
const columns = [
  {
    field: 'id',
    headerContent: 'ID',
    width: '80px',
    textAlign: 'left',
    sticky: 'left',
  },
  {
    field: 'description',
    headerContent: 'Description',
    minWidth: '200px',
    maxWidth: '400px',
    textAlign: 'left',
  },
  {
    field: 'amount',
    headerContent: 'Amount',
    width: '120px',
    textAlign: 'right',
    valueTextAlign: 'right',
  },
];
```

### Hidden Column Header Content

Hide header content visually while keeping it accessible:

```tsx
const columns = [
  {
    field: 'actions',
    headerContent: 'Actions',
    headerHiddenContent: 'Actions column', // Screen reader text
  },
];
```

## Row Grouping

Organize data into groups with dividers and captions:

```tsx
import { DataTable } from '@/components/dataTable';

const rowGroups = [
  {
    caption: { content: 'Active Users' },
    divider: { content: 'Group 1' },
    rows: [
      { id: '1', name: 'John Doe', status: 'Active' },
      { id: '2', name: 'Jane Smith', status: 'Active' },
    ],
  },
  {
    caption: { content: 'Inactive Users' },
    divider: { content: 'Group 2' },
    rows: [{ id: '3', name: 'Bob Johnson', status: 'Inactive' }],
  },
];

function MyComponent() {
  return (
    <DataTable variant="DEFAULT" columns={columns} rowGroups={rowGroups} />
  );
}
```

## Props

### DataTableProps

| Prop                | Type                           | Required | Default | Description                             |
| ------------------- | ------------------------------ | -------- | ------- | --------------------------------------- |
| `variant`           | `string`                       | No       | -       | Visual variant from theme configuration |
| `columns`           | `DataTableColumnProps[]`       | No       | -       | Column definitions                      |
| `rows`              | `DataTableRowProps[]`          | No       | -       | Table rows data                         |
| `rowGroups`         | `DataTableRowGroupProps[]`     | No       | -       | Grouped rows with dividers              |
| `activeRows`        | `string[]`                     | No       | -       | IDs of rows to highlight                |
| `hoverable`         | `boolean`                      | No       | `false` | Enable hover effect on all rows         |
| `hoverableRows`     | `string[]`                     | No       | -       | IDs of rows that are hoverable          |
| `nonHoverableRows`  | `string[]`                     | No       | -       | IDs of rows to exclude from hover       |
| `stickyHead`        | `boolean`                      | No       | `false` | Make header sticky on scroll            |
| `caption`           | `DataTableTableCaptionProps`   | No       | -       | Table caption                           |
| `config`            | `DataTableConfigProps`         | No       | -       | Advanced table configuration            |
| `additionalClasses` | `Partial<DataTableCssClasses>` | No       | -       | Additional CSS classes                  |
| `aria-label`        | `string`                       | No       | -       | Accessible label for table              |
| `aria-labelledby`   | `string`                       | No       | -       | ID of element that labels table         |
| `data-*`            | `string`                       | No       | -       | Custom data attributes                  |

### DataTableColumnProps

| Prop                  | Type                           | Required | Description                           |
| --------------------- | ------------------------------ | -------- | ------------------------------------- |
| `field`               | `string`                       | Yes      | Field name to map to row data         |
| `headerContent`       | `ReactNode \| CellProps`       | No       | Column header content                 |
| `headerHiddenContent` | `string`                       | No       | Hidden screen reader header text      |
| `width`               | `string`                       | No       | Column width (CSS value)              |
| `minWidth`            | `string`                       | No       | Minimum column width                  |
| `maxWidth`            | `string`                       | No       | Maximum column width                  |
| `hidden`              | `boolean`                      | No       | Hide column visually                  |
| `sticky`              | `boolean \| 'left' \| 'right'` | No       | Make column sticky                    |
| `textAlign`           | `string`                       | No       | Header text alignment                 |
| `valueTextAlign`      | `string`                       | No       | Cell value text alignment             |
| `justifyContent`      | `string`                       | No       | Header justify content                |
| `valueJustifyContent` | `string`                       | No       | Cell value justify content            |
| `valueGetter`         | `function`                     | No       | Transform cell value before rendering |

### DataTableRowProps

| Prop     | Type                           | Required | Description                        |
| -------- | ------------------------------ | -------- | ---------------------------------- |
| `id`     | `string`                       | No       | Unique row identifier              |
| `config` | `DataTableTableRowConfigProps` | No       | Row-specific configuration         |
| `[key]`  | `ReactNode \| CellProps`       | No       | Cell values matching column fields |

### DataTableRowGroupProps

| Prop      | Type                         | Required | Description                        |
| --------- | ---------------------------- | -------- | ---------------------------------- |
| `rows`    | `DataTableRowProps[]`        | Yes      | Rows in this group                 |
| `divider` | `DataTableRowDividerProps`   | No       | Divider before group               |
| `caption` | `DataTableTableCaptionProps` | No       | Group caption                      |
| `config`  | `object`                     | No       | Group-specific table configuration |

## Common Patterns

### Sortable Table

```tsx
import { useState } from 'react';

import { DataTable } from '@/components/dataTable';

function SortableTable() {
  const [rows, setRows] = useState([
    { id: '1', name: 'Charlie', age: 30 },
    { id: '2', name: 'Alice', age: 25 },
    { id: '3', name: 'Bob', age: 35 },
  ]);

  const sortByName = () => {
    setRows([...rows].sort((a, b) => a.name.localeCompare(b.name)));
  };

  const columns = [
    { field: 'name', headerContent: 'Name' },
    { field: 'age', headerContent: 'Age' },
  ];

  return (
    <div>
      <button onClick={sortByName}>Sort by Name</button>
      <DataTable variant="DEFAULT" columns={columns} rows={rows} />
    </div>
  );
}
```

### Selectable Rows

```tsx
import { useState } from 'react';

import { DataTable } from '@/components/dataTable';

function SelectableTable() {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const toggleRow = (id: string) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id],
    );
  };

  const columns = [
    {
      field: 'select',
      headerContent: 'Select',
      valueGetter: (_, row) => ({
        complex: {
          content: (
            <input
              type="checkbox"
              checked={selectedRows.includes(row.id)}
              onChange={() => toggleRow(row.id)}
            />
          ),
        },
      }),
    },
    { field: 'name', headerContent: 'Name' },
    { field: 'email', headerContent: 'Email' },
  ];

  return (
    <DataTable
      variant="DEFAULT"
      columns={columns}
      rows={rows}
      activeRows={selectedRows}
    />
  );
}
```

### Actions Column

```tsx
const columns = [
  { field: 'id', headerContent: 'ID' },
  { field: 'name', headerContent: 'Name' },
  {
    field: 'actions',
    headerContent: 'Actions',
    sticky: 'right',
    valueGetter: (_, row) => ({
      complex: {
        content: (
          <div style={{ display: 'flex', gap: '8px' }}>
            <button onClick={() => handleEdit(row)}>Edit</button>
            <button onClick={() => handleDelete(row)}>Delete</button>
          </div>
        ),
      },
    }),
  },
];
```

### Paginated Table

```tsx
import { useState } from 'react';

import { DataTable } from '@/components/dataTable';

function PaginatedTable({ data }) {
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const paginatedRows = data.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div>
      <DataTable variant="DEFAULT" columns={columns} rows={paginatedRows} />
      <div>
        <button onClick={() => setPage((p) => Math.max(1, p - 1))}>
          Previous
        </button>
        <span>Page {page}</span>
        <button onClick={() => setPage((p) => p + 1)}>Next</button>
      </div>
    </div>
  );
}
```

## Accessibility

### ARIA Labels

Always provide accessible labels for tables, especially scrollable ones:

```tsx
<DataTable
  variant="DEFAULT"
  columns={columns}
  rows={rows}
  aria-label="User data table"
  stickyHead={true}
/>

// Or reference an existing element
<>
  <h2 id="table-title">User Data</h2>
  <DataTable
    variant="DEFAULT"
    columns={columns}
    rows={rows}
    aria-labelledby="table-title"
  />
</>
```

### Keyboard Navigation

- `Tab`: Navigate through interactive elements
- `Arrow keys`: Scroll table when focused
- `Enter/Space`: Activate interactive cells

### Screen Reader Support

```tsx
const columns = [
  {
    field: 'status',
    headerContent: <StatusIcon />,
    headerHiddenContent: 'Account Status', // Screen reader text
  },
];
```

## Best Practices

1. **Provide unique row IDs**: Always include an `id` field in row data for selection and active states
2. **Use appropriate column widths**: Set `width`, `minWidth`, or `maxWidth` to prevent layout issues
3. **Limit sticky columns**: Too many sticky columns reduce available space
4. **Consider mobile**: Test tables on smaller viewports and provide horizontal scrolling
5. **Use value getters for formatting**: Keep row data clean and transform in `valueGetter`
6. **Accessible labels**: Always provide `aria-label` or `aria-labelledby` for tables
7. **Performance**: For large datasets, implement pagination or virtualization
8. **Consistent alignment**: Use consistent text alignment across similar data types
9. **Loading states**: Show loading indicators while data is fetching
10. **Empty states**: Handle and display empty table states gracefully

## Theming

DataTable supports multiple variants through the theme system:

- `DEFAULT`: Standard table appearance
- `STRIPED`: Alternating row colors
- `BORDERED`: Table with borders
- `COMPACT`: Reduced padding for dense data

Consult your theme configuration for available variants.

## Performance Considerations

### Large Datasets

For tables with many rows:

1. **Implement pagination**: Show limited rows per page
2. **Virtual scrolling**: Render only visible rows
3. **Lazy loading**: Load data as needed
4. **Debounce sorting/filtering**: Avoid expensive operations on every input

### Example with Pagination

```tsx
import { useMemo, useState } from 'react';

import { DataTable } from '@/components/dataTable';

function LargeDataTable({ data }) {
  const [page, setPage] = useState(1);
  const pageSize = 50;

  const paginatedData = useMemo(() => {
    const start = (page - 1) * pageSize;
    return data.slice(start, start + pageSize);
  }, [data, page, pageSize]);

  return <DataTable variant="DEFAULT" columns={columns} rows={paginatedData} />;
}
```

## Testing

```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { DataTable } from '@/components/dataTable';

test('renders table with data', () => {
  const columns = [{ field: 'name', headerContent: 'Name' }];
  const rows = [{ id: '1', name: 'John Doe' }];

  render(<DataTable columns={columns} rows={rows} />);

  expect(screen.getByText('Name')).toBeInTheDocument();
  expect(screen.getByText('John Doe')).toBeInTheDocument();
});

test('highlights active rows', () => {
  render(<DataTable columns={columns} rows={rows} activeRows={['1']} />);

  const row = screen.getByText('John Doe').closest('tr');
  expect(row).toHaveAttribute('data-active', 'true');
});

test('sticky header stays visible on scroll', () => {
  render(<DataTable columns={columns} rows={rows} stickyHead={true} />);

  const header = screen.getByRole('rowgroup');
  expect(header).toHaveStyle({ position: 'sticky' });
});
```
