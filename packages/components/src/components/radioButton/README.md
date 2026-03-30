# RadioButton Component

## Overview

The **RadioButton** component provides a styled radio input for single selection from multiple options. It's commonly used in forms and settings where users need to choose one option from a group. The component includes support for labels, subtitles, error states, and accessibility features.

## Features

- **Single Selection**: Choose one option from a group
- **Label Support**: Optional label text with customization
- **Subtitle Text**: Additional descriptive text below the label
- **Error States**: Display error messages and icons
- **Disabled State**: Prevent interaction when needed
- **Checked State**: Visual feedback for selected option
- **Accessibility**: Full ARIA support and keyboard navigation
- **Custom Styling**: Flexible CSS class customization
- **Grouping**: Works with radio button groups for related options
- **Icon Support**: Error icon display capability

## Installation

```bash
npm install @kubit/web-ui-components
```

## Usage

### Basic Usage

```tsx
import { useState } from 'react';

import { RadioButton } from '@kubit/web-ui-components';

function App() {
  const [selected, setSelected] = useState('option1');

  return (
    <RadioButton
      variant="DEFAULT"
      name="options"
      value="option1"
      checked={selected === 'option1'}
      label={{ content: 'Option 1' }}
      onChange={(e) => setSelected(e.target.value)}
    />
  );
}
```

### Radio Button Group

```tsx
import { useState } from 'react';

import { RadioButton } from '@kubit/web-ui-components';

function App() {
  const [selected, setSelected] = useState('');

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <div>
      {options.map((option) => (
        <RadioButton
          key={option.value}
          variant="DEFAULT"
          name="group"
          value={option.value}
          checked={selected === option.value}
          label={{ content: option.label }}
          onChange={(e) => setSelected(e.target.value)}
        />
      ))}
    </div>
  );
}
```

### With Subtitle

```tsx
import { RadioButton } from '@kubit/web-ui-components';

function App() {
  const [selected, setSelected] = useState('premium');

  return (
    <RadioButton
      variant="DEFAULT"
      name="plan"
      value="premium"
      checked={selected === 'premium'}
      label={{ content: 'Premium Plan' }}
      subTitle="Access to all features and priority support"
      onChange={(e) => setSelected(e.target.value)}
    />
  );
}
```

### With Error State

```tsx
import { RadioButton } from '@kubit/web-ui-components';

function App() {
  const [selected, setSelected] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (!selected) {
      setError(true);
    }
  };

  return (
    <RadioButton
      variant="DEFAULT"
      name="required"
      value="option1"
      checked={selected === 'option1'}
      label={{ content: 'Required Option' }}
      error={error}
      errorMessage="Please select an option"
      errorIcon={{ icon: 'error', altText: 'Error' }}
      onChange={(e) => {
        setSelected(e.target.value);
        setError(false);
      }}
    />
  );
}
```

### Disabled State

```tsx
import { RadioButton } from '@kubit/web-ui-components';

function App() {
  return (
    <RadioButton
      variant="DEFAULT"
      name="options"
      value="disabled"
      checked={false}
      disabled={true}
      label={{ content: 'Disabled Option' }}
      subTitle="This option is not available"
    />
  );
}
```

## Props

### RadioButtonProps

