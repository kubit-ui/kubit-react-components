# PageControl Component

## Overview

The **PageControl** component is a navigation indicator used for carousels, image galleries, or any paginated content. It displays visual dots/bullets that represent pages, along with optional arrow controls for navigation. The component automatically manages the visibility of dots when dealing with many pages, showing only a subset at a time.

## Features

- **Visual Page Indicators**: Display dots or bullets representing pages
- **Arrow Navigation**: Optional left/right arrow controls for page navigation
- **Smart Dot Management**: Automatically handles visibility when pages exceed maxDots
- **Bullet Mode**: Shows ellipsis indicators when not all pages are visible
- **Custom Controls**: Support for custom arrow control components or icons
- **Accessibility**: Proper ARIA attributes for navigation controls
- **Responsive Design**: Adapts to different screen sizes and page counts
- **Position Tracking**: Tracks current position with direction-based animation
- **Flexible Styling**: Customizable through variants and CSS classes

## Installation

```bash
npm install @kubit/web-ui-components
```

## Usage

### Basic Usage

```tsx
import { useState } from 'react';

import { PageControl } from '@kubit/web-ui-components';

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <PageControl variant="DEFAULT" pages={5} currentPosition={currentPage} />
  );
}
```

### With Arrow Controls

```tsx
import { useState } from 'react';

import { PageControl } from '@kubit/web-ui-components';

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 10;

  const handleLeftClick = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleRightClick = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  return (
    <PageControl
      variant="DEFAULT"
      pages={totalPages}
      currentPosition={currentPage}
      leftControl={{
        icon: 'chevron-left',
        onClick: handleLeftClick,
        disabled: currentPage === 0,
        'aria-label': 'Previous page',
      }}
      rightControl={{
        icon: 'chevron-right',
        onClick: handleRightClick,
        disabled: currentPage === totalPages - 1,
        'aria-label': 'Next page',
      }}
    />
  );
}
```

### With Bullet Mode

```tsx
import { PageControl } from '@kubit/web-ui-components';

function App() {
  const [currentPage, setCurrentPage] = useState(5);

  return (
    <PageControl
      variant="DEFAULT"
      pages={20}
      currentPosition={currentPage}
      isBullet={true}
      maxDots={5}
      leftControl={{
        icon: 'chevron-left',
        onClick: () => setCurrentPage((prev) => Math.max(0, prev - 1)),
        'aria-label': 'Previous page',
      }}
      rightControl={{
        icon: 'chevron-right',
        onClick: () => setCurrentPage((prev) => Math.min(19, prev + 1)),
        'aria-label': 'Next page',
      }}
    />
  );
}
```

### With Custom Arrow Components

```tsx
import { PageControl } from '@kubit/web-ui-components';

import { CustomButton } from './CustomButton';

function App() {
  const [page, setPage] = useState(0);

  return (
    <PageControl
      variant="DEFAULT"
      pages={8}
      currentPosition={page}
      leftControl={{
        element: <CustomButton>Previous</CustomButton>,
        onClick: () => setPage((prev) => prev - 1),
      }}
      rightControl={{
        element: <CustomButton>Next</CustomButton>,
        onClick: () => setPage((prev) => prev + 1),
      }}
    />
  );
}
```

## Props

### PageControlProps

| Prop                            | Type                             | Required | Default          | Description                                       |
| ------------------------------- | -------------------------------- | -------- | ---------------- | ------------------------------------------------- |
| `variant`                       | `string`                         | No       | -                | Visual variant for the page control container     |
| `arrowsControlVariant`          | `string`                         | No       | -                | Visual variant for the arrow controls             |
| `pages`                         | `number`                         | Yes      | -                | Total number of pages/slides                      |
| `currentPosition`               | `number`                         | Yes      | -                | Current active page index (0-based)               |
| `leftControl`                   | `PageControlControlProps`        | No       | -                | Configuration for the left arrow control          |
| `rightControl`                  | `PageControlControlProps`        | No       | -                | Configuration for the right arrow control         |
| `isBullet`                      | `boolean`                        | No       | `false`          | Enable bullet mode (shows ellipsis indicators)    |
| `maxDots`                       | `number`                         | No       | `5`              | Maximum number of dots to display at once         |
| `additionalPageControlClasses`  | `Partial<PageControlCssClasses>` | No       | -                | Additional CSS classes for page control container |
| `additionalArrowControlClasses` | `Partial<PageControlCssClasses>` | No       | -                | Additional CSS classes for arrow controls         |
| `data-testid`                   | `string`                         | No       | `'page-control'` | Test ID for component testing                     |

