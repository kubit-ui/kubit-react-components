# Text Component

The Text component is a versatile typography component for rendering text content with consistent styling across your application. It supports various semantic variants for headings, paragraphs, and captions, along with extensive customization options for alignment, transformation, truncation, and more.

## Installation

```bash
npm install @kubit/web-ui-components
```

## Basic Usage

```tsx
import { Text } from '@kubit/web-ui-components';

function App() {
  return <Text variant="DEFAULT">This is default text content</Text>;
}
```

## Variants

The Text component supports multiple typography variants organized by purpose:

### Heading Variants

#### Display Headings

Large, attention-grabbing headings:

```tsx
<Text variant="HEADING_DISPLAY_1_EXPANDED">Display Heading</Text>
```

- `HEADING_DISPLAY_1_EXPANDED` - Extra large display heading (expanded spacing)
- `HEADING_DISPLAY_1_EXTENDED` - Extra large display heading (extended spacing)
- `MAIN_HEADING_DISPLAY_1_EXPANDED` - Main display heading variant

#### Semantic Headings

Standard heading hierarchy (H1-H4):

```tsx
<Text variant='HEADING_H1_EXPANDED'>Main Title</Text>
<Text variant='HEADING_H2_EXPANDED'>Section Title</Text>
<Text variant='HEADING_H3_EXPANDED'>Subsection Title</Text>
<Text variant='HEADING_H4_EXPANDED'>Minor Heading</Text>
```

Available variants:

- **H1**: `HEADING_H1_EXPANDED`, `HEADING_H1_EXTENDED`, `MAIN_HEADING_H1_EXPANDED`
- **H2**: `HEADING_H2_EXPANDED`, `HEADING_H2_EXTENDED`, `MAIN_HEADING_H2_EXPANDED`
- **H3**: `HEADING_H3_EXPANDED`, `HEADING_H3_EXTENDED`, `MAIN_HEADING_H3_EXPANDED`
- **H4**: `HEADING_H4_EXPANDED`, `HEADING_H4_EXTENDED`, `MAIN_HEADING_H4_EXPANDED`

### Paragraph Variants

#### Large Paragraph

For prominent body text:

```tsx
<Text variant="PARAGRAPH_LARGE_EXPANDED">
  This is important body text with larger sizing.
</Text>
```

- `PARAGRAPH_LARGE_EXPANDED` - Large paragraph (expanded spacing)
- `PARAGRAPH_LARGE_EXTENDED` - Large paragraph (extended spacing)

#### Medium Paragraph

Standard body text:

```tsx
<Text variant="PARAGRAPH_MEDIUM_EXPANDED">
  This is standard body text for most content.
</Text>
```

- `PARAGRAPH_MEDIUM_EXPANDED` - Medium paragraph (expanded spacing)
- `PARAGRAPH_MEDIUM_EXTENDED` - Medium paragraph (extended spacing)
- `PARAGRAPH_MEDIUM_MONO` - Medium paragraph (monospace font)

#### Small Paragraph

For secondary or supporting text:

```tsx
<Text variant="PARAGRAPH_SMALL_EXPANDED">
  This is smaller text for secondary information.
</Text>
```

- `PARAGRAPH_SMALL_EXPANDED` - Small paragraph (expanded spacing)
- `PARAGRAPH_SMALL_EXTENDED` - Small paragraph (extended spacing)

#### Caption

For captions, footnotes, and auxiliary text:

```tsx
<Text variant="PARAGRAPH_CAPTION_EXPANDED">Image caption or footnote text</Text>
```

- `PARAGRAPH_CAPTION_EXPANDED` - Caption text (expanded spacing)
- `PARAGRAPH_CAPTION_EXTENDED` - Caption text (extended spacing)

## Advanced Usage

### Text Alignment

Control text alignment:

```tsx
<Text variant='PARAGRAPH_MEDIUM_EXPANDED' align='center'>
  Centered text
</Text>

<Text variant='PARAGRAPH_MEDIUM_EXPANDED' align='right'>
  Right-aligned text
</Text>

<Text variant='PARAGRAPH_MEDIUM_EXPANDED' align='justify'>
  Justified text
</Text>
```

Alignment options: `'left'`, `'center'`, `'right'`, `'justify'`

### Text Transformation

Apply text transformations:

```tsx
<Text variant='PARAGRAPH_MEDIUM_EXPANDED' transform='uppercase'>
  Uppercase text
</Text>

<Text variant='PARAGRAPH_MEDIUM_EXPANDED' transform='lowercase'>
  Lowercase Text
</Text>

<Text variant='PARAGRAPH_MEDIUM_EXPANDED' transform='capitalize'>
  capitalized text
</Text>
```

