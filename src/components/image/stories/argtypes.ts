import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { ArgTypesReturn } from '@/types';

import { ImageLoadingType, ImageObjectFitType } from '../types';

export const argtypes = (): ArgTypesReturn => {
  return {
    images: {
      description: 'The urls of the required images',
      control: false,
      type: { required: true },
      table: {
        type: {
          summary:
            '{ DESKTOP: { src: string; }; TABLET?: { src: string; media: string; } | undefined; MOBILE?: { src: string; media: string; } | undefined; }',
          detail: `example: DEFAULT: { src: IMAGE_DESKTOP },
          LARGE_DESKTOP: { src: IMAGE_LARGE_DESKTOP, media: '(min-width:1400px)' },
          DESKTOP: { src: IMAGE_DESKTOP, media: '(min-width: 1200px)' },
          TABLET: { src: IMAGE_TABLET, media: '(min-width: 900px)' },
          MOBILE: { src: IMAGE_MOBILE, media: '(max-width: 600px)' },`,
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    caption: {
      description: 'Description about the image',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    loading: {
      description: 'The way in which the image is loaded',
      options: Object.keys(ImageLoadingType),
      control: { type: 'select' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'ImageLoadingType',
          detail: Object.keys(ImageLoadingType).join(', '),
        },
        defaultValue: {
          summary: ImageLoadingType.LAZY,
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    alt: {
      description: 'Alternative text of the image',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    title: {
      description: 'Title of the image',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    width: {
      description: 'Width of the image',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '600px',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    height: {
      description: 'Height of the image',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    onLoad: {
      description: 'Function that executes when image is loaded',
      control: false,
      table: {
        type: {
          summary: 'React.ReactEventHandler<HTMLImageElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    ratio: {
      description: 'Ratio of the image',
      control: { type: 'number' },
      type: { name: 'number' },
      table: {
        type: {
          summary: 'number',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    borderRadius: {
      description: 'Border radius of the image',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    objectFit: {
      description:
        'Property is used to specify how an inmage should be resized to fit its container',
      options: Object.keys(ImageObjectFitType),
      control: { type: 'select' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'ImageObjectFitType',
          detail: Object.keys(ImageObjectFitType).join(', '),
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    dataTestId: {
      description: 'String used for testing',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.TESTING,
      },
    },
  };
};