### PageControlControlProps

Control configuration can be either an icon/element or a button:

**Icon/Element Control:**
| Prop | Type | Description |
|------|------|-------------|
| `icon` | `string` | Icon name to display |
| `element` | `ReactNode` | Custom React element to render |
| `onClick` | `MouseEventHandler` | Click handler |
| `disabled` | `boolean` | Whether the control is disabled |

**Button Control with ARIA:**
| Prop | Type | Description |
|------|------|-------------|
| `onClick` | `MouseEventHandler` | Click handler |
| `disabled` | `boolean` | Whether the button is disabled |
| `aria-label` | `string` | Accessible label for the button |
| `aria-labelledby` | `string` | ID of element labeling the button |
| `aria-describedby` | `string` | ID of element describing the button |
| `aria-controls` | `string` | ID of element controlled by the button |
| `aria-expanded` | `boolean` | Whether controlled content is expanded |
| `aria-pressed` | `boolean` | Whether button is pressed |
| `aria-disabled` | `boolean` | Whether button is disabled (ARIA) |
| `aria-hidden` | `boolean` | Whether button is hidden from screen readers |

## Variants

### PageControl Variants

Available variants for the main page control component:

- **`BULLETS`**: Default bullet-style indicators

### ArrowsControl Variants

Available variants for arrow controls:

- **`DEFAULT`**: Standard arrow control styling

## Accessibility

The PageControl component follows WAI-ARIA best practices:

### Keyboard Navigation

- **Tab**: Move focus between arrow controls
- **Enter/Space**: Activate focused arrow control
- **Arrow Keys**: Navigate between pages (when controls have focus)

### ARIA Attributes

```tsx
<PageControl
  variant="DEFAULT"
  pages={10}
  currentPosition={3}
  leftControl={{
    icon: 'chevron-left',
    onClick: handlePrevious,
    disabled: currentPage === 0,
    'aria-label': 'Go to previous page',
    'aria-controls': 'carousel-content',
  }}
  rightControl={{
    icon: 'chevron-right',
    onClick: handleNext,
    disabled: currentPage === 9,
    'aria-label': 'Go to next page',
    'aria-controls': 'carousel-content',
  }}
/>
```

### Screen Reader Support

- Each arrow control should have an `aria-label` describing its action
- Current page state is visually indicated by dot styling
- Disabled controls are properly marked with `disabled` and `aria-disabled`
- Use `aria-controls` to link controls to the content they navigate

### Focus Management

```tsx
function AccessibleCarousel() {
  const [page, setPage] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    // Move focus to new content for screen reader users
    contentRef.current?.focus();
  };

  return (
    <>
      <div ref={contentRef} tabIndex={-1} aria-live="polite" aria-atomic="true">
        {/* Carousel content */}
      </div>
      <PageControl
        variant="DEFAULT"
        pages={5}
        currentPosition={page}
        leftControl={{
          icon: 'chevron-left',
          onClick: () => handlePageChange(page - 1),
          'aria-label': `Go to slide ${page}`,
        }}
        rightControl={{
          icon: 'chevron-right',
          onClick: () => handlePageChange(page + 1),
          'aria-label': `Go to slide ${page + 2}`,
        }}
      />
    </>
  );
}
```

## Common Use Cases

### Image Gallery Navigation

```tsx
import { useState } from 'react';

import { PageControl } from '@kubit/web-ui-components';

function ImageGallery({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="gallery">
      <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} />

      <PageControl
        variant="DEFAULT"
        pages={images.length}
        currentPosition={currentImage}
        isBullet={images.length > 10}
        maxDots={7}
        leftControl={{
          icon: 'chevron-left',
          onClick: () => setCurrentImage((prev) => Math.max(0, prev - 1)),
          disabled: currentImage === 0,
          'aria-label': 'Previous image',
        }}
        rightControl={{
          icon: 'chevron-right',
          onClick: () =>
            setCurrentImage((prev) => Math.min(images.length - 1, prev + 1)),
          disabled: currentImage === images.length - 1,
          'aria-label': 'Next image',
        }}
      />
    </div>
  );
}
```

### Product Carousel

