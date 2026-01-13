# Skeleton

The **Skeleton** component displays animated placeholder shapes while content is loading. It provides visual feedback to users during asynchronous operations, improving perceived performance by showing the structure of upcoming content.

## Installation

```bash
npm install @kubit/react-components
```

## Usage

### Basic Usage

```tsx
import { Skeleton } from '@kubit/react-components';

function LoadingCard() {
  return (
    <div>
      <Skeleton
        variant="default"
        shapeVariant="circle"
        width="50px"
        height="50px"
      />
      <Skeleton
        variant="default"
        shapeVariant="square"
        width="100%"
        height="20px"
      />
      <Skeleton
        variant="default"
        shapeVariant="square"
        width="80%"
        height="15px"
      />
    </div>
  );
}
```

### With Custom Dimensions

```tsx
<Skeleton
  variant="default"
  shapeVariant="square"
  width="300px"
  height="200px"
  aria-label="Loading image"
/>
```

### With Custom Animation Duration

```tsx
<Skeleton
  variant="default"
  shapeVariant="square"
  width="100%"
  height="100px"
  duration="2s"
  aria-label="Loading content"
/>
```

### Alternative Variant

```tsx
<Skeleton
  variant="alternative"
  shapeVariant="circle"
  width="60px"
  height="60px"
  aria-label="Loading avatar"
/>
```

### Card Loading Pattern

```tsx
function LoadingCard() {
  return (
    <div
      style={{
        padding: '16px',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
      }}
    >
      {/* Avatar */}
      <div
        style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}
      >
        <Skeleton
          variant="default"
          shapeVariant="circle"
          width="50px"
          height="50px"
          aria-label="Loading avatar"
        />
        <div style={{ marginLeft: '12px', flex: 1 }}>
          <Skeleton
            variant="default"
            shapeVariant="square"
            width="150px"
            height="16px"
          />
          <div style={{ marginTop: '8px' }}>
            <Skeleton
              variant="default"
              shapeVariant="square"
              width="100px"
              height="12px"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <Skeleton
        variant="default"
        shapeVariant="square"
        width="100%"
        height="120px"
      />

      {/* Text lines */}
      <div style={{ marginTop: '16px' }}>
        <Skeleton
          variant="default"
          shapeVariant="square"
          width="100%"
          height="14px"
        />
        <div style={{ marginTop: '8px' }}>
          <Skeleton
            variant="default"
            shapeVariant="square"
            width="90%"
            height="14px"
          />
        </div>
        <div style={{ marginTop: '8px' }}>
          <Skeleton
            variant="default"
            shapeVariant="square"
            width="95%"
            height="14px"
          />
        </div>
      </div>
    </div>
  );
}
```

### List Loading Pattern

```tsx
function LoadingList() {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((item) => (
        <div
          key={item}
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '12px',
            borderBottom: '1px solid #e0e0e0',
          }}
        >
          <Skeleton
            variant="default"
            shapeVariant="circle"
            width="40px"
            height="40px"
            aria-label={`Loading item ${item}`}
          />
          <div style={{ marginLeft: '12px', flex: 1 }}>
            <Skeleton
              variant="default"
              shapeVariant="square"
              width="200px"
              height="16px"
            />
            <div style={{ marginTop: '8px' }}>
              <Skeleton
                variant="default"
                shapeVariant="square"
                width="150px"
                height="12px"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
```

### Table Loading Pattern

```tsx
function LoadingTable() {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          {[1, 2, 3, 4].map((col) => (
            <th key={col} style={{ padding: '12px', textAlign: 'left' }}>
              <Skeleton
                variant="default"
                shapeVariant="square"
                width="100%"
                height="16px"
              />
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[1, 2, 3, 4, 5].map((row) => (
          <tr key={row}>
            {[1, 2, 3, 4].map((col) => (
              <td key={col} style={{ padding: '12px' }}>
                <Skeleton
                  variant="default"
                  shapeVariant="square"
                  width="100%"
                  height="14px"
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```

### Form Loading Pattern

