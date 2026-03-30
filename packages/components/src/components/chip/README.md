# Chip Component

A versatile chip component for displaying compact information, tags, filters, or interactive elements. Chips can include icons, labels, close buttons, and support range displays.

## Features

- **Multiple variants**: Customizable through the theme system
- **Icon support**: Left icon, close icon, error icon, and range icon
- **Range display**: Show value ranges with custom separators
- **State management**: Default, error, and disabled states
- **Error feedback**: Display error messages with custom icons
- **Accessibility**: Proper ARIA attributes and keyboard navigation
- **Flexible content**: Support for text and custom JSX elements

## Basic Usage

### Simple Chip

```tsx
import { Chip } from '@/components/chip';

function MyComponent() {
  return <Chip variant="DEFAULT" label="Active" />;
}
```

### Chip with Icon

```tsx
import { ICONS } from '@/assets/icons';
import { Chip } from '@/components/chip';

function MyComponent() {
  return <Chip variant="DEFAULT" label="New Message" leftIcon={ICONS.MAIL} />;
}
```

### Chip with Close Button

```tsx
import { ICONS } from '@/assets/icons';
import { Chip } from '@/components/chip';

function MyComponent() {
  return <Chip variant="DEFAULT" label="JavaScript" closeIcon={ICONS.CLOSE} />;
}
```

## Range Chip

Display value ranges with custom separators:

```tsx
import { ICONS } from '@/assets/icons';
import { Chip } from '@/components/chip';

function MyComponent() {
  return (
    <Chip
      variant="DEFAULT"
      range={[
        { label: '$100', key: 'min' },
        { label: '$500', key: 'max' },
      ]}
      rangeSeparator="to"
      rangeIcon={ICONS.ARROW_RIGHT}
    />
  );
}
```

## Error State

Show error feedback with custom messages:

```tsx
import { ICONS } from '@/assets/icons';
import { Chip } from '@/components/chip';

function MyComponent() {
  return (
    <Chip
      variant="DEFAULT"
      label="Invalid Tag"
      state="error"
      errorMessage="This tag is not valid"
      errorIcon={ICONS.ERROR}
    />
  );
}
```

## Disabled State

```tsx
import { Chip } from '@/components/chip';

function MyComponent() {
  return <Chip variant="DEFAULT" label="Disabled" state="disabled" />;
}
```

## Props

### ChipProps

| Prop                | Type                                 | Required | Default     | Description                                |
| ------------------- | ------------------------------------ | -------- | ----------- | ------------------------------------------ |
| `variant`           | `string`                             | No       | -           | Visual variant from theme configuration    |
| `label`             | `string \| CommonTextProps`          | No       | -           | Main text content of the chip              |
| `leftIcon`          | `string \| CommonIconProps`          | No       | -           | Icon displayed on the left side            |
| `closeIcon`         | `string \| CommonIconProps`          | No       | -           | Close/remove icon (makes chip dismissible) |
| `errorIcon`         | `string \| CommonIconProps`          | No       | -           | Icon displayed in error state              |
| `errorMessage`      | `string \| CommonTextProps`          | No       | -           | Error message text                         |
| `range`             | `RangeItem[]`                        | No       | -           | Array of range items for range display     |
| `rangeIcon`         | `ElementOrIconProps`                 | No       | -           | Icon between range items                   |
| `rangeSeparator`    | `string \| CommonTextProps`          | No       | `"to"`      | Text separator between range items         |
| `state`             | `'default' \| 'error' \| 'disabled'` | No       | `'default'` | Current state of the chip                  |
| `additionalClasses` | `Partial<ChipCssClasses>`            | No       | -           | Additional CSS classes for customization   |
| `data-*`            | `string`                             | No       | -           | Custom data attributes                     |

### RangeItem

| Prop    | Type     | Required | Description                          |
| ------- | -------- | -------- | ------------------------------------ |
| `label` | `string` | Yes      | Text to display for this range item  |
| `key`   | `string` | No       | Unique identifier for the range item |

## Common Patterns

### Tag List

Display a collection of removable tags:

```tsx
import { useState } from 'react';

import { ICONS } from '@/assets/icons';
import { Chip } from '@/components/chip';

function TagList() {
  const [tags, setTags] = useState([
    { id: 1, label: 'React' },
    { id: 2, label: 'TypeScript' },
    { id: 3, label: 'Rslib' },
  ]);

  const removeTag = (id: number) => {
    setTags(tags.filter((tag) => tag.id !== id));
  };

  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {tags.map((tag) => (
        <Chip
          key={tag.id}
          variant="DEFAULT"
          label={tag.label}
          closeIcon={{
            icon: ICONS.CLOSE,
            altText: `Remove ${tag.label}`,
            onClick: () => removeTag(tag.id),
          }}
        />
      ))}
    </div>
  );
}
```

### Filter Chips

Interactive filter chips with selection state:

```tsx
import { useState } from 'react';

import { Chip } from '@/components/chip';

function FilterChips() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const filters = ['All', 'Active', 'Pending', 'Completed'];

  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter],
    );
  };

  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      {filters.map((filter) => (
        <Chip
          key={filter}
          variant={selectedFilters.includes(filter) ? 'SELECTED' : 'DEFAULT'}
          label={filter}
          onClick={() => toggleFilter(filter)}
        />
      ))}
    </div>
  );
}
```

