# Option Component

The Option component is a versatile selectable list item that can be used in dropdowns, select menus, autocomplete fields, and other selection interfaces. It supports icons, sublabels, multi-select functionality, keyboard navigation, and various visual states including selected, focused, hover, and disabled.

## Features

- **Multiple Variants**: 9 different visual styles for various contexts
- **Selection States**: Support for single and multi-select modes
- **Interactive States**: Hover, focus, selected, and disabled states
- **Icons Support**: Optional icons and checked indicators
- **Sublabel**: Additional descriptive text below the main label
- **Label Highlighting**: Highlight matching characters in search/filter scenarios
- **Keyboard Navigation**: Full keyboard support with Enter and Space keys
- **URL Support**: Can act as a link to navigate to other pages
- **Accessibility**: Comprehensive ARIA attributes support
- **Custom Content**: Extra content slot for additional elements
- **Event Handlers**: onClick, onMouseEnter, onMouseLeave, onFocus, onBlur

## Usage

### Basic Example

```tsx
import { Option } from '@kubit/components';

function Example() {
  const [selected, setSelected] = useState(false);

  return (
    <Option
      label="Option 1"
      variant="INPUT_DROPDOWN"
      selected={selected}
      hover={false}
      onMouseEnter={() => {}}
      onMouseLeave={() => {}}
      onClick={() => setSelected(!selected)}
    />
  );
}
```

### With Icon

```tsx
import { Option } from '@kubit/components';

import { ICONS } from '@/assets/icons';

function Example() {
  return (
    <Option
      label="Settings"
      variant="INPUT_DROPDOWN"
      icon={{ icon: ICONS.SETTINGS, altText: 'Settings' }}
      hover={false}
      onMouseEnter={() => {}}
      onMouseLeave={() => {}}
      onClick={() => console.log('Settings clicked')}
    />
  );
}
```

### With Sublabel

```tsx
import { Option } from '@kubit/components';

function Example() {
  return (
    <Option
      label="John Doe"
      sublabel="john.doe@example.com"
      variant="INPUT_DROPDOWN"
      hover={false}
      onMouseEnter={() => {}}
      onMouseLeave={() => {}}
      onClick={() => console.log('John Doe selected')}
    />
  );
}
```

### Multi-Select with Checked Icon

```tsx
import { Option } from '@kubit/components';

import { ICONS } from '@/assets/icons';

function Example() {
  return (
    <Option
      label="Task 1"
      variant="INPUT_DROPDOWN"
      multiSelect
      selected
      checkedIcon={{ icon: ICONS.CHECK, altText: 'Checked' }}
      hover={false}
      onMouseEnter={() => {}}
      onMouseLeave={() => {}}
      onClick={() => console.log('Task 1 toggled')}
    />
  );
}
```

### Disabled Option

```tsx
import { Option } from '@kubit/components';

function Example() {
  return (
    <Option
      label="Disabled Option"
      variant="INPUT_DROPDOWN"
      disabled
      hover={false}
      onMouseEnter={() => {}}
      onMouseLeave={() => {}}
    />
  );
}
```

### With Highlighted Characters

```tsx
import { Option } from '@kubit/components';

function Example() {
  return (
    <Option
      label="JavaScript"
      labelCharsHighlighted="java"
      variant="INPUT_OPTION_HIGHTLIGHTED"
      hover={false}
      onMouseEnter={() => {}}
      onMouseLeave={() => {}}
      onClick={() => console.log('JavaScript selected')}
    />
  );
}
```

## Props

### OptionProps