```tsx
import { useState } from 'react';

import { PageControl } from '@kubit/web-ui-components';

function ProductCarousel({ products }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = Math.ceil(products.length / 3); // 3 products per slide

  const handleSlideChange = (direction: 'next' | 'prev') => {
    setCurrentSlide((prev) => {
      if (direction === 'next') return Math.min(slidesCount - 1, prev + 1);
      return Math.max(0, prev - 1);
    });
  };

  return (
    <div className="product-carousel">
      <div className="products-container">{/* Products display */}</div>

      <PageControl
        variant="DEFAULT"
        pages={slidesCount}
        currentPosition={currentSlide}
        leftControl={{
          icon: 'chevron-left',
          onClick: () => handleSlideChange('prev'),
          disabled: currentSlide === 0,
          'aria-label': 'Previous products',
        }}
        rightControl={{
          icon: 'chevron-right',
          onClick: () => handleSlideChange('next'),
          disabled: currentSlide === slidesCount - 1,
          'aria-label': 'Next products',
        }}
      />
    </div>
  );
}
```

### Multi-Step Form

```tsx
import { useState } from 'react';

import { PageControl } from '@kubit/web-ui-components';

function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ['Personal Info', 'Address', 'Payment', 'Confirmation'];

  return (
    <div className="form-container">
      <h2>{steps[currentStep]}</h2>

      {/* Form content for current step */}

      <PageControl
        variant="DEFAULT"
        pages={steps.length}
        currentPosition={currentStep}
        leftControl={{
          icon: 'chevron-left',
          onClick: () => setCurrentStep((prev) => prev - 1),
          disabled: currentStep === 0,
          'aria-label': `Go back to ${steps[currentStep - 1]}`,
        }}
        rightControl={{
          icon: 'chevron-right',
          onClick: () => setCurrentStep((prev) => prev + 1),
          disabled: currentStep === steps.length - 1,
          'aria-label': `Continue to ${steps[currentStep + 1]}`,
        }}
      />
    </div>
  );
}
```

### Auto-Playing Carousel

```tsx
import { useEffect, useState } from 'react';

import { PageControl } from '@kubit/web-ui-components';

function AutoPlayCarousel({ slides, interval = 3000 }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, slides.length, interval]);

  return (
    <div className="carousel">
      <div className="carousel-content">{slides[currentSlide]}</div>

      <button
        onClick={() => setIsPlaying(!isPlaying)}
        aria-label={isPlaying ? 'Pause carousel' : 'Play carousel'}
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>

      <PageControl
        variant="DEFAULT"
        pages={slides.length}
        currentPosition={currentSlide}
        isBullet={true}
        leftControl={{
          icon: 'chevron-left',
          onClick: () => {
            setIsPlaying(false);
            setCurrentSlide(
              (prev) => (prev - 1 + slides.length) % slides.length,
            );
          },
          'aria-label': 'Previous slide',
        }}
        rightControl={{
          icon: 'chevron-right',
          onClick: () => {
            setIsPlaying(false);
            setCurrentSlide((prev) => (prev + 1) % slides.length);
          },
          'aria-label': 'Next slide',
        }}
      />
    </div>
  );
}
```

### Thumbnail Navigation

```tsx
import { useState } from 'react';

import { PageControl } from '@kubit/web-ui-components';

function ThumbnailGallery({ images }) {
  const [mainImage, setMainImage] = useState(0);

  return (
    <div className="thumbnail-gallery">
      <div className="main-image">
        <img src={images[mainImage].full} alt={images[mainImage].alt} />
      </div>

      <div className="thumbnails">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setMainImage(idx)}
            className={idx === mainImage ? 'active' : ''}
          >
            <img src={img.thumb} alt={`Thumbnail ${idx + 1}`} />
          </button>
        ))}
      </div>

      <PageControl
        variant="DEFAULT"
        pages={images.length}
        currentPosition={mainImage}
        isBullet={images.length > 10}
        leftControl={{
          icon: 'chevron-left',
          onClick: () =>
            setMainImage((prev) => (prev - 1 + images.length) % images.length),
          'aria-label': 'Previous image',
        }}
        rightControl={{
          icon: 'chevron-right',
          onClick: () => setMainImage((prev) => (prev + 1) % images.length),
          'aria-label': 'Next image',
        }}
      />
    </div>
  );
}
```

### Content Tabs with Dots

