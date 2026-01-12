# Breadcrumbs Component

Breadcrumbs is a navigation component that displays the current page's location within the site hierarchy. It helps users understand where they are in the application structure and provides an easy way to navigate back to parent pages.

## Installation

```bash
npm install @kubit/web-ui-components
```

## Basic Usage

```tsx
import { Breadcrumbs } from '@kubit/web-ui-components';
import { ICONS } from '@kubit/web-ui-components/icons';
import { LinkVariant } from '@kubit/web-ui-components/link/variants';
import { TextVariantType } from '@kubit/web-ui-components/text/variants';
import { BreadcrumbsVariant } from '@kubit/web-ui-components/variants';

function App() {
  return (
    <Breadcrumbs
      variant={BreadcrumbsVariant.DEFAULT}
      aria-label="Breadcrumb navigation"
      dividerIcon={ICONS.CHEVRON_RIGHT}
      crumbs={[
        { id: 'home', name: 'Home', url: '/' },
        { id: 'products', name: 'Products', url: '/products' },
        { name: 'Current Page', url: '#' },
      ]}
      link={{
        variant: LinkVariant.PRIMARY,
        action: 'navigation',
        textVariant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
      }}
    />
  );
}
```

## Variants

The Breadcrumbs component supports two visual variants:

### Default

The standard variant for most breadcrumb trails.

```tsx
<Breadcrumbs
  variant={BreadcrumbsVariant.DEFAULT}
  aria-label="Breadcrumb navigation"
  dividerIcon={ICONS.CHEVRON_RIGHT}
  crumbs={[
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
    { name: 'Current', url: '#' },
  ]}
  link={{
    variant: LinkVariant.PRIMARY,
    action: 'navigation',
    textVariant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
  }}
/>
```

### Alternative

An alternative variant for different visual styles.

```tsx
<Breadcrumbs
  variant={BreadcrumbsVariant.ALTERNATIVE}
  aria-label="Breadcrumb navigation"
  dividerIcon={ICONS.CHEVRON_RIGHT}
  crumbs={[
    { name: 'Home', url: '/' },
    { name: 'Current', url: '#' },
  ]}
  link={{
    variant: LinkVariant.PRIMARY,
    action: 'navigation',
    textVariant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
  }}
/>
```

## Advanced Usage

### Custom Divider Icon

Use any icon as a separator between crumbs:

```tsx
<Breadcrumbs
  variant={BreadcrumbsVariant.DEFAULT}
  dividerIcon={ICONS.CHEVRON_UP}
  crumbs={[
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
    { name: 'Current', url: '#' },
  ]}
  link={{
    variant: LinkVariant.PRIMARY,
    action: 'navigation',
    textVariant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
  }}
/>
```

### Text Truncation

Control text length with `minCharLimit` to truncate long breadcrumb labels:

```tsx
<Breadcrumbs
  variant={BreadcrumbsVariant.DEFAULT}
  minCharLimit={20}
  crumbs={[
    {
      name: 'Very long breadcrumb text that exceeds the character limit',
      url: '/',
    },
    { name: 'Current', url: '#' },
  ]}
  link={{
    variant: LinkVariant.PRIMARY,
    action: 'navigation',
    textVariant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
  }}
/>
```

### Custom Link Styling

Customize the appearance of breadcrumb links:

```tsx
<Breadcrumbs
  variant={BreadcrumbsVariant.DEFAULT}
  crumbs={[
    { name: 'Home', url: '/' },
    { name: 'Current', url: '#' },
  ]}
  link={{
    variant: LinkVariant.SECONDARY,
    action: 'navigation',
    textVariant: TextVariantType.HEADING_H4_EXTENDED,
  }}
/>
```

### Deep Navigation Hierarchy

Display multiple levels of nested navigation:

```tsx
<Breadcrumbs
  variant={BreadcrumbsVariant.DEFAULT}
  crumbs={[
    { id: 'home', name: 'Home', url: '/' },
    { id: 'shop', name: 'Shop', url: '/shop' },
    { id: 'electronics', name: 'Electronics', url: '/shop/electronics' },
    { id: 'computers', name: 'Computers', url: '/shop/electronics/computers' },
    {
      id: 'laptops',
      name: 'Laptops',
      url: '/shop/electronics/computers/laptops',
    },
    { name: 'Gaming Laptops', url: '#' },
  ]}
  link={{
    variant: LinkVariant.PRIMARY,
    action: 'navigation',
    textVariant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
  }}
/>
```

### Custom CSS Classes

Override default styling:

```tsx
<Breadcrumbs
  variant={BreadcrumbsVariant.DEFAULT}
  crumbs={[
    { name: 'Home', url: '/' },
    { name: 'Current', url: '#' },
  ]}
  link={{
    variant: LinkVariant.PRIMARY,
    action: 'navigation',
    textVariant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
  }}
  additionalClasses={{
    breadcrumbs: 'custom-wrapper',
    crumb: 'custom-item',
    icondivider: 'custom-divider',
    link: 'custom-link',
  }}
/>
```

## Props

### Breadcrumbs

