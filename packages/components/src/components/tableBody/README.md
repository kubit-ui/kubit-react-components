# TableBody Component

TableBody is the container component for table body rows. It organizes data rows within a table and supports active row highlighting for user interactions.

## Installation

```bash
npm install @kubit/web-ui-components
```

## Basic Usage

```tsx
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@kubit/web-ui-components';

function App() {
  return (
    <Table variant="DEFAULT">
      <TableBody variant="DEFAULT">
        <TableRow variant="BODY_ROW_DEFAULT">
          <TableCell variant="BODY_CELL_DEFAULT">Product A</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Electronics</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">$299.99</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">In Stock</TableCell>
        </TableRow>
        <TableRow variant="BODY_ROW_DEFAULT">
          <TableCell variant="BODY_CELL_DEFAULT">Product B</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Books</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">$19.99</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">In Stock</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
```

## Variants

The TableBody component supports a default variant:

```tsx
<TableBody variant="DEFAULT">{/* Table rows */}</TableBody>
```

## Advanced Usage

### With Active Row

Highlight a selected or active row within the table body:

```tsx
<TableBody variant="DEFAULT">
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">User 1</TableCell>
    <TableCell variant="BODY_CELL_DEFAULT">john@example.com</TableCell>
    <TableCell variant="BODY_CELL_DEFAULT">Admin</TableCell>
  </TableRow>
  <TableRow active={true} variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">User 2</TableCell>
    <TableCell variant="BODY_CELL_DEFAULT">jane@example.com</TableCell>
    <TableCell variant="BODY_CELL_DEFAULT">Editor</TableCell>
  </TableRow>
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">User 3</TableCell>
    <TableCell variant="BODY_CELL_DEFAULT">bob@example.com</TableCell>
    <TableCell variant="BODY_CELL_DEFAULT">Viewer</TableCell>
  </TableRow>
</TableBody>
```

### With Many Rows

Handle large datasets with multiple rows:

```tsx
<TableBody variant="DEFAULT">
  {data.map((item, index) => (
    <TableRow key={item.id} variant="BODY_ROW_DEFAULT">
      <TableCell variant="BODY_CELL_DEFAULT">{item.name}</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">{item.value}</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">{item.status}</TableCell>
    </TableRow>
  ))}
</TableBody>
```

### With Empty State

Display appropriate message when no data is available:

```tsx
<TableBody variant="DEFAULT">
  {data.length === 0 ? (
    <TableRow variant="BODY_ROW_DEFAULT">
      <TableCell variant="BODY_CELL_DEFAULT" colSpan={3}>
        No data available
      </TableCell>
    </TableRow>
  ) : (
    data.map((item) => (
      <TableRow key={item.id} variant="BODY_ROW_DEFAULT">
        <TableCell variant="BODY_CELL_DEFAULT">{item.name}</TableCell>
        <TableCell variant="BODY_CELL_DEFAULT">{item.email}</TableCell>
        <TableCell variant="BODY_CELL_DEFAULT">{item.role}</TableCell>
      </TableRow>
    ))
  )}
</TableBody>
```

### With Alternating Row Styles

Create visual distinction between rows (using CSS):

```tsx
<TableBody variant="DEFAULT">
  <TableRow variant="BODY_ROW_DEFAULT" className="even-row">
    <TableCell variant="BODY_CELL_DEFAULT">Row 1</TableCell>
    <TableCell variant="BODY_CELL_DEFAULT">Data 1</TableCell>
  </TableRow>
  <TableRow variant="BODY_ROW_DEFAULT" className="odd-row">
    <TableCell variant="BODY_CELL_DEFAULT">Row 2</TableCell>
    <TableCell variant="BODY_CELL_DEFAULT">Data 2</TableCell>
  </TableRow>
  <TableRow variant="BODY_ROW_DEFAULT" className="even-row">
    <TableCell variant="BODY_CELL_DEFAULT">Row 3</TableCell>
    <TableCell variant="BODY_CELL_DEFAULT">Data 3</TableCell>
  </TableRow>
</TableBody>
```

### With Interactive Rows

Make rows clickable for navigation or selection:

```tsx
function InteractiveTable() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <TableBody variant="DEFAULT">
      {users.map((user) => (
        <TableRow
          key={user.id}
          variant="BODY_ROW_DEFAULT"
          active={selectedId === user.id}
          onClick={() => setSelectedId(user.id)}
          style={{ cursor: 'pointer' }}
        >
          <TableCell variant="BODY_CELL_DEFAULT">{user.name}</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">{user.email}</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">{user.department}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
```

### Complete Table Example

Full table structure with head and body:

```tsx
<Table variant="DEFAULT">
  <TableHead variant="DEFAULT">
    <TableRow variant="HEAD_ROW_DEFAULT">
      <TableCell variant="HEADER_CELL_DEFAULT">Product</TableCell>
      <TableCell variant="HEADER_CELL_DEFAULT">Category</TableCell>
      <TableCell variant="HEADER_CELL_DEFAULT">Price</TableCell>
      <TableCell variant="HEADER_CELL_DEFAULT">Stock Status</TableCell>
    </TableRow>
  </TableHead>
  <TableBody variant="DEFAULT">
    <TableRow variant="BODY_ROW_DEFAULT">
      <TableCell variant="BODY_CELL_DEFAULT">Laptop Pro 15"</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">Electronics</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">$1,299.99</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">In Stock</TableCell>
    </TableRow>
    <TableRow variant="BODY_ROW_DEFAULT">
      <TableCell variant="BODY_CELL_DEFAULT">Wireless Mouse</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">Accessories</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">$29.99</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">Low Stock</TableCell>
    </TableRow>
    <TableRow variant="BODY_ROW_DEFAULT">
      <TableCell variant="BODY_CELL_DEFAULT">USB-C Cable</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">Accessories</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">$12.99</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">In Stock</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## Props

### TableBody

| Prop          | Type        | Default        | Description                      |
| ------------- | ----------- | -------------- | -------------------------------- |
| `variant`     | `string`    | `'DEFAULT'`    | Visual variant of the table body |
| `children`    | `ReactNode` | Required       | TableRow components              |
| `data-testid` | `string`    | `'table-body'` | Test identifier                  |

## Accessibility

- Use semantic `<tbody>` HTML element for proper table structure
- Ensure each row has a unique `key` when rendering from data
- Use `active` prop on TableRow to indicate current selection
- Provide meaningful cell content for screen readers
- Consider adding `aria-label` to rows with specific actions

## Best Practices

1. **Unique keys**: Always use unique identifiers for row keys when mapping data
2. **Active row indication**: Use `active` prop to show current selection or focus
3. **Empty state handling**: Provide clear messaging when no data is available
4. **Performance**: For large datasets, consider virtualization techniques
5. **Consistent variants**: Use `BODY_ROW_DEFAULT` and `BODY_CELL_DEFAULT` for body content
6. **Clickable rows**: Add appropriate cursor styles and keyboard handlers for interactive rows
7. **Row actions**: Place action buttons or controls in the last column for consistency

## Related Components

- **Table**: Parent container for the complete table structure
- **TableHead**: Container for header rows
- **TableRow**: Individual row component (use `BODY_ROW_DEFAULT` variant)
- **TableCell**: Individual cell component (use `BODY_CELL_DEFAULT` variant)
- **TableCaption**: Optional caption for table context
