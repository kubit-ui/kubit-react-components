# TableDivider Component

TableDivider is a visual separator component used to organize and group rows within table bodies. It creates clear visual divisions between logical sections of data, improving readability and organization in complex tables.

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
  TableDivider,
  TableRow,
  Tag,
} from '@kubit/web-ui-components';
import { ICONS } from '@kubit/web-ui-components/icons';

function App() {
  return (
    <Table variant="DEFAULT">
      <TableBody variant="DEFAULT">
        <TableRow variant="BODY_ROW_DEFAULT">
          <TableCell variant="BODY_CELL_DEFAULT">Product A</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Electronics</TableCell>
        </TableRow>

        <TableDivider variant="DEFAULT">
          <Tag
            icon={ICONS.FOLDER}
            label="Home Appliances"
            variant="INFORMATIVE"
          />
        </TableDivider>

        <TableRow variant="BODY_ROW_DEFAULT">
          <TableCell variant="BODY_CELL_DEFAULT">Product B</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Home Appliances</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
```

## Variants

The TableDivider component supports a default variant:

```tsx
<TableDivider variant="DEFAULT">
  <Tag icon={ICONS.PLACEHOLDER} label="Section Label" variant="INFORMATIVE" />
</TableDivider>
```

## Advanced Usage

### With Category Tags

Use tags to indicate different categories or sections:

```tsx
<Table variant="DEFAULT">
  <TableBody variant="DEFAULT">
    <TableRow variant="BODY_ROW_DEFAULT">
      <TableCell variant="BODY_CELL_DEFAULT">Laptop</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">$1,299</TableCell>
    </TableRow>

    <TableDivider variant="DEFAULT">
      <Tag icon={ICONS.FOLDER} label="Electronics" variant="PRIMARY" />
    </TableDivider>

    <TableRow variant="BODY_ROW_DEFAULT">
      <TableCell variant="BODY_CELL_DEFAULT">Mouse</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">$29</TableCell>
    </TableRow>

    <TableDivider variant="DEFAULT">
      <Tag icon={ICONS.FOLDER} label="Books" variant="SECONDARY" />
    </TableDivider>

    <TableRow variant="BODY_ROW_DEFAULT">
      <TableCell variant="BODY_CELL_DEFAULT">Novel</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">$15</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### With Status Tags

Indicate status or state changes with status tags:

```tsx
<TableDivider variant="DEFAULT">
  <Tag icon={ICONS.CHECK_CIRCLE} label="Active Items" variant="SUCCESS" />
</TableDivider>

<TableDivider variant="DEFAULT">
  <Tag icon={ICONS.WARNING} label="Pending Review" variant="WARNING" />
</TableDivider>

<TableDivider variant="DEFAULT">
  <Tag icon={ICONS.ERROR} label="Archived Items" variant="ERROR" />
</TableDivider>
```

### With Text Only

Simple text dividers for minimal styling:

```tsx
<TableDivider variant="DEFAULT">
  <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Q4 2025 Results</span>
</TableDivider>
```

### With Multiple Elements

Combine multiple elements for richer divider content:

```tsx
<TableDivider variant="DEFAULT">
  <div style={{ alignItems: 'center', display: 'flex', gap: '8px' }}>
    <Tag icon={ICONS.CALENDAR} label="January 2026" variant="INFORMATIVE" />
    <span style={{ color: '#666', fontSize: '12px' }}>15 items</span>
  </div>
</TableDivider>
```

### Time-Based Grouping

Group data by time periods:

```tsx
<Table variant="DEFAULT">
  <TableBody variant="DEFAULT">
    <TableDivider variant="DEFAULT">
      <Tag icon={ICONS.CALENDAR} label="This Week" variant="PRIMARY" />
    </TableDivider>

    <TableRow variant="BODY_ROW_DEFAULT">
      <TableCell variant="BODY_CELL_DEFAULT">Order #1234</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">Jan 10, 2026</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">$125.00</TableCell>
    </TableRow>
    <TableRow variant="BODY_ROW_DEFAULT">
      <TableCell variant="BODY_CELL_DEFAULT">Order #1235</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">Jan 12, 2026</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">$89.50</TableCell>
    </TableRow>

    <TableDivider variant="DEFAULT">
      <Tag icon={ICONS.CALENDAR} label="Last Week" variant="SECONDARY" />
    </TableDivider>

    <TableRow variant="BODY_ROW_DEFAULT">
      <TableCell variant="BODY_CELL_DEFAULT">Order #1233</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">Jan 5, 2026</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Status-Based Grouping

Organize items by their status:

```tsx
<Table variant="DEFAULT">
  <TableBody variant="DEFAULT">
    <TableDivider variant="DEFAULT">
      <Tag
        icon={ICONS.CHECK_CIRCLE}
        label="Completed Tasks"
        variant="SUCCESS"
      />
    </TableDivider>

    <TableRow variant="BODY_ROW_DEFAULT">
      <TableCell variant="BODY_CELL_DEFAULT">Task 1</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">Completed</TableCell>
    </TableRow>

    <TableDivider variant="DEFAULT">
      <Tag icon={ICONS.CLOCK} label="In Progress" variant="WARNING" />
    </TableDivider>

    <TableRow variant="BODY_ROW_DEFAULT">
      <TableCell variant="BODY_CELL_DEFAULT">Task 2</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">In Progress</TableCell>
    </TableRow>

    <TableDivider variant="DEFAULT">
      <Tag icon={ICONS.INFO} label="Not Started" variant="INFORMATIVE" />
    </TableDivider>

    <TableRow variant="BODY_ROW_DEFAULT">
      <TableCell variant="BODY_CELL_DEFAULT">Task 3</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">Not Started</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Priority-Based Grouping

Group items by priority level:

```tsx
<Table variant="DEFAULT">
  <TableBody variant="DEFAULT">
    <TableDivider variant="DEFAULT">
      <Tag icon={ICONS.ALERT} label="High Priority" variant="ERROR" />
    </TableDivider>

    <TableRow variant="BODY_ROW_DEFAULT">
      <TableCell variant="BODY_CELL_DEFAULT">Bug Fix #123</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">Critical</TableCell>
    </TableRow>

    <TableDivider variant="DEFAULT">
      <Tag icon={ICONS.WARNING} label="Medium Priority" variant="WARNING" />
    </TableDivider>

    <TableRow variant="BODY_ROW_DEFAULT">
      <TableCell variant="BODY_CELL_DEFAULT">Feature #456</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">Important</TableCell>
    </TableRow>

    <TableDivider variant="DEFAULT">
      <Tag icon={ICONS.INFO} label="Low Priority" variant="INFORMATIVE" />
    </TableDivider>

    <TableRow variant="BODY_ROW_DEFAULT">
      <TableCell variant="BODY_CELL_DEFAULT">Task #789</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">Nice to have</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### With Item Count

Display the number of items in each section:

```tsx
<TableDivider variant="DEFAULT">
  <div style={{ alignItems: 'center', display: 'flex', gap: '12px' }}>
    <Tag icon={ICONS.FOLDER} label="Active Projects" variant="PRIMARY" />
    <Badge variant="PRIMARY" label="12" />
  </div>
</TableDivider>
```

### Dynamic Dividers

Generate dividers dynamically from data:

```tsx
function GroupedTable({ data }) {
  // Group data by category
  const groupedData = data.reduce((acc, item) => {
    const category = item.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  return (
    <Table variant="DEFAULT">
      <TableBody variant="DEFAULT">
        {Object.entries(groupedData).map(([category, items]) => (
          <>
            <TableDivider key={`divider-${category}`} variant="DEFAULT">
              <Tag icon={ICONS.FOLDER} label={category} variant="INFORMATIVE" />
            </TableDivider>
            {items.map((item) => (
              <TableRow key={item.id} variant="BODY_ROW_DEFAULT">
                <TableCell variant="BODY_CELL_DEFAULT">{item.name}</TableCell>
                <TableCell variant="BODY_CELL_DEFAULT">{item.value}</TableCell>
              </TableRow>
            ))}
          </>
        ))}
      </TableBody>
    </Table>
  );
}
```

### Custom Styled Dividers

Apply custom styles to divider content:

```tsx
<TableDivider variant="DEFAULT">
  <div
    style={{
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
      borderRadius: '4px',
      display: 'flex',
      gap: '8px',
      padding: '4px 8px',
    }}
  >
    <Icon icon={ICONS.STAR} size="SMALL" />
    <span style={{ fontSize: '13px', fontWeight: '600' }}>
      Featured Products
    </span>
  </div>
</TableDivider>
```

## Props

### TableDivider

| Prop          | Type                            | Default           | Description                       |
| ------------- | ------------------------------- | ----------------- | --------------------------------- |
| `variant`     | `string`                        | `'DEFAULT'`       | Visual variant of the divider     |
| `children`    | `ReactNode`                     | Required          | Content to display in the divider |
| `id`          | `string`                        | `undefined`       | HTML id attribute                 |
| `component`   | `string \| React.ComponentType` | `undefined`       | Custom component to render        |
| `data-testid` | `string`                        | `'table-divider'` | Test identifier                   |

## Accessibility

- **Semantic structure**: TableDivider renders as a table row section for proper table structure
- **Screen readers**: Content within dividers is announced by screen readers
- **Visual hierarchy**: Use appropriate tag variants to convey meaning (success, warning, error)
- **Descriptive labels**: Ensure divider content clearly describes the section it introduces
- **Keyboard navigation**: Dividers don't interfere with table keyboard navigation

## Best Practices

1. **Clear labeling**: Use descriptive labels that clearly identify the section
2. **Consistent styling**: Use the same tag variant for similar types of dividers
3. **Logical grouping**: Group related data together under meaningful dividers
4. **Minimal dividers**: Don't overuse - only divide when it adds clarity
5. **Tag variants**: Use appropriate variants (SUCCESS for completed, WARNING for pending, etc.)
6. **Icon selection**: Choose icons that reinforce the divider's meaning
7. **Item counts**: Include counts when helpful for understanding section size
8. **Visual hierarchy**: More important sections can use more prominent tag variants
9. **Responsive design**: Ensure divider content adapts well to smaller screens
10. **Dynamic content**: Update divider labels when section content changes

## Common Use Cases

### E-commerce Product Listings

Group products by category:

```tsx
<TableDivider variant="DEFAULT">
  <Tag icon={ICONS.LAPTOP} label="Electronics" variant="PRIMARY" />
</TableDivider>
```

### Project Management

Group tasks by status or sprint:

```tsx
<TableDivider variant="DEFAULT">
  <Tag icon={ICONS.CALENDAR} label="Sprint 23" variant="INFORMATIVE" />
</TableDivider>
```

### Financial Reports

Group transactions by time period:

```tsx
<TableDivider variant="DEFAULT">
  <Tag icon={ICONS.CALENDAR} label="Q4 2025" variant="PRIMARY" />
</TableDivider>
```

### User Management

Group users by role or department:

```tsx
<TableDivider variant="DEFAULT">
  <Tag icon={ICONS.USERS} label="Administrators" variant="PRIMARY" />
</TableDivider>
```

### Inventory Management

Group items by location or status:

```tsx
<TableDivider variant="DEFAULT">
  <Tag icon={ICONS.LOCATION} label="Warehouse A" variant="INFORMATIVE" />
</TableDivider>
```

## When to Use TableDivider

Use TableDivider when:

- Tables contain multiple logical groups of related data
- You need to separate items by category, status, or time period
- Visual organization improves data comprehension
- Sections have distinct meanings or purposes
- You want to show counts or metadata for each group

Don't use TableDivider when:

- Tables have only a few rows
- All data is homogeneous and doesn't need grouping
- Alternative grouping methods (like alternating row colors) are sufficient
- The table is already visually clear without divisions

## Related Components

- **Table**: Parent container for the complete table
- **TableBody**: Container where TableDivider is used
- **TableRow**: Data rows that are grouped by dividers
- **TableCell**: Individual cells within rows
- **Tag**: Commonly used within dividers for labeling

## Styling Notes

- TableDivider renders as a table row (`<tr>`) containing a single cell that spans all columns
- The cell has special styling to distinguish it from regular table rows
- Content is typically centered or left-aligned depending on design requirements
- Default styling provides visual separation through background color and spacing
- Custom styling can be applied to children elements for additional customization

## Performance Considerations

- TableDivider is a lightweight component with minimal performance impact
- When using many dividers with dynamic content, consider memoization
- For very large tables with grouping, consider virtualization techniques
- Dynamic divider generation should be optimized when data changes frequently
