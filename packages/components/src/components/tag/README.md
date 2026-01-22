# Tag Component

The Tag component is used to display labels, statuses, and categories. It provides semantic variants with optional icons to give users quick visual context about content state, type, or classification.

## Installation

```bash
npm install @kubit/web-ui-components
```

## Basic Usage

```tsx
import { Tag } from '@kubit/web-ui-components';
import { ICONS } from '@kubit/web-ui-components';

function App() {
  return <Tag variant="INFORMATIVE" icon={ICONS.INFO} label="Information" />;
}
```

## Variants

The Tag component supports six semantic variants:

### CODE

For technical or code-related tags:

```tsx
<Tag variant="CODE" icon={ICONS.CODE} label="Code" />
```

Use for: Code snippets, technical references, programming languages, API endpoints.

### DEPRECATED

For deprecated or obsolete items:

```tsx
<Tag variant="DEPRECATED" icon={ICONS.WARNING} label="Deprecated" />
```

Use for: Deprecated features, outdated content, legacy systems, end-of-life products.

### DORMANT

For inactive or dormant states:

```tsx
<Tag variant="DORMANT" icon={ICONS.CLOCK} label="Dormant" />
```

Use for: Inactive accounts, paused processes, sleeping services, pending items.

### HEALTHY

For successful or healthy states:

```tsx
<Tag variant="HEALTHY" icon={ICONS.CHECK_CIRCLE} label="Healthy" />
```

Use for: Successful operations, healthy systems, active services, completed tasks.

### INFORMATIVE

For neutral informational tags:

```tsx
<Tag variant="INFORMATIVE" icon={ICONS.INFO} label="Informative" />
```

Use for: General information, neutral states, categories, classifications.

### ISSUE

For problems or error states:

```tsx
<Tag variant="ISSUE" icon={ICONS.ERROR} label="Issue" />
```

Use for: Errors, problems, critical alerts, failed operations.

## Advanced Usage

### Tag without Icon

Tags can display text only:

```tsx
<Tag variant="INFORMATIVE" label="Label Only" />
```

### Tag with Long Label

Tags automatically adjust to content:

```tsx
<Tag
  variant="INFORMATIVE"
  icon={ICONS.INFO}
  label="This is a very long label for testing purposes"
/>
```

### Tag with ARIA Label

Provide accessible descriptions:

```tsx
<Tag
  variant="HEALTHY"
  icon={ICONS.CHECK_CIRCLE}
  label="Active"
  aria-label="Status: Active and healthy"
/>
```

### Status Indicators

Use tags to show system or item status:

```tsx
function ServerStatus({ status }) {
  const statusConfig = {
    online: {
      variant: 'HEALTHY',
      icon: ICONS.CHECK_CIRCLE,
      label: 'Online',
    },
    offline: {
      variant: 'ISSUE',
      icon: ICONS.ERROR,
      label: 'Offline',
    },
    maintenance: {
      variant: 'DORMANT',
      icon: ICONS.CLOCK,
      label: 'Maintenance',
    },
  };

  const config = statusConfig[status];
  return <Tag {...config} />;
}
```

### Category Tags

Organize content with category tags:

```tsx
function ArticleCategories({ categories }) {
  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {categories.map((category) => (
        <Tag
          key={category.id}
          variant="INFORMATIVE"
          icon={ICONS.TAG}
          label={category.name}
        />
      ))}
    </div>
  );
}
```

### Version Tags

Display version information:

```tsx
function VersionTag({ version, isLatest, isDeprecated }) {
  if (isDeprecated) {
    return (
      <Tag
        variant="DEPRECATED"
        icon={ICONS.WARNING}
        label={`v${version} - Deprecated`}
      />
    );
  }

  if (isLatest) {
    return (
      <Tag
        variant="HEALTHY"
        icon={ICONS.CHECK_CIRCLE}
        label={`v${version} - Latest`}
      />
    );
  }

  return <Tag variant="CODE" icon={ICONS.CODE} label={`v${version}`} />;
}
```

### Environment Tags

Identify deployment environments:

```tsx
function EnvironmentTag({ env }) {
  const envConfig = {
    production: {
      variant: 'ISSUE',
      icon: ICONS.WARNING,
      label: 'Production',
    },
    staging: {
      variant: 'INFORMATIVE',
      icon: ICONS.INFO,
      label: 'Staging',
    },
    development: {
      variant: 'CODE',
      icon: ICONS.CODE,
      label: 'Development',
    },
  };

  return <Tag {...envConfig[env]} />;
}
```

### Priority Tags

Show task or issue priority:

```tsx
function PriorityTag({ priority }) {
  const priorityConfig = {
    critical: {
      variant: 'ISSUE',
      icon: ICONS.ERROR,
      label: 'Critical',
    },
    high: {
      variant: 'DEPRECATED',
      icon: ICONS.WARNING,
      label: 'High',
    },
    medium: {
      variant: 'INFORMATIVE',
      icon: ICONS.INFO,
      label: 'Medium',
    },
    low: {
      variant: 'DORMANT',
      icon: ICONS.CLOCK,
      label: 'Low',
    },
  };

  return <Tag {...priorityConfig[priority]} />;
}
```

### Feature Flags

Display feature status:

```tsx
function FeatureTag({ feature }) {
  return (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <span>{feature.name}</span>
      {feature.isNew && <Tag variant="HEALTHY" icon={ICONS.STAR} label="New" />}
      {feature.isBeta && <Tag variant="CODE" icon={ICONS.CODE} label="Beta" />}
      {feature.isDeprecated && (
        <Tag variant="DEPRECATED" icon={ICONS.WARNING} label="Deprecated" />
      )}
    </div>
  );
}
```

### Permission Tags

Show user permissions or roles:

```tsx
function UserPermissions({ permissions }) {
  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {permissions.map((permission) => (
        <Tag
          key={permission}
          variant="INFORMATIVE"
          icon={ICONS.SHIELD}
          label={permission}
        />
      ))}
    </div>
  );
}
```

### Filterable Tags

Create clickable tags for filtering:

```tsx
function FilterableTags({ tags, selectedTags, onTagClick }) {
  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {tags.map((tag) => (
        <button
          key={tag.id}
          onClick={() => onTagClick(tag.id)}
          style={{
            all: 'unset',
            cursor: 'pointer',
            opacity: selectedTags.includes(tag.id) ? 1 : 0.6,
          }}
        >
          <Tag
            variant={selectedTags.includes(tag.id) ? 'HEALTHY' : 'INFORMATIVE'}
            icon={tag.icon}
            label={tag.label}
          />
        </button>
      ))}
    </div>
  );
}
```

### Build Status Tags

Show CI/CD build status:

```tsx
function BuildStatus({ status }) {
  const statusMap = {
    success: {
      variant: 'HEALTHY',
      icon: ICONS.CHECK_CIRCLE,
      label: 'Build Passed',
    },
    failure: {
      variant: 'ISSUE',
      icon: ICONS.ERROR,
      label: 'Build Failed',
    },
    pending: {
      variant: 'DORMANT',
      icon: ICONS.CLOCK,
      label: 'Build Pending',
    },
  };

  return <Tag {...statusMap[status]} />;
}
```

### API Status Tags

Display API endpoint health:

```tsx
function APIEndpointStatus({ endpoint }) {
  return (
    <div>
      <code>{endpoint.path}</code>
      <Tag
        variant={endpoint.isActive ? 'HEALTHY' : 'ISSUE'}
        icon={endpoint.isActive ? ICONS.CHECK_CIRCLE : ICONS.ERROR}
        label={endpoint.isActive ? 'Active' : 'Down'}
      />
    </div>
  );
}
```

### Content Type Tags

Categorize content types:

```tsx
function ContentTypeTag({ type }) {
  const typeConfig = {
    article: { variant: 'INFORMATIVE', icon: ICONS.DOCUMENT, label: 'Article' },
    video: { variant: 'CODE', icon: ICONS.PLAY, label: 'Video' },
    tutorial: { variant: 'HEALTHY', icon: ICONS.BOOK, label: 'Tutorial' },
    deprecated: {
      variant: 'DEPRECATED',
      icon: ICONS.WARNING,
      label: 'Archived',
    },
  };

  return <Tag {...typeConfig[type]} />;
}
```

