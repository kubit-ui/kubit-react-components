import type { Meta, StoryObj } from '@storybook/react-vite';

import { IMAGES } from '@/lib/storybook/assets/images/images';
import { DEVICE_BREAKPOINTS } from '@/lib/types/breakpoints/breakpoints';

import { Image as Story } from '../image';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: Story,

  parameters: {
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/image',
    note: {
      text: [
        'To use the Image component, provide the `images` prop with different sources for various breakpoints.',
        'DEFAULT: { src: image_url },',
        'MOBILE: { media: "(max-width: 600px)", src: image_url, width: "200" },',
        'TABLET: { media: "(min-width: 600px)", src: image_url, width: "500" },',
        'DESKTOP: { media: "(min-width: 900px)", src: image_url, width: "600" },',
        'LARGE_DESKTOP: { media: "(min-width:1400px)", src: image_url },',
      ],
      variant: 'information',
    },
  },
  tags: ['resources'],
  title: 'Components/Resources/Image',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs = {
  alt: 'Image alt text',
  images: {
    DEFAULT: { src: IMAGES.IMAGE_1 },
    [DEVICE_BREAKPOINTS.DESKTOP]: {
      media: '(min-width: 900px)',
      src: IMAGES.IMAGE_1,
      width: '600',
    },
    [DEVICE_BREAKPOINTS.LARGE_DESKTOP]: {
      media: '(min-width:1400px)',
      src: IMAGES.IMAGE_1,
    },
    [DEVICE_BREAKPOINTS.MOBILE]: {
      media: '(max-width: 600px)',
      src: IMAGES.IMAGE_3,
      width: '200',
    },
    [DEVICE_BREAKPOINTS.TABLET]: {
      media: '(min-width: 600px)',
      src: IMAGES.IMAGE_2,
      width: '500',
    },
  },
  title: 'Image title',
};

export const Basic: Story = {
  args: {
    alt: 'Basic image',
    images: {
      DEFAULT: { src: IMAGES.IMAGE_1 },
    },
  },
  parameters: {
    docs: {
      source: {
        code: `<Image
  alt="Basic image"
  images={{
    DEFAULT: { src: IMAGES.IMAGE_1 },
  }}
/>`,
      },
    },
  },
};

export const Responsive: Story = {
  args: {
    ...commonArgs,
  },
  parameters: {
    docs: {
      source: {
        code: `<Image
  alt="Image alt text"
  title="Image title"
  images={{
    DEFAULT: { src: IMAGES.IMAGE_1 },
    [DEVICE_BREAKPOINTS.LARGE_DESKTOP]: {
      media: '(min-width:1400px)',
      src: IMAGES.IMAGE_1,
    },
    [DEVICE_BREAKPOINTS.DESKTOP]: {
      media: '(min-width: 900px)',
      src: IMAGES.IMAGE_1,
      width: '600',
    },
    [DEVICE_BREAKPOINTS.TABLET]: {
      media: '(min-width: 600px)',
      src: IMAGES.IMAGE_2,
      width: '500',
    },
    [DEVICE_BREAKPOINTS.MOBILE]: {
      media: '(max-width: 600px)',
      src: IMAGES.IMAGE_3,
      width: '200',
    },
  }}
/>`,
      },
    },
  },
};

export const WithCaption: Story = {
  args: {
    alt: 'Image with caption',
    caption: 'This is an image caption providing additional context',
    images: {
      DEFAULT: { src: IMAGES.IMAGE_1 },
    },
  },
  parameters: {
    docs: {
      source: {
        code: `<Image
  alt="Image with caption"
  caption="This is an image caption providing additional context"
  images={{
    DEFAULT: { src: IMAGES.IMAGE_1 },
  }}
/>`,
      },
    },
  },
};

export const WithAspectRatio: Story = {
  args: {
    alt: 'Image with 16:9 aspect ratio',
    images: {
      DEFAULT: { src: IMAGES.IMAGE_1 },
    },
    ratio: 16 / 9,
  },
  parameters: {
    docs: {
      source: {
        code: `<Image
  alt="Image with 16:9 aspect ratio"
  images={{
    DEFAULT: { src: IMAGES.IMAGE_1 },
  }}
  ratio={16 / 9}
/>`,
      },
    },
  },
};

export const SquareAspectRatio: Story = {
  args: {
    alt: 'Square image 1:1',
    images: {
      DEFAULT: { src: IMAGES.IMAGE_1 },
    },
    ratio: 1,
  },
  parameters: {
    docs: {
      source: {
        code: `<Image
  alt="Square image 1:1"
  images={{
    DEFAULT: { src: IMAGES.IMAGE_1 },
  }}
  ratio={1}
/>`,
      },
    },
  },
};

