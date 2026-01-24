import { useState } from 'react';

import { Pagination as PaginationComponent } from '@kubit-ui-web/react-components';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { ICONS } from '@/stories/assets/icons/icons';

import type { PaginationButtonControlProps } from '../types/pagination';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: PaginationComponent,
  tags: ['navigation', 'pagination'],
  title: 'Components/Navigation/Pagination',
} satisfies Meta<typeof PaginationComponent>;

export default meta;

type StoryType = StoryObj<typeof meta>;

const commonArgs = {
  variant: 'DEFAULT',
};

// Basic pagination with 10 pages
export const Basic: StoryType = {
  args: {
    ...commonArgs,
  },
  parameters: {
    docs: {
      source: {
        code: `const [currentPage, setCurrentPage] = useState(0);
const totalPages = 10;

const handleStepClick = (step: number) => () => {
  setCurrentPage(step);
};

<Pagination
  variant="DEFAULT"
  currentStep={currentPage}
  maxStepsNumber={totalPages}
  maxCountersNumber={5}
  onStepClick={handleStepClick}
  paginationLeftButtonControl={{
    ariaLabel: 'Previous page',
    icon: 'chevron-left',
    onClick: () => setCurrentPage((prev) => Math.max(0, prev - 1)),
  }}
  paginationRightButtonControl={{
    ariaLabel: 'Next page',
    icon: 'chevron-right',
    onClick: () => setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1)),
  }}
/>`,
      },
    },
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = 10;

    const handleStepClick = (step: number) => () => {
      setCurrentPage(step);
    };

    const leftControl: PaginationButtonControlProps = {
      ariaLabel: 'Previous page',
      icon: ICONS.CHEVRON_LEFT,
      onClick: () => setCurrentPage((prev) => Math.max(0, prev - 1)),
    };

    const rightControl: PaginationButtonControlProps = {
      ariaLabel: 'Next page',
      icon: ICONS.CHEVRON_RIGHT,
      onClick: () =>
        setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1)),
    };

    return (
      <div
        style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}
      >
        <PaginationComponent
          {...args}
          currentStep={currentPage}
          maxCountersNumber={5}
          maxStepsNumber={totalPages}
          paginationLeftButtonControl={leftControl}
          paginationRightButtonControl={rightControl}
          onStepClick={handleStepClick}
        />
      </div>
    );
  },
};

// Pagination with many pages
export const ManyPages: StoryType = {
  args: {
    ...commonArgs,
  },
  parameters: {
    docs: {
      source: {
        code: `const [currentPage, setCurrentPage] = useState(0);
const totalPages = 50;

<Pagination
  variant="DEFAULT"
  currentStep={currentPage}
  maxStepsNumber={totalPages}
  maxCountersNumber={7}
  onStepClick={(step) => () => setCurrentPage(step)}
  paginationLeftButtonControl={{
    ariaLabel: 'Go to previous page',
    icon: 'chevron-left',
    onClick: () => setCurrentPage((prev) => prev - 1),
  }}
  paginationRightButtonControl={{
    ariaLabel: 'Go to next page',
    icon: 'chevron-right',
    onClick: () => setCurrentPage((prev) => prev + 1),
  }}
/>`,
      },
    },
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = 50;

    const handleStepClick = (step: number) => () => {
      setCurrentPage(step);
    };

    const leftControl: PaginationButtonControlProps = {
      ariaLabel: 'Go to previous page',
      icon: ICONS.CHEVRON_LEFT,
      onClick: () => setCurrentPage((prev) => prev - 1),
    };

    const rightControl: PaginationButtonControlProps = {
      ariaLabel: 'Go to next page',
      icon: ICONS.CHEVRON_RIGHT,
      onClick: () => setCurrentPage((prev) => prev + 1),
    };

    return (
      <div
        style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}
      >
        <PaginationComponent
          {...args}
          currentStep={currentPage}
          maxCountersNumber={7}
          maxStepsNumber={totalPages}
          paginationLeftButtonControl={leftControl}
          paginationRightButtonControl={rightControl}
          onStepClick={handleStepClick}
        />
      </div>
    );
  },
};

