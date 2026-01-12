# Link Component

The Link component is a versatile hyperlink element that provides navigation between pages or sections. It supports icons, custom styling, multiple variants, disabled states, and accessibility features. The component can be rendered as an anchor tag, button, or text element depending on configuration.

## Features

- **Multiple Variants**: PRIMARY, SECONDARY, and SECONDARY_ALT styling options
- **Icon Support**: Optional icons positioned left or right of the link text
- **Flexible Rendering**: Can render as anchor, button, or text element
- **Accessibility**: Full ARIA attributes support and keyboard navigation
- **Disabled State**: Visual and functional disabled state
- **Custom Styling**: Control over color, weight, decoration, and cursor
- **External Links**: Support for target and rel attributes
- **Action Types**: Different action types (navigation, download, etc.)
- **Draggable**: Optional drag functionality
- **Custom Attributes**: Support for data attributes and custom HTML attributes

## Usage

### Basic Example

```tsx
import { Link } from '@kubit/components';

function Example() {
  return (
    <Link url="/about" variant="PRIMARY">
      About Us
    </Link>
  );
}
```

### With Icon

```tsx
import { Link } from '@kubit/components';

import { ICONS } from '@/assets/icons';

function Example() {
  return (
    <Link
      url="/profile"
      variant="PRIMARY"
      icon={{ icon: ICONS.USER, altText: 'Profile' }}
      iconPosition="left"
    >
      My Profile
    </Link>
  );
}
```

### External Link

```tsx
import { Link } from '@kubit/components';

function Example() {
  return (
    <Link
      url="https://example.com"
      target="_blank"
      rel="noopener noreferrer"
      variant="PRIMARY"
    >
      Visit Example.com
    </Link>
  );
}
```

### Disabled Link

```tsx
import { Link } from '@kubit/components';

function Example() {
  return (
    <Link url="/unavailable" variant="PRIMARY" disabled>
      Unavailable Page
    </Link>
  );
}
```

### With Click Handler

```tsx
import { Link } from '@kubit/components';

function Example() {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('Link clicked!');
  };

  return (
    <Link url="/page" variant="PRIMARY" onClick={handleClick}>
      Click Me
    </Link>
  );
}
```

### Custom Styling

```tsx
import { Link } from '@kubit/components';

function Example() {
  return (
    <Link
      url="/custom"
      variant="PRIMARY"
      color="#ff5722"
      weight={700}
      decoration="underline"
    >
      Custom Styled Link
    </Link>
  );
}
```

## Props

### LinkProps

| Prop               | Type                                          | Required | Default  | Description                                      |
| ------------------ | --------------------------------------------- | -------- | -------- | ------------------------------------------------ |
| `url`              | `string`                                      | Yes      | -        | The URL the link points to                       |
| `children`         | `string \| JSX.Element`                       | Yes      | -        | The content of the link                          |
| `variant`          | `'PRIMARY' \| 'SECONDARY' \| 'SECONDARY_ALT'` | No       | -        | Visual variant of the link                       |
| `textVariant`      | `string`                                      | No       | -        | Text variant for typography styling              |
| `icon`             | `ElementOrIconProps`                          | No       | -        | Icon to display alongside the link text          |
| `iconPosition`     | `'left' \| 'right'`                           | No       | -        | Position of the icon relative to text            |
| `action`           | `LinkActionType`                              | No       | -        | Type of action (navigation, download, etc.)      |
| `target`           | `'_blank' \| '_self' \| '_parent' \| '_top'`  | No       | -        | Where to open the linked document                |
| `rel`              | `string`                                      | No       | -        | Relationship between current and linked document |
| `disabled`         | `boolean`                                     | No       | `false`  | Whether the link is disabled                     |
| `color`            | `string`                                      | No       | -        | Custom color for the link (CSS color value)      |
| `weight`           | `number`                                      | No       | -        | Font weight (e.g., 400, 500, 600, 700)           |
| `decoration`       | `CSSProperties['textDecoration']`             | No       | -        | Text decoration (underline, none, etc.)          |
| `alignCenter`      | `boolean`                                     | No       | `false`  | Whether to center align the link content         |
| `draggable`        | `boolean`                                     | No       | `false`  | Whether the link is draggable                    |
| `onClick`          | `React.MouseEventHandler`                     | No       | -        | Click event handler                              |
| `id`               | `string`                                      | No       | -        | Custom ID for the link element                   |
| `role`             | `React.AriaRole`                              | No       | -        | ARIA role attribute                              |
| `aria-label`       | `string`                                      | No       | -        | Accessible label for the link                    |
| `aria-describedby` | `string`                                      | No       | -        | ID of element describing the link                |
| `aria-disabled`    | `boolean`                                     | No       | -        | ARIA disabled state                              |
| `aria-current`     | `boolean \| string`                           | No       | -        | Indicates current page/step                      |
| `aria-labelledby`  | `string`                                      | No       | -        | ID of element labeling the link                  |
| `data-testid`      | `string`                                      | No       | `'link'` | Test ID for testing purposes                     |

