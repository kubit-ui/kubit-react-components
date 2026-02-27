import type { Meta, StoryObj } from '@storybook/react';

import {
  PageControl as PageControlComponent,
  type PageControlControlProps,
} from '@kubit-ui-web/react-components';
import { useState } from 'react';

import { ICONS } from '@/stories/assets/icons/icons';

import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: PageControlComponent,
  tags: ['navigation', 'pagination', 'carousel'],
  title: 'Components/Navigation/PageControl',
} satisfies Meta<typeof PageControlComponent>;

export default meta;

type StoryType = StoryObj<typeof meta>;

const commonArgs = {
  arrowsControlVariant: 'DEFAULT',
  variant: 'DEFAULT',
};

// Basic PageControl with 5 pages
export const Basic: StoryType = {
  args: {
    ...commonArgs,
  },
  parameters: {
    docs: {
      source: {
        code: `const [currentPage, setCurrentPage] = useState(0);
const totalPages = 5;

const leftControl = {
  icon: 'chevron-left',
  onClick: () => setCurrentPage((prev) => Math.max(0, prev - 1)),
  disabled: currentPage === 0,
  'aria-label': 'Previous page',
};

const rightControl = {
  icon: 'chevron-right',
  onClick: () => setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1)),
  disabled: currentPage === totalPages - 1,
  'aria-label': 'Next page',
};

<PageControl
  variant="DEFAULT"
  arrowsControlVariant="DEFAULT"
  pages={totalPages}
  currentPosition={currentPage}
  leftControl={leftControl}
  rightControl={rightControl}
/>`,
      },
    },
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = 5;

    const leftControl: PageControlControlProps = {
      'aria-label': 'Previous page',
      disabled: currentPage === 0,
      icon: ICONS.CHEVRON_LEFT,
      onClick: () => setCurrentPage((prev) => Math.max(0, prev - 1)),
    };

    const rightControl: PageControlControlProps = {
      'aria-label': 'Next page',
      disabled: currentPage === totalPages - 1,
      icon: ICONS.CHEVRON_RIGHT,
      onClick: () =>
        setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1)),
    };

    return (
      <div
        style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}
      >
        <PageControlComponent
          {...args}
          currentPosition={currentPage}
          leftControl={leftControl}
          pages={totalPages}
          rightControl={rightControl}
        />
      </div>
    );
  },
};

// PageControl with many pages (10)
export const ManyPages: StoryType = {
  args: {
    ...commonArgs,
  },
  parameters: {
    docs: {
      source: {
        code: `const [currentPage, setCurrentPage] = useState(0);
const totalPages = 10;

<PageControl
  variant="DEFAULT"
  pages={totalPages}
  currentPosition={currentPage}
  leftControl={{
    icon: 'chevron-left',
    onClick: () => setCurrentPage((prev) => prev - 1),
    disabled: currentPage === 0,
    'aria-label': 'Previous page',
  }}
  rightControl={{
    icon: 'chevron-right',
    onClick: () => setCurrentPage((prev) => prev + 1),
    disabled: currentPage === totalPages - 1,
    'aria-label': 'Next page',
  }}
/>`,
      },
    },
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = 10;

    const leftControl: PageControlControlProps = {
      'aria-label': 'Previous page',
      disabled: currentPage === 0,
      icon: ICONS.CHEVRON_LEFT,
      onClick: () => setCurrentPage((prev) => prev - 1),
    };

    const rightControl: PageControlControlProps = {
      'aria-label': 'Next page',
      disabled: currentPage === totalPages - 1,
      icon: ICONS.CHEVRON_RIGHT,
      onClick: () => setCurrentPage((prev) => prev + 1),
    };

    return (
      <div
        style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}
      >
        <PageControlComponent
          {...args}
          currentPosition={currentPage}
          leftControl={leftControl}
          pages={totalPages}
          rightControl={rightControl}
        />
      </div>
    );
  },
};

