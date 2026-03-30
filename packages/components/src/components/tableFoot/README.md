# TableFoot Component

TableFoot is a semantic component for displaying footer sections in tables. It's typically used to show summary information, totals, aggregations, or statistical data that applies to the entire table or specific columns.

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
  TableFoot,
  TableHead,
  TableRow,
} from '@kubit/web-ui-components';

function App() {
  return (
    <Table variant="DEFAULT">
      <TableHead variant="DEFAULT">
        <TableRow variant="HEAD_ROW_DEFAULT">
          <TableCell variant="HEADER_CELL_DEFAULT">Product</TableCell>
          <TableCell variant="HEADER_CELL_DEFAULT">Price</TableCell>
        </TableRow>
      </TableHead>
      <TableBody variant="DEFAULT">
        <TableRow variant="BODY_ROW_DEFAULT">
          <TableCell variant="BODY_CELL_DEFAULT">Product A</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">$499.99</TableCell>
        </TableRow>
        <TableRow variant="BODY_ROW_DEFAULT">
          <TableCell variant="BODY_CELL_DEFAULT">Product B</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">$734.57</TableCell>
        </TableRow>
      </TableBody>
      <TableFoot variant="DEFAULT">
        <TableRow variant="BODY_ROW_DEFAULT">
          <TableCell variant="BODY_CELL_DEFAULT">Total</TableCell>
          <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
            $1,234.56
          </TableCell>
        </TableRow>
      </TableFoot>
    </Table>
  );
}
```

## Variants

The TableFoot component supports a default variant:

```tsx
<TableFoot variant="DEFAULT">
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">Total</TableCell>
    <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
      $1,234.56
    </TableCell>
  </TableRow>
</TableFoot>
```

## Advanced Usage

### Multiple Summary Rows

Display multiple summary calculations:

```tsx
<TableFoot variant="DEFAULT">
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">Subtotal</TableCell>
    <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
      $1,000.00
    </TableCell>
  </TableRow>
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">Tax (10%)</TableCell>
    <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
      $100.00
    </TableCell>
  </TableRow>
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">
      <strong>Total</strong>
    </TableCell>
    <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
      <strong>$1,100.00</strong>
    </TableCell>
  </TableRow>
</TableFoot>
```

### Aggregated Data Across Columns

Show totals for multiple columns:

```tsx
<Table variant="DEFAULT">
  <TableHead variant="DEFAULT">
    <TableRow variant="HEAD_ROW_DEFAULT">
      <TableCell variant="HEADER_CELL_DEFAULT">Category</TableCell>
      <TableCell variant="HEADER_CELL_DEFAULT">Count</TableCell>
      <TableCell variant="HEADER_CELL_DEFAULT">Revenue</TableCell>
      <TableCell variant="HEADER_CELL_DEFAULT">Status</TableCell>
    </TableRow>
  </TableHead>
  <TableBody variant="DEFAULT">{/* Body rows */}</TableBody>
  <TableFoot variant="DEFAULT">
    <TableRow variant="BODY_ROW_DEFAULT">
      <TableCell variant="BODY_CELL_DEFAULT">
        <strong>Total</strong>
      </TableCell>
      <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
        <strong>150</strong>
      </TableCell>
      <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
        <strong>$45,678.90</strong>
      </TableCell>
      <TableCell textAlign="center" variant="BODY_CELL_DEFAULT">
        <strong>—</strong>
      </TableCell>
    </TableRow>
  </TableFoot>
</Table>
```

### With Spanning Cells

Use colspan to span across multiple columns:

```tsx
<TableFoot variant="DEFAULT">
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell colSpan={3} variant="BODY_CELL_DEFAULT">
      <strong>Grand Total</strong>
    </TableCell>
    <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
      <strong>$25,500.00</strong>
    </TableCell>
  </TableRow>
</TableFoot>
```

### Statistical Summary

Display statistical information:

```tsx
<TableFoot variant="DEFAULT">
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">Average</TableCell>
    <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
      $125.50
    </TableCell>
  </TableRow>
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">Minimum</TableCell>
    <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
      $45.00
    </TableCell>
  </TableRow>
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">Maximum</TableCell>
    <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
      $350.00
    </TableCell>
  </TableRow>
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">
      <strong>Total Count</strong>
    </TableCell>
    <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
      <strong>24 items</strong>
    </TableCell>
  </TableRow>
</TableFoot>
```

### Financial Reports

Display financial calculations:

```tsx
<TableFoot variant="DEFAULT">
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">Gross Revenue</TableCell>
    <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
      $50,000.00
    </TableCell>
  </TableRow>
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">Expenses</TableCell>
    <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
      ($15,000.00)
    </TableCell>
  </TableRow>
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">Taxes</TableCell>
    <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
      ($7,000.00)
    </TableCell>
  </TableRow>
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">
      <strong>Net Profit</strong>
    </TableCell>
    <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
      <strong>$28,000.00</strong>
    </TableCell>
  </TableRow>
