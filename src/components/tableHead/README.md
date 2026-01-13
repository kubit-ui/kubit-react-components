# TableHead Component

TableHead is a semantic container component for table header sections. It wraps the `<thead>` HTML element and provides consistent styling for header rows, supporting features like sticky positioning, multi-row headers, and accessibility attributes.

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

The TableHead component supports a default variant:

```tsx
<TableHead variant="DEFAULT">
  <TableRow variant="HEAD_ROW_DEFAULT">
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col">
      Column Name
    </TableCell>
  </TableRow>
</TableHead>
```

## Advanced Usage

### With Column Alignment

Align header cells to match data alignment:

```tsx
<TableHead variant="DEFAULT">
  <TableRow variant="HEAD_ROW_DEFAULT">
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col">
      Product
    </TableCell>
    <TableCell
      variant="HEADER_CELL_DEFAULT"
      th={true}
      scope="col"
      textAlign="center"
    >
      Status
    </TableCell>
    <TableCell
      variant="HEADER_CELL_DEFAULT"
      th={true}
      scope="col"
      textAlign="right"
    >
      Price
    </TableCell>
    <TableCell
      variant="HEADER_CELL_DEFAULT"
      th={true}
      scope="col"
      textAlign="right"
    >
      Quantity
    </TableCell>
  </TableRow>
</TableHead>
```

### Multi-Row Headers (Grouped Columns)

Create complex header structures with spanning cells:

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
  <TableRow variant="HEAD_ROW_DEFAULT">
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

### Sticky Header

Keep header visible while scrolling through data:

```tsx
<TableHead variant="DEFAULT" sticky={true}>
  <TableRow variant="HEAD_ROW_DEFAULT">
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col">
      Column 1
    </TableCell>
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col">
      Column 2
    </TableCell>
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col">
      Column 3
    </TableCell>
  </TableRow>
</TableHead>
```

This is particularly useful for:

- Long tables with many rows
- Scrollable containers
- Maintaining context while viewing data

### Hidden Header (Accessible)

Hide header visually while keeping it accessible to screen readers:

```tsx
<TableHead variant="DEFAULT" hidden={true}>
  <TableRow variant="HEAD_ROW_DEFAULT">
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col">
      Column 1
    </TableCell>
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col">
      Column 2
    </TableCell>
  </TableRow>
</TableHead>
```

Use this when:

- The column purpose is obvious from context
- Design requires minimal visual headers
- Accessibility is still important

### Custom Column Widths

Control column sizing through header cells:

```tsx
<TableHead variant="DEFAULT">
  <TableRow variant="HEAD_ROW_DEFAULT">
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col" width="40%">
      Description
    </TableCell>
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col" width="20%">
      Status
    </TableCell>
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col" width="20%">
      Date
    </TableCell>
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col" width="20%">
      Amount
    </TableCell>
  </TableRow>
</TableHead>
```

### Sortable Headers

Add sorting functionality to headers:

```tsx
function SortableTable() {
  const [sortColumn, setSortColumn] = useState('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  return (
    <Table variant="DEFAULT">
      <TableHead variant="DEFAULT">
        <TableRow variant="HEAD_ROW_DEFAULT">
          <TableCell
            variant="HEADER_CELL_DEFAULT"
            th={true}
            scope="col"
            onClick={() => handleSort('name')}
            style={{ cursor: 'pointer' }}
          >
            Name{' '}
            {sortColumn === 'name' && (sortDirection === 'asc' ? '↑' : '↓')}
          </TableCell>
          <TableCell
            variant="HEADER_CELL_DEFAULT"
            th={true}
            scope="col"
            onClick={() => handleSort('email')}
            style={{ cursor: 'pointer' }}
          >
            Email{' '}
            {sortColumn === 'email' && (sortDirection === 'asc' ? '↑' : '↓')}
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody variant="DEFAULT">{/* Sorted data rows */}</TableBody>
    </Table>
  );
}
```

### Headers with Icons

Add icons to headers for visual context:

```tsx
import { Icon } from '@kubit/web-ui-components';
import { ICONS } from '@kubit/web-ui-components/icons';

<TableHead variant="DEFAULT">
  <TableRow variant="HEAD_ROW_DEFAULT">
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col">
      <div style={{ alignItems: 'center', display: 'flex', gap: '8px' }}>
        <Icon icon={ICONS.USER} size="SMALL" />
        <span>User</span>
      </div>
    </TableCell>
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col">
      <div style={{ alignItems: 'center', display: 'flex', gap: '8px' }}>
        <Icon icon={ICONS.EMAIL} size="SMALL" />
        <span>Email</span>
      </div>
    </TableCell>
  </TableRow>
</TableHead>;
```

### Complex Grouped Headers

