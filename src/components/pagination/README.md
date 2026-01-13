# Pagination Component

## Overview

The **Pagination** component provides a numbered navigation control for paginated content such as data tables, search results, or content lists. It displays page numbers with optional ellipsis for large page counts and includes previous/next navigation buttons. The component automatically adjusts the visible page numbers based on the maximum counters configuration.

## Features

- **Numbered Pages**: Display page numbers for direct navigation
- **Previous/Next Controls**: Arrow buttons for sequential navigation
- **Smart Ellipsis**: Automatically shows "..." for large page counts
- **Responsive Design**: Adjusts visible page numbers based on screen size
- **Active State**: Highlights the current active page
- **Disabled States**: Automatically disables buttons at boundaries
- **Accessibility**: Full keyboard navigation and ARIA support
- **Customizable Controls**: Custom icons for navigation buttons
- **Flexible Configuration**: Configurable maximum visible page numbers
- **Click Handlers**: Callback functions for page change events

## Installation

```bash
npm install @kubit/web-ui-components
```

## Usage

### Basic Usage

```tsx
import { useState } from 'react';

import { Pagination } from '@kubit/web-ui-components';

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (page: number) => () => {
    setCurrentPage(page);
  };

  return (
    <Pagination
      variant="DEFAULT"
      currentStep={currentPage}
      maxStepsNumber={10}
      maxCountersNumber={5}
      onStepClick={handlePageChange}
      paginationLeftButtonControl={{
        icon: 'chevron-left',
        ariaLabel: 'Previous page',
        onClick: () => setCurrentPage((prev) => Math.max(0, prev - 1)),
      }}
      paginationRightButtonControl={{
        icon: 'chevron-right',
        ariaLabel: 'Next page',
        onClick: () => setCurrentPage((prev) => Math.min(9, prev + 1)),
      }}
    />
  );
}
```

### With Data Table

```tsx
import { useState } from 'react';

import { Pagination } from '@kubit/web-ui-components';

function DataTable() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const totalItems = 247;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (page: number) => () => {
    setCurrentPage(page);
    // Fetch data for the new page
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <table>{/* Table content */}</table>

      <Pagination
        variant="DEFAULT"
        currentStep={currentPage}
        maxStepsNumber={totalPages}
        maxCountersNumber={7}
        onStepClick={handlePageClick}
        paginationLeftButtonControl={{
          icon: 'chevron-left',
          ariaLabel: 'Previous page',
          onClick: handlePrevious,
        }}
        paginationRightButtonControl={{
          icon: 'chevron-right',
          ariaLabel: 'Next page',
          onClick: handleNext,
        }}
      />
    </div>
  );
}
```

### Compact Mode (Mobile)

```tsx
import { useState } from 'react';

import { Pagination } from '@kubit/web-ui-components';

function MobilePagination() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 50;

  return (
    <Pagination
      variant="DEFAULT"
      currentStep={currentPage}
      maxStepsNumber={totalPages}
      maxCountersNumber={3} // Fewer counters for mobile
      onStepClick={(page) => () => setCurrentPage(page)}
      paginationLeftButtonControl={{
        icon: 'chevron-left',
        ariaLabel: 'Previous',
        onClick: () => setCurrentPage((prev) => Math.max(0, prev - 1)),
      }}
      paginationRightButtonControl={{
        icon: 'chevron-right',
        ariaLabel: 'Next',
        onClick: () =>
          setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1)),
      }}
    />
  );
}
```

### With Custom Icons

```tsx
import { useState } from 'react';

import { Pagination } from '@kubit/web-ui-components';

import { ChevronLeft, ChevronRight } from './icons';

function CustomPagination() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <Pagination
      variant="DEFAULT"
      currentStep={currentPage}
      maxStepsNumber={20}
      onStepClick={(page) => () => setCurrentPage(page)}
      paginationLeftButtonControl={{
        icon: <ChevronLeft />,
        ariaLabel: 'Go to previous page',
        onClick: () => setCurrentPage((prev) => prev - 1),
      }}
      paginationRightButtonControl={{
        icon: <ChevronRight />,
        ariaLabel: 'Go to next page',
        onClick: () => setCurrentPage((prev) => prev + 1),
      }}
    />
  );
}
```

