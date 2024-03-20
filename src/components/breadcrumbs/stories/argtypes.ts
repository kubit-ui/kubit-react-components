import { TextComponentType } from '@/components/text';
import { CATEGORY_CONTROL } from '@/constants';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn } from '@/types';

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
      description: 'Container variant',
      options: Object.keys(variants[themeSelected].BreadcrumbsVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    link: {
      description: 'Object with link properties',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'BreadcrumbsLinkType',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    dividerIcon: {
      description: 'Obeject with dividerIcon properties. Icon to show into breadcrumd separator',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    crumbs: {
      description: 'Array of objects with label and url properties representing each crumb',
      type: { name: 'array', required: true },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'CrumbType[]',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    lastOneCrumbComponent: {
      description: 'HTML tag for the last crumb',
      control: { type: 'select' },
      options: Object.values(TextComponentType),
      type: { name: 'string' },
      table: {
        type: {
          summary: 'TextComponentType',
          detail: Object.keys(TextComponentType).join(', '),
        },
        defaultValue: { summary: TextComponentType.SPAN },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    minCharLimit: {
      description:
        'Indicates the minimum number of characters to determinate if a crumb text is long enough to set a maximum width',
      type: { name: 'number' },
      control: { type: 'number' },
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: { summary: 20 },
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
