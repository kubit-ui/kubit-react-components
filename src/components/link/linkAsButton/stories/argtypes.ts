import { ICONS } from '@/assets';
import { ButtonType, IconPositionType } from '@/components/button';
import { CATEGORY_CONTROL } from '@/constants';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { objectFlip } from '@/storybook/utils/utils';
import { ArgTypesReturn, ROLES } from '@/types';

import { LinkTargetType } from '../../types';

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
      description: 'Button variant',
      options: Object.keys(variants[themeSelected].ButtonVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    size: {
      description: 'Button size',
      options: Object.keys(variants[themeSelected].ButtonSizeType || {}),
      control: { type: 'select' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    disabled: {
      description: 'Specifies if the button element is disabled or not',
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
    type: {
      options: Object.keys(ButtonType),
      description: 'Define buttons type',
      control: { type: 'select' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'ButtonType',
          detail: Object.keys(ButtonType).join(', '),
        },
        defaultValue: { summary: ButtonType.BUTTON },
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
    children: {
      defaultValue: 'Content',
      control: { type: 'text' },
      type: { name: 'string' },
      description: 'This will appear in your button',
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    role: {
      description: 'Provide semantic meaning to the component',
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
    altIcon: {
      description: 'Alt text of the icon',
      type: { name: 'string' },
      control: false,
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: '' },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    icon: {
      options: Object.values(ICONS),
      description: 'Add icon',
      control: { type: 'select', labels: objectFlip(ICONS) },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    ariaLabel: {
      description: 'Aria label of the button',
      type: { name: 'string' },
      control: false,
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    ariaExpanded: {
      description: 'Aria label when button can open a popover',
      type: { name: 'string' },
      control: false,
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    ariaControls: {
      description: 'Aria label when button can open a popover an associated to a list',
      type: { name: 'string' },
      control: false,
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    ariaDescribedby: {
      description: 'Aria text that should be read when the button is focused',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    loaderAltText: {
      defaultValue: 'Loader alternative text',
      description: 'Set the loader alternative text',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    isFullWidth: {
      description: 'Show full width',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    iconPosition: {
      description: 'Set icon position',
      options: Object.keys(IconPositionType),
      type: { name: 'string' },
      control: { type: 'select' },
      table: {
        type: {
          summary: 'IconPositionType',
          detail: Object.keys(IconPositionType).join(', '),
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    isLoading: {
      description: 'Is fetching',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    loader: {
      options: Object.keys(variants[themeSelected].LoaderVariantType || {}),
      control: { type: 'text' },
      type: { name: 'string' },
      description: 'Set loader',
      table: {
        type: {
          summary: 'string, ReactNode',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    minWidth: {
      description: 'Set button min width size',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    ghostText: {
      description: 'Aria label of the button',
      type: { name: 'string' },
      control: false,
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    tabIndex: {
      description: 'To manage keyboard',
      type: { name: 'number' },
      control: false,
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: { summary: 0 },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    alignText: {
      description: 'Allow to override text-align css button prop',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CUSTOMIZATION,
      },
    },
    dataTestId: {
      description: 'String used for testing',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.TESTING,
      },
    },
    form: {
      description: 'String used for forms',
      control: { type: 'string' },
      type: { name: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
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
    cts: {
      description: 'Object used for update size styles',
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
