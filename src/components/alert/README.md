# Alert Component

Alert is a feedback component used to display important messages, notifications, or contextual information to users. It provides visual feedback about system state, user actions, or important information that requires attention.

## Installation

```bash
npm install @kubit/web-ui-components
```

## Basic Usage

```tsx
import { Alert } from '@kubit/web-ui-components';
import { AlertVariantType } from '@kubit/web-ui-components/variants';

function App() {
  return (
    <Alert
      variant={AlertVariantType.INFORMATIVE}
      content={{ content: 'This is an informational message' }}
    />
  );
}
```

## Variants

The Alert component supports different visual variants for various message types:

### Informative

Used for neutral, informational messages that provide context or guidance.

```tsx
<Alert
  variant={AlertVariantType.INFORMATIVE}
  content={{ content: 'Here is some helpful information for you.' }}
/>
```

### Success

Used to confirm successful actions or positive outcomes.

```tsx
<Alert
  variant={AlertVariantType.SUCCESS}
  content={{ content: 'Your changes have been saved successfully!' }}
/>
```

### Warning

Used to alert users about potential issues or important information that requires attention.

```tsx
<Alert
  variant={AlertVariantType.WARNING}
  content={{ content: 'Please review your information before proceeding.' }}
/>
```

### Error

Used to communicate errors, failures, or critical issues.

```tsx
<Alert
  variant={AlertVariantType.ERROR}
  content={{ content: 'An error occurred while processing your request.' }}
/>
```

## Advanced Usage

### With Rich Content

You can pass complex content including formatted text:

```tsx
<Alert
  variant={AlertVariantType.INFORMATIVE}
  content={{
    content: 'Your session will expire in 5 minutes.',
    weight: 'bold',
    size: 'MEDIUM',
  }}
/>
```

### With ARIA Live Regions

Control how screen readers announce the alert:

```tsx
<Alert
  variant={AlertVariantType.ERROR}
  content={{ content: 'Failed to connect to server' }}
  ariaLive="assertive"  // Immediate announcement
/>

<Alert
  variant={AlertVariantType.INFORMATIVE}
  content={{ content: 'New updates available' }}
  ariaLive="polite"  // Wait for current speech to complete
/>
```

### With Custom Styling

Apply custom CSS classes for specific use cases:

```tsx
<Alert
  variant={AlertVariantType.WARNING}
  content={{ content: 'Custom styled alert' }}
  additionalClasses={{
    container: 'custom-alert-container',
    description: 'custom-alert-text',
  }}
/>
```

### Multiple Alerts

Display multiple alerts in a stack or list:

```tsx
function AlertStack() {
  const alerts = [
    { variant: AlertVariantType.SUCCESS, message: 'File uploaded' },
    { variant: AlertVariantType.WARNING, message: 'Low disk space' },
    { variant: AlertVariantType.ERROR, message: 'Connection lost' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {alerts.map((alert, index) => (
        <Alert
          key={index}
          variant={alert.variant}
          content={{ content: alert.message }}
        />
      ))}
    </div>
  );
}
```

## Props

### Alert (Controlled)

| Prop                | Type                               | Default     | Description                                                        |
| ------------------- | ---------------------------------- | ----------- | ------------------------------------------------------------------ |
| `variant`           | `AlertVariantType`                 | Required    | Visual variant of the alert (INFORMATIVE, SUCCESS, WARNING, ERROR) |
| `content`           | `string \| TextProps`              | Required    | The message content to display                                     |
| `ariaLive`          | `'off' \| 'polite' \| 'assertive'` | `'off'`     | ARIA live region behavior for screen readers                       |
| `role`              | `string`                           | `undefined` | ARIA role attribute                                                |
| `id`                | `string`                           | `undefined` | Unique identifier for the alert                                    |
| `additionalClasses` | `AlertCssClasses`                  | `undefined` | Custom CSS classes for styling                                     |
| `data-testid`       | `string`                           | `'alert'`   | Test identifier                                                    |

### AlertStandAlone

Same props as Alert, with additional `cssClasses` prop for internal styling.

## Accessibility

### ARIA Support

- Uses semantic HTML for proper structure
- Supports `aria-live` for dynamic content announcements
- Accepts custom `role` attribute for specific use cases
- Uses appropriate color contrast for all variants

### Screen Reader Behavior

```tsx
// Polite announcement - waits for current speech
<Alert
  variant={AlertVariantType.INFORMATIVE}
  content={{ content: 'Settings updated' }}
  ariaLive="polite"
/>

// Assertive announcement - interrupts current speech
<Alert
  variant={AlertVariantType.ERROR}
  content={{ content: 'Critical error occurred!' }}
  ariaLive="assertive"
/>
```

### Keyboard Navigation

- Alert is not focusable by default (it's for display only)
- Content within the alert (links, buttons) remains keyboard accessible
- Follows standard tab order if interactive elements are present

## When to Use

### ✅ Use Alert when:

- Providing feedback about an action's result
- Displaying system-wide notifications
- Communicating important information that doesn't require immediate action
- Showing contextual help or tips
- Alerting users to errors or warnings

### ❌ Don't use Alert when:

- Information requires immediate user action (use Modal or Dialog instead)
- Content needs to be dismissible (consider adding a close button or use Toast)
- Displaying form validation errors (use field-level validation messages)
- Content is constantly changing (use a status indicator instead)
- Alert would block critical content or actions

## Best Practices

### Content Guidelines

1. **Be Concise**: Keep messages short and to the point
2. **Be Specific**: Clearly explain what happened or what needs attention
3. **Be Actionable**: When possible, suggest next steps or solutions
4. **Use Appropriate Tone**: Match the variant to the message severity

```tsx
// ✅ Good
<Alert
  variant={AlertVariantType.ERROR}
  content={{ content: 'Unable to save changes. Check your internet connection and try again.' }}
/>

// ❌ Bad
<Alert
  variant={AlertVariantType.ERROR}
  content={{ content: 'Error!' }}
/>
```

### Visual Hierarchy

1. **Error alerts**: Highest priority, use sparingly
2. **Warning alerts**: Medium priority, for non-critical issues
3. **Success alerts**: Confirm actions, can be brief
4. **Informative alerts**: Lowest priority, for additional context

### Placement

- Place alerts close to relevant content or actions
- For global messages, position at the top of the page
- For contextual messages, place near the affected component
- Stack multiple alerts vertically with consistent spacing

### Timing

```tsx
// Show success alert after action
function handleSave() {
  saveData().then(() => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000); // Auto-hide after 5s
  });
}

{
  showAlert && (
    <Alert
      variant={AlertVariantType.SUCCESS}
      content={{ content: 'Data saved successfully' }}
    />
  );
}
```

## Related Components

- **Toast/Snackbar**: For temporary, auto-dismissing notifications
- **Banner**: For persistent, page-level messages
- **Modal**: For messages requiring user interaction
- **Tooltip**: For brief, contextual information on hover
- **Badge**: For status indicators or counters

## Examples

See the [Storybook documentation](https://storybook.kubit-ui.com/?path=/docs/components-feedback-alert) for interactive examples and live code samples.

## Browser Support

Alert component is compatible with all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Changelog

For detailed changes and version history, see the [CHANGELOG](../../../CHANGELOG.md).
