# Select Component

## Overview

The **Select** component provides a customizable dropdown menu for selecting options from a list. It combines a button/link trigger with a popover containing selectable options. The component supports both controlled and uncontrolled modes, keyboard navigation, and multiple visual variants for different use cases.

## Features

- **Multiple Variants**: DEFAULT, SIDE_MENU, TOPBAR, TOPBAR_TAB
- **Controlled & Uncontrolled**: Flexible state management options
- **Keyboard Navigation**: Full keyboard support with arrow keys and Tab
- **Popover Integration**: Built-in popover for displaying options
- **Icon Support**: Customizable icon with rotation on open/close
- **Label Customization**: Flexible label text with styling
- **List Options**: Integration with ListOptions component
- **URL Support**: Can function as a link instead of button
- **Accessibility**: ARIA attributes and screen reader support
- **Hover Interaction**: Optional open/close on hover
- **Scroll Behavior**: Optional close on scroll
- **Custom Styling**: Extensive CSS class customization

## Installation

```bash
npm install @kubit/web-ui-components
```

## Usage

### Basic Usage (Uncontrolled)

```tsx
import { SelectUnControlled } from '@kubit/web-ui-components';

function App() {
  return (
    <SelectUnControlled
      variant="DEFAULT"
      label="Choose an option"
      icon={{ icon: 'chevron-down', altText: 'Toggle' }}
      listOptions={{
        type: 'selection',
        variant: 'DEFAULT',
        options: [
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
        ],
      }}
      onOptionClick={(value) => console.log('Selected:', value)}
    />
  );
}
```

### Controlled Mode

```tsx
import { useState } from 'react';

import { SelectControlled } from '@kubit/web-ui-components';

function App() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');

  return (
    <SelectControlled
      variant="DEFAULT"
      label={selected || 'Select an option'}
      icon={{ icon: 'chevron-down', altText: 'Toggle' }}
      open={open}
      optionSelected={selected}
      listOptions={{
        type: 'selection',
        variant: 'DEFAULT',
        options: [
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
        ],
      }}
      onButtonClick={() => setOpen(!open)}
      onClosePopover={() => setOpen(false)}
      onOptionClick={(value) => {
        setSelected(value);
        setOpen(false);
      }}
    />
  );
}
```

### With Default Selection

```tsx
import { SelectUnControlled } from '@kubit/web-ui-components';

function App() {
  return (
    <SelectUnControlled
      variant="DEFAULT"
      label="Country"
      icon={{ icon: 'chevron-down', altText: 'Toggle' }}
      defaultOptionSelected="us"
      listOptions={{
        type: 'selection',
        variant: 'DEFAULT',
        options: [
          { label: 'United States', value: 'us' },
          { label: 'United Kingdom', value: 'uk' },
          { label: 'Canada', value: 'ca' },
          { label: 'Australia', value: 'au' },
        ],
      }}
    />
  );
}
```

### With Popover Configuration

```tsx
import { SelectUnControlled } from '@kubit/web-ui-components';

function App() {
  return (
    <SelectUnControlled
      variant="DEFAULT"
      label="Settings"
      icon={{ icon: 'chevron-down', altText: 'Toggle' }}
      popover={{
        variant: 'DEFAULT',
        hasBackDrop: true,
        blockBackDrop: false,
        trapFocusInsideModal: false,
      }}
      listOptions={{
        type: 'selection',
        variant: 'DEFAULT',
        options: [
          { label: 'Profile', value: 'profile' },
          { label: 'Settings', value: 'settings' },
          { label: 'Logout', value: 'logout' },
        ],
      }}
      onOptionClick={(value) => console.log('Action:', value)}
    />
  );
}
```

### As a Link

```tsx
import { SelectUnControlled } from '@kubit/web-ui-components';

function App() {
  return (
    <SelectUnControlled
      variant="TOPBAR"
      label="Menu"
      icon={{ icon: 'menu', altText: 'Open menu' }}
      url="/menu"
      urlTarget="_blank"
      listOptions={{
        type: 'selection',
        variant: 'TOPBAR',
        options: [
          { label: 'Home', value: 'home' },
          { label: 'About', value: 'about' },
          { label: 'Contact', value: 'contact' },
        ],
      }}
    />
  );
}
```