## Props

### PaginationProps

| Prop                           | Type                                  | Required | Default        | Description                              |
| ------------------------------ | ------------------------------------- | -------- | -------------- | ---------------------------------------- |
| `variant`                      | `string`                              | No       | -              | Visual variant for styling               |
| `currentStep`                  | `number`                              | Yes      | -              | Current active page (0-indexed)          |
| `maxStepsNumber`               | `number`                              | Yes      | -              | Total number of pages                    |
| `maxCountersNumber`            | `number`                              | No       | `5`            | Maximum number of visible page counters  |
| `onStepClick`                  | `(step: number) => MouseEventHandler` | No       | -              | Callback when a page number is clicked   |
| `paginationLeftButtonControl`  | `PaginationButtonControlProps`        | No       | -              | Configuration for the previous button    |
| `paginationRightButtonControl` | `PaginationButtonControlProps`        | No       | -              | Configuration for the next button        |
| `additionalClasses`            | `Partial<PaginationCssClasses>`       | No       | -              | Additional CSS classes for customization |
| `data-testid`                  | `string`                              | No       | `'pagination'` | Test ID for component testing            |

### PaginationButtonControlProps

Configuration for navigation buttons (previous/next):

| Prop           | Type                    | Description                                 |
| -------------- | ----------------------- | ------------------------------------------- |
| `icon`         | `string \| JSX.Element` | Icon to display in the button               |
| `ariaLabel`    | `string`                | Accessible label for the button             |
| `ariaControls` | `string`                | ID of the element controlled by this button |
| `onClick`      | `MouseEventHandler`     | Click handler for the button                |

## Variants

### Available Variants

- **`DEFAULT`**: Standard pagination styling

## Accessibility

The Pagination component follows WAI-ARIA best practices for navigation:

### Keyboard Navigation

- **Tab**: Move focus between navigation controls and page numbers
- **Enter/Space**: Activate the focused page or control
- **Arrow Keys**: Navigate between focusable elements

### ARIA Attributes

```tsx
<Pagination
  variant="DEFAULT"
  currentStep={5}
  maxStepsNumber={20}
  onStepClick={handlePageClick}
  paginationLeftButtonControl={{
    icon: 'chevron-left',
    ariaLabel: 'Go to previous page',
    ariaControls: 'data-table',
    onClick: handlePrevious,
  }}
  paginationRightButtonControl={{
    icon: 'chevron-right',
    ariaLabel: 'Go to next page',
    ariaControls: 'data-table',
    onClick: handleNext,
  }}
  data-testid="table-pagination"
/>
```

### Screen Reader Support

- Each page number button is announced to screen readers
- Current page is marked with `data-state="SELECTED"`
- Disabled buttons are properly announced
- Arrow buttons have descriptive aria-labels
- Use `aria-controls` to associate pagination with content

### Focus Management

```tsx
function AccessibleTable() {
  const [currentPage, setCurrentPage] = useState(0);
  const tableRef = useRef<HTMLTableElement>(null);

  const handlePageChange = (page: number) => () => {
    setCurrentPage(page);
    // Return focus to table after page change
    tableRef.current?.focus();
  };

  return (
    <>
      <table
        ref={tableRef}
        id="data-table"
        tabIndex={-1}
        aria-live="polite"
        aria-atomic="true"
      >
        {/* Table content */}
      </table>

      <Pagination
        variant="DEFAULT"
        currentStep={currentPage}
        maxStepsNumber={15}
        onStepClick={handlePageChange}
        paginationLeftButtonControl={{
          icon: 'chevron-left',
          ariaLabel: `Previous page. Currently on page ${currentPage + 1}`,
          ariaControls: 'data-table',
          onClick: () => handlePageChange(currentPage - 1)(),
        }}
        paginationRightButtonControl={{
          icon: 'chevron-right',
          ariaLabel: `Next page. Currently on page ${currentPage + 1}`,
          ariaControls: 'data-table',
          onClick: () => handlePageChange(currentPage + 1)(),
        }}
      />
    </>
  );
}
```