### Icon Props (ElementOrIconProps)

| Prop      | Type                        | Required | Description                   |
| --------- | --------------------------- | -------- | ----------------------------- |
| `icon`    | `string \| React.ReactNode` | Yes      | The icon to display           |
| `altText` | `string`                    | No       | Alternative text for the icon |

## Variants

The Link component supports three visual variants:

### PRIMARY

The primary link style, typically used for main navigation and important actions.

```tsx
<Link url="/home" variant="PRIMARY">
  Home
</Link>
```

### SECONDARY

The secondary link style, used for less prominent navigation.

```tsx
<Link url="/help" variant="SECONDARY">
  Help
</Link>
```

### SECONDARY_ALT

An alternative secondary style, used for tertiary navigation.

```tsx
<Link url="/privacy" variant="SECONDARY_ALT">
  Privacy Policy
</Link>
```

## Common Patterns

### Navigation Menu

```tsx
import { Link } from '@kubit/components';

function NavigationMenu() {
  return (
    <nav>
      <ul style={{ display: 'flex', gap: '24px', listStyle: 'none' }}>
        <li>
          <Link url="/" variant="PRIMARY" aria-current="page">
            Home
          </Link>
        </li>
        <li>
          <Link url="/products" variant="PRIMARY">
            Products
          </Link>
        </li>
        <li>
          <Link url="/about" variant="PRIMARY">
            About
          </Link>
        </li>
        <li>
          <Link url="/contact" variant="PRIMARY">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
```

### Footer Links

```tsx
import { Link } from '@kubit/components';

function FooterLinks() {
  return (
    <footer>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <Link url="/terms" variant="SECONDARY_ALT">
          Terms of Service
        </Link>
        <Link url="/privacy" variant="SECONDARY_ALT">
          Privacy Policy
        </Link>
        <Link url="/cookies" variant="SECONDARY_ALT">
          Cookie Policy
        </Link>
        <Link url="/sitemap" variant="SECONDARY_ALT">
          Sitemap
        </Link>
      </div>
    </footer>
  );
}
```

### Links with Icons

```tsx
import { Link } from '@kubit/components';

import { ICONS } from '@/assets/icons';

function IconLinks() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Link
        url="/profile"
        variant="PRIMARY"
        icon={{ icon: ICONS.USER, altText: 'User' }}
        iconPosition="left"
      >
        My Profile
      </Link>

      <Link
        url="/settings"
        variant="PRIMARY"
        icon={{ icon: ICONS.SETTINGS, altText: 'Settings' }}
        iconPosition="left"
      >
        Settings
      </Link>

      <Link
        url="/logout"
        variant="SECONDARY"
        icon={{ icon: ICONS.LOGOUT, altText: 'Logout' }}
        iconPosition="left"
      >
        Logout
      </Link>
    </div>
  );
}
```

### External Links with Security

```tsx
import { Link } from '@kubit/components';

import { ICONS } from '@/assets/icons';

function ExternalLinks() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Link
        url="https://github.com/example"
        target="_blank"
        rel="noopener noreferrer"
        variant="PRIMARY"
        icon={{ icon: ICONS.EXTERNAL, altText: 'External link' }}
        iconPosition="right"
      >
        View on GitHub
      </Link>

      <Link
        url="https://docs.example.com"
        target="_blank"
        rel="noopener noreferrer"
        variant="PRIMARY"
        icon={{ icon: ICONS.EXTERNAL, altText: 'External link' }}
        iconPosition="right"
      >
        Documentation
      </Link>
    </div>
  );
}
```

### Download Links

```tsx
import { Link } from '@kubit/components';

import { ICONS } from '@/assets/icons';

function DownloadLinks() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Link
        url="/files/document.pdf"
        variant="PRIMARY"
        action="download"
        icon={{ icon: ICONS.DOWNLOAD, altText: 'Download' }}
        iconPosition="left"
      >
        Download PDF
      </Link>

      <Link
        url="/files/data.csv"
        variant="PRIMARY"
        action="download"
        icon={{ icon: ICONS.DOWNLOAD, altText: 'Download' }}
        iconPosition="left"
      >
        Download CSV
      </Link>
    </div>
  );
}
```