### With Hover Interaction

```tsx
import { SelectUnControlled } from '@kubit/web-ui-components';

function App() {
  return (
    <SelectUnControlled
      variant="TOPBAR"
      label="Products"
      icon={{ icon: 'chevron-down', altText: 'Toggle' }}
      openAndCloseOnHover={true}
      listOptions={{
        type: 'selection',
        variant: 'TOPBAR',
        options: [
          { label: 'Product A', value: 'product-a' },
          { label: 'Product B', value: 'product-b' },
          { label: 'Product C', value: 'product-c' },
        ],
      }}
    />
  );
}
```

## Props

### SelectUnControlledProps

| Prop                    | Type                        | Required | Default    | Description                                             |
| ----------------------- | --------------------------- | -------- | ---------- | ------------------------------------------------------- |
| `variant`               | `string`                    | No       | -          | Visual variant (DEFAULT, SIDE_MENU, TOPBAR, TOPBAR_TAB) |
| `label`                 | `string \| CommonTextProps` | Yes      | -          | Label text displayed on the button                      |
| `icon`                  | `string \| CommonIconProps` | Yes      | -          | Icon displayed next to the label                        |
| `listOptions`           | `SelectListOptionsProps`    | Yes      | -          | Options to display in the dropdown                      |
| `defaultOpen`           | `boolean`                   | No       | `false`    | Initial open state                                      |
| `defaultOptionSelected` | `string`                    | No       | -          | Initial selected option value                           |
| `popover`               | `SelectPopoverProps`        | No       | -          | Popover configuration                                   |
| `closePopoverOnScroll`  | `boolean`                   | No       | `false`    | Close popover when scrolling                            |
| `openAndCloseOnHover`   | `boolean`                   | No       | `false`    | Open/close on hover instead of click                    |
| `url`                   | `string`                    | No       | -          | URL for link functionality                              |
| `urlTarget`             | `HTMLAttributeAnchorTarget` | No       | -          | Link target (\_blank, \_self, etc.)                     |
| `onOptionClick`         | `(value: string) => void`   | No       | -          | Callback when option is clicked                         |
| `onButtonClick`         | `(open: boolean) => void`   | No       | -          | Callback when button is clicked                         |
| `onClosePopover`        | `(open: boolean) => void`   | No       | -          | Callback when popover closes                            |
| `onMouseEnter`          | `(open: boolean) => void`   | No       | -          | Callback on mouse enter                                 |
| `onMouseLeave`          | `(open: boolean) => void`   | No       | -          | Callback on mouse leave                                 |
| `onFocus`               | `(open: boolean) => void`   | No       | -          | Callback on focus                                       |
| `onBlur`                | `(open: boolean) => void`   | No       | -          | Callback on blur                                        |
| `additionalClasses`     | `Partial<SelectCssClasses>` | No       | -          | Additional CSS classes                                  |
| `data-testid`           | `string`                    | No       | `'select'` | Test ID for component testing                           |

### SelectControlledProps

| Prop                   | Type                        | Required | Default | Description                     |
| ---------------------- | --------------------------- | -------- | ------- | ------------------------------- |
| `variant`              | `string`                    | No       | -       | Visual variant                  |
| `label`                | `string \| CommonTextProps` | Yes      | -       | Label text                      |
| `icon`                 | `string \| CommonIconProps` | Yes      | -       | Icon                            |
| `listOptions`          | `SelectListOptionsProps`    | Yes      | -       | Options list                    |
| `open`                 | `boolean`                   | Yes      | -       | Current open state              |
| `optionSelected`       | `string`                    | No       | -       | Currently selected option value |
| `onButtonClick`        | `MouseEventHandler`         | Yes      | -       | Button click handler            |
| `onClosePopover`       | `() => void`                | Yes      | -       | Popover close handler           |
| `onOptionClick`        | `(value: string) => void`   | Yes      | -       | Option click handler            |
| `popover`              | `SelectPopoverProps`        | No       | -       | Popover configuration           |
| `closePopoverOnScroll` | `boolean`                   | No       | `false` | Close on scroll                 |
| `openAndCloseOnHover`  | `boolean`                   | No       | `false` | Hover interaction               |
| `url`                  | `string`                    | No       | -       | URL for link                    |
| `urlTarget`            | `HTMLAttributeAnchorTarget` | No       | -       | Link target                     |
| `additionalClasses`    | `Partial<SelectCssClasses>` | No       | -       | Additional CSS classes          |

