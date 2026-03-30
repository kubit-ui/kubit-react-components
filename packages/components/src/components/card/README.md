# Card Component

A flexible card component for displaying content in a structured container with optional header, content, and footer sections.

## Features

- **Flexible Content**: Support for header, content, and footer sections (all optional)
- **Multiple Variants**: DEFAULT, PRIMARY, and SECONDARY styles
- **Interactive States**: Automatic hover effects (CSS) and selected state with visual feedback
- **Clickable Support**: Optional onClick handler with proper keyboard navigation
- **Accessible**: Follows WCAG 2.1 AA guidelines with proper ARIA attributes
- **Customizable**: Accepts React nodes or text in all sections

## Usage

### Basic Card

```tsx
import { Card } from '@kubit/web-ui-components';

<Card
  header="Card Title"
  content="This is the card content"
  footer="Footer information"
  variant="DEFAULT"
/>;
```

### Card with Only Some Sections

All sections are optional, so you can use any combination:

```tsx
// Only header
<Card header="Just a title" />

// Only content
<Card content="Just some content" />

// Header and content
<Card
  header="Title"
  content="Content"
/>
```

### Card with Custom Content

You can pass React nodes instead of text:

```tsx
<Card
  header={<h2>Custom Header</h2>}
  content={
    <div>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </div>
  }
  footer={<button>Action</button>}
/>
```

### Interactive Card

Make the card clickable and handle interactions:

```tsx
const [selected, setSelected] = useState(false);

<Card
  header="Clickable Card"
  content="Click me to select"
  state={selected ? 'selected' : 'default'}
  onClick={() => setSelected(!selected)}
  onMouseEnter={() => console.log('Mouse entered')}
  onMouseLeave={() => console.log('Mouse left')}
/>;
```

Note: Hover effects are automatically applied via CSS when you move your mouse over the card.

### Card Variants

```tsx
// Default variant
<Card header="Default Card" variant="DEFAULT" />

// Primary variant
<Card header="Primary Card" variant="PRIMARY" />

// Secondary variant
<Card header="Secondary Card" variant="SECONDARY" />
```

## Props

### CardProps

| Prop                | Type                                    | Default     | Description                                             |
| ------------------- | --------------------------------------- | ----------- | ------------------------------------------------------- |
| `header`            | `CommonTextProps \| ReactNode`          | `undefined` | Header section content                                  |
| `content`           | `CommonTextProps \| ReactNode`          | `undefined` | Main content section                                    |
| `footer`            | `CommonTextProps \| ReactNode`          | `undefined` | Footer section content                                  |
| `variant`           | `'DEFAULT' \| 'PRIMARY' \| 'SECONDARY'` | `'DEFAULT'` | Visual style variant                                    |
| `state`             | `'default' \| 'selected'`               | `undefined` | Current state (selected state only, hover is automatic) |
| `onClick`           | `(e: MouseEvent) => void`               | `undefined` | Click handler (makes card interactive)                  |
| `onMouseEnter`      | `(e: MouseEvent) => void`               | `undefined` | Mouse enter handler                                     |
| `onMouseLeave`      | `(e: MouseEvent) => void`               | `undefined` | Mouse leave handler                                     |
| `additionalClasses` | `Partial<CardCssClasses>`               | `undefined` | Additional CSS classes                                  |

## Styling

The component uses the theme system for styling. Available CSS classes:

- `card`: Main container
- `header`: Header section
- `content`: Content section
- `footer`: Footer section

## Accessibility

- When `onClick` is provided, the card becomes interactive with `role="button"`
- Keyboard navigation supported with Enter and Space keys
- Proper focus management with `tabIndex`
- All interactive elements have accessible names
- Supports screen readers with semantic HTML structure

## Examples

### Selectable Cards List

```tsx
const [selectedId, setSelectedId] = useState<string | null>(null);

const cards = [
  { id: '1', title: 'Option 1', description: 'Description 1' },
  { id: '2', title: 'Option 2', description: 'Description 2' },
  { id: '3', title: 'Option 3', description: 'Description 3' },
];

{
  cards.map((card) => (
    <Card
      key={card.id}
      header={card.title}
      content={card.description}
      state={selectedId === card.id ? 'selected' : 'default'}
      onClick={() => setSelectedId(card.id)}
      variant="DEFAULT"
    />
  ));
}
```

### Information Card

```tsx
<Card
  header={{ content: 'Information', component: 'h3' }}
  content={
    <div>
      <p>This is a non-interactive information card.</p>
      <p>It displays content without any click handlers.</p>
    </div>
  }
  variant="PRIMARY"
/>
```

## Best Practices

1. **Use appropriate variants**: Choose variants based on the card's importance in the UI
2. **Keep content concise**: Cards work best with focused, scannable content
3. **Accessibility**: If the card is clickable, ensure it has a clear purpose
4. **Keyboard support**: Always provide keyboard navigation for interactive cards
5. **Visual feedback**: Hover effects are automatic via CSS; use selected state to communicate selection

## Notes

- All sections (header, content, footer) are optional
- When no `onClick` is provided, the card is non-interactive
- Interactive cards automatically get proper ARIA attributes and keyboard support
- Content can be either text (using `processText`) or any React node
- Hover effects are native CSS pseudo-classes for better performance
