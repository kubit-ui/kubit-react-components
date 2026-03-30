# Accordion Component

The Accordion component is a collapsible container that allows users to show and hide content sections. It provides both controlled and uncontrolled variants to suit different use cases.

## Features

- ✅ Controlled and uncontrolled modes
- ✅ Fully accessible (ARIA compliant)
- ✅ Keyboard navigation support
- ✅ Customizable styling through CSS classes
- ✅ TypeScript support with strict typing
- ✅ Animation support for smooth expand/collapse transitions
- ✅ Custom header and content rendering

## Installation

This component is part of the `@kubit/web-ui-components` library.

```bash
yarn add @kubit/web-ui-components
```

## Basic Usage

### Uncontrolled Accordion

The uncontrolled variant manages its own expand/collapse state internally.

```tsx
import { Accordion } from '@kubit/web-ui-components';

function MyComponent() {
  return (
    <Accordion
      variant="neutral"
      header="Click to expand"
      defaultExpanded={false}
      onExpandCollapse={(expanded, event) => {
        console.log('Accordion is now:', expanded ? 'open' : 'closed');
      }}
    >
      <p>This is the accordion content that can be shown or hidden.</p>
    </Accordion>
  );
}
```

### Controlled Accordion

The controlled variant requires you to manage the expanded state externally.

```tsx
import { useState } from 'react';

import { AccordionControlled } from '@kubit/web-ui-components';

function MyComponent() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <AccordionControlled
      variant="neutral"
      header="Click to expand"
      expanded={isExpanded}
      onHeaderClick={handleToggle}
    >
      <p>This is the accordion content.</p>
    </AccordionControlled>
  );
}
```

## Advanced Usage

### Multiple Accordions with Single Expansion

Allow only one accordion to be open at a time.

```tsx
import { useState } from 'react';

import { AccordionControlled } from '@kubit/web-ui-components';

function AccordionGroup() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const items = [
    { id: 'section1', title: 'Section 1', content: 'Content 1' },
    { id: 'section2', title: 'Section 2', content: 'Content 2' },
    { id: 'section3', title: 'Section 3', content: 'Content 3' },
  ];

  return (
    <div>
      {items.map((item) => (
        <AccordionControlled
          key={item.id}
          variant="neutral"
          header={item.title}
          expanded={expandedId === item.id}
          onHeaderClick={() => {
            setExpandedId(expandedId === item.id ? null : item.id);
          }}
        >
          <p>{item.content}</p>
        </AccordionControlled>
      ))}
    </div>
  );
}
```

### Rich Header Content

You can use any React node as the header content.

```tsx
import { Accordion } from '@kubit/web-ui-components';
import { Icon } from '@kubit/web-ui-components';

function RichAccordion() {
  return (
    <Accordion
      variant="standard"
      header={
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon name="settings" />
          <span>Settings</span>
          <span style={{ marginLeft: 'auto', fontSize: '12px', color: '#666' }}>
            3 items
          </span>
        </div>
      }
    >
      <div>
        <h4>User Settings</h4>
        <ul>
          <li>Profile</li>
          <li>Privacy</li>
          <li>Notifications</li>
        </ul>
      </div>
    </Accordion>
  );
}
```

### Nested Accordions

Accordions can be nested to create hierarchical structures.

```tsx
import { Accordion } from '@kubit/web-ui-components';

function NestedAccordions() {
  return (
    <Accordion variant="neutral" header="Parent Section">
      <div style={{ padding: '16px' }}>
        <Accordion variant="standard" header="Child Section 1">
          <p>Nested content 1</p>
        </Accordion>
        <Accordion variant="standard" header="Child Section 2">
          <p>Nested content 2</p>
        </Accordion>
      </div>
    </Accordion>
  );
}
```

### Async Content Loading

Load content dynamically when accordion expands.

```tsx
import { useEffect, useState } from 'react';

import { AccordionControlled } from '@kubit/web-ui-components';

function AsyncAccordion() {
  const [expanded, setExpanded] = useState(false);
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (expanded && !content) {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        setContent('Loaded content from server');
        setLoading(false);
      }, 1000);
    }
  }, [expanded, content]);

  return (
    <AccordionControlled
      variant="neutral"
      header="Load Content"
      expanded={expanded}
      onHeaderClick={() => setExpanded(!expanded)}
    >
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>{content || 'No content loaded yet'}</p>
      )}
    </AccordionControlled>
  );
}
```

### Custom Styling