```tsx
import { useState } from 'react';

import { PageControl } from '@kubit/web-ui-components';

function ContentTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { title: 'Overview', content: 'Overview content...' },
    { title: 'Features', content: 'Features content...' },
    { title: 'Pricing', content: 'Pricing content...' },
    { title: 'Reviews', content: 'Reviews content...' },
  ];

  return (
    <div className="tabbed-content">
      <div className="tab-buttons">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={idx === activeTab ? 'active' : ''}
            aria-selected={idx === activeTab}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="tab-content">{tabs[activeTab].content}</div>

      <PageControl
        variant="DEFAULT"
        pages={tabs.length}
        currentPosition={activeTab}
        leftControl={{
          icon: 'chevron-left',
          onClick: () => setActiveTab((prev) => Math.max(0, prev - 1)),
          disabled: activeTab === 0,
          'aria-label': 'Previous tab',
        }}
        rightControl={{
          icon: 'chevron-right',
          onClick: () =>
            setActiveTab((prev) => Math.min(tabs.length - 1, prev + 1)),
          disabled: activeTab === tabs.length - 1,
          'aria-label': 'Next tab',
        }}
      />
    </div>
  );
}
```

## Best Practices

### 1. Always Provide Accessible Labels

```tsx
// ✅ Good: Clear, descriptive labels
<PageControl
  variant="DEFAULT"
  pages={10}
  currentPosition={5}
  leftControl={{
    icon: 'chevron-left',
    onClick: handlePrevious,
    'aria-label': 'Go to previous slide',
  }}
  rightControl={{
    icon: 'chevron-right',
    onClick: handleNext,
    'aria-label': 'Go to next slide',
  }}
/>

// ❌ Bad: No accessibility labels
<PageControl
  variant="DEFAULT"
  pages={10}
  currentPosition={5}
  leftControl={{ icon: 'chevron-left', onClick: handlePrevious }}
  rightControl={{ icon: 'chevron-right', onClick: handleNext }}
/>
```

### 2. Handle Edge Cases

```tsx
// ✅ Good: Proper boundary handling
function Carousel() {
  const [page, setPage] = useState(0);
  const totalPages = 10;

  const goToPrevious = () => {
    setPage((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setPage((prev) => Math.min(totalPages - 1, prev + 1));
  };

  return (
    <PageControl
      variant="DEFAULT"
      pages={totalPages}
      currentPosition={page}
      leftControl={{
        icon: 'chevron-left',
        onClick: goToPrevious,
        disabled: page === 0,
        'aria-label': 'Previous page',
      }}
      rightControl={{
        icon: 'chevron-right',
        onClick: goToNext,
        disabled: page === totalPages - 1,
        'aria-label': 'Next page',
      }}
    />
  );
}
```

### 3. Use Bullet Mode for Many Pages

```tsx
// ✅ Good: Bullet mode for large page counts
<PageControl
  variant="DEFAULT"
  pages={50}
  currentPosition={25}
  isBullet={true}
  maxDots={7}
  leftControl={leftControl}
  rightControl={rightControl}
/>

// ❌ Bad: Too many dots displayed
<PageControl
  variant="DEFAULT"
  pages={50}
  currentPosition={25}
  isBullet={false}
  leftControl={leftControl}
  rightControl={rightControl}
/>
```

### 4. Coordinate with Content Updates

```tsx
// ✅ Good: Synchronized content and page control
function SyncedCarousel({ items }) {
  const [currentPage, setCurrentPage] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);

    // Animate content change
    if (contentRef.current) {
      contentRef.current.style.opacity = '0';
      setTimeout(() => {
        contentRef.current!.style.opacity = '1';
      }, 150);
    }
  };

  return (
    <>
      <div ref={contentRef} className="content">
        {items[currentPage]}
      </div>
      <PageControl
        variant="DEFAULT"
        pages={items.length}
        currentPosition={currentPage}
        leftControl={{
          icon: 'chevron-left',
          onClick: () => handlePageChange(currentPage - 1),
          disabled: currentPage === 0,
          'aria-label': 'Previous item',
        }}
        rightControl={{
          icon: 'chevron-right',
          onClick: () => handlePageChange(currentPage + 1),
          disabled: currentPage === items.length - 1,
          'aria-label': 'Next item',
        }}
      />
    </>
  );
}
```

### 5. Provide Visual Feedback