## Common Use Cases

### Search Results Pagination

```tsx
import { useEffect, useState } from 'react';

import { Pagination } from '@kubit/web-ui-components';

function SearchResults({ query }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [results, setResults] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const resultsPerPage = 20;

  useEffect(() => {
    // Fetch search results
    fetchResults(query, currentPage).then((data) => {
      setResults(data.results);
      setTotalPages(Math.ceil(data.totalCount / resultsPerPage));
    });
  }, [query, currentPage]);

  const handlePageClick = (page: number) => () => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <div className="results">
        {results.map((result) => (
          <div key={result.id}>{result.title}</div>
        ))}
      </div>

      <Pagination
        variant="DEFAULT"
        currentStep={currentPage}
        maxStepsNumber={totalPages}
        maxCountersNumber={7}
        onStepClick={handlePageClick}
        paginationLeftButtonControl={{
          icon: 'chevron-left',
          ariaLabel: 'Previous results page',
          onClick: () => handlePageClick(Math.max(0, currentPage - 1))(),
        }}
        paginationRightButtonControl={{
          icon: 'chevron-right',
          ariaLabel: 'Next results page',
          onClick: () =>
            handlePageClick(Math.min(totalPages - 1, currentPage + 1))(),
        }}
      />
    </div>
  );
}
```

### Blog Post List

```tsx
import { useState } from 'react';

import { Pagination } from '@kubit/web-ui-components';

function BlogPostList({ posts }) {
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 5;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const currentPosts = posts.slice(
    currentPage * postsPerPage,
    (currentPage + 1) * postsPerPage,
  );

  return (
    <div className="blog-container">
      <div className="posts">
        {currentPosts.map((post) => (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
          </article>
        ))}
      </div>

      <Pagination
        variant="DEFAULT"
        currentStep={currentPage}
        maxStepsNumber={totalPages}
        maxCountersNumber={5}
        onStepClick={(page) => () => setCurrentPage(page)}
        paginationLeftButtonControl={{
          icon: 'chevron-left',
          ariaLabel: 'Previous posts',
          onClick: () => setCurrentPage((prev) => Math.max(0, prev - 1)),
        }}
        paginationRightButtonControl={{
          icon: 'chevron-right',
          ariaLabel: 'Next posts',
          onClick: () =>
            setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1)),
        }}
      />
    </div>
  );
}
```

### Product Catalog

```tsx
import { useEffect, useState } from 'react';

import { Pagination } from '@kubit/web-ui-components';

function ProductCatalog({ category }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const productsPerPage = 12;

  useEffect(() => {
    fetchProducts(category, currentPage, productsPerPage).then((data) => {
      setProducts(data.products);
      setTotalProducts(data.total);
    });
  }, [category, currentPage]);

  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const handlePageClick = (page: number) => () => {
    setCurrentPage(page);
    // Scroll to top of product grid
    document
      .getElementById('product-grid')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div id="product-grid" className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>

      <div className="pagination-wrapper">
        <p>
          Showing {currentPage * productsPerPage + 1} -{' '}
          {Math.min((currentPage + 1) * productsPerPage, totalProducts)} of{' '}
          {totalProducts} products
        </p>

        <Pagination
          variant="DEFAULT"
          currentStep={currentPage}
          maxStepsNumber={totalPages}
          maxCountersNumber={7}
          onStepClick={handlePageClick}
          paginationLeftButtonControl={{
            icon: 'chevron-left',
            ariaLabel: 'Previous products page',
            onClick: () => handlePageClick(Math.max(0, currentPage - 1))(),
          }}
          paginationRightButtonControl={{
            icon: 'chevron-right',
            ariaLabel: 'Next products page',
            onClick: () =>
              handlePageClick(Math.min(totalPages - 1, currentPage + 1))(),
          }}
        />
      </div>
    </div>
  );
}
```