// Compact mode for mobile
export const CompactMode: StoryType = {
  args: {
    ...commonArgs,
  },
  parameters: {
    docs: {
      source: {
        code: `// Compact mode with fewer counters for mobile
const [currentPage, setCurrentPage] = useState(5);

<Pagination
  variant="DEFAULT"
  currentStep={currentPage}
  maxStepsNumber={20}
  maxCountersNumber={3}
  onStepClick={(step) => () => setCurrentPage(step)}
  paginationLeftButtonControl={{
    ariaLabel: 'Previous',
    icon: 'chevron-left',
    onClick: () => setCurrentPage((prev) => Math.max(0, prev - 1)),
  }}
  paginationRightButtonControl={{
    ariaLabel: 'Next',
    icon: 'chevron-right',
    onClick: () => setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1)),
  }}
/>`,
      },
    },
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(5);
    const totalPages = 20;

    const handleStepClick = (step: number) => () => {
      setCurrentPage(step);
    };

    const leftControl: PaginationButtonControlProps = {
      ariaLabel: 'Previous',
      icon: ICONS.CHEVRON_LEFT,
      onClick: () => setCurrentPage((prev) => Math.max(0, prev - 1)),
    };

    const rightControl: PaginationButtonControlProps = {
      ariaLabel: 'Next',
      icon: ICONS.CHEVRON_RIGHT,
      onClick: () =>
        setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1)),
    };

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          maxWidth: '320px',
          padding: '20px',
        }}
      >
        <PaginationComponent
          {...args}
          currentStep={currentPage}
          maxCountersNumber={3}
          maxStepsNumber={totalPages}
          paginationLeftButtonControl={leftControl}
          paginationRightButtonControl={rightControl}
          onStepClick={handleStepClick}
        />
      </div>
    );
  },
};

// Few pages (no ellipsis)
export const FewPages: StoryType = {
  args: {
    ...commonArgs,
  },
  parameters: {
    docs: {
      source: {
        code: `const [currentPage, setCurrentPage] = useState(1);
const totalPages = 5;

<Pagination
  variant="DEFAULT"
  currentStep={currentPage}
  maxStepsNumber={totalPages}
  maxCountersNumber={5}
  onStepClick={(step) => () => setCurrentPage(step)}
  paginationLeftButtonControl={{
    ariaLabel: 'Previous page',
    icon: 'chevron-left',
    onClick: () => setCurrentPage((prev) => prev - 1),
  }}
  paginationRightButtonControl={{
    ariaLabel: 'Next page',
    icon: 'chevron-right',
    onClick: () => setCurrentPage((prev) => prev + 1),
  }}
/>`,
      },
    },
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;

    const handleStepClick = (step: number) => () => {
      setCurrentPage(step);
    };

    const leftControl: PaginationButtonControlProps = {
      ariaLabel: 'Previous page',
      icon: ICONS.CHEVRON_LEFT,
      onClick: () => setCurrentPage((prev) => prev - 1),
    };

    const rightControl: PaginationButtonControlProps = {
      ariaLabel: 'Next page',
      icon: ICONS.CHEVRON_RIGHT,
      onClick: () => setCurrentPage((prev) => prev + 1),
    };

    return (
      <div
        style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}
      >
        <PaginationComponent
          {...args}
          currentStep={currentPage}
          maxCountersNumber={5}
          maxStepsNumber={totalPages}
          paginationLeftButtonControl={leftControl}
          paginationRightButtonControl={rightControl}
          onStepClick={handleStepClick}
        />
      </div>
    );
  },
};