export const WithBorderRadius: Story = {
  args: {
    alt: 'Image with rounded corners',
    borderRadius: '16px',
    images: {
      DEFAULT: { src: IMAGES.IMAGE_1 },
    },
  },
  parameters: {
    docs: {
      source: {
        code: `<Image
  alt="Image with rounded corners"
  borderRadius="16px"
  images={{
    DEFAULT: { src: IMAGES.IMAGE_1 },
  }}
/>`,
      },
    },
  },
};

export const CircularImage: Story = {
  args: {
    alt: 'Circular profile image',
    borderRadius: '50%',
    height: '200px',
    images: {
      DEFAULT: { src: IMAGES.IMAGE_1 },
    },
    objectFit: 'cover',
    ratio: 1,
    width: '200px',
  },
  parameters: {
    docs: {
      source: {
        code: `<Image
  alt="Circular profile image"
  borderRadius="50%"
  height="200px"
  width="200px"
  objectFit="cover"
  ratio={1}
  images={{
    DEFAULT: { src: IMAGES.IMAGE_1 },
  }}
/>`,
      },
    },
  },
};

export const WithObjectFitCover: Story = {
  args: {
    alt: 'Image with object-fit cover',
    height: '300px',
    images: {
      DEFAULT: { src: IMAGES.IMAGE_1 },
    },
    objectFit: 'cover',
    width: '100%',
  },
  parameters: {
    docs: {
      source: {
        code: `<Image
  alt="Image with object-fit cover"
  height="300px"
  width="100%"
  objectFit="cover"
  images={{
    DEFAULT: { src: IMAGES.IMAGE_1 },
  }}
/>`,
      },
    },
  },
};

export const WithObjectFitContain: Story = {
  args: {
    alt: 'Image with object-fit contain',
    height: '300px',
    images: {
      DEFAULT: { src: IMAGES.IMAGE_1 },
    },
    objectFit: 'contain',
    width: '100%',
  },
  parameters: {
    docs: {
      source: {
        code: `<Image
  alt="Image with object-fit contain"
  height="300px"
  width="100%"
  objectFit="contain"
  images={{
    DEFAULT: { src: IMAGES.IMAGE_1 },
  }}
/>`,
      },
    },
  },
};

export const WithCustomDimensions: Story = {
  args: {
    alt: 'Image with custom dimensions',
    height: '400px',
    images: {
      DEFAULT: { src: IMAGES.IMAGE_1 },
    },
    width: '600px',
  },
  parameters: {
    docs: {
      source: {
        code: `<Image
  alt="Image with custom dimensions"
  height="400px"
  width="600px"
  images={{
    DEFAULT: { src: IMAGES.IMAGE_1 },
  }}
/>`,
      },
    },
  },
};

export const EagerLoading: Story = {
  args: {
    alt: 'Image with eager loading',
    images: {
      DEFAULT: { src: IMAGES.IMAGE_1 },
    },
    loading: 'eager',
  },
  parameters: {
    docs: {
      source: {
        code: `<Image
  alt="Image with eager loading"
  loading="eager"
  images={{
    DEFAULT: { src: IMAGES.IMAGE_1 },
  }}
/>`,
      },
    },
  },
};

export const LazyLoading: Story = {
  args: {
    alt: 'Image with lazy loading',
    images: {
      DEFAULT: { src: IMAGES.IMAGE_1 },
    },
    loading: 'lazy',
  },
  parameters: {
    docs: {
      source: {
        code: `<Image
  alt="Image with lazy loading"
  loading="lazy"
  images={{
    DEFAULT: { src: IMAGES.IMAGE_1 },
  }}
/>`,
      },
    },
  },
};

export const CompleteExample: Story = {
  args: {
    alt: 'Complete example with all features',
    borderRadius: '12px',
    caption: 'Beautiful landscape - Photo credit: Jane Doe',
    height: '400px',
    images: {
      DEFAULT: { src: IMAGES.IMAGE_1 },
      [DEVICE_BREAKPOINTS.DESKTOP]: {
        media: '(min-width: 900px)',
        src: IMAGES.IMAGE_1,
        width: '800',
      },
      [DEVICE_BREAKPOINTS.MOBILE]: {
        media: '(max-width: 600px)',
        src: IMAGES.IMAGE_3,
        width: '400',
      },
      [DEVICE_BREAKPOINTS.TABLET]: {
        media: '(min-width: 600px)',
        src: IMAGES.IMAGE_2,
        width: '600',
      },
    },
    loading: 'lazy',
    objectFit: 'cover',
    ratio: 16 / 9,
    title: 'Landscape image',
  },
  parameters: {
    docs: {
      source: {
        code: `<Image
  alt="Complete example with all features"
  title="Landscape image"
  caption="Beautiful landscape - Photo credit: Jane Doe"
  borderRadius="12px"
  height="400px"
  objectFit="cover"
  ratio={16 / 9}
  loading="lazy"
  images={{
    DEFAULT: { src: IMAGES.IMAGE_1 },
    [DEVICE_BREAKPOINTS.DESKTOP]: {
      media: '(min-width: 900px)',
      src: IMAGES.IMAGE_1,
      width: '800',
    },
    [DEVICE_BREAKPOINTS.TABLET]: {
      media: '(min-width: 600px)',
      src: IMAGES.IMAGE_2,
      width: '600',
    },
    [DEVICE_BREAKPOINTS.MOBILE]: {
      media: '(max-width: 600px)',
      src: IMAGES.IMAGE_3,
      width: '400',
    },
  }}
/>`,
      },
    },
  },
};