### API Data with Loading State

```tsx
import { useEffect, useState } from 'react';

import { Pagination } from '@kubit/web-ui-components';

function DataList() {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    fetchData(currentPage)
      .then((response) => {
        setData(response.data);
        setTotalPages(response.totalPages);
      })
      .finally(() => setIsLoading(false));
  }, [currentPage]);

  const handlePageClick = (page: number) => () => {
    setCurrentPage(page);
  };

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="data-list">
          {data.map((item) => (
            <div key={item.id}>{item.content}</div>
          ))}
        </div>
      )}

      <Pagination
        variant="DEFAULT"
        currentStep={currentPage}
        maxStepsNumber={totalPages}
        onStepClick={handlePageClick}
        paginationLeftButtonControl={{
          icon: 'chevron-left',
          ariaLabel: 'Previous page',
          onClick: () =>
            !isLoading && handlePageClick(Math.max(0, currentPage - 1))(),
        }}
        paginationRightButtonControl={{
          icon: 'chevron-right',
          ariaLabel: 'Next page',
          onClick: () =>
            !isLoading &&
            handlePageClick(Math.min(totalPages - 1, currentPage + 1))(),
        }}
      />
    </div>
  );
}
```

### Image Gallery with Pagination

```tsx
import { useState } from 'react';

import { Pagination } from '@kubit/web-ui-components';

function ImageGallery({ images }) {
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 9;
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const currentImages = images.slice(
    currentPage * imagesPerPage,
    (currentPage + 1) * imagesPerPage,
  );

  return (
    <div className="gallery">
      <div className="image-grid">
        {currentImages.map((image) => (
          <div key={image.id} className="image-item">
            <img src={image.url} alt={image.alt} />
          </div>
        ))}
      </div>

      <Pagination
        variant="DEFAULT"
        currentStep={currentPage}
        maxStepsNumber={totalPages}
        maxCountersNumber={5}
        onStepClick={(page) => () => setCurrentPage(page)}
        paginationLeftButtonControl={{
          icon: 'chevron-left',
          ariaLabel: 'Previous gallery page',
          onClick: () => setCurrentPage((prev) => Math.max(0, prev - 1)),
        }}
        paginationRightButtonControl={{
          icon: 'chevron-right',
          ariaLabel: 'Next gallery page',
          onClick: () =>
            setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1)),
        }}
      />
    </div>
  );
}
```

### With URL Sync

```tsx
import { useEffect, useState } from 'react';

import { Pagination } from '@kubit/web-ui-components';
import { useRouter } from 'next/router';

function PaginatedContent() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 30;

  // Sync with URL on mount
  useEffect(() => {
    const page = parseInt(router.query.page as string) || 1;
    setCurrentPage(page - 1);
  }, [router.query.page]);

  const handlePageClick = (page: number) => () => {
    setCurrentPage(page);
    // Update URL
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page: page + 1 },
    });
  };

  return (
    <div>
      <div className="content">{/* Content for current page */}</div>

      <Pagination
        variant="DEFAULT"
        currentStep={currentPage}
        maxStepsNumber={totalPages}
        onStepClick={handlePageClick}
        paginationLeftButtonControl={{
          icon: 'chevron-left',
          ariaLabel: 'Previous page',
          onClick: () => handlePageClick(Math.max(0, currentPage - 1))(),
        }}
        paginationRightButtonControl={{
          icon: 'chevron-right',
          ariaLabel: 'Next page',
          onClick: () =>
            handlePageClick(Math.min(totalPages - 1, currentPage + 1))(),
        }}
      />
    </div>
  );
}
```

