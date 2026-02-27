import type { Meta, StoryObj } from '@storybook/react';

import { RadioButton } from '@kubit-ui-web/react-components';
import { useState } from 'react';

const meta: Meta<typeof RadioButton> = {
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the radio button is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the radio button is disabled',
    },
    error: {
      control: 'boolean',
      description: 'Whether the radio button has an error',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display',
    },
    label: {
      control: 'object',
      description: 'Label configuration object',
    },
    name: {
      control: 'text',
      description: 'Name attribute for the radio input group',
    },
    subTitle: {
      control: 'text',
      description: 'Subtitle text below the label',
    },
    value: {
      control: 'text',
      description: 'Value of the radio button',
    },
    variant: {
      control: 'select',
      description: 'Visual variant for styling',
      options: ['DEFAULT'],
    },
  },
  component: RadioButton,
  tags: ['forms', 'input', 'interactive'],
  title: 'Components/RadioButton',
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

/**
 * Basic unchecked radio button with label
 */
export const Basic: Story = {
  args: {
    checked: false,
    label: { content: 'Basic Option' },
    name: 'basic',
    value: 'option1',
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<RadioButton
  variant="DEFAULT"
  name="basic"
  value="option1"
  checked={false}
  label={{ content: 'Basic Option' }}
  onChange={handleChange}
/>`,
      },
    },
  },
};

/**
 * Radio button in checked state
 */
export const Checked: Story = {
  args: {
    checked: true,
    label: { content: 'Selected Option' },
    name: 'checked',
    value: 'option1',
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<RadioButton
  variant="DEFAULT"
  name="checked"
  value="option1"
  checked={true}
  label={{ content: 'Selected Option' }}
  onChange={handleChange}
/>`,
      },
    },
  },
};

/**
 * Disabled radio button (unchecked)
 */
export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
    label: { content: 'Disabled Option' },
    name: 'disabled',
    value: 'option1',
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<RadioButton
  variant="DEFAULT"
  name="disabled"
  value="option1"
  checked={false}
  disabled={true}
  label={{ content: 'Disabled Option' }}
/>`,
      },
    },
  },
};

/**
 * Disabled radio button in checked state
 */
export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
    label: { content: 'Disabled Selected Option' },
    name: 'disabled-checked',
    value: 'option1',
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<RadioButton
  variant="DEFAULT"
  name="disabled-checked"
  value="option1"
  checked={true}
  disabled={true}
  label={{ content: 'Disabled Selected Option' }}
/>`,
      },
    },
  },
};

/**
 * Radio button with subtitle for additional context
 */
export const WithSubtitle: Story = {
  args: {
    checked: false,
    label: { content: 'Premium Plan' },
    name: 'subtitle',
    subTitle: 'Access to all features and priority support',
    value: 'premium',
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<RadioButton
  variant="DEFAULT"
  name="subtitle"
  value="premium"
  checked={false}
  label={{ content: 'Premium Plan' }}
  subTitle="Access to all features and priority support"
  onChange={handleChange}
/>`,
      },
    },
  },
};

/**
 * Radio button with error state and error message
 */
export const WithError: Story = {
  args: {
    checked: false,
    error: true,
    errorMessage: 'Please select an option',
    label: { content: 'Required Option' },
    name: 'error',
    value: 'option1',
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<RadioButton
  variant="DEFAULT"
  name="error"
  value="option1"
  checked={false}
  error={true}
  errorMessage="Please select an option"
  label={{ content: 'Required Option' }}
  onChange={handleChange}
/>`,
      },
    },
  },
};

/**
 * Radio button with error icon and message
 */