### Breadcrumb Navigation

```tsx
import { Link } from '@kubit/components';

import { ICONS } from '@/assets/icons';

function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb">
      <ol
        style={{
          display: 'flex',
          gap: '8px',
          listStyle: 'none',
          alignItems: 'center',
        }}
      >
        <li>
          <Link url="/" variant="SECONDARY">
            Home
          </Link>
        </li>
        <li>
          <span aria-hidden="true">/</span>
        </li>
        <li>
          <Link url="/products" variant="SECONDARY">
            Products
          </Link>
        </li>
        <li>
          <span aria-hidden="true">/</span>
        </li>
        <li>
          <Link url="/products/laptop" variant="SECONDARY" aria-current="page">
            Laptop
          </Link>
        </li>
      </ol>
    </nav>
  );
}
```

### Disabled Link State

```tsx
import { useState } from 'react';

import { Link } from '@kubit/components';

function ConditionalLink() {
  const [isAvailable, setIsAvailable] = useState(false);

  return (
    <div>
      <Link
        url="/premium"
        variant="PRIMARY"
        disabled={!isAvailable}
        aria-disabled={!isAvailable}
      >
        {isAvailable ? 'Access Premium' : 'Premium (Unavailable)'}
      </Link>

      <button onClick={() => setIsAvailable(!isAvailable)}>
        Toggle Availability
      </button>
    </div>
  );
}
```

### Link with Custom Click Handler

```tsx
import { Link } from '@kubit/components';
import { useNavigate } from 'react-router-dom';

function CustomNavigationLink() {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Custom logic before navigation
    console.log('Navigating to page...');
    navigate('/page');
  };

  return (
    <Link url="/page" variant="PRIMARY" onClick={handleClick}>
      Navigate with Custom Logic
    </Link>
  );
}
```

### Social Media Links

```tsx
import { Link } from '@kubit/components';

import { ICONS } from '@/assets/icons';

function SocialLinks() {
  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Link
        url="https://twitter.com/example"
        target="_blank"
        rel="noopener noreferrer"
        variant="PRIMARY"
        icon={{ icon: ICONS.TWITTER, altText: 'Twitter' }}
        aria-label="Follow us on Twitter"
      >
        <span style={{ visuallyHidden: true }}>Twitter</span>
      </Link>

      <Link
        url="https://facebook.com/example"
        target="_blank"
        rel="noopener noreferrer"
        variant="PRIMARY"
        icon={{ icon: ICONS.FACEBOOK, altText: 'Facebook' }}
        aria-label="Follow us on Facebook"
      >
        <span style={{ visuallyHidden: true }}>Facebook</span>
      </Link>

      <Link
        url="https://linkedin.com/company/example"
        target="_blank"
        rel="noopener noreferrer"
        variant="PRIMARY"
        icon={{ icon: ICONS.LINKEDIN, altText: 'LinkedIn' }}
        aria-label="Follow us on LinkedIn"
      >
        <span style={{ visuallyHidden: true }}>LinkedIn</span>
      </Link>
    </div>
  );
}
```

## Accessibility

The Link component is built with accessibility as a priority:

### Semantic HTML

Uses proper anchor tags for navigation:

```tsx
<Link url="/page" variant="PRIMARY">
  Navigate
</Link>
```

Renders as:

```html
<a href="/page">Navigate</a>
```

### Keyboard Navigation

Fully accessible via keyboard:

- **Tab**: Navigate to the link
- **Enter**: Activate the link
- **Space**: Activate the link (when role="button")

### ARIA Attributes

Support for comprehensive ARIA attributes:

```tsx
<Link
  url="/current"
  variant="PRIMARY"
  aria-current="page"
  aria-label="Current page"
>
  Current Page
</Link>
```

### Disabled State

Proper disabled state handling:

```tsx
<Link url="/disabled" variant="PRIMARY" disabled aria-disabled="true">
  Disabled Link
</Link>
```

### External Link Indication

Always use appropriate attributes for external links:

```tsx
<Link
  url="https://external.com"
  target="_blank"
  rel="noopener noreferrer"
  variant="PRIMARY"
  aria-label="Visit external site (opens in new tab)"
>
  External Site
</Link>
```