## Best Practices

### 1. Provide Clear Navigation Labels

```tsx
// ✅ Good: Descriptive ARIA labels
<Pagination
  variant="DEFAULT"
  currentStep={currentPage}
  maxStepsNumber={20}
  onStepClick={handlePageClick}
  paginationLeftButtonControl={{
    icon: 'chevron-left',
    ariaLabel: `Previous page. Currently on page ${currentPage + 1} of ${20}`,
    onClick: handlePrevious,
  }}
  paginationRightButtonControl={{
    icon: 'chevron-right',
    ariaLabel: `Next page. Currently on page ${currentPage + 1} of ${20}`,
    onClick: handleNext,
  }}
/>

// ❌ Bad: No accessibility labels
<Pagination
  variant="DEFAULT"
  currentStep={currentPage}
  maxStepsNumber={20}
  paginationLeftButtonControl={{ icon: 'chevron-left', onClick: handlePrevious }}
  paginationRightButtonControl={{ icon: 'chevron-right', onClick: handleNext }}
/>
```

### 2. Handle Boundary Conditions

```tsx
// ✅ Good: Proper boundary handling
const handlePrevious = () => {
  if (currentPage > 0) {
    setCurrentPage(currentPage - 1);
  }
};

const handleNext = () => {
  if (currentPage < totalPages - 1) {
    setCurrentPage(currentPage + 1);
  }
};

// ❌ Bad: No boundary checks
const handlePrevious = () => {
  setCurrentPage(currentPage - 1); // Could go negative
};
```

### 3. Adjust for Mobile Devices

```tsx
// ✅ Good: Responsive max counters
const isMobile = useMediaQuery('(max-width: 768px)');

<Pagination
  variant="DEFAULT"
  currentStep={currentPage}
  maxStepsNumber={50}
  maxCountersNumber={isMobile ? 3 : 7}
  onStepClick={handlePageClick}
  paginationLeftButtonControl={leftControl}
  paginationRightButtonControl={rightControl}
/>;
```

### 4. Scroll to Top on Page Change

```tsx
// ✅ Good: Smooth scroll to content
const handlePageClick = (page: number) => () => {
  setCurrentPage(page);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // Or scroll to specific element
  document
    .getElementById('content-top')
    ?.scrollIntoView({ behavior: 'smooth' });
};
```

### 5. Show Context Information

```tsx
// ✅ Good: Display page information
<div className="pagination-info">
  <p>
    Showing {startItem} - {endItem} of {totalItems} items
  </p>
  <Pagination
    variant="DEFAULT"
    currentStep={currentPage}
    maxStepsNumber={totalPages}
    onStepClick={handlePageClick}
    paginationLeftButtonControl={leftControl}
    paginationRightButtonControl={rightControl}
  />
</div>
```

### 6. Handle Loading States

```tsx
// ✅ Good: Disable during loading
const [isLoading, setIsLoading] = useState(false);

const handlePageClick = (page: number) => () => {
  if (isLoading) return;

  setIsLoading(true);
  setCurrentPage(page);
  fetchData(page).finally(() => setIsLoading(false));
};

<Pagination
  variant="DEFAULT"
  currentStep={currentPage}
  maxStepsNumber={totalPages}
  onStepClick={handlePageClick}
  paginationLeftButtonControl={{
    icon: 'chevron-left',
    ariaLabel: 'Previous page',
    onClick: () => !isLoading && handlePrevious(),
  }}
  paginationRightButtonControl={{
    icon: 'chevron-right',
    ariaLabel: 'Next page',
    onClick: () => !isLoading && handleNext(),
  }}
/>;
```

### 7. Preserve Filter State

