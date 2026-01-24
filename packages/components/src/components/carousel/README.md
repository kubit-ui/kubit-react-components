# Carousel

The Carousel component provides an interactive sliding gallery for displaying multiple items with pagination, navigation controls, and various display modes.

## Features

- **Flexible layout**: Configure elements per page and slide behavior
- **Circular navigation**: Optional infinite loop through slides
- **Center mode**: Highlight the center item with partial views of adjacent items
- **Responsive**: Adapts to container size with auto-fit options
- **Accessible**: Built-in screen reader support and ARIA attributes
- **Programmatic control**: Expose methods via ref for external control
- **Custom alignment**: Configure one-page alignment (left, center, right)

## Basic Usage

```tsx
import { Carousel } from '@/components/carousel';

function App() {
  return (
    <Carousel
      numElementsPerPage={3}
      variant="DEFAULT"
      elements={[
        <div key="1">Slide 1</div>,
        <div key="2">Slide 2</div>,
        <div key="3">Slide 3</div>,
        <div key="4">Slide 4</div>,
        <div key="5">Slide 5</div>,
      ]}
    />
  );
}
```

## Circular Carousel

Enable infinite loop navigation:

```tsx
<Carousel numElementsPerPage={3} circular={true} elements={slides} />
```

## Center Mode

Highlight the center element with partial views of neighbors:

```tsx
<Carousel
  numElementsPerPage={1}
  centerMode={true}
  extraPadding={50}
  elements={slides}
/>
```

## Controlled Carousel

Use ref to control the carousel programmatically:

```tsx
function ControlledCarousel() {
  const carouselRef = useRef<CarouselRefType>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const goToPage = (page: number) => {
    carouselRef.current?.changePage({
      newPage: page,
      animated: true,
    });
  };

  return (
    <div>
      <button onClick={() => goToPage(currentPage - 1)}>Previous</button>
      <button onClick={() => goToPage(currentPage + 1)}>Next</button>

      <Carousel
        ref={carouselRef}
        numElementsPerPage={3}
        onPageChange={setCurrentPage}
        elements={slides}
      />
    </div>
  );
}
```

## Props

### ICarousel

| Prop                             | Type                            | Default      | Description                                 |
| -------------------------------- | ------------------------------- | ------------ | ------------------------------------------- |
| `variant`                        | `string`                        | -            | Visual variant from theme configuration     |
| `elements`                       | `JSX.Element[]`                 | **required** | Array of slide elements to display          |
| `numElementsPerPage`             | `number`                        | -            | Number of elements visible per page         |
| `numElementsToSlide`             | `number`                        | -            | Number of elements to slide on navigation   |
| `circular`                       | `boolean`                       | `false`      | Enable infinite loop navigation             |
| `centerMode`                     | `boolean`                       | `false`      | Highlight center element with side previews |
| `defaultPage`                    | `number`                        | `0`          | Initial page to display                     |
| `disabled`                       | `boolean`                       | `false`      | Disable carousel interactions               |
| `extraPadding`                   | `number`                        | -            | Additional padding in center mode (px)      |
| `onePageAlign`                   | `'left' \| 'center' \| 'right'` | `'center'`   | Alignment when only one page                |
| `autoFitContainer`               | `boolean`                       | `false`      | Auto-adjust to container width              |
| `allowModifySliceWidth`          | `boolean`                       | `false`      | Allow dynamic slice width adjustment        |
| `centerExtremesWhenExtraPadding` | `boolean`                       | `false`      | Center first/last items with padding        |
| `screenReaderOnly`               | `object`                        | -            | Screen reader announcement configuration    |
| `onPageChange`                   | `(page: number) => void`        | -            | Callback when page changes                  |
| `onNumPagesChange`               | `(numPages: number) => void`    | -            | Callback when total pages change            |
| `onNumElementsPerPageChange`     | `(num: number) => void`         | -            | Callback when elements per page change      |

### Screen Reader Support

Configure announcements for accessibility:

```tsx
<Carousel
  screenReaderOnly={{
    content: 'Page {{currentPage}} of {{numPages}}',
  }}
  elements={slides}
/>
```

The placeholders `{{currentPage}}` and `{{numPages}}` will be replaced with actual values.

## Ref Methods

### changePage

Programmatically change the current page:

```tsx
carouselRef.current?.changePage({
  newPage: 2,
  animated: true, // Optional: animate transition
});
```

### Ref Properties

- `currentPageRef`: Current page index
- `numPagesRef`: Total number of pages
- `numElementsPerPageRef`: Elements visible per page
- `allowShiftRef`: Whether shifting is allowed

## Common Patterns

### Product Gallery

```tsx
<Carousel
  numElementsPerPage={4}
  numElementsToSlide={4}
  circular={false}
  elements={products.map((product) => (
    <ProductCard key={product.id} {...product} />
  ))}
/>
```

### Featured Content

```tsx
<Carousel
  numElementsPerPage={1}
  centerMode={true}
  extraPadding={100}
  circular={true}
  elements={featuredItems.map((item) => (
    <FeaturedCard key={item.id} {...item} />
  ))}
/>
```

### Testimonials

```tsx
<Carousel
  numElementsPerPage={1}
  autoFitContainer={true}
  onePageAlign="center"
  elements={testimonials.map((testimonial) => (
    <TestimonialCard key={testimonial.id} {...testimonial} />
  ))}
/>
```

### With Custom Navigation

```tsx
function CarouselWithNav() {
  const ref = useRef<CarouselRefType>(null);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  return (
    <div>
      <Carousel
        ref={ref}
        numElementsPerPage={3}
        onPageChange={setPage}
        onNumPagesChange={setTotalPages}
        elements={slides}
      />

      <div className="navigation">
        <button onClick={() => ref.current?.changePage({ newPage: page - 1 })}>
          Previous
        </button>
        <span>
          {page + 1} / {totalPages}
        </span>
        <button onClick={() => ref.current?.changePage({ newPage: page + 1 })}>
          Next
        </button>
      </div>
    </div>
  );
}
```

## Accessibility

- Uses proper ARIA roles and labels for slides
- Screen reader announcements for page changes
- Keyboard navigation support (when integrated with controls)
- Focus management for interactive elements
- Respects `prefers-reduced-motion` for animations

## Best Practices

1. **Element consistency**: Ensure all slides have the same dimensions
2. **Loading states**: Show placeholders while content loads
3. **Touch support**: Works well with touch gestures on mobile
4. **Performance**: Avoid too many elements; consider lazy loading
5. **Responsive**: Test on different screen sizes
6. **Controls**: Provide clear navigation controls (arrows, dots)
7. **Indicators**: Show current position in the carousel

## Responsive Behavior

The carousel adapts to container size. Use `autoFitContainer` for automatic width adjustment:

```tsx
<div style={{ maxWidth: '1200px', margin: '0 auto' }}>
  <Carousel autoFitContainer={true} numElementsPerPage={3} elements={slides} />
</div>
```

## Related Components

- **PageControl**: For pagination dots
- **Button**: For navigation arrows
- **Image**: For image carousels