// PageControl with bullet mode enabled
export const BulletMode: StoryType = {
  args: {
    ...commonArgs,
  },
  parameters: {
    docs: {
      source: {
        code: `const [currentPage, setCurrentPage] = useState(5);
const totalPages = 20;

<PageControl
  variant="DEFAULT"
  pages={totalPages}
  currentPosition={currentPage}
  isBullet={true}
  maxDots={7}
  leftControl={{
    icon: 'chevron-left',
    onClick: () => setCurrentPage((prev) => Math.max(0, prev - 1)),
    'aria-label': 'Previous page',
  }}
  rightControl={{
    icon: 'chevron-right',
    onClick: () => setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1)),
    'aria-label': 'Next page',
  }}
/>`,
      },
    },
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(5);
    const totalPages = 20;

    const leftControl: PageControlControlProps = {
      'aria-label': 'Previous page',
      disabled: currentPage === 0,
      icon: ICONS.CHEVRON_LEFT,
      onClick: () => setCurrentPage((prev) => Math.max(0, prev - 1)),
    };

    const rightControl: PageControlControlProps = {
      'aria-label': 'Next page',
      disabled: currentPage === totalPages - 1,
      icon: ICONS.CHEVRON_RIGHT,
      onClick: () =>
        setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1)),
    };

    return (
      <div
        style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}
      >
        <PageControlComponent
          {...args}
          currentPosition={currentPage}
          isBullet={true}
          leftControl={leftControl}
          maxDots={7}
          pages={totalPages}
          rightControl={rightControl}
        />
      </div>
    );
  },
};

// PageControl without arrow controls
export const WithoutArrows: StoryType = {
  args: {
    ...commonArgs,
  },
  parameters: {
    docs: {
      source: {
        code: `const [currentPage, setCurrentPage] = useState(2);

<PageControl
  variant="DEFAULT"
  pages={5}
  currentPosition={currentPage}
/>`,
      },
    },
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(2);

    return (
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        <div>Current Page: {currentPage + 1}</div>
        <PageControlComponent
          {...args}
          currentPosition={currentPage}
          pages={5}
        />
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(4, prev + 1))}
          >
            Next
          </button>
        </div>
      </div>
    );
  },
};

// PageControl with custom max dots
export const CustomMaxDots: StoryType = {
  args: {
    ...commonArgs,
  },
  parameters: {
    docs: {
      source: {
        code: `const [currentPage, setCurrentPage] = useState(0);

<PageControl
  variant="DEFAULT"
  pages={15}
  currentPosition={currentPage}
  maxDots={3}
  leftControl={leftControl}
  rightControl={rightControl}
/>`,
      },
    },
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = 15;

    const leftControl: PageControlControlProps = {
      'aria-label': 'Previous page',
      disabled: currentPage === 0,
      icon: ICONS.CHEVRON_LEFT,
      onClick: () => setCurrentPage((prev) => Math.max(0, prev - 1)),
    };

    const rightControl: PageControlControlProps = {
      'aria-label': 'Next page',
      disabled: currentPage === totalPages - 1,
      icon: ICONS.CHEVRON_RIGHT,
      onClick: () =>
        setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1)),
    };

    return (
      <div
        style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}
      >
        <PageControlComponent
          {...args}
          currentPosition={currentPage}
          leftControl={leftControl}
          maxDots={3}
          pages={totalPages}
          rightControl={rightControl}
        />
      </div>
    );
  },
};

// Image gallery simulation
export const ImageGallery: StoryType = {
  args: {
    ...commonArgs,
  },
  parameters: {
    docs: {
      source: {
        code: `const [currentImage, setCurrentImage] = useState(0);
const images = ['Image 1', 'Image 2', 'Image 3', 'Image 4', 'Image 5'];

<div className="gallery">
  <div className="image-display">{images[currentImage]}</div>
  <PageControl
    variant="DEFAULT"
    pages={images.length}
    currentPosition={currentImage}
    leftControl={{
      icon: 'chevron-left',
      onClick: () => setCurrentImage((prev) => prev - 1),
      disabled: currentImage === 0,
      'aria-label': 'Previous image',
    }}
    rightControl={{
      icon: 'chevron-right',
      onClick: () => setCurrentImage((prev) => prev + 1),
      disabled: currentImage === images.length - 1,
      'aria-label': 'Next image',
    }}
  />
</div>`,
      },
    },
  },
  render: (args) => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
      'Image 1: Mountain Landscape',
      'Image 2: Ocean Sunset',
      'Image 3: Forest Path',
      'Image 4: City Skyline',
      'Image 5: Desert Dunes',
    ];

    const leftControl: PageControlControlProps = {
      'aria-label': 'Previous image',
      disabled: currentImage === 0,
      icon: ICONS.CHEVRON_LEFT,
      onClick: () => setCurrentImage((prev) => prev - 1),
    };

    const rightControl: PageControlControlProps = {
      'aria-label': 'Next image',
      disabled: currentImage === images.length - 1,
      icon: ICONS.CHEVRON_RIGHT,
      onClick: () => setCurrentImage((prev) => prev + 1),
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
          style={{
            alignItems: 'center',
            backgroundColor: '#f0f0f0',
            borderRadius: '8px',
            display: 'flex',
            fontSize: '18px',
            fontWeight: 'bold',
            height: '300px',
            justifyContent: 'center',
            width: '400px',
          }}
        >
          {images[currentImage]}
        </div>
        <PageControlComponent
          {...args}
          currentPosition={currentImage}
          leftControl={leftControl}
          pages={images.length}
          rightControl={rightControl}
        />
      </div>
    );
  },
};

