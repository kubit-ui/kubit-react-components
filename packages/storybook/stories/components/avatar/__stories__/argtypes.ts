import type { ArgTypes } from 'storybook/internal/types';

import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';

import { getAdditionalClassesArgTypes } from '@/stories/argtypes/additionalClassesArgTypes';
import { configArgTypes } from '@/stories/argtypes/argtypes';
import { getBooleanArgTypes } from '@/stories/argtypes/booleanArgTypes';
import { getDisabledArgTypes } from '@/stories/argtypes/disabledArgTypes';
import { getIconArgTypes } from '@/stories/argtypes/iconArgTypes';
import { getNumbertArgTypes } from '@/stories/argtypes/numberArgTypes';
import { getSelectorArgTypes } from '@/stories/argtypes/selectorArgTypes';
import { getStringtArgTypes } from '@/stories/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/stories/argtypes/variantArgtypes';
import { IMAGES } from '@/stories/assets/images/images';
import { CATEGORY_CONTROL } from '@/stories/constants/categoryControl';
import { objectFlip } from '@/stories/utils/utils';

const { AvatarSize, DotSizeType, DotVariantType } = KUBIT_VARIANTS;

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ...getDisabledArgTypes([
      'contentType',
      'linkComponent',
      'cssClasses',
      'onClick',
      'link',
      'additionalClasses',
      'dot',
      'icon',
      'initials',
    ]),
    'additionalClasses.avatar': {
      ...getAdditionalClassesArgTypes({
        name: 'avatar',
        subCategory: 'additionalClasses',
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
    'additionalClasses.dot': {
      ...getAdditionalClassesArgTypes({
        name: 'dot',
        subCategory: 'additionalClasses',
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
    'additionalClasses.icon': {
      ...getAdditionalClassesArgTypes({
        name: 'icon',
        subCategory: 'additionalClasses',
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
    ['aria-describedby']: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'aria-describedby',
      name: 'avatar',
    }),
    ['aria-hidden']: getBooleanArgTypes({
      descriptionName: 'avatar',
      name: 'aria-hidden',
      subCategory: CATEGORY_CONTROL.ACCESIBILITY,
    }),
    ['aria-label']: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'aria-label',
      name: 'avatar',
    }),
    ['aria-labelledby']: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'aria-labelledby',
      name: 'avatar',
    }),
    backgroundColor: getSelectorArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'backgroundColor',
      name: 'avatar',
      options: {
        'color-default': 'color-default',
        'color-red': 'color-red',
        'color-white': 'color-white',
      },
    }),
    'dot.maxNumber': getNumbertArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      extraDescription: 'Maximum number to display before showing +',
      keyName: 'maxNumber',
      name: 'dot',
      subcategory: 'dot',
    }),
    'dot.number': getNumbertArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      extraDescription: 'Number to display in the dot',
      keyName: 'number',
      name: 'dot',
      subcategory: 'dot',
    }),
    'dot.size': getVariantArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyVariant: 'size',
      name: 'dot',
      subCategory: 'dot',
      variants: { ...DotSizeType },
    }),
    'dot.variant': getVariantArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyVariant: 'variant',
      name: 'dot',
      subCategory: 'dot',
      variants: { ...DotVariantType },
    }),
    'icon.icon': getIconArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      name: 'avatar icon',
    }),
    image: {
      control: { labels: objectFlip(IMAGES), type: 'select' },
      description: 'Image of the avatar',
      options: Object.values(IMAGES),
      table: {
        category: CATEGORY_CONTROL.CONTENT,
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string' },
    },
    'initials.content': getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      extraDescription: 'Text content for the avatar initials',
      keyName: 'initials.content',
      name: 'avatar initials',
    }),
    maxLengthInitials: getNumbertArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'maxLengthInitials',
      name: 'avatar',
    }),
    size: {
      ...getVariantArgTypes({
        keyVariant: 'size',
        name: 'avatar',
        variants: { ...AvatarSize },
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
    url: getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      keyName: 'url',
      name: 'avatar',
    }),
  };
};
