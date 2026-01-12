# Button Component

Button is a fundamental interactive component used to trigger actions, submit forms, or navigate to other pages. It provides clear visual feedback and supports various states, sizes, and styles.

## Installation

```bash
npm install @kubit/web-ui-components
```

## Basic Usage

```tsx
import { Button } from '@kubit/web-ui-components';
import {
  ButtonSizeType,
  ButtonVariantType,
} from '@kubit/web-ui-components/variants';

function App() {
  return (
    <Button
      variant={ButtonVariantType.PRIMARY}
      size={ButtonSizeType.LARGE}
      onClick={() => console.log('Clicked!')}
    >
      Click Me
    </Button>
  );
}
```

## Variants

The Button component supports multiple visual variants:

### Primary

The main call-to-action button for the most important actions.

```tsx
<Button variant={ButtonVariantType.PRIMARY}>Primary Action</Button>
```

### Secondary

For secondary or alternative actions that are less prominent.

```tsx
<Button variant={ButtonVariantType.SECONDARY}>Secondary Action</Button>
```

## Sizes

Button supports three size variants:

### Small

For compact layouts, dense interfaces, or inline with text.

```tsx
<Button size={ButtonSizeType.SMALL}>Small Button</Button>
```

### Medium

The default size for most use cases.

```tsx
<Button size={ButtonSizeType.MEDIUM}>Medium Button</Button>
```

### Large

For prominent actions or touch-friendly interfaces.

```tsx
<Button size={ButtonSizeType.LARGE}>Large Button</Button>
```

## Advanced Usage

### With Icon

Add icons to provide visual context for actions:

```tsx
import { ICONS } from '@kubit/web-ui-components/icons';
import { POSITIONS } from '@kubit/web-ui-components/positions';

// Icon on the left
<Button
  variant={ButtonVariantType.PRIMARY}
  icon={ICONS.SAVE}
  iconPosition={POSITIONS.LEFT}
>
  Save Changes
</Button>

// Icon on the right
<Button
  variant={ButtonVariantType.PRIMARY}
  icon={ICONS.CHEVRON_RIGHT}
  iconPosition={POSITIONS.RIGHT}
>
  Next Step
</Button>
```

### Icon Only

For compact toolbars or when space is limited:

```tsx
<Button
  variant={ButtonVariantType.PRIMARY}
  icon={ICONS.SETTINGS}
  aria-label="Open settings"
/>
```

**Note:** Always provide an `aria-label` for icon-only buttons to ensure accessibility.

### Full Width

Button that spans the full width of its container:

```tsx
<Button
  variant={ButtonVariantType.PRIMARY}
  size={ButtonSizeType.LARGE}
  fullWidth={true}
>
  Full Width Button
</Button>
```

### Disabled State

Temporarily disable button interactions:

```tsx
<Button variant={ButtonVariantType.PRIMARY} disabled={true}>
  Disabled Button
</Button>
```

### Loading State

Show loading indicator during asynchronous operations:

```tsx
import { Loader } from '@kubit/web-ui-components/loader';

<Button variant={ButtonVariantType.PRIMARY} loading={true} loader={<Loader />}>
  Loading...
</Button>;
```

### Custom Styling

Override default styles with custom CSS classes:

```tsx
<Button
  variant={ButtonVariantType.PRIMARY}
  additionalVariantClasses={{
    button: 'custom-button-class',
    icon: 'custom-icon-class',
    loader: 'custom-loader-class',
  }}
>
  Custom Styled
</Button>
```

### Button Group

Display multiple buttons together:

```tsx
function ActionButtons() {
  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Button variant={ButtonVariantType.PRIMARY}>Confirm</Button>
      <Button variant={ButtonVariantType.SECONDARY}>Cancel</Button>
    </div>
  );
}
```

## Props

### Button

| Prop                       | Type                              | Default     | Description                                                    |
| -------------------------- | --------------------------------- | ----------- | -------------------------------------------------------------- |
| `variant`                  | `ButtonVariantType`               | `PRIMARY`   | Visual variant of the button                                   |
| `size`                     | `ButtonSizeType`                  | `LARGE`     | Size of the button                                             |
| `children`                 | `ReactNode`                       | `undefined` | Button text content                                            |
| `icon`                     | `string \| IconProps`             | `undefined` | Icon to display (can be icon name string or icon props object) |
| `iconPosition`             | `POSITIONS`                       | `LEFT`      | Position of the icon relative to text                          |
| `fullWidth`                | `boolean`                         | `false`     | Whether button spans full container width                      |
| `disabled`                 | `boolean`                         | `false`     | Whether button is disabled                                     |
| `loading`                  | `boolean`                         | `false`     | Whether button shows loading state                             |
| `loader`                   | `ReactNode`                       | `undefined` | Custom loader component                                        |
| `onClick`                  | `(event) => void`                 | `undefined` | Click handler function                                         |
| `type`                     | `'button' \| 'submit' \| 'reset'` | `'button'`  | HTML button type                                               |
| `additionalVariantClasses` | `ButtonCssClasses`                | `undefined` | Custom CSS classes for variant styling                         |
| `additionalSizeClasses`    | `ButtonCssClasses`                | `undefined` | Custom CSS classes for size styling                            |
| `aria-label`               | `string`                          | `undefined` | Accessible label (required for icon-only buttons)              |
| `id`                       | `string`                          | `undefined` | Unique identifier                                              |
| `data-testid`              | `string`                          | `'button'`  | Test identifier                                                |