Apply custom CSS classes to different parts of the accordion.

```tsx
import { Accordion } from '@kubit/web-ui-components';

function StyledAccordion() {
  return (
    <Accordion
      variant="neutral"
      header="Custom Styled Accordion"
      additionalClasses={{
        accordion: 'my-accordion-container',
        header: 'my-accordion-header',
        headerbutton: 'my-accordion-button',
        content: 'my-accordion-content',
        innercontent: 'my-accordion-inner',
      }}
    >
      <p>Content with custom styling</p>
    </Accordion>
  );
}
```

## Props

### Common Props (IAccordionStandAlone)

| Prop              | Type                  | Default    | Description                                  |
| ----------------- | --------------------- | ---------- | -------------------------------------------- |
| `children`        | `React.ReactNode`     | -          | Content displayed when accordion is expanded |
| `header`          | `React.ReactNode`     | -          | Header content for the accordion             |
| `expanded`        | `boolean`             | -          | Current expansion state                      |
| `cssClasses`      | `AccordionCssClasses` | -          | Optional styles to apply                     |
| `dataTestId`      | `string`              | -          | Custom test ID for testing                   |
| `component`       | `React.ElementType`   | `'div'`    | Component type for container                 |
| `headerComponent` | `React.ElementType`   | `'button'` | Component type for header                    |

### Controlled Props (IAccordionControlled)

| Prop                | Type                           | Default | Description                                   |
| ------------------- | ------------------------------ | ------- | --------------------------------------------- |
| `variant`           | `string`                       | -       | Style variant (e.g., 'neutral', 'standard')   |
| `expanded`          | `boolean`                      | -       | Whether accordion is expanded                 |
| `onHeaderClick`     | `(event) => void`              | -       | Callback fired when header is clicked         |
| `additionalClasses` | `Partial<AccordionCssClasses>` | -       | Additional CSS classes                        |
| `contentId`         | `string`                       | -       | Unique ID for content section (accessibility) |

### Uncontrolled Props (IAccordionUnControlled)

| Prop                | Type                           | Default | Description                                  |
| ------------------- | ------------------------------ | ------- | -------------------------------------------- |
| `variant`           | `string`                       | -       | Style variant (e.g., 'neutral', 'standard')  |
| `defaultExpanded`   | `boolean`                      | `false` | Default expanded state when component mounts |
| `onExpandCollapse`  | `(expanded, event) => void`    | -       | Callback fired when state changes            |
| `additionalClasses` | `Partial<AccordionCssClasses>` | -       | Additional CSS classes                       |

## Accessibility

The Accordion component follows WAI-ARIA authoring practices:

- Uses proper ARIA attributes (`aria-expanded`, `aria-controls`, `aria-labelledby`)
- Header button is keyboard accessible (Space/Enter to toggle)
- Content is properly associated with header for screen readers
- Inert content when collapsed (prevents focus on hidden elements)

## Styling

The component uses CSS classes that can be customized through the `additionalClasses` prop:

- `accordion` - Root container
- `header` - Header wrapper
- `headerbutton` - Clickable header button
- `content` - Content wrapper
- `innercontent` - Inner content container

## When to Use

### Use Accordion when:

- You need to organize related information into collapsible sections
- Screen space is limited and you want to show/hide content on demand
- Users need to scan multiple sections without scrolling through all content
- Creating FAQ sections, settings panels, or navigation menus

### Don't use Accordion when:

- Users need to see all content at once for comparison
- Content is critical and should always be visible
- There's only one section to display (use a regular container instead)

## Best Practices

1. **Clear Headers**: Use descriptive header text that indicates what content will be revealed
2. **Appropriate Content**: Don't hide critical information that users always need
3. **Performance**: For long lists of accordions, consider virtualization
4. **State Management**: Use controlled variant when accordion state needs to sync with other UI
5. **Single vs Multiple**: Decide if multiple accordions can be open simultaneously based on use case
6. **Loading States**: Show loading indicators when content is fetched asynchronously

## Related Components

- **Tabs**: For switching between different views
- **Modal**: For temporary content overlays
- **Drawer**: For sliding panels with content
- **Collapsible**: For simpler show/hide functionality without accordion semantics

## Browser Support

This component supports all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## TypeScript

The component is fully typed with TypeScript. Generic types are supported for the variant prop:

```tsx
type MyVariants = 'primary' | 'secondary' | 'tertiary';

<AccordionControlled<MyVariants>
  variant="primary"
  // ...other props
/>;
```