### Focus Management

The component supports proper focus management:

```tsx
import { useRef } from 'react';

function FocusExample() {
  const linkRef = useRef<HTMLElement>(null);

  const focusLink = () => {
    linkRef.current?.focus();
  };

  return (
    <>
      <Link ref={linkRef} url="/page" variant="PRIMARY">
        Focusable Link
      </Link>
      <button onClick={focusLink}>Focus Link</button>
    </>
  );
}
```

## Best Practices

### 1. Use Descriptive Link Text

```tsx
// ✅ Good - descriptive text
<Link url="/pricing" variant="PRIMARY">
  View Pricing Plans
</Link>

// ❌ Bad - generic text
<Link url="/pricing" variant="PRIMARY">
  Click here
</Link>
```

### 2. Secure External Links

```tsx
// ✅ Good - secure external link
<Link
  url="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
  variant="PRIMARY"
>
  External Site
</Link>

// ❌ Bad - insecure external link
<Link url="https://example.com" target="_blank" variant="PRIMARY">
  External Site
</Link>
```

### 3. Use aria-current for Current Page

```tsx
// ✅ Good - indicates current page
<Link url="/about" variant="PRIMARY" aria-current="page">
  About
</Link>

// ❌ Bad - no indication
<Link url="/about" variant="PRIMARY">
  About (current)
</Link>
```

### 4. Provide Icon Alt Text

```tsx
// ✅ Good - descriptive alt text
<Link
  url="/profile"
  variant="PRIMARY"
  icon={{ icon: ICONS.USER, altText: 'User profile' }}
>
  Profile
</Link>

// ❌ Bad - missing alt text
<Link
  url="/profile"
  variant="PRIMARY"
  icon={{ icon: ICONS.USER }}
>
  Profile
</Link>
```

### 5. Use Appropriate Variants

```tsx
// ✅ Good - consistent hierarchy
<nav>
  <Link url="/" variant="PRIMARY">Home</Link>
  <Link url="/about" variant="PRIMARY">About</Link>
</nav>
<footer>
  <Link url="/terms" variant="SECONDARY_ALT">Terms</Link>
</footer>

// ❌ Bad - inconsistent variants
<nav>
  <Link url="/" variant="PRIMARY">Home</Link>
  <Link url="/about" variant="SECONDARY_ALT">About</Link>
</nav>
```

### 6. Handle Disabled State Properly

```tsx
// ✅ Good - both visual and ARIA disabled
<Link
  url="/premium"
  variant="PRIMARY"
  disabled
  aria-disabled="true"
>
  Premium Feature
</Link>

// ❌ Bad - only visual disabled
<Link url="/premium" variant="PRIMARY" disabled>
  Premium Feature
</Link>
```

### 7. Use Meaningful Icons

```tsx
// ✅ Good - icon matches context
<Link
  url="/download"
  variant="PRIMARY"
  icon={{ icon: ICONS.DOWNLOAD, altText: 'Download' }}
>
  Download File
</Link>

// ❌ Bad - confusing icon
<Link
  url="/download"
  variant="PRIMARY"
  icon={{ icon: ICONS.USER, altText: 'User' }}
>
  Download File
</Link>
```

### 8. Consider Mobile Interactions

```tsx
// ✅ Good - adequate touch target
<Link
  url="/page"
  variant="PRIMARY"
  style={{ padding: '12px 16px' }}
>
  Tap Me
</Link>

// ❌ Bad - small touch target
<Link url="/page" variant="PRIMARY" style={{ fontSize: '10px' }}>
  Tiny Link
</Link>
```

## Styling

### Custom Colors

```tsx
<Link url="/custom" variant="PRIMARY" color="#e74c3c" weight={600}>
  Custom Color Link
</Link>
```

### Text Decoration

```tsx
<Link
  url="/underline"
  variant="PRIMARY"
  decoration="underline"
>
  Underlined Link
</Link>

<Link
  url="/no-decoration"
  variant="PRIMARY"
  decoration="none"
>
  No Decoration Link
</Link>
```

### Custom CSS Classes

```tsx
<Link
  url="/styled"
  variant="PRIMARY"
  additionalClasses={{
    link: 'custom-link-class',
  }}
  additionalTextClasses={{
    text: 'custom-text-class',
  }}
>
  Styled Link
</Link>
```

### Theme Integration

