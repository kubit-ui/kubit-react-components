import type { Meta, StoryObj } from '@storybook/react';

import { IMAGES } from '@/assets';
import { STYLES_NAME } from '@/constants';
import { themesObject } from '@/designSystem/themesObject';
import { DeviceBreakpointsType } from '@/types';

import { Image as Story } from '../image';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Resources/Image',
  component: Story,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: argtypes(),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const Image: Story = {
  args: {
    title: 'Image title',
    alt: 'Image alt text',
    images: {
      DEFAULT: { src: IMAGES.IMAGE_1 },
      [DeviceBreakpointsType.LARGE_DESKTOP]: {
        src: IMAGES.IMAGE_1,
        media: '(min-width:1400px)',
      },
      [DeviceBreakpointsType.DESKTOP]: {
        src: IMAGES.IMAGE_1,
        media: '(min-width: 900px)',
        width: '600',
      },
      [DeviceBreakpointsType.TABLET]: {
        src: IMAGES.IMAGE_2,
        media: '(min-width: 600px)',
        width: '500',
      },
      [DeviceBreakpointsType.MOBILE]: {
        src: IMAGES.IMAGE_3,
        media: '(max-width: 600px)',
        width: '200',
      },
    },
    themeArgs: themesObject[themeSelected][STYLES_NAME.IMAGE],
  },
};
