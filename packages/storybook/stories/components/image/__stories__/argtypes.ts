import type { ArgTypes } from 'storybook/internal/types';

import { configArgTypes } from '@/stories/argtypes/argtypes';
import { getDisabledArgTypes } from '@/stories/argtypes/disabledArgTypes';
import { getImageArgTypes } from '@/stories/argtypes/imageArgTypes';
import { getSelectorArgTypes } from '@/stories/argtypes/selectorArgTypes';
import { getStringtArgTypes } from '@/stories/argtypes/stringArgTypes';
import { CATEGORY_CONTROL } from '@/stories/constants/categoryControl';

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ...getDisabledArgTypes([
      'onLoad',
      'component',
      'images',
      'images.tablet.media',
      'images.mobile.media',
      'images.desktop.media',
      'images.large_desktop.media',
      'images.large_desktop.src',
      'images.tablet.width',
      'images.mobile.width',
      'images.desktop.width',
    ]),
    alt: getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      extraDescription:
        'Alternative text for the image, used for accessibility and SEO purposes.',
      keyName: 'alt',
      name: 'image',
    }),
    borderRadius: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'borderRadius',
      name: 'image',
    }),
    caption: getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      extraDescription:
        'Caption for the image, typically displayed below the image.',
      keyName: 'caption',
      name: 'image',
    }),
    height: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'height',
      name: 'image',
    }),
    'images.DEFAULT.src': getImageArgTypes({
      name: 'DEFAULT.src',
      subcategory: 'image',
    }),
    'images.desktop.src': getImageArgTypes({
      name: 'desktop.src',
      subcategory: 'image',
    }),
    'images.large_desktop.src': getImageArgTypes({
      name: 'large_desktop.src',
      subcategory: 'image',
    }),
    'images.mobile.src': getImageArgTypes({
      name: 'mobile.src',
      subcategory: 'image',
    }),
    'images.tablet.src': getImageArgTypes({
      name: 'tablet.src',
      subcategory: 'image',
    }),
    loading: getSelectorArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      defaultValue: 'eager',
      keyName: 'loading',
      name: 'image',
      options: {
        eager: 'eager',
        lazy: 'lazy',
      },
    }),
    objectFit: getSelectorArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      defaultValue: 'contain',
      keyName: 'objectFit',
      name: 'image',
      options: {
        contain: 'contain',
        cover: 'cover',
        fill: 'fill',
        initial: 'initial',
        none: 'none',
        scaleDown: 'scale-down',
      },
    }),
    ratio: {
      control: { type: 'number' },
      description: 'Ratio of the image',
      table: {
        category: CATEGORY_CONTROL.MODIFIERS,
        type: {
          summary: 'number',
        },
      },
      type: { name: 'number' },
    },
    title: getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      extraDescription:
        'Title for the image, typically displayed as a tooltip.',
      keyName: 'title',
      name: 'image',
    }),
    width: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      extraDescription: 'Width of the image',
      keyName: 'width',
      name: 'image',
    }),
  };
};
