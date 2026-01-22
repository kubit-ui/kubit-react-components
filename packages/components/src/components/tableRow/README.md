# TableRow Component

TableRow is a semantic container component for table rows. It wraps the `<tr>` HTML element and provides consistent styling, interactive states (active, hoverable), and support for different row variants (header rows and body rows).

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
  TableHead,
  TableRow,
} from '@kubit/web-ui-components';

function App() {
  return (
    <Table variant="DEFAULT">
      <TableHead variant="DEFAULT">
        <TableRow variant="HEAD_ROW_DEFAULT">
          <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col">
            Name
          </TableCell>
          <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col">
            Email
          </TableCell>
          <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col">
            Role
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody variant="DEFAULT">
        <TableRow variant="BODY_ROW_DEFAULT">
          <TableCell variant="BODY_CELL_DEFAULT">John Doe</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">john@example.com</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Admin</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
```

## Variants

The TableRow component supports three variants:

### HEAD_ROW_DEFAULT

Primary header row variant for main table headers:

```tsx
<TableRow variant="HEAD_ROW_DEFAULT">
  <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col">
    Column Name
  </TableCell>
</TableRow>
```

### HEAD_ROW_SECONDARY

Secondary header row variant for sub-headers or grouped column headers:

```tsx
<TableRow variant="HEAD_ROW_SECONDARY">
  <TableCell variant="HEADER_CELL_SECONDARY" th={true} scope="col">
    Subcategory
  </TableCell>
</TableRow>
```

### BODY_ROW_DEFAULT

Standard body row variant for data display:

```tsx
<TableRow variant="BODY_ROW_DEFAULT">
  <TableCell variant="BODY_CELL_DEFAULT">Data</TableCell>
</TableRow>
```

## Advanced Usage

### Active Row

Highlight a selected or currently active row:

```tsx
<TableRow variant="BODY_ROW_DEFAULT" active={true}>
  <TableCell variant="BODY_CELL_DEFAULT">Jane Smith</TableCell>
  <TableCell variant="BODY_CELL_DEFAULT">jane@example.com</TableCell>
  <TableCell variant="BODY_CELL_DEFAULT">Editor</TableCell>
</TableRow>
```

Use cases for active rows:

- Currently selected item in a list
- Current user's row in a user list
- Active record being edited
- Currently focused item in keyboard navigation

### Hoverable Row

Enable hover effects for interactive feedback:

```tsx
<TableRow variant="BODY_ROW_DEFAULT" hoverable={true}>
  <TableCell variant="BODY_CELL_DEFAULT">Product A</TableCell>
  <TableCell variant="BODY_CELL_DEFAULT">Electronics</TableCell>
  <TableCell variant="BODY_CELL_DEFAULT" textAlign="right">
    $299.99
  </TableCell>
</TableRow>
```

### Clickable Row

Make rows clickable for navigation or actions:

```tsx
<TableRow
  variant="BODY_ROW_DEFAULT"
  hoverable={true}
  onClick={() => console.log('Row clicked')}
  style={{ cursor: 'pointer' }}
>
  <TableCell variant="BODY_CELL_DEFAULT">Order #1234</TableCell>
  <TableCell variant="BODY_CELL_DEFAULT">Pending</TableCell>
  <TableCell variant="BODY_CELL_DEFAULT" textAlign="right">
    $125.00
  </TableCell>
</TableRow>
```

### Row with Mixed Cell Alignments

Combine different text alignments within a row:

```tsx
<TableRow variant="BODY_ROW_DEFAULT">
  <TableCell variant="BODY_CELL_DEFAULT">Item Description</TableCell>
  <TableCell variant="BODY_CELL_DEFAULT" textAlign="center">
    Active
  </TableCell>
  <TableCell variant="BODY_CELL_DEFAULT" textAlign="right">
    150
  </TableCell>
  <TableCell variant="BODY_CELL_DEFAULT" textAlign="right">
    $1,234.56
  </TableCell>
</TableRow>
```

### Row with Spanning Cells

Use colspan or rowspan within rows:

```tsx
<TableRow variant="BODY_ROW_DEFAULT">
  <TableCell variant="BODY_CELL_DEFAULT">Category Total</TableCell>
  <TableCell variant="BODY_CELL_DEFAULT" colSpan={2} textAlign="right">
    45 items
  </TableCell>
  <TableCell variant="BODY_CELL_DEFAULT" textAlign="right">
    <strong>$5,678.90</strong>
  </TableCell>
</TableRow>
```

### Selectable Rows with Checkboxes

Create rows with selection checkboxes:

```tsx
function SelectableTable() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const handleRowSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <Table variant="DEFAULT">
      <TableBody variant="DEFAULT">
        {data.map((item) => (
          <TableRow
            key={item.id}
            variant="BODY_ROW_DEFAULT"
            active={selectedIds.includes(item.id)}
            hoverable={true}
          >
            <TableCell variant="BODY_CELL_DEFAULT">
              <input
                type="checkbox"
                checked={selectedIds.includes(item.id)}
                onChange={() => handleRowSelect(item.id)}
              />
            </TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">{item.name}</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">{item.value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
```

### Expandable Rows

Create expandable rows with additional details:

```tsx
function ExpandableRow({ item }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <TableRow
        variant="BODY_ROW_DEFAULT"
        hoverable={true}
        onClick={() => setExpanded(!expanded)}
        style={{ cursor: 'pointer' }}
      >
        <TableCell variant="BODY_CELL_DEFAULT">
          {expanded ? '▼' : '▶'} {item.name}
        </TableCell>
        <TableCell variant="BODY_CELL_DEFAULT">{item.status}</TableCell>
      </TableRow>
      {expanded && (
        <TableRow variant="BODY_ROW_DEFAULT">
          <TableCell variant="BODY_CELL_DEFAULT" colSpan={2}>
            <div style={{ padding: '16px' }}>
              Additional details about {item.name}
            </div>
          </TableCell>
        </TableRow>
      )}
    </>
  );
}
```

### Rows with Conditional Styling

Apply conditional styles based on data:

```tsx
function ConditionalStyledTable({ orders }) {
  const getRowStyle = (status: string) => {
    switch (status) {
      case 'completed':
        return { backgroundColor: '#e6f4ea' };
      case 'pending':
        return { backgroundColor: '#fff4e5' };
      case 'cancelled':
        return { backgroundColor: '#fce8e6' };
      default:
        return {};
    }
  };

  return (
    <Table variant="DEFAULT">
      <TableBody variant="DEFAULT">
        {orders.map((order) => (
          <TableRow
            key={order.id}
            variant="BODY_ROW_DEFAULT"
            style={getRowStyle(order.status)}
          >
            <TableCell variant="BODY_CELL_DEFAULT">{order.id}</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">{order.customer}</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">{order.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
```

### Keyboard Navigation

Implement keyboard navigation for rows:

```tsx
function KeyboardNavigableTable({ items }) {
  const [focusedIndex, setFocusedIndex] = useState(0);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocusedIndex(Math.min(index + 1, items.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocusedIndex(Math.max(index - 1, 0));
    } else if (e.key === 'Enter') {
      console.log('Selected item:', items[index]);
    }
  };

  return (
    <Table variant="DEFAULT">
      <TableBody variant="DEFAULT">
        {items.map((item, index) => (
          <TableRow
            key={item.id}
            variant="BODY_ROW_DEFAULT"
            active={focusedIndex === index}
            hoverable={true}
            tabIndex={0}
            onKeyDown={(e) => handleKeyDown(e, index)}
          >
            <TableCell variant="BODY_CELL_DEFAULT">{item.name}</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">{item.value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
```

### Row Actions

Add action buttons within rows:

```tsx
<TableRow variant="BODY_ROW_DEFAULT" hoverable={true}>
  <TableCell variant="BODY_CELL_DEFAULT">User Name</TableCell>
  <TableCell variant="BODY_CELL_DEFAULT">user@example.com</TableCell>
  <TableCell variant="BODY_CELL_DEFAULT">
    <div style={{ display: 'flex', gap: '8px' }}>
      <Button
        size="SMALL"
        variant="SECONDARY"
        onClick={() => console.log('Edit')}
      >
        Edit
      </Button>
      <Button
        size="SMALL"
        variant="TERTIARY"
        onClick={() => console.log('Delete')}
      >
        Delete
      </Button>
    </div>
  </TableCell>
</TableRow>
```

### Drag and Drop Rows

Enable row reordering with drag and drop:

```tsx
function DraggableRow({ item, index, onDragStart, onDragOver, onDrop }) {
  return (
    <TableRow
      variant="BODY_ROW_DEFAULT"
      hoverable={true}
      draggable
      onDragStart={() => onDragStart(index)}
      onDragOver={(e) => {
        e.preventDefault();
        onDragOver(index);
      }}
      onDrop={() => onDrop(index)}
    >
      <TableCell variant="BODY_CELL_DEFAULT">
        <span style={{ cursor: 'grab' }}>☰</span>
      </TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">{item.name}</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">{item.value}</TableCell>
    </TableRow>
  );
}
```

### Multi-Row Headers

Create complex header structures:

```tsx
<TableHead variant="DEFAULT">
  <TableRow variant="HEAD_ROW_DEFAULT">
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col" rowSpan={2}>
      Product
    </TableCell>
    <TableCell
      variant="HEADER_CELL_DEFAULT"
      th={true}
      scope="colgroup"
      colSpan={3}
    >
      Sales Data
    </TableCell>
  </TableRow>
  <TableRow variant="HEAD_ROW_SECONDARY">
    <TableCell variant="HEADER_CELL_SECONDARY" th={true} scope="col">
      Q1
    </TableCell>
    <TableCell variant="HEADER_CELL_SECONDARY" th={true} scope="col">
      Q2
    </TableCell>
    <TableCell variant="HEADER_CELL_SECONDARY" th={true} scope="col">
      Q3
    </TableCell>
  </TableRow>
</TableHead>
```

## Props

### TableRow

| Prop           | Type                                                               | Default       | Description                                 |
| -------------- | ------------------------------------------------------------------ | ------------- | ------------------------------------------- |
| `variant`      | `'HEAD_ROW_DEFAULT' \| 'HEAD_ROW_SECONDARY' \| 'BODY_ROW_DEFAULT'` | Required      | Visual variant of the row                   |
| `children`     | `ReactNode`                                                        | Required      | TableCell components                        |
| `active`       | `boolean`                                                          | `false`       | Whether the row is in active/selected state |
| `hoverable`    | `boolean`                                                          | `false`       | Whether the row has hover effects           |
| `onClick`      | `(event) => void`                                                  | `undefined`   | Click handler for row                       |
| `onKeyDown`    | `(event) => void`                                                  | `undefined`   | Keyboard event handler                      |
| `onMouseEnter` | `(event) => void`                                                  | `undefined`   | Mouse enter handler                         |
| `onMouseLeave` | `(event) => void`                                                  | `undefined`   | Mouse leave handler                         |
| `id`           | `string`                                                           | `undefined`   | HTML id attribute                           |
| `component`    | `string \| React.ComponentType`                                    | `undefined`   | Custom component to render                  |
| `style`        | `CSSProperties`                                                    | `undefined`   | Inline styles                               |
| `className`    | `string`                                                           | `undefined`   | Additional CSS class names                  |
| `tabIndex`     | `number`                                                           | `undefined`   | Tab index for keyboard navigation           |
| `draggable`    | `boolean`                                                          | `false`       | Whether the row is draggable                |
| `onDragStart`  | `(event) => void`                                                  | `undefined`   | Drag start handler                          |
| `onDragOver`   | `(event) => void`                                                  | `undefined`   | Drag over handler                           |
| `onDrop`       | `(event) => void`                                                  | `undefined`   | Drop handler                                |
| `data-testid`  | `string`                                                           | `'table-row'` | Test identifier                             |

## Accessibility

- **Semantic HTML**: TableRow renders as `<tr>` for proper table structure
- **Interactive rows**: Use `tabIndex={0}` for keyboard-accessible clickable rows
- **ARIA attributes**: Add `aria-selected` for selectable rows
- **Keyboard navigation**: Implement `onKeyDown` for arrow key navigation
- **Focus management**: Ensure focused rows are visually distinct
- **Screen readers**: Active state is announced when properly implemented
- **Role attributes**: Consider `role="button"` for clickable rows with `onClick`

## Best Practices

1. **Consistent variants**: Use `HEAD_ROW_*` for headers, `BODY_ROW_DEFAULT` for data
2. **Hoverable for interactive**: Enable `hoverable` for clickable or selectable rows
3. **Unique keys**: Always provide unique `key` prop when rendering rows from data
4. **Active state**: Use `active` to highlight current selection
5. **Cursor styling**: Add `cursor: pointer` style for clickable rows
6. **Keyboard support**: Implement keyboard navigation for interactive tables
7. **Event handlers**: Add appropriate handlers (`onClick`, `onKeyDown`) for interactions
8. **Visual feedback**: Provide clear visual cues for hover, active, and focus states
9. **Performance**: Use `React.memo` for rows in large tables to prevent unnecessary re-renders
10. **Accessibility**: Ensure interactive rows are keyboard accessible

## Common Use Cases

### Data Tables

Standard row for displaying tabular data:

```tsx
<TableRow variant="BODY_ROW_DEFAULT">
  <TableCell variant="BODY_CELL_DEFAULT">Data 1</TableCell>
  <TableCell variant="BODY_CELL_DEFAULT">Data 2</TableCell>
  <TableCell variant="BODY_CELL_DEFAULT">Data 3</TableCell>
</TableRow>
```

### Selectable Lists

Rows with selection state:

```tsx
<TableRow
  variant="BODY_ROW_DEFAULT"
  active={isSelected}
  hoverable={true}
  onClick={handleSelect}
>
  <TableCell variant="BODY_CELL_DEFAULT">
    <input type="checkbox" checked={isSelected} onChange={handleSelect} />
  </TableCell>
  <TableCell variant="BODY_CELL_DEFAULT">Item Name</TableCell>
</TableRow>
```

### Clickable Rows for Navigation

Rows that navigate to detail pages:

```tsx
<TableRow
  variant="BODY_ROW_DEFAULT"
  hoverable={true}
  onClick={() => navigate(`/details/${id}`)}
  style={{ cursor: 'pointer' }}
>
  <TableCell variant="BODY_CELL_DEFAULT">Item #{id}</TableCell>
  <TableCell variant="BODY_CELL_DEFAULT">Details</TableCell>
</TableRow>
```

### Status-Based Styling

Conditional row styling based on status:

```tsx
<TableRow
  variant="BODY_ROW_DEFAULT"
  style={{
    backgroundColor: status === 'error' ? '#fee' : 'transparent',
  }}
>
  <TableCell variant="BODY_CELL_DEFAULT">{item}</TableCell>
  <TableCell variant="BODY_CELL_DEFAULT">{status}</TableCell>
</TableRow>
```

## When to Use TableRow

Use TableRow when:

- Creating any table structure (headers or body)
- Need interactive rows (clickable, selectable)
- Implementing hover effects
- Showing active/selected state
- Creating header hierarchies with different row variants

Always use TableRow:

- As a direct child of TableHead or TableBody
- With appropriate variant (HEAD*ROW*\* or BODY_ROW_DEFAULT)
- With unique keys when mapping from data
- With proper event handlers for interactive rows

## Related Components

- **Table**: Parent container for the complete table
- **TableHead**: Container for header rows
- **TableBody**: Container for body rows
- **TableCell**: Cell component placed within rows
- **TableFoot**: Container for footer rows

## Styling Notes

- TableRow renders as `<tr>` HTML element
- Variants control visual styling (borders, backgrounds, typography)
- `hoverable` adds hover state styling
- `active` adds selected/active state styling
- Custom styles can be applied via `style` prop or `className`
- Default styling provides visual feedback for interactive states

## Performance Considerations

- TableRow is lightweight with minimal performance impact
- For large tables (100+ rows), consider:
  - Virtualization with libraries like `react-window` or `react-virtual`
  - Memoizing rows with `React.memo`
  - Debouncing event handlers
  - Lazy loading data in chunks
- Avoid complex calculations or effects within row render
- Use keys based on stable IDs, not array indices

## WCAG Guidelines

This component helps meet the following WCAG 2.1 criteria:

- **1.3.1 Info and Relationships (Level A)**: Proper use of `<tr>` element
- **2.1.1 Keyboard (Level A)**: Interactive rows support keyboard navigation
- **2.4.7 Focus Visible (Level AA)**: Focus states are clearly visible
- **4.1.2 Name, Role, Value (Level A)**: Proper semantic roles

## Browser Support

TableRow uses native HTML table elements with full browser support:

- Chrome/Edge: ✅ All versions
- Firefox: ✅ All versions
- Safari: ✅ All versions
- Screen Readers: ✅ Full support with proper attributes
- Interactive features: ✅ All modern browsers