// Data table simulation
export const WithDataTable: StoryType = {
  args: {
    ...commonArgs,
  },
  parameters: {
    docs: {
      source: {
        code: `const [currentPage, setCurrentPage] = useState(0);
const itemsPerPage = 10;
const totalItems = 247;
const totalPages = Math.ceil(totalItems / itemsPerPage);

const startItem = currentPage * itemsPerPage + 1;
const endItem = Math.min((currentPage + 1) * itemsPerPage, totalItems);

<div>
  <table id="data-table">
    <caption>Showing {startItem} - {endItem} of {totalItems} results</caption>
    {/* Table content */}
  </table>

  <Pagination
    variant="DEFAULT"
    currentStep={currentPage}
    maxStepsNumber={totalPages}
    maxCountersNumber={7}
    onStepClick={(step) => () => setCurrentPage(step)}
    paginationLeftButtonControl={{
      ariaLabel: 'Previous page of results',
      ariaControls: 'data-table',
      icon: 'chevron-left',
      onClick: () => setCurrentPage((prev) => Math.max(0, prev - 1)),
    }}
    paginationRightButtonControl={{
      ariaLabel: 'Next page of results',
      ariaControls: 'data-table',
      icon: 'chevron-right',
      onClick: () => setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1)),
    }}
  />
</div>`,
      },
    },
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;
    const totalItems = 247;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handleStepClick = (step: number) => () => {
      setCurrentPage(step);
    };

    const leftControl: PaginationButtonControlProps = {
      ariaControls: 'data-table',
      ariaLabel: 'Previous page of results',
      icon: ICONS.CHEVRON_LEFT,
      onClick: () => setCurrentPage((prev) => Math.max(0, prev - 1)),
    };

    const rightControl: PaginationButtonControlProps = {
      ariaControls: 'data-table',
      ariaLabel: 'Next page of results',
      icon: ICONS.CHEVRON_RIGHT,
      onClick: () =>
        setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1)),
    };

    const startItem = currentPage * itemsPerPage + 1;
    const endItem = Math.min((currentPage + 1) * itemsPerPage, totalItems);

    return (
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          padding: '20px',
        }}
      >
        <div
          id="data-table"
          style={{
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            padding: '20px',
            textAlign: 'center',
            width: '600px',
          }}
        >
          <h3>Data Table</h3>
          <p style={{ color: '#666', marginTop: '10px' }}>
            Showing {startItem} - {endItem} of {totalItems} results
          </p>
          <div style={{ color: '#999', marginTop: '20px' }}>
            [Table content for page {currentPage + 1}]
          </div>
        </div>
        <PaginationComponent
          {...args}
          currentStep={currentPage}
          maxCountersNumber={7}
          maxStepsNumber={totalPages}
          paginationLeftButtonControl={leftControl}
          paginationRightButtonControl={rightControl}
          onStepClick={handleStepClick}
        />
      </div>
    );
  },
};

