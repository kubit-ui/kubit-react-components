import { ICONS } from '@/assets';
import { LinkActionType } from '@/components/link';
import { CATEGORY_CONTROL } from '@/constants/categoryControl';
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
      type: { name: 'string', required: true },
      control: { type: 'select' },
      description: 'CardImage variant',
      options: Object.keys(variants[themeSelected].CardImageStateVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    image: {
      description: 'Add image',
      type: { name: 'object', required: true },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'ImagesType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    title: {
      description: 'Object with title properties',
      type: { name: 'object', required: true },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'CardImageTitleAndDescriptionType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    linkVariant: {
      description: 'Variant for links styling',
      options: Object.keys(variants[themeSelected].LinkVariantType || {}),
      control: { type: 'select' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    linkOnClick: {
      description: 'The event occurs when the user clicks on the element',
      control: false,
      table: {
        type: { summary: 'React.MouseEventHandler' },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    linkContent: {
      description: 'Text with the link',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    description: {
      description: 'Object with description properties',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'CardImageTitleAndDescriptionType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    linkAction: {
      options: Object.keys(LinkActionType),
      control: { type: 'select' },
      type: { name: 'string', required: true },
      description: 'Link action type',
      table: {
        type: {
          summary: 'LinkActionType',
          detail: Object.keys(LinkActionType).join(', '),
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    linkIcon: {
      description: 'Add link icon',
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
    linkUrl: {
      description: 'Action link URL',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    onClickTextLink: {
      description: 'The event occurs when the user clicks on the link',
      control: false,
      table: {
        type: { summary: 'MouseEventHandler<HTMLButtonElement>' },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    altTextImage: {
      description: 'Alt text image',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: {
          summary: '',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    as: {
      description: 'as',
      type: { name: 'string' },
      control: { type: 'text' },
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
