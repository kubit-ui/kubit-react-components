# TableCaption Component

TableCaption provides an accessible caption for tables, describing the table's content and purpose. It can be visually displayed or hidden while remaining accessible to screen readers.

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
      <TableCaption variant="DEFAULT">
        Table 1: Monthly Sales Report
      </TableCaption>
      <TableHead variant="DEFAULT">
        <TableRow variant="HEAD_ROW_DEFAULT">
          <TableCell variant="HEADER_CELL_DEFAULT">Month</TableCell>
          <TableCell variant="HEADER_CELL_DEFAULT">Sales</TableCell>
          <TableCell variant="HEADER_CELL_DEFAULT">Growth</TableCell>
        </TableRow>
      </TableHead>
      <TableBody variant="DEFAULT">
        <TableRow variant="BODY_ROW_DEFAULT">
          <TableCell variant="BODY_CELL_DEFAULT">January</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">$45,000</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">+12%</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
```

## Variants

The TableCaption component supports a default variant:

```tsx
<TableCaption variant="DEFAULT">User Management Dashboard</TableCaption>
```

## Advanced Usage

### With Detailed Description

Provide comprehensive context about the table:

```tsx
<TableCaption variant="DEFAULT">
  User Management: List of active users with their roles and permissions
</TableCaption>
```

### Hidden Caption (Visually Hidden)

Keep caption accessible to screen readers but visually hidden:

```tsx
<TableCaption variant="DEFAULT" hidden={true}>
  This caption is hidden but still accessible to screen readers
</TableCaption>
```

This is useful when:

- The table's purpose is clear from surrounding context
- You want to maintain accessibility without visual clutter
- Design requirements prefer a cleaner appearance

### With Formatted Text

Use rich formatting within the caption:

```tsx
<TableCaption variant="DEFAULT">
  <strong>Product Inventory</strong> - Last updated: January 2026
</TableCaption>
```

### With Semantic Information

Include time-sensitive or contextual information:

```tsx
<TableCaption variant="DEFAULT">
  Q4 2025 Performance Metrics (Updated Daily at 00:00 UTC)
</TableCaption>
```

### Multiple Tables with Captions

Distinguish between related tables on the same page:

```tsx
<>
  <Table variant="DEFAULT">
    <TableCaption variant="DEFAULT">Table 1: Active Users</TableCaption>
    {/* Table content */}
  </Table>

  <Table variant="DEFAULT">
    <TableCaption variant="DEFAULT">Table 2: Inactive Users</TableCaption>
    {/* Table content */}
  </Table>
</>
```

### With Dynamic Content

Update caption based on filters or state:

```tsx
function FilterableTable() {
  const [filter, setFilter] = useState('all');

  return (
    <Table variant="DEFAULT">
      <TableCaption variant="DEFAULT">
        {filter === 'all' ? 'All Products' : `Products filtered by: ${filter}`}
      </TableCaption>
      {/* Table content */}
    </Table>
  );
}
```

### Accessibility-First Approach

Combine visible and hidden information:

```tsx
<TableCaption variant="DEFAULT">
  Customer Orders
  <span style={{ display: 'block', fontSize: '0.875rem', marginTop: '4px' }}>
    Showing 1-10 of 150 results
  </span>
</TableCaption>
```

### With Localization

Support multiple languages:

```tsx
function LocalizedTable({ locale }) {
  const captions = {
    en: 'Employee Directory',
    es: 'Directorio de Empleados',
    fr: 'Répertoire des Employés',
  };

  return (
    <Table variant="DEFAULT">
      <TableCaption variant="DEFAULT">{captions[locale]}</TableCaption>
      {/* Table content */}
    </Table>
  );
}
```

## Props

### TableCaption

| Prop          | Type        | Default           | Description                                               |
| ------------- | ----------- | ----------------- | --------------------------------------------------------- |
| `variant`     | `string`    | `'DEFAULT'`       | Visual variant of the caption                             |
| `children`    | `ReactNode` | Required          | Caption content (text or formatted elements)              |
| `hidden`      | `boolean`   | `false`           | Whether to visually hide the caption (remains accessible) |
| `data-testid` | `string`    | `'table-caption'` | Test identifier                                           |

## Accessibility

- **Always include a caption**: It provides essential context for screen reader users
- **Use the `hidden` prop**: When you need accessibility without visual display
- **Descriptive text**: Write clear, concise descriptions of the table's purpose
- **Placement**: Caption should be the first child of the Table component
- **Dynamic updates**: Update caption text when table content changes (filters, sorting, etc.)
- **Multiple tables**: Ensure each table has a unique, distinguishing caption

## Best Practices

1. **Always provide a caption**: Even if hidden, it's crucial for accessibility
2. **Be descriptive**: Clearly explain what the table contains
3. **Keep it concise**: One or two sentences maximum
4. **Use semantic markup**: Use `<strong>`, `<em>`, etc. for emphasis when needed
5. **Hidden vs visible**: Use `hidden={true}` when context makes the table's purpose obvious
6. **Avoid redundancy**: Don't repeat information already in surrounding headings
7. **Dynamic content**: Update captions when filters or data change
8. **Localization**: Ensure captions are translatable for international users

## When to Use Hidden Captions

Use `hidden={true}` when:

- The table appears directly under a heading that describes it
- Screen space is limited and visual clarity is critical
- The table's purpose is immediately obvious from context
- You're following a design system that minimizes visual clutter

Always use visible captions when:

- The table's purpose might not be immediately clear
- Multiple similar tables appear on the same page
- Users might benefit from additional context or metadata
- Accessibility guidelines require visible identification

## Common Patterns

### Data Table with Metadata

```tsx
<TableCaption variant="DEFAULT">
  Employee Performance - Q4 2025
  <small style={{ display: 'block', marginTop: '4px' }}>
    Data refreshed every 24 hours
  </small>
</TableCaption>
```

### Filtering Information

```tsx
<TableCaption variant="DEFAULT">
  {`Showing ${filteredCount} of ${totalCount} results`}
</TableCaption>
```

### Status Indicators

```tsx
<TableCaption variant="DEFAULT">
  System Status Dashboard
  <span style={{ color: 'green', marginLeft: '8px' }}>
    ● All systems operational
  </span>
</TableCaption>
```

## Related Components

- **Table**: Parent container that should contain the caption
- **TableHead**: Header section of the table
- **TableBody**: Body section containing data rows
- **TableRow**: Individual row in the table
- **TableCell**: Individual cell in a row

## WCAG Guidelines

This component helps meet the following WCAG 2.1 criteria:

- **1.3.1 Info and Relationships (Level A)**: Provides programmatic relationship between caption and table
- **2.4.6 Headings and Labels (Level AA)**: Descriptive caption acts as a label for the table
- **3.2.4 Consistent Identification (Level AA)**: Consistent caption pattern across tables

## Browser Support

TableCaption uses the native HTML `<caption>` element, which is supported in all modern browsers:

- Chrome/Edge: ✅ All versions
- Firefox: ✅ All versions
- Safari: ✅ All versions
- Screen Readers: ✅ Full support (JAWS, NVDA, VoiceOver, TalkBack)