### Tag with Custom Component

Use a custom HTML element:

```tsx
<Tag
  component="span"
  variant="INFORMATIVE"
  icon={ICONS.INFO}
  label="Custom Element"
/>
```

### Tag Groups

Display multiple related tags:

```tsx
function TagGroup({ title, tags }) {
  return (
    <div>
      <h3>{title}</h3>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {tags.map((tag, index) => (
          <Tag
            key={index}
            variant={tag.variant}
            icon={tag.icon}
            label={tag.label}
          />
        ))}
      </div>
    </div>
  );
}
```

## Props

| Prop                | Type                     | Default     | Description                                  |
| ------------------- | ------------------------ | ----------- | -------------------------------------------- |
| `variant`           | `TagVariant`             | Required    | Visual variant of the tag                    |
| `label`             | `string \| ReactNode`    | `undefined` | Text or content to display in the tag        |
| `icon`              | `string \| IconProps`    | `undefined` | Icon to display before the label             |
| `component`         | `React.ElementType`      | `'div'`     | HTML element or React component to render as |
| `aria-label`        | `string`                 | `undefined` | Accessible label for screen readers          |
| `aria-describedby`  | `string`                 | `undefined` | ID of element describing the tag             |
| `aria-disabled`     | `boolean`                | `undefined` | Whether tag is disabled (accessibility)      |
| `aria-labelledby`   | `string`                 | `undefined` | ID of element labeling the tag               |
| `additionalClasses` | `Partial<TagCssClasses>` | `undefined` | Additional CSS classes for customization     |
| `data-testid`       | `string`                 | `undefined` | Test identifier                              |
| `data-*`            | `string`                 | `undefined` | Data attributes                              |

### TagVariant

Available variants:

- `'CODE'` - Technical/code-related content
- `'DEPRECATED'` - Deprecated or obsolete items
- `'DORMANT'` - Inactive or dormant states
- `'HEALTHY'` - Successful or healthy states
- `'INFORMATIVE'` - Neutral information
- `'ISSUE'` - Problems or error states

## Accessibility

- **Semantic HTML**: Tags render as `div` by default but can be customized via `component` prop
- **ARIA Support**: Full support for `aria-label`, `aria-describedby`, `aria-disabled`, `aria-labelledby`
- **Screen Readers**: Label and icon information is properly announced
- **Color Independence**: Variants use both color and icons for accessibility
- **Keyboard Navigation**: When used in interactive contexts, ensure proper focus management
- **High Contrast**: Maintains visibility in high contrast modes

## Best Practices

1. **Choose Appropriate Variants**: Use semantic variants that match the content meaning
2. **Include Icons**: Icons provide quick visual recognition and improve accessibility
3. **Keep Labels Short**: Use concise, descriptive labels (1-3 words)
4. **Consistent Usage**: Use the same variant for the same meaning across your app
5. **ARIA Labels**: Provide `aria-label` for additional context when needed
6. **Avoid Overuse**: Don't overwhelm users with too many tags at once
7. **Logical Grouping**: Group related tags together
8. **Interactive Tags**: If tags are clickable, wrap them in proper interactive elements
9. **Color Meaning**: Don't rely solely on color to convey meaning
10. **Context Matters**: Ensure tags make sense in their surrounding context

## Common Use Cases

### System Status

Display system health or status:

```tsx
<Tag
  variant="HEALTHY"
  icon={ICONS.CHECK_CIRCLE}
  label="All Systems Operational"
/>
```

### User Roles

Show user permissions or roles:

```tsx
<Tag variant="INFORMATIVE" icon={ICONS.USER} label="Administrator" />
```

### Content Categories

Categorize content:

```tsx
<Tag variant="INFORMATIVE" icon={ICONS.TAG} label="Tutorial" />
```

### Version Information

Display version numbers:

```tsx
<Tag variant="CODE" icon={ICONS.CODE} label="v2.0.0" />
```

### Warnings

Alert users to important information:

```tsx
<Tag variant="DEPRECATED" icon={ICONS.WARNING} label="Maintenance Required" />
```

