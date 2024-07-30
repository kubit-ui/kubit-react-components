import { ButtonType } from '@/components/button';
import { LinkTargetType } from '@/components/link';
import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn } from '@/types';

export const argtypes = (variants: IThemeObjectVariants, themeSelected: string): ArgTypesReturn => {
  return {
    themeArgs: {
      table: {
        disable: true,
      },
    },
    variant: {
      type: { name: 'string', required: true },
      control: { type: 'select' },
      description: 'NavigationCard variant',
      options: Object.keys(variants[themeSelected].NavigationCardVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    decorative: {
      description: 'Set the decorative element to show into the component',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'DecorativePropsType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    title: {
      description: 'Text that explains the action',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'NavigationCardTextType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    description: {
      description: 'Description that explains the action',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'NavigationCardTextType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    arrowIcon: {
      description: 'This arrow icon indicates there is a navigation',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    arrowIconText: {
      description: 'Arrow icon alternative text',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'NavigationCardTextType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    tag: {
      description: 'A optional informative tag',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'NavigationCardTagType',
          detail:
            // eslint-disable-next-line quotes
            "Omit<ITag, 'variant' | 'option'> & { variant?: string; option?: string; screenReaderText?: string; }",
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    url: {
      description:
        'URL (part of the IGenericLink interface), when no specify, the render component will be a button',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    type: {
      description: 'Type of the button (when no url is specified)',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        defaultValue: {
          summary: 'ButtonType.BUTTON',
        },
        type: {
          summary: 'ButtonType',
          detail: Object.keys(ButtonType).join(', '),
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    target: {
      description:
        'The target attribute specifies where to open the linked document (part of the IGenericLink interface)',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'LinkTargetType',
          detail: Object.keys(LinkTargetType).join(', '),
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
    onClick: {
      description:
        'The event occurs when the user clicks on the element (part of the IGenericLink interface)',
      control: false,
      table: {
        type: {
          summary: 'React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    ctv: {
      description: 'Object used for update variant styles',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'object',
        },
        category: CATEGORY_CONTROL.CUSTOMIZATION,
      },
    },
  };
};