```tsx
// ✅ Good: Maintain filters across pages
function FilteredList() {
  const [currentPage, setCurrentPage] = useState(0);
  const [filters, setFilters] = useState({});

  const handlePageClick = (page: number) => () => {
    setCurrentPage(page);
    fetchData(page, filters); // Include filters
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(0); // Reset to first page on filter change
    fetchData(0, newFilters);
  };

  return (
    <>
      <Filters onChange={handleFilterChange} />
      <Content data={data} />
      <Pagination
        variant="DEFAULT"
        currentStep={currentPage}
        maxStepsNumber={totalPages}
        onStepClick={handlePageClick}
        paginationLeftButtonControl={leftControl}
        paginationRightButtonControl={rightControl}
      />
    </>
  );
}
```

## Styling

### Custom CSS Classes

```tsx
<Pagination
  variant="DEFAULT"
  currentStep={5}
  maxStepsNumber={20}
  additionalClasses={{
    pagination: 'my-pagination',
    pagescontainer: 'my-pages-container',
    pagecontainer: 'my-page-button',
    page: 'my-page-text',
    paginationleftarrowicon: 'my-left-arrow',
    paginationrightarrowicon: 'my-right-arrow',
  }}
  onStepClick={handlePageClick}
  paginationLeftButtonControl={leftControl}
  paginationRightButtonControl={rightControl}
/>
```

### Custom Styles Example

```css
.my-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 20px;
}

.my-page-button {
  min-width: 40px;
  height: 40px;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.my-page-button:hover {
  background-color: #f0f0f0;
  transform: scale(1.05);
}

.my-page-button[data-state='SELECTED'] {
  background-color: #007bff;
  color: white;
  font-weight: bold;
}
```

## Testing

### Unit Testing

```tsx
import { Pagination } from '@kubit/web-ui-components';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Pagination', () => {
  const mockOnStepClick = jest.fn((step) => () => {});
  const mockLeftClick = jest.fn();
  const mockRightClick = jest.fn();

  const defaultProps = {
    variant: 'DEFAULT',
    currentStep: 0,
    maxStepsNumber: 10,
    maxCountersNumber: 5,
    onStepClick: mockOnStepClick,
    paginationLeftButtonControl: {
      icon: 'chevron-left',
      ariaLabel: 'Previous',
      onClick: mockLeftClick,
    },
    paginationRightButtonControl: {
      icon: 'chevron-right',
      ariaLabel: 'Next',
      onClick: mockRightClick,
    },
  };

  it('renders correct number of page buttons', () => {
    render(<Pagination {...defaultProps} />);

    const pageButtons = screen
      .getAllByRole('button')
      .filter((btn) => !btn.hasAttribute('aria-label'));
    expect(pageButtons.length).toBeGreaterThan(0);
  });

  it('calls onStepClick when page number is clicked', () => {
    render(<Pagination {...defaultProps} currentStep={2} />);

    const pageButton = screen.getByText('5');
    fireEvent.click(pageButton);

    expect(mockOnStepClick).toHaveBeenCalledWith(4);
  });

  it('calls onClick for previous button', () => {
    render(<Pagination {...defaultProps} currentStep={5} />);

    const prevButton = screen.getByLabelText('Previous');
    fireEvent.click(prevButton);

    expect(mockLeftClick).toHaveBeenCalled();
  });

  it('calls onClick for next button', () => {
    render(<Pagination {...defaultProps} currentStep={5} />);

    const nextButton = screen.getByLabelText('Next');
    fireEvent.click(nextButton);

    expect(mockRightClick).toHaveBeenCalled();
  });

  it('displays ellipsis for large page counts', () => {
    render(
      <Pagination
        {...defaultProps}
        currentStep={15}
        maxStepsNumber={50}
        maxCountersNumber={5}
      />,
    );

    expect(screen.getByText('...')).toBeInTheDocument();
  });

  it('highlights current page', () => {
    render(<Pagination {...defaultProps} currentStep={3} />);

    const currentPage = screen.getByText('4');
    expect(currentPage.closest('span')).toHaveAttribute(
      'data-state',
      'SELECTED',
    );
  });
});
```