</TableFoot>
```

### Sales Report Footer

Display sales totals and metrics:

```tsx
<TableFoot variant="DEFAULT">
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">Total Units Sold</TableCell>
    <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
      1,234 units
    </TableCell>
  </TableRow>
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">Total Revenue</TableCell>
    <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
      $98,765.43
    </TableCell>
  </TableRow>
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">
      <strong>Average Sale Price</strong>
    </TableCell>
    <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
      <strong>$80.04</strong>
    </TableCell>
  </TableRow>
</TableFoot>
```

### Inventory Summary

Show inventory totals:

```tsx
<TableFoot variant="DEFAULT">
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell colSpan={2} variant="BODY_CELL_DEFAULT">
      <strong>Total Items in Stock</strong>
    </TableCell>
    <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
      <strong>4,567</strong>
    </TableCell>
  </TableRow>
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell colSpan={2} variant="BODY_CELL_DEFAULT">
      <strong>Total Inventory Value</strong>
    </TableCell>
    <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
      <strong>$123,456.78</strong>
    </TableCell>
  </TableRow>
</TableFoot>
```

### Dynamic Footer with Calculations

Calculate footer values from table data:

```tsx
function DataTable({ data }) {
  const total = data.reduce((sum, item) => sum + item.price, 0);
  const average = total / data.length;
  const count = data.length;

  return (
    <Table variant="DEFAULT">
      <TableHead variant="DEFAULT">
        <TableRow variant="HEAD_ROW_DEFAULT">
          <TableCell variant="HEADER_CELL_DEFAULT">Product</TableCell>
          <TableCell variant="HEADER_CELL_DEFAULT">Price</TableCell>
        </TableRow>
      </TableHead>
      <TableBody variant="DEFAULT">
        {data.map((item) => (
          <TableRow key={item.id} variant="BODY_ROW_DEFAULT">
            <TableCell variant="BODY_CELL_DEFAULT">{item.name}</TableCell>
            <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
              ${item.price.toFixed(2)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFoot variant="DEFAULT">
        <TableRow variant="BODY_ROW_DEFAULT">
          <TableCell variant="BODY_CELL_DEFAULT">Average Price</TableCell>
          <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
            ${average.toFixed(2)}
          </TableCell>
        </TableRow>
        <TableRow variant="BODY_ROW_DEFAULT">
          <TableCell variant="BODY_CELL_DEFAULT">
            <strong>Total ({count} items)</strong>
          </TableCell>
          <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
            <strong>${total.toFixed(2)}</strong>
          </TableCell>
        </TableRow>
      </TableFoot>
    </Table>
  );
}
```

### With Custom Styling

Apply custom styles to footer cells:

```tsx
<TableFoot variant="DEFAULT">
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell
      variant="BODY_CELL_DEFAULT"
      style={{
        backgroundColor: '#f0f0f0',
        fontWeight: 'bold',
      }}
    >
      Grand Total
    </TableCell>
    <TableCell
      textAlign="right"
      variant="BODY_CELL_DEFAULT"
      style={{
        backgroundColor: '#f0f0f0',
        color: '#2c5282',
        fontSize: '18px',
        fontWeight: 'bold',
      }}
    >
      $150,234.56
    </TableCell>
  </TableRow>
</TableFoot>
```

### Percentage Calculations

Show percentage distributions:

```tsx
<TableFoot variant="DEFAULT">
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">Electronics</TableCell>
    <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
      45%
    </TableCell>
    <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
      $22,500
    </TableCell>
  </TableRow>
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">Clothing</TableCell>
    <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
      35%
    </TableCell>
    <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
      $17,500
    </TableCell>
  </TableRow>
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">Other</TableCell>
    <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
      20%
    </TableCell>
    <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
      $10,000
    </TableCell>
  </TableRow>
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">
      <strong>Total</strong>
    </TableCell>
    <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
      <strong>100%</strong>
    </TableCell>
    <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
      <strong>$50,000</strong>
    </TableCell>
  </TableRow>
</TableFoot>
```

## Props

### TableFoot

| Prop          | Type                            | Default        | Description                  |
| ------------- | ------------------------------- | -------------- | ---------------------------- |
| `variant`     | `string`                        | `'DEFAULT'`    | Visual variant of the footer |
| `children`    | `ReactNode`                     | Required       | TableRow components          |
| `id`          | `string`                        | `undefined`    | HTML id attribute            |
| `component`   | `string \| React.ComponentType` | `undefined`    | Custom component to render   |
| `data-testid` | `string`                        | `'table-foot'` | Test identifier              |

## Accessibility

- **Semantic HTML**: TableFoot renders as `<tfoot>` for proper table structure
- **Screen readers**: Footer content is properly announced as table footer
- **Reading order**: Footer is read after body content by screen readers
- **Summary information**: Use footer for totals and summary data that applies to the entire table
- **Scope attributes**: Use proper scope attributes on header cells within footer if needed
- **ARIA labels**: Add aria-label when footer purpose isn't immediately clear

## Best Practices

1. **Placement**: TableFoot should come after TableBody in the DOM
2. **Summary data**: Use for totals, averages, counts, and other aggregate information
3. **Visual emphasis**: Use bold text or styling for important totals
4. **Right-align numbers**: Right-align numeric data for easier comparison
5. **Consistent formatting**: Match number formatting with body cells
6. **Clear labels**: Use descriptive labels for summary rows
7. **Multiple rows**: Use multiple rows when showing different types of summaries
8. **Spanning cells**: Use colspan for labels that apply to multiple columns
9. **Emphasis hierarchy**: Make the most important total (e.g., grand total) most prominent
10. **Dynamic updates**: Recalculate footer values when table data changes

## Common Use Cases

### Financial Tables

Display totals, subtotals, and calculations:

```tsx
<TableFoot variant="DEFAULT">
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">
      <strong>Total Revenue</strong>
    </TableCell>
    <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
      <strong>$1,234,567.89</strong>
    </TableCell>
  </TableRow>
</TableFoot>
```

### E-commerce Shopping Carts

Show cart totals and shipping:

```tsx
<TableFoot variant="DEFAULT">
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">Subtotal</TableCell>
    <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
      $99.99
    </TableCell>
  </TableRow>
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">Shipping</TableCell>
    <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
      $9.99
    </TableCell>
  </TableRow>
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">
      <strong>Total</strong>
    </TableCell>
    <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
      <strong>$109.98</strong>
    </TableCell>
  </TableRow>
</TableFoot>
```

### Data Analysis Tables

Display statistical summaries:

```tsx
<TableFoot variant="DEFAULT">
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">Mean</TableCell>
    <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
      125.5
    </TableCell>
  </TableRow>
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">Median</TableCell>
    <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
      120.0
    </TableCell>
  </TableRow>
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">Standard Deviation</TableCell>
    <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
      15.3
    </TableCell>
  </TableRow>
</TableFoot>
```

### Inventory Reports

Show stock totals:

```tsx
<TableFoot variant="DEFAULT">
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell colSpan={2} variant="BODY_CELL_DEFAULT">
      <strong>Total Items</strong>
    </TableCell>
    <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
      <strong>5,432</strong>
    </TableCell>
  </TableRow>
</TableFoot>
```

## When to Use TableFoot

Use TableFoot when:

- Displaying totals, subtotals, or grand totals
- Showing aggregate calculations (sum, average, count, etc.)
- Presenting statistical summaries
- Displaying financial calculations
- The footer information applies to the entire table or specific columns
- Summary information aids data comprehension

Don't use TableFoot when:

- No summary or aggregate information is needed
- Table contains only a few rows where totals aren't meaningful
- Summary information would be better placed elsewhere (e.g., separate summary card)
- Footer would contain the same type of data as body rows (use TableBody instead)

## Related Components

- **Table**: Parent container for the complete table
- **TableHead**: Header section of the table
- **TableBody**: Body section containing data rows
- **TableRow**: Individual row component
- **TableCell**: Individual cell component
- **TableCaption**: Accessible table caption

## Styling Notes

- TableFoot renders as a `<tfoot>` HTML element
- Default styling typically includes visual separation from body (border, background)
- Footer cells often have bold text or different background color
- Position in DOM vs visual position: TableFoot can appear before TableBody in DOM but will render at the bottom
- Custom styling can be applied through TableCell props or custom CSS

## Performance Considerations

- TableFoot is lightweight and has minimal performance impact
- For tables with dynamic calculations, memoize computed values
- Use React.memo for footer components with expensive calculations
- Recalculate footer values only when relevant data changes
- For large datasets, consider using useMemo for aggregations

## HTML Table Structure

Correct table structure with footer:

```tsx
<Table>
  <TableCaption>Sales Report Q4 2025</TableCaption>
  <TableHead>...</TableHead>
  <TableBody>...</TableBody>
  <TableFoot>...</TableFoot>
</Table>
```

Note: While TableFoot appears last in the code, browsers may render it visually before or after TableBody depending on styling. The semantic meaning remains: it contains summary information.