| Prop                    | Type                        | Required | Default    | Description                               |
| ----------------------- | --------------------------- | -------- | ---------- | ----------------------------------------- |
| `label`                 | `ReactNode`                 | Yes      | -          | The main text content of the option       |
| `variant`               | `OptionVariantType`         | No       | -          | Visual variant of the option              |
| `hover`                 | `boolean`                   | Yes      | -          | Whether the option is in hover state      |
| `onMouseEnter`          | `MouseEventHandler`         | Yes      | -          | Handler for mouse enter event             |
| `onMouseLeave`          | `MouseEventHandler`         | Yes      | -          | Handler for mouse leave event             |
| `selected`              | `boolean`                   | No       | `false`    | Whether the option is selected            |
| `disabled`              | `boolean`                   | No       | `false`    | Whether the option is disabled            |
| `focus`                 | `boolean`                   | No       | `false`    | Whether the option has keyboard focus     |
| `multiSelect`           | `boolean`                   | No       | `false`    | Enable multi-select mode with checkbox    |
| `icon`                  | `CommonIconProps`           | No       | -          | Icon to display before the label          |
| `checkedIcon`           | `CommonIconProps`           | No       | -          | Icon to show when selected (multi-select) |
| `sublabel`              | `CommonTextProps \| string` | No       | -          | Additional text below the main label      |
| `labelCharsHighlighted` | `string`                    | No       | -          | Characters to highlight in the label      |
| `url`                   | `string`                    | No       | -          | URL to navigate when option is clicked    |
| `onClick`               | `(event) => void`           | No       | -          | Click event handler                       |
| `onFocus`               | `FocusEventHandler`         | No       | -          | Focus event handler                       |
| `onBlur`                | `FocusEventHandler`         | No       | -          | Blur event handler                        |
| `role`                  | `AriaRole`                  | No       | -          | ARIA role attribute                       |
| `tabIndex`              | `number`                    | No       | -          | Tab index for keyboard navigation         |
| `component`             | `string \| ElementType`     | No       | -          | Custom component to render as             |
| `extraContent`          | `ReactNode`                 | No       | -          | Additional content to render              |
| `aria-label`            | `string`                    | No       | -          | Accessible label                          |
| `aria-labelledby`       | `string`                    | No       | -          | ID of element labeling this option        |
| `aria-describedby`      | `string`                    | No       | -          | ID of element describing this option      |
| `aria-hidden`           | `boolean`                   | No       | -          | Whether to hide from screen readers       |
| `aria-selected`         | `boolean`                   | No       | -          | Selected state for screen readers         |
| `aria-current`          | `boolean \| string`         | No       | -          | Current state indicator                   |
| `aria-checked`          | `boolean`                   | No       | -          | Checked state for multi-select            |
| `data-testid`           | `string`                    | No       | `'option'` | Test ID for testing                       |

## Variants

The Option component supports 9 visual variants for different contexts:

### CODE_VIEWER_SUBTHEME

Options styled for code viewer interfaces.

```tsx
<Option
  label="Code Item"
  variant="CODE_VIEWER_SUBTHEME"
  hover={false}
  onMouseEnter={() => {}}
  onMouseLeave={() => {}}
/>
```

### INPUT_DROPDOWN

Standard dropdown menu option style.

```tsx
<Option
  label="Menu Item"
  variant="INPUT_DROPDOWN"
  hover={false}
  onMouseEnter={() => {}}
  onMouseLeave={() => {}}
/>
```

### INPUT_OPTION

Input field autocomplete option style.

```tsx
<Option
  label="Suggestion"
  variant="INPUT_OPTION"
  hover={false}
  onMouseEnter={() => {}}
  onMouseLeave={() => {}}
/>
```

### INPUT_OPTION_HIGHTLIGHTED

Option with highlighted matching characters.

```tsx
<Option
  label="Result"
  labelCharsHighlighted="res"
  variant="INPUT_OPTION_HIGHTLIGHTED"
  hover={false}
  onMouseEnter={() => {}}
  onMouseLeave={() => {}}
/>
```

### INVERTED

Inverted color scheme for dark backgrounds.

```tsx
<Option
  label="Dark Theme Item"
  variant="INVERTED"
  hover={false}
  onMouseEnter={() => {}}
  onMouseLeave={() => {}}
/>
```

### SIDE_MENU_LEVEL_1

First level side menu navigation items.

```tsx
<Option
  label="Dashboard"
  variant="SIDE_MENU_LEVEL_1"
  hover={false}
  onMouseEnter={() => {}}
  onMouseLeave={() => {}}
/>
```

### SIDE_MENU_LEVEL_2

Second level (nested) side menu items.

```tsx
<Option
  label="Submenu Item"
  variant="SIDE_MENU_LEVEL_2"
  hover={false}
  onMouseEnter={() => {}}
  onMouseLeave={() => {}}
/>
```

### TOPBAR