### SelectListOptionsProps

| Prop            | Type                          | Description                       |
| --------------- | ----------------------------- | --------------------------------- |
| `type`          | `'selection' \| 'navigation'` | Type of list options              |
| `variant`       | `string`                      | Variant for ListOptions component |
| `optionVariant` | `string`                      | Variant for individual options    |
| `options`       | `ListOptionsOptionProps[]`    | Array of option objects           |

### ListOptionsOptionProps

| Prop       | Type              | Description                |
| ---------- | ----------------- | -------------------------- |
| `label`    | `string`          | Option label text          |
| `value`    | `string`          | Option value               |
| `icon`     | `CommonIconProps` | Optional icon              |
| `disabled` | `boolean`         | Whether option is disabled |

## Variants

### Available Variants

- **`DEFAULT`**: Standard select dropdown styling
- **`SIDE_MENU`**: Optimized for side navigation menus
- **`TOPBAR`**: Designed for top navigation bars
- **`TOPBAR_TAB`**: Tab-style select in top navigation

## Accessibility

The Select component follows WAI-ARIA best practices:

### Keyboard Navigation

- **Space/Enter**: Open/close the select
- **Escape**: Close the select
- **Arrow Down**: Move focus to next option
- **Arrow Up**: Move focus to previous option
- **Tab**: Move focus between options
- **Shift + Tab**: Move focus backward
- **Home**: Focus first option
- **End**: Focus last option

### ARIA Attributes

```tsx
<SelectUnControlled
  variant="DEFAULT"
  label="Accessible Select"
  icon={{ icon: 'chevron-down', altText: 'Toggle dropdown' }}
  listOptions={{
    type: 'selection',
    variant: 'DEFAULT',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
    ],
  }}
  aria-label="Select an option"
  data-testid="accessible-select"
/>
```

### Screen Reader Support

- Announced as combobox with proper role
- Expanded/collapsed state is communicated
- Selected option is announced
- Number of options is communicated
- Keyboard shortcuts are supported

### Focus Management

```tsx
function AccessibleSelect() {
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Focus select on mount
    selectRef.current?.focus();
  }, []);

  return (
    <SelectUnControlled
      ref={selectRef}
      variant="DEFAULT"
      label="Focus managed select"
      icon={{ icon: 'chevron-down', altText: 'Toggle' }}
      listOptions={{
        type: 'selection',
        variant: 'DEFAULT',
        options: [
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
        ],
      }}
    />
  );
}
```

## Common Use Cases

### Country Selector

```tsx
import { useState } from 'react';

import { SelectUnControlled } from '@kubit/web-ui-components';

function CountrySelector() {
  const countries = [
    { label: '🇺🇸 United States', value: 'us' },
    { label: '🇬🇧 United Kingdom', value: 'uk' },
    { label: '🇨🇦 Canada', value: 'ca' },
    { label: '🇦🇺 Australia', value: 'au' },
    { label: '🇩🇪 Germany', value: 'de' },
    { label: '🇫🇷 France', value: 'fr' },
    { label: '🇯🇵 Japan', value: 'jp' },
    { label: '🇨🇳 China', value: 'cn' },
  ];

  return (
    <SelectUnControlled
      variant="DEFAULT"
      label="Select your country"
      icon={{ icon: 'chevron-down', altText: 'Toggle country list' }}
      defaultOptionSelected="us"
      listOptions={{
        type: 'selection',
        variant: 'DEFAULT',
        options: countries,
      }}
      onOptionClick={(value) => {
        console.log('Country selected:', value);
        // Update user preferences
      }}
    />
  );
}
```

### Language Switcher