### Price Range Chip

Display price or numeric ranges:

```tsx
import { ICONS } from '@/assets/icons';
import { Chip } from '@/components/chip';

function PriceRangeChip() {
  return (
    <Chip
      variant="DEFAULT"
      range={[
        { label: '$50', key: 'min' },
        { label: '$200', key: 'max' },
      ]}
      rangeSeparator="to"
      rangeIcon={ICONS.ARROW_RIGHT}
    />
  );
}
```

### Status Chips

Display different status indicators:

```tsx
import { ICONS } from '@/assets/icons';
import { Chip } from '@/components/chip';

function StatusChips() {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Chip variant="SUCCESS" label="Active" leftIcon={ICONS.CHECK_CIRCLE} />
      <Chip variant="WARNING" label="Pending" leftIcon={ICONS.CLOCK} />
      <Chip
        variant="ERROR"
        label="Inactive"
        state="error"
        leftIcon={ICONS.ERROR}
      />
    </div>
  );
}
```

## Simplified Props Usage

You can pass strings directly for text and icon props instead of objects:

```tsx
// ✅ Simplified (recommended)
<Chip
  label="Simple tag"
  rangeSeparator="to"
  errorMessage="Error text"
/>

// ✅ Also valid with full object
<Chip
  label={{ content: "Complex tag" }}
  rangeSeparator={{ content: "to" }}
  errorMessage={{ content: "Error text" }}
/>
```

For icons:

```tsx
// ✅ Simplified
<Chip
  leftIcon={ICONS.STAR}
  closeIcon={ICONS.CLOSE}
/>

// ✅ Also valid with full object
<Chip
  leftIcon={{ icon: ICONS.STAR, altText: "Star icon" }}
  closeIcon={{ icon: ICONS.CLOSE, altText: "Remove" }}
/>
```

## Accessibility

### Keyboard Navigation

- Chips with interactive elements (close button) should be keyboard accessible
- Use `Tab` to navigate between chips
- Use `Enter` or `Space` to activate interactive elements

### ARIA Attributes

The component automatically handles:

- `data-state`: Indicates the current state (default, error, disabled)
- Close icon includes appropriate `alt` text for screen readers
- Error messages are associated with the chip

### Best Practices

1. **Provide meaningful labels**: Use clear, concise text that describes the chip's purpose
2. **Use alt text for icons**: Always provide alternative text for icons used in close buttons
3. **Avoid too many chips**: Limit the number of visible chips to maintain readability
4. **Consistent interaction**: Make sure all chips in a group behave consistently
5. **Clear visual states**: Ensure error and disabled states are visually distinct

### Close Button Accessibility

```tsx
<Chip
  label="Removable Tag"
  closeIcon={{
    icon: ICONS.CLOSE,
    altText: 'Remove Removable Tag', // Descriptive alt text
  }}
/>
```

### Error State Accessibility

```tsx
<Chip
  label="Invalid Input"
  state="error"
  errorMessage="This value is not allowed"
  errorIcon={ICONS.ERROR}
/>
```

## Theming

Chips support multiple variants through the theme system. Common variants include:

- `DEFAULT`: Standard chip appearance
- `PRIMARY`: Primary theme color
- `SECONDARY`: Secondary theme color
- `SUCCESS`: Success/positive state
- `WARNING`: Warning state
- `ERROR`: Error/negative state
- `SELECTED`: Selected/active state

Consult your theme configuration for available variants.

## Best Practices

1. **Use appropriate states**: Apply error state only when there's actual validation feedback
2. **Keep labels concise**: Chip labels should be short and scannable
3. **Group related chips**: Use consistent spacing and layout for chip groups
4. **Make interactions clear**: If a chip is clickable or removable, ensure visual affordance
5. **Limit chip usage**: Too many chips can overwhelm the interface
6. **Consider mobile**: Ensure chips are touch-friendly on mobile devices
7. **Use icons purposefully**: Icons should enhance meaning, not add clutter
8. **Provide feedback**: When chips are interactive, provide visual feedback on interaction
9. **Accessible colors**: Ensure sufficient contrast for text and background colors
10. **Test with screen readers**: Verify that chip content and interactions are properly announced

## Testing

When testing components that use Chip:

```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Chip } from '@/components/chip';

test('renders chip with label', () => {
  render(<Chip label="Test Tag" />);
  expect(screen.getByText('Test Tag')).toBeInTheDocument();
});

test('calls onClick when close icon is clicked', async () => {
  const handleClose = vi.fn();
  render(
    <Chip
      label="Removable"
      closeIcon={{
        icon: ICONS.CLOSE,
        altText: 'Remove',
        onClick: handleClose,
      }}
    />,
  );

  await userEvent.click(screen.getByAltText('Remove'));
  expect(handleClose).toHaveBeenCalledTimes(1);
});

test('displays error message in error state', () => {
  render(<Chip label="Error Chip" state="error" errorMessage="Error text" />);
  expect(screen.getByText('Error text')).toBeInTheDocument();
});
```