| Prop                | Type                    | Default         | Description                                                                  |
| ------------------- | ----------------------- | --------------- | ---------------------------------------------------------------------------- |
| `variant`           | `BreadcrumbsVariant`    | `DEFAULT`       | Visual variant of the breadcrumbs                                            |
| `crumbs`            | `Crumb[]`               | Required        | Array of breadcrumb items                                                    |
| `dividerIcon`       | `string \| IconProps`   | Required        | Icon separator between crumbs (can be icon name string or icon props object) |
| `link`              | `LinkConfig`            | Required        | Configuration for breadcrumb links                                           |
| `minCharLimit`      | `number`                | `undefined`     | Maximum character length before truncation                                   |
| `additionalClasses` | `BreadcrumbsCssClasses` | `undefined`     | Custom CSS classes                                                           |
| `aria-label`        | `string`                | `undefined`     | Accessible label for the navigation                                          |
| `data-testid`       | `string`                | `'breadcrumbs'` | Test identifier                                                              |

### Crumb Object

| Property | Type     | Description                  |
| -------- | -------- | ---------------------------- |
| `id`     | `string` | Optional unique identifier   |
| `name`   | `string` | Display text for the crumb   |
| `url`    | `string` | Navigation URL for the crumb |

### Link Config Object

| Property      | Type              | Description                           |
| ------------- | ----------------- | ------------------------------------- |
| `variant`     | `LinkVariant`     | Visual variant of links               |
| `action`      | `string`          | Link action type ('navigation', etc.) |
| `textVariant` | `TextVariantType` | Text styling variant                  |

## Accessibility

### ARIA Support

- Use `aria-label` to describe the navigation purpose
- Follows WAI-ARIA breadcrumb pattern
- Uses semantic `<nav>` element
- Structured list markup with `<ol>` and `<li>`
- Current page indicated with `aria-current="page"`

### Screen Reader Experience

```tsx
<Breadcrumbs
  aria-label="Breadcrumb navigation"
  crumbs={[
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
    { name: 'Electronics', url: '#' }, // Current page
  ]}
  link={{
    variant: LinkVariant.PRIMARY,
    action: 'navigation',
    textVariant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
  }}
/>
// Screen reader announces: "Breadcrumb navigation, Home, Products, Electronics, current page"
```

### Keyboard Navigation

- All breadcrumb links are keyboard accessible with Tab
- Links activated with Enter key
- Follows standard link navigation patterns

## When to Use

### ✅ Use Breadcrumbs when:

- Website has a hierarchical structure with multiple levels
- Users need to understand their current location
- Providing quick navigation to parent pages
- E-commerce sites with category hierarchies
- Documentation sites with nested sections
- Multi-step processes or workflows

### ❌ Don't use Breadcrumbs when:

- Site has a flat structure (use primary navigation instead)
- Single-level navigation is sufficient
- Mobile views with limited space (consider alternatives)
- Linear processes (use step indicators instead)
- App has fewer than 3 levels of hierarchy

## Best Practices

### Content Guidelines

1. **Clear Labels**: Use concise, descriptive text for each crumb
2. **Consistent Naming**: Match breadcrumb labels with page titles
3. **Logical Hierarchy**: Reflect the actual site structure
4. **Current Page**: Last item should represent the current page

```tsx
// ✅ Good
<Breadcrumbs
  crumbs={[
    { name: 'Home', url: '/' },
    { name: 'Electronics', url: '/electronics' },
    { name: 'Laptops', url: '/electronics/laptops' },
    { name: 'Gaming Laptops', url: '#' }  // Current page
  ]}
/>

// ❌ Bad - Non-descriptive labels
<Breadcrumbs
  crumbs={[
    { name: 'Page 1', url: '/' },
    { name: 'Category', url: '/category' },
    { name: 'Items', url: '#' }
  ]}
/>
```

### Visual Design

1. **Placement**: Position breadcrumbs at the top of the page, below the header
2. **Truncation**: Use `minCharLimit` for long labels to prevent wrapping
3. **Mobile**: Consider hiding intermediate levels on small screens
4. **Separators**: Use clear, recognizable divider icons (chevrons, slashes)

### Interaction

```tsx
// Track breadcrumb navigation
function handleBreadcrumbClick(crumb) {
  analytics.track('Breadcrumb Click', {
    label: crumb.name,
    url: crumb.url,
    position: crumbs.indexOf(crumb),
  });
}

<Breadcrumbs
  crumbs={crumbs}
  link={{
    variant: LinkVariant.PRIMARY,
    action: 'navigation',
    textVariant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
    onClick: handleBreadcrumbClick,
  }}
/>;
```

### Structure Guidelines

- **Home First**: Start with home or root level
- **Maximum Depth**: Consider limiting to 4-5 visible levels
- **Current Page**: Include current page as last, non-clickable item
- **Unique IDs**: Use IDs for tracking and analytics

## Related Components

- **Navigation**: For primary site navigation
- **Tabs**: For content organization within a page
- **Stepper**: For linear multi-step processes
- **Link**: For individual navigation links
- **PageControl**: For pagination

## Examples

See the [Storybook documentation](https://storybook.kubit-ui.com/?path=/docs/components-navigation-breadcrumb) for interactive examples and live code samples.

## Browser Support

Breadcrumbs component is compatible with all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Changelog

For detailed changes and version history, see the [CHANGELOG](../../../CHANGELOG.md).