// Search results pagination
export const SearchResults: StoryType = {
  args: {
    ...commonArgs,
  },
  parameters: {
    docs: {
      source: {
        code: `const [currentPage, setCurrentPage] = useState(0);
const resultsPerPage = 20;
const totalResults = 156;
const totalPages = Math.ceil(totalResults / resultsPerPage);

const handlePageChange = (page: number) => () => {
  setCurrentPage(page);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

<div>
  <h3>Search Results</h3>
  <div className="results">
    {/* Render search results */}
  </div>

  <Pagination
    variant="DEFAULT"
    currentStep={currentPage}
    maxStepsNumber={totalPages}
    maxCountersNumber={7}
    onStepClick={handlePageChange}
    paginationLeftButtonControl={{
      ariaLabel: 'Previous search results',
      icon: 'chevron-left',
      onClick: () => setCurrentPage((prev) => Math.max(0, prev - 1)),
    }}
    paginationRightButtonControl={{
      ariaLabel: 'Next search results',
      icon: 'chevron-right',
      onClick: () => setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1)),
    }}
  />
</div>`,
      },
    },
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(0);
    const resultsPerPage = 20;
    const totalResults = 156;
    const totalPages = Math.ceil(totalResults / resultsPerPage);

    const handleStepClick = (step: number) => () => {
      setCurrentPage(step);
      // Scroll to top on page change
      window.scrollTo({ behavior: 'smooth', top: 0 });
    };

    const leftControl: PaginationButtonControlProps = {
      ariaLabel: 'Previous search results',
      icon: ICONS.CHEVRON_LEFT,
      onClick: () => {
        const newPage = Math.max(0, currentPage - 1);
        setCurrentPage(newPage);
      },
    };

    const rightControl: PaginationButtonControlProps = {
      ariaLabel: 'Next search results',
      icon: ICONS.CHEVRON_RIGHT,
      onClick: () => {
        const newPage = Math.min(totalPages - 1, currentPage + 1);
        setCurrentPage(newPage);
      },
    };

    return (
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
          padding: '20px',
        }}
      >
        <div style={{ width: '700px' }}>
          <h3>Search Results for "React Components"</h3>
          <p style={{ color: '#666', marginBottom: '20px' }}>
            About {totalResults} results
          </p>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
          >
            {Array.from({
              length: Math.min(
                resultsPerPage,
                totalResults - currentPage * resultsPerPage,
              ),
            }).map((_, idx) => {
              const itemId = currentPage * resultsPerPage + idx + 1;
              return (
                <div
                  key={itemId}
                  style={{
                    backgroundColor: '#f9f9f9',
                    borderRadius: '6px',
                    padding: '15px',
                  }}
                >
                  <h4 style={{ color: '#007bff', marginBottom: '5px' }}>
                    Result {itemId}
                  </h4>
                  <p style={{ color: '#666', fontSize: '14px' }}>
                    This is a search result item description...
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <PaginationComponent
          {...args}
          currentStep={currentPage}
          maxCountersNumber={7}
          maxStepsNumber={totalPages}
          paginationLeftButtonControl={leftControl}
          paginationRightButtonControl={rightControl}
          onStepClick={handleStepClick}
        />
      </div>
    );
  },
};

// Blog posts pagination
export const BlogPosts: StoryType = {
  args: {
    ...commonArgs,
  },
  parameters: {
    docs: {
      source: {
        code: `const [currentPage, setCurrentPage] = useState(0);
const postsPerPage = 5;
const totalPosts = 47;
const totalPages = Math.ceil(totalPosts / postsPerPage);

const currentPosts = posts.slice(
  currentPage * postsPerPage,
  (currentPage + 1) * postsPerPage
);

<div>
  <h2>Latest Blog Posts</h2>
  <div className="posts">
    {currentPosts.map(post => (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
      </article>
    ))}
  </div>

  <Pagination
    variant="DEFAULT"
    currentStep={currentPage}
    maxStepsNumber={totalPages}
    maxCountersNumber={5}
    onStepClick={(step) => () => setCurrentPage(step)}
    paginationLeftButtonControl={{
      ariaLabel: 'Previous blog posts',
      icon: 'chevron-left',
      onClick: () => setCurrentPage((prev) => prev - 1),
    }}
    paginationRightButtonControl={{
      ariaLabel: 'Next blog posts',
      icon: 'chevron-right',
      onClick: () => setCurrentPage((prev) => prev + 1),
    }}
  />
</div>`,
      },
    },
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(0);
    const postsPerPage = 5;
    const totalPosts = 47;
    const totalPages = Math.ceil(totalPosts / postsPerPage);

    const handleStepClick = (step: number) => () => {
      setCurrentPage(step);
    };

    const leftControl: PaginationButtonControlProps = {
      ariaLabel: 'Previous blog posts',
      icon: ICONS.CHEVRON_LEFT,
      onClick: () => setCurrentPage((prev) => prev - 1),
    };

    const rightControl: PaginationButtonControlProps = {
      ariaLabel: 'Next blog posts',
      icon: ICONS.CHEVRON_RIGHT,
      onClick: () => setCurrentPage((prev) => prev + 1),
    };

    return (
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
          padding: '20px',
        }}
      >
        <div style={{ width: '600px' }}>
          <h2 style={{ marginBottom: '30px' }}>Latest Blog Posts</h2>
          {Array.from({ length: postsPerPage }).map((_, idx) => {
            const postId = currentPage * postsPerPage + idx + 1;
            return (
              <article
                key={postId}
                style={{
                  borderBottom: '1px solid #e0e0e0',
                  marginBottom: '25px',
                  paddingBottom: '25px',
                }}
              >
                <h3 style={{ marginBottom: '10px' }}>
                  Blog Post Title {postId}
                </h3>
                <p
                  style={{
                    color: '#666',
                    fontSize: '14px',
                    lineHeight: '1.6',
                  }}
                >
                  This is an excerpt from the blog post. It provides a brief
                  overview of the content to entice readers to click and read
                  more...
                </p>
                <button
                  style={{
                    backgroundColor: '#007bff',
                    border: 'none',
                    borderRadius: '4px',
                    color: 'white',
                    cursor: 'pointer',
                    marginTop: '10px',
                    padding: '8px 16px',
                  }}
                >
                  Read More
                </button>
              </article>
            );
          })}
        </div>
        <PaginationComponent
          {...args}
          currentStep={currentPage}
          maxCountersNumber={5}
          maxStepsNumber={totalPages}
          paginationLeftButtonControl={leftControl}
          paginationRightButtonControl={rightControl}
          onStepClick={handleStepClick}
        />
      </div>
    );
  },
};

