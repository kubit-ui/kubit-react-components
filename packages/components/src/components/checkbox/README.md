# Checkbox

The Checkbox component provides a customizable form control for boolean input with support for labels, error messages, icons, and both controlled and uncontrolled modes.

## Features

- **Controlled & Uncontrolled**: Use either controlled or uncontrolled variants
- **Label support**: Optional labels with flexible positioning
- **Error states**: Visual error feedback with custom messages
- **Icons**: Customizable checked icon
- **Disabled state**: Visual and functional disabled mode
- **Accessible**: Full ARIA support and keyboard navigation
- **Screen reader support**: Additional context for assistive technologies

## Basic Usage

### Uncontrolled Checkbox

```tsx
import { CheckboxUnControlled } from '@/components/checkbox';

function App() {
  return (
    <CheckboxUnControlled
      variant="DEFAULT"
      label={{ content: 'Accept terms and conditions' }}
      name="terms"
    />
  );
}
```

### Controlled Checkbox

```tsx
import { useState } from 'react';

import { CheckboxControlled } from '@/components/checkbox';

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <CheckboxControlled
      variant="DEFAULT"
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
      label={{ content: 'Accept terms and conditions' }}
    />
  );
}
```

## With Error State

Display validation errors:

```tsx
<CheckboxControlled
  variant="DEFAULT"
  checked={false}
  error={true}
  errorMessage={{
    message: { content: 'You must accept the terms to continue' },
    icon: { icon: ICONS.ERROR },
  }}
  label={{ content: 'Accept terms' }}
/>
```

## Disabled State

```tsx
<CheckboxUnControlled
  variant="DEFAULT"
  disabled={true}
  label={{ content: 'This option is disabled' }}
/>
```

## With Custom Icon

Customize the checked icon:

```tsx
<CheckboxUnControlled
  variant="DEFAULT"
  checkedIcon={{
    icon: ICONS.CHECKMARK_THICK,
    altText: 'Checked',
  }}
  label={{ content: 'Custom check icon' }}
/>
```

## Required Field

Mark checkbox as required for forms:

```tsx
<CheckboxUnControlled
  variant="DEFAULT"
  required={true}
  label={{ content: 'I agree to the privacy policy *' }}
/>
```

## Props

### CheckboxControlledProps / CheckboxUnControlledProps

| Prop               | Type                    | Default | Description                               |
| ------------------ | ----------------------- | ------- | ----------------------------------------- |
| `variant`          | `string`                | -       | Visual variant from theme configuration   |
| `checked`          | `boolean`               | -       | Controlled: checkbox checked state        |
| `disabled`         | `boolean`               | `false` | Disable all interactions                  |
| `error`            | `boolean`               | `false` | Show error state                          |
| `required`         | `boolean`               | `false` | Mark field as required                    |
| `label`            | `CheckboxLabelType`     | -       | Label configuration or string             |
| `errorMessage`     | `CheckboxMessageType`   | -       | Error message with optional icon          |
| `checkedIcon`      | `CommonIconProps`       | -       | Custom checked icon or string             |
| `name`             | `string`                | -       | Input name attribute                      |
| `id`               | `string`                | -       | Input id attribute                        |
| `value`            | `string`                | -       | Input value attribute                     |
| `inputRef`         | `Ref<HTMLInputElement>` | -       | Ref to the input element                  |
| `screenReaderText` | `string`                | -       | Additional context for screen readers     |
| `checkboxBase`     | `object`                | -       | Configuration for base checkbox component |
| `onChange`         | `function`              | -       | Change event handler                      |
| `onBlur`           | `function`              | -       | Blur event handler                        |
| `tabIndex`         | `number`                | -       | Custom tab index                          |
| `aria-label`       | `string`                | -       | ARIA label                                |
| `aria-labelledby`  | `string`                | -       | ARIA labelledby reference                 |
| `aria-describedby` | `string`                | -       | ARIA describedby reference                |
| `data-*`           | `string`                | -       | Data attributes for testing/tracking      |

### CheckboxLabelType

| Prop      | Type                    | Description           |
| --------- | ----------------------- | --------------------- |
| `content` | `string \| JSX.Element` | Label text or element |

### CheckboxMessageType