Top navigation bar menu items.

```tsx
<Option
  label="Products"
  variant="TOPBAR"
  hover={false}
  onMouseEnter={() => {}}
  onMouseLeave={() => {}}
/>
```

### TOPBAR_TAB

Tab-style navigation in top bar.

```tsx
<Option
  label="Overview"
  variant="TOPBAR_TAB"
  hover={false}
  onMouseEnter={() => {}}
  onMouseLeave={() => {}}
/>
```

## Common Patterns

### Dropdown Select Menu

```tsx
import { useState } from 'react';

import { Option } from '@kubit/components';

function DropdownMenu() {
  const [selected, setSelected] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const options = [
    { id: '1', label: 'Option 1' },
    { id: '2', label: 'Option 2' },
    { id: '3', label: 'Option 3' },
  ];

  return (
    <div
      style={{ width: '200px', border: '1px solid #ddd', borderRadius: '4px' }}
    >
      {options.map((option) => (
        <Option
          key={option.id}
          label={option.label}
          variant="INPUT_DROPDOWN"
          selected={selected === option.id}
          hover={hoveredId === option.id}
          onMouseEnter={() => setHoveredId(option.id)}
          onMouseLeave={() => setHoveredId(null)}
          onClick={() => setSelected(option.id)}
        />
      ))}
    </div>
  );
}
```

### Multi-Select List

```tsx
import { useState } from 'react';

import { Option } from '@kubit/components';

import { ICONS } from '@/assets/icons';

function MultiSelectList() {
  const [selected, setSelected] = useState<string[]>([]);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const options = [
    { id: '1', label: 'Task 1' },
    { id: '2', label: 'Task 2' },
    { id: '3', label: 'Task 3' },
  ];

  const toggleSelection = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <div
      style={{ width: '250px', border: '1px solid #ddd', borderRadius: '4px' }}
    >
      {options.map((option) => (
        <Option
          key={option.id}
          label={option.label}
          variant="INPUT_DROPDOWN"
          multiSelect
          selected={selected.includes(option.id)}
          hover={hoveredId === option.id}
          checkedIcon={{ icon: ICONS.CHECK, altText: 'Selected' }}
          onMouseEnter={() => setHoveredId(option.id)}
          onMouseLeave={() => setHoveredId(null)}
          onClick={() => toggleSelection(option.id)}
          aria-checked={selected.includes(option.id)}
        />
      ))}
    </div>
  );
}
```

### Autocomplete with Highlighting

```tsx
import { useState } from 'react';

import { Option } from '@kubit/components';

function Autocomplete() {
  const [search, setSearch] = useState('');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const allOptions = ['JavaScript', 'TypeScript', 'Python', 'Java', 'Ruby'];

  const filteredOptions = allOptions.filter((option) =>
    option.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search languages..."
        style={{ width: '100%', padding: '8px', marginBottom: '8px' }}
      />

      <div style={{ border: '1px solid #ddd', borderRadius: '4px' }}>
        {filteredOptions.map((option, index) => (
          <Option
            key={index}
            label={option}
            labelCharsHighlighted={search}
            variant="INPUT_OPTION_HIGHTLIGHTED"
            hover={hoveredId === option}
            onMouseEnter={() => setHoveredId(option)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => {
              setSearch(option);
            }}
          />
        ))}
      </div>
    </div>
  );
}
```

### Options with Icons

```tsx
import { Option } from '@kubit/components';

import { ICONS } from '@/assets/icons';

function IconOptions() {
  const [selected, setSelected] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const options = [
    { id: 'home', label: 'Home', icon: ICONS.HOME },
    { id: 'settings', label: 'Settings', icon: ICONS.SETTINGS },
    { id: 'profile', label: 'Profile', icon: ICONS.USER },
  ];

  return (
    <div
      style={{ width: '200px', border: '1px solid #ddd', borderRadius: '4px' }}
    >
      {options.map((option) => (
        <Option
          key={option.id}
          label={option.label}
          icon={{ icon: option.icon, altText: option.label }}
          variant="INPUT_DROPDOWN"
          selected={selected === option.id}
          hover={hoveredId === option.id}
          onMouseEnter={() => setHoveredId(option.id)}
          onMouseLeave={() => setHoveredId(null)}
          onClick={() => setSelected(option.id)}
        />
      ))}
    </div>
  );
}
```