// Product catalog
export const ProductCatalog: StoryType = {
  args: {
    ...commonArgs,
  },
  parameters: {
    docs: {
      source: {
        code: `const [currentPage, setCurrentPage] = useState(0);
const productsPerPage = 12;
const totalProducts = 156;
const totalPages = Math.ceil(totalProducts / productsPerPage);

<div>
  <h2>Product Catalog</h2>
  <p>Showing {startProduct}-{endProduct} of {totalProducts} products</p>

  <div className="product-grid">
    {/* Render products */}
  </div>

  <Pagination
    variant="DEFAULT"
    currentStep={currentPage}
    maxStepsNumber={totalPages}
    maxCountersNumber={7}
    onStepClick={(step) => () => setCurrentPage(step)}
    paginationLeftButtonControl={{
      ariaLabel: 'Previous products page',
      icon: 'chevron-left',
      onClick: () => setCurrentPage((prev) => Math.max(0, prev - 1)),
    }}
    paginationRightButtonControl={{
      ariaLabel: 'Next products page',
      icon: 'chevron-right',
      onClick: () => setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1)),
    }}
  />
</div>`,
      },
    },
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = 12;
    const totalProducts = 156;
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    const handleStepClick = (step: number) => () => {
      setCurrentPage(step);
    };

    const leftControl: PaginationButtonControlProps = {
      ariaLabel: 'Previous products page',
      icon: ICONS.CHEVRON_LEFT,
      onClick: () => setCurrentPage((prev) => Math.max(0, prev - 1)),
    };

    const rightControl: PaginationButtonControlProps = {
      ariaLabel: 'Next products page',
      icon: ICONS.CHEVRON_RIGHT,
      onClick: () =>
        setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1)),
    };

    const startProduct = currentPage * productsPerPage + 1;
    const endProduct = Math.min(
      (currentPage + 1) * productsPerPage,
      totalProducts,
    );

    return (
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
          padding: '20px',
        }}
      >
        <div style={{ width: '700px' }}>
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '20px',
            }}
          >
            <h2>Product Catalog</h2>
            <p style={{ color: '#666' }}>
              Showing {startProduct}-{endProduct} of {totalProducts} products
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gap: '20px',
              gridTemplateColumns: 'repeat(3, 1fr)',
            }}
          >
            {Array.from({
              length: Math.min(
                productsPerPage,
                totalProducts - currentPage * productsPerPage,
              ),
            }).map((_, idx) => {
              const productId = currentPage * productsPerPage + idx + 1;
              return (
                <div
                  key={productId}
                  style={{
                    backgroundColor: '#f9f9f9',
                    borderRadius: '8px',
                    padding: '15px',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      alignItems: 'center',
                      backgroundColor: '#e0e0e0',
                      borderRadius: '6px',
                      display: 'flex',
                      height: '150px',
                      justifyContent: 'center',
                      marginBottom: '10px',
                      width: '100%',
                    }}
                  >
                    Product {productId}
                  </div>
                  <p style={{ fontSize: '14px', fontWeight: 'bold' }}>$99.99</p>
                </div>
              );
            })}
          </div>
        </div>
        <PaginationComponent
          {...args}
          currentStep={currentPage}
          maxCountersNumber={7}
          maxStepsNumber={totalPages}
          paginationLeftButtonControl={leftControl}
          paginationRightButtonControl={rightControl}
          onStepClick={handleStepClick}
        />
      </div>
    );
  },
};