### Integration Testing

```tsx
import { useState } from 'react';

import { Pagination } from '@kubit/web-ui-components';
import { fireEvent, render, screen } from '@testing-library/react';

function TestPagination() {
  const [page, setPage] = useState(0);

  return (
    <>
      <div data-testid="current-page">Page {page + 1}</div>
      <Pagination
        variant="DEFAULT"
        currentStep={page}
        maxStepsNumber={10}
        onStepClick={(p) => () => setPage(p)}
        paginationLeftButtonControl={{
          icon: 'chevron-left',
          ariaLabel: 'Previous',
          onClick: () => setPage((prev) => Math.max(0, prev - 1)),
        }}
        paginationRightButtonControl={{
          icon: 'chevron-right',
          ariaLabel: 'Next',
          onClick: () => setPage((prev) => Math.min(9, prev + 1)),
        }}
      />
    </>
  );
}

describe('Pagination Integration', () => {
  it('updates page when number is clicked', () => {
    render(<TestPagination />);

    expect(screen.getByTestId('current-page')).toHaveTextContent('Page 1');

    fireEvent.click(screen.getByText('5'));
    expect(screen.getByTestId('current-page')).toHaveTextContent('Page 5');
  });

  it('navigates with arrow buttons', () => {
    render(<TestPagination />);

    const nextButton = screen.getByLabelText('Next');

    fireEvent.click(nextButton);
    expect(screen.getByTestId('current-page')).toHaveTextContent('Page 2');

    fireEvent.click(nextButton);
    expect(screen.getByTestId('current-page')).toHaveTextContent('Page 3');

    const prevButton = screen.getByLabelText('Previous');
    fireEvent.click(prevButton);
    expect(screen.getByTestId('current-page')).toHaveTextContent('Page 2');
  });
});
```

### Accessibility Testing

```tsx
import { Pagination } from '@kubit/web-ui-components';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Pagination Accessibility', () => {
  it('should not have accessibility violations', async () => {
    const { container } = render(
      <Pagination
        variant="DEFAULT"
        currentStep={5}
        maxStepsNumber={20}
        onStepClick={(step) => () => {}}
        paginationLeftButtonControl={{
          icon: 'chevron-left',
          ariaLabel: 'Go to previous page',
          onClick: () => {},
        }}
        paginationRightButtonControl={{
          icon: 'chevron-right',
          ariaLabel: 'Go to next page',
          onClick: () => {},
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

import { Pagination } from '@kubit/web-ui-components';

function OptimizedPagination() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 100;

  const handleStepClick = useCallback(
    (step: number) => () => {
      setCurrentPage(step);
    },
    [],
  );

  const handlePrevious = useCallback(() => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  }, [totalPages]);

  const leftControl = useMemo(
    () => ({
      icon: 'chevron-left',
      ariaLabel: 'Previous page',
      onClick: handlePrevious,
    }),
    [handlePrevious],
  );

  const rightControl = useMemo(
    () => ({
      icon: 'chevron-right',
      ariaLabel: 'Next page',
      onClick: handleNext,
    }),
    [handleNext],
  );

  return (
    <Pagination
      variant="DEFAULT"
      currentStep={currentPage}
      maxStepsNumber={totalPages}
      onStepClick={handleStepClick}
      paginationLeftButtonControl={leftControl}
      paginationRightButtonControl={rightControl}
    />
  );
}
```

### Virtual Scrolling with Pagination

```tsx
import { useEffect, useState } from 'react';

import { Pagination } from '@kubit/web-ui-components';

function VirtualScrollPagination() {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  const itemsPerPage = 50;

  useEffect(() => {
    // Only load data for current page
    fetchPageData(currentPage, itemsPerPage).then(setData);
  }, [currentPage]);

  return (
    <>
      <VirtualList items={data} />
      <Pagination
        variant="DEFAULT"
        currentStep={currentPage}
        maxStepsNumber={100}
        onStepClick={(page) => () => setCurrentPage(page)}
        paginationLeftButtonControl={{
          icon: 'chevron-left',
          ariaLabel: 'Previous',
          onClick: () => setCurrentPage((prev) => prev - 1),
        }}
        paginationRightButtonControl={{
          icon: 'chevron-right',
          ariaLabel: 'Next',
          onClick: () => setCurrentPage((prev) => prev + 1),
        }}
      />
    </>
  );
}
```

