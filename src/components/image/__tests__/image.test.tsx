import { screen } from '@testing-library/react';
import { axe } from 'vitest-axe';

import { render } from '@/lib/tests/render/render';
import { DEVICE_BREAKPOINTS } from '@/lib/types/breakpoints/breakpoints';

import { Image } from '../image';
import type { ImageStandAloneProps } from '../types/image';

const IMAGE_DESKTOP = '@/storybook/assets/images/image_1.png';
const IMAGE_LARGE_DESKTOP = '@/storybook/assets/images/image_2.png';
const IMAGE_TABLET = '@/storybook/assets/images/image_3.png';

const baseMockProps = {
  alt: 'alt text',
  caption: 'caption',
  'data-testid': 'imageComponent',
  images: {
    DEFAULT: { src: IMAGE_DESKTOP },
    [DEVICE_BREAKPOINTS.DESKTOP]: {
      media: '(min-width: 900px)',
      src: IMAGE_DESKTOP,
    },
    [DEVICE_BREAKPOINTS.LARGE_DESKTOP]: {
      media: '(min-width:1400px)',
      src: IMAGE_LARGE_DESKTOP,
    },
    [DEVICE_BREAKPOINTS.TABLET]: {
      media: '(min-width: 600px)',
      src: IMAGE_TABLET,
    },
  },
  title: 'alt text',
  width: '600',
};

const mockPropsWithLoading: ImageStandAloneProps = {
  ...baseMockProps,
  loading: 'lazy',
  ratio: 0,
};

const mockPropsNoLoading = {
  ...baseMockProps,
  ratio: 1,
};

describe('Image component', () => {
  it('Image component - loading', async () => {
    const { container } = render(<Image {...mockPropsWithLoading} />);

    const image = screen.getByTestId('imageComponent');

    expect(image).toBeDefined();
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('Image component - no loading', async () => {
    const { container } = render(<Image {...mockPropsNoLoading} />);

    const image = screen.getByTestId('imageComponent');

    expect(image).toBeDefined();
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });
});
