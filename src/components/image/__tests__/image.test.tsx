import * as React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { DeviceBreakpointsType } from '@/types/breakpoints';

import { Image } from '../image';
import { ImageLoadingType } from '../types';

// Improve this. Update jest config
const IMAGE_DESKTOP = '@/assets/storybook/images/image_1.png';
const IMAGE_LARGE_DESKTOP = '@/assets/storybook/images/image_2.png';
const IMAGE_TABLET = '@/assets/storybook/images/image_3.png';

const baseMockProps = {
  images: {
    DEFAULT: { src: IMAGE_DESKTOP },
    [DeviceBreakpointsType.LARGE_DESKTOP]: {
      src: IMAGE_LARGE_DESKTOP,
      media: '(min-width:1400px)',
    },
    [DeviceBreakpointsType.DESKTOP]: { src: IMAGE_DESKTOP, media: '(min-width: 900px)' },
    [DeviceBreakpointsType.TABLET]: { src: IMAGE_TABLET, media: '(min-width: 600px)' },
  },
  caption: 'caption',
  alt: 'alt text',
  title: 'alt text',
  width: '600px',
  dataTestId: 'imageComponent',
};

const mockPropsWithLoading = {
  ...baseMockProps,
  loading: ImageLoadingType.LAZY,
  ratio: 0,
};

const mockPropsNoLoading = {
  ...baseMockProps,
  ratio: 1,
};

test('Image component - loading', async () => {
  const { container, getByTestId } = renderProvider(<Image {...mockPropsWithLoading} />);

  const image = getByTestId('imageComponent');

  expect(image).toBeDefined();
  const results = await axe(container);
  expect(container).toHTMLValidate();
  expect(results).toHaveNoViolations();
});

test('Image component - no loading', async () => {
  const { container, getByTestId } = renderProvider(<Image {...mockPropsNoLoading} />);

  const image = getByTestId('imageComponent');

  expect(image).toBeDefined();
  const results = await axe(container);
  expect(container).toHTMLValidate();
  expect(results).toHaveNoViolations();
});
