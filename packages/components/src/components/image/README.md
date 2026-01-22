# Image

A responsive image component that supports multiple image sources for different device breakpoints using the HTML `<picture>` element. Provides advanced features like lazy loading, aspect ratio control, and customizable styling.

## Features

- **Responsive Images**: Automatically serves different images based on device breakpoints
- **Lazy Loading**: Built-in support for lazy loading images
- **Aspect Ratio Control**: Maintain consistent aspect ratios across different devices
- **Picture Element**: Uses native HTML `<picture>` for optimal browser support
- **Caption Support**: Optional figcaption for image descriptions
- **Custom Styling**: Border radius, object-fit, and dimension controls
- **Performance Optimized**: Efficient image loading strategies
- **Accessible**: Proper alt text and ARIA support

## Usage

### Basic Image

```tsx
import { Image } from '@/components/image';
import { DEVICE_BREAKPOINTS } from '@/lib/types/breakpoints/breakpoints';

function MyComponent() {
  return (
    <Image
      alt="Product image"
      images={{
        DEFAULT: { src: 'product.jpg' },
      }}
    />
  );
}
```

### Responsive Image with Multiple Breakpoints

```tsx
import { Image } from '@/components/image';
import { DEVICE_BREAKPOINTS } from '@/lib/types/breakpoints/breakpoints';

function MyComponent() {
  return (
    <Image
      alt="Responsive landscape"
      images={{
        DEFAULT: { src: 'landscape-large.jpg' },
        [DEVICE_BREAKPOINTS.LARGE_DESKTOP]: {
          media: '(min-width: 1400px)',
          src: 'landscape-xlarge.jpg',
        },
        [DEVICE_BREAKPOINTS.DESKTOP]: {
          media: '(min-width: 900px)',
          src: 'landscape-large.jpg',
          width: '1200',
        },
        [DEVICE_BREAKPOINTS.TABLET]: {
          media: '(min-width: 600px)',
          src: 'landscape-medium.jpg',
          width: '800',
        },
        [DEVICE_BREAKPOINTS.MOBILE]: {
          media: '(max-width: 600px)',
          src: 'landscape-small.jpg',
          width: '400',
        },
      }}
    />
  );
}
```

### Image with Caption

```tsx
import { Image } from '@/components/image';

function MyComponent() {
  return (
    <Image
      alt="Beautiful sunset"
      caption="Sunset at the beach - Photo by John Doe"
      images={{
        DEFAULT: { src: 'sunset.jpg' },
      }}
    />
  );
}
```

### Image with Aspect Ratio

```tsx
import { Image } from '@/components/image';

function MyComponent() {
  return (
    <Image
      alt="16:9 aspect ratio"
      images={{
        DEFAULT: { src: 'video-thumbnail.jpg' },
      }}
      ratio={16 / 9}
    />
  );
}
```

### Image with Custom Styling

```tsx
import { Image } from '@/components/image';

function MyComponent() {
  return (
    <Image
      alt="Rounded image"
      borderRadius="12px"
      height="300px"
      images={{
        DEFAULT: { src: 'profile.jpg' },
      }}
      objectFit="cover"
      width="300px"
    />
  );
}
```

### Eager Loading Image

```tsx
import { Image } from '@/components/image';

function MyComponent() {
  return (
    <Image
      alt="Above the fold hero image"
      images={{
        DEFAULT: { src: 'hero.jpg' },
      }}
      loading="eager"
    />
  );
}
```

## Props

### ImageStandAloneProps