| Prop                | Type                                   | Required | Default          | Description                              |
| ------------------- | -------------------------------------- | -------- | ---------------- | ---------------------------------------- |
| `variant`           | `string`                               | No       | -                | Visual variant for styling               |
| `name`              | `string`                               | No       | -                | Name attribute for the radio input group |
| `value`             | `string \| number`                     | No       | -                | Value of the radio button                |
| `checked`           | `boolean`                              | No       | `false`          | Whether the radio button is checked      |
| `disabled`          | `boolean`                              | No       | `false`          | Whether the radio button is disabled     |
| `error`             | `boolean`                              | No       | `false`          | Whether the radio button has an error    |
| `label`             | `RadioButtonLabelProps`                | No       | -                | Label configuration object               |
| `subTitle`          | `string \| CommonTextProps`            | No       | -                | Subtitle text below the label            |
| `errorMessage`      | `string`                               | No       | -                | Error message to display                 |
| `errorIcon`         | `string \| CommonIconProps`            | No       | -                | Error icon configuration                 |
| `errorAriaLiveType` | `'polite' \| 'assertive' \| 'off'`     | No       | -                | ARIA live region type for errors         |
| `onChange`          | `ChangeEventHandler<HTMLInputElement>` | No       | -                | Change event handler                     |
| `onBlur`            | `FocusEventHandler<HTMLInputElement>`  | No       | -                | Blur event handler                       |
| `id`                | `string`                               | No       | auto-generated   | Custom ID for the input                  |
| `tabIndex`          | `number`                               | No       | -                | Tab index for keyboard navigation        |
| `screenReaderId`    | `string`                               | No       | -                | ID for screen reader association         |
| `lastChild`         | `boolean`                              | No       | `false`          | Whether this is the last item in a group |
| `altVariant`        | `boolean`                              | No       | `false`          | Use alternative focus styling            |
| `aria-label`        | `string`                               | No       | -                | ARIA label for accessibility             |
| `aria-labelledby`   | `string`                               | No       | -                | ID of element labeling this radio        |
| `aria-hidden`       | `boolean`                              | No       | -                | Hide from screen readers                 |
| `additionalClasses` | `Partial<RadioButtonCssClasses>`       | No       | -                | Additional CSS classes                   |
| `data-testid`       | `string`                               | No       | `'radio-button'` | Test ID for component testing            |

### RadioButtonLabelProps

| Prop      | Type     | Description                    |
| --------- | -------- | ------------------------------ |
| `content` | `string` | Text content for the label     |
| `cursor`  | `string` | CSS cursor style for the label |

## Variants

### Available Variants

- **`DEFAULT`**: Standard radio button styling

## Accessibility

The RadioButton component follows WAI-ARIA best practices:

### Keyboard Navigation

- **Tab**: Move focus between radio buttons
- **Space**: Select the focused radio button
- **Arrow Keys**: Navigate between radio buttons in the same group
  - **Up/Left**: Previous option
  - **Down/Right**: Next option

### ARIA Attributes

```tsx
<RadioButton
  variant="DEFAULT"
  name="option"
  value="1"
  checked={selected === '1'}
  label={{ content: 'Option 1' }}
  aria-label="First option"
  aria-describedby="option-description"
  onChange={handleChange}
/>
```

### Screen Reader Support

- Labels are properly associated with radio inputs
- Error messages are announced via aria-live regions
- Checked state is communicated to screen readers
- Disabled state is properly announced
- Group relationships are maintained via name attribute

### Focus Management

```tsx
function AccessibleForm() {
  const [selected, setSelected] = useState('');
  const firstRadioRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus first radio on mount
    firstRadioRef.current?.focus();
  }, []);

  return (
    <fieldset>
      <legend>Choose an option:</legend>
      <RadioButton
        variant="DEFAULT"
        name="options"
        value="option1"
        checked={selected === 'option1'}
        label={{ content: 'Option 1' }}
        onChange={(e) => setSelected(e.target.value)}
      />
      {/* More options */}
    </fieldset>
  );
}
```

## Common Use Cases

### Form Selection