### Options with Sublabels

```tsx
import { Option } from '@kubit/components';

function OptionsWithDetails() {
  const [selected, setSelected] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const users = [
    { id: '1', name: 'John Doe', email: 'john.doe@example.com' },
    { id: '2', name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: '3', name: 'Bob Johnson', email: 'bob.johnson@example.com' },
  ];

  return (
    <div
      style={{ width: '300px', border: '1px solid #ddd', borderRadius: '4px' }}
    >
      {users.map((user) => (
        <Option
          key={user.id}
          label={user.name}
          sublabel={user.email}
          variant="INPUT_DROPDOWN"
          selected={selected === user.id}
          hover={hoveredId === user.id}
          onMouseEnter={() => setHoveredId(user.id)}
          onMouseLeave={() => setHoveredId(null)}
          onClick={() => setSelected(user.id)}
        />
      ))}
    </div>
  );
}
```

### Side Menu Navigation

```tsx
import { Option } from '@kubit/components';

import { ICONS } from '@/assets/icons';

function SideMenu() {
  const [active, setActive] = useState('dashboard');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: ICONS.DASHBOARD, level: 1 },
    { id: 'analytics', label: 'Analytics', icon: ICONS.CHART, level: 1 },
    { id: 'reports', label: 'Reports', level: 2 },
    { id: 'charts', label: 'Charts', level: 2 },
    { id: 'settings', label: 'Settings', icon: ICONS.SETTINGS, level: 1 },
  ];

  return (
    <nav style={{ width: '250px', background: '#f5f5f5', padding: '8px' }}>
      {menuItems.map((item) => (
        <Option
          key={item.id}
          label={item.label}
          icon={
            item.icon ? { icon: item.icon, altText: item.label } : undefined
          }
          variant={item.level === 1 ? 'SIDE_MENU_LEVEL_1' : 'SIDE_MENU_LEVEL_2'}
          selected={active === item.id}
          hover={hoveredId === item.id}
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
          onClick={() => setActive(item.id)}
          aria-current={active === item.id ? 'page' : undefined}
        />
      ))}
    </nav>
  );
}
```

### Keyboard Navigation

```tsx
import { useEffect, useState } from 'react';

import { Option } from '@kubit/components';

function KeyboardNavigableList() {
  const [selected, setSelected] = useState<number | null>(null);
  const [focused, setFocused] = useState<number>(0);

  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setFocused((prev) => Math.min(prev + 1, options.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setFocused((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setSelected(focused);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [focused, options.length]);

  return (
    <div
      role="listbox"
      aria-activedescendant={`option-${focused}`}
      style={{ width: '200px', border: '1px solid #ddd', borderRadius: '4px' }}
    >
      {options.map((option, index) => (
        <Option
          key={index}
          id={`option-${index}`}
          label={option}
          variant="INPUT_DROPDOWN"
          selected={selected === index}
          focus={focused === index}
          hover={false}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
          onClick={() => setSelected(index)}
          role="option"
          aria-selected={selected === index}
        />
      ))}
    </div>
  );
}
```

### Disabled Options

```tsx
import { Option } from '@kubit/components';

function OptionsWithDisabled() {
  const [selected, setSelected] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const options = [
    { id: '1', label: 'Available Option', disabled: false },
    { id: '2', label: 'Disabled Option', disabled: true },
    { id: '3', label: 'Another Available', disabled: false },
    { id: '4', label: 'Also Disabled', disabled: true },
  ];

  return (
    <div
      style={{ width: '200px', border: '1px solid #ddd', borderRadius: '4px' }}
    >
      {options.map((option) => (
        <Option
          key={option.id}
          label={option.label}
          variant="INPUT_DROPDOWN"
          disabled={option.disabled}
          selected={selected === option.id}
          hover={!option.disabled && hoveredId === option.id}
          onMouseEnter={() => !option.disabled && setHoveredId(option.id)}
          onMouseLeave={() => setHoveredId(null)}
          onClick={() => !option.disabled && setSelected(option.id)}
          aria-disabled={option.disabled}
        />
      ))}
    </div>
  );
}
```

