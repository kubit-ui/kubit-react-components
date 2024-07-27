import { TextDecorationType } from '@/components/text';
import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn, ROLES } from '@/types';

import { LinkActionType, LinkPositionType, LinkTargetType } from '../types';

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
      description: 'Link variant',
      options: Object.keys(variants[themeSelected].LinkVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    action: {
      options: Object.keys(LinkActionType),
      control: { type: 'select' },
      type: { name: 'string' },
      description: 'Link action type',
      table: {
        type: {
          summary: 'LinkActionType',
          detail: Object.keys(LinkActionType).join(', '),
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    ['aria-label']: {
      description: 'Defines a string value that labels an interactive element',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    ['aria-describedby']: {
      description:
        'Identifies the element that describes the element on which the attribute is set',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    disabled: {
      description: 'Specifies if the link element is disabled or not',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    children: {
      description: 'Children of the link',
      control: { type: 'text' },
      type: { name: 'string', required: true },
      table: {
        type: {
          summary: 'string | JSX.Element',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    color: {
      description: 'Color of the link (By default the theme has the color defined)',
      control: { type: 'color' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    decoration: {
      description: 'Include underline in text',
      type: { name: 'string' },
      control: { type: 'select' },
      options: Object.values(TextDecorationType),
      table: {
        type: {
          summary: 'TextDecorationType',
          detail: Object.values(TextDecorationType).join(', '),
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    icon: {
      description: 'Object with icon properties',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    iconPosition: {
      options: Object.keys(LinkPositionType),
      type: { name: 'string' },
      control: { type: 'select' },
      description: 'Select link icon position',
      table: {
        type: {
          summary: 'LinkPositionType',
          detail: Object.keys(LinkPositionType).join(', '),
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    onClick: {
      description: 'The event occurs when the user clicks on the element',
      control: false,
      table: {
        type: {
          summary: 'MouseEventHandler<HTMLButtonElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    role: {
      description: 'Provide semantic meaning to the option',
      control: false,
      type: { name: 'string' },
      table: {
        type: {
          summary: 'ROLES',
          detail: Object.keys(ROLES).join(', '),
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    target: {
      options: Object.keys(LinkTargetType),
      control: { type: 'select' },
      type: { name: 'string' },
      description: 'Set the target into anchor tag',
      table: {
        type: {
          summary: 'LinkTargetType',
          detail: Object.keys(LinkTargetType).join(', '),
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    textVariant: {
      description: 'Select text variant type (By default the theme has the variant defined)',
      type: { name: 'string' },
      control: { type: 'select' },
      options: Object.keys(variants[themeSelected].TextVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    url: {
      description: 'Link url',
      type: { name: 'string', required: true },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    draggable: {
      description: 'Set the draggable attribute',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    weight: {
      description: 'Font weight (By default the theme has the weight defined)',
      type: { name: 'number' },
      control: { type: 'number' },
      table: {
        type: {
          summary: 'number',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    alignCenter: {
      description: 'Align or not to center',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
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
