# Input

A flexible and accessible text input component with support for labels, decorations (icons/buttons), error states, and multiple visual variants. Built with a modular architecture using InputBase, InputLabel, and InputDecoration components.

## Features

- **Multiple Variants**: Standard, Filled, and Outlined styles
- **Decorations**: Left and right icons or interactive elements
- **States**: Error, disabled, focused, filled, required
- **Type Support**: All HTML input types (text, email, password, number, etc.)
- **Accessibility**: Full ARIA support and keyboard navigation
- **Auto-capitalization**: Control text capitalization behavior
- **Input Modes**: Virtual keyboard optimization for mobile devices
- **Truncation**: Text overflow handling
- **Flexible Styling**: Customizable CSS classes and variants

## Usage

### Basic Input

```tsx
import { Input } from '@/components/input';

function MyComponent() {
  return <Input placeholder="Enter your name" type="text" />;
}
```

### Input with Label

```tsx
import { Input } from '@/components/input';

function MyComponent() {
  return (
    <Input
      label={{ content: 'Email Address' }}
      placeholder="email@example.com"
      required
      type="email"
    />
  );
}
```

### Input with Error

```tsx
import { Input } from '@/components/input';

function MyComponent() {
  return (
    <Input
      error={true}
      label={{ content: 'Password' }}
      placeholder="Enter password"
      type="password"
    />
  );
}
```

### Input with Left Icon

```tsx
import { Input } from '@/components/input';
import { InputVariantType } from '@/lib/designSystem/kubit/components/input/variants';

function MyComponent() {
  return (
    <Input
      leftDecoration={{
        decoration: {
          icon: 'SEARCH_ICON',
          altText: 'Search',
        },
      }}
      placeholder="Search..."
      type="text"
      variant={InputVariantType.OUTLINED}
    />
  );
}
```

### Input with Right Action Button

```tsx
import { Input } from '@/components/input';
import { InputVariantType } from '@/lib/designSystem/kubit/components/input/variants';

function MyComponent() {
  const handleClear = () => {
    console.log('Clear input');
  };

  return (
    <Input
      placeholder="Enter text"
      rightDecoration={{
        decoration: {
          icon: 'CLOSE_ICON',
          altText: 'Clear',
          onClick: handleClear,
        },
      }}
      type="text"
      variant={InputVariantType.FILLED}
    />
  );
}
```

### Controlled Input

```tsx
import { useState } from 'react';

import { Input } from '@/components/input';

function MyComponent() {
  const [value, setValue] = useState('');

  return (
    <Input
      label={{ content: 'Username' }}
      placeholder="Enter username"
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
```

## Props

### InputProps

| Property            | Type                                   | Description                | Required | Default        |
| ------------------- | -------------------------------------- | -------------------------- | -------- | -------------- |
| `variant`           | `'STANDARD' \| 'FILLED' \| 'OUTLINED'` | Visual style variant       | No       | `'STANDARD'`   |
| `type`              | `string`                               | HTML input type            | No       | `'text'`       |
| `value`             | `string \| number`                     | Controlled value           | No       | -              |
| `defaultValue`      | `string \| number`                     | Uncontrolled default value | No       | -              |
| `placeholder`       | `string`                               | Placeholder text           | No       | -              |
| `disabled`          | `boolean`                              | Disables the input         | No       | `false`        |
| `required`          | `boolean`                              | Marks input as required    | No       | `false`        |
| `error`             | `boolean`                              | Shows error state          | No       | `false`        |
| `readOnly`          | `boolean`                              | Makes input read-only      | No       | `false`        |
| `autoFocus`         | `boolean`                              | Auto-focus on mount        | No       | `false`        |
| `maxLength`         | `number`                               | Maximum character length   | No       | -              |
| `minLength`         | `number`                               | Minimum character length   | No       | -              |
| `pattern`           | `string`                               | Validation pattern         | No       | -              |
| `label`             | `IInputLabelProps`                     | Label configuration        | No       | -              |
| `leftDecoration`    | `InputDecorationProps`                 | Left icon/button           | No       | -              |
| `rightDecoration`   | `InputDecorationProps`                 | Right icon/button          | No       | -              |
| `truncate`          | `boolean`                              | Enable text truncation     | No       | `false`        |
| `inputMode`         | `InputModeType`                        | Virtual keyboard mode      | No       | -              |
| `autoCapitalize`    | `AutoCapitalizeType`                   | Auto-capitalization        | No       | -              |
| `id`                | `string`                               | Element ID                 | No       | Auto-generated |
| `name`              | `string`                               | Input name attribute       | No       | -              |
| `aria-label`        | `string`                               | ARIA label                 | No       | -              |
| `aria-describedby`  | `string`                               | ARIA description ID        | No       | -              |
| `aria-invalid`      | `boolean`                              | ARIA invalid state         | No       | -              |
| `onChange`          | `(e: ChangeEvent) => void`             | Change handler             | No       | -              |
| `onFocus`           | `(e: FocusEvent) => void`              | Focus handler              | No       | -              |
| `onBlur`            | `(e: FocusEvent) => void`              | Blur handler               | No       | -              |
| `onKeyDown`         | `(e: KeyboardEvent) => void`           | Key down handler           | No       | -              |
| `onPaste`           | `(e: ClipboardEvent) => void`          | Paste handler              | No       | -              |
| `onCopy`            | `(e: ClipboardEvent) => void`          | Copy handler               | No       | -              |
| `additionalClasses` | `Partial<InputCssClasses>`             | Custom CSS classes         | No       | -              |