// Image gallery
export const ImageGallery: StoryType = {
  args: {
    ...commonArgs,
  },
  parameters: {
    docs: {
      source: {
        code: `const [currentPage, setCurrentPage] = useState(0);
const imagesPerPage = 9;
const totalImages = 72;
const totalPages = Math.ceil(totalImages / imagesPerPage);

<div>
  <h2>Photo Gallery</h2>
  <div className="image-grid">
    {/* Render images */}
  </div>

  <Pagination
    variant="DEFAULT"
    currentStep={currentPage}
    maxStepsNumber={totalPages}
    maxCountersNumber={5}
    onStepClick={(step) => () => setCurrentPage(step)}
    paginationLeftButtonControl={{
      ariaLabel: 'Previous gallery page',
      icon: 'chevron-left',
      onClick: () => setCurrentPage((prev) => prev - 1),
    }}
    paginationRightButtonControl={{
      ariaLabel: 'Next gallery page',
      icon: 'chevron-right',
      onClick: () => setCurrentPage((prev) => prev + 1),
    }}
  />
</div>`,
      },
    },
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(0);
    const imagesPerPage = 9;
    const totalImages = 72;
    const totalPages = Math.ceil(totalImages / imagesPerPage);

    const handleStepClick = (step: number) => () => {
      setCurrentPage(step);
    };

    const leftControl: PaginationButtonControlProps = {
      ariaLabel: 'Previous gallery page',
      icon: ICONS.CHEVRON_LEFT,
      onClick: () => setCurrentPage((prev) => prev - 1),
    };

    const rightControl: PaginationButtonControlProps = {
      ariaLabel: 'Next gallery page',
      icon: ICONS.CHEVRON_RIGHT,
      onClick: () => setCurrentPage((prev) => prev + 1),
    };

    return (
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
          padding: '20px',
        }}
      >
        <div style={{ width: '600px' }}>
          <h2 style={{ marginBottom: '20px' }}>Photo Gallery</h2>
          <div
            style={{
              display: 'grid',
              gap: '15px',
              gridTemplateColumns: 'repeat(3, 1fr)',
            }}
          >
            {Array.from({ length: imagesPerPage }).map((_, idx) => {
              const imageId = currentPage * imagesPerPage + idx + 1;
              return (
                <div
                  key={imageId}
                  style={{
                    alignItems: 'center',
                    aspectRatio: '1',
                    backgroundColor: '#e0e0e0',
                    borderRadius: '8px',
                    color: '#666',
                    display: 'flex',
                    fontSize: '14px',
                    justifyContent: 'center',
                  }}
                >
                  Image {imageId}
                </div>
              );
            })}
          </div>
        </div>
        <PaginationComponent
          {...args}
          currentStep={currentPage}
          maxCountersNumber={5}
          maxStepsNumber={totalPages}
          paginationLeftButtonControl={leftControl}
          paginationRightButtonControl={rightControl}
          onStepClick={handleStepClick}
        />
      </div>
    );
  },
};