export const WithErrorIcon: Story = {
  args: {
    checked: false,
    error: true,
    errorIcon: { altText: 'Error', icon: 'error' },
    errorMessage: 'Selection is required',
    label: { content: 'Required Selection' },
    name: 'error-icon',
    value: 'option1',
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<RadioButton
  variant="DEFAULT"
  name="error-icon"
  value="option1"
  checked={false}
  error={true}
  errorMessage="Selection is required"
  errorIcon={{ icon: 'error', altText: 'Error' }}
  label={{ content: 'Required Selection' }}
  onChange={handleChange}
/>`,
      },
    },
  },
};

/**
 * Group of radio buttons demonstrating single selection behavior
 */
export const RadioGroup: Story = {
  parameters: {
    docs: {
      source: {
        code: `const [selected, setSelected] = useState('option1');

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
];

<fieldset>
  <legend>Choose an option:</legend>
  {options.map((option) => (
    <RadioButton
      key={option.value}
      variant="DEFAULT"
      name="radio-group"
      value={option.value}
      checked={selected === option.value}
      label={{ content: option.label }}
      onChange={(e) => setSelected(e.target.value)}
    />
  ))}
</fieldset>`,
      },
    },
  },
  render: () => {
    const [selected, setSelected] = useState('option1');

    const options = [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
      { label: 'Option 4', value: 'option4' },
    ];

    return (
      <fieldset
        style={{
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          padding: '16px',
        }}
      >
        <legend style={{ fontWeight: 'bold', padding: '0 8px' }}>
          Choose an option:
        </legend>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {options.map((option) => (
            <RadioButton
              key={option.value}
              checked={selected === option.value}
              label={{ content: option.label }}
              name="radio-group"
              value={option.value}
              variant="DEFAULT"
              onChange={(e) => setSelected(e.target.value)}
            />
          ))}
        </div>
        <p style={{ color: '#666', fontSize: '14px', marginTop: '16px' }}>
          Selected: <strong>{selected}</strong>
        </p>
      </fieldset>
    );
  },
};

/**
 * Radio buttons with subtitles for enhanced context
 */
export const WithSubtitles: Story = {
  parameters: {
    docs: {
      source: {
        code: `const [selected, setSelected] = useState('');

const options = [
  {
    value: 'standard',
    label: 'Standard Shipping',
    subtitle: 'Delivery in 5-7 business days • Free',
  },
  {
    value: 'express',
    label: 'Express Shipping',
    subtitle: 'Delivery in 2-3 business days • $9.99',
  },
  {
    value: 'overnight',
    label: 'Overnight Shipping',
    subtitle: 'Next day delivery • $24.99',
  },
];

<fieldset>
  <legend>Select shipping method:</legend>
  {options.map((option) => (
    <RadioButton
      key={option.value}
      variant="DEFAULT"
      name="shipping"
      value={option.value}
      checked={selected === option.value}
      label={{ content: option.label }}
      subTitle={option.subtitle}
      onChange={(e) => setSelected(e.target.value)}
    />
  ))}
</fieldset>`,
      },
    },
  },
  render: () => {
    const [selected, setSelected] = useState('');

    const options = [
      {
        label: 'Standard Shipping',
        subtitle: 'Delivery in 5-7 business days • Free',
        value: 'standard',
      },
      {
        label: 'Express Shipping',
        subtitle: 'Delivery in 2-3 business days • $9.99',
        value: 'express',
      },
      {
        label: 'Overnight Shipping',
        subtitle: 'Next day delivery • $24.99',
        value: 'overnight',
      },
    ];

    return (
      <fieldset
        style={{
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          padding: '16px',
        }}
      >
        <legend style={{ fontWeight: 'bold', padding: '0 8px' }}>
          Select shipping method:
        </legend>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {options.map((option) => (
            <RadioButton
              key={option.value}
              checked={selected === option.value}
              label={{ content: option.label }}
              name="shipping"
              subTitle={option.subtitle}
              value={option.value}
              variant="DEFAULT"
              onChange={(e) => setSelected(e.target.value)}
            />
          ))}
        </div>
      </fieldset>
    );
  },
};

/**
 * Radio buttons with disabled options
 */
export const WithDisabledOptions: Story = {
  parameters: {
    docs: {
      source: {
        code: `const [selected, setSelected] = useState('option2');

const options = [
  { value: 'option1', label: 'Unavailable Option', disabled: true },
  { value: 'option2', label: 'Available Option', disabled: false },
  { value: 'option3', label: 'Another Unavailable', disabled: true },
  { value: 'option4', label: 'Available Option 2', disabled: false },
];

<fieldset>
  <legend>Choose from available options:</legend>
  {options.map((option) => (
    <RadioButton
      key={option.value}
      variant="DEFAULT"
      name="mixed-group"
      value={option.value}
      checked={selected === option.value}
      disabled={option.disabled}
      label={{ content: option.label }}
      onChange={(e) => setSelected(e.target.value)}
    />
  ))}
</fieldset>`,
      },
    },
  },
  render: () => {
    const [selected, setSelected] = useState('option2');

    const options = [
      { disabled: true, label: 'Unavailable Option', value: 'option1' },
      { disabled: false, label: 'Available Option', value: 'option2' },
      { disabled: true, label: 'Another Unavailable', value: 'option3' },
      { disabled: false, label: 'Available Option 2', value: 'option4' },
    ];

    return (
      <fieldset
        style={{
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          padding: '16px',
        }}
      >
        <legend style={{ fontWeight: 'bold', padding: '0 8px' }}>
          Choose from available options:
        </legend>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {options.map((option) => (
            <RadioButton
              key={option.value}
              checked={selected === option.value}
              disabled={option.disabled}
              label={{ content: option.label }}
              name="mixed-group"
              value={option.value}
              variant="DEFAULT"
              onChange={(e) => setSelected(e.target.value)}
            />
          ))}
        </div>
      </fieldset>
    );
  },
};

/**
 * Form integration with validation
 */
export const InForm: Story = {
  parameters: {
    docs: {
      source: {
        code: `const [formData, setFormData] = useState({
  plan: '',
  payment: '',
});
const [errors, setErrors] = useState({
  plan: false,
  payment: false,
});

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const newErrors = {
    plan: !formData.plan,
    payment: !formData.payment,
  };
  setErrors(newErrors);

  if (!newErrors.plan && !newErrors.payment) {
    // Submit form
  }
};

