# TableCell Component

TableCell is the fundamental building block for table data display. It represents individual cells within table rows and supports both header (`th`) and body (`td`) cells with extensive customization options including alignment, spanning, sticky positioning, and accessibility features.

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
      </TableBody>
    </Table>
  );
}
```

## Variants

The TableCell component supports three variants:

### HEADER_CELL_DEFAULT

Primary header cell variant for main column headers:

```tsx
<TableCell variant="HEADER_CELL_DEFAULT">Product Name</TableCell>
```

### HEADER_CELL_SECONDARY

Secondary header cell variant for sub-headers or grouped columns:

```tsx
<TableCell variant="HEADER_CELL_SECONDARY">Subcategory</TableCell>
```

### BODY_CELL_DEFAULT

Standard body cell variant for data display:

```tsx
<TableCell variant="BODY_CELL_DEFAULT">Cell Data</TableCell>
```

## Advanced Usage

### Cell Spanning

#### Column Span (colspan)

Span a cell across multiple columns:

```tsx
<TableRow variant="BODY_ROW_DEFAULT">
  <TableCell variant="BODY_CELL_DEFAULT" colSpan={3}>
    This cell spans 3 columns
  </TableCell>
</TableRow>
```

#### Row Span (rowspan)

Span a cell across multiple rows:

```tsx
<TableRow variant="BODY_ROW_DEFAULT">
  <TableCell variant="BODY_CELL_DEFAULT" rowSpan={2}>
    This cell spans 2 rows
  </TableCell>
  <TableCell variant="BODY_CELL_DEFAULT">Row 1, Col 2</TableCell>
</TableRow>
<TableRow variant="BODY_ROW_DEFAULT">
  <TableCell variant="BODY_CELL_DEFAULT">Row 2, Col 2</TableCell>
</TableRow>
```

### Text Alignment

Align text within cells (useful for numbers, dates, etc.):

```tsx
{
  /* Right-aligned for numbers */
}
<TableCell variant="BODY_CELL_DEFAULT" textAlign="right">
  $1,234.56
</TableCell>;

{
  /* Center-aligned */
}
<TableCell variant="BODY_CELL_DEFAULT" textAlign="center">
  Status
</TableCell>;

{
  /* Left-aligned (default) */
}
<TableCell variant="BODY_CELL_DEFAULT" textAlign="left">
  Description
</TableCell>;
```

### Vertical Alignment

Control vertical alignment of cell content:

```tsx
<TableCell variant="BODY_CELL_DEFAULT" verticalAlign="top">
  Top aligned content
</TableCell>

<TableCell variant="BODY_CELL_DEFAULT" verticalAlign="middle">
  Middle aligned content
</TableCell>

<TableCell variant="BODY_CELL_DEFAULT" verticalAlign="bottom">
  Bottom aligned content
</TableCell>
```

### Sticky Cells

Create sticky columns for horizontal scrolling:

```tsx
{
  /* Sticky left column */
}
<TableCell variant="HEADER_CELL_DEFAULT" sticky="left" left="0">
  Name
</TableCell>;

{
  /* Sticky right column */
}
<TableCell variant="HEADER_CELL_DEFAULT" sticky="right" right="0">
  Actions
</TableCell>;
```

### Width Control

Set specific widths for consistent column sizing:

```tsx
{
  /* Fixed width */
}
<TableCell variant="HEADER_CELL_DEFAULT" width="200px">
  Fixed Width
</TableCell>;

{
  /* Min width */
}
<TableCell variant="HEADER_CELL_DEFAULT" minWidth="150px">
  Min Width
</TableCell>;

{
  /* Max width */
}
<TableCell variant="HEADER_CELL_DEFAULT" maxWidth="300px">
  Max Width
</TableCell>;

{
  /* Combination */
}
<TableCell variant="BODY_CELL_DEFAULT" minWidth="100px" maxWidth="400px">
  Flexible Width
</TableCell>;
```

### Hidden Cells

Hide cells visually while keeping them accessible to screen readers:

```tsx
<TableCell variant="BODY_CELL_DEFAULT" hidden={true}>
  Internal ID: 12345
</TableCell>
```

This is useful for:

- Internal identifiers needed by code but not users
- Data used for sorting/filtering but not displayed
- Maintaining table structure without visual clutter

### Accessibility Features

#### Scope Attribute

Define the scope for header cells:

```tsx
{
  /* Column header */
}
<TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col">
  Product Name
</TableCell>;

{
  /* Row header */
}
<TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="row">
  Q1 2026
</TableCell>;

{
  /* Column group */
}
<TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="colgroup" colSpan={3}>
  Sales Data
</TableCell>;

{
  /* Row group */
}
<TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="rowgroup" rowSpan={4}>
  Region
