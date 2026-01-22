# InputBase

A low-level, foundational input component that provides the base functionality for all text input fields. This component is designed to be composable and is used internally by higher-level input components like Input, TextArea, and others.

## Features

- **Multiple Variants**: Standard, Filled, and Outlined styles
- **State Management**: Focused, filled, error, and disabled states
- **Type Support**: All HTML input types (text, email, password, number, etc.)
- **Input Modes**: Virtual keyboard optimization for mobile devices
- **Auto-capitalization**: Control text capitalization behavior
- **Truncation Support**: Handle text overflow
- **Accessibility**: Full ARIA support and keyboard navigation
- **Flexible**: Accepts all standard HTML input attributes
- **Composable**: Designed to be used as a building block

## Usage

### Basic InputBase

```tsx
import { InputBase } from '@/components/inputBase';

function MyComponent() {
  return <InputBase placeholder="Enter text" type="text" />;
}
```

### InputBase with State

```tsx
import { useState } from 'react';

import { InputBase } from '@/components/inputBase';

function MyComponent() {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');

  return (
    <InputBase
      filled={!!value}
      focused={focused}
      placeholder="Enter text"
      type="text"
      value={value}
      onBlur={() => setFocused(false)}
      onChange={(e) => setValue(e.target.value)}
      onFocus={() => setFocused(true)}
    />
  );
}
```

### InputBase with Error

```tsx
import { InputBase } from '@/components/inputBase';
import { InputBaseVariantType } from '@/lib/designSystem/kubit/components/inputBase/variants';

function MyComponent() {
  return (
    <InputBase
      error={true}
      placeholder="Enter text"
      type="text"
      variant={InputBaseVariantType.OUTLINED}
    />
  );
}
```

### InputBase with Variant

```tsx
import { InputBase } from '@/components/inputBase';
import { InputBaseVariantType } from '@/lib/designSystem/kubit/components/inputBase/variants';

function MyComponent() {
  return (
    <InputBase
      placeholder="Enter text"
      type="text"
      variant={InputBaseVariantType.FILLED}
    />
  );
}
```

### Controlled InputBase

```tsx
import { useState } from 'react';

import { InputBase } from '@/components/inputBase';

function MyComponent() {
  const [value, setValue] = useState('');

  return (
    <InputBase
      placeholder="Enter text"
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
```

## Props

### InputBaseProps

| Property            | Type                                   | Description                | Required | Default        |
| ------------------- | -------------------------------------- | -------------------------- | -------- | -------------- |
| `variant`           | `'STANDARD' \| 'FILLED' \| 'OUTLINED'` | Visual style variant       | No       | `'STANDARD'`   |
| `type`              | `string`                               | HTML input type            | No       | `'text'`       |
| `value`             | `string \| number`                     | Controlled value           | No       | -              |
| `defaultValue`      | `string \| number`                     | Uncontrolled default value | No       | -              |
| `placeholder`       | `string`                               | Placeholder text           | No       | -              |
| `disabled`          | `boolean`                              | Disables the input         | No       | `false`        |
| `required`          | `boolean`                              | Marks input as required    | No       | `false`        |
| `readOnly`          | `boolean`                              | Makes input read-only      | No       | `false`        |
| `autoFocus`         | `boolean`                              | Auto-focus on mount        | No       | `false`        |
| `maxLength`         | `number`                               | Maximum character length   | No       | -              |
| `minLength`         | `number`                               | Minimum character length   | No       | -              |
| `pattern`           | `string`                               | Validation pattern         | No       | -              |
| `error`             | `boolean`                              | Error state (internal)     | No       | `false`        |
| `filled`            | `boolean`                              | Filled state (internal)    | No       | `false`        |
| `focused`           | `boolean`                              | Focused state (internal)   | No       | `false`        |
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
| `additionalClasses` | `Partial<InputBaseCssClasses>`         | Custom CSS classes         | No       | -              |

### Variants

```typescript
export const InputBaseVariantType = {
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

### Text Input

```tsx
import { InputBase } from '@/components/inputBase';
import { InputBaseVariantType } from '@/lib/designSystem/kubit/components/inputBase/variants';

function TextInput() {
  return (
    <InputBase
      placeholder="Enter text..."
      type="text"
      variant={InputBaseVariantType.STANDARD}
    />
  );
}
```

### Email Input

```tsx
import { InputBase } from '@/components/inputBase';
import { InputBaseVariantType } from '@/lib/designSystem/kubit/components/inputBase/variants';