<form onSubmit={handleSubmit}>
  <fieldset>
    <legend>Select a plan: *</legend>
    {planOptions.map((option) => (
      <RadioButton
        key={option.value}
        variant="DEFAULT"
        name="plan"
        value={option.value}
        checked={formData.plan === option.value}
        label={{ content: option.label }}
        error={errors.plan}
        errorMessage={errors.plan ? 'Please select a plan' : undefined}
        onChange={(e) => {
          setFormData({ ...formData, plan: e.target.value });
          setErrors({ ...errors, plan: false });
        }}
      />
    ))}
  </fieldset>
  <button type="submit">Submit Form</button>
</form>`,
      },
    },
  },
  render: () => {
    const [formData, setFormData] = useState({
      payment: '',
      plan: '',
    });
    const [errors, setErrors] = useState({
      payment: false,
      plan: false,
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const newErrors = {
        payment: !formData.payment,
        plan: !formData.plan,
      };
      setErrors(newErrors);
      setSubmitted(true);

      if (!newErrors.plan && !newErrors.payment) {
        // eslint-disable-next-line no-alert
        alert(
          `Form submitted!\nPlan: ${formData.plan}\nPayment: ${formData.payment}`,
        );
      }
    };

    const planOptions = [
      { label: 'Free Plan', subtitle: 'Basic features only', value: 'free' },
      { label: 'Pro Plan', subtitle: 'All features included', value: 'pro' },
      {
        label: 'Enterprise Plan',
        subtitle: 'Custom solutions',
        value: 'enterprise',
      },
    ];

    const paymentOptions = [
      { label: 'Credit/Debit Card', value: 'card' },
      { label: 'PayPal', value: 'paypal' },
      { label: 'Bank Transfer', value: 'bank' },
    ];

    return (
      <form style={{ maxWidth: '500px' }} onSubmit={handleSubmit}>
        <fieldset
          style={{
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            marginBottom: '16px',
            padding: '16px',
          }}
        >
          <legend style={{ fontWeight: 'bold', padding: '0 8px' }}>
            Select a plan: *
          </legend>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
          >
            {planOptions.map((option) => (
              <RadioButton
                key={option.value}
                checked={formData.plan === option.value}
                error={submitted && errors.plan}
                errorMessage={
                  submitted && errors.plan ? 'Please select a plan' : undefined
                }
                label={{ content: option.label }}
                name="plan"
                subTitle={option.subtitle}
                value={option.value}
                variant="DEFAULT"
                onChange={(e) => {
                  setFormData({ ...formData, plan: e.target.value });
                  setErrors({ ...errors, plan: false });
                }}
              />
            ))}
          </div>
        </fieldset>

        <fieldset
          style={{
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            marginBottom: '16px',
            padding: '16px',
          }}
        >
          <legend style={{ fontWeight: 'bold', padding: '0 8px' }}>
            Payment method: *
          </legend>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {paymentOptions.map((option) => (
              <RadioButton
                key={option.value}
                checked={formData.payment === option.value}
                error={submitted && errors.payment}
                errorMessage={
                  submitted && errors.payment
                    ? 'Please select a payment method'
                    : undefined
                }
                label={{ content: option.label }}
                name="payment"
                value={option.value}
                variant="DEFAULT"
                onChange={(e) => {
                  setFormData({ ...formData, payment: e.target.value });
                  setErrors({ ...errors, payment: false });
                }}
              />
            ))}
          </div>
        </fieldset>

        <button
          style={{
            backgroundColor: '#007bff',
            border: 'none',
            borderRadius: '4px',
            color: 'white',
            cursor: 'pointer',
            fontWeight: 'bold',
            padding: '10px 20px',
          }}
          type="submit"
        >
          Submit Form
        </button>
      </form>
    );
  },
};

/**
 * Radio buttons with long labels and text wrapping
 */
export const WithLongLabels: Story = {
  parameters: {
    docs: {
      source: {
        code: `const [selected, setSelected] = useState('');