### Text Truncation

Truncate text with ellipsis:

```tsx
// Single line truncation
<Text variant='PARAGRAPH_MEDIUM_EXPANDED' truncate={true}>
  This very long text will be truncated with an ellipsis...
</Text>

// Multi-line truncation
<Text variant='PARAGRAPH_MEDIUM_EXPANDED' maxTruncatedLines={3}>
  This longer text will be truncated after 3 lines with an ellipsis
  at the end of the third line if the content exceeds that limit.
</Text>
```

### Custom HTML Element

Render as different HTML elements:

```tsx
// As span
<Text variant='PARAGRAPH_MEDIUM_EXPANDED' component='span'>
  Inline text
</Text>

// As heading
<Text variant='HEADING_H1_EXPANDED' component='h1'>
  Semantic H1
</Text>

// As label
<Text variant='PARAGRAPH_SMALL_EXPANDED' component='label' htmlFor='input-id'>
  Form label
</Text>
```

### Text as Link

Render text as a link:

```tsx
<Text
  variant="PARAGRAPH_MEDIUM_EXPANDED"
  component="a"
  url="https://example.com"
  target="_blank"
>
  Click here to visit example.com
</Text>
```

### Styled Text

Apply custom styling:

```tsx
<Text
  variant="PARAGRAPH_MEDIUM_EXPANDED"
  color="#ff0000"
  weight={700}
  decoration="underline"
  cursor="pointer"
>
  Custom styled text
</Text>
```

### Interactive Text

Add click handlers:

```tsx
<Text
  variant="PARAGRAPH_MEDIUM_EXPANDED"
  onClick={() => console.log('Text clicked')}
  cursor="pointer"
>
  Clickable text
</Text>
```

### Accessible Text

Provide accessibility attributes:

```tsx
<Text
  variant="PARAGRAPH_MEDIUM_EXPANDED"
  aria-label="Detailed description for screen readers"
  role="status"
  aria-live="polite"
>
  Status message
</Text>
```

### Typography Hierarchy Example

Create a complete content hierarchy:

```tsx
function Article() {
  return (
    <article>
      <Text variant="HEADING_DISPLAY_1_EXPANDED" component="h1">
        Article Title
      </Text>

      <Text variant="PARAGRAPH_CAPTION_EXPANDED">
        Published on January 13, 2026
      </Text>

      <Text variant="HEADING_H2_EXPANDED" component="h2">
        Introduction
      </Text>

      <Text variant="PARAGRAPH_LARGE_EXPANDED">
        This is the opening paragraph with larger text to draw attention.
      </Text>

      <Text variant="PARAGRAPH_MEDIUM_EXPANDED">
        This is the main body content with standard paragraph styling. Multiple
        paragraphs would follow in this section.
      </Text>

      <Text variant="HEADING_H3_EXPANDED" component="h3">
        Subsection
      </Text>

      <Text variant="PARAGRAPH_MEDIUM_EXPANDED">
        More detailed content in subsections.
      </Text>

      <Text variant="PARAGRAPH_SMALL_EXPANDED">
        Additional notes or less important information.
      </Text>
    </article>
  );
}
```

### Card with Text Hierarchy

```tsx
function InfoCard({ title, subtitle, description }) {
  return (
    <div className="card">
      <Text variant="HEADING_H2_EXPANDED">{title}</Text>
      <Text variant="PARAGRAPH_SMALL_EXPANDED" color="#666">
        {subtitle}
      </Text>
      <Text variant="PARAGRAPH_MEDIUM_EXPANDED">{description}</Text>
    </div>
  );
}
```

### Status Messages

Display different types of status messages:

```tsx
function StatusMessage({ type, message }) {
  const config = {
    success: {
      variant: 'PARAGRAPH_MEDIUM_EXPANDED',
      color: '#22c55e',
      weight: 600,
    },
    error: {
      variant: 'PARAGRAPH_MEDIUM_EXPANDED',
      color: '#ef4444',
      weight: 600,
    },
    info: {
      variant: 'PARAGRAPH_MEDIUM_EXPANDED',
      color: '#3b82f6',
    },
  };

  return <Text {...config[type]}>{message}</Text>;
}
```

### Form Labels

Create accessible form labels:

```tsx
function FormField({ id, label, required }) {
  return (
    <div>
      <Text
        component="label"
        htmlFor={id}
        variant="PARAGRAPH_SMALL_EXPANDED"
        weight={600}
      >
        {label} {required && <span aria-label="required">*</span>}
      </Text>
      <input id={id} required={required} />
    </div>
  );
}
```

### Breadcrumb Text

