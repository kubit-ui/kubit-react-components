# Icon

A versatile icon component that renders SVG icons or image icons with extensive customization options. Supports interactive icons with click handlers, accessibility features, animations, and fallback icons.

## Features

- **Multiple Icon Types**: Support for SVG icons, image URLs, and named icons
- **Interactive Icons**: Optional click handlers that render icons as buttons
- **Accessibility**: Comprehensive ARIA support and screen reader text
- **Animations**: Built-in rotation and transition animations
- **Fallback Support**: Automatic fallback to alternative icons
- **Color Customization**: Custom color support for linear icons
- **Flexible Sizing**: Custom width and height properties
- **Loading Strategy**: Lazy or eager loading for performance optimization

## Usage

### Basic Icon

```tsx
import { Icon } from '@/components/icon';

function MyComponent() {
  return <Icon icon="ARROW_ICON" altText="Arrow" width="24px" height="24px" />;
}
```

### Interactive Icon

```tsx
import { Icon } from '@/components/icon';

function MyComponent() {
  const handleIconClick = () => {
    console.log('Icon clicked!');
  };

  return (
    <Icon
      icon="CLOSE_ICON"
      altText="Close"
      width="24px"
      height="24px"
      onClick={handleIconClick}
      screenReaderText="Close dialog"
    />
  );
}
```

### Icon with Color

```tsx
import { Icon } from '@/components/icon';

function MyComponent() {
  return (
    <Icon
      icon="HEART_ICON"
      color="#FF0000"
      width="32px"
      height="32px"
      altText="Favorite"
    />
  );
}
```

### Icon with Fallback

```tsx
import { Icon } from '@/components/icon';

function MyComponent() {
  return (
    <Icon
      icon="CUSTOM_ICON_THAT_MIGHT_NOT_EXIST"
      fallbackIcon="DEFAULT_ICON"
      width="24px"
      height="24px"
      altText="Custom icon with fallback"
    />
  );
}
```

### Animated Icon

```tsx
import { Icon } from '@/components/icon';

function MyComponent() {
  return (
    <Icon
      icon="REFRESH_ICON"
      rotate="45deg"
      transitionDuration="0.3s"
      width="24px"
      height="24px"
      altText="Refresh"
    />
  );
}
```

## Props

### IconProps

| Property                       | Type                                                             | Description                           | Required | Default  |
| ------------------------------ | ---------------------------------------------------------------- | ------------------------------------- | -------- | -------- |
| `icon`                         | `string`                                                         | Icon name or URL to display           | Yes      | -        |
| `altText`                      | `string`                                                         | Alternative text for accessibility    | No       | -        |
| `aria-label`                   | `string`                                                         | ARIA label for the icon               | No       | -        |
| `aria-checked`                 | `boolean`                                                        | Indicates checked state               | No       | -        |
| `aria-controls`                | `string`                                                         | ID of controlled element              | No       | -        |
| `aria-expanded`                | `boolean`                                                        | Indicates expanded state              | No       | -        |
| `aria-hidden`                  | `boolean`                                                        | Hides icon from screen readers        | No       | -        |
| `aria-haspopup`                | `boolean \| 'menu' \| 'listbox' \| 'tree' \| 'grid' \| 'dialog'` | Indicates popup type                  | No       | -        |
| `className`                    | `string`                                                         | Additional CSS classes                | No       | -        |
| `color`                        | `string`                                                         | Icon color (for linear icons)         | No       | -        |
| `height`                       | `string`                                                         | Icon height                           | No       | -        |
| `width`                        | `string`                                                         | Icon width                            | No       | -        |
| `id`                           | `string`                                                         | Element ID                            | No       | -        |
| `disabled`                     | `boolean`                                                        | Disables interactive icon             | No       | `false`  |
| `onClick`                      | `(event: React.MouseEvent<HTMLButtonElement>) => void`           | Click handler (renders as button)     | No       | -        |
| `rotate`                       | `string`                                                         | Rotation angle (e.g., "45deg")        | No       | `'0deg'` |
| `transitionDuration`           | `string`                                                         | Animation transition duration         | No       | `'0.2s'` |
| `tabIndex`                     | `number`                                                         | Tab index for keyboard navigation     | No       | -        |
| `title`                        | `string`                                                         | Title attribute                       | No       | -        |
| `screenReaderText`             | `string`                                                         | Text for screen readers               | No       | -        |
| `loading`                      | `'lazy' \| 'eager'`                                              | Image loading strategy                | No       | -        |
| `fallbackIcon`                 | `string`                                                         | Fallback icon if main icon fails      | No       | -        |
| `fileExtension`                | `string`                                                         | File extension for icon URL           | No       | -        |
| `complex`                      | `boolean`                                                        | Enable complex icon features          | No       | `false`  |
| `twistAnimationTransformValue` | `string \| null`                                                 | Custom transform value for animations | No       | -        |

