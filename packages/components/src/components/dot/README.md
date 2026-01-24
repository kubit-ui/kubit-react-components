# Dot Component

A versatile badge component for displaying notification counts, status indicators, and visual markers. Automatically formats numbers that exceed a specified maximum value.

## Features

- **Number formatting**: Displays counts with automatic overflow handling (e.g., "9+" for values over max)
- **Multiple variants**: Customizable through the theme system
- **Multiple sizes**: Flexible sizing options
- **Custom dimensions**: Support for explicit width and height
- **Label support**: Display text content in the dot
- **Accessibility**: Proper semantic markup and attributes
- **Lightweight**: Minimal footprint with focused functionality

## Basic Usage

### Simple Dot (Status Indicator)

```tsx
import { Dot } from '@/components/dot';

function MyComponent() {
  return <Dot variant="PRIMARY" size="MEDIUM" />;
}
```

### Notification Badge

```tsx
import { Dot } from '@/components/dot';

function MyComponent() {
  return <Dot variant="DANGER" size="MEDIUM" number={5} maxNumber={99} />;
}
```

### With Overflow

When the number exceeds maxNumber, it displays as "+maxNumber":

```tsx
import { Dot } from '@/components/dot';

function MyComponent() {
  return <Dot variant="PRIMARY" size="MEDIUM" number={150} maxNumber={99} />;
  // Displays: "99+"
}
```

## Sizes

The component supports multiple size variants:

```tsx
import { Dot } from '@/components/dot';

function SizeExamples() {
  return (
    <>
      <Dot variant="PRIMARY" size="SMALL" number={1} />
      <Dot variant="PRIMARY" size="MEDIUM" number={5} />
      <Dot variant="PRIMARY" size="LARGE" number={10} />
    </>
  );
}
```

## Variants

Different visual styles for various use cases:

```tsx
import { Dot } from '@/components/dot';

function VariantExamples() {
  return (
    <>
      <Dot variant="PRIMARY" size="MEDIUM" number={3} />
      <Dot variant="SUCCESS" size="MEDIUM" number={5} />
      <Dot variant="WARNING" size="MEDIUM" number={8} />
      <Dot variant="DANGER" size="MEDIUM" number={12} />
      <Dot variant="INFO" size="MEDIUM" number={99} />
    </>
  );
}
```

## With Label

Display text content instead of numbers:

```tsx
import { Dot } from '@/components/dot';

function MyComponent() {
  return <Dot variant="PRIMARY" size="MEDIUM" label="New" />;
}
```

## Custom Dimensions

Override default sizing with explicit dimensions:

```tsx
import { Dot } from '@/components/dot';

function MyComponent() {
  return <Dot variant="PRIMARY" width="32px" height="32px" number={7} />;
}
```

## Props

### DotProps

| Prop                       | Type                     | Required | Default | Description                                          |
| -------------------------- | ------------------------ | -------- | ------- | ---------------------------------------------------- |
| `variant`                  | `string`                 | No       | -       | Visual variant from theme configuration              |
| `size`                     | `string`                 | No       | -       | Size variant from theme configuration                |
| `number`                   | `number`                 | No       | -       | Numeric value to display                             |
| `maxNumber`                | `number`                 | No       | -       | Maximum number before showing overflow (e.g., "99+") |
| `label`                    | `string`                 | No       | -       | Text label to display instead of number              |
| `width`                    | `string`                 | No       | -       | Custom width (CSS value)                             |
| `height`                   | `string`                 | No       | -       | Custom height (CSS value)                            |
| `additionalVariantClasses` | `Partial<DotCssClasses>` | No       | -       | Additional CSS classes for variant styling           |
| `additionalSizeClasses`    | `Partial<DotCssClasses>` | No       | -       | Additional CSS classes for size styling              |
| `data-*`                   | `string`                 | No       | -       | Custom data attributes                               |

## Common Patterns

### Notification Badge on Button

