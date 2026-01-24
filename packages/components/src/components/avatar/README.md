# Avatar Component

Avatar is a visual representation component used to display user profiles, entities, or placeholder identities. It supports multiple content types including images, initials, and icons, with various sizes and customization options.

## Installation

```bash
npm install @kubit/web-ui-components
```

## Basic Usage

```tsx
import { Avatar } from '@kubit/web-ui-components';
import { AvatarSize } from '@kubit/web-ui-components/variants';

function App() {
  return <Avatar size={AvatarSize.MEDIUM} initials={{ content: 'JD' }} />;
}
```

## Content Types

The Avatar component supports three types of content:

### With Image

Display a user's profile picture or photo.

```tsx
<Avatar size={AvatarSize.MEDIUM} image="https://example.com/user-photo.jpg" />
```

### With Initials

Display user initials when no image is available.

```tsx
<Avatar
  size={AvatarSize.MEDIUM}
  initials={{ content: 'JD' }}
  maxLengthInitials={2}
/>
```

### With Icon

Display a placeholder icon.

```tsx
<Avatar size={AvatarSize.MEDIUM} icon={{ icon: 'ICON_USER' }} />
```

## Sizes

Avatar comes in four different sizes:

```tsx
// Extra Large
<Avatar size={AvatarSize['EXTRA-LARGE']} initials={{ content: 'JD' }} />

// Large
<Avatar size={AvatarSize.LARGE} initials={{ content: 'JD' }} />

// Medium (Default)
<Avatar size={AvatarSize.MEDIUM} initials={{ content: 'JD' }} />

// Small
<Avatar size={AvatarSize.SMALL} initials={{ content: 'JD' }} />
```

## Advanced Usage

### With Status Dot

Display a status indicator dot on the avatar.

```tsx
<Avatar
  size={AvatarSize.MEDIUM}
  image="user-photo.jpg"
  dot={{
    variant: DotVariantType.WITHOUT_BORDER,
    size: DotSizeType.MEDIUM,
    number: 3,
    maxNumber: 5,
  }}
/>
```

### With Background Color

Apply custom background colors (useful for initials or icons).

```tsx
<Avatar
  size={AvatarSize.MEDIUM}
  initials={{ content: 'AB' }}
  backgroundColor="color-accent"
/>
```

### As a Link

Make the avatar clickable and navigate to a URL.

```tsx
<Avatar
  size={AvatarSize.MEDIUM}
  image="user-photo.jpg"
  link={{ url: '/profile', target: '_self' }}
/>
```

### As a Button

Make the avatar interactive with a click handler.

```tsx
<Avatar
  size={AvatarSize.MEDIUM}
  image="user-photo.jpg"
  onClick={() => console.log('Avatar clicked')}
/>
```

### With Custom Styling

Apply additional CSS classes for specific use cases.

```tsx
<Avatar
  size={AvatarSize.MEDIUM}
  initials={{ content: 'JD' }}
  additionalClasses={{
    avatar: 'custom-avatar-class',
    icon: 'custom-icon-class',
    dot: 'custom-dot-class',
  }}
/>
```

### Avatar Group

Display multiple avatars in a group (stacked or horizontal).

```tsx
<div style={{ display: 'flex', gap: '8px' }}>
  <Avatar size={AvatarSize.MEDIUM} image="user1.jpg" />
  <Avatar size={AvatarSize.MEDIUM} image="user2.jpg" />
  <Avatar size={AvatarSize.MEDIUM} initials={{ content: '+3' }} />
</div>
```

## Props

### Avatar

| Prop                | Type                | Default           | Description                                            |
| ------------------- | ------------------- | ----------------- | ------------------------------------------------------ |
| `size`              | `AvatarSize`        | `MEDIUM`          | Size of the avatar (SMALL, MEDIUM, LARGE, EXTRA-LARGE) |
| `image`             | `string`            | `undefined`       | URL of the image to display                            |
| `initials`          | `TextProps`         | `undefined`       | Initials text object to display                        |
| `icon`              | `IconProps`         | `undefined`       | Icon object to display                                 |
| `backgroundColor`   | `string`            | `'color-default'` | Background color identifier                            |
| `dot`               | `DotProps`          | `undefined`       | Status dot configuration                               |
| `maxLengthInitials` | `number`            | `2`               | Maximum number of characters for initials              |
| `link`              | `LinkProps`         | `undefined`       | Link configuration to make avatar clickable            |
| `linkComponent`     | `React.ElementType` | `'a'`             | Custom link component                                  |
| `onClick`           | `() => void`        | `undefined`       | Click handler for button behavior                      |
| `additionalClasses` | `AvatarCssClasses`  | `undefined`       | Custom CSS classes                                     |
| `data-testid`       | `string`            | `'avatar'`        | Test identifier                                        |