const options = [
  {
    value: 'option1',
    label: 'This is a very long label that demonstrates how the radio button handles text wrapping',
    subtitle: 'And this is an equally long subtitle that provides additional context',
  },
  // More options...
];

<fieldset>
  <legend>Select an option:</legend>
  {options.map((option) => (
    <RadioButton
      key={option.value}
      variant="DEFAULT"
      name="long-labels"
      value={option.value}
      checked={selected === option.value}
      label={{ content: option.label }}
      subTitle={option.subtitle}
      onChange={(e) => setSelected(e.target.value)}
    />
  ))}
</fieldset>`,
      },
    },
  },
  render: () => {
    const [selected, setSelected] = useState('');

    const options = [
      {
        label:
          'This is a very long label that demonstrates how the radio button handles text wrapping when the content is too long to fit on a single line',
        subtitle:
          'And this is an equally long subtitle that provides additional context and information about this particular option',
        value: 'option1',
      },
      {
        label:
          'Another option with a lengthy description that spans multiple lines',
        subtitle:
          'Additional details that help users make an informed decision',
        value: 'option2',
      },
      {
        label: 'Short label',
        subtitle: 'Brief description',
        value: 'option3',
      },
    ];

    return (
      <fieldset
        style={{
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          maxWidth: '600px',
          padding: '16px',
        }}
      >
        <legend style={{ fontWeight: 'bold', padding: '0 8px' }}>
          Select an option:
        </legend>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {options.map((option) => (
            <RadioButton
              key={option.value}
              checked={selected === option.value}
              label={{ content: option.label }}
              name="long-labels"
              subTitle={option.subtitle}
              value={option.value}
              variant="DEFAULT"
              onChange={(e) => setSelected(e.target.value)}
            />
          ))}
        </div>
      </fieldset>
    );
  },
};

/**
 * Radio buttons with accessibility features
 */
export const WithAccessibility: Story = {
  parameters: {
    docs: {
      source: {
        code: `const [selected, setSelected] = useState('');

const options = [
  {
    value: 'option1',
    label: 'First Option',
    ariaLabel: 'Select first option for basic features',
  },
  // More options...
];

<fieldset>
  <legend id="radio-group-label">Choose your plan:</legend>
  <div role="radiogroup" aria-labelledby="radio-group-label">
    {options.map((option, index) => (
      <RadioButton
        key={option.value}
        variant="DEFAULT"
        name="accessible-group"
        value={option.value}
        checked={selected === option.value}
        label={{ content: option.label }}
        aria-label={option.ariaLabel}
        tabIndex={index === 0 ? 0 : -1}
        onChange={(e) => setSelected(e.target.value)}
      />
    ))}
  </div>