```tsx
import { useState } from 'react';

import { SelectUnControlled } from '@kubit/web-ui-components';

function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState('en');

  const languages = [
    { label: 'English', value: 'en' },
    { label: 'Español', value: 'es' },
    { label: 'Français', value: 'fr' },
    { label: 'Deutsch', value: 'de' },
    { label: '日本語', value: 'ja' },
    { label: '中文', value: 'zh' },
  ];

  const handleLanguageChange = (value: string) => {
    setCurrentLang(value);
    // Change app language
    // i18n.changeLanguage(value);
  };

  const currentLanguage = languages.find((lang) => lang.value === currentLang);

  return (
    <SelectUnControlled
      variant="TOPBAR"
      label={currentLanguage?.label || 'Language'}
      icon={{ icon: 'globe', altText: 'Change language' }}
      defaultOptionSelected={currentLang}
      listOptions={{
        type: 'selection',
        variant: 'TOPBAR',
        options: languages,
      }}
      onOptionClick={handleLanguageChange}
    />
  );
}
```

### Sort Options

```tsx
import { useState } from 'react';

import { SelectUnControlled } from '@kubit/web-ui-components';

function ProductSort() {
  const [sortBy, setSortBy] = useState('featured');

  const sortOptions = [
    { label: 'Featured', value: 'featured' },
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
    { label: 'Newest First', value: 'date-desc' },
    { label: 'Best Rating', value: 'rating-desc' },
    { label: 'Most Popular', value: 'popularity-desc' },
  ];

  const handleSortChange = (value: string) => {
    setSortBy(value);
    // Trigger product re-sort
    // sortProducts(value);
  };

  const currentSort = sortOptions.find((opt) => opt.value === sortBy);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <span>Sort by:</span>
      <SelectUnControlled
        variant="DEFAULT"
        label={currentSort?.label || 'Select...'}
        icon={{ icon: 'chevron-down', altText: 'Sort options' }}
        defaultOptionSelected={sortBy}
        listOptions={{
          type: 'selection',
          variant: 'DEFAULT',
          options: sortOptions,
        }}
        onOptionClick={handleSortChange}
      />
    </div>
  );
}
```

### User Menu

```tsx
import { SelectUnControlled } from '@kubit/web-ui-components';
import { useNavigate } from 'react-router-dom';

function UserMenu() {
  const navigate = useNavigate();

  const menuOptions = [
    { label: 'Profile', value: 'profile', icon: { icon: 'user' } },
    { label: 'Settings', value: 'settings', icon: { icon: 'settings' } },
    { label: 'Billing', value: 'billing', icon: { icon: 'credit-card' } },
    { label: 'Help', value: 'help', icon: { icon: 'help-circle' } },
    { label: 'Logout', value: 'logout', icon: { icon: 'log-out' } },
  ];

  const handleMenuAction = (value: string) => {
    switch (value) {
      case 'profile':
        navigate('/profile');
        break;
      case 'settings':
        navigate('/settings');
        break;
      case 'billing':
        navigate('/billing');
        break;
      case 'help':
        window.open('/help', '_blank');
        break;
      case 'logout':
        // Handle logout
        break;
    }
  };

  return (
    <SelectUnControlled
      variant="TOPBAR"
      label="John Doe"
      icon={{ icon: 'chevron-down', altText: 'User menu' }}
      listOptions={{
        type: 'navigation',
        variant: 'TOPBAR',
        options: menuOptions,
      }}
      onOptionClick={handleMenuAction}
    />
  );
}
```

### Filter Dropdown

```tsx
import { useState } from 'react';

import { SelectUnControlled } from '@kubit/web-ui-components';

function CategoryFilter() {
  const [category, setCategory] = useState('all');

  const categories = [
    { label: 'All Categories', value: 'all' },
    { label: 'Electronics', value: 'electronics' },
    { label: 'Clothing', value: 'clothing' },
    { label: 'Home & Garden', value: 'home-garden' },
    { label: 'Sports & Outdoors', value: 'sports' },
    { label: 'Books', value: 'books' },
    { label: 'Toys & Games', value: 'toys' },
  ];

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    // Filter products by category
    // filterProducts({ category: value });
  };

  const currentCategory = categories.find((cat) => cat.value === category);

  return (
    <div style={{ marginBottom: '20px' }}>
      <label
        style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}
      >
        Category
      </label>
      <SelectUnControlled
        variant="DEFAULT"
        label={currentCategory?.label || 'Select category'}
        icon={{ icon: 'filter', altText: 'Filter by category' }}
        defaultOptionSelected={category}
        listOptions={{
          type: 'selection',
          variant: 'DEFAULT',
          options: categories,
        }}
        onOptionClick={handleCategoryChange}
      />
    </div>
  );
}
```

