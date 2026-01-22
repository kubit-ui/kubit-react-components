# Badge Component

Badge is a compact UI component used to display status indicators, labels, counts, or interactive elements. It can function as both a visual indicator and an actionable button.

## Installation

```bash
npm install @kubit/web-ui-components
```

## Basic Usage

```tsx
import { Badge } from '@kubit/web-ui-components';
import { ICONS } from '@kubit/web-ui-components/icons';
import { BadgeSize, BadgeVariant } from '@kubit/web-ui-components/variants';

function App() {
  return (
    <Badge
      variant={BadgeVariant.PRIMARY}
      size={BadgeSize.DEFAULT}
      icon={ICONS.PLACEHOLDER}
      label="Status"
    />
  );
}
```

## Variants

The Badge component supports two visual variants:

### Primary

The default variant for primary actions or prominent status indicators.

```tsx
<Badge
  variant={BadgeVariant.PRIMARY}
  icon={ICONS.NOTIFICATION}
  label="Notifications"
/>
```

### Alternative

A secondary variant for less prominent badges or alternative actions.

```tsx
<Badge variant={BadgeVariant.ALTERNATIVE} icon={ICONS.FILTER} label="Filters" />
```

## Sizes

Badge supports a default size that adapts to different contexts:

```tsx
<Badge size={BadgeSize.DEFAULT} icon={ICONS.TAG} label="Tag" />
```

## Advanced Usage

### Icon Only

Display just an icon for compact status indicators:

```tsx
<Badge
  variant={BadgeVariant.PRIMARY}
  icon={ICONS.NOTIFICATION}
  aria-label="Notifications"
/>
```

### With Label Text

Add descriptive text for clarity:

```tsx
<Badge variant={BadgeVariant.PRIMARY} icon={ICONS.MESSAGE} label="Messages" />
```

### With Label and Additional Icon

Add a secondary icon, commonly used for dropdowns:

```tsx
<Badge
  variant={BadgeVariant.PRIMARY}
  icon={ICONS.FILTER}
  label="Filters"
  labelIcon={ICONS.CHEVRON_DOWN}
/>
```

### With Notification Dot

Display a notification indicator with counts:

```tsx
<Badge
  variant={BadgeVariant.PRIMARY}
  icon={ICONS.NOTIFICATION}
  label="Notifications"
  hasDot={true}
  dot={{
    variant: DotVariantType.WITHOUT_BORDER,
    size: DotSizeType.MEDIUM,
    number: 5,
    maxNumber: 9,
  }}
/>
```

### Disabled State

Disable badge interactions:

```tsx
<Badge
  variant={BadgeVariant.PRIMARY}
  icon={ICONS.ACTION}
  label="Unavailable"
  disabled={true}
/>
```

### Custom Styling

Override default styles with custom CSS classes:

```tsx
<Badge
  variant={BadgeVariant.PRIMARY}
  icon={ICONS.CUSTOM}
  label="Custom"
  additionalVariantClasses={{
    badge: 'custom-background',
    button: 'custom-border',
    icon: 'custom-icon-color',
    label: 'custom-text-style',
  }}
/>
```

### Badge Group

Display multiple badges together:

```tsx
function FilterBadges() {
  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Badge variant={BadgeVariant.PRIMARY} icon={ICONS.TAG} label="Active" />
      <Badge
        variant={BadgeVariant.ALTERNATIVE}
        icon={ICONS.TAG}
        label="Pending"
      />
      <Badge
        variant={BadgeVariant.PRIMARY}
        icon={ICONS.TAG}
        label="Completed"
      />
    </div>
  );
}
```

## Props

### Badge