Create three-level header hierarchies:

```tsx
<TableHead variant="DEFAULT">
  {/* Level 1: Main groups */}
  <TableRow variant="HEAD_ROW_DEFAULT">
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col" rowSpan={3}>
      Product
    </TableCell>
    <TableCell
      variant="HEADER_CELL_DEFAULT"
      th={true}
      scope="colgroup"
      colSpan={6}
    >
      2025 Sales
    </TableCell>
  </TableRow>

  {/* Level 2: Sub-groups */}
  <TableRow variant="HEAD_ROW_DEFAULT">
    <TableCell
      variant="HEADER_CELL_SECONDARY"
      th={true}
      scope="colgroup"
      colSpan={3}
    >
      H1 2025
    </TableCell>
    <TableCell
      variant="HEADER_CELL_SECONDARY"
      th={true}
      scope="colgroup"
      colSpan={3}
    >
      H2 2025
    </TableCell>
  </TableRow>

  {/* Level 3: Individual columns */}
  <TableRow variant="HEAD_ROW_DEFAULT">
    <TableCell variant="HEADER_CELL_SECONDARY" th={true} scope="col">
      Q1
    </TableCell>
    <TableCell variant="HEADER_CELL_SECONDARY" th={true} scope="col">
      Q2
    </TableCell>
    <TableCell variant="HEADER_CELL_SECONDARY" th={true} scope="col">
      Total
    </TableCell>
    <TableCell variant="HEADER_CELL_SECONDARY" th={true} scope="col">
      Q3
    </TableCell>
    <TableCell variant="HEADER_CELL_SECONDARY" th={true} scope="col">
      Q4
    </TableCell>
    <TableCell variant="HEADER_CELL_SECONDARY" th={true} scope="col">
      Total
    </TableCell>
  </TableRow>
</TableHead>
```

### Responsive Headers

Adapt headers for different screen sizes:

```tsx
function ResponsiveTable() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Table variant="DEFAULT">
      <TableHead variant="DEFAULT" hidden={isMobile}>
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
      <TableBody variant="DEFAULT">{/* Responsive rows */}</TableBody>
    </Table>
  );
}
```

### Headers with Tooltips

Add explanatory tooltips to headers:

```tsx
<TableHead variant="DEFAULT">
  <TableRow variant="HEAD_ROW_DEFAULT">
    <TableCell
      variant="HEADER_CELL_DEFAULT"
      th={true}
      scope="col"
      aria-label="Customer conversion rate - percentage of visitors who made a purchase"
    >
      <span title="Percentage of visitors who made a purchase">
        Conversion Rate
      </span>
    </TableCell>
  </TableRow>
</TableHead>
```

## Props

### TableHead

| Prop          | Type                            | Default        | Description                                              |
| ------------- | ------------------------------- | -------------- | -------------------------------------------------------- |
| `variant`     | `string`                        | `'DEFAULT'`    | Visual variant of the header                             |
| `children`    | `ReactNode`                     | Required       | TableRow components containing header cells              |
| `sticky`      | `boolean`                       | `false`        | Whether to make the header sticky on scroll              |
| `hidden`      | `boolean`                       | `false`        | Whether to visually hide the header (remains accessible) |
| `id`          | `string`                        | `undefined`    | HTML id attribute                                        |
| `component`   | `string \| React.ComponentType` | `undefined`    | Custom component to render                               |
| `data-testid` | `string`                        | `'table-head'` | Test identifier                                          |

## Accessibility

- **Semantic HTML**: TableHead renders as `<thead>` for proper table structure
- **Scope attributes**: Always use `scope="col"` on header cells for columns
- **Column groups**: Use `scope="colgroup"` for headers spanning multiple columns
- **Row headers**: Use `scope="row"` when a header cell applies to a row
- **Screen readers**: Headers establish relationships between data and labels
- **Hidden headers**: Use `hidden={true}` to hide visually while keeping accessible
- **ARIA labels**: Use `aria-label` or `aria-labelledby` for additional context
- **th elements**: Always use `th={true}` prop on TableCell components in headers

## Best Practices

1. **Always use th cells**: Header cells should use `th={true}` prop
2. **Scope attributes**: Include appropriate `scope` attributes for accessibility
3. **Consistent alignment**: Align headers to match their data columns
4. **Clear labels**: Use concise, descriptive header text
5. **Sticky headers**: Enable for long tables to maintain context
6. **Multi-row headers**: Use `rowSpan` and `colSpan` for complex structures
7. **Visual hierarchy**: Use HEADER_CELL_DEFAULT for primary, HEADER_CELL_SECONDARY for sub-headers
8. **Sortable indicators**: Show sort direction clearly with icons or arrows
9. **Width control**: Set widths on header cells to control column sizing
10. **Responsive design**: Consider hiding or adapting headers for small screens