```tsx
import { useState } from 'react';

import { RadioButton } from '@kubit/web-ui-components';

function ShippingForm() {
  const [shippingMethod, setShippingMethod] = useState('');

  const shippingOptions = [
    {
      value: 'standard',
      label: 'Standard Shipping',
      subtitle: 'Delivery in 5-7 days',
      price: 'Free',
    },
    {
      value: 'express',
      label: 'Express Shipping',
      subtitle: 'Delivery in 2-3 days',
      price: '$9.99',
    },
    {
      value: 'overnight',
      label: 'Overnight Shipping',
      subtitle: 'Next day delivery',
      price: '$24.99',
    },
  ];

  return (
    <fieldset>
      <legend>Select Shipping Method</legend>
      {shippingOptions.map((option) => (
        <RadioButton
          key={option.value}
          variant="DEFAULT"
          name="shipping"
          value={option.value}
          checked={shippingMethod === option.value}
          label={{ content: `${option.label} - ${option.price}` }}
          subTitle={option.subtitle}
          onChange={(e) => setShippingMethod(e.target.value)}
        />
      ))}
    </fieldset>
  );
}
```

### Settings/Preferences

```tsx
import { useState } from 'react';

import { RadioButton } from '@kubit/web-ui-components';

function ThemeSettings() {
  const [theme, setTheme] = useState('system');

  const themes = [
    { value: 'light', label: 'Light Mode', description: 'Use light theme' },
    { value: 'dark', label: 'Dark Mode', description: 'Use dark theme' },
    {
      value: 'system',
      label: 'System Default',
      description: 'Follow system preferences',
    },
  ];

  return (
    <div>
      <h3>Theme Preference</h3>
      {themes.map((option) => (
        <RadioButton
          key={option.value}
          variant="DEFAULT"
          name="theme"
          value={option.value}
          checked={theme === option.value}
          label={{ content: option.label }}
          subTitle={option.description}
          onChange={(e) => setTheme(e.target.value)}
        />
      ))}
    </div>
  );
}
```

### Survey Questions

```tsx
import { useState } from 'react';

import { RadioButton } from '@kubit/web-ui-components';

function SurveyQuestion() {
  const [satisfaction, setSatisfaction] = useState('');

  const ratings = [
    { value: '5', label: 'Very Satisfied', emoji: '😄' },
    { value: '4', label: 'Satisfied', emoji: '🙂' },
    { value: '3', label: 'Neutral', emoji: '😐' },
    { value: '2', label: 'Dissatisfied', emoji: '😕' },
    { value: '1', label: 'Very Dissatisfied', emoji: '😞' },
  ];

  return (
    <fieldset>
      <legend>How satisfied are you with our service?</legend>
      {ratings.map((rating) => (
        <RadioButton
          key={rating.value}
          variant="DEFAULT"
          name="satisfaction"
          value={rating.value}
          checked={satisfaction === rating.value}
          label={{ content: `${rating.emoji} ${rating.label}` }}
          onChange={(e) => setSatisfaction(e.target.value)}
        />
      ))}
    </fieldset>
  );
}
```

### Payment Methods

```tsx
import { useState } from 'react';

import { RadioButton } from '@kubit/web-ui-components';

function PaymentSelection() {
  const [paymentMethod, setPaymentMethod] = useState('');

  const paymentOptions = [
    {
      value: 'card',
      label: 'Credit/Debit Card',
      subtitle: 'Visa, Mastercard, Amex accepted',
    },
    {
      value: 'paypal',
      label: 'PayPal',
      subtitle: 'Fast and secure payment',
    },
    {
      value: 'bank',
      label: 'Bank Transfer',
      subtitle: 'Direct bank transfer (2-3 days)',
    },
  ];

  return (
    <div>
      <h3>Payment Method</h3>
      {paymentOptions.map((option) => (
        <RadioButton
          key={option.value}
          variant="DEFAULT"
          name="payment"
          value={option.value}
          checked={paymentMethod === option.value}
          label={{ content: option.label }}
          subTitle={option.subtitle}
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
      ))}
    </div>
  );
}
```

### Subscription Plans

