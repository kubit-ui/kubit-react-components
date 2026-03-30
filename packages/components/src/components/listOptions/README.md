# ListOptions Component

The ListOptions component is a versatile list component for displaying selectable or navigational options. It provides keyboard navigation via roving focus, multi-select support, option highlighting, and comprehensive accessibility features. Perfect for dropdowns, menus, search results, and selection lists.

## Features

- **Multiple Types**: Selection and navigation modes
- **Keyboard Navigation**: Full roving focus support with arrow keys
- **Multi-Select**: Support for selecting multiple options
- **Option Highlighting**: Visual highlighting with character search
- **Accessibility**: Complete ARIA attributes and keyboard support
- **Option States**: Selected, disabled, and highlighted states
- **Custom Icons**: Configurable checked icons for selections
- **Flexible Rendering**: Custom list component support
- **Title Support**: Optional title/header for the list
- **Custom Content**: Support for additional content above options

## Usage

### Basic Example

```tsx
import { ListOptions } from '@kubit/components';

function Example() {
  const options = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
  ];

  return (
    <ListOptions
      options={options}
      variant="DEFAULT"
      type="selection"
      onOptionClick={(value) => console.log('Selected:', value)}
    />
  );
}
```

### With Selected Value

```tsx
import { useState } from 'react';

import { ListOptions } from '@kubit/components';

function Example() {
  const [selected, setSelected] = useState(2);

  const options = [
    { label: 'Apple', value: 1 },
    { label: 'Banana', value: 2 },
    { label: 'Cherry', value: 3 },
  ];

  return (
    <ListOptions
      options={options}
      variant="DEFAULT"
      type="selection"
      selectedValue={selected}
      onOptionClick={(value) => setSelected(Number(value))}
    />
  );
}
```

### Multi-Select

```tsx
import { useState } from 'react';

import { ListOptions } from '@kubit/components';

function Example() {
  const [selectedItems, setSelectedItems] = useState<number[]>([1, 3]);

  const options = [
    { label: 'JavaScript', value: 1 },
    { label: 'TypeScript', value: 2 },
    { label: 'Python', value: 3 },
    { label: 'Java', value: 4 },
  ];

  const handleSelect = (value: string) => {
    const numValue = Number(value);
    setSelectedItems((prev) =>
      prev.includes(numValue)
        ? prev.filter((v) => v !== numValue)
        : [...prev, numValue],
    );
  };

  return (
    <ListOptions
      options={options}
      variant="DEFAULT"
      type="selection"
      multiSelect
      selectedValue={selectedItems}
      onOptionClick={handleSelect}
      checkedIcon={{ icon: 'CHECK_ICON' }}
    />
  );
}
```

### With Title

```tsx
import { ListOptions } from '@kubit/components';

function Example() {
  const options = [
    { label: 'New York', value: 'ny' },
    { label: 'Los Angeles', value: 'la' },
    { label: 'Chicago', value: 'chi' },
  ];

  return (
    <ListOptions
      options={options}
      variant="DEFAULT"
      type="selection"
      title="Select a City"
      onOptionClick={(value) => console.log(value)}
    />
  );
}
```

### Navigation Mode

```tsx
import { ListOptions } from '@kubit/components';

function Example() {
  const options = [
    { label: 'Dashboard', value: '/dashboard', icon: { icon: 'DASHBOARD' } },
    { label: 'Profile', value: '/profile', icon: { icon: 'USER' } },
    { label: 'Settings', value: '/settings', icon: { icon: 'SETTINGS' } },
  ];

  return (
    <ListOptions
      options={options}
      variant="SIDE_MENU_SECTION"
      type="navigation"
      onOptionClick={(value) => (window.location.href = value)}
    />
  );
}
```

### With Disabled Options

