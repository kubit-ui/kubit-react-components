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
  tags: ['autodocs', 'resources'],
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

export const Image: Story = {
  args: {
    ...commonArgs,
  },
};