### Input Variants

```typescript
export const InputVariantType = {
  STANDARD: 'STANDARD', // Bottom border only
  FILLED: 'FILLED', // Filled background
  OUTLINED: 'OUTLINED', // Full border outline
} as const;
```

### Input Modes

```typescript
type InputModeType =
  | 'none' // No virtual keyboard
  | 'text' // Standard text keyboard
  | 'tel' // Telephone keypad
  | 'url' // URL keyboard with .com
  | 'email' // Email keyboard with @
  | 'numeric' // Numeric keypad
  | 'decimal' // Decimal numeric keypad
  | 'search'; // Search keyboard
```

### Auto Capitalization

```typescript
type AutoCapitalizeType =
  | 'off'
  | 'none' // No auto-capitalization
  | 'on'
  | 'sentences' // First letter of sentences
  | 'words' // First letter of each word
  | 'characters'; // All characters
```

## Common Patterns

### Email Input

```tsx
import { Input } from '@/components/input';
import { InputVariantType } from '@/lib/designSystem/kubit/components/input/variants';

function EmailInput() {
  return (
    <Input
      autoCapitalize="none"
      inputMode="email"
      label={{ content: 'Email' }}
      leftDecoration={{
        decoration: {
          icon: 'EMAIL_ICON',
          altText: 'Email',
        },
      }}
      placeholder="your.email@example.com"
      required
      type="email"
      variant={InputVariantType.OUTLINED}
    />
  );
}
```

### Password Input with Toggle

```tsx
import { useState } from 'react';

import { Input } from '@/components/input';
import { InputVariantType } from '@/lib/designSystem/kubit/components/input/variants';

function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Input
      label={{ content: 'Password' }}
      placeholder="Enter password"
      required
      rightDecoration={{
        decoration: {
          icon: showPassword ? 'EYE_OFF_ICON' : 'EYE_ICON',
          altText: showPassword ? 'Hide password' : 'Show password',
          onClick: () => setShowPassword(!showPassword),
        },
      }}
      type={showPassword ? 'text' : 'password'}
      variant={InputVariantType.FILLED}
    />
  );
}
```

### Search Input

```tsx
import { useState } from 'react';

import { Input } from '@/components/input';
import { InputVariantType } from '@/lib/designSystem/kubit/components/input/variants';

function SearchInput() {
  const [searchValue, setSearchValue] = useState('');

  const handleClear = () => {
    setSearchValue('');
  };

  return (
    <Input
      inputMode="search"
      leftDecoration={{
        decoration: {
          icon: 'SEARCH_ICON',
          altText: 'Search',
        },
      }}
      placeholder="Search..."
      rightDecoration={
        searchValue
          ? {
              decoration: {
                icon: 'CLOSE_ICON',
                altText: 'Clear',
                onClick: handleClear,
              },
            }
          : undefined
      }
      type="search"
      value={searchValue}
      variant={InputVariantType.OUTLINED}
      onChange={(e) => setSearchValue(e.target.value)}
    />
  );
}
```