```tsx
import { ListOptions } from '@kubit/components';

function Example() {
  const options = [
    { label: 'Available', value: 1 },
    { label: 'Not Available', value: 2, disabled: true },
    { label: 'Coming Soon', value: 3, disabled: true },
    { label: 'Available', value: 4 },
  ];

  return (
    <ListOptions
      options={options}
      variant="DEFAULT"
      type="selection"
      onOptionClick={(value) => console.log(value)}
    />
  );
}
```

## Props

### ListOptionsProps

| Prop                       | Type                          | Required | Default          | Description                            |
| -------------------------- | ----------------------------- | -------- | ---------------- | -------------------------------------- |
| `options`                  | `ListOptionsOptionProps[]`    | Yes      | -                | Array of options to display            |
| `variant`                  | `ListOptionsVariantType`      | No       | -                | Visual variant of the list             |
| `type`                     | `'selection' \| 'navigation'` | No       | `'selection'`    | Type of list behavior                  |
| `optionVariant`            | `string`                      | No       | -                | Variant to apply to all options        |
| `highlightedOptionVariant` | `string`                      | No       | -                | Variant for highlighted options        |
| `selectedValue`            | `string \| number \| array`   | No       | -                | Currently selected value(s)            |
| `multiSelect`              | `boolean`                     | No       | `false`          | Enable multi-selection mode            |
| `onOptionClick`            | `(value, event) => void`      | No       | -                | Click handler for options              |
| `title`                    | `CommonTextProps \| string`   | No       | -                | Title/header for the list              |
| `content`                  | `React.ReactNode`             | No       | -                | Custom content above options           |
| `checkedIcon`              | `CommonIconProps`             | No       | -                | Icon for selected items (multi-select) |
| `charsHighlighted`         | `string`                      | No       | -                | Characters to highlight in options     |
| `caseSensitive`            | `boolean`                     | No       | `false`          | Case-sensitive highlight matching      |
| `optionsContainerArias`    | `object`                      | No       | -                | ARIA attributes for options container  |
| `roveFocus`                | `UseRoveFocusProps`           | No       | -                | Custom roving focus configuration      |
| `listComponent`            | `string`                      | No       | -                | Custom HTML element for list container |
| `id`                       | `string`                      | No       | Auto-generated   | Custom ID for the list                 |
| `index`                    | `number`                      | No       | `0`              | Starting index for roving focus        |
| `cssClasses`               | `object`                      | No       | -                | Custom CSS classes                     |
| `data-testid`              | `string`                      | No       | `'list-options'` | Test ID for testing                    |

### ListOptionsOptionProps

| Prop          | Type                        | Required | Description                    |
| ------------- | --------------------------- | -------- | ------------------------------ |
| `label`       | `CommonTextProps \| string` | Yes      | The option label text          |
| `value`       | `string \| number`          | No       | The option value               |
| `sublabel`    | `CommonTextProps \| string` | No       | Secondary label text           |
| `icon`        | `CommonIconProps`           | No       | Icon to display with option    |
| `disabled`    | `boolean`                   | No       | Whether option is disabled     |
| `highlighted` | `boolean`                   | No       | Whether option is highlighted  |
| `variant`     | `string`                    | No       | Custom variant for this option |

## Variants

The ListOptions component supports multiple visual variants:

### DEFAULT

Standard list options style.

```tsx
<ListOptions options={options} variant="DEFAULT" />
```

### INPUT_DROPDOWN_DEFAULT

Style for input dropdown lists.

```tsx
<ListOptions options={options} variant="INPUT_DROPDOWN_DEFAULT" />
```

### INPUT_DROPDOWN_SECTION

Style for sectioned dropdown lists.

```tsx
<ListOptions options={options} variant="INPUT_DROPDOWN_SECTION" />
```

### INPUT_SEARCH

Style for search result lists.

```tsx
<ListOptions options={options} variant="INPUT_SEARCH" />
```

### CODE_VIEWER_SUBTHEME

Style for code viewer contexts.

```tsx
<ListOptions options={options} variant="CODE_VIEWER_SUBTHEME" />
```