</TableCell>;
```

#### ARIA Labels

Provide additional context for screen readers:

```tsx
<TableCell
  variant="BODY_CELL_DEFAULT"
  aria-label="Increase of 15.2 percent"
>
  +15.2%
</TableCell>

<TableCell
  variant="BODY_CELL_DEFAULT"
  aria-labelledby="header-sales header-q1"
>
  $45,000
</TableCell>
```

### Interactive Cells

Add click handlers and interactions:

```tsx
function InteractiveTable() {
  const handleCellClick = (value) => {
    console.log('Cell clicked:', value);
  };

  return (
    <TableCell
      variant="BODY_CELL_DEFAULT"
      onClick={() => handleCellClick('Product A')}
      style={{ cursor: 'pointer' }}
    >
      Product A
    </TableCell>
  );
}
```

### Complex Cell Content

Display rich content within cells:

```tsx
{
  /* With icon and text */
}
<TableCell variant="BODY_CELL_DEFAULT">
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <Icon icon="CHECK_CIRCLE" size="SMALL" />
    <span>Active</span>
  </div>
</TableCell>;

{
  /* With badge */
}
<TableCell variant="BODY_CELL_DEFAULT">
  <Badge variant="PRIMARY" label="New" />
</TableCell>;

{
  /* With multiple elements */
}
<TableCell variant="BODY_CELL_DEFAULT">
  <div>
    <strong>John Doe</strong>
    <br />
    <small style={{ color: '#666' }}>john@example.com</small>
  </div>
</TableCell>;
```

### Numeric Data Display

Best practices for displaying numbers:

```tsx
{
  /* Currency */
}
<TableCell variant="BODY_CELL_DEFAULT" textAlign="right">
  $1,234.56
</TableCell>;

{
  /* Percentages */
}
<TableCell variant="BODY_CELL_DEFAULT" textAlign="right">
  +12.5%
</TableCell>;

{
  /* Large numbers with separators */
}
<TableCell variant="BODY_CELL_DEFAULT" textAlign="right">
  1,234,567
</TableCell>;

{
  /* Negative values */
}
<TableCell
  variant="BODY_CELL_DEFAULT"
  textAlign="right"
  style={{ color: 'red' }}
>
  -$45.00
</TableCell>;
```

### Custom Styling

Override default styles with custom CSS:

```tsx
<TableCell
  variant="BODY_CELL_DEFAULT"
  style={{
    backgroundColor: '#f0f0f0',
    fontWeight: 'bold',
    borderLeft: '3px solid blue',
  }}
>
  Highlighted Cell
