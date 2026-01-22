import type { ArgTypes } from 'storybook/internal/types';

import { TextVariantType } from '@/lib/designSystem/kubit/components/text/variants';
import { TextCountVariantType } from '@/lib/designSystem/kubit/components/textCount/variants';
import { configArgTypes } from '@/lib/storybook/argtypes/argtypes';
import { CATEGORY_CONTROL } from '@/lib/storybook/constants/categoryControl';

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    currentCharacters: {
      control: { type: 'number' },
      description: 'Current number of characters',
      table: {
        category: CATEGORY_CONTROL.CONTENT,
        type: {
          summary: 'number',
        },
      },
      type: { name: 'number', required: true },
    },
    id: {
      control: { type: 'text' },
      description: 'String used for id screen reader text',
      table: {
        category: CATEGORY_CONTROL.ACCESIBILITY,
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string', required: true },
    },
    leftColor: {
      control: { type: 'color' },
      description: 'TextCount left color',
      table: {
        category: CATEGORY_CONTROL.MODIFIERS,
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string' },
    },
    leftWeight: {
      control: { type: 'text' },
      description: 'TextCount left font weight',
      table: {
        category: CATEGORY_CONTROL.MODIFIERS,
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string' },
    },
    marginTop: {
      control: { type: 'text' },
      description: 'Margin top',
      table: {
        category: CATEGORY_CONTROL.MODIFIERS,
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string' },
    },
    maxLength: {
      control: { type: 'number' },
      description: 'Max length of characters',
      table: {
        category: CATEGORY_CONTROL.CONTENT,
        type: {
          summary: 'number',
        },
      },
      type: { name: 'number', required: true },
    },
    rightColor: {
      control: { type: 'color' },
      description: 'TextCount right color',
      table: {
        category: CATEGORY_CONTROL.MODIFIERS,
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string' },
    },
    rightWeight: {
      control: { type: 'text' },
      description: 'TextCount right font weight',
      table: {
        category: CATEGORY_CONTROL.MODIFIERS,
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string' },
    },
    screenReaderText: {
      control: { type: 'text' },
      description: 'String used for screen reader text',
      table: {
        category: CATEGORY_CONTROL.ACCESIBILITY,
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string', required: true },
    },
    textVariant: {
      control: { type: 'select' },
      description: 'Text variant styles',
      options: Object.keys(TextVariantType),
      table: {
        category: CATEGORY_CONTROL.MODIFIERS,
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string' },
    },
    variant: {
      control: { type: 'select' },
      description: 'Variant to add styles',
      options: Object.keys(TextCountVariantType),
      table: {
        category: CATEGORY_CONTROL.MODIFIERS,
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string', required: true },
    },
  };
};