### SIDE_MENU_SECTION

Style for side menu navigation.

```tsx
<ListOptions options={options} variant="SIDE_MENU_SECTION" type="navigation" />
```

### DROPDOWN_SELECTED_SECTION

Style for dropdown with selected section.

```tsx
<ListOptions options={options} variant="DROPDOWN_SELECTED_SECTION" />
```

## Types

### Selection Type

Used for selecting one or multiple items from a list.

```tsx
<ListOptions options={options} type="selection" selectedValue={selectedValue} />
```

### Navigation Type

Used for navigational menu items.

```tsx
<ListOptions
  options={menuItems}
  type="navigation"
  onOptionClick={(value) => navigate(value)}
/>
```

## Common Patterns

### Dropdown Select

```tsx
import { useState } from 'react';

import { ListOptions } from '@kubit/components';

function DropdownSelect() {
  const [selected, setSelected] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { label: 'Small', value: 1 },
    { label: 'Medium', value: 2 },
    { label: 'Large', value: 3 },
    { label: 'X-Large', value: 4 },
  ];

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Select Size</button>
      {isOpen && (
        <ListOptions
          options={options}
          variant="INPUT_DROPDOWN_DEFAULT"
          type="selection"
          selectedValue={selected}
          onOptionClick={(value) => {
            setSelected(Number(value));
            setIsOpen(false);
          }}
        />
      )}
    </div>
  );
}
```

### Search Results

```tsx
import { useState } from 'react';

import { ListOptions } from '@kubit/components';

function SearchResults() {
  const [search, setSearch] = useState('');

  const allOptions = [
    { label: 'JavaScript', value: 'js' },
    { label: 'TypeScript', value: 'ts' },
    { label: 'Python', value: 'py' },
    { label: 'Java', value: 'java' },
  ];

  const filteredOptions = allOptions.filter((opt) =>
    opt.label.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />
      {filteredOptions.length > 0 && (
        <ListOptions
          options={filteredOptions}
          variant="INPUT_SEARCH"
          type="selection"
          charsHighlighted={search}
          onOptionClick={(value) => console.log('Selected:', value)}
        />
      )}
    </div>
  );
}
```

### Multi-Select with Tags

```tsx
import { useState } from 'react';

import { ListOptions } from '@kubit/components';

function MultiSelectTags() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const options = [
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Angular', value: 'angular' },
    { label: 'Svelte', value: 'svelte' },
  ];

  const handleToggle = (value: string) => {
    setSelectedTags((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  };

  return (
    <div>
      <div>
        {selectedTags.map((tag) => (
          <span
            key={tag}
            style={{ margin: '4px', padding: '4px 8px', background: '#e0e0e0' }}
          >
            {tag}
            <button onClick={() => handleToggle(tag)}>×</button>
          </span>
        ))}
      </div>
      <ListOptions
        options={options}
        variant="DEFAULT"
        type="selection"
        multiSelect
        selectedValue={selectedTags}
        onOptionClick={handleToggle}
        checkedIcon={{ icon: 'CHECK' }}
      />
    </div>
  );
}
```

### Categorized Options

```tsx
import { ListOptions } from '@kubit/components';

function CategorizedOptions() {
  const fruits = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Orange', value: 'orange' },
  ];

  const vegetables = [
    { label: 'Carrot', value: 'carrot' },
    { label: 'Broccoli', value: 'broccoli' },
    { label: 'Spinach', value: 'spinach' },
  ];

  return (
    <div>
      <ListOptions
        options={fruits}
        variant="DROPDOWN_SELECTED_SECTION"
        type="selection"
        title="Fruits"
        onOptionClick={(value) => console.log('Fruit:', value)}
      />
      <ListOptions
        options={vegetables}
        variant="DROPDOWN_SELECTED_SECTION"
        type="selection"
        title="Vegetables"
        onOptionClick={(value) => console.log('Vegetable:', value)}
      />
    </div>
  );
}
```