## Common Patterns

### Navigation Icons

```tsx
import { Icon } from '@/components/icon';

function NavigationMenu() {
  return (
    <nav>
      <Icon icon="HOME_ICON" altText="Home" width="24px" height="24px" />
      <Icon icon="SEARCH_ICON" altText="Search" width="24px" height="24px" />
      <Icon icon="PROFILE_ICON" altText="Profile" width="24px" height="24px" />
      <Icon
        icon="SETTINGS_ICON"
        altText="Settings"
        width="24px"
        height="24px"
      />
    </nav>
  );
}
```

### Action Icons with Handlers

```tsx
import { useState } from 'react';

import { Icon } from '@/components/icon';

function ActionButtons() {
  const [liked, setLiked] = useState(false);

  return (
    <div>
      <Icon
        icon="LIKE_ICON"
        color={liked ? '#FF0000' : '#999999'}
        onClick={() => setLiked(!liked)}
        screenReaderText={liked ? 'Unlike' : 'Like'}
        width="24px"
        height="24px"
      />
      <Icon
        icon="SHARE_ICON"
        onClick={() => console.log('Share clicked')}
        screenReaderText="Share"
        width="24px"
        height="24px"
      />
      <Icon
        icon="BOOKMARK_ICON"
        onClick={() => console.log('Bookmark clicked')}
        screenReaderText="Bookmark"
        width="24px"
        height="24px"
      />
    </div>
  );
}
```

### Status Icons with Different Sizes

```tsx
import { Icon } from '@/components/icon';

function StatusIndicators() {
  return (
    <div>
      <Icon icon="SUCCESS_ICON" color="#00AA00" width="16px" height="16px" />
      <Icon icon="WARNING_ICON" color="#FFAA00" width="20px" height="20px" />
      <Icon icon="ERROR_ICON" color="#FF0000" width="24px" height="24px" />
      <Icon icon="INFO_ICON" color="#0066FF" width="32px" height="32px" />
    </div>
  );
}
```

### Animated Icons

```tsx
import { useState } from 'react';

import { Icon } from '@/components/icon';

function AnimatedIcons() {
  const [rotation, setRotation] = useState(0);

  const handleRefresh = () => {
    setRotation(rotation + 360);
  };

  return (
    <Icon
      icon="REFRESH_ICON"
      rotate={`${rotation}deg`}
      transitionDuration="0.5s"
      onClick={handleRefresh}
      screenReaderText="Refresh"
      width="24px"
      height="24px"
    />
  );
}
```

### Icons with ARIA States

```tsx
import { useState } from 'react';

import { Icon } from '@/components/icon';

function ExpandableSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <button onClick={() => setExpanded(!expanded)}>
      <Icon
        icon="CHEVRON_ICON"
        rotate={expanded ? '180deg' : '0deg'}
        aria-expanded={expanded}
        aria-controls="content-section"
        width="24px"
        height="24px"
      />
      <span>Section Title</span>
    </button>
  );
}
```

### Loading States

```tsx
import { Icon } from '@/components/icon';

function LoadingIndicator() {
  return (
    <Icon
      icon="SPINNER_ICON"
      loading="eager"
      width="48px"
      height="48px"
      altText="Loading..."
      className="animate-spin"
    />
  );
}
```

## Accessibility

The Icon component is designed with accessibility in mind:

### Screen Reader Support

```tsx
// Decorative icon (hidden from screen readers)
<Icon
  icon="DECORATIVE_ICON"
  aria-hidden={true}
  width="24px"
  height="24px"
/>

// Informative icon (accessible to screen readers)
<Icon
  icon="INFO_ICON"
  altText="Information"
  width="24px"
  height="24px"
/>
```

### Interactive Icons

```tsx
// Button-like icon with proper ARIA
<Icon
  icon="DELETE_ICON"
  onClick={handleDelete}
  screenReaderText="Delete item"
  aria-label="Delete"
  disabled={isDeleting}
  width="24px"
  height="24px"
/>
```

### State Indication

```tsx
// Toggle icon with checked state
<Icon
  icon="CHECKBOX_ICON"
  aria-checked={isChecked}
  aria-label="Select item"
  onClick={toggleCheck}
  width="24px"
  height="24px"
/>
```

### Keyboard Navigation

```tsx
// Icon with custom tab order
<Icon
  icon="PRIORITY_ACTION_ICON"
  onClick={handleAction}
  tabIndex={0}
  screenReaderText="Priority action"
  width="24px"
  height="24px"
/>
```