```tsx
function LoadingForm() {
  return (
    <form style={{ maxWidth: '400px' }}>
      {[1, 2, 3].map((field) => (
        <div key={field} style={{ marginBottom: '20px' }}>
          <Skeleton
            variant="default"
            shapeVariant="square"
            width="120px"
            height="16px"
            aria-label={`Loading label ${field}`}
          />
          <div style={{ marginTop: '8px' }}>
            <Skeleton
              variant="default"
              shapeVariant="square"
              width="100%"
              height="40px"
              aria-label={`Loading input ${field}`}
            />
          </div>
        </div>
      ))}
      <Skeleton
        variant="default"
        shapeVariant="square"
        width="150px"
        height="44px"
      />
    </form>
  );
}
```

### Gallery Loading Pattern

```tsx
function LoadingGallery() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '16px',
      }}
    >
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div key={item}>
          <Skeleton
            variant="default"
            shapeVariant="square"
            width="100%"
            height="200px"
            aria-label={`Loading image ${item}`}
          />
          <div style={{ marginTop: '8px' }}>
            <Skeleton
              variant="default"
              shapeVariant="square"
              width="100%"
              height="16px"
            />
          </div>
          <div style={{ marginTop: '8px' }}>
            <Skeleton
              variant="default"
              shapeVariant="square"
              width="70%"
              height="12px"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
```

## Props

### Skeleton Props

| Prop                     | Type                               | Required | Default     | Description                                       |
| ------------------------ | ---------------------------------- | -------- | ----------- | ------------------------------------------------- |
| `variant`                | `'default' \| 'alternative'`       | No       | `'default'` | Visual style variant of the skeleton              |
| `shapeVariant`           | `'circle' \| 'square'`             | No       | `'square'`  | Shape of the skeleton element                     |
| `width`                  | `string`                           | No       | -           | Width of the skeleton (CSS units)                 |
| `height`                 | `string`                           | No       | -           | Height of the skeleton (CSS units)                |
| `duration`               | `string`                           | No       | -           | Animation duration (CSS time units)               |
| `aria-label`             | `string`                           | No       | -           | Accessible label for screen readers               |
| `aria-labelledby`        | `string`                           | No       | -           | ID of element that labels the skeleton            |
| `aria-describedby`       | `string`                           | No       | -           | ID of element that describes the skeleton         |
| `additionalClasses`      | `string`                           | No       | -           | Additional CSS classes for the container          |
| `additionalShapeClasses` | `string`                           | No       | -           | Additional CSS classes for the shape element      |
| `dataAttributes`         | `Record<string, string \| number>` | No       | -           | Custom data attributes for testing/identification |

## Variants

### Visual Variants

- **default**: Standard skeleton appearance with base styling
- **alternative**: Alternative visual style for different design contexts

### Shape Variants

- **circle**: Circular skeleton shape, ideal for avatars or circular images
- **square**: Rectangular skeleton shape (default), suitable for most content types

## Accessibility

The Skeleton component includes several accessibility features:

1. **ARIA Labels**: Use `aria-label` to provide context about what content is loading
2. **ARIA References**: Use `aria-labelledby` and `aria-describedby` for associating labels and descriptions
3. **Semantic Loading**: The skeleton should be replaced with actual content when loading completes
4. **Screen Reader Feedback**: Provide meaningful labels so screen reader users understand content is loading

### Accessibility Best Practices

```tsx
// Good: Descriptive aria-label
<Skeleton
  variant="default"
  shapeVariant="circle"
  width="50px"
  height="50px"
  aria-label="Loading user profile picture"
/>

// Good: Using aria-labelledby
<div>
  <h2 id="article-title">Article Title</h2>
  <Skeleton
    variant="default"
    shapeVariant="square"
    width="100%"
    height="200px"
    aria-labelledby="article-title"
  />
</div>

// Good: Loading announcement
<div role="status" aria-live="polite">
  <span className="sr-only">Loading content...</span>
  <Skeleton variant="default" shapeVariant="square" width="100%" height="100px" />
</div>
```

## Use Cases

### Profile Card Loading

