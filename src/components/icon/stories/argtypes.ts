import { ICONS } from '@/assets';
import { CATEGORY_CONTROL } from '@/constants';
import { ArgTypesReturn } from '@/types';

export const argtypes = (): ArgTypesReturn => {
  return {
    screenReaderText: {
      description: 'Help text for screen readers',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    icon: {
      type: { name: 'string', required: true },
      control: { type: 'select' },
      description: 'Icon url',
      options: Object.keys(ICONS || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    altText: {
      description:
        'Alt text of the icon  if component is an  img or aria-label if component is svg. If altText is empty, aria-hidden will be true',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: '' },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    ['aria-checked']: {
      description: 'Indicate if Icon is checked or not',
      control: { type: 'boolean' },
      type: { name: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    color: {
      description: 'Color of the icon. If icon has a color then it is a svg else it is an img',
      control: { type: 'color' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    height: {
      description: 'Height of the icon',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    linearIcon: {
      description: 'Icon is svg',
      control: false,
      type: { name: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    onClick: {
      description: 'The event occurs when the user clicks on the element',
      control: false,
      table: {
        type: {
          summary: 'React.MouseEventHandler<HTMLButtonElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    width: {
      description: 'Width of the icon',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    ['aria-label']: {
      description: 'Aria label of the icon',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    ['aria-controls']: {
      description: 'Aria controls of the icon',
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
        defaultValue: { summary: '0deg' },
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
        defaultValue: { summary: '0.2s' },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    disabled: {
      description: 'Aria disable of the icon',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    fileExtension: {
      description: 'Allowed extensions',
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
        defaultValue: { summary: 0 },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    twistAnimationTransformValue: {
      description: 'Value for the "transform" css property',
      control: false,
      table: {
        type: {
          summary: 'string, null, undefined',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    complex: {
      description: 'Fetch as html element',
      control: false,
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    customIconStyles: {
      description: 'Custom icon styles',
      control: false,
      table: {
        type: {
          summary: 'IconTypes',
        },
        category: CATEGORY_CONTROL.CUSTOMIZATION,
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
  };
};