```tsx
import { useState } from 'react';

import { RadioButton } from '@kubit/web-ui-components';

function SubscriptionPlans() {
  const [plan, setPlan] = useState('');

  const plans = [
    {
      value: 'free',
      label: 'Free Plan',
      subtitle: 'Basic features • Up to 3 projects',
      price: '$0/month',
    },
    {
      value: 'pro',
      label: 'Pro Plan',
      subtitle: 'All features • Unlimited projects • Priority support',
      price: '$29/month',
      popular: true,
    },
    {
      value: 'enterprise',
      label: 'Enterprise Plan',
      subtitle: 'Custom solutions • Dedicated support • SLA',
      price: 'Contact us',
    },
  ];

  return (
    <fieldset>
      <legend>Choose Your Plan</legend>
      {plans.map((option) => (
        <div key={option.value} style={{ position: 'relative' }}>
          {option.popular && (
            <span
              style={{
                position: 'absolute',
                top: '-10px',
                right: '0',
                background: '#007bff',
                color: 'white',
                padding: '2px 8px',
                borderRadius: '4px',
                fontSize: '12px',
              }}
            >
              Popular
            </span>
          )}
          <RadioButton
            variant="DEFAULT"
            name="plan"
            value={option.value}
            checked={plan === option.value}
            label={{ content: `${option.label} - ${option.price}` }}
            subTitle={option.subtitle}
            onChange={(e) => setPlan(e.target.value)}
          />
        </div>
      ))}
    </fieldset>
  );
}
```

### Quiz Questions

```tsx
import { useState } from 'react';

import { RadioButton } from '@kubit/web-ui-components';

function QuizQuestion() {
  const [answer, setAnswer] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const correctAnswer = 'b';

  const options = [
    { value: 'a', text: 'Option A' },
    { value: 'b', text: 'Option B (Correct)' },
    { value: 'c', text: 'Option C' },
    { value: 'd', text: 'Option D' },
  ];

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div>
      <h3>What is the capital of France?</h3>
      <fieldset>
        <legend>Select your answer:</legend>
        {options.map((option) => (
          <RadioButton
            key={option.value}
            variant="DEFAULT"
            name="quiz"
            value={option.value}
            checked={answer === option.value}
            disabled={submitted}
            label={{ content: option.text }}
            error={
              submitted && answer === option.value && answer !== correctAnswer
            }
            errorMessage={
              submitted && answer === option.value && answer !== correctAnswer
                ? 'Incorrect answer'
                : undefined
            }
            onChange={(e) => setAnswer(e.target.value)}
          />
        ))}
      </fieldset>
      {!submitted && (
        <button onClick={handleSubmit} disabled={!answer}>
          Submit Answer
        </button>
      )}
      {submitted && answer === correctAnswer && (
        <p style={{ color: 'green' }}>✓ Correct!</p>
      )}
    </div>
  );
}
```

### Filter Options

```tsx
import { useState } from 'react';

import { RadioButton } from '@kubit/web-ui-components';

function ProductFilters() {
  const [sortBy, setSortBy] = useState('featured');

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest First' },
    { value: 'rating', label: 'Highest Rated' },
  ];

  return (
    <div>
      <h4>Sort By</h4>
      {sortOptions.map((option) => (
        <RadioButton
          key={option.value}
          variant="DEFAULT"
          name="sort"
          value={option.value}
          checked={sortBy === option.value}
          label={{ content: option.label }}
          onChange={(e) => setSortBy(e.target.value)}
        />
      ))}
    </div>
  );
}
```

## Best Practices

### 1. Group Related Radio Buttons

```tsx
// ✅ Good: Use fieldset and legend for grouping
<fieldset>
  <legend>Select your preferred contact method:</legend>
  <RadioButton
    variant="DEFAULT"
    name="contact"
    value="email"
    checked={method === 'email'}
    label={{ content: 'Email' }}
    onChange={handleChange}
  />
  <RadioButton
    variant="DEFAULT"
    name="contact"
    value="phone"
    checked={method === 'phone'}
    label={{ content: 'Phone' }}
    onChange={handleChange}
  />
</fieldset>

// ❌ Bad: No semantic grouping
<div>
  <RadioButton name="contact" value="email" label={{ content: 'Email' }} />
  <RadioButton name="contact" value="phone" label={{ content: 'Phone' }} />
</div>
```