### Phone Number Input

```tsx
import { Input } from '@/components/input';
import { InputVariantType } from '@/lib/designSystem/kubit/components/input/variants';

function PhoneInput() {
  return (
    <Input
      autoCapitalize="none"
      inputMode="tel"
      label={{ content: 'Phone Number' }}
      leftDecoration={{
        decoration: {
          icon: 'PHONE_ICON',
          altText: 'Phone',
        },
      }}
      maxLength={15}
      placeholder="+1 (555) 123-4567"
      type="tel"
      variant={InputVariantType.STANDARD}
    />
  );
}
```

### Number Input with Increment/Decrement

```tsx
import { useState } from 'react';

import { Input } from '@/components/input';
import { InputVariantType } from '@/lib/designSystem/kubit/components/input/variants';

function NumberInput() {
  const [value, setValue] = useState(0);

  const increment = () => setValue((v) => v + 1);
  const decrement = () => setValue((v) => Math.max(0, v - 1));

  return (
    <Input
      inputMode="numeric"
      label={{ content: 'Quantity' }}
      leftDecoration={{
        decoration: {
          icon: 'MINUS_ICON',
          altText: 'Decrease',
          onClick: decrement,
        },
      }}
      rightDecoration={{
        decoration: {
          icon: 'PLUS_ICON',
          altText: 'Increase',
          onClick: increment,
        },
      }}
      type="number"
      value={value}
      variant={InputVariantType.OUTLINED}
      onChange={(e) => setValue(Number(e.target.value))}
    />
  );
}
```

### Input with Validation

```tsx
import { useState } from 'react';

import { Input } from '@/components/input';
import { InputVariantType } from '@/lib/designSystem/kubit/components/input/variants';

function ValidatedInput() {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    setError(newValue.length < 3);
  };

  return (
    <Input
      error={error}
      label={{ content: 'Username' }}
      minLength={3}
      placeholder="Minimum 3 characters"
      type="text"
      value={value}
      variant={InputVariantType.OUTLINED}
      onChange={handleChange}
    />
  );
}
```

### URL Input

```tsx
import { Input } from '@/components/input';
import { InputVariantType } from '@/lib/designSystem/kubit/components/input/variants';

function URLInput() {
  return (
    <Input
      autoCapitalize="none"
      inputMode="url"
      label={{ content: 'Website' }}
      leftDecoration={{
        decoration: {
          icon: 'LINK_ICON',
          altText: 'URL',
        },
      }}
      placeholder="https://example.com"
      type="url"
      variant={InputVariantType.STANDARD}
    />
  );
}
```

### Disabled Input

```tsx
import { Input } from '@/components/input';
import { InputVariantType } from '@/lib/designSystem/kubit/components/input/variants';

function DisabledInput() {
  return (
    <Input
      defaultValue="This is disabled"
      disabled
      label={{ content: 'Disabled Field' }}
      type="text"
      variant={InputVariantType.FILLED}
    />
  );
}
```

## Accessibility

### Required Fields

```tsx
// Properly marked required field
<Input
  label={{ content: 'Email' }}
  required
  type="email"
  aria-required="true"
/>
```

### Error States

```tsx
// Input with error and description
<Input
  aria-describedby="email-error"
  aria-invalid="true"
  error={true}
  label={{ content: 'Email' }}
  type="email"
/>
<span id="email-error">Please enter a valid email address</span>
```

### Label Association

```tsx
// Label properly associated with input
<Input id="username-input" label={{ content: 'Username' }} type="text" />
```

### Screen Reader Support

```tsx
// Descriptive ARIA labels
<Input aria-label="Search products" placeholder="Search..." type="search" />
```

## Best Practices

### 1. Always Provide Labels

```tsx
// ✅ Good - Has label
<Input
  label={{ content: 'Email' }}
  type="email"
/>

// ⚠️ Acceptable - Has aria-label
<Input
  aria-label="Email address"
  placeholder="Email"
  type="email"
/>

// ❌ Bad - No label or aria-label
<Input
  placeholder="Email"
  type="email"
/>
```

### 2. Use Appropriate Input Types

