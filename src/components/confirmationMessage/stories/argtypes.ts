import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn } from '@/types';

import { ALIGN_TYPE, ConfirmationMessageStateType } from '../types';

export const argtypes = (variants: IThemeObjectVariants, themeSelected: string): ArgTypesReturn => {
  return {
    theme: {
      table: {
        disable: true,
      },
    },
    variant: {
      type: { name: 'string', required: true },
      control: { type: 'select' },
      description: 'ConfirmationMessage variant',
      options: Object.keys(variants[themeSelected].ConfirmationMessageVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    state: {
      description: 'Confirmation Message state type',
      options: Object.keys(ConfirmationMessageStateType),
      control: { type: 'select' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'ConfirmationMessageStateType',
          detail: Object.keys(ConfirmationMessageStateType).join(', '),
        },
        defaultValue: { summary: ConfirmationMessageStateType.SUCCESS },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    title: {
      description: 'Object with the information for title.',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'TitleTextType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    description: {
      description: 'Object with the information for description.',
      control: { type: 'object' },
      type: { name: 'object', required: true },
      table: {
        type: {
          summary: 'DescriptionTextType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    decorativeElement: {
      description: 'Set the decorative element to show into the component',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'IDecorativeElementStandAlone',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    align: {
      description: 'Align all content confirmation message',
      options: Object.keys(ALIGN_TYPE),
      control: { type: 'select' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'ALIGN_TYPE',
          detail: Object.keys(ALIGN_TYPE).join(', '),
        },
        defaultValue: {
          summary: ALIGN_TYPE.CENTER,
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    footer: {
      description: 'Object with the footer properties',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'FooterType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    secondaryDescription: {
      description:
        'Object with the information for secondary. It provides the user with more detailed information on the status of the process performed',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'SecondaryDescriptionTextType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    content: {
      description: 'Optional content. Everything is allowed',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'ReactNode',
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