// Carousel with auto-play capability
export const AutoPlayCarousel: StoryType = {
  args: {
    ...commonArgs,
  },
  parameters: {
    docs: {
      source: {
        code: `const [currentSlide, setCurrentSlide] = useState(0);
const [isPlaying, setIsPlaying] = useState(false);

// Auto-play with useEffect
useEffect(() => {
  if (!isPlaying) return;
  const timer = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, 3000);
  return () => clearInterval(timer);
}, [isPlaying]);

<PageControl
  variant="DEFAULT"
  pages={slides.length}
  currentPosition={currentSlide}
  leftControl={{
    icon: 'chevron-left',
    onClick: () => {
      setIsPlaying(false);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
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
/>`,
      },
    },
  },
  render: (args) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const slides = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5'];

    // Auto-play logic would be handled with useEffect in real implementation
    const handlePrevious = () => {
      setIsPlaying(false);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const handleNext = () => {
      setIsPlaying(false);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const leftControl: PageControlControlProps = {
      'aria-label': 'Previous slide',
      icon: ICONS.CHEVRON_LEFT,
      onClick: handlePrevious,
    };

    const rightControl: PageControlControlProps = {
      'aria-label': 'Next slide',
      icon: ICONS.CHEVRON_RIGHT,
      onClick: handleNext,
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
        <div
          style={{
            alignItems: 'center',
            backgroundColor: '#e0e0e0',
            borderRadius: '8px',
            display: 'flex',
            fontSize: '24px',
            fontWeight: 'bold',
            height: '200px',
            justifyContent: 'center',
            width: '400px',
          }}
        >
          {slides[currentSlide]}
        </div>
        <button onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? 'Pause' : 'Play'} Auto-Play
        </button>
        <PageControlComponent
          {...args}
          currentPosition={currentSlide}
          leftControl={leftControl}
          pages={slides.length}
          rightControl={rightControl}
        />
      </div>
    );
  },
};

// Multi-step form navigation
export const MultiStepForm: StoryType = {
  args: {
    ...commonArgs,
  },
  parameters: {
    docs: {
      source: {
        code: `const [currentStep, setCurrentStep] = useState(0);
const steps = ['Personal Info', 'Address', 'Payment', 'Review', 'Confirmation'];

<div className="form-container">
  <h2>{steps[currentStep]}</h2>
  {/* Form content */}

  <PageControl
    variant="DEFAULT"
    pages={steps.length}
    currentPosition={currentStep}
    leftControl={{
      icon: 'chevron-left',
      onClick: () => setCurrentStep((prev) => prev - 1),
      disabled: currentStep === 0,
      'aria-label': 'Previous step',
    }}
    rightControl={{
      icon: 'chevron-right',
      onClick: () => setCurrentStep((prev) => prev + 1),
      disabled: currentStep === steps.length - 1,
      'aria-label': 'Next step',
    }}
  />
</div>`,
      },
    },
  },
  render: (args) => {
    const [currentStep, setCurrentStep] = useState(0);
    const steps = [
      'Personal Info',
      'Address',
      'Payment',
      'Review',
      'Confirmation',
    ];

    const leftControl: PageControlControlProps = {
      'aria-label': `Go back to ${steps[currentStep - 1] || 'previous step'}`,
      disabled: currentStep === 0,
      icon: ICONS.CHEVRON_LEFT,
      onClick: () => setCurrentStep((prev) => prev - 1),
    };

    const rightControl: PageControlControlProps = {
      'aria-label': `Continue to ${steps[currentStep + 1] || 'next step'}`,
      disabled: currentStep === steps.length - 1,
      icon: ICONS.CHEVRON_RIGHT,
      onClick: () => setCurrentStep((prev) => prev + 1),
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
          style={{
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            padding: '40px',
            textAlign: 'center',
            width: '500px',
          }}
        >
          <h3>
            Step {currentStep + 1}: {steps[currentStep]}
          </h3>
          <p style={{ color: '#666', marginTop: '10px' }}>
            Form content for {steps[currentStep].toLowerCase()} would appear
            here.
          </p>
        </div>
        <PageControlComponent
          {...args}
          currentPosition={currentStep}
          leftControl={leftControl}
          pages={steps.length}
          rightControl={rightControl}
        />
      </div>
    );
  },
};