## Related Components

- **PageControl**: Dot-based navigation for carousels
- **Table**: Data tables with built-in pagination support
- **DataTable**: Advanced tables with sorting and pagination
- **Button**: Used for navigation controls

## Browser Support

The Pagination component is compatible with:

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
<Pagination
  page={5}
  totalPages={20}
  onPageChange={handleChange}
/>

// New API
<Pagination
  variant="DEFAULT"
  currentStep={4} // 0-indexed
  maxStepsNumber={20}
  onStepClick={(step) => () => handleChange(step + 1)}
  paginationLeftButtonControl={{
    icon: 'chevron-left',
    ariaLabel: 'Previous page',
    onClick: handlePrevious,
  }}
  paginationRightButtonControl={{
    icon: 'chevron-right',
    ariaLabel: 'Next page',
    onClick: handleNext,
  }}
/>
```

### Key Changes

1. **Zero-indexed**: `currentStep` is 0-indexed (page 1 = step 0)
2. **Button Controls**: Separate configuration for left/right buttons
3. **Callback Signature**: `onStepClick` returns a function
4. **Variants**: Added variant system for styling
5. **Accessibility**: Required aria-labels for controls

## Troubleshooting

### Page Numbers Not Displaying

**Problem**: No page numbers visible.

**Solution**: Ensure `maxStepsNumber` is greater than 0.

```tsx
// ✅ Correct
<Pagination
  variant="DEFAULT"
  currentStep={0}
  maxStepsNumber={10}
  onStepClick={handleClick}
/>

// ❌ Incorrect
<Pagination
  variant="DEFAULT"
  currentStep={0}
  maxStepsNumber={0}
/>
```

### Current Page Not Highlighting

**Problem**: Active page isn't highlighted.

**Solution**: Verify `currentStep` matches the actual page (remember it's 0-indexed).

```tsx
// ✅ Correct: Page 1 = step 0
<Pagination
  variant="DEFAULT"
  currentStep={0}
  maxStepsNumber={10}
/>

// ❌ Incorrect: Page 1 ≠ step 1
<Pagination
  variant="DEFAULT"
  currentStep={1}
  maxStepsNumber={10}
/>
```

### Buttons Not Working

**Problem**: Clicking page numbers or arrows doesn't work.

**Solution**: Ensure callbacks are properly defined.

```tsx
// ✅ Correct
<Pagination
  variant="DEFAULT"
  currentStep={page}
  maxStepsNumber={10}
  onStepClick={(step) => () => setPage(step)}
  paginationLeftButtonControl={{
    icon: 'chevron-left',
    ariaLabel: 'Previous',
    onClick: () => setPage((prev) => prev - 1),
  }}
/>
```

### Too Many Page Numbers

**Problem**: Pagination shows too many page numbers on mobile.

**Solution**: Adjust `maxCountersNumber` for smaller screens.

```tsx
// ✅ Correct: Responsive max counters
const maxCounters = isMobile ? 3 : 7;

<Pagination
  variant="DEFAULT"
  currentStep={page}
  maxStepsNumber={50}
  maxCountersNumber={maxCounters}
/>;
```

## Additional Resources

- [WAI-ARIA Navigation Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/navigation/)
- [Pagination Best Practices](https://www.nngroup.com/articles/pagination-ux/)
- [Accessible Pagination](https://a11y-101.com/design/pagination)

## Support

For bug reports, feature requests, or questions, please contact the development team or file an issue in the project repository.