### AvatarStandAlone

Same props as Avatar, with additional `cssClasses` and `contentType` props for internal use.

## Content Priority

The Avatar component automatically determines content type based on props in this order:

1. **Image**: If `image` prop is provided
2. **Initials**: If `initials` prop is provided
3. **Icon**: If `icon` prop is provided (fallback)

```tsx
// This will show the image (highest priority)
<Avatar
  size={AvatarSize.MEDIUM}
  image="photo.jpg"
  initials={{ content: 'JD' }}
  icon={{ icon: 'ICON_USER' }}
/>
```

## Accessibility

### ARIA Support

- Uses semantic HTML for proper structure
- Image avatars include `alt` attribute support
- Interactive avatars have appropriate roles
- Supports keyboard navigation when used as button or link

### Screen Reader Behavior

```tsx
// Descriptive alt text for images
<Avatar
  size={AvatarSize.MEDIUM}
  image="user-photo.jpg"
  aria-label="John Doe profile picture"
/>

// Accessible initials
<Avatar
  size={AvatarSize.MEDIUM}
  initials={{ content: 'JD' }}
  aria-label="John Doe"
/>
```

### Keyboard Navigation

- When used as a link: Standard link behavior (Enter to activate)
- When used as a button: Standard button behavior (Enter/Space to activate)
- Tab key moves focus to interactive avatars

## When to Use

### ✅ Use Avatar when:

- Representing user profiles or accounts
- Displaying team members or contacts
- Showing entity identities (companies, groups)
- Creating user lists or directories
- Building comment threads or activity feeds
- Representing message participants

### ❌ Don't use Avatar when:

- Displaying product images (use Image component)
- Showing large format photos (use Image with proper aspect ratios)
- Representing non-identity content (use Icon or Image)
- Building image galleries (use dedicated gallery components)

## Best Practices

### Image Guidelines

1. **Use Square Images**: Avatar crops images to circles, so square images work best
2. **Proper Resolution**: Use appropriate image size for each avatar size
3. **Fallback Content**: Always provide initials or icon as fallback
4. **Optimization**: Use optimized images to improve loading performance

```tsx
// ✅ Good - with fallback
<Avatar
  size={AvatarSize.MEDIUM}
  image={user.photoUrl}
  initials={{ content: user.initials }}
/>

// ❌ Bad - no fallback
<Avatar
  size={AvatarSize.MEDIUM}
  image={user.photoUrl}
/>
```

### Initials Best Practices

1. **Keep Short**: Use 1-2 characters maximum
2. **Uppercase**: Display initials in uppercase for consistency
3. **Meaningful**: Use first and last name initials when possible

```tsx
// ✅ Good
<Avatar
  size={AvatarSize.MEDIUM}
  initials={{ content: 'JD' }}
  maxLengthInitials={2}
/>

// ❌ Bad - too long
<Avatar
  size={AvatarSize.MEDIUM}
  initials={{ content: 'JOHN' }}
/>
```

### Sizing Guidelines

- **SMALL**: Use in compact lists, dense tables, or inline text
- **MEDIUM**: Default for most use cases, lists, cards
- **LARGE**: Use in profile headers, detailed views
- **EXTRA-LARGE**: Use in dedicated profile pages, empty states

### Color Consistency

When using background colors for initials or icons:

```tsx
// Use consistent color scheme based on user ID or name
const getBackgroundColor = (userId: string) => {
  const colors = ['color-primary', 'color-secondary', 'color-accent'];
  return colors[userId.length % colors.length];
};

<Avatar
  size={AvatarSize.MEDIUM}
  initials={{ content: 'JD' }}
  backgroundColor={getBackgroundColor(user.id)}
/>;
```

### Status Indicators

Use dots to show user status:

```tsx
// Online status
<Avatar
  size={AvatarSize.MEDIUM}
  image="user.jpg"
  dot={{ variant: DotVariantType.SUCCESS }}
/>

// Notification count
<Avatar
  size={AvatarSize.MEDIUM}
  image="user.jpg"
  dot={{ number: 5, maxNumber: 9 }}
/>
```

## Related Components

- **Icon**: For standalone icon display
- **Image**: For non-identity image display
- **Badge**: For status or count indicators
- **Dot**: For status indicators (used within Avatar)
- **Button**: For interactive elements
- **Link**: For navigation elements

## Examples

See the [Storybook documentation](https://storybook.kubit-ui.com/?path=/docs/components-resources-avatar) for interactive examples and live code samples.

## Browser Support

Avatar component is compatible with all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Changelog

For detailed changes and version history, see the [CHANGELOG](../../../CHANGELOG.md).