export const ProductImage: Story = {
  args: {
    alt: 'Product showcase',
    borderRadius: '8px',
    height: '300px',
    images: {
      DEFAULT: { src: IMAGES.IMAGE_1 },
    },
    objectFit: 'cover',
    ratio: 1,
    width: '300px',
  },
  parameters: {
    docs: {
      source: {
        code: `<Image
  alt="Product showcase"
  borderRadius="8px"
  height="300px"
  width="300px"
  objectFit="cover"
  ratio={1}
  images={{
    DEFAULT: { src: IMAGES.IMAGE_1 },
  }}
/>`,
      },
    },
  },
};

export const HeroImage: Story = {
  args: {
    alt: 'Hero banner',
    height: '500px',
    images: {
      DEFAULT: { src: IMAGES.IMAGE_1 },
      [DEVICE_BREAKPOINTS.DESKTOP]: {
        media: '(min-width: 900px)',
        src: IMAGES.IMAGE_1,
        width: '1920',
      },
      [DEVICE_BREAKPOINTS.MOBILE]: {
        media: '(max-width: 600px)',
        src: IMAGES.IMAGE_3,
        width: '600',
      },
      [DEVICE_BREAKPOINTS.TABLET]: {
        media: '(min-width: 600px)',
        src: IMAGES.IMAGE_2,
        width: '1200',
      },
    },
    loading: 'eager',
    objectFit: 'cover',
    ratio: 21 / 9,
    width: '100%',
  },
  parameters: {
    docs: {
      source: {
        code: `<Image
  alt="Hero banner"
  height="500px"
  width="100%"
  objectFit="cover"
  ratio={21 / 9}
  loading="eager"
  images={{
    DEFAULT: { src: IMAGES.IMAGE_1 },
    [DEVICE_BREAKPOINTS.DESKTOP]: {
      media: '(min-width: 900px)',
      src: IMAGES.IMAGE_1,
      width: '1920',
    },
    [DEVICE_BREAKPOINTS.TABLET]: {
      media: '(min-width: 600px)',
      src: IMAGES.IMAGE_2,
      width: '1200',
    },
    [DEVICE_BREAKPOINTS.MOBILE]: {
      media: '(max-width: 600px)',
      src: IMAGES.IMAGE_3,
      width: '600',
    },
  }}
/>`,
      },
    },
  },
};

export const ThumbnailGallery: Story = {
  args: {
    alt: 'Gallery image',
    images: {
      DEFAULT: { src: IMAGES.IMAGE_1 },
    },
  },
  parameters: {
    docs: {
      source: {
        code: `<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
  <Image
    alt="Gallery image 1"
    borderRadius="8px"
    height="150px"
    width="150px"
    objectFit="cover"
    ratio={1}
    images={{ DEFAULT: { src: IMAGES.IMAGE_1 } }}
  />
  <Image
    alt="Gallery image 2"
    borderRadius="8px"
    height="150px"
    width="150px"
    objectFit="cover"
    ratio={1}
    images={{ DEFAULT: { src: IMAGES.IMAGE_2 } }}
  />
  <Image
    alt="Gallery image 3"
    borderRadius="8px"
    height="150px"
    width="150px"
    objectFit="cover"
    ratio={1}
    images={{ DEFAULT: { src: IMAGES.IMAGE_3 } }}
  />
</div>`,
      },
    },
  },
  render: () => (
    <div
      style={{
        display: 'grid',
        gap: '16px',
        gridTemplateColumns: 'repeat(3, 1fr)',
      }}
    >
      <Story
        alt="Gallery image 1"
        borderRadius="8px"
        height="150px"
        images={{
          DEFAULT: { src: IMAGES.IMAGE_1 },
        }}
        objectFit="cover"
        ratio={1}
        width="150px"
      />
      <Story
        alt="Gallery image 2"
        borderRadius="8px"
        height="150px"
        images={{
          DEFAULT: { src: IMAGES.IMAGE_2 },
        }}
        objectFit="cover"
        ratio={1}
        width="150px"
      />
      <Story
        alt="Gallery image 3"
        borderRadius="8px"
        height="150px"
        images={{
          DEFAULT: { src: IMAGES.IMAGE_3 },
        }}
        objectFit="cover"
        ratio={1}
        width="150px"
      />
    </div>
  ),
};