### 2. Use Same Name for Related Options

```tsx
// ✅ Good: Same name creates a group
<RadioButton name="payment" value="card" />
<RadioButton name="payment" value="paypal" />
<RadioButton name="payment" value="bank" />

// ❌ Bad: Different names, not a group
<RadioButton name="payment1" value="card" />
<RadioButton name="payment2" value="paypal" />
<RadioButton name="payment3" value="bank" />
```

### 3. Provide Clear Labels

```tsx
// ✅ Good: Clear, descriptive labels
<RadioButton
  variant="DEFAULT"
  name="shipping"
  value="express"
  label={{ content: 'Express Shipping - 2-3 days' }}
  subTitle="$9.99 - Signature required"
  checked={shipping === 'express'}
  onChange={handleChange}
/>

// ❌ Bad: Vague labels
<RadioButton
  variant="DEFAULT"
  name="shipping"
  value="express"
  label={{ content: 'Option 2' }}
  checked={shipping === 'express'}
  onChange={handleChange}
/>
```

### 4. Handle Validation Properly

```tsx
// ✅ Good: Show errors after interaction
function ValidatedForm() {
  const [selected, setSelected] = useState('');
  const [touched, setTouched] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const showError = (submitted || touched) && !selected;

  return (
    <fieldset>
      <legend>Required selection:</legend>
      {options.map((option) => (
        <RadioButton
          key={option.value}
          variant="DEFAULT"
          name="required"
          value={option.value}
          checked={selected === option.value}
          label={{ content: option.label }}
          error={showError}
          errorMessage={showError ? 'Please select an option' : undefined}
          onChange={(e) => {
            setSelected(e.target.value);
            setTouched(true);
          }}
        />
      ))}
    </fieldset>
  );
}
```

### 5. Use Subtitles for Additional Context

```tsx
// ✅ Good: Helpful additional information
<RadioButton
  variant="DEFAULT"
  name="plan"
  value="premium"
  label={{ content: 'Premium Plan - $29/month' }}
  subTitle="All features included • Cancel anytime • 30-day money back"
  checked={plan === 'premium'}
  onChange={handleChange}
/>

// ❌ Bad: Missing context
<RadioButton
  variant="DEFAULT"
  name="plan"
  value="premium"
  label={{ content: 'Premium' }}
  checked={plan === 'premium'}
  onChange={handleChange}
/>
```

### 6. Limit Number of Options

```tsx
// ✅ Good: 5-7 options maximum
const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

// ❌ Bad: Too many options, consider using a select instead
const tooManyOptions = Array.from({ length: 20 }, (_, i) => `Option ${i + 1}`);
```

### 7. Provide Default Selection When Appropriate

```tsx
// ✅ Good: Sensible default for shipping
const [shipping, setShipping] = useState('standard'); // Default to standard

<RadioButton
  variant="DEFAULT"
  name="shipping"
  value="standard"
  checked={shipping === 'standard'}
  label={{ content: 'Standard Shipping (5-7 days)' }}
  onChange={handleChange}
/>;

// ✅ Also good: No default when requiring explicit choice
const [plan, setPlan] = useState(''); // Force user to choose

{
  plans.map((option) => (
    <RadioButton
      variant="DEFAULT"
      name="plan"
      value={option.value}
      checked={plan === option.value}
      label={{ content: option.label }}
      onChange={(e) => setPlan(e.target.value)}
    />
  ));
}
```

## Styling

### Custom CSS Classes