| Property       | Type                                                       | Description                             | Required | Default  |
| -------------- | ---------------------------------------------------------- | --------------------------------------- | -------- | -------- |
| `images`       | `ImageSourcesObject`                                       | Image sources for different breakpoints | Yes      | -        |
| `alt`          | `string`                                                   | Alternative text for the image          | No       | -        |
| `caption`      | `string`                                                   | Caption text displayed below the image  | No       | -        |
| `title`        | `string`                                                   | Title attribute for the image           | No       | -        |
| `width`        | `string`                                                   | Image width                             | No       | -        |
| `height`       | `string`                                                   | Image height                            | No       | -        |
| `ratio`        | `number`                                                   | Aspect ratio (e.g., 16/9, 4/3)          | No       | -        |
| `borderRadius` | `string`                                                   | Border radius for the image             | No       | -        |
| `objectFit`    | `'contain' \| 'cover' \| 'fill' \| 'none' \| 'scale-down'` | CSS object-fit property                 | No       | -        |
| `loading`      | `'eager' \| 'lazy'`                                        | Image loading strategy                  | No       | `'lazy'` |
| `onLoad`       | `React.ReactEventHandler<HTMLImageElement>`                | Callback when image loads               | No       | -        |
| `component`    | `GenericImageType`                                         | Custom image component                  | No       | -        |

### ImageSourcesObject

```typescript
{
  DEFAULT: {
    src: string;
  };
  LARGE_DESKTOP?: {
    media: string;
    src: string;
    width?: string;
    height?: string;
  };
  DESKTOP?: {
    media: string;
    src: string;
    width?: string;
    height?: string;
  };
  TABLET?: {
    media: string;
    src: string;
    width?: string;
    height?: string;
  };
  MOBILE?: {
    media: string;
    src: string;
    width?: string;
    height?: string;
  };
}
```

### Device Breakpoints

The component uses these standard breakpoints:

- `MOBILE`: max-width: 600px
- `TABLET`: min-width: 600px
- `DESKTOP`: min-width: 900px
- `LARGE_DESKTOP`: min-width: 1400px

## Common Patterns

### Hero Image with Full Responsive Support

```tsx
import { Image } from '@/components/image';
import { DEVICE_BREAKPOINTS } from '@/lib/types/breakpoints/breakpoints';

function HeroSection() {
  return (
    <Image
      alt="Hero banner"
      images={{
        DEFAULT: { src: '/images/hero-desktop.jpg' },
        [DEVICE_BREAKPOINTS.LARGE_DESKTOP]: {
          media: '(min-width: 1400px)',
          src: '/images/hero-xlarge.jpg',
        },
        [DEVICE_BREAKPOINTS.DESKTOP]: {
          media: '(min-width: 900px)',
          src: '/images/hero-desktop.jpg',
        },
        [DEVICE_BREAKPOINTS.TABLET]: {
          media: '(min-width: 600px)',
          src: '/images/hero-tablet.jpg',
        },
        [DEVICE_BREAKPOINTS.MOBILE]: {
          media: '(max-width: 600px)',
          src: '/images/hero-mobile.jpg',
        },
      }}
      loading="eager"
      objectFit="cover"
      ratio={16 / 9}
    />
  );
}
```

### Product Image Grid

```tsx
import { Image } from '@/components/image';

function ProductGrid() {
  const products = [
    { id: 1, name: 'Product 1', image: 'product1.jpg' },
    { id: 2, name: 'Product 2', image: 'product2.jpg' },
    { id: 3, name: 'Product 3', image: 'product3.jpg' },
  ];

  return (
    <div className="grid">
      {products.map((product) => (
        <Image
          key={product.id}
          alt={product.name}
          borderRadius="8px"
          height="300px"
          images={{
            DEFAULT: { src: product.image },
          }}
          objectFit="cover"
          ratio={1}
          width="300px"
        />
      ))}
    </div>
  );
}
```

### Blog Post with Caption

```tsx
import { Image } from '@/components/image';
import { DEVICE_BREAKPOINTS } from '@/lib/types/breakpoints/breakpoints';

function BlogPost() {
  return (
    <article>
      <h1>Article Title</h1>
      <Image
        alt="Article featured image"
        caption="Photo by Jane Smith - Unsplash"
        images={{
          DEFAULT: { src: 'featured.jpg' },
          [DEVICE_BREAKPOINTS.TABLET]: {
            media: '(min-width: 600px)',
            src: 'featured-large.jpg',
          },
          [DEVICE_BREAKPOINTS.MOBILE]: {
            media: '(max-width: 600px)',
            src: 'featured-small.jpg',
          },
        }}
        ratio={16 / 9}
      />
      <p>Article content...</p>
    </article>
  );
}
```