## Accessibility

The Option component is built with comprehensive accessibility support:

### ARIA Attributes

Full support for ARIA attributes to ensure screen reader compatibility:

```tsx
<Option
  label="Accessible Option"
  variant="INPUT_DROPDOWN"
  role="option"
  aria-label="Select this option"
  aria-selected={true}
  aria-describedby="option-description"
  hover={false}
  onMouseEnter={() => {}}
  onMouseLeave={() => {}}
/>
```

### Keyboard Navigation

The component supports keyboard interaction:

- **Enter**: Activate/select the option
- **Space**: Activate/select the option
- **Arrow Keys**: Navigate between options (handled by parent component)

```tsx
<Option
  label="Keyboard Accessible"
  variant="INPUT_DROPDOWN"
  tabIndex={0}
  hover={false}
  onMouseEnter={() => {}}
  onMouseLeave={() => {}}
  onFocus={(e) => console.log('Focused')}
  onBlur={(e) => console.log('Blurred')}
  onClick={(e) => console.log('Selected')}
/>
```

### Screen Reader Support

Proper labeling and state communication:

```tsx
<Option
  label="Product Name"
  sublabel="Product description"
  variant="INPUT_DROPDOWN"
  selected
  aria-selected={true}
  aria-label="Product Name, Product description, selected"
  hover={false}
  onMouseEnter={() => {}}
  onMouseLeave={() => {}}
/>
```

### Multi-Select Accessibility

For multi-select options, use appropriate ARIA attributes:

```tsx
<Option
  label="Task Item"
  variant="INPUT_DROPDOWN"
  multiSelect
  selected
  role="option"
  aria-checked={true}
  hover={false}
  onMouseEnter={() => {}}
  onMouseLeave={() => {}}
/>
```

## Best Practices

### 1. Always Provide onMouseEnter and onMouseLeave

These handlers are required for hover state management:

```tsx
// ✅ Good
<Option
  label="Item"
  variant="INPUT_DROPDOWN"
  hover={hoveredId === 'item-1'}
  onMouseEnter={() => setHoveredId('item-1')}
  onMouseLeave={() => setHoveredId(null)}
/>

// ❌ Bad - missing handlers
<Option label="Item" variant="INPUT_DROPDOWN" hover={false} />
```

### 2. Use Appropriate Variants

Choose the variant that matches your use case:

```tsx
// ✅ Good - correct variant for context
<Option label="Menu Item" variant="INPUT_DROPDOWN" hover={false} onMouseEnter={() => {}} onMouseLeave={() => {}} />
<Option label="Nav Item" variant="SIDE_MENU_LEVEL_1" hover={false} onMouseEnter={() => {}} onMouseLeave={() => {}} />

// ❌ Bad - wrong variant for context
<Option label="Nav Item" variant="INPUT_DROPDOWN" hover={false} onMouseEnter={() => {}} onMouseLeave={() => {}} />
```

### 3. Include Checked Icons for Multi-Select

Always provide a checked icon for multi-select options:

```tsx
// ✅ Good
<Option
  label="Task"
  multiSelect
  selected
  checkedIcon={{ icon: ICONS.CHECK, altText: 'Selected' }}
  hover={false}
  onMouseEnter={() => {}}
  onMouseLeave={() => {}}
/>

// ❌ Bad - no visual indicator
<Option label="Task" multiSelect selected hover={false} onMouseEnter={() => {}} onMouseLeave={() => {}}  />
```

### 4. Disable Interaction for Disabled Options

Don't allow clicks or hover on disabled options:

```tsx
// ✅ Good
<Option
  label="Item"
  variant="INPUT_DROPDOWN"
  disabled
  hover={false}
  onMouseEnter={() => {}}
  onMouseLeave={() => {}}
/>

// ❌ Bad - allows interaction when disabled
<Option
  label="Item"
  variant="INPUT_DROPDOWN"
  disabled
  hover={true}
  onClick={() => console.log('clicked')}
  onMouseEnter={() => {}}
  onMouseLeave={() => {}}
/>
```

### 5. Use Sublabels for Additional Context

Provide helpful additional information:

```tsx
// ✅ Good - descriptive sublabel
<Option
  label="John Doe"
  sublabel="john.doe@example.com"
  variant="INPUT_DROPDOWN"
  hover={false}
  onMouseEnter={() => {}}
  onMouseLeave={() => {}}
/>

// ❌ Bad - missing helpful context
<Option label="john.doe@example.com" variant="INPUT_DROPDOWN" hover={false} onMouseEnter={() => {}} onMouseLeave={() => {}} />
```

### 6. Implement Proper Keyboard Navigation

Support full keyboard accessibility:

```tsx
// ✅ Good - keyboard accessible
<Option
  label="Item"
  variant="INPUT_DROPDOWN"
  tabIndex={0}
  role="option"
  aria-selected={selected}
  hover={false}
  onMouseEnter={() => {}}
  onMouseLeave={() => {}}
  onClick={handleClick}
  onFocus={handleFocus}
  onBlur={handleBlur}
/>

// ❌ Bad - no keyboard support
<Option
  label="Item"
  variant="INPUT_DROPDOWN"
  hover={false}
  onMouseEnter={() => {}}
  onMouseLeave={() => {}}
/>
```

### 7. Use Icons Consistently

Be consistent with icon usage across similar options:

```tsx
// ✅ Good - consistent icons
<Option label="Home" icon={{ icon: ICONS.HOME }} variant="INPUT_DROPDOWN" hover={false} onMouseEnter={() => {}} onMouseLeave={() => {}} />
<Option label="Settings" icon={{ icon: ICONS.SETTINGS }} variant="INPUT_DROPDOWN" hover={false} onMouseEnter={() => {}} onMouseLeave={() => {}} />

// ❌ Bad - inconsistent
<Option label="Home" icon={{ icon: ICONS.HOME }} variant="INPUT_DROPDOWN" hover={false} onMouseEnter={() => {}} onMouseLeave={() => {}} />
<Option label="Settings" variant="INPUT_DROPDOWN" hover={false} onMouseEnter={() => {}} onMouseLeave={() => {}} /> {/* Missing icon */}
```

### 8. Highlight Matching Characters in Search

Use `labelCharsHighlighted` for search/filter scenarios:

```tsx
// ✅ Good - highlights search term
<Option
  label="JavaScript"
  labelCharsHighlighted="java"
  variant="INPUT_OPTION_HIGHTLIGHTED"
  hover={false}
  onMouseEnter={() => {}}
  onMouseLeave={() => {}}
/>

// ❌ Bad - no highlighting
<Option label="JavaScript" variant="INPUT_OPTION" hover={false} onMouseEnter={() => {}} onMouseLeave={() => {}} />
```

## Testing

### Basic Rendering

```tsx
import { Option } from '@kubit/components';
import { render, screen } from '@testing-library/react';

describe('Option', () => {
  test('renders option with label', () => {
    render(
      <Option
        label="Test Option"
        variant="INPUT_DROPDOWN"
        hover={false}
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
      />,
    );

    expect(screen.getByText('Test Option')).toBeInTheDocument();
  });
});
```

### Selection State

```tsx
test('renders selected option', () => {
  render(
    <Option
      label="Selected Option"
      variant="INPUT_DROPDOWN"
      selected
      hover={false}
      onMouseEnter={() => {}}
      onMouseLeave={() => {}}
    />,
  );

  const option = screen.getByTestId('option');
  expect(option).toHaveAttribute(
    'data-state',
    expect.stringContaining('selected'),
  );
});
```

### Click Handling

```tsx
import userEvent from '@testing-library/user-event';

test('calls onClick when clicked', async () => {
  const handleClick = vi.fn();

  render(
    <Option
      label="Clickable Option"
      variant="INPUT_DROPDOWN"
      hover={false}
      onMouseEnter={() => {}}
      onMouseLeave={() => {}}
      onClick={handleClick}
    />,
  );

  const option = screen.getByText('Clickable Option');
  await userEvent.click(option);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

### Disabled State

```tsx
test('does not call onClick when disabled', async () => {
  const handleClick = vi.fn();

  render(
    <Option
      label="Disabled Option"
      variant="INPUT_DROPDOWN"
      disabled
      hover={false}
      onMouseEnter={() => {}}
      onMouseLeave={() => {}}
      onClick={handleClick}
    />,
  );

  const option = screen.getByText('Disabled Option');
  await userEvent.click(option);

  expect(handleClick).not.toHaveBeenCalled();
});
```

### Multi-Select

```tsx
test('shows checked icon when selected in multi-select mode', () => {
  render(
    <Option
      label="Task"
      variant="INPUT_DROPDOWN"
      multiSelect
      selected
      checkedIcon={{ icon: 'check-icon', altText: 'Checked' }}
      hover={false}
      onMouseEnter={() => {}}
      onMouseLeave={() => {}}
    />,
  );

  expect(screen.getByAltText('Checked')).toBeInTheDocument();
});
```

### Accessibility

```tsx
import { axe } from 'vitest-axe';