// Product carousel with multiple items per page
export const ProductCarousel: StoryType = {
  args: {
    ...commonArgs,
  },
  parameters: {
    docs: {
      source: {
        code: `const [currentPage, setCurrentPage] = useState(0);
const productsPerPage = 3;
const totalProducts = 12;
const totalPages = Math.ceil(totalProducts / productsPerPage);

<div className="product-carousel">
  <div className="products-grid">
    {/* Display products for current page */}
  </div>

  <PageControl
    variant="DEFAULT"
    pages={totalPages}
    currentPosition={currentPage}
    leftControl={{
      icon: 'chevron-left',
      onClick: () => setCurrentPage((prev) => prev - 1),
      disabled: currentPage === 0,
      'aria-label': 'Previous products',
    }}
    rightControl={{
      icon: 'chevron-right',
      onClick: () => setCurrentPage((prev) => prev + 1),
      disabled: currentPage === totalPages - 1,
      'aria-label': 'Next products',
    }}
  />
</div>`,
      },
    },
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = 3;
    const totalProducts = 12;
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    const leftControl: PageControlControlProps = {
      'aria-label': 'Previous products',
      disabled: currentPage === 0,
      icon: ICONS.CHEVRON_LEFT,
      onClick: () => setCurrentPage((prev) => prev - 1),
    };

    const rightControl: PageControlControlProps = {
      'aria-label': 'Next products',
      disabled: currentPage === totalPages - 1,
      icon: ICONS.CHEVRON_RIGHT,
      onClick: () => setCurrentPage((prev) => prev + 1),
    };

    const startProduct = currentPage * productsPerPage;
    const endProduct = Math.min(startProduct + productsPerPage, totalProducts);

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
          style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            width: '600px',
          }}
        >
          {Array.from({ length: endProduct - startProduct }).map((_, idx) => (
            <div
              key={`${startProduct + idx}`}
              style={{
                alignItems: 'center',
                backgroundColor: '#f0f0f0',
                borderRadius: '8px',
                display: 'flex',
                fontWeight: 'bold',
                height: '150px',
                justifyContent: 'center',
                width: '150px',
              }}
            >
              Product {startProduct + idx + 1}
            </div>
          ))}
        </div>
        <PageControlComponent
          {...args}
          currentPosition={currentPage}
          leftControl={leftControl}
          pages={totalPages}
          rightControl={rightControl}
        />
      </div>
    );
  },
};