### Navigation Menu

```tsx
import { SelectUnControlled } from '@kubit/web-ui-components';

function MobileNavigation() {
  const navigationOptions = [
    { label: 'Home', value: '/', icon: { icon: 'home' } },
    { label: 'Products', value: '/products', icon: { icon: 'shopping-bag' } },
    { label: 'About Us', value: '/about', icon: { icon: 'info' } },
    { label: 'Contact', value: '/contact', icon: { icon: 'mail' } },
    { label: 'Blog', value: '/blog', icon: { icon: 'book-open' } },
  ];

  const handleNavigation = (value: string) => {
    window.location.href = value;
  };

  return (
    <SelectUnControlled
      variant="SIDE_MENU"
      label="Menu"
      icon={{ icon: 'menu', altText: 'Navigation menu' }}
      listOptions={{
        type: 'navigation',
        variant: 'SIDE_MENU',
        options: navigationOptions,
      }}
      onOptionClick={handleNavigation}
    />
  );
}
```

### Time Zone Selector

```tsx
import { useState } from 'react';

import { SelectUnControlled } from '@kubit/web-ui-components';

function TimeZoneSelector() {
  const [timezone, setTimezone] = useState('UTC');

  const timezones = [
    { label: 'UTC', value: 'UTC' },
    { label: 'EST (UTC-5)', value: 'America/New_York' },
    { label: 'PST (UTC-8)', value: 'America/Los_Angeles' },
    { label: 'GMT (UTC+0)', value: 'Europe/London' },
    { label: 'CET (UTC+1)', value: 'Europe/Paris' },
    { label: 'JST (UTC+9)', value: 'Asia/Tokyo' },
    { label: 'AEST (UTC+10)', value: 'Australia/Sydney' },
  ];

  const handleTimezoneChange = (value: string) => {
    setTimezone(value);
    // Update user timezone preference
    // localStorage.setItem('timezone', value);
  };

  const currentTimezone = timezones.find((tz) => tz.value === timezone);

  return (
    <div>
      <label style={{ display: 'block', marginBottom: '8px' }}>Time Zone</label>
      <SelectUnControlled
        variant="DEFAULT"
        label={currentTimezone?.label || 'Select timezone'}
        icon={{ icon: 'clock', altText: 'Select timezone' }}
        defaultOptionSelected={timezone}
        listOptions={{
          type: 'selection',
          variant: 'DEFAULT',
          options: timezones,
        }}
        onOptionClick={handleTimezoneChange}
      />
    </div>
  );
}
```

## Best Practices

### 1. Provide Clear Labels

```tsx
// ✅ Good: Descriptive label
<SelectUnControlled
  variant="DEFAULT"
  label="Select your country"
  icon={{ icon: 'chevron-down', altText: 'Toggle country list' }}
  listOptions={{
    type: 'selection',
    variant: 'DEFAULT',
    options: countries,
  }}
/>

// ❌ Bad: Vague label
<SelectUnControlled
  variant="DEFAULT"
  label="Choose"
  icon={{ icon: 'chevron-down' }}
  listOptions={{
    type: 'selection',
    variant: 'DEFAULT',
    options: countries,
  }}
/>
```

### 2. Update Label with Selection

```tsx
// ✅ Good: Show selected value in label
const [selected, setSelected] = useState('');
const selectedOption = options.find(opt => opt.value === selected);

<SelectUnControlled
  variant="DEFAULT"
  label={selectedOption?.label || 'Select an option'}
  icon={{ icon: 'chevron-down', altText: 'Toggle' }}
  defaultOptionSelected={selected}
  listOptions={{
    type: 'selection',
    variant: 'DEFAULT',
    options: options,
  }}
  onOptionClick={setSelected}
/>

// ❌ Bad: Static label doesn't show selection
<SelectUnControlled
  variant="DEFAULT"
  label="Select an option"
  listOptions={{ type: 'selection', variant: 'DEFAULT', options }}
/>
```