| Prop                       | Type                  | Default     | Description                                                    |
| -------------------------- | --------------------- | ----------- | -------------------------------------------------------------- |
| `variant`                  | `BadgeVariant`        | `PRIMARY`   | Visual variant of the badge                                    |
| `size`                     | `BadgeSize`           | `DEFAULT`   | Size of the badge                                              |
| `icon`                     | `string \| IconProps` | Required    | Icon to display (can be icon name string or icon props object) |
| `label`                    | `string \| TextProps` | `undefined` | Optional label text (can be string or text props object)       |
| `labelIcon`                | `string \| IconProps` | `undefined` | Optional secondary icon next to label                          |
| `hasDot`                   | `boolean`             | `false`     | Whether to show notification dot                               |
| `dot`                      | `DotProps`            | `undefined` | Configuration for notification dot                             |
| `disabled`                 | `boolean`             | `false`     | Whether the badge is disabled                                  |
| `onClick`                  | `(event) => void`     | `undefined` | Click handler for interactive badges                           |
| `additionalVariantClasses` | `BadgeCssClasses`     | `undefined` | Custom CSS classes for variant styling                         |
| `additionalSizeClasses`    | `BadgeCssClasses`     | `undefined` | Custom CSS classes for size styling                            |
| `aria-label`               | `string`              | `undefined` | Accessible label for icon-only badges                          |
| `ariaLiveText`             | `string`              | `undefined` | ARIA live region text for dynamic updates                      |
| `data-testid`              | `string`              | `'badge'`   | Test identifier                                                |

### Dot Props

| Prop        | Type             | Description                       |
| ----------- | ---------------- | --------------------------------- |
| `variant`   | `DotVariantType` | Visual variant of the dot         |
| `size`      | `DotSizeType`    | Size of the notification dot      |
| `number`    | `number`         | Number to display in the dot      |
| `maxNumber` | `number`         | Maximum number before showing "+" |

## Accessibility

### ARIA Support

- Use `aria-label` for icon-only badges to provide context
- Supports `ariaLiveText` for dynamic content announcements
- Interactive badges are keyboard accessible (when onClick is provided)
- Disabled state properly communicated to assistive technologies

### Keyboard Navigation

- When interactive (with onClick), badges are focusable with Tab
- Activated with Enter or Space key
- Follows standard button interaction patterns

### Best Practices

```tsx
// ✅ Good - Icon-only badge with aria-label
<Badge
  icon={ICONS.NOTIFICATION}
  aria-label="5 new notifications"
/>

// ✅ Good - Badge with descriptive label
<Badge
  icon={ICONS.FILTER}
  label="Active Filters"
/>

// ❌ Bad - Icon-only without aria-label
<Badge icon={ICONS.NOTIFICATION} />
```

## When to Use

### ✅ Use Badge when:

- Displaying status indicators or labels
- Creating filter chips or category tags
- Showing notification counts or indicators
- Building interactive toolbar elements
- Representing user-selected options

### ❌ Don't use Badge when:

- Primary navigation is needed (use Button or Link)
- Displaying large amounts of text (use Tag or Chip)
- Action requires prominent visibility (use Button)
- Content is purely decorative (consider Icon alone)
- Complex interactions are needed (use custom component)

## Best Practices

### Visual Design

1. **Consistent Icons**: Use recognizable icons that match badge purpose
2. **Clear Labels**: Keep text short and descriptive
3. **Variant Usage**: Reserve PRIMARY for important actions, ALTERNATIVE for secondary
4. **Group Organization**: Align related badges consistently

### Content Guidelines

1. **Concise Text**: Keep labels to 1-3 words
2. **Icon Clarity**: Choose icons that clearly represent the action or status
3. **Notification Counts**: Use dot with numbers for unread/pending items
4. **State Communication**: Clearly indicate disabled state visually

### Interaction Patterns

```tsx
// Filter badges with selection state
function FilterBadges({ activeFilters, onFilterClick }) {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      {filters.map((filter) => (
        <Badge
          key={filter.id}
          variant={
            activeFilters.includes(filter.id)
              ? BadgeVariant.PRIMARY
              : BadgeVariant.ALTERNATIVE
          }
          icon={ICONS.FILTER}
          label={filter.name}
          onClick={() => onFilterClick(filter.id)}
        />
      ))}
    </div>
  );
}
```

### Grouping

- Align badges horizontally with consistent spacing
- Allow wrapping for responsive layouts
- Group related badges together
- Maintain visual hierarchy with variants

## Related Components

- **Chip**: For removable selections with close button
- **Tag**: For static labels without interaction
- **Button**: For primary actions requiring more prominence
- **Dot**: For standalone notification indicators
- **Toggle**: For binary on/off states

## Examples

See the [Storybook documentation](https://storybook.kubit-ui.com/?path=/docs/components-resources-badge) for interactive examples and live code samples.

## Browser Support

Badge component is compatible with all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Changelog

For detailed changes and version history, see the [CHANGELOG](../../../CHANGELOG.md).