test('has no accessibility violations', async () => {
  const { container } = render(
    <Option
      label="Accessible Option"
      variant="INPUT_DROPDOWN"
      role="option"
      aria-label="Test option"
      hover={false}
      onMouseEnter={() => {}}
      onMouseLeave={() => {}}
    />,
  );

  expect(await axe(container)).toHaveNoViolations();
});
```

## Related Components

- **Select**: Dropdown select component using Option
- **Autocomplete**: Search input with Option suggestions
- **ListOptions**: Container component for rendering multiple Options
- **Dropdown**: Dropdown menu using Options
- **Menu**: Navigation menu using Options

## Browser Support

The Option component works in all modern browsers:

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Troubleshooting

### Option Not Responding to Clicks

**Problem**: Clicking the option doesn't trigger onClick.

**Solution**: Check if the option is disabled:

```tsx
// ✅ Correct
<Option
  label="Item"
  variant="INPUT_DROPDOWN"
  disabled={false}
  hover={false}
  onMouseEnter={() => {}}
  onMouseLeave={() => {}}
  onClick={handleClick}
/>

// ❌ Incorrect - disabled
<Option
  label="Item"
  variant="INPUT_DROPDOWN"
  disabled={true}
  hover={false}
  onMouseEnter={() => {}}
  onMouseLeave={() => {}}
  onClick={handleClick}
/>
```

### Hover State Not Working

**Problem**: Hover style doesn't apply.

**Solution**: Ensure hover state is managed correctly:

```tsx
// ✅ Correct
const [hoveredId, setHoveredId] = useState(null);

<Option
  label="Item"
  variant="INPUT_DROPDOWN"
  hover={hoveredId === 'item-1'}
  onMouseEnter={() => setHoveredId('item-1')}
  onMouseLeave={() => setHoveredId(null)}
/>

// ❌ Incorrect - static hover
<Option
  label="Item"
  variant="INPUT_DROPDOWN"
  hover={false}
  onMouseEnter={() => {}}
  onMouseLeave={() => {}}
/>
```

### Checked Icon Not Showing

**Problem**: Checked icon doesn't appear in multi-select mode.

**Solution**: Ensure both `multiSelect` and `selected` are true, and `checkedIcon` is provided:

```tsx
// ✅ Correct
<Option
  label="Task"
  variant="INPUT_DROPDOWN"
  multiSelect
  selected
  checkedIcon={{ icon: ICONS.CHECK, altText: 'Checked' }}
  hover={false}
  onMouseEnter={() => {}}
  onMouseLeave={() => {}}
/>

// ❌ Incorrect - missing properties
<Option
  label="Task"
  variant="INPUT_DROPDOWN"
  selected
  hover={false}
  onMouseEnter={() => {}}
  onMouseLeave={() => {}}
/>
```

### Highlighting Not Working

**Problem**: Characters aren't highlighted in the label.

**Solution**: Use the correct variant and provide `labelCharsHighlighted`:

```tsx
// ✅ Correct
<Option
  label="JavaScript"
  labelCharsHighlighted="java"
  variant="INPUT_OPTION_HIGHTLIGHTED"
  hover={false}
  onMouseEnter={() => {}}
  onMouseLeave={() => {}}
/>

// ❌ Incorrect - wrong variant
<Option
  label="JavaScript"
  labelCharsHighlighted="java"
  variant="INPUT_DROPDOWN"
  hover={false}
  onMouseEnter={() => {}}
  onMouseLeave={() => {}}
/>
```