```tsx
// ✅ Good: Clear disabled state and transitions
<PageControl
  variant="DEFAULT"
  pages={5}
  currentPosition={0}
  leftControl={{
    icon: 'chevron-left',
    onClick: handlePrevious,
    disabled: true, // First page - clearly disabled
    'aria-label': 'Previous page',
  }}
  rightControl={{
    icon: 'chevron-right',
    onClick: handleNext,
    disabled: false,
    'aria-label': 'Next page',
  }}
/>
```

### 6. Consider Touch Gestures

```tsx
// ✅ Good: Support swipe gestures on mobile
function TouchEnabledCarousel() {
  const [page, setPage] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swiped left - go to next
      setPage((prev) => Math.min(9, prev + 1));
    }
    if (touchStart - touchEnd < -50) {
      // Swiped right - go to previous
      setPage((prev) => Math.max(0, prev - 1));
    }
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="carousel-content">{/* Content */}</div>
      <PageControl
        variant="DEFAULT"
        pages={10}
        currentPosition={page}
        leftControl={{
          icon: 'chevron-left',
          onClick: () => setPage((prev) => prev - 1),
          disabled: page === 0,
          'aria-label': 'Previous',
        }}
        rightControl={{
          icon: 'chevron-right',
          onClick: () => setPage((prev) => prev + 1),
          disabled: page === 9,
          'aria-label': 'Next',
        }}
      />
    </div>
  );
}
```

### 7. Use Semantic HTML Structure

```tsx
// ✅ Good: Proper semantic structure
<nav aria-label="Carousel navigation">
  <PageControl
    variant="DEFAULT"
    pages={8}
    currentPosition={3}
    leftControl={{
      icon: 'chevron-left',
      onClick: handlePrevious,
      'aria-label': 'Previous slide',
    }}
    rightControl={{
      icon: 'chevron-right',
      onClick: handleNext,
      'aria-label': 'Next slide',
    }}
  />
</nav>
```

## Styling

### Custom CSS Classes

```tsx
<PageControl
  variant="DEFAULT"
  pages={10}
  currentPosition={5}
  additionalPageControlClasses={{
    page_control: 'my-page-control',
    dotscontainer: 'my-dots-container',
    pagedot: 'my-page-dot',
  }}
  additionalArrowControlClasses={{
    arrow_left: 'my-left-arrow',
    arrow_right: 'my-right-arrow',
  }}
  leftControl={leftControl}
  rightControl={rightControl}
/>
```

### Themed Variants

```tsx
// Light theme carousel
<PageControl
  variant="DEFAULT"
  arrowsControlVariant="DEFAULT"
  pages={10}
  currentPosition={3}
  leftControl={leftControl}
  rightControl={rightControl}
/>

// Custom branded variant
<PageControl
  variant="CUSTOM_BRAND"
  arrowsControlVariant="CUSTOM_ARROWS"
  pages={10}
  currentPosition={3}
  leftControl={leftControl}
  rightControl={rightControl}
/>
```

## Testing

### Unit Testing

```tsx
import { PageControl } from '@kubit/web-ui-components';
import { fireEvent, render, screen } from '@testing-library/react';

describe('PageControl', () => {
  it('renders correct number of dots', () => {
    render(<PageControl variant="DEFAULT" pages={5} currentPosition={0} />);

    const dots = screen.getAllByRole('presentation');
    expect(dots).toHaveLength(5);
  });

  it('calls onClick when arrow is clicked', () => {
    const handleLeftClick = jest.fn();
    const handleRightClick = jest.fn();

    render(
      <PageControl
        variant="DEFAULT"
        pages={5}
        currentPosition={2}
        leftControl={{
          icon: 'chevron-left',
          onClick: handleLeftClick,
          'aria-label': 'Previous',
        }}
        rightControl={{
          icon: 'chevron-right',
          onClick: handleRightClick,
          'aria-label': 'Next',
        }}
      />,
    );

    fireEvent.click(screen.getByLabelText('Previous'));
    expect(handleLeftClick).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByLabelText('Next'));
    expect(handleRightClick).toHaveBeenCalledTimes(1);
  });

  it('disables left arrow on first page', () => {
    render(
      <PageControl
        variant="DEFAULT"
        pages={5}
        currentPosition={0}
        leftControl={{
          icon: 'chevron-left',
          onClick: jest.fn(),
          disabled: true,
          'aria-label': 'Previous',
        }}
      />,
    );

    const leftButton = screen.getByLabelText('Previous');
    expect(leftButton).toBeDisabled();
  });

  it('shows ellipsis in bullet mode', () => {
    render(
      <PageControl
        variant="DEFAULT"
        pages={20}
        currentPosition={10}
        isBullet={true}
        maxDots={5}
      />,
    );

    // Should show 5 dots + 2 ellipsis indicators
    const dots = screen.getAllByRole('presentation');
    expect(dots.length).toBeGreaterThan(5);
  });
});
```