```tsx
// ✅ Good - Correct types
<Input type="email" placeholder="Email" />
<Input type="tel" placeholder="Phone" />
<Input type="number" placeholder="Age" />
<Input type="url" placeholder="Website" />

// ❌ Bad - Generic text type for everything
<Input type="text" placeholder="Email" />
<Input type="text" placeholder="Phone" />
```

### 3. Optimize for Mobile

```tsx
// ✅ Good - Proper input mode and capitalization
<Input
  autoCapitalize="none"
  inputMode="email"
  type="email"
/>

<Input
  inputMode="tel"
  type="tel"
/>

<Input
  inputMode="numeric"
  type="number"
/>
```

### 4. Handle Validation Properly

```tsx
// ✅ Good - Clear error indication
<Input
  aria-describedby="error-message"
  aria-invalid="true"
  error={true}
  label={{ content: 'Email' }}
  type="email"
/>

// ❌ Bad - Error without explanation
<Input
  error={true}
  label={{ content: 'Email' }}
  type="email"
/>
```

### 5. Use Decorations Meaningfully

```tsx
// ✅ Good - Decorations add value
<Input
  leftDecoration={{
    decoration: {
      icon: 'SEARCH_ICON',
      altText: 'Search',
    },
  }}
  placeholder="Search products"
  type="search"
/>

// ⚠️ Caution - Decorative only
<Input
  leftDecoration={{
    decoration: {
      icon: 'GENERIC_ICON',
      altText: '',
    },
  }}
  placeholder="Input"
  type="text"
/>
```

### 6. Provide Helpful Placeholders

```tsx
// ✅ Good - Descriptive placeholder
<Input
  label={{ content: 'Phone' }}
  placeholder="+1 (555) 123-4567"
  type="tel"
/>

// ❌ Bad - Redundant placeholder
<Input
  label={{ content: 'Email' }}
  placeholder="Email"
  type="email"
/>
```

## Performance Considerations

### Controlled vs Uncontrolled

```tsx
// Controlled - Re-renders on every change
const [value, setValue] = useState('');
<Input value={value} onChange={(e) => setValue(e.target.value)} />

// Uncontrolled - Better for large forms
<Input defaultValue="Initial value" />
```

### Debouncing Input

```tsx
import { useCallback, useState } from 'react';

import { debounce } from 'lodash';

import { Input } from '@/components/input';

function DebouncedInput() {
  const [value, setValue] = useState('');

  const handleSearch = useCallback(
    debounce((searchTerm: string) => {
      // Perform search
      console.log('Searching for:', searchTerm);
    }, 300),
    [],
  );

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    handleSearch(newValue);
  };

  return (
    <Input
      placeholder="Search..."
      type="search"
      value={value}
      onChange={handleChange}
    />
  );
}
```

## Testing

### Basic Rendering

```tsx
import { render, screen } from '@testing-library/react';

import { Input } from './input';

test('renders input with label', () => {
  render(<Input label={{ content: 'Email' }} type="email" />);

  expect(screen.getByLabelText('Email')).toBeInTheDocument();
});
```

### User Interaction

```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Input } from './input';

test('calls onChange when typing', async () => {
  const handleChange = jest.fn();
  render(
    <Input label={{ content: 'Name' }} type="text" onChange={handleChange} />,
  );

  const input = screen.getByLabelText('Name');
  await userEvent.type(input, 'John');

  expect(handleChange).toHaveBeenCalled();
});
```

### Error State

```tsx
test('displays error state', () => {
  render(<Input error={true} label={{ content: 'Email' }} type="email" />);

  const container = screen.getByTestId('input-container');
  expect(container).toHaveAttribute(
    'data-state',
    expect.stringContaining('error'),
  );
});
```

### Accessibility

```tsx
import { axe } from 'jest-axe';

test('has no accessibility violations', async () => {
  const { container } = render(
    <Input label={{ content: 'Email' }} required type="email" />,
  );

  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

## Related Components

- **InputBase**: Base input element without decorations
- **InputLabel**: Label component for inputs
- **InputDecoration**: Icon/button decorations for inputs
- **TextArea**: Multi-line text input

## Notes

- Input automatically generates unique IDs if not provided
- Focus and filled states are managed internally
- Supports all standard HTML input attributes
- Decorations can be icons or custom React components
- Uses data attributes for state styling (`data-state`)
- Built with a modular component architecture