```tsx
function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb">
      {items.map((item, index) => (
        <React.Fragment key={item.id}>
          <Text
            variant="PARAGRAPH_SMALL_EXPANDED"
            component={item.url ? 'a' : 'span'}
            url={item.url}
          >
            {item.label}
          </Text>
          {index < items.length - 1 && (
            <Text variant="PARAGRAPH_SMALL_EXPANDED"> / </Text>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
```

### Truncated List Items

```tsx
function ListItem({ title, description }) {
  return (
    <div style={{ width: '300px' }}>
      <Text variant="PARAGRAPH_MEDIUM_EXPANDED" weight={600} truncate={true}>
        {title}
      </Text>
      <Text
        variant="PARAGRAPH_SMALL_EXPANDED"
        maxTruncatedLines={2}
        color="#666"
      >
        {description}
      </Text>
    </div>
  );
}
```

### Code Snippet Display

```tsx
function CodeSnippet({ code }) {
  return (
    <Text
      variant="PARAGRAPH_MEDIUM_MONO"
      component="code"
      display="block"
      color="#1e293b"
      style={{
        backgroundColor: '#f1f5f9',
        padding: '12px',
        borderRadius: '4px',
      }}
    >
      {code}
    </Text>
  );
}
```

### Highlight Text

```tsx
function HighlightedText({ children, highlight }) {
  if (!highlight) {
    return <Text variant="PARAGRAPH_MEDIUM_EXPANDED">{children}</Text>;
  }

  return (
    <Text variant="PARAGRAPH_MEDIUM_EXPANDED">
      {children.split(highlight).map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {index < children.split(highlight).length - 1 && (
            <Text
              component="mark"
              variant="PARAGRAPH_MEDIUM_EXPANDED"
              style={{ backgroundColor: '#fef08a' }}
            >
              {highlight}
            </Text>
          )}
        </React.Fragment>
      ))}
    </Text>
  );
}
```

## Props

| Prop                | Type                                                   | Default     | Description                        |
| ------------------- | ------------------------------------------------------ | ----------- | ---------------------------------- |
| `variant`           | `TextVariant`                                          | Required    | Typography variant to apply        |
| `children`          | `ReactNode`                                            | Required    | Text content to display            |
| `component`         | `React.ElementType`                                    | `'p'`       | HTML element to render             |
| `align`             | `'left' \| 'center' \| 'right' \| 'justify'`           | `undefined` | Text alignment                     |
| `transform`         | `'none' \| 'uppercase' \| 'lowercase' \| 'capitalize'` | `undefined` | Text transformation                |
| `truncate`          | `boolean`                                              | `false`     | Truncate text with ellipsis        |
| `maxTruncatedLines` | `number`                                               | `undefined` | Maximum lines before truncation    |
| `color`             | `string`                                               | `undefined` | Text color                         |
| `weight`            | `number`                                               | `undefined` | Font weight                        |
| `decoration`        | `string`                                               | `undefined` | Text decoration (underline, etc.)  |
| `cursor`            | `string`                                               | `undefined` | Cursor style                       |
| `display`           | `string`                                               | `undefined` | Display property                   |
| `wordBreak`         | `string`                                               | `undefined` | Word break behavior                |
| `wordWrap`          | `string`                                               | `undefined` | Word wrap behavior                 |
| `textWrap`          | `string`                                               | `undefined` | Text wrap behavior                 |
| `onClick`           | `(event) => void`                                      | `undefined` | Click event handler                |
| `url`               | `string`                                               | `undefined` | URL for link component             |
| `target`            | `string`                                               | `undefined` | Link target attribute              |
| `htmlFor`           | `string`                                               | `undefined` | For attribute (when used as label) |
| `id`                | `string`                                               | `undefined` | HTML id attribute                  |
| `role`              | `string`                                               | `undefined` | ARIA role                          |
| `aria-label`        | `string`                                               | `undefined` | Accessible label                   |
| `aria-labelledby`   | `string`                                               | `undefined` | ID of labeling element             |
| `aria-describedby`  | `string`                                               | `undefined` | ID of describing element           |
| `aria-hidden`       | `boolean`                                              | `undefined` | Hide from screen readers           |
| `aria-level`        | `number`                                               | `undefined` | Heading level for accessibility    |
| `aria-live`         | `'off' \| 'polite' \| 'assertive'`                     | `undefined` | Live region politeness             |
| `draggable`         | `boolean`                                              | `false`     | Whether text is draggable          |
| `disabled`          | `boolean`                                              | `false`     | Disabled state                     |
| `additionalClasses` | `Partial<TextCssClasses>`                              | `undefined` | Additional CSS classes             |
| `data-testid`       | `string`                                               | `undefined` | Test identifier                    |
| `data-*`            | `string`                                               | `undefined` | Data attributes                    |