function EmailInput() {
  return (
    <InputBase
      autoCapitalize="none"
      inputMode="email"
      placeholder="email@example.com"
      type="email"
      variant={InputBaseVariantType.OUTLINED}
    />
  );
}
```

### Password Input

```tsx
import { InputBase } from '@/components/inputBase';
import { InputBaseVariantType } from '@/lib/designSystem/kubit/components/inputBase/variants';

function PasswordInput() {
  return (
    <InputBase
      placeholder="Enter password"
      type="password"
      variant={InputBaseVariantType.FILLED}
    />
  );
}
```

### Number Input

```tsx
import { InputBase } from '@/components/inputBase';
import { InputBaseVariantType } from '@/lib/designSystem/kubit/components/inputBase/variants';

function NumberInput() {
  return (
    <InputBase
      inputMode="numeric"
      max={100}
      min={0}
      placeholder="0"
      type="number"
      variant={InputBaseVariantType.OUTLINED}
    />
  );
}
```

### Phone Input

```tsx
import { InputBase } from '@/components/inputBase';
import { InputBaseVariantType } from '@/lib/designSystem/kubit/components/inputBase/variants';

function PhoneInput() {
  return (
    <InputBase
      autoCapitalize="none"
      inputMode="tel"
      maxLength={15}
      placeholder="+1 (555) 123-4567"
      type="tel"
      variant={InputBaseVariantType.STANDARD}
    />
  );
}
```

### Search Input

```tsx
import { InputBase } from '@/components/inputBase';
import { InputBaseVariantType } from '@/lib/designSystem/kubit/components/inputBase/variants';

function SearchInput() {
  return (
    <InputBase
      inputMode="search"
      placeholder="Search..."
      type="search"
      variant={InputBaseVariantType.FILLED}
    />
  );
}
```

### Input with Validation

```tsx
import { useState } from 'react';

import { InputBase } from '@/components/inputBase';
import { InputBaseVariantType } from '@/lib/designSystem/kubit/components/inputBase/variants';

function ValidatedInput() {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    setError(newValue.length < 3);
  };

  return (
    <InputBase
      error={error}
      filled={!!value}
      minLength={3}
      placeholder="Min 3 characters"
      type="text"
      value={value}
      variant={InputBaseVariantType.OUTLINED}
      onChange={handleChange}
    />
  );
}
```

### Disabled Input

```tsx
import { InputBase } from '@/components/inputBase';
import { InputBaseVariantType } from '@/lib/designSystem/kubit/components/inputBase/variants';

function DisabledInput() {
  return (
    <InputBase
      defaultValue="Disabled"
      disabled
      type="text"
      variant={InputBaseVariantType.FILLED}
    />
  );
}
```

### Read-only Input

```tsx
import { InputBase } from '@/components/inputBase';
import { InputBaseVariantType } from '@/lib/designSystem/kubit/components/inputBase/variants';

function ReadOnlyInput() {
  return (
    <InputBase
      defaultValue="Read-only value"
      readOnly
      type="text"
      variant={InputBaseVariantType.STANDARD}
    />
  );
}
```

### Input with Truncation

```tsx
import { InputBase } from '@/components/inputBase';
import { InputBaseVariantType } from '@/lib/designSystem/kubit/components/inputBase/variants';

function TruncatedInput() {
  return (
    <InputBase
      defaultValue="This is a very long text that will be truncated"
      truncate
      type="text"
      variant={InputBaseVariantType.OUTLINED}
    />
  );
}
```

## Accessibility

### ARIA Attributes

```tsx
// Input with proper ARIA labeling
<InputBase
  aria-label="Username"
  placeholder="Enter username"
  type="text"
/>

// Input with error state
<InputBase
  aria-describedby="error-message"
  aria-invalid="true"
  error={true}
  placeholder="Enter email"
  type="email"
/>
<span id="error-message">Please enter a valid email</span>
```

### Required Fields

```tsx
// Properly marked required field
<InputBase aria-required="true" required type="text" />
```

### Keyboard Navigation

InputBase supports full keyboard navigation:

- `Tab` - Move focus to/from input
- `Shift + Tab` - Move focus backwards
- `Enter` - Submit form (if in a form)
- `Escape` - Clear input (custom behavior)

## Best Practices

### 1. Use Appropriate Input Types

```tsx
// ✅ Good - Correct types
<InputBase type="email" placeholder="Email" />
<InputBase type="tel" placeholder="Phone" />
<InputBase type="number" placeholder="Age" />
<InputBase type="url" placeholder="Website" />