### Navigation Menu

```tsx
import { ListOptions } from '@kubit/components';

function NavigationMenu() {
  const menuItems = [
    {
      label: 'Home',
      value: '/',
      icon: { icon: 'HOME' },
    },
    {
      label: 'Products',
      value: '/products',
      icon: { icon: 'PRODUCTS' },
    },
    {
      label: 'About',
      value: '/about',
      icon: { icon: 'INFO' },
    },
    {
      label: 'Contact',
      value: '/contact',
      icon: { icon: 'MAIL' },
      disabled: true,
    },
  ];

  return (
    <nav>
      <ListOptions
        options={menuItems}
        variant="SIDE_MENU_SECTION"
        type="navigation"
        selectedValue={window.location.pathname}
        onOptionClick={(value) => (window.location.href = value)}
      />
    </nav>
  );
}
```

### With Sublabels

```tsx
import { ListOptions } from '@kubit/components';

function OptionsWithSublabels() {
  const options = [
    {
      label: 'Pro Plan',
      sublabel: '$19/month',
      value: 'pro',
    },
    {
      label: 'Business Plan',
      sublabel: '$49/month',
      value: 'business',
    },
    {
      label: 'Enterprise',
      sublabel: 'Contact us',
      value: 'enterprise',
    },
  ];

  return (
    <ListOptions
      options={options}
      variant="DEFAULT"
      type="selection"
      title="Choose Your Plan"
      onOptionClick={(value) => console.log('Selected plan:', value)}
    />
  );
}
```

### Custom Content Header

```tsx
import { ListOptions } from '@kubit/components';

function ListWithHeader() {
  const options = [
    { label: 'Recent File 1.pdf', value: 1 },
    { label: 'Recent File 2.docx', value: 2 },
    { label: 'Recent File 3.xlsx', value: 3 },
  ];

  return (
    <ListOptions
      options={options}
      variant="DEFAULT"
      type="selection"
      content={
        <div style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>
          <h3>Recent Files</h3>
          <p style={{ fontSize: '0.875rem', color: '#666' }}>Last 7 days</p>
        </div>
      }
      onOptionClick={(value) => console.log('Open file:', value)}
    />
  );
}
```

## Accessibility

The ListOptions component is built with accessibility as a core feature:

### Keyboard Navigation

Full keyboard support with roving focus:

- **Arrow Up/Down**: Navigate between options
- **Enter/Space**: Select the focused option
- **Tab**: Exit the list
- **Type to search**: Jump to options starting with typed characters

```tsx
<ListOptions
  options={options}
  variant="DEFAULT"
  type="selection"
  roveFocus={{
    currentFocusSelected: 0,
    size: options.length,
  }}
/>
```

### ARIA Attributes

Comprehensive ARIA support:

```tsx
<ListOptions
  options={options}
  variant="DEFAULT"
  type="selection"
  optionsContainerArias={{
    'aria-label': 'Available options',
    'aria-labelledby': 'options-title',
  }}
/>
```

### Screen Reader Support

Each option is properly announced with its state:

```tsx
<ListOptions
  options={[
    { label: 'Option 1', value: 1 },
    { label: 'Option 2 (Selected)', value: 2 },
    { label: 'Option 3 (Disabled)', value: 3, disabled: true },
  ]}
  variant="DEFAULT"
  selectedValue={2}
/>
```

### Focus Management

Proper focus handling for keyboard users:

```tsx
import { useRef } from 'react';

function FocusExample() {
  const listRef = useRef<HTMLDivElement>(null);

  const focusList = () => {
    listRef.current?.focus();
  };

  return (
    <>
      <button onClick={focusList}>Focus List</button>
      <ListOptions ref={listRef} options={options} variant="DEFAULT" />
    </>
  );
}
```

## Best Practices

### 1. Provide Meaningful Labels