```tsx
<RadioButton
  variant="DEFAULT"
  name="options"
  value="1"
  checked={selected === '1'}
  label={{ content: 'Option 1' }}
  additionalClasses={{
    rowcontainer: 'my-radio-container',
    radiobuttoncontainer: 'my-radio-wrapper',
    radio_button: 'my-radio-input',
    labelcontainer: 'my-label-container',
    label: 'my-label',
    sublabel: 'my-subtitle',
    errormessagecontainer: 'my-error-container',
  }}
  onChange={handleChange}
/>
```

### Custom Styles Example

```css
.my-radio-container {
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.my-radio-container:hover {
  background-color: #f9f9f9;
  border-color: #007bff;
}

.my-radio-container[data-state='CHECKED'] {
  background-color: #e3f2fd;
  border-color: #007bff;
}

.my-radio-input {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.my-label {
  font-weight: 600;
  color: #333;
}

.my-subtitle {
  font-size: 14px;
  color: #666;
  margin-top: 4px;
}
```

## Testing

### Unit Testing

```tsx
import { RadioButton } from '@kubit/web-ui-components';
import { fireEvent, render, screen } from '@testing-library/react';

describe('RadioButton', () => {
  it('renders with label', () => {
    render(
      <RadioButton
        variant="DEFAULT"
        name="test"
        value="1"
        label={{ content: 'Test Option' }}
      />,
    );

    expect(screen.getByText('Test Option')).toBeInTheDocument();
  });

  it('calls onChange when clicked', () => {
    const handleChange = jest.fn();

    render(
      <RadioButton
        variant="DEFAULT"
        name="test"
        value="1"
        label={{ content: 'Test Option' }}
        onChange={handleChange}
      />,
    );

    const radio = screen.getByRole('radio');
    fireEvent.click(radio);

    expect(handleChange).toHaveBeenCalled();
  });

  it('shows checked state', () => {
    render(
      <RadioButton
        variant="DEFAULT"
        name="test"
        value="1"
        checked={true}
        label={{ content: 'Test Option' }}
      />,
    );

    const radio = screen.getByRole('radio') as HTMLInputElement;
    expect(radio.checked).toBe(true);
  });

  it('disables interaction when disabled', () => {
    const handleChange = jest.fn();

    render(
      <RadioButton
        variant="DEFAULT"
        name="test"
        value="1"
        disabled={true}
        label={{ content: 'Disabled Option' }}
        onChange={handleChange}
      />,
    );

    const radio = screen.getByRole('radio');
    fireEvent.click(radio);

    expect(handleChange).not.toHaveBeenCalled();
    expect(radio).toBeDisabled();
  });

  it('displays error message', () => {
    render(
      <RadioButton
        variant="DEFAULT"
        name="test"
        value="1"
        error={true}
        errorMessage="This field is required"
        label={{ content: 'Test Option' }}
      />,
    );

    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('displays subtitle', () => {
    render(
      <RadioButton
        variant="DEFAULT"
        name="test"
        value="1"
        label={{ content: 'Test Option' }}
        subTitle="Additional information"
      />,
    );

    expect(screen.getByText('Additional information')).toBeInTheDocument();
  });
});
```

### Integration Testing

```tsx
import { useState } from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

function RadioButtonGroup() {
  const [selected, setSelected] = useState('');

  return (
    <div>
      <RadioButton
        variant="DEFAULT"
        name="options"
        value="option1"
        checked={selected === 'option1'}
        label={{ content: 'Option 1' }}
        onChange={(e) => setSelected(e.target.value)}
      />
      <RadioButton
        variant="DEFAULT"
        name="options"
        value="option2"
        checked={selected === 'option2'}
        label={{ content: 'Option 2' }}
        onChange={(e) => setSelected(e.target.value)}
      />
      <div data-testid="selected-value">{selected}</div>
    </div>
  );
}

describe('RadioButtonGroup Integration', () => {
  it('updates selection when radio is clicked', () => {
    render(<RadioButtonGroup />);

    const option1 = screen.getByLabelText('Option 1');
    const option2 = screen.getByLabelText('Option 2');

    fireEvent.click(option1);
    expect(screen.getByTestId('selected-value')).toHaveTextContent('option1');

    fireEvent.click(option2);
    expect(screen.getByTestId('selected-value')).toHaveTextContent('option2');
  });
});
```