## Best Practices

### 1. Always Provide Alternative Text

```tsx
// ✅ Good - Provides context
<Icon icon="SEARCH_ICON" altText="Search" width="24px" height="24px" />

// ❌ Bad - No alternative text
<Icon icon="SEARCH_ICON" width="24px" height="24px" />
```

### 2. Use Screen Reader Text for Interactive Icons

```tsx
// ✅ Good - Clear action description
<Icon
  icon="CLOSE_ICON"
  onClick={handleClose}
  screenReaderText="Close dialog"
  width="24px"
  height="24px"
/>

// ❌ Bad - No screen reader context
<Icon
  icon="CLOSE_ICON"
  onClick={handleClose}
  width="24px"
  height="24px"
/>
```

### 3. Hide Decorative Icons from Screen Readers

```tsx
// ✅ Good - Decorative icon hidden
<div>
  <Icon icon="DECORATIVE_ICON" aria-hidden={true} width="24px" height="24px" />
  <span>Important text content</span>
</div>
```

### 4. Provide Fallback Icons

```tsx
// ✅ Good - Has fallback
<Icon
  icon="CUSTOM_ICON"
  fallbackIcon="DEFAULT_ICON"
  altText="Icon"
  width="24px"
  height="24px"
/>

// ⚠️ Acceptable - But may render null if icon fails
<Icon
  icon="CUSTOM_ICON"
  altText="Icon"
  width="24px"
  height="24px"
/>
```

### 5. Use Appropriate Sizes

```tsx
// ✅ Good - Consistent sizing
<Icon icon="ICON" width="24px" height="24px" /> // Small
<Icon icon="ICON" width="32px" height="32px" /> // Medium
<Icon icon="ICON" width="48px" height="48px" /> // Large

// ❌ Bad - Inconsistent aspect ratio
<Icon icon="ICON" width="24px" height="32px" />
```

### 6. Use Colors Appropriately

```tsx
// ✅ Good - Semantic colors
<Icon icon="SUCCESS_ICON" color="#00AA00" width="24px" height="24px" />
<Icon icon="ERROR_ICON" color="#FF0000" width="24px" height="24px" />

// ⚠️ Caution - Don't rely on color alone
<Icon
  icon="WARNING_ICON"
  color="#FFAA00"
  altText="Warning"
  width="24px"
  height="24px"
/>
```

### 7. Optimize Loading Strategy

```tsx
// ✅ Good - Lazy load below the fold icons
<Icon
  icon="FOOTER_ICON"
  loading="lazy"
  width="24px"
  height="24px"
/>

// ✅ Good - Eager load critical icons
<Icon
  icon="LOGO_ICON"
  loading="eager"
  width="48px"
  height="48px"
/>
```

## Performance Considerations

### Lazy Loading

```tsx
// Load icons lazily for better initial performance
<Icon icon="LARGE_ICON" loading="lazy" width="64px" height="64px" />
```

### Reusing Icons

```tsx
// Define common icon props for reuse
const iconProps = {
  width: '24px',
  height: '24px',
};

function IconList() {
  return (
    <>
      <Icon icon="ICON_1" {...iconProps} />
      <Icon icon="ICON_2" {...iconProps} />
      <Icon icon="ICON_3" {...iconProps} />
    </>
  );
}
```

## Testing

### Basic Rendering

```tsx
import { render, screen } from '@testing-library/react';

import { Icon } from './icon';

test('renders icon with alt text', () => {
  render(<Icon icon="TEST_ICON" altText="Test" width="24px" height="24px" />);
  expect(screen.getByTestId('icon')).toBeInTheDocument();
});
```

### Interactive Behavior

```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Icon } from './icon';

test('calls onClick when clicked', async () => {
  const handleClick = jest.fn();
  render(
    <Icon
      icon="TEST_ICON"
      onClick={handleClick}
      screenReaderText="Click me"
      width="24px"
      height="24px"
    />,
  );

  await userEvent.click(screen.getByRole('button'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

### Accessibility

```tsx
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Icon } from './icon';

test('has no accessibility violations', async () => {
  const { container } = render(
    <Icon icon="TEST_ICON" altText="Test" width="24px" height="24px" />,
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

## Related Components

- **IconHost**: Internal component for icon rendering
- **IconStandAlone**: Standalone icon component without wrapper logic

## Notes

- The component automatically renders as a `<button>` when `onClick` is provided
- Returns `null` if no icon prop is provided
- Linear icons support custom colors via the `color` prop
- Complex icons enable additional animation features
- Use `aria-hidden={true}` for purely decorative icons