### 3. Use Appropriate Variants

```tsx
// ✅ Good: Use TOPBAR variant in navigation
<nav>
  <SelectUnControlled
    variant="TOPBAR"
    label="Products"
    icon={{ icon: 'chevron-down', altText: 'Products menu' }}
    openAndCloseOnHover={true}
    listOptions={{
      type: 'navigation',
      variant: 'TOPBAR',
      options: productCategories,
    }}
  />
</nav>

// ✅ Good: Use DEFAULT variant in forms
<form>
  <SelectUnControlled
    variant="DEFAULT"
    label="Country"
    icon={{ icon: 'chevron-down', altText: 'Select country' }}
    listOptions={{
      type: 'selection',
      variant: 'DEFAULT',
      options: countries,
    }}
  />
</form>
```

### 4. Limit Number of Options

```tsx
// ✅ Good: Reasonable number of options
const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Option 4', value: '4' },
  { label: 'Option 5', value: '5' },
];

// ❌ Bad: Too many options, consider using a searchable select
const tooManyOptions = Array.from({ length: 100 }, (_, i) => ({
  label: `Option ${i + 1}`,
  value: `${i + 1}`,
}));
```

### 5. Handle Empty States

```tsx
// ✅ Good: Handle when no options available
<SelectUnControlled
  variant="DEFAULT"
  label={options.length > 0 ? 'Select an option' : 'No options available'}
  icon={{ icon: 'chevron-down', altText: 'Toggle' }}
  disabled={options.length === 0}
  listOptions={{
    type: 'selection',
    variant: 'DEFAULT',
    options:
      options.length > 0
        ? options
        : [{ label: 'No options available', value: '', disabled: true }],
  }}
/>
```

### 6. Provide Icon Alt Text

```tsx
// ✅ Good: Descriptive alt text for icon
<SelectUnControlled
  variant="DEFAULT"
  label="Language"
  icon={{ icon: 'globe', altText: 'Change language' }}
  listOptions={{
    type: 'selection',
    variant: 'DEFAULT',
    options: languages,
  }}
/>

// ❌ Bad: Missing or generic alt text
<SelectUnControlled
  variant="DEFAULT"
  label="Language"
  icon={{ icon: 'globe' }}
  listOptions={{
    type: 'selection',
    variant: 'DEFAULT',
    options: languages,
  }}
/>
```

### 7. Use Controlled Mode for Complex Logic

```tsx
// ✅ Good: Controlled mode for validation and custom logic
function ValidatedSelect() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const [error, setError] = useState('');

  const handleOptionClick = (value: string) => {
    setSelected(value);
    setError('');
    setOpen(false);

    // Custom validation
    if (value === 'restricted') {
      setError('This option is not available for your account');
      setSelected('');
    }
  };

  return (
    <>
      <SelectControlled
        variant="DEFAULT"
        label={selected || 'Select an option'}
        icon={{ icon: 'chevron-down', altText: 'Toggle' }}
        open={open}
        optionSelected={selected}
        listOptions={{
          type: 'selection',
          variant: 'DEFAULT',
          options: options,
        }}
        onButtonClick={() => setOpen(!open)}
        onClosePopover={() => setOpen(false)}
        onOptionClick={handleOptionClick}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
}
```

## Styling

### Custom CSS Classes

```tsx
<SelectUnControlled
  variant="DEFAULT"
  label="Custom styled select"
  icon={{ icon: 'chevron-down', altText: 'Toggle' }}
  additionalClasses={{
    select: 'my-select-container',
    buttonorlinkcontainer: 'my-select-button',
    labelclosed: 'my-label-closed',
    labelopened: 'my-label-opened',
    iconclosed: 'my-icon-closed',
    iconopened: 'my-icon-opened',
  }}
  listOptions={{
    type: 'selection',
    variant: 'DEFAULT',
    options: options,
  }}
/>
```

### Custom Styles Example