## Common Use Cases

### Data Tables

Standard data display with clear column headers:

```tsx
<TableHead variant="DEFAULT">
  <TableRow variant="HEAD_ROW_DEFAULT">
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col">
      ID
    </TableCell>
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col">
      Name
    </TableCell>
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col">
      Status
    </TableCell>
  </TableRow>
</TableHead>
```

### Financial Reports

Multi-level headers for time periods:

```tsx
<TableHead variant="DEFAULT">
  <TableRow variant="HEAD_ROW_DEFAULT">
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col" rowSpan={2}>
      Account
    </TableCell>
    <TableCell
      variant="HEADER_CELL_DEFAULT"
      th={true}
      scope="colgroup"
      colSpan={4}
    >
      Quarterly Results
    </TableCell>
  </TableRow>
  <TableRow variant="HEAD_ROW_DEFAULT">
    <TableCell variant="HEADER_CELL_SECONDARY" th={true} scope="col">
      Q1
    </TableCell>
    <TableCell variant="HEADER_CELL_SECONDARY" th={true} scope="col">
      Q2
    </TableCell>
    <TableCell variant="HEADER_CELL_SECONDARY" th={true} scope="col">
      Q3
    </TableCell>
    <TableCell variant="HEADER_CELL_SECONDARY" th={true} scope="col">
      Q4
    </TableCell>
  </TableRow>
</TableHead>
```

### Comparison Tables

Headers for side-by-side comparisons:

```tsx
<TableHead variant="DEFAULT">
  <TableRow variant="HEAD_ROW_DEFAULT">
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col">
      Feature
    </TableCell>
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col">
      Basic Plan
    </TableCell>
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col">
      Pro Plan
    </TableCell>
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col">
      Enterprise Plan
    </TableCell>
  </TableRow>
</TableHead>
```

### Sortable Data Tables

Interactive headers with sorting:

```tsx
<TableHead variant="DEFAULT">
  <TableRow variant="HEAD_ROW_DEFAULT">
    <TableCell
      variant="HEADER_CELL_DEFAULT"
      th={true}
      scope="col"
      onClick={() => handleSort('name')}
      style={{ cursor: 'pointer' }}
    >
      Name ↕
    </TableCell>
    <TableCell
      variant="HEADER_CELL_DEFAULT"
      th={true}
      scope="col"
      onClick={() => handleSort('date')}
      style={{ cursor: 'pointer' }}
    >
      Date ↕
    </TableCell>
  </TableRow>
</TableHead>
```

## When to Use TableHead

Use TableHead when:

- Creating any data table with column headers
- Establishing relationships between headers and data
- Need sticky headers for long tables
- Creating multi-level header hierarchies
- Implementing sortable columns
- Providing accessible table structure

Always use TableHead with:

- Proper `th={true}` on all header cells
- Appropriate `scope` attributes
- Clear, descriptive header text
- Consistent styling and alignment

## Related Components

- **Table**: Parent container for the complete table
- **TableBody**: Body section containing data rows
- **TableFoot**: Footer section for summary information
- **TableRow**: Row component (use HEAD_ROW_DEFAULT variant in headers)
- **TableCell**: Cell component (use HEADER*CELL*\* variants in headers)
- **TableCaption**: Accessible table caption

## Styling Notes

- TableHead renders as `<thead>` HTML element
- Default styling provides visual distinction from body rows
- Sticky positioning uses CSS `position: sticky`
- Hidden headers use `visibility: hidden` or similar to maintain layout while hiding visually
- Header cells typically have different background colors, bold text, and borders
- Multi-row headers maintain proper cell alignment with rowSpan and colSpan

## Performance Considerations

- TableHead is lightweight with minimal performance impact
- Sticky headers may impact performance on very large tables
- Use CSS containment for better performance with sticky headers
- Memoize sort handlers and callbacks to prevent unnecessary re-renders
- Consider virtualization for tables with many columns

## WCAG Guidelines

This component helps meet the following WCAG 2.1 criteria:

- **1.3.1 Info and Relationships (Level A)**: Proper use of `<thead>`, `<th>`, and `scope` attributes
- **1.3.2 Meaningful Sequence (Level A)**: Logical header-to-data relationships
- **2.4.6 Headings and Labels (Level AA)**: Clear, descriptive header text
- **4.1.2 Name, Role, Value (Level A)**: Proper semantic roles and attributes

## Browser Support

TableHead uses native HTML table elements with full browser support:

- Chrome/Edge: ✅ All versions
- Firefox: ✅ All versions
- Safari: ✅ All versions
- Screen Readers: ✅ Full support with proper markup
- Sticky positioning: ✅ All modern browsers (CSS `position: sticky`)