```tsx
function LoadingProfile() {
  return (
    <div
      style={{
        maxWidth: '400px',
        padding: '24px',
        border: '1px solid #e0e0e0',
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <div style={{ display: 'inline-block' }}>
          <Skeleton
            variant="default"
            shapeVariant="circle"
            width="100px"
            height="100px"
            aria-label="Loading profile picture"
          />
        </div>
        <div style={{ marginTop: '16px' }}>
          <Skeleton
            variant="default"
            shapeVariant="square"
            width="200px"
            height="24px"
          />
        </div>
        <div style={{ marginTop: '8px' }}>
          <Skeleton
            variant="default"
            shapeVariant="square"
            width="150px"
            height="16px"
          />
        </div>
      </div>

      {/* Stats */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginBottom: '24px',
        }}
      >
        {[1, 2, 3].map((stat) => (
          <div key={stat} style={{ textAlign: 'center' }}>
            <Skeleton
              variant="default"
              shapeVariant="square"
              width="60px"
              height="20px"
            />
            <div style={{ marginTop: '8px' }}>
              <Skeleton
                variant="default"
                shapeVariant="square"
                width="80px"
                height="14px"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Bio */}
      <div>
        <Skeleton
          variant="default"
          shapeVariant="square"
          width="100%"
          height="14px"
        />
        <div style={{ marginTop: '8px' }}>
          <Skeleton
            variant="default"
            shapeVariant="square"
            width="95%"
            height="14px"
          />
        </div>
        <div style={{ marginTop: '8px' }}>
          <Skeleton
            variant="default"
            shapeVariant="square"
            width="90%"
            height="14px"
          />
        </div>
      </div>

      {/* Button */}
      <div style={{ marginTop: '24px' }}>
        <Skeleton
          variant="default"
          shapeVariant="square"
          width="100%"
          height="44px"
        />
      </div>
    </div>
  );
}
```

### Article Loading

```tsx
function LoadingArticle() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Featured Image */}
      <Skeleton
        variant="default"
        shapeVariant="square"
        width="100%"
        height="400px"
        aria-label="Loading article image"
      />

      {/* Title */}
      <div style={{ marginTop: '24px' }}>
        <Skeleton
          variant="default"
          shapeVariant="square"
          width="80%"
          height="32px"
        />
      </div>

      {/* Meta */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: '16px',
          gap: '16px',
        }}
      >
        <Skeleton
          variant="default"
          shapeVariant="circle"
          width="40px"
          height="40px"
        />
        <div style={{ flex: 1 }}>
          <Skeleton
            variant="default"
            shapeVariant="square"
            width="150px"
            height="16px"
          />
          <div style={{ marginTop: '4px' }}>
            <Skeleton
              variant="default"
              shapeVariant="square"
              width="100px"
              height="14px"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ marginTop: '32px' }}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((line) => (
          <div key={line} style={{ marginTop: line === 1 ? 0 : '12px' }}>
            <Skeleton
              variant="default"
              shapeVariant="square"
              width={line % 4 === 0 ? '90%' : '100%'}
              height="16px"
            />
          </div>
        ))}
      </div>
    </article>
  );
}
```

### Dashboard Loading

```tsx
function LoadingDashboard() {
  return (
    <div style={{ padding: '24px' }}>
      {/* Stats Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px',
          marginBottom: '32px',
        }}
      >
        {[1, 2, 3, 4].map((card) => (
          <div
            key={card}
            style={{
              padding: '20px',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
            }}
          >
            <Skeleton
              variant="default"
              shapeVariant="square"
              width="120px"
              height="16px"
            />
            <div style={{ marginTop: '16px' }}>
              <Skeleton
                variant="default"
                shapeVariant="square"
                width="80px"
                height="32px"
              />
            </div>
            <div style={{ marginTop: '12px' }}>
              <Skeleton
                variant="default"
                shapeVariant="square"
                width="100px"
                height="12px"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div
        style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}
      >
        <div
          style={{
            padding: '20px',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
          }}
        >
          <Skeleton
            variant="default"
            shapeVariant="square"
            width="150px"
            height="20px"
          />
          <div style={{ marginTop: '20px' }}>
            <Skeleton
              variant="default"
              shapeVariant="square"
              width="100%"
              height="300px"
            />
          </div>
        </div>
        <div
          style={{
            padding: '20px',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
          }}
        >
          <Skeleton
            variant="default"
            shapeVariant="square"
            width="120px"
            height="20px"
          />
          <div style={{ marginTop: '20px' }}>
            <Skeleton
              variant="default"
              shapeVariant="square"
              width="100%"
              height="300px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
```

## Performance Considerations

1. **Animation Performance**: Skeleton animations use CSS animations for optimal performance
2. **Render Optimization**: Use the same skeleton structure as your actual content for smooth transitions
3. **Duration Control**: Adjust animation duration with the `duration` prop to match your design
4. **Conditional Rendering**: Remove skeletons from DOM when content loads to reduce memory usage

