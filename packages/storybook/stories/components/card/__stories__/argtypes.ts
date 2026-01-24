import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';
import type { ArgTypes } from 'storybook/internal/types';

import { getAdditionalClassesArgTypes } from '@/stories/argtypes/additionalClassesArgTypes';
import { configArgTypes } from '@/stories/argtypes/argtypes';
import { getStringtArgTypes } from '@/stories/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/stories/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/stories/constants/categoryControl';

const { CardVariants } = KUBIT_VARIANTS;

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    'additionalClasses.card': {
      ...getAdditionalClassesArgTypes({
        name: 'card',
        subCategory: 'additionalClasses',
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
    'additionalClasses.content': {
      ...getAdditionalClassesArgTypes({
        name: 'content',
        subCategory: 'additionalClasses',
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
    'additionalClasses.footer': {
      ...getAdditionalClassesArgTypes({
        name: 'footer',
        subCategory: 'additionalClasses',
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
    'additionalClasses.header': {
      ...getAdditionalClassesArgTypes({
        name: 'header',
        subCategory: 'additionalClasses',
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
    content: getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      keyName: 'content',
      name: 'card',
    }),
    footer: getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      keyName: 'footer',
      name: 'card',
    }),
    header: getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      keyName: 'header',
      name: 'card',
    }),
    onClick: {
      control: false,
      description: 'Function to be called when the card is clicked',
      table: {
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onMouseEnter: {
      control: false,
      description: 'Function to be called when mouse enters the card',
      table: {
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onMouseLeave: {
      control: false,
      description: 'Function to be called when mouse leaves the card',
      table: {
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    state: {
      control: 'select',
      description: 'The state of the card',
      options: ['default', 'selected'],
      table: {
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    variant: getVariantArgTypes({
      name: 'card',
      variants: CardVariants,
    }),
  };
};