</fieldset>`,
      },
    },
  },
  render: () => {
    const [selected, setSelected] = useState('');

    const options = [
      {
        ariaLabel: 'Select first option for basic features',
        label: 'First Option',
        value: 'option1',
      },
      {
        ariaLabel: 'Select second option for premium features',
        label: 'Second Option',
        value: 'option2',
      },
      {
        ariaLabel: 'Select third option for enterprise features',
        label: 'Third Option',
        value: 'option3',
      },
    ];

    return (
      <div>
        <fieldset
          style={{
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            padding: '16px',
          }}
        >
          <legend
            id="radio-group-label"
            style={{ fontWeight: 'bold', padding: '0 8px' }}
          >
            Choose your plan (with ARIA labels):
          </legend>
          <div
            aria-labelledby="radio-group-label"
            role="radiogroup"
            style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
          >
            {options.map((option, index) => (
              <RadioButton
                key={option.value}
                aria-label={option.ariaLabel}
                checked={selected === option.value}
                label={{ content: option.label }}
                name="accessible-group"
                tabIndex={index === 0 ? 0 : -1}
                value={option.value}
                variant="DEFAULT"
                onChange={(e) => setSelected(e.target.value)}
              />
            ))}
          </div>
        </fieldset>
        <p style={{ color: '#666', fontSize: '14px', marginTop: '16px' }}>
          💡 Tip: Use keyboard (Tab, Arrow keys, Space) to navigate and select
          options
        </p>
      </div>
    );
  },
};

/**
 * All states demonstration
 */
export const AllStates: Story = {
  parameters: {
    docs: {
      source: {
        code: `// Unchecked
<RadioButton
  variant="DEFAULT"
  checked={false}
  label={{ content: 'Unchecked' }}
/>

// Checked
<RadioButton
  variant="DEFAULT"
  checked={true}
  label={{ content: 'Checked' }}
/>

// Disabled Unchecked
<RadioButton
  variant="DEFAULT"
  checked={false}
  disabled={true}
  label={{ content: 'Disabled Unchecked' }}
/>

// Disabled Checked
<RadioButton
  variant="DEFAULT"
  checked={true}
  disabled={true}
  label={{ content: 'Disabled Checked' }}
/>

// With Subtitle
<RadioButton
  variant="DEFAULT"
  label={{ content: 'With Subtitle' }}
  subTitle="Additional information"
/>

// With Error
<RadioButton
  variant="DEFAULT"
  error={true}
  errorMessage="This field is required"
  label={{ content: 'With Error' }}
/>`,
      },
    },
  },
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <h4 style={{ marginBottom: '12px' }}>Basic States</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <RadioButton
              checked={false}
              label={{ content: 'Unchecked' }}
              name="states-1"
              value="unchecked"
              variant="DEFAULT"
            />
            <RadioButton
              checked={true}
              label={{ content: 'Checked' }}
              name="states-2"
              value="checked"
              variant="DEFAULT"
            />
          </div>
        </div>

        <div>
          <h4 style={{ marginBottom: '12px' }}>Disabled States</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <RadioButton
              checked={false}
              disabled={true}
              label={{ content: 'Disabled Unchecked' }}
              name="states-3"
              value="disabled-unchecked"
              variant="DEFAULT"
            />
            <RadioButton
              checked={true}
              disabled={true}
              label={{ content: 'Disabled Checked' }}
              name="states-4"
              value="disabled-checked"
              variant="DEFAULT"
            />
          </div>
        </div>

        <div>
          <h4 style={{ marginBottom: '12px' }}>With Subtitle</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <RadioButton
              checked={false}
              label={{ content: 'With Subtitle Unchecked' }}
              name="states-5"
              subTitle="Additional information text"
              value="subtitle-unchecked"
              variant="DEFAULT"
            />
            <RadioButton
              checked={true}
              label={{ content: 'With Subtitle Checked' }}
              name="states-6"
              subTitle="Additional information text"
              value="subtitle-checked"
              variant="DEFAULT"
            />
          </div>
        </div>

        <div>
          <h4 style={{ marginBottom: '12px' }}>Error States</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <RadioButton
              checked={false}
              error={true}
              errorMessage="This field is required"
              label={{ content: 'With Error' }}
              name="states-7"
              value="error"
              variant="DEFAULT"
            />
            <RadioButton
              checked={false}
              error={true}
              errorIcon={{ altText: 'Error', icon: 'error' }}
              errorMessage="Selection required"
              label={{ content: 'With Error Icon' }}
              name="states-8"
              value="error-icon"
              variant="DEFAULT"
            />
          </div>
        </div>
      </div>
    );
  },
};
