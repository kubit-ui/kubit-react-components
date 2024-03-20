import { ILLUSTRATIONS } from '@/assets';
import { CATEGORY_CONTROL } from '@/constants';
import { ArgTypesReturn } from '@/types';

export const argtypes = (): ArgTypesReturn => {
  return {
    altText: {
      description:
        'Alt text of the illustration  if component is an  img or aria-label if component is svg. If altText is empty, aria-hidden will be true',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    height: {
      description: 'Height of the illustration',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    illustration: {
      control: { type: 'select' },
      type: { name: 'string', required: true },
      description: 'Illustration variant',
      options: Object.keys(ILLUSTRATIONS || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    customIllustrationStyles: {},
    onClick: {
      description: 'The event occurs when the user clicks on the element',
      control: false,
      table: {
        type: {
          summary: '() => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onKeyDown: {
      description: 'Function that is triggered anytime the user presses a key on their keyboard',
      control: false,
      table: {
        type: {
          summary: '(e: KeyboardEvent<HTMLImageElement | SVGSVGElement>) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    width: {
      description: 'Width of the illustration',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    ariaLabel: {
      description: 'Aria label of the illustration',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    rotate: {
      description: 'Defines a transformation that rotates an element around a fixed point',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '0deg',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    transitionDuration: {
      description: 'Sets the length of time a transition animation',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '0.2s',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    fileExtension: {
      description: 'String used for testing',
      control: false,
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
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
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    disabled: {
      description: 'Aria disable of the illustration',
      control: { type: 'boolean' },
      type: { name: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
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
        defaultValue: {
          summary: 0,
        },
        category: CATEGORY_CONTROL.TESTING,
      },
    },
  };
};