// Testimonials slider
export const TestimonialsSlider: StoryType = {
  args: {
    ...commonArgs,
  },
  parameters: {
    docs: {
      source: {
        code: `const [currentTestimonial, setCurrentTestimonial] = useState(0);
const testimonials = [/* array of testimonials */];

<div className="testimonials">
  <div className="testimonial-card">
    <p>{testimonials[currentTestimonial].text}</p>
    <p>{testimonials[currentTestimonial].name}</p>
  </div>

  <PageControl
    variant="DEFAULT"
    pages={testimonials.length}
    currentPosition={currentTestimonial}
    leftControl={{
      icon: 'chevron-left',
      onClick: () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length),
      'aria-label': 'Previous testimonial',
    }}
    rightControl={{
      icon: 'chevron-right',
      onClick: () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length),
      'aria-label': 'Next testimonial',
    }}
  />
</div>`,
      },
    },
  },
  render: (args) => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const testimonials = [
      { name: 'John Doe', text: 'Amazing product! Highly recommended.' },
      { name: 'Jane Smith', text: 'Great quality and excellent service.' },
      { name: 'Bob Johnson', text: 'Exceeded my expectations in every way.' },
      { name: 'Alice Williams', text: 'Worth every penny. Very satisfied!' },
    ];

    const leftControl: PageControlControlProps = {
      'aria-label': 'Previous testimonial',
      icon: ICONS.CHEVRON_LEFT,
      onClick: () =>
        setCurrentTestimonial(
          (prev) => (prev - 1 + testimonials.length) % testimonials.length,
        ),
    };

    const rightControl: PageControlControlProps = {
      'aria-label': 'Next testimonial',
      icon: ICONS.CHEVRON_RIGHT,
      onClick: () =>
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length),
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
          style={{
            backgroundColor: '#f8f8f8',
            borderRadius: '12px',
            padding: '30px',
            textAlign: 'center',
            width: '500px',
          }}
        >
          <p
            style={{
              fontSize: '18px',
              fontStyle: 'italic',
              marginBottom: '20px',
            }}
          >
            "{testimonials[currentTestimonial].text}"
          </p>
          <p style={{ color: '#666', fontWeight: 'bold' }}>
            - {testimonials[currentTestimonial].name}
          </p>
        </div>
        <PageControlComponent
          {...args}
          currentPosition={currentTestimonial}
          leftControl={leftControl}
          pages={testimonials.length}
          rightControl={rightControl}
        />
      </div>
    );
  },
};

// Onboarding wizard
export const OnboardingWizard: StoryType = {
  args: {
    ...commonArgs,
  },
  parameters: {
    docs: {
      source: {
        code: `const [currentScreen, setCurrentScreen] = useState(0);
const screens = [
  { title: 'Welcome', description: 'Welcome to our app!' },
  { title: 'Features', description: 'Discover amazing features.' },
  { title: 'Settings', description: 'Customize your experience.' },
  { title: 'Get Started', description: 'Ready to begin!' },
];

<div className="onboarding">
  <div className="screen">
    <h2>{screens[currentScreen].title}</h2>
    <p>{screens[currentScreen].description}</p>
  </div>

  <PageControl
    variant="DEFAULT"
    pages={screens.length}
    currentPosition={currentScreen}
    leftControl={{
      icon: 'chevron-left',
      onClick: () => setCurrentScreen((prev) => prev - 1),
      disabled: currentScreen === 0,
      'aria-label': 'Previous screen',
    }}
    rightControl={{
      icon: 'chevron-right',
      onClick: () => setCurrentScreen((prev) => prev + 1),
      disabled: currentScreen === screens.length - 1,
      'aria-label': 'Next screen',
    }}
  />
</div>`,
      },
    },
  },
  render: (args) => {
    const [currentScreen, setCurrentScreen] = useState(0);
    const screens = [
      { description: 'Welcome to our app!', title: 'Welcome' },
      { description: 'Discover amazing features.', title: 'Features' },
      { description: 'Customize your experience.', title: 'Settings' },
      { description: 'Ready to begin!', title: 'Get Started' },
    ];

    const leftControl: PageControlControlProps = {
      'aria-label': 'Previous screen',
      disabled: currentScreen === 0,
      icon: ICONS.CHEVRON_LEFT,
      onClick: () => setCurrentScreen((prev) => prev - 1),
    };

    const rightControl: PageControlControlProps = {
      'aria-label': 'Next screen',
      disabled: currentScreen === screens.length - 1,
      icon: ICONS.CHEVRON_RIGHT,
      onClick: () => setCurrentScreen((prev) => prev + 1),
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
          style={{
            alignItems: 'center',
            backgroundColor: '#f0f7ff',
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            height: '300px',
            justifyContent: 'center',
            padding: '40px',
            textAlign: 'center',
            width: '400px',
          }}
        >
          <h2 style={{ marginBottom: '20px' }}>
            {screens[currentScreen].title}
          </h2>
          <p style={{ color: '#666' }}>{screens[currentScreen].description}</p>
        </div>
        <PageControlComponent
          {...args}
          currentPosition={currentScreen}
          leftControl={leftControl}
          pages={screens.length}
          rightControl={rightControl}
        />
        {currentScreen === screens.length - 1 && (
          <button
            style={{
              borderRadius: '6px',
              fontWeight: 'bold',
              padding: '10px 30px',
            }}
          >
            Get Started
          </button>
        )}
      </div>
    );
  },
};