```tsx
// ✅ Good - descriptive labels
<ListOptions
  options={[
    { label: 'United States', value: 'us' },
    { label: 'United Kingdom', value: 'uk' },
  ]}
/>

// ❌ Bad - unclear labels
<ListOptions
  options={[
    { label: 'US', value: 'us' },
    { label: 'UK', value: 'uk' },
  ]}
/>
```

### 2. Handle Empty States

```tsx
// ✅ Good - handle empty state
function SmartListOptions({ options }) {
  if (options.length === 0) {
    return <div>No options available</div>;
  }

  return <ListOptions options={options} variant="DEFAULT" />;
}

// ❌ Bad - no empty state handling
<ListOptions options={[]} variant="DEFAULT" />;
```

### 3. Use Appropriate Variants

```tsx
// ✅ Good - variant matches context
<ListOptions
  options={menuItems}
  variant="SIDE_MENU_SECTION"
  type="navigation"
/>

// ❌ Bad - wrong variant for context
<ListOptions
  options={menuItems}
  variant="INPUT_DROPDOWN_DEFAULT"
  type="navigation"
/>
```

### 4. Disable Unavailable Options

```tsx
// ✅ Good - disabled options with reason in sublabel
<ListOptions
  options={[
    { label: 'Available', value: 1 },
    { label: 'Out of Stock', sublabel: 'Available soon', value: 2, disabled: true },
  ]}
/>

// ❌ Bad - no indication why disabled
<ListOptions
  options={[
    { label: 'Item', value: 1 },
    { label: 'Item', value: 2, disabled: true },
  ]}
/>
```

### 5. Manage Selected State Properly

```tsx
// ✅ Good - controlled component
const [selected, setSelected] = useState(1);

<ListOptions
  options={options}
  selectedValue={selected}
  onOptionClick={(value) => setSelected(Number(value))}
/>

// ❌ Bad - uncontrolled with no handler
<ListOptions
  options={options}
  selectedValue={1}
/>
```

### 6. Provide ARIA Labels

```tsx
// ✅ Good - descriptive ARIA labels
<ListOptions
  options={options}
  optionsContainerArias={{
    'aria-label': 'Select a country from the list',
  }}
/>

// ❌ Bad - no ARIA labels
<ListOptions options={options} />
```

### 7. Use Multi-Select Icons

```tsx
// ✅ Good - clear checked indicator
<ListOptions
  options={options}
  multiSelect
  checkedIcon={{ icon: 'CHECK', altText: 'Selected' }}
/>

// ❌ Bad - no checked indicator
<ListOptions
  options={options}
  multiSelect
/>
```

### 8. Handle Long Lists Performance

```tsx
// ✅ Good - virtualize long lists
import { VirtualList } from '@kubit/components';

function LongListOptions({ items }) {
  const chunkedItems = items.slice(0, 50); // Show first 50

  return <ListOptions options={chunkedItems} variant="DEFAULT" />;
}

// ❌ Bad - render thousands of items
<ListOptions options={thousandsOfOptions} />;
```

## Styling

### Custom CSS Classes

```tsx
<ListOptions
  options={options}
  variant="DEFAULT"
  cssClasses={{
    list_options: 'custom-list',
    option: 'custom-option',
  }}
/>
```

### Theme Integration

```tsx
import { useTheme } from '@/hooks/useTheme';

function ThemedListOptions() {
  const theme = useTheme();

  return (
    <ListOptions
      options={options}
      variant="DEFAULT"
      cssClasses={{
        list_options: theme.classes.listOptions,
      }}
    />
  );
}
```

## Testing

### Basic Rendering

```tsx
import { ListOptions } from '@kubit/components';
import { render, screen } from '@testing-library/react';

describe('ListOptions', () => {
  test('renders options', () => {
    const options = [
      { label: 'Option 1', value: 1 },
      { label: 'Option 2', value: 2 },
    ];

    render(<ListOptions options={options} variant="DEFAULT" />);

    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });
});
```