```tsx
function OptimizedComponent() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then((result) => {
      setData(result);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <Skeleton
        variant="default"
        shapeVariant="square"
        width="100%"
        height="200px"
      />
    );
  }

  return <div>{data.content}</div>;
}
```

## Best Practices

### Do's ✅

- Use skeleton shapes that match the structure of your actual content
- Provide meaningful `aria-label` values for accessibility
- Match skeleton dimensions to expected content dimensions
- Use consistent animation timing across related skeletons
- Remove skeletons completely when content loads (don't just hide them)
- Group related skeletons in containers with appropriate ARIA roles
- Use circle shape for avatars and profile pictures
- Use square shape for text, images, and other rectangular content

### Don'ts ❌

- Don't use skeletons for instant content (< 300ms load time)
- Don't make skeleton dimensions drastically different from actual content
- Don't forget accessibility attributes
- Don't leave skeletons visible indefinitely without timeout or error handling
- Don't use overly complex skeleton patterns that draw attention away from loading state
- Don't animate individual text lines differently (maintain consistency)
- Don't use skeletons without providing alternative loading indicators for screen readers

## Common Patterns

### Conditional Loading State

```tsx
function DataDisplay() {
  const { data, loading, error } = useFetchData();

  if (loading) {
    return (
      <div>
        <Skeleton
          variant="default"
          shapeVariant="square"
          width="100%"
          height="20px"
        />
        <div style={{ marginTop: '8px' }}>
          <Skeleton
            variant="default"
            shapeVariant="square"
            width="100%"
            height="20px"
          />
        </div>
        <div style={{ marginTop: '8px' }}>
          <Skeleton
            variant="default"
            shapeVariant="square"
            width="80%"
            height="20px"
          />
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  return <div>{data}</div>;
}
```

### Progressive Loading

```tsx
function ProgressiveContent() {
  const [headerLoaded, setHeaderLoaded] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(false);

  return (
    <div>
      {headerLoaded ? (
        <h1>Loaded Header</h1>
      ) : (
        <Skeleton
          variant="default"
          shapeVariant="square"
          width="300px"
          height="32px"
        />
      )}

      {contentLoaded ? (
        <p>Loaded content</p>
      ) : (
        <div style={{ marginTop: '16px' }}>
          <Skeleton
            variant="default"
            shapeVariant="square"
            width="100%"
            height="16px"
          />
          <div style={{ marginTop: '8px' }}>
            <Skeleton
              variant="default"
              shapeVariant="square"
              width="100%"
              height="16px"
            />
          </div>
        </div>
      )}
    </div>
  );
}
```

### Repeat Pattern Helper

```tsx
function SkeletonLines({
  count = 3,
  width = '100%',
  height = '16px',
  gap = '8px',
}) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} style={{ marginTop: index === 0 ? 0 : gap }}>
          <Skeleton
            variant="default"
            shapeVariant="square"
            width={width}
            height={height}
            aria-label={`Loading line ${index + 1} of ${count}`}
          />
        </div>
      ))}
    </>
  );
}

// Usage
<SkeletonLines count={5} />;
```

## Styling

The Skeleton component can be customized using:

1. **Variant Prop**: Use `variant` to apply predefined style variants
2. **Additional Classes**: Use `additionalClasses` for custom container styling
3. **Shape Classes**: Use `additionalShapeClasses` for custom shape styling
4. **Inline Dimensions**: Use `width` and `height` props for size control
5. **Animation Duration**: Use `duration` prop to control animation speed

```tsx
<Skeleton
  variant="alternative"
  shapeVariant="circle"
  width="80px"
  height="80px"
  duration="1.5s"
  additionalClasses="custom-skeleton-container"
  additionalShapeClasses="custom-skeleton-shape"
  aria-label="Loading avatar with custom styling"
/>
```

## Related Components

- **Spinner**: For simple loading indicators without structure
- **ProgressBar**: For showing determinate loading progress
- **LoadingOverlay**: For full-page or section loading states

## Resources

- [Skeleton UI Pattern](https://www.nngroup.com/articles/skeleton-screens/)
- [Loading States Best Practices](https://www.smashingmagazine.com/2016/12/best-practices-for-animated-progress-indicators/)
- [ARIA Live Regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