### Integration Testing

```tsx
import { useState } from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

function TestCarousel() {
  const [page, setPage] = useState(0);

  return (
    <>
      <div data-testid="content">Page {page + 1}</div>
      <PageControl
        variant="DEFAULT"
        pages={5}
        currentPosition={page}
        leftControl={{
          icon: 'chevron-left',
          onClick: () => setPage((prev) => prev - 1),
          disabled: page === 0,
          'aria-label': 'Previous',
        }}
        rightControl={{
          icon: 'chevron-right',
          onClick: () => setPage((prev) => prev + 1),
          disabled: page === 4,
          'aria-label': 'Next',
        }}
      />
    </>
  );
}

describe('Carousel Integration', () => {
  it('navigates through pages correctly', () => {
    render(<TestCarousel />);

    expect(screen.getByTestId('content')).toHaveTextContent('Page 1');

    fireEvent.click(screen.getByLabelText('Next'));
    expect(screen.getByTestId('content')).toHaveTextContent('Page 2');

    fireEvent.click(screen.getByLabelText('Next'));
    expect(screen.getByTestId('content')).toHaveTextContent('Page 3');

    fireEvent.click(screen.getByLabelText('Previous'));
    expect(screen.getByTestId('content')).toHaveTextContent('Page 2');
  });
});
```

### Accessibility Testing

```tsx
import { PageControl } from '@kubit/web-ui-components';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('PageControl Accessibility', () => {
  it('should not have accessibility violations', async () => {
    const { container } = render(
      <PageControl
        variant="DEFAULT"
        pages={5}
        currentPosition={2}
        leftControl={{
          icon: 'chevron-left',
          onClick: jest.fn(),
          'aria-label': 'Previous page',
        }}
        rightControl={{
          icon: 'chevron-right',
          onClick: jest.fn(),
          'aria-label': 'Next page',
        }}
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

## Performance Considerations

### Memoization

```tsx
import { useCallback, useMemo, useState } from 'react';

import { PageControl } from '@kubit/web-ui-components';

function OptimizedCarousel({ items }) {
  const [page, setPage] = useState(0);

  const handlePrevious = useCallback(() => {
    setPage((prev) => Math.max(0, prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setPage((prev) => Math.min(items.length - 1, prev + 1));
  }, [items.length]);

  const leftControl = useMemo(
    () => ({
      icon: 'chevron-left',
      onClick: handlePrevious,
      disabled: page === 0,
      'aria-label': 'Previous item',
    }),
    [handlePrevious, page],
  );

  const rightControl = useMemo(
    () => ({
      icon: 'chevron-right',
      onClick: handleNext,
      disabled: page === items.length - 1,
      'aria-label': 'Next item',
    }),
    [handleNext, page, items.length],
  );

  return (
    <PageControl
      variant="DEFAULT"
      pages={items.length}
      currentPosition={page}
      leftControl={leftControl}
      rightControl={rightControl}
    />
  );
}
```

### Lazy Loading

```tsx
function LazyImageGallery({ imageUrls }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0]));

  useEffect(() => {
    // Preload adjacent images
    const toLoad = [currentPage - 1, currentPage, currentPage + 1].filter(
      (idx) => idx >= 0 && idx < imageUrls.length,
    );

    setLoadedImages((prev) => new Set([...prev, ...toLoad]));
  }, [currentPage, imageUrls.length]);

  return (
    <>
      <div className="gallery">
        {loadedImages.has(currentPage) && (
          <img src={imageUrls[currentPage]} alt={`Image ${currentPage + 1}`} />
        )}
      </div>
      <PageControl
        variant="DEFAULT"
        pages={imageUrls.length}
        currentPosition={currentPage}
        leftControl={{
          icon: 'chevron-left',
          onClick: () => setCurrentPage((prev) => prev - 1),
          disabled: currentPage === 0,
          'aria-label': 'Previous image',
        }}
        rightControl={{
          icon: 'chevron-right',
          onClick: () => setCurrentPage((prev) => prev + 1),
          disabled: currentPage === imageUrls.length - 1,
          'aria-label': 'Next image',
        }}
      />
    </>
  );
}
```

## Related Components

- **Carousel**: Full carousel implementation with built-in PageControl
- **Slider**: Alternative navigation for continuous ranges
- **Tabs**: Tab navigation for content sections
- **Pagination**: Numbered page navigation for data tables
- **Button**: Used for custom arrow controls

## Browser Support

The PageControl component is compatible with:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Migration Guide

### From Previous Version

If migrating from an older version:

```tsx
// Old API
<PageControl
  totalPages={10}
  currentPage={5}
  onPreviousClick={handlePrev}
  onNextClick={handleNext}
