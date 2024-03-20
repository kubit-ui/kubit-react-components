import { ICONS } from '@/assets';
import { CATEGORY_CONTROL } from '@/constants';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { objectFlip } from '@/storybook/utils/utils';
import { ArgTypesReturn } from '@/types';

export const argtypes = (variants: IThemeObjectVariants, themeSelected: string): ArgTypesReturn => {
  return {
    theme: {
      table: {
        disable: true,
      },
    },
    variant: {
      control: { type: 'select' },
      type: { name: 'string', required: true },
      description: 'Empty state variant',
      options: Object.keys(variants[themeSelected].EmptyStateVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    state: {
      description: 'State of the variant',
      options: Object.keys(variants[themeSelected].EmptyStateStateType || {}),
      control: { type: 'select' },
      type: { name: 'string', required: true },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    title: {
      description: 'Object with title properties',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'TitleTextType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    subtitle: {
      description: 'Object with subtitle properties',
      control: { type: 'object' },
      type: { name: 'object', required: true },
      table: {
        type: {
          summary: 'SubtitleTextType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    button: {
      description: 'Object with button properties',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'ButtonType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    icon: {
      description: 'Add icon',
      options: Object.values(ICONS),
      type: { name: 'string' },
      control: { type: 'select', labels: objectFlip(ICONS) },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    iconAltText: {
      description:
        'Alt text of the main icon  if component is an  img or it will be aria-label if component is svg',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    iconColor: {
      description: 'Color of the main icon',
      control: { type: 'color' },
      type: { name: 'string' },
      table: {
        type: { summary: 'string' },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    link: {
      description: 'Object with link properties',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'LinkType',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    illustration: {
      description: 'Object with illustration properties',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'IElementOrillustration',
        },
        category: CATEGORY_CONTROL.CONTENT,
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
    ctv: {
      description: 'Object used for update variant styles',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'object',
        },
        category: CATEGORY_CONTROL.CUSTOMIZATION,
      },
    },
  };
};