### Accessibility Testing

```tsx
import { RadioButton } from '@kubit/web-ui-components';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('RadioButton Accessibility', () => {
  it('should not have accessibility violations', async () => {
    const { container } = render(
      <fieldset>
        <legend>Choose an option</legend>
        <RadioButton
          variant="DEFAULT"
          name="test"
          value="1"
          label={{ content: 'Option 1' }}
          aria-label="First option"
        />
        <RadioButton
          variant="DEFAULT"
          name="test"
          value="2"
          label={{ content: 'Option 2' }}
          aria-label="Second option"
        />
      </fieldset>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

## Related Components

- **Checkbox**: For multiple selections
- **Toggle**: For on/off switches
- **Select**: For dropdown selections with many options
- **Button**: For action buttons
- **Form**: For form layout and validation

## Browser Support

The RadioButton component is compatible with:

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
<RadioButton
  label="Option 1"
  checked={selected === 'option1'}
  onChange={handleChange}
/>

// New API
<RadioButton
  variant="DEFAULT"
  name="options"
  value="option1"
  label={{ content: 'Option 1' }}
  checked={selected === 'option1'}
  onChange={handleChange}
/>
```

### Key Changes

1. **Label Structure**: `label` is now an object with `content` property
2. **SubTitle**: Changed from `description` to `subTitle`
3. **Variants**: Added variant system for styling
4. **Error Handling**: Separate `error`, `errorMessage`, and `errorIcon` props
5. **Accessibility**: Enhanced ARIA support

## Troubleshooting

### Radio Button Not Responding

**Problem**: Clicking radio button doesn't change selection.

**Solution**: Ensure `name`, `value`, `checked`, and `onChange` are properly configured.

```tsx
// ✅ Correct
const [selected, setSelected] = useState('');

<RadioButton
  variant="DEFAULT"
  name="group"
  value="option1"
  checked={selected === 'option1'}
  onChange={(e) => setSelected(e.target.value)}
/>;
```

### Multiple Radio Buttons Selected

**Problem**: More than one radio button appears selected.

**Solution**: Ensure all radio buttons in a group share the same `name` attribute.

```tsx
// ✅ Correct: Same name
<RadioButton name="payment" value="card" checked={payment === 'card'} />
<RadioButton name="payment" value="paypal" checked={payment === 'paypal'} />

// ❌ Wrong: Different names
<RadioButton name="payment1" value="card" checked={payment === 'card'} />
<RadioButton name="payment2" value="paypal" checked={payment === 'paypal'} />
```

### Label Not Clickable

**Problem**: Clicking label doesn't select radio button.

**Solution**: Ensure label has proper configuration with `content` property.

```tsx
// ✅ Correct
<RadioButton
  variant="DEFAULT"
  label={{ content: 'Click me' }}
/>

// ❌ Wrong
<RadioButton variant="DEFAULT" label="Click me" />
```

### Error Message Not Showing

**Problem**: Error message doesn't appear.

**Solution**: Set both `error={true}` and provide `errorMessage`.

```tsx
// ✅ Correct
<RadioButton
  variant="DEFAULT"
  error={true}
  errorMessage="Selection required"
/>

// ❌ Wrong: Missing error prop
<RadioButton
  variant="DEFAULT"
  errorMessage="Selection required"
/>
```

## Additional Resources

- [WAI-ARIA Radio Group Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/radio/)
- [Form Validation Best Practices](https://www.smashingmagazine.com/2022/09/inline-validation-web-forms-ux/)
- [Accessible Radio Buttons](https://www.a11ymatters.com/pattern/radio-button/)

## Support

For bug reports, feature requests, or questions, please contact the development team or file an issue in the project repository.