## Accessibility

- **Semantic HTML**: Use appropriate `component` prop to match content semantics
- **Heading Hierarchy**: Maintain proper heading order (H1 → H2 → H3 → H4)
- **ARIA Support**: Full support for ARIA attributes
- **Screen Readers**: Text content is properly announced
- **Focus Management**: Interactive text elements support keyboard navigation
- **Color Contrast**: Ensure text meets WCAG contrast requirements
- **Language**: Specify language for non-English content using HTML lang attribute

## Best Practices

1. **Use Semantic Variants**: Choose variants that match content meaning
2. **Maintain Hierarchy**: Use heading variants in proper order (H1, H2, H3, H4)
3. **Consistent Spacing**: Use expanded/extended variants consistently
4. **Appropriate Component**: Set `component` prop to match semantic HTML needs
5. **Truncation Context**: Only truncate when space is limited and full text is available elsewhere
6. **Accessibility**: Provide ARIA labels for non-descriptive text
7. **Readable Line Length**: Limit paragraph width for optimal readability (45-75 characters)
8. **Contrast**: Ensure sufficient contrast between text and background
9. **Font Loading**: Consider font-display strategies for web fonts
10. **Responsive Typography**: Variants should adapt to different screen sizes

## Common Use Cases

### Page Headings

```tsx
<Text variant="HEADING_H1_EXPANDED" component="h1">
  Page Title
</Text>
```

### Body Text

```tsx
<Text variant="PARAGRAPH_MEDIUM_EXPANDED">Standard paragraph content</Text>
```

### Captions

```tsx
<Text variant="PARAGRAPH_CAPTION_EXPANDED">Figure 1: Chart showing growth</Text>
```

### Links

```tsx
<Text variant="PARAGRAPH_MEDIUM_EXPANDED" component="a" url="/page">
  Navigation link
</Text>
```

### Form Labels

```tsx
<Text component="label" htmlFor="email" variant="PARAGRAPH_SMALL_EXPANDED">
  Email Address
</Text>
```

## When to Use Text

Use Text when:

- Rendering any text content that needs consistent styling
- Creating typography hierarchies
- Displaying headings, paragraphs, or captions
- Need control over text properties (alignment, transformation, etc.)
- Building accessible text-based interfaces

Don't use Text when:

- Creating buttons (use Button component)
- Displaying input fields (use Input component)
- Showing rich formatted content (consider RichText or similar)
- Building complex layouts (use layout components)

## Related Components

- **Button**: For actionable text elements
- **Link**: For navigation links with additional features
- **Heading**: If a dedicated heading component exists
- **Label**: For form labels with additional features
- **Badge**: For small text labels with backgrounds

## Performance Considerations

- Text is a lightweight component with minimal overhead
- For large lists of text elements:
  - Consider virtualization for 1000+ items
  - Use memoization if content rarely changes
  - Avoid unnecessary re-renders with React.memo
- Font loading:
  - Use `font-display: swap` for web fonts
  - Preload critical fonts
  - Subset fonts to reduce size
- Truncation:
  - CSS truncation is performant
  - Multi-line truncation may impact performance on older browsers

## Styling Notes

- Text renders as `<p>` by default but can be customized via `component` prop
- Variants control font size, line height, letter spacing, and other typography properties
- Custom styling via inline styles or `additionalClasses` prop
- Responsive behavior depends on variant definitions in design system
- Truncation uses CSS for optimal performance

## WCAG Guidelines

This component helps meet the following WCAG 2.1 criteria:

- **1.3.1 Info and Relationships (Level A)**: Proper semantic HTML structure
- **1.4.3 Contrast (Minimum) (Level AA)**: Ensure text has sufficient contrast
- **1.4.4 Resize Text (Level AA)**: Text can be resized without loss of functionality
- **1.4.8 Visual Presentation (Level AAA)**: Line spacing and alignment options
- **1.4.12 Text Spacing (Level AA)**: Proper spacing between text elements
- **2.4.6 Headings and Labels (Level AA)**: Descriptive headings and labels
- **4.1.2 Name, Role, Value (Level A)**: Proper ARIA attributes

## Browser Support

Text component uses standard web technologies with full browser support:

- Chrome/Edge: ✅ All versions
- Firefox: ✅ All versions
- Safari: ✅ All versions
- Screen Readers: ✅ Full support with proper HTML semantics
- Multi-line truncation: ⚠️ Requires modern browsers (line-clamp)
- Custom fonts: ✅ All modern browsers