// ❌ Bad - Generic text type for everything
<InputBase type="text" placeholder="Email" />
<InputBase type="text" placeholder="Phone" />
```

### 2. Optimize for Mobile

```tsx
// ✅ Good - Proper input mode and capitalization
<InputBase
  autoCapitalize="none"
  inputMode="email"
  type="email"
/>

<InputBase
  inputMode="tel"
  type="tel"
/>

<InputBase
  inputMode="numeric"
  type="number"
/>
```

### 3. Manage States Explicitly

```tsx
// ✅ Good - Clear state management
const [value, setValue] = useState('');
const [focused, setFocused] = useState(false);

<InputBase
  error={value.length > 0 && value.length < 3}
  filled={!!value}
  focused={focused}
  value={value}
  onBlur={() => setFocused(false)}
  onChange={(e) => setValue(e.target.value)}
  onFocus={() => setFocused(true)}
/>;
```

### 4. Provide Helpful Placeholders

```tsx
// ✅ Good - Descriptive placeholder
<InputBase
  placeholder="+1 (555) 123-4567"
  type="tel"
/>

// ❌ Bad - Generic placeholder
<InputBase
  placeholder="Phone"
  type="tel"
/>
```

### 5. Use Custom Classes Sparingly

```tsx
// ✅ Good - Minimal custom styling
<InputBase
  additionalClasses={{
    input_base: 'custom-focus-style',
  }}
  type="text"
/>

// ⚠️ Caution - Too many custom styles
<InputBase
  additionalClasses={{
    input_base: 'custom-1 custom-2 custom-3 custom-4',
  }}
  type="text"
/>
```

### 6. Handle Validation Properly

```tsx
// ✅ Good - Clear validation feedback
<InputBase
  aria-describedby="error-msg"
  aria-invalid="true"
  error={true}
  type="email"
/>

// ❌ Bad - Silent validation
<InputBase
  error={true}
  type="email"
/>
```

## Performance Considerations

### Controlled vs Uncontrolled

```tsx
// Controlled - Re-renders on every change
const [value, setValue] = useState('');
<InputBase value={value} onChange={(e) => setValue(e.target.value)} />

// Uncontrolled - Better performance for simple use cases
<InputBase defaultValue="Initial value" />
```

### Memoization

```tsx
import { memo } from 'react';

import { InputBase } from '@/components/inputBase';

// Memoize to prevent unnecessary re-renders
const MemoizedInputBase = memo(InputBase);
```

## Testing

### Basic Rendering

```tsx
import { render, screen } from '@testing-library/react';

import { InputBase } from './inputBase';

test('renders input base', () => {
  render(<InputBase placeholder="Test" type="text" />);

  const input = screen.getByPlaceholderText('Test');
  expect(input).toBeInTheDocument();
});
```

### User Interaction

```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { InputBase } from './inputBase';

test('calls onChange when typing', async () => {
  const handleChange = jest.fn();
  render(<InputBase placeholder="Test" type="text" onChange={handleChange} />);

  const input = screen.getByPlaceholderText('Test');
  await userEvent.type(input, 'Hello');

  expect(handleChange).toHaveBeenCalled();
});
```

### State Testing

```tsx
test('displays error state', () => {
  render(<InputBase error={true} placeholder="Test" type="text" />);

  const input = screen.getByTestId('input-base');
  expect(input).toHaveAttribute('data-state', expect.stringContaining('error'));
});
```

### Accessibility

```tsx
import { axe } from 'jest-axe';

test('has no accessibility violations', async () => {
  const { container } = render(
    <InputBase aria-label="Test input" type="text" />,
  );

  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

## Related Components

- **Input**: High-level input with label and decorations
- **InputLabel**: Label component for inputs
- **InputDecoration**: Icon/button decorations for inputs
- **TextArea**: Multi-line text input

## Notes

- InputBase is a foundational component designed for composition
- It automatically generates unique IDs if not provided
- Focus, filled, and error states should be managed by parent components
- Supports all standard HTML input attributes
- Uses data attributes for state styling (`data-state`, `data-truncate`)
- The `aria-invalid` attribute is automatically set based on the `error` prop
- Designed to work seamlessly with InputLabel and InputDecoration components
