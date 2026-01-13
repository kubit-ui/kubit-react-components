# Table Component

Table is a structured data display component that organizes information into rows and columns. It supports features like sticky headers, sticky columns, hidden columns, and optional captions for accessible data presentation.

## Installation

```bash
npm install @kubit/web-ui-components
```

## Basic Usage

```tsx
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableRow,
} from '@kubit/web-ui-components';

function App() {
  return (
    <Table variant="DEFAULT">
      <TableCaption variant="DEFAULT">User Data</TableCaption>
      <TableHead variant="DEFAULT">
        <TableRow variant="HEAD_ROW_DEFAULT">
          <TableCell variant="HEADER_CELL_DEFAULT">Name</TableCell>
          <TableCell variant="HEADER_CELL_DEFAULT">Email</TableCell>
          <TableCell variant="HEADER_CELL_DEFAULT">Role</TableCell>
        </TableRow>
      </TableHead>
      <TableBody variant="DEFAULT">
        <TableRow variant="BODY_ROW_DEFAULT">
          <TableCell variant="BODY_CELL_DEFAULT">John Doe</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">john@example.com</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Admin</TableCell>
        </TableRow>
        <TableRow variant="BODY_ROW_DEFAULT">
          <TableCell variant="BODY_CELL_DEFAULT">Jane Smith</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">jane@example.com</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Editor</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
```

## Variants

The Table component supports a default variant for standard data display:

```tsx
<Table variant="DEFAULT">{/* Table content */}</Table>
```

## Advanced Usage

### Table Without Caption

Create tables without captions when context is clear:

```tsx
<Table variant="DEFAULT">
  <TableHead variant="DEFAULT">
    <TableRow variant="HEAD_ROW_DEFAULT">
      <TableCell variant="HEADER_CELL_DEFAULT">Product</TableCell>
      <TableCell variant="HEADER_CELL_DEFAULT">Price</TableCell>
      <TableCell variant="HEADER_CELL_DEFAULT">Stock</TableCell>
    </TableRow>
  </TableHead>
  <TableBody variant="DEFAULT">
    <TableRow variant="BODY_ROW_DEFAULT">
      <TableCell variant="BODY_CELL_DEFAULT">Product A</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">$299.99</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">In Stock</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Table With Hidden Columns

Hide specific columns while maintaining table structure:

```tsx
<Table variant="DEFAULT">
  <TableHead variant="DEFAULT">
    <TableRow variant="HEAD_ROW_DEFAULT">
      <TableCell variant="HEADER_CELL_DEFAULT">ID</TableCell>
      <TableCell variant="HEADER_CELL_DEFAULT" hidden={true}>
        Internal Code
      </TableCell>
      <TableCell variant="HEADER_CELL_DEFAULT">Name</TableCell>
      <TableCell variant="HEADER_CELL_DEFAULT">Status</TableCell>
    </TableRow>
  </TableHead>
  <TableBody variant="DEFAULT">
    <TableRow variant="BODY_ROW_DEFAULT">
      <TableCell variant="BODY_CELL_DEFAULT">001</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT" hidden={true}>
        XYZ-123
      </TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">Item A</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">Active</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Table With Sticky Header

Keep header visible while scrolling through data:

```tsx
<Table variant="DEFAULT" stickyHead={true}>
  <TableHead variant="DEFAULT">
    <TableRow variant="HEAD_ROW_DEFAULT">
      <TableCell variant="HEADER_CELL_DEFAULT">Column 1</TableCell>
      <TableCell variant="HEADER_CELL_DEFAULT">Column 2</TableCell>
      <TableCell variant="HEADER_CELL_DEFAULT">Column 3</TableCell>
    </TableRow>
  </TableHead>
  <TableBody variant="DEFAULT">{/* Many rows of data */}</TableBody>
</Table>
```

### Table With Sticky Left Columns

Keep first columns visible while scrolling horizontally:

```tsx
<Table variant="DEFAULT" stickyLeftColumns={2}>
  <TableHead variant="DEFAULT">
    <TableRow variant="HEAD_ROW_DEFAULT">
      <TableCell variant="HEADER_CELL_DEFAULT">Name</TableCell>
      <TableCell variant="HEADER_CELL_DEFAULT">ID</TableCell>
      <TableCell variant="HEADER_CELL_DEFAULT">Q1 Sales</TableCell>
      <TableCell variant="HEADER_CELL_DEFAULT">Q2 Sales</TableCell>
      <TableCell variant="HEADER_CELL_DEFAULT">Q3 Sales</TableCell>
      <TableCell variant="HEADER_CELL_DEFAULT">Q4 Sales</TableCell>
    </TableRow>
  </TableHead>
  <TableBody variant="DEFAULT">
    <TableRow variant="BODY_ROW_DEFAULT">
      <TableCell variant="BODY_CELL_DEFAULT">Product A</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">PA-001</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">$12,000</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">$15,000</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">$18,000</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">$20,000</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Table With Sticky Right Columns

Keep last columns visible while scrolling horizontally:

```tsx
<Table variant="DEFAULT" stickyRightColumns={1}>
  <TableHead variant="DEFAULT">
    <TableRow variant="HEAD_ROW_DEFAULT">
      <TableCell variant="HEADER_CELL_DEFAULT">Name</TableCell>
      <TableCell variant="HEADER_CELL_DEFAULT">Email</TableCell>
      <TableCell variant="HEADER_CELL_DEFAULT">Department</TableCell>
      <TableCell variant="HEADER_CELL_DEFAULT">Actions</TableCell>
    </TableRow>
  </TableHead>
  <TableBody variant="DEFAULT">
    <TableRow variant="BODY_ROW_DEFAULT">
      <TableCell variant="BODY_CELL_DEFAULT">John Doe</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">john@example.com</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">Engineering</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">Edit | Delete</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Table With Sticky Left and Right Columns

Combine sticky columns on both sides:

```tsx
<Table variant="DEFAULT" stickyLeftColumns={1} stickyRightColumns={1}>
  <TableHead variant="DEFAULT">
    <TableRow variant="HEAD_ROW_DEFAULT">
      <TableCell variant="HEADER_CELL_DEFAULT">Name</TableCell>
      <TableCell variant="HEADER_CELL_DEFAULT">Jan</TableCell>
      <TableCell variant="HEADER_CELL_DEFAULT">Feb</TableCell>
      <TableCell variant="HEADER_CELL_DEFAULT">Mar</TableCell>
      <TableCell variant="HEADER_CELL_DEFAULT">Total</TableCell>
    </TableRow>
  </TableHead>
  <TableBody variant="DEFAULT">
    <TableRow variant="BODY_ROW_DEFAULT">
      <TableCell variant="BODY_CELL_DEFAULT">Product A</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">$1,000</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">$1,200</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">$1,500</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">$3,700</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Table With Active Rows

Highlight selected or active rows:

```tsx
<Table variant="DEFAULT">
  <TableBody variant="DEFAULT">
    <TableRow variant="BODY_ROW_DEFAULT">
      <TableCell variant="BODY_CELL_DEFAULT">Regular Row</TableCell>
    </TableRow>
    <TableRow variant="BODY_ROW_DEFAULT" active={true}>
      <TableCell variant="BODY_CELL_DEFAULT">Active Row</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## Props

### Table

| Prop                 | Type        | Default     | Description                                  |
| -------------------- | ----------- | ----------- | -------------------------------------------- |
| `variant`            | `string`    | `'DEFAULT'` | Visual variant of the table                  |
| `stickyHead`         | `boolean`   | `false`     | Whether to make the header sticky on scroll  |
| `stickyLeftColumns`  | `number`    | `0`         | Number of columns to stick on the left side  |
| `stickyRightColumns` | `number`    | `0`         | Number of columns to stick on the right side |
| `children`           | `ReactNode` | Required    | Table content (TableHead, TableBody, etc.)   |
| `data-testid`        | `string`    | `'table'`   | Test identifier                              |

## Accessibility

- Use `TableCaption` to provide context about the table's content
- Use semantic table structure with `TableHead` and `TableBody`
- Set `hidden` prop on `TableCaption` if you want it accessible but not visible
- Ensure proper header-data relationships with scope attributes
- Use `aria-label` or `aria-labelledby` when caption is not sufficient

## Best Practices

1. **Always include a caption**: Even if hidden, it helps screen reader users understand the table's purpose
2. **Use sticky headers for long tables**: Improves usability when scrolling through many rows
3. **Sticky columns for wide tables**: Keep key columns visible when horizontal scrolling is needed
4. **Limit sticky columns**: Too many sticky columns can reduce visible data area
5. **Consistent cell variants**: Use appropriate variants for headers vs body cells
6. **Active row indication**: Use the `active` prop to show current selection
7. **Responsive design**: Consider horizontal scrolling for tables with many columns on small screens

## Related Components

- **TableHead**: Container for table header rows
- **TableBody**: Container for table body rows
- **TableRow**: Individual row in the table
- **TableCell**: Individual cell in a row
- **TableCaption**: Accessible caption for the table