## Accessibility

### ARIA Support

- Use `aria-label` for icon-only buttons
- Button automatically includes `role="button"`
- Disabled state communicated via `aria-disabled`
- Loading state can include `aria-busy="true"`

### Keyboard Navigation

- Buttons are keyboard accessible with Tab
- Activated with Enter or Space key
- Disabled buttons cannot receive focus
- Focus visible for keyboard navigation

### Best Practices

```tsx
// ✅ Good - Icon-only with aria-label
<Button icon={ICONS.CLOSE} aria-label="Close dialog" />

// ✅ Good - Clear action text
<Button variant={ButtonVariantType.PRIMARY}>
  Save Changes
</Button>

// ❌ Bad - Icon-only without aria-label
<Button icon={ICONS.CLOSE} />

// ❌ Bad - Vague text
<Button>Click Here</Button>
```

## When to Use

### ✅ Use Button when:

- Triggering an action or event
- Submitting a form
- Opening a dialog or modal
- Starting or stopping a process
- Confirming or canceling an action
- Navigating within the application (with proper handling)

### ❌ Don't use Button when:

- Navigating to external pages (use Link instead)
- Displaying static information (use Text or Label)
- Creating navigation menus (use Navigation components)
- Showing status (use Badge or Tag)
- Need toggle behavior (use Toggle or Switch)

## Best Practices

### Visual Hierarchy

1. **One Primary**: Use only one primary button per section
2. **Secondary Support**: Use secondary buttons for alternative actions
3. **Consistent Sizing**: Use consistent sizes within the same context
4. **Icon Consistency**: Use icons consistently across similar actions

```tsx
// ✅ Good - Clear hierarchy
<div style={{ display: 'flex', gap: '12px' }}>
  <Button variant={ButtonVariantType.PRIMARY}>
    Save Changes
  </Button>
  <Button variant={ButtonVariantType.SECONDARY}>
    Cancel
  </Button>
</div>

// ❌ Bad - Multiple primaries competing
<div style={{ display: 'flex', gap: '12px' }}>
  <Button variant={ButtonVariantType.PRIMARY}>Save</Button>
  <Button variant={ButtonVariantType.PRIMARY}>Delete</Button>
  <Button variant={ButtonVariantType.PRIMARY}>Cancel</Button>
</div>
```

### Content Guidelines

1. **Action-Oriented**: Use verbs that clearly describe the action
2. **Concise**: Keep button text short (1-3 words when possible)
3. **Specific**: Be specific about what will happen
4. **Consistent**: Use consistent terminology across the application

```tsx
// ✅ Good - Clear and specific
<Button>Save Changes</Button>
<Button>Delete Account</Button>
<Button>Download Report</Button>

// ❌ Bad - Vague or unclear
<Button>OK</Button>
<Button>Submit</Button>
<Button>Click Here</Button>
```

### Loading State

Always provide feedback during asynchronous operations:

```tsx
function SubmitButton() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await submitForm();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      variant={ButtonVariantType.PRIMARY}
      loading={loading}
      disabled={loading}
      onClick={handleSubmit}
      loader={<Loader />}
    >
      {loading ? 'Submitting...' : 'Submit'}
    </Button>
  );
}
```

### Disabled vs Hidden

- **Disabled**: When action will be available later (show why it's disabled)
- **Hidden**: When action is not relevant to current context

```tsx
// Show disabled with tooltip explaining why
<Tooltip content="Fill all required fields to continue">
  <Button disabled={!formValid}>Continue</Button>
</Tooltip>;

// Hide when not relevant
{
  userCanEdit && (
    <Button variant={ButtonVariantType.PRIMARY}>Edit Content</Button>
  );
}
```

### Touch Targets

For mobile and touch interfaces:

- Minimum touch target: 44x44px
- Use `ButtonSizeType.LARGE` for better accessibility
- Consider `fullWidth` for mobile layouts

```tsx
// Mobile-friendly button
<Button
  variant={ButtonVariantType.PRIMARY}
  size={ButtonSizeType.LARGE}
  fullWidth={true}
>
  Continue to Checkout
</Button>
```

## Related Components

- **Link**: For navigation to other pages or external URLs
- **IconButton**: Specialized button for icon-only actions
- **FloatingActionButton (FAB)**: For primary floating actions
- **Toggle**: For on/off states
- **Chip**: For removable selections

## Form Integration

### Submit Button

```tsx
<form onSubmit={handleSubmit}>
  <input type="text" name="username" />
  <Button type="submit" variant={ButtonVariantType.PRIMARY} icon={ICONS.CHECK}>
    Submit Form
  </Button>
</form>
```

### Reset Button

```tsx
<Button type="reset" variant={ButtonVariantType.SECONDARY}>
  Reset Form
</Button>
```

## Examples

See the [Storybook documentation](https://storybook.kubit-ui.com/?path=/docs/components-actions-button) for interactive examples and live code samples.

## Browser Support

Button component is compatible with all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Changelog

For detailed changes and version history, see the [CHANGELOG](../../../CHANGELOG.md).