// At first page (left disabled)
export const AtFirstPage: StoryType = {
  args: {
    ...commonArgs,
  },
  parameters: {
    docs: {
      source: {
        code: `// At first page - left button is disabled
const [currentPage, setCurrentPage] = useState(0);

<Pagination
  variant="DEFAULT"
  currentStep={0}
  maxStepsNumber={15}
  onStepClick={(step) => () => setCurrentPage(step)}
  paginationLeftButtonControl={{
    ariaLabel: 'Previous page',
    icon: 'chevron-left',
    onClick: () => setCurrentPage((prev) => Math.max(0, prev - 1)),
  }}
  paginationRightButtonControl={{
    ariaLabel: 'Next page',
    icon: 'chevron-right',
    onClick: () => setCurrentPage((prev) => prev + 1),
  }}
/>`,
      },
    },
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = 15;

    const handleStepClick = (step: number) => () => {
      setCurrentPage(step);
    };

    const leftControl: PaginationButtonControlProps = {
      ariaLabel: 'Previous page',
      icon: ICONS.CHEVRON_LEFT,
      onClick: () => setCurrentPage((prev) => Math.max(0, prev - 1)),
    };

    const rightControl: PaginationButtonControlProps = {
      ariaLabel: 'Next page',
      icon: ICONS.CHEVRON_RIGHT,
      onClick: () =>
        setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1)),
    };

    return (
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          padding: '20px',
        }}
      >
        <p style={{ color: '#666' }}>
          Current page: {currentPage + 1} (Previous button disabled)
        </p>
        <PaginationComponent
          {...args}
          currentStep={currentPage}
          maxCountersNumber={7}
          maxStepsNumber={totalPages}
          paginationLeftButtonControl={leftControl}
          paginationRightButtonControl={rightControl}
          onStepClick={handleStepClick}
        />
      </div>
    );
  },
};

// At last page (right disabled)
export const AtLastPage: StoryType = {
  args: {
    ...commonArgs,
  },
  parameters: {
    docs: {
      source: {
        code: `// At last page - right button is disabled
const totalPages = 15;
const [currentPage, setCurrentPage] = useState(totalPages - 1);

<Pagination
  variant="DEFAULT"
  currentStep={totalPages - 1}
  maxStepsNumber={totalPages}
  onStepClick={(step) => () => setCurrentPage(step)}
  paginationLeftButtonControl={{
    ariaLabel: 'Previous page',
    icon: 'chevron-left',
    onClick: () => setCurrentPage((prev) => prev - 1),
  }}
  paginationRightButtonControl={{
    ariaLabel: 'Next page',
    icon: 'chevron-right',
    onClick: () => setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1)),
  }}
/>`,
      },
    },
  },
  render: (args) => {
    const totalPages = 15;
    const [currentPage, setCurrentPage] = useState(totalPages - 1);

    const handleStepClick = (step: number) => () => {
      setCurrentPage(step);
    };

    const leftControl: PaginationButtonControlProps = {
      ariaLabel: 'Previous page',
      icon: ICONS.CHEVRON_LEFT,
      onClick: () => setCurrentPage((prev) => Math.max(0, prev - 1)),
    };

    const rightControl: PaginationButtonControlProps = {
      ariaLabel: 'Next page',
      icon: ICONS.CHEVRON_RIGHT,
      onClick: () =>
        setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1)),
    };

    return (
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          padding: '20px',
        }}
      >
        <p style={{ color: '#666' }}>
          Current page: {currentPage + 1} (Next button disabled)
        </p>
        <PaginationComponent
          {...args}
          currentStep={currentPage}
          maxCountersNumber={7}
          maxStepsNumber={totalPages}
          paginationLeftButtonControl={leftControl}
          paginationRightButtonControl={rightControl}
          onStepClick={handleStepClick}
        />
      </div>
    );
  },
};