### Avatar/Profile Image

```tsx
import { Image } from '@/components/image';

function UserProfile() {
  return (
    <Image
      alt="User profile picture"
      borderRadius="50%"
      height="100px"
      images={{
        DEFAULT: { src: 'avatar.jpg' },
      }}
      objectFit="cover"
      width="100px"
    />
  );
}
```

### Image with Loading Handler

```tsx
import { useState } from 'react';

import { Image } from '@/components/image';

function ImageWithLoader() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div>
      {!isLoaded && <div className="skeleton-loader" />}
      <Image
        alt="Product image"
        images={{
          DEFAULT: { src: 'product.jpg' },
        }}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
```

### Gallery with Different Aspect Ratios

```tsx
import { Image } from '@/components/image';

function Gallery() {
  return (
    <div className="gallery">
      <Image
        alt="Landscape"
        images={{ DEFAULT: { src: 'landscape.jpg' } }}
        objectFit="cover"
        ratio={16 / 9}
      />
      <Image
        alt="Portrait"
        images={{ DEFAULT: { src: 'portrait.jpg' } }}
        objectFit="cover"
        ratio={9 / 16}
      />
      <Image
        alt="Square"
        images={{ DEFAULT: { src: 'square.jpg' } }}
        objectFit="cover"
        ratio={1}
      />
    </div>
  );
}
```

## Accessibility

### Always Provide Alt Text

```tsx
// ✅ Good - Descriptive alt text
<Image
  alt="Red sports car parked in front of modern building"
  images={{ DEFAULT: { src: 'car.jpg' } }}
/>

// ❌ Bad - Generic or missing alt text
<Image
  images={{ DEFAULT: { src: 'car.jpg' } }}
/>
```

### Use Empty Alt for Decorative Images

```tsx
// Decorative image that doesn't add information
<Image alt="" images={{ DEFAULT: { src: 'decorative-pattern.jpg' } }} />
```

### Provide Context with Captions

```tsx
// Caption adds context that alt text doesn't provide
<Image
  alt="Graph showing upward trend"
  caption="Sales increased by 45% in Q4 2023"
  images={{ DEFAULT: { src: 'sales-graph.jpg' } }}
/>
```

## Best Practices

### 1. Use Appropriate Image Sizes

```tsx
// ✅ Good - Serve appropriately sized images for each breakpoint
<Image
  alt="Product"
  images={{
    DEFAULT: { src: 'product-large.jpg' },
    [DEVICE_BREAKPOINTS.MOBILE]: {
      media: '(max-width: 600px)',
      src: 'product-small.jpg', // Smaller file size
      width: '400',
    },
  }}
/>

// ❌ Bad - Same large image for all devices
<Image
  alt="Product"
  images={{
    DEFAULT: { src: 'product-xlarge.jpg' }, // Unnecessarily large for mobile
  }}
/>
```

### 2. Lazy Load Below-the-Fold Images

```tsx
// ✅ Good - Hero image loaded eagerly
<Image
  alt="Hero"
  images={{ DEFAULT: { src: 'hero.jpg' } }}
  loading="eager"
/>

// ✅ Good - Product grid images loaded lazily
<Image
  alt="Product"
  images={{ DEFAULT: { src: 'product.jpg' } }}
  loading="lazy"
/>
```

### 3. Use Aspect Ratios for Consistent Layouts

