/* eslint-disable complexity */
import { ICONS } from '@/assets';
import { CATEGORY_CONTROL } from '@/constants';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { objectFlip } from '@/storybook/utils/utils';
import { ArgTypesReturn, AriaLiveOptionType } from '@/types';

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
      description: 'Message variant',
      options: Object.keys(variants[themeSelected].MessageVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    defaultOpen: {
      description: 'This the component default state',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: true },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    actionButton: {
      description: 'Object with properties for action button',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'MessageActionButtonType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    extraActionButton: {
      description: 'Object with properties for extra action button',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'MessageExtraActionButtonType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    ariaMessageId: {
      description: 'Aria error message of the message',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    closeIcon: {
      description: 'Object with close icon properties',
      control: { type: 'object', labels: objectFlip(ICONS) },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    content: {
      description: 'Object with content properties. This the message to show into the component',
      type: { name: 'object', required: true },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'MessageContentType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    infoIcon: {
      description: 'Object with properties of the icon to show into title message',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    maxContentLength: {
      description: 'The max characters number allowed in the title',
      control: { type: 'number' },
      type: { name: 'number' },
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: { summary: 246 },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    title: {
      description: 'Object with title properties',
      control: { type: 'object' },
      type: { name: 'object', required: false },
      table: {
        type: {
          summary: 'MessageTitleType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    tag: {
      description: 'Object with tag properties',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'MessageTagType',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    role: {
      description: 'Prop used for accesibility to asign a rol',
      control: { type: 'select' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'ROLES',
          detail: 'alert, status',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    id: {
      description: 'Id of the input',
      control: false,
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    ariaLive: {
      description: 'Aria live indicating the progress if it is changed dinamically',
      type: { name: 'string' },
      control: { type: 'select' },
      options: Object.values(AriaLiveOptionType),
      table: {
        type: {
          summary: 'AriaLiveOptionType',
          detail: Object.values(AriaLiveOptionType).join(', '),
        },
        defaultValue: { summary: AriaLiveOptionType.OFF },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    illustration: {
      description: 'Object with the properties for image illustration of header',
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
      control: { type: 'text' },
      type: { name: 'string' },
      description: 'String used for testing',
      table: {
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