// Middle page
export const MiddlePage: StoryType = {
  args: {
    ...commonArgs,
  },
  parameters: {
    docs: {
      source: {
        code: `// In the middle - ellipsis on both sides
const [currentPage, setCurrentPage] = useState(15);

<Pagination
  variant="DEFAULT"
  currentStep={currentPage}
  maxStepsNumber={30}
  maxCountersNumber={7}
  onStepClick={(step) => () => setCurrentPage(step)}
  paginationLeftButtonControl={{
    ariaLabel: 'Previous page',
    icon: 'chevron-left',
    onClick: () => setCurrentPage((prev) => prev - 1),
  }}
  paginationRightButtonControl={{
    ariaLabel: 'Next page',
    icon: 'chevron-right',
    onClick: () => setCurrentPage((prev) => prev + 1),
  }}
/>`,
      },
    },
  },
  render: (args) => {
    const totalPages = 30;
    const [currentPage, setCurrentPage] = useState(15);

    const handleStepClick = (step: number) => () => {
      setCurrentPage(step);
    };

    const leftControl: PaginationButtonControlProps = {
      ariaLabel: 'Previous page',
      icon: ICONS.CHEVRON_LEFT,
      onClick: () => setCurrentPage((prev) => prev - 1),
    };

    const rightControl: PaginationButtonControlProps = {
      ariaLabel: 'Next page',
      icon: ICONS.CHEVRON_RIGHT,
      onClick: () => setCurrentPage((prev) => prev + 1),
    };

    return (
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          padding: '20px',
        }}
      >
        <p style={{ color: '#666' }}>
          Current page: {currentPage + 1} of {totalPages}
        </p>
        <PaginationComponent
          {...args}
          currentStep={currentPage}
          maxCountersNumber={7}
          maxStepsNumber={totalPages}
          paginationLeftButtonControl={leftControl}
          paginationRightButtonControl={rightControl}
          onStepClick={handleStepClick}
        />
      </div>
    );
  },
};

// With accessibility features
export const WithAccessibility: StoryType = {
  args: {
    ...commonArgs,
  },
  parameters: {
    docs: {
      source: {
        code: `const [currentPage, setCurrentPage] = useState(0);

<div>
  <div
    id="content-area"
    role="region"
    aria-live="polite"
    aria-atomic="true"
  >
    <h3>Content for page {currentPage + 1}</h3>
  </div>

  <nav aria-label="Pagination navigation">
    <Pagination
      variant="DEFAULT"
      currentStep={currentPage}
      maxStepsNumber={20}
      onStepClick={(step) => () => setCurrentPage(step)}
      paginationLeftButtonControl={{
        ariaLabel: \`Go to previous page. Currently on page \${currentPage + 1}\`,
        ariaControls: 'content-area',
        icon: 'chevron-left',
        onClick: () => setCurrentPage((prev) => Math.max(0, prev - 1)),
      }}
      paginationRightButtonControl={{
        ariaLabel: \`Go to next page. Currently on page \${currentPage + 1}\`,
        ariaControls: 'content-area',
        icon: 'chevron-right',
        onClick: () => setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1)),
      }}
      data-testid="accessible-pagination"
    />
  </nav>
</div>`,
      },
    },
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = 20;

    const handleStepClick = (step: number) => () => {
      setCurrentPage(step);
    };

    const leftControl: PaginationButtonControlProps = {
      ariaControls: 'content-area',
      ariaLabel: `Go to previous page. Currently on page ${currentPage + 1} of ${totalPages}`,
      icon: ICONS.CHEVRON_LEFT,
      onClick: () => setCurrentPage((prev) => Math.max(0, prev - 1)),
    };

    const rightControl: PaginationButtonControlProps = {
      ariaControls: 'content-area',
      ariaLabel: `Go to next page. Currently on page ${currentPage + 1} of ${totalPages}`,
      icon: ICONS.CHEVRON_RIGHT,
      onClick: () =>
        setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1)),
    };

    return (
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
          padding: '20px',
        }}
      >
        <div
          aria-atomic="true"
          aria-live="polite"
          id="content-area"
          role="region"
          style={{
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            padding: '30px',
            textAlign: 'center',
            width: '600px',
          }}
        >
          <h3>Content Area</h3>
          <p style={{ color: '#666', marginTop: '15px' }}>
            Currently displaying page {currentPage + 1} of {totalPages}
          </p>
          <p style={{ color: '#999', fontSize: '14px', marginTop: '10px' }}>
            This area will be announced to screen readers when the page changes.
          </p>
        </div>
        <nav aria-label="Pagination navigation">
          <PaginationComponent
            {...args}
            currentStep={currentPage}
            data-testid="accessible-pagination"
            maxCountersNumber={7}
            maxStepsNumber={totalPages}
            paginationLeftButtonControl={leftControl}
            paginationRightButtonControl={rightControl}
            onStepClick={handleStepClick}
          />
        </nav>
      </div>
    );
  },
};