</TableCell>
```

## Props

### TableCell

| Prop              | Type                                                                      | Default        | Description                                   |
| ----------------- | ------------------------------------------------------------------------- | -------------- | --------------------------------------------- |
| `variant`         | `'HEADER_CELL_DEFAULT' \| 'HEADER_CELL_SECONDARY' \| 'BODY_CELL_DEFAULT'` | Required       | Visual variant of the cell                    |
| `children`        | `ReactNode`                                                               | Required       | Cell content                                  |
| `th`              | `boolean`                                                                 | `false`        | Whether to render as `<th>` instead of `<td>` |
| `scope`           | `'col' \| 'row' \| 'colgroup' \| 'rowgroup'`                              | `undefined`    | Scope attribute for header cells              |
| `colSpan`         | `number`                                                                  | `undefined`    | Number of columns the cell spans              |
| `rowSpan`         | `number`                                                                  | `undefined`    | Number of rows the cell spans                 |
| `hidden`          | `boolean`                                                                 | `false`        | Visually hide the cell but keep it accessible |
| `sticky`          | `boolean \| 'left' \| 'right'`                                            | `undefined`    | Make the cell sticky on horizontal scroll     |
| `textAlign`       | `'left' \| 'center' \| 'right'`                                           | `undefined`    | Horizontal text alignment                     |
| `verticalAlign`   | `'top' \| 'middle' \| 'bottom'`                                           | `undefined`    | Vertical content alignment                    |
| `width`           | `string`                                                                  | `undefined`    | Cell width (e.g., '200px', '20%')             |
| `minWidth`        | `string`                                                                  | `undefined`    | Minimum cell width                            |
| `maxWidth`        | `string`                                                                  | `undefined`    | Maximum cell width                            |
| `height`          | `string`                                                                  | `undefined`    | Cell height                                   |
| `left`            | `string`                                                                  | `undefined`    | Left position for sticky cells                |
| `right`           | `string`                                                                  | `undefined`    | Right position for sticky cells               |
| `top`             | `string`                                                                  | `undefined`    | Top position for sticky cells                 |
| `bottom`          | `string`                                                                  | `undefined`    | Bottom position for sticky cells              |
| `onClick`         | `(event) => void`                                                         | `undefined`    | Click handler                                 |
| `onMouseEnter`    | `(event) => void`                                                         | `undefined`    | Mouse enter handler                           |
| `onMouseLeave`    | `(event) => void`                                                         | `undefined`    | Mouse leave handler                           |
| `aria-label`      | `string`                                                                  | `undefined`    | Accessible label for the cell                 |
| `aria-labelledby` | `string`                                                                  | `undefined`    | ID(s) of elements that label this cell        |
| `component`       | `string \| React.ComponentType`                                           | `undefined`    | Custom component to render instead of default |
| `alignItems`      | `string`                                                                  | `undefined`    | CSS align-items value                         |
| `justifyContent`  | `string`                                                                  | `undefined`    | CSS justify-content value                     |
| `data-testid`     | `string`                                                                  | `'table-cell'` | Test identifier                               |

## Accessibility

- **Use proper scope**: Set `scope` attribute on header cells (`th={true}`)
  - `scope="col"` for column headers
  - `scope="row"` for row headers
  - `scope="colgroup"` for column group headers
  - `scope="rowgroup"` for row group headers
- **ARIA labels**: Use `aria-label` for cells with visual-only content (icons, symbols)
- **Hidden content**: Use `hidden={true}` for data that's needed for accessibility but not visual display
- **Semantic HTML**: Use `th={true}` for header cells, let body cells default to `<td>`
- **Associated headers**: Use `aria-labelledby` to associate data cells with their headers

## Best Practices

1. **Consistent variants**: Use `HEADER_CELL_*` for headers, `BODY_CELL_DEFAULT` for data
2. **Text alignment**: Right-align numbers, left-align text, center-align short labels
3. **Width management**: Set explicit widths on header cells to control column sizing
4. **Sticky columns**: Use sparingly - typically just first and/or last column
5. **Hidden cells**: Only hide truly non-essential visual data
6. **Spanning**: Use sparingly for cleaner table structure
7. **Accessibility first**: Always include proper scope and ARIA attributes for headers
8. **Interactive cells**: Add visual feedback (cursor, hover states) for clickable cells
9. **Content overflow**: Consider using `maxWidth` with text truncation for long content
10. **Performance**: For large tables, consider virtualizing rows rather than rendering all cells

## Common Patterns

### Data Table with Mixed Alignments

```tsx
<TableRow variant="HEAD_ROW_DEFAULT">
  <TableCell variant="HEADER_CELL_DEFAULT" textAlign="left">
    Product
  </TableCell>
  <TableCell variant="HEADER_CELL_DEFAULT" textAlign="center">
    Status
  </TableCell>
  <TableCell variant="HEADER_CELL_DEFAULT" textAlign="right">
    Price
  </TableCell>
  <TableCell variant="HEADER_CELL_DEFAULT" textAlign="right">
    Quantity
  </TableCell>
</TableRow>
```

### Sticky First and Last Columns

```tsx
<TableRow variant="HEAD_ROW_DEFAULT">
  <TableCell variant="HEADER_CELL_DEFAULT" sticky="left" left="0" width="200px">
    Name
  </TableCell>
  <TableCell variant="HEADER_CELL_DEFAULT">Department</TableCell>
  <TableCell variant="HEADER_CELL_DEFAULT">Email</TableCell>
  <TableCell
    variant="HEADER_CELL_DEFAULT"
    sticky="right"
    right="0"
    width="100px"
  >
    Actions
  </TableCell>
</TableRow>
```

### Complex Header Structure

```tsx
<TableHead variant="DEFAULT">
  <TableRow variant="HEAD_ROW_DEFAULT">
    <TableCell variant="HEADER_CELL_DEFAULT" rowSpan={2} th={true} scope="col">
      Product
    </TableCell>
    <TableCell
      variant="HEADER_CELL_DEFAULT"
      colSpan={3}
      th={true}
      scope="colgroup"
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

## Related Components

- **Table**: Parent container for the complete table
- **TableHead**: Container for header rows
- **TableBody**: Container for body rows
- **TableRow**: Parent container for cells
- **TableCaption**: Accessible table description

## WCAG Guidelines

This component helps meet the following WCAG 2.1 criteria:

- **1.3.1 Info and Relationships (Level A)**: Proper use of `th`, `td`, and `scope` attributes
- **1.3.2 Meaningful Sequence (Level A)**: Logical reading order maintained
- **2.4.6 Headings and Labels (Level AA)**: Clear header cells with scope
- **4.1.2 Name, Role, Value (Level A)**: Proper semantic roles and ARIA attributes

## Browser Support

TableCell uses native HTML table elements with full browser support:

- Chrome/Edge: ✅ All versions
- Firefox: ✅ All versions
- Safari: ✅ All versions
- Screen Readers: ✅ Full support with proper ARIA attributes