```tsx
import { Dot } from '@/components/dot';

function NotificationButton() {
  const unreadCount = 12;

  return (
    <button style={{ position: 'relative' }}>
      <span>Messages</span>
      {unreadCount > 0 && (
        <Dot
          variant="DANGER"
          size="SMALL"
          number={unreadCount}
          maxNumber={9}
          style={{
            position: 'absolute',
            top: '-8px',
            right: '-8px',
          }}
        />
      )}
    </button>
  );
}
```

### Status Indicators

```tsx
import { Dot } from '@/components/dot';

function UserStatus({ status }) {
  const statusConfig = {
    online: { variant: 'SUCCESS', label: '' },
    away: { variant: 'WARNING', label: '' },
    offline: { variant: 'SECONDARY', label: '' },
    busy: { variant: 'DANGER', label: '' },
  };

  const config = statusConfig[status];

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Dot variant={config.variant} size="SMALL" />
      <span>{status}</span>
    </div>
  );
}
```

### Shopping Cart Badge

```tsx
import { useState } from 'react';

import { Dot } from '@/components/dot';

function ShoppingCart() {
  const [itemCount, setItemCount] = useState(3);

  return (
    <div style={{ position: 'relative' }}>
      <button>
        🛒 Cart
        {itemCount > 0 && (
          <Dot
            variant="PRIMARY"
            size="MEDIUM"
            number={itemCount}
            maxNumber={99}
            style={{
              position: 'absolute',
              top: '-10px',
              right: '-10px',
            }}
          />
        )}
      </button>
    </div>
  );
}
```

### Activity Indicator

```tsx
import { Dot } from '@/components/dot';

function ActivityList() {
  const activities = [
    { id: 1, text: 'New message', hasUnread: true },
    { id: 2, text: 'Task completed', hasUnread: false },
    { id: 3, text: 'Comment added', hasUnread: true },
  ];

  return (
    <ul>
      {activities.map((activity) => (
        <li
          key={activity.id}
          style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          {activity.hasUnread && <Dot variant="PRIMARY" size="SMALL" />}
          <span>{activity.text}</span>
        </li>
      ))}
    </ul>
  );
}
```

### Tab with Counter

```tsx
import { Dot } from '@/components/dot';

function TabsWithCounts() {
  const tabs = [
    { id: 'inbox', label: 'Inbox', count: 12 },
    { id: 'sent', label: 'Sent', count: 0 },
    { id: 'drafts', label: 'Drafts', count: 3 },
  ];

  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <span>{tab.label}</span>
          {tab.count > 0 && (
            <Dot
              variant="PRIMARY"
              size="SMALL"
              number={tab.count}
              maxNumber={99}
            />
          )}
        </button>
      ))}
    </div>
  );
}
```

### Menu Item Badge

```tsx
import { Dot } from '@/components/dot';

function MenuItem({ title, badge }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <span>{title}</span>
      {badge && (
        <Dot variant={badge.variant} size="SMALL" label={badge.label} />
      )}
    </div>
  );
}

function MyMenu() {
  return (
    <nav>
      <MenuItem title="Home" />
      <MenuItem title="Messages" badge={{ variant: 'PRIMARY', label: '5' }} />
      <MenuItem title="Updates" badge={{ variant: 'SUCCESS', label: 'New' }} />
      <MenuItem title="Settings" />
    </nav>
  );
}
```

### Step Indicator

```tsx
import { Dot } from '@/components/dot';

function StepIndicator({ currentStep, totalSteps }) {
  return (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      {Array.from({ length: totalSteps }, (_, i) => (
        <Dot
          key={i}
          variant={
            i < currentStep
              ? 'SUCCESS'
              : i === currentStep
                ? 'PRIMARY'
                : 'SECONDARY'
          }
          size="MEDIUM"
          number={i + 1}
        />
      ))}
    </div>
  );
}
```

## Accessibility

### Semantic Meaning

When using dots as status indicators, ensure the meaning is conveyed beyond just color:

```tsx
// ✅ Good - includes text description
<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
  <Dot variant="SUCCESS" size="SMALL" />
  <span>Online</span>
</div>

// ❌ Bad - color only
<Dot variant="SUCCESS" size="SMALL" />
```

### Screen Reader Support

For notification badges, consider adding aria-label to the parent:

```tsx
<button aria-label="Messages, 5 unread">
  Messages
  <Dot variant="DANGER" size="SMALL" number={5} />
</button>
```

### Hidden Content

For purely decorative dots, use appropriate ARIA attributes:

```tsx
<Dot variant="PRIMARY" size="SMALL" aria-hidden="true" />
```

## Best Practices

1. **Use maxNumber consistently**: Set a reasonable maxNumber (typically 99 or 999) to prevent layout issues
2. **Choose appropriate sizes**: Match dot size to its context (small for inline, medium/large for standalone)
3. **Provide context**: Don't rely on color alone to convey meaning
4. **Position carefully**: When overlaying on buttons/icons, ensure proper positioning and visibility
5. **Consider mobile**: Ensure dots are large enough for touch targets when interactive
6. **Limit usage**: Too many notification badges can be overwhelming
7. **Update dynamically**: Keep counts current to maintain user trust
8. **Clear on interaction**: Remove or update badges when the user addresses notifications
9. **Use variants consistently**: Maintain consistent color meanings across your application
10. **Test contrast**: Ensure sufficient color contrast for accessibility

## Theming

Dot supports multiple variants and sizes through the theme system. Common configurations:

### Variants

- `PRIMARY`: Main brand color
- `SECONDARY`: Secondary/neutral indicator
- `SUCCESS`: Positive status (green)
- `WARNING`: Warning status (yellow/orange)
- `DANGER`: Error or urgent status (red)
- `INFO`: Informational status (blue)

### Sizes

- `SMALL`: Compact size for inline usage
- `MEDIUM`: Standard size for most use cases
- `LARGE`: Prominent size for emphasis
- `BIG`: Extra large for high visibility

Consult your theme configuration for available variants and sizes.

## Performance Considerations

The Dot component is lightweight, but consider these optimizations when using many instances:

1. **Memoization**: Memoize dots in lists to prevent unnecessary re-renders
2. **Conditional rendering**: Only render dots when needed (e.g., count > 0)
3. **Virtual scrolling**: For long lists with dots, implement virtualization

```tsx
import { memo } from 'react';

import { Dot } from '@/components/dot';

const NotificationBadge = memo(({ count }) => {
  if (count === 0) return null;

  return <Dot variant="DANGER" size="SMALL" number={count} maxNumber={99} />;
});
```

## Testing

```tsx
import { render, screen } from '@testing-library/react';

import { Dot } from '@/components/dot';

test('renders dot with number', () => {
  render(<Dot number={5} />);
  expect(screen.getByText('5')).toBeInTheDocument();
});

test('displays overflow when number exceeds max', () => {
  render(<Dot number={150} maxNumber={99} />);
  expect(screen.getByText('+99')).toBeInTheDocument();
});

test('renders dot with label', () => {
  render(<Dot label="New" />);
  expect(screen.getByText('New')).toBeInTheDocument();
});

test('applies custom dimensions', () => {
  render(<Dot width="40px" height="40px" number={1} />);
  const dot = screen.getByTestId('dot');
  expect(dot).toHaveStyle({ width: '40px', height: '40px' });
});

test('renders without number when not provided', () => {
  const { container } = render(<Dot variant="PRIMARY" size="SMALL" />);
  const dot = container.querySelector('[data-testid="dot"]');
  expect(dot).toBeEmptyDOMElement();
});
```

## Migration from Other Badge Components

If migrating from other badge/dot implementations:

```tsx
// Before (generic badge)
<Badge count={5} />

// After (Dot component)
<Dot number={5} maxNumber={99} variant="PRIMARY" size="MEDIUM" />

// Before (status dot)
<StatusDot status="online" />

// After (Dot component)
<Dot variant="SUCCESS" size="SMALL" />
```