### Selection Testing

```tsx
import userEvent from '@testing-library/user-event';

test('handles option selection', async () => {
  const handleClick = vi.fn();
  const options = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
  ];

  render(
    <ListOptions
      options={options}
      variant="DEFAULT"
      onOptionClick={handleClick}
    />,
  );

  await userEvent.click(screen.getByText('Option 1'));
  expect(handleClick).toHaveBeenCalledWith('1', expect.any(Object));
});
```

### Keyboard Navigation

```tsx
test('navigates with arrow keys', async () => {
  const options = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
  ];

  render(<ListOptions options={options} variant="DEFAULT" />);

  const firstOption = screen.getByText('Option 1');
  firstOption.focus();

  await userEvent.keyboard('{ArrowDown}');
  expect(screen.getByText('Option 2')).toHaveFocus();

  await userEvent.keyboard('{ArrowDown}');
  expect(screen.getByText('Option 3')).toHaveFocus();
});
```

### Disabled State

```tsx
test('respects disabled options', async () => {
  const handleClick = vi.fn();
  const options = [
    { label: 'Option 1', value: 1 },
    { label: 'Disabled', value: 2, disabled: true },
  ];

  render(
    <ListOptions
      options={options}
      variant="DEFAULT"
      onOptionClick={handleClick}
    />,
  );

  await userEvent.click(screen.getByText('Disabled'));
  expect(handleClick).not.toHaveBeenCalled();
});
```

### Accessibility

```tsx
import { axe } from 'vitest-axe';

test('has no accessibility violations', async () => {
  const { container } = render(
    <ListOptions
      options={[
        { label: 'Option 1', value: 1 },
        { label: 'Option 2', value: 2 },
      ]}
      variant="DEFAULT"
      optionsContainerArias={{ 'aria-label': 'Options list' }}
    />,
  );

  expect(await axe(container)).toHaveNoViolations();
});
```

## Related Components

- **Option**: Individual option component used by ListOptions
- **Select**: Dropdown select using ListOptions
- **Menu**: Menu component using ListOptions for navigation
- **Autocomplete**: Search input with ListOptions results
- **Dropdown**: Dropdown container with ListOptions

## Browser Support

The ListOptions component works in all modern browsers:

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance Considerations

### Virtualization for Long Lists

For lists with many options (100+), consider:

```tsx
// For very long lists, limit visible options
const visibleOptions = allOptions.slice(0, 100);

<ListOptions options={visibleOptions} variant="DEFAULT" />;
```

### Memoization

```tsx
import { useMemo } from 'react';

function OptimizedList({ items }) {
  const options = useMemo(
    () =>
      items.map((item) => ({
        label: item.name,
        value: item.id,
      })),
    [items],
  );

  return <ListOptions options={options} variant="DEFAULT" />;
}
```

## Troubleshooting

### Options Not Selectable

**Problem**: Clicking options doesn't work.

**Solution**: Provide `onOptionClick` handler:

```tsx
// ✅ Correct
<ListOptions
  options={options}
  onOptionClick={(value) => console.log(value)}
/>

// ❌ Incorrect - no handler
<ListOptions options={options} />
```

### Keyboard Navigation Not Working

**Problem**: Arrow keys don't navigate.

**Solution**: Ensure focus is on the list:

```tsx
<ListOptions
  options={options}
  variant="DEFAULT"
  roveFocus={{
    currentFocusSelected: 0,
    size: options.length,
  }}
/>
```

### Selected Value Not Showing

**Problem**: Selection doesn't show visually.

**Solution**: Provide `selectedValue` and correct option values:

```tsx
// ✅ Correct - matching types
<ListOptions
  options={[{ label: 'Option', value: 1 }]}
  selectedValue={1}
/>

// ❌ Incorrect - type mismatch
<ListOptions
  options={[{ label: 'Option', value: 1 }]}
  selectedValue="1"
/>
```