```tsx
import { useTheme } from '@/hooks/useTheme';

function ThemedLink() {
  const theme = useTheme();

  return (
    <Link
      url="/page"
      variant="PRIMARY"
      color={theme.colors.primary}
      weight={theme.typography.fontWeight.medium}
    >
      Themed Link
    </Link>
  );
}
```

## Testing

### Basic Rendering

```tsx
import { Link } from '@kubit/components';
import { render, screen } from '@testing-library/react';

describe('Link', () => {
  test('renders link with correct href', () => {
    render(
      <Link url="/page" variant="PRIMARY">
        Test Link
      </Link>,
    );

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/page');
    expect(link).toHaveTextContent('Test Link');
  });
});
```

### Disabled State

```tsx
test('handles disabled state correctly', () => {
  render(
    <Link url="/page" variant="PRIMARY" disabled>
      Disabled Link
    </Link>,
  );

  const link = screen.getByText('Disabled Link');
  expect(link).toHaveAttribute('aria-disabled', 'true');
  expect(link).not.toHaveAttribute('href');
});
```

### Click Handling

```tsx
import userEvent from '@testing-library/user-event';

test('calls onClick when clicked', async () => {
  const handleClick = vi.fn();

  render(
    <Link url="/page" variant="PRIMARY" onClick={handleClick}>
      Clickable Link
    </Link>,
  );

  const link = screen.getByRole('link');
  await userEvent.click(link);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

### External Links

```tsx
test('renders external link with correct attributes', () => {
  render(
    <Link
      url="https://example.com"
      target="_blank"
      rel="noopener noreferrer"
      variant="PRIMARY"
    >
      External
    </Link>,
  );

  const link = screen.getByRole('link');
  expect(link).toHaveAttribute('target', '_blank');
  expect(link).toHaveAttribute('rel', 'noopener noreferrer');
});
```

### With Icon

```tsx
test('renders link with icon', () => {
  render(
    <Link
      url="/page"
      variant="PRIMARY"
      icon={{ icon: 'icon-name', altText: 'Icon' }}
    >
      Link with Icon
    </Link>,
  );

  expect(screen.getByText('Link with Icon')).toBeInTheDocument();
  expect(screen.getByAltText('Icon')).toBeInTheDocument();
});
```

### Accessibility

```tsx
import { axe } from 'vitest-axe';

test('has no accessibility violations', async () => {
  const { container } = render(
    <Link url="/page" variant="PRIMARY" aria-label="Navigate to page">
      Page Link
    </Link>,
  );

  expect(await axe(container)).toHaveNoViolations();
});
```

## Related Components

- **Button**: For actions that don't navigate
- **ButtonLink**: Link styled as a button
- **Text**: The underlying text component
- **Icon**: Icons used within links
- **Breadcrumbs**: Navigation component using links

## Browser Support

The Link component works in all modern browsers:

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Migration Guide

### From Native Anchor

```tsx
// Before
<a href="/page" target="_blank" rel="noopener noreferrer">
  Link Text
</a>

// After
<Link
  url="/page"
  target="_blank"
  rel="noopener noreferrer"
  variant="PRIMARY"
>
  Link Text
</Link>
```

### From Other Link Libraries

```tsx
// Before (react-router)
<NavLink to="/page" className="active">
  Page
</NavLink>

// After
<Link url="/page" variant="PRIMARY" aria-current="page">
  Page
</Link>
```

## Troubleshooting

### Link Not Navigating

**Problem**: Clicking the link doesn't navigate.

**Solution**: Check if the link is disabled or if onClick prevents default:

```tsx
// ✅ Correct
<Link url="/page" variant="PRIMARY">
  Navigate
</Link>

// ❌ Incorrect - disabled
<Link url="/page" variant="PRIMARY" disabled>
  Navigate
</Link>
```

### Icon Not Showing

**Problem**: Icon doesn't appear.

**Solution**: Ensure icon prop is correctly structured:

```tsx
// ✅ Correct
<Link
  url="/page"
  variant="PRIMARY"
  icon={{ icon: ICONS.USER, altText: 'User' }}
>
  Link
</Link>

// ❌ Incorrect
<Link url="/page" variant="PRIMARY" icon={ICONS.USER}>
  Link
</Link>
```

### External Link Security Warning

**Problem**: Browser warns about unsafe external links.

**Solution**: Always use `rel="noopener noreferrer"` for external links:

```tsx
<Link
  url="https://external.com"
  target="_blank"
  rel="noopener noreferrer"
  variant="PRIMARY"
>
  External
</Link>
```