## When to Use Tag

Use Tag when:

- Displaying status or state information
- Categorizing or labeling content
- Showing metadata or attributes
- Highlighting important information
- Creating filters or selections
- Displaying version or environment info

Don't use Tag when:

- You need interactive buttons (use Button component)
- Displaying large amounts of text (use appropriate text components)
- Creating navigation elements (use Link or navigation components)
- Form labels (use Label component)

## Related Components

- **Badge**: For numerical indicators and counts
- **Chip**: For selectable/removable items
- **Button**: For actionable elements
- **Label**: For form field labels
- **Alert**: For important messages and notifications

## Styling Notes

- Tags have fixed height based on the design system
- Width adjusts automatically to content
- Icons are aligned to the left of the label
- Each variant has distinct colors and styles
- Custom styling via `additionalClasses` prop
- Default element is `div` but can be customized with `component` prop

## Performance Considerations

- Tag is a lightweight component with minimal performance impact
- For large lists of tags, consider:
  - Virtualization for 100+ tags
  - Lazy rendering for off-screen tags
  - Memoization if tags rarely change
- Icon rendering is optimized but consider:
  - Using icon sprites for better performance
  - Caching icon data
  - Limiting unique icons per page

## WCAG Guidelines

This component helps meet the following WCAG 2.1 criteria:

- **1.3.1 Info and Relationships (Level A)**: Semantic use of elements
- **1.4.1 Use of Color (Level A)**: Icons supplement color coding
- **1.4.3 Contrast (Level AA)**: Maintains sufficient contrast ratios
- **2.4.4 Link Purpose (Level A)**: Clear labeling when used as links
- **4.1.2 Name, Role, Value (Level A)**: Proper ARIA attributes

## Browser Support

Tag component uses standard web technologies with full browser support:

- Chrome/Edge: ✅ All versions
- Firefox: ✅ All versions
- Safari: ✅ All versions
- Screen Readers: ✅ Full support with proper ARIA
- High Contrast Mode: ✅ Maintains visibility
  Module

## Overview

This folder contains the implementation of a reusable and standalone **Tag** UI component built with React and TypeScript. The component is designed to support customizable themes, integration with design systems, and automated testing and documentation through Storybook and Figma.

## Role in the Project

The `Tag` module is part of a component library within a larger design system. It provides a standard way to display tag-like UI elements, supporting both standalone usage and seamless integration with other UI primitives or layouts. It also includes type definitions, visual stories, and Figma bindings to ensure design consistency across platforms.

## Usage

To use the `Tag` component in your project, import it directly from the module entry point:

```tsx
import { Tag } from './tag';

// Basic usage
<Tag label="New" variant="success" />

// With icon or onClick handler
<Tag label="Close" onClick={() => alert('Clicked!')} icon="close" />
```

For standalone behavior (independent styling or state logic), use the `TagStandAlone` component:

```tsx
import { TagStandAlone } from './tag/tagStandAlone';

<TagStandAlone label="Beta" />;
```

## Folder Structure and Key Files

| File / Folder                 | Purpose                                                                |
| ----------------------------- | ---------------------------------------------------------------------- |
| `tag.tsx`                     | Main `Tag` component implementation with logic and styling props.      |
| `tagStandAlone.tsx`           | A variation of `Tag` for isolated use without external dependencies.   |
| `types/tag.ts`                | Defines the props and supported configurations for the `Tag`.          |
| `types/tagTheme.ts`           | Theme-specific types for design customization and token definitions.   |
| `index.ts`                    | Entry point exporting components and types from this module.           |
| `__stories__/tag.stories.tsx` | Storybook file for component visualization and testing in isolation.   |
| `__stories__/argtypes.ts`     | Storybook argTypes definition to enhance story control and docs.       |
| `__figma__/tag.figma.tsx`     | Figma plugin integration to sync design properties from Figma to code. |
| `__tests__/tag.test.tsx`      | Unit tests covering component behavior and rendering logic.            |

## Limitations

- The `Tag` component assumes a controlled theming environment.
- Icon support depends on the icon system used in the hosting project.
- The Figma integration is optional and should be disabled in production builds.