| Prop      | Type                        | Description               |
| --------- | --------------------------- | ------------------------- |
| `message` | `CommonTextProps \| string` | Error message text        |
| `icon`    | `CommonIconProps \| string` | Optional icon for message |

## Form Integration

### With Form Libraries

```tsx
import { Controller, useForm } from 'react-hook-form';

function MyForm() {
  const { control, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="terms"
        control={control}
        rules={{ required: 'You must accept the terms' }}
        render={({ field, fieldState }) => (
          <CheckboxControlled
            {...field}
            checked={field.value}
            error={!!fieldState.error}
            errorMessage={
              fieldState.error
                ? {
                    message: { content: fieldState.error.message },
                  }
                : undefined
            }
            label={{ content: 'Accept terms' }}
          />
        )}
      />
    </form>
  );
}
```

### Native Form

```tsx
<form>
  <CheckboxUnControlled
    name="newsletter"
    value="yes"
    label={{ content: 'Subscribe to newsletter' }}
  />
  <button type="submit">Submit</button>
</form>
```

## Common Patterns

### Checkbox List

```tsx
const options = [
  { id: 'option1', label: 'Option 1' },
  { id: 'option2', label: 'Option 2' },
  { id: 'option3', label: 'Option 3' },
];

function CheckboxList() {
  const [selected, setSelected] = useState<string[]>([]);

  const handleChange = (id: string, checked: boolean) => {
    setSelected((prev) =>
      checked ? [...prev, id] : prev.filter((item) => item !== id),
    );
  };

  return (
    <div>
      {options.map((option) => (
        <CheckboxControlled
          key={option.id}
          checked={selected.includes(option.id)}
          onChange={(e) => handleChange(option.id, e.target.checked)}
          label={{ content: option.label }}
        />
      ))}
    </div>
  );
}
```

### Select All Checkbox

```tsx
function SelectAll() {
  const [items, setItems] = useState([
    { id: 1, checked: false },
    { id: 2, checked: false },
    { id: 3, checked: false },
  ]);

  const allChecked = items.every((item) => item.checked);
  const someChecked = items.some((item) => item.checked);

  const handleSelectAll = (checked: boolean) => {
    setItems(items.map((item) => ({ ...item, checked })));
  };

  return (
    <div>
      <CheckboxControlled
        checked={allChecked}
        onChange={(e) => handleSelectAll(e.target.checked)}
        label={{ content: 'Select All' }}
      />
      {items.map((item) => (
        <CheckboxControlled
          key={item.id}
          checked={item.checked}
          onChange={(e) => {
            setItems(
              items.map((i) =>
                i.id === item.id ? { ...i, checked: e.target.checked } : i,
              ),
            );
          }}
          label={{ content: `Item ${item.id}` }}
        />
      ))}
    </div>
  );
}
```

### With Validation

```tsx
function ValidatedCheckbox() {
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!checked) {
      setError('You must accept the terms');
    } else {
      setError('');
      // Proceed with form submission
    }
  };

  return (
    <div>
      <CheckboxControlled
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
          setError('');
        }}
        error={!!error}
        errorMessage={
          error
            ? {
                message: { content: error },
              }
            : undefined
        }
        label={{ content: 'Accept terms and conditions' }}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
```

## Accessibility

- Native `<input type="checkbox">` for full browser support
- Proper label association via `htmlFor` and `id`
- ARIA attributes for enhanced screen reader support
- Keyboard navigation (Space to toggle)
- Focus indicators for keyboard users
- Error messages announced to screen readers

## Best Practices

1. **Always provide labels**: Users need to know what they're checking
2. **Use meaningful names**: Form field names should be descriptive
3. **Group related checkboxes**: Use fieldsets for checkbox groups
4. **Validate appropriately**: Show errors only after user interaction
5. **Clear error messages**: Be specific about what needs to be fixed
6. **Disabled vs hidden**: Use disabled for unavailable options, hide irrelevant ones
7. **Required indicators**: Mark required fields clearly (not just with color)

## Related Components

- **CheckboxBase**: Base component for custom checkbox implementations
- **Toggle**: For on/off switches
- **RadioButton**: For single selection from multiple options
- **Label**: For standalone labels