// Content tabs with page control
export const ContentTabs: StoryType = {
  args: {
    ...commonArgs,
  },
  parameters: {
    docs: {
      source: {
        code: `const [activeTab, setActiveTab] = useState(0);
const tabs = [
  { title: 'Overview', content: 'Overview content...' },
  { title: 'Features', content: 'Features list...' },
  { title: 'Pricing', content: 'Pricing info...' },
];

<div className="tabbed-content">
  <div className="tab-buttons">
    {tabs.map((tab, idx) => (
      <button onClick={() => setActiveTab(idx)} key={idx}>
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
      onClick: () => setActiveTab((prev) => prev - 1),
      disabled: activeTab === 0,
      'aria-label': 'Previous tab',
    }}
    rightControl={{
      icon: 'chevron-right',
      onClick: () => setActiveTab((prev) => prev + 1),
      disabled: activeTab === tabs.length - 1,
      'aria-label': 'Next tab',
    }}
  />
</div>`,
      },
    },
  },
  render: (args) => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = [
      { content: 'Overview content goes here...', title: 'Overview' },
      { content: 'Features list goes here...', title: 'Features' },
      { content: 'Pricing information goes here...', title: 'Pricing' },
      { content: 'Customer reviews go here...', title: 'Reviews' },
      { content: 'Frequently asked questions...', title: 'FAQ' },
    ];

    const leftControl: PageControlControlProps = {
      'aria-label': 'Previous tab',
      disabled: activeTab === 0,
      icon: ICONS.CHEVRON_LEFT,
      onClick: () => setActiveTab((prev) => prev - 1),
    };

    const rightControl: PageControlControlProps = {
      'aria-label': 'Next tab',
      disabled: activeTab === tabs.length - 1,
      icon: ICONS.CHEVRON_RIGHT,
      onClick: () => setActiveTab((prev) => prev + 1),
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
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          {tabs.map((tab, idx) => (
            <button
              key={`tab-${idx + 1}`}
              style={{
                backgroundColor: idx === activeTab ? '#007bff' : '#e0e0e0',
                border: 'none',
                borderRadius: '6px',
                color: idx === activeTab ? 'white' : 'black',
                cursor: 'pointer',
                fontWeight: idx === activeTab ? 'bold' : 'normal',
                padding: '10px 20px',
              }}
              onClick={() => setActiveTab(idx)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div
          style={{
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            minHeight: '150px',
            padding: '30px',
            width: '600px',
          }}
        >
          <h3>{tabs[activeTab].title}</h3>
          <p style={{ color: '#666', marginTop: '15px' }}>
            {tabs[activeTab].content}
          </p>
        </div>
        <PageControlComponent
          {...args}
          currentPosition={activeTab}
          leftControl={leftControl}
          pages={tabs.length}
          rightControl={rightControl}
        />
      </div>
    );
  },
};

// Responsive mobile gallery
export const MobileGallery: StoryType = {
  args: {
    ...commonArgs,
  },
  parameters: {
    docs: {
      source: {
        code: `const [currentImage, setCurrentImage] = useState(0);
const images = Array.from({ length: 8 }, (_, i) => \`Photo \${i + 1}\`);

<div className="mobile-gallery">
  <div className="image-viewer">{images[currentImage]}</div>
  <div className="counter">{currentImage + 1} / {images.length}</div>

  <PageControl
    variant="DEFAULT"
    pages={images.length}
    currentPosition={currentImage}
    isBullet={true}
    maxDots={5}
    leftControl={{
      icon: 'chevron-left',
      onClick: () => setCurrentImage((prev) => Math.max(0, prev - 1)),
      disabled: currentImage === 0,
      'aria-label': 'Previous photo',
    }}
    rightControl={{
      icon: 'chevron-right',
      onClick: () => setCurrentImage((prev) => Math.min(images.length - 1, prev + 1)),
      disabled: currentImage === images.length - 1,
      'aria-label': 'Next photo',
    }}
  />
</div>`,
      },
    },
  },
  render: (args) => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = Array.from({ length: 8 }, (_, i) => `Photo ${i + 1}`);

    const leftControl: PageControlControlProps = {
      'aria-label': 'Previous photo',
      disabled: currentImage === 0,
      icon: ICONS.CHEVRON_LEFT,
      onClick: () => setCurrentImage((prev) => Math.max(0, prev - 1)),
    };

    const rightControl: PageControlControlProps = {
      'aria-label': 'Next photo',
      disabled: currentImage === images.length - 1,
      icon: ICONS.CHEVRON_RIGHT,
      onClick: () =>
        setCurrentImage((prev) => Math.min(images.length - 1, prev + 1)),
    };

    return (
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          margin: '0 auto',
          maxWidth: '375px',
          padding: '20px',
        }}
      >
        <div
          style={{
            alignItems: 'center',
            backgroundColor: '#e0e0e0',
            borderRadius: '8px',
            display: 'flex',
            fontSize: '20px',
            fontWeight: 'bold',
            height: '250px',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          {images[currentImage]}
        </div>
        <div style={{ color: '#666', fontSize: '14px' }}>
          {currentImage + 1} / {images.length}
        </div>
        <PageControlComponent
          {...args}
          currentPosition={currentImage}
          isBullet={true}
          leftControl={leftControl}
          maxDots={5}
          pages={images.length}
          rightControl={rightControl}
        />
      </div>
    );
  },
};

// Accessibility focused example
export const WithAccessibility: StoryType = {
  args: {
    ...commonArgs,
  },
  parameters: {
    docs: {
      source: {
        code: `const [currentPage, setCurrentPage] = useState(0);
const pageLabels = ['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'];

<nav aria-label="Page navigation">
  <PageControl
    variant="DEFAULT"
    pages={pageLabels.length}
    currentPosition={currentPage}
    leftControl={{
      icon: 'chevron-left',
      onClick: () => setCurrentPage((prev) => prev - 1),
      disabled: currentPage === 0,
      'aria-label': \`Go to \${pageLabels[currentPage - 1] || 'previous page'}\`,
      'aria-controls': 'main-content',
    }}
    rightControl={{
      icon: 'chevron-right',
      onClick: () => setCurrentPage((prev) => prev + 1),
      disabled: currentPage === pageLabels.length - 1,
      'aria-label': \`Go to \${pageLabels[currentPage + 1] || 'next page'}\`,
      'aria-controls': 'main-content',
    }}
    data-testid="accessible-page-control"
  />
</nav>

<div
  id="main-content"
  role="region"
  aria-live="polite"
  aria-atomic="true"
>
  <h2>{pageLabels[currentPage]}</h2>
  <p>Content for {pageLabels[currentPage]} section.</p>
</div>`,
      },
    },
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = 6;
    const pageLabels = [
      'Home',
      'About',
      'Services',
      'Portfolio',
      'Blog',
      'Contact',
    ];

    const leftControl: PageControlControlProps = {
      'aria-controls': 'main-content',
      'aria-label': `Go to ${pageLabels[currentPage - 1] || 'previous page'}`,
      disabled: currentPage === 0,
      icon: ICONS.CHEVRON_LEFT,
      onClick: () => setCurrentPage((prev) => prev - 1),
    };

    const rightControl: PageControlControlProps = {
      'aria-controls': 'main-content',
      'aria-label': `Go to ${pageLabels[currentPage + 1] || 'next page'}`,
      disabled: currentPage === totalPages - 1,
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
        <nav aria-label="Page navigation">
          <PageControlComponent
            {...args}
            currentPosition={currentPage}
            data-testid="accessible-page-control"
            leftControl={leftControl}
            pages={totalPages}
            rightControl={rightControl}
          />
        </nav>
        <div
          aria-atomic="true"
          aria-live="polite"
          id="main-content"
          role="region"
          style={{
            backgroundColor: '#f5f5f5',
            borderRadius: '8px',
            padding: '40px',
            textAlign: 'center',
            width: '500px',
          }}
        >
          <h2>{pageLabels[currentPage]}</h2>
          <p style={{ color: '#666', marginTop: '15px' }}>
            Content for {pageLabels[currentPage].toLowerCase()} section.
          </p>
        </div>
      </div>
    );
  },
};