```css
.my-select-container {
  border: 2px solid #007bff;
  border-radius: 8px;
  background-color: #f8f9fa;
}

.my-select-button {
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.my-select-button:hover {
  background-color: #e9ecef;
}

.my-label-closed {
  font-weight: 600;
  color: #333;
}

.my-label-opened {
  font-weight: 600;
  color: #007bff;
}

.my-icon-closed {
  transition: transform 0.2s ease;
}

.my-icon-opened {
  transform: rotate(180deg);
  color: #007bff;
}
```

## Testing

### Unit Testing

```tsx
import { SelectUnControlled } from '@kubit/web-ui-components';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

describe('SelectUnControlled', () => {
  const mockOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  it('renders with label', () => {
    render(
      <SelectUnControlled
        variant="DEFAULT"
        label="Test Select"
        icon={{ icon: 'chevron-down', altText: 'Toggle' }}
        listOptions={{
          type: 'selection',
          variant: 'DEFAULT',
          options: mockOptions,
        }}
      />,
    );

    expect(screen.getByText('Test Select')).toBeInTheDocument();
  });

  it('opens dropdown when clicked', async () => {
    render(
      <SelectUnControlled
        variant="DEFAULT"
        label="Test Select"
        icon={{ icon: 'chevron-down', altText: 'Toggle' }}
        listOptions={{
          type: 'selection',
          variant: 'DEFAULT',
          options: mockOptions,
        }}
      />,
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('Option 1')).toBeInTheDocument();
      expect(screen.getByText('Option 2')).toBeInTheDocument();
      expect(screen.getByText('Option 3')).toBeInTheDocument();
    });
  });

  it('calls onOptionClick when option is selected', async () => {
    const handleOptionClick = jest.fn();

    render(
      <SelectUnControlled
        variant="DEFAULT"
        label="Test Select"
        icon={{ icon: 'chevron-down', altText: 'Toggle' }}
        listOptions={{
          type: 'selection',
          variant: 'DEFAULT',
          options: mockOptions,
        }}
        onOptionClick={handleOptionClick}
      />,
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    await waitFor(() => {
      const option = screen.getByText('Option 1');
      fireEvent.click(option);
    });

    expect(handleOptionClick).toHaveBeenCalledWith('option1');
  });

  it('updates label with selected option', () => {
    const { rerender } = render(
      <SelectUnControlled
        variant="DEFAULT"
        label="Select an option"
        icon={{ icon: 'chevron-down', altText: 'Toggle' }}
        defaultOptionSelected="option2"
        listOptions={{
          type: 'selection',
          variant: 'DEFAULT',
          options: mockOptions,
        }}
      />,
    );

    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });
});
```

### Integration Testing

```tsx
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

function FormWithSelect() {
  const [country, setCountry] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <SelectUnControlled
        variant="DEFAULT"
        label={country || 'Select country'}
        icon={{ icon: 'chevron-down', altText: 'Toggle' }}
        listOptions={{
          type: 'selection',
          variant: 'DEFAULT',
          options: [
            { label: 'USA', value: 'us' },
            { label: 'UK', value: 'uk' },
          ],
        }}
        onOptionClick={setCountry}
      />
      <button type="submit">Submit</button>
      {submitted && <p>Country: {country}</p>}
    </form>
  );
}

describe('FormWithSelect Integration', () => {
  it('submits form with selected value', async () => {
    render(<FormWithSelect />);

    // Open select
    const selectButton = screen.getByRole('button', {
      name: /select country/i,
    });
    fireEvent.click(selectButton);

    // Select option
    await waitFor(() => {
      const option = screen.getByText('USA');
      fireEvent.click(option);
    });

    // Submit form
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);

    expect(screen.getByText('Country: us')).toBeInTheDocument();
  });
});
```

### Accessibility Testing