/>

// New API
<PageControl
  variant="DEFAULT"
  pages={10}
  currentPosition={5}
  leftControl={{
    icon: 'chevron-left',
    onClick: handlePrev,
    'aria-label': 'Previous page',
  }}
  rightControl={{
    icon: 'chevron-right',
    onClick: handleNext,
    'aria-label': 'Next page',
  }}
/>
```

### Key Changes

1. **Renamed Props**: `totalPages` → `pages`, `currentPage` → `currentPosition`
2. **Control Configuration**: Separate `leftControl` and `rightControl` objects
3. **Variants**: Added variant system for styling flexibility
4. **Accessibility**: Required `aria-label` for controls

## Troubleshooting

### Dots Not Displaying Correctly

**Problem**: Dots don't match the current page position.

**Solution**: Ensure `currentPosition` is 0-indexed and within valid range (0 to pages-1).

```tsx
// ✅ Correct: 0-indexed position
<PageControl
  variant="DEFAULT"
  pages={5}
  currentPosition={0} // First page
/>

// ❌ Incorrect: 1-indexed position
<PageControl
  variant="DEFAULT"
  pages={5}
  currentPosition={1} // This would be the second page
/>
```

### Arrow Controls Not Working

**Problem**: Clicking arrows doesn't trigger navigation.

**Solution**: Verify onClick handlers are properly defined and page state updates.

```tsx
// ✅ Correct: Proper state management
const [page, setPage] = useState(0);

<PageControl
  variant="DEFAULT"
  pages={10}
  currentPosition={page}
  leftControl={{
    icon: 'chevron-left',
    onClick: () => setPage((prev) => prev - 1),
    'aria-label': 'Previous',
  }}
/>;
```

### Too Many Dots Displayed

**Problem**: Large number of pages creates too many dots.

**Solution**: Enable bullet mode and set appropriate `maxDots`.

```tsx
// ✅ Correct: Bullet mode for many pages
<PageControl
  variant="DEFAULT"
  pages={50}
  currentPosition={25}
  isBullet={true}
  maxDots={7}
  leftControl={leftControl}
  rightControl={rightControl}
/>
```

### Custom Icons Not Appearing

**Problem**: Custom icon names don't render.

**Solution**: Ensure icon names match your icon library's naming convention.

```tsx
// ✅ Correct: Valid icon name from your library
<PageControl
  variant="DEFAULT"
  pages={5}
  currentPosition={2}
  leftControl={{
    icon: 'chevron-left', // Must match icon library
    onClick: handlePrev,
    'aria-label': 'Previous',
  }}
/>
```

### Position Out of Sync

**Problem**: Visual position doesn't match actual content.

**Solution**: Synchronize page state changes with content updates.

```tsx
// ✅ Correct: Synchronized updates
function SyncedCarousel() {
  const [page, setPage] = useState(0);

  const handlePageChange = (newPage: number) => {
    // Update both UI and content simultaneously
    setPage(newPage);
  };

  return (
    <>
      <div>{content[page]}</div>
      <PageControl
        variant="DEFAULT"
        pages={content.length}
        currentPosition={page}
        leftControl={{
          icon: 'chevron-left',
          onClick: () => handlePageChange(page - 1),
          'aria-label': 'Previous',
        }}
        rightControl={{
          icon: 'chevron-right',
          onClick: () => handlePageChange(page + 1),
          'aria-label': 'Next',
        }}
      />
    </>
  );
}
```

## Additional Resources

- [WAI-ARIA Carousel Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/)
- [Accessible Carousels](https://www.w3.org/WAI/tutorials/carousels/)
- [Touch Gesture Guidelines](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events)

## Support

For bug reports, feature requests, or questions, please contact the development team or file an issue in the project repository.