```tsx
// ✅ Good - Prevents layout shift
<Image
  alt="Thumbnail"
  images={{ DEFAULT: { src: 'thumb.jpg' } }}
  ratio={16 / 9}
/>

// ⚠️ Acceptable - But may cause layout shift
<Image
  alt="Thumbnail"
  images={{ DEFAULT: { src: 'thumb.jpg' } }}
/>
```

### 4. Optimize Object Fit

```tsx
// ✅ Good - Cover for hero images
<Image
  alt="Hero"
  images={{ DEFAULT: { src: 'hero.jpg' } }}
  objectFit="cover"
  ratio={21 / 9}
/>

// ✅ Good - Contain for product images
<Image
  alt="Product"
  images={{ DEFAULT: { src: 'product.jpg' } }}
  objectFit="contain"
/>
```

### 5. Provide Width Hints

```tsx
// ✅ Good - Width hints for better performance
<Image
  alt="Banner"
  images={{
    DEFAULT: { src: 'banner.jpg' },
    [DEVICE_BREAKPOINTS.DESKTOP]: {
      media: '(min-width: 900px)',
      src: 'banner-desktop.jpg',
      width: '1200', // Width hint
    },
    [DEVICE_BREAKPOINTS.MOBILE]: {
      media: '(max-width: 600px)',
      src: 'banner-mobile.jpg',
      width: '600', // Width hint
    },
  }}
/>
```

## Performance Considerations

### Image Optimization

- Use modern image formats (WebP, AVIF) when possible
- Compress images appropriately for web use
- Serve responsive images at correct resolutions
- Use lazy loading for images below the fold

### Loading Strategy

```tsx
// Critical images - load eagerly
<Image loading="eager" images={{ DEFAULT: { src: 'logo.jpg' } }} alt="Logo" />

// Non-critical images - load lazily
<Image loading="lazy" images={{ DEFAULT: { src: 'footer-img.jpg' } }} alt="Footer" />
```

### Aspect Ratio Benefits

Using aspect ratios prevents Cumulative Layout Shift (CLS):

```tsx
// Prevents layout shift during loading
<Image
  alt="Article image"
  images={{ DEFAULT: { src: 'article.jpg' } }}
  ratio={16 / 9}
/>
```

## Testing

### Basic Rendering

```tsx
import { render, screen } from '@testing-library/react';

import { Image } from './image';

test('renders image with alt text', () => {
  render(<Image alt="Test image" images={{ DEFAULT: { src: 'test.jpg' } }} />);

  const img = screen.getByAltText('Test image');
  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute('src', 'test.jpg');
});
```

### Caption Rendering

```tsx
test('renders caption when provided', () => {
  render(
    <Image
      alt="Test"
      caption="Test caption"
      images={{ DEFAULT: { src: 'test.jpg' } }}
    />,
  );

  expect(screen.getByText('Test caption')).toBeInTheDocument();
});
```

### Loading Strategy

```tsx
test('applies lazy loading by default', () => {
  render(<Image alt="Test" images={{ DEFAULT: { src: 'test.jpg' } }} />);

  const img = screen.getByAltText('Test');
  expect(img).toHaveAttribute('loading', 'lazy');
});

test('applies eager loading when specified', () => {
  render(
    <Image
      alt="Test"
      images={{ DEFAULT: { src: 'test.jpg' } }}
      loading="eager"
    />,
  );

  const img = screen.getByAltText('Test');
  expect(img).toHaveAttribute('loading', 'eager');
});
```

### Accessibility

```tsx
import { axe } from 'jest-axe';

test('has no accessibility violations', async () => {
  const { container } = render(
    <Image alt="Accessible image" images={{ DEFAULT: { src: 'test.jpg' } }} />,
  );

  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

## Related Components

- **Icon**: For icon rendering
- **Avatar**: For user profile images

## Notes

- Uses HTML `<picture>` element for responsive images
- Rendered within a `<figure>` element for semantic HTML
- Supports custom data attributes for tracking and styling
- Default loading strategy is `lazy` for better performance
- Border radius and object-fit are applied via CSS custom properties