```tsx
import { SelectUnControlled } from '@kubit/web-ui-components';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Select Accessibility', () => {
  it('should not have accessibility violations', async () => {
    const { container } = render(
      <SelectUnControlled
        variant="DEFAULT"
        label="Accessible Select"
        icon={{ icon: 'chevron-down', altText: 'Toggle select' }}
        listOptions={{
          type: 'selection',
          variant: 'DEFAULT',
          options: [
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
          ],
        }}
        aria-label="Select an option"
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

## Related Components

- **ListOptions**: Component used internally for displaying options
- **Popover**: Component used for dropdown positioning
- **Button**: Alternative for single actions
- **RadioButton**: For visible selection options
- **Checkbox**: For multiple selections

## Browser Support

The Select component is compatible with:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Migration Guide

### From Previous Version

If migrating from an older version:

```tsx
// Old API
<Select
  label="Select option"
  options={options}
  onChange={handleChange}
/>

// New API
<SelectUnControlled
  variant="DEFAULT"
  label="Select option"
  icon={{ icon: 'chevron-down', altText: 'Toggle' }}
  listOptions={{
    type: 'selection',
    variant: 'DEFAULT',
    options: options,
  }}
  onOptionClick={handleChange}
/>
```

### Key Changes

1. **Label**: Now supports CommonTextProps for advanced styling
2. **Icon**: Required prop with CommonIconProps structure
3. **ListOptions**: Structured object with type, variant, and options
4. **Variants**: Added multiple variants (DEFAULT, SIDE_MENU, TOPBAR, TOPBAR_TAB)
5. **Callbacks**: Renamed `onChange` to `onOptionClick`
6. **Controlled Mode**: Separate `SelectControlled` component for controlled usage

## Troubleshooting

### Select Not Opening

**Problem**: Clicking the select doesn't open the dropdown.

**Solution**: Ensure `listOptions` is properly configured with options.

```tsx
// ✅ Correct
<SelectUnControlled
  variant="DEFAULT"
  label="Select"
  icon={{ icon: 'chevron-down', altText: 'Toggle' }}
  listOptions={{
    type: 'selection',
    variant: 'DEFAULT',
    options: [
      { label: 'Option 1', value: 'option1' },
    ],
  }}
/>

// ❌ Wrong: Missing options
<SelectUnControlled
  variant="DEFAULT"
  label="Select"
  icon={{ icon: 'chevron-down', altText: 'Toggle' }}
  listOptions={{
    type: 'selection',
    variant: 'DEFAULT',
    options: [],
  }}
/>
```

### Popover Not Positioned Correctly

**Problem**: Dropdown appears in wrong position.

**Solution**: Ensure proper popover configuration.

```tsx
// ✅ Correct
<SelectUnControlled
  variant="DEFAULT"
  label="Select"
  icon={{ icon: 'chevron-down', altText: 'Toggle' }}
  popover={{
    variant: 'DEFAULT',
    placement: 'bottom',
  }}
  listOptions={{
    type: 'selection',
    variant: 'DEFAULT',
    options: options,
  }}
/>
```

### Selected Value Not Updating

**Problem**: Selected value doesn't update in label.

**Solution**: Update label prop with selected value.

```tsx
// ✅ Correct: Update label with selection
const [selected, setSelected] = useState('');
const selectedOption = options.find((opt) => opt.value === selected);

<SelectUnControlled
  variant="DEFAULT"
  label={selectedOption?.label || 'Select an option'}
  icon={{ icon: 'chevron-down', altText: 'Toggle' }}
  defaultOptionSelected={selected}
  listOptions={{
    type: 'selection',
    variant: 'DEFAULT',
    options: options,
  }}
  onOptionClick={setSelected}
/>;
```

### Icon Not Rotating

**Problem**: Icon doesn't rotate when opening select.

**Solution**: Icon rotation is handled automatically by the component. Ensure icon prop is properly configured.

```tsx
// ✅ Correct
<SelectUnControlled
  variant="DEFAULT"
  label="Select"
  icon={{ icon: 'chevron-down', altText: 'Toggle' }}
  listOptions={{
    type: 'selection',
    variant: 'DEFAULT',
    options: options,
  }}
/>
```

## Additional Resources

- [WAI-ARIA Combobox Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)
- [Accessible Dropdown Menus](https://www.w3.org/WAI/tutorials/menus/flyout/)
- [Keyboard Navigation Best Practices](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/)

## Support

For bug reports, feature requests, or questions, please contact the development team or file an issue in the project repository.
