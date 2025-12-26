import type { ArgTypes } from 'storybook/internal/types';

import { InputVariantType } from '@/lib/designSystem/kubit/components/input/variants';
import { configArgTypes } from '@/lib/storybook/argtypes/argtypes';
import { CATEGORY_CONTROL } from '@/lib/storybook/constants/categoryControl';

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    autoCapitalize: {
      control: { type: 'text' },
      description:
        'Is an enumerated attribute that controls whether inputted text is automatically capitalized and, if so, in what manner',
      table: {
        category: CATEGORY_CONTROL.MODIFIERS,
        type: {
          detail: 'off | none | on | sentences | words | characters',
          summary: 'AutoCapitalizeType',
        },
      },
      type: { name: 'string' },
    },
    autoFocus: {
      control: { type: 'boolean' },
      description:
        'It specifies that an <input> element should automatically get focus when the page loads',
      table: {
        category: CATEGORY_CONTROL.ACCESIBILITY,
        type: {
          summary: 'boolean',
        },
      },
      type: { name: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
      description:
        'Specifies if the input element is disabled or not. Internal state used to apply the styles.',
      table: {
        category: CATEGORY_CONTROL.MODIFIERS,
        type: {
          summary: 'boolean',
        },
      },
      type: { name: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
      description:
        'Specifies if the input element has error or not. Internal state used to apply the styles.',
      table: {
        category: CATEGORY_CONTROL.MODIFIERS,
        type: {
          summary: 'boolean',
        },
      },
      type: { name: 'boolean' },
    },
    id: {
      control: { type: 'text' },
      description: 'Input id',
      table: {
        category: CATEGORY_CONTROL.ACCESIBILITY,
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string' },
    },
    inputMode: {
      control: { type: 'text' },
      description:
        'Is an enumerated attribute that hints at the type of data that might be entered by the user while editing the element or its contents. This allows a browser to display an appropriate virtual keyboard.',
      table: {
        category: CATEGORY_CONTROL.MODIFIERS,
        type: {
          detail:
            'none | text | tel | url | email | numeric | decimal | search',
          summary: 'InputModeType',
        },
      },
      type: { name: 'string' },
    },
    label: {
      control: { type: 'object' },
      description: 'Object with input label properties',
      table: {
        category: CATEGORY_CONTROL.CONTENT,
        type: {
          summary: 'IInputLabelProps',
        },
      },
      type: { name: 'object', value: {} },
    },
    leftDecoration: {
      control: { type: 'object' },
      description: 'Object with input decoration properties',
      table: {
        category: CATEGORY_CONTROL.CONTENT,
        type: {
          summary: 'IInputDecoration',
        },
      },
      type: { name: 'object', value: {} },
    },
    onBlur: {
      control: false,
      description: 'The event occurs when the user leaves the element',
      table: {
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onCopy: {
      control: false,
      description: 'The event occurs when copying some text of the element',
      table: {
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onFocus: {
      control: false,
      description: 'Function that is called when focus on the component',
      table: {
        category: CATEGORY_CONTROL.FUNCTIONS,
        type: {
          summary: 'React.MouseEventHandler<HTMLButtonElement>',
        },
      },
    },
    onKeyDown: {
      control: false,
      description:
        'Function that is triggered anytime the user presses a key on their keyboard',
      table: {
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onPaste: {
      control: false,
      description: 'The event occurs when pasting some text in the element',
      table: {
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    placeholder: {
      control: { type: 'text' },
      description:
        'Specifies a short hint that describes the expected value of an input field',
      table: {
        category: CATEGORY_CONTROL.CONTENT,
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string' },
    },
    popoverTarget: {
      control: { type: 'text' },
      description:
        'Refer to a popover element with the popovertarget attribute to show/hide the specified popover element',
      table: {
        category: CATEGORY_CONTROL.ACCESIBILITY,
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string' },
    },
    popoverTargetAction: {
      control: { type: 'text' },
      description:
        'gets and sets the action to be performed ("hide", "show", or "toggle") on a popover element being controlled by an <input> element of type="button".',
      table: {
        category: CATEGORY_CONTROL.ACCESIBILITY,
        type: {
          detail: 'hide | show | toggle',
          summary: 'string',
        },
      },
      type: { name: 'string' },
    },
    required: {
      control: { type: 'boolean' },
      description: 'Required input option to show required symbol',
      table: {
        category: CATEGORY_CONTROL.MODIFIERS,
        type: {
          summary: 'boolean',
        },
      },
      type: { name: 'boolean' },
    },
    rightDecoration: {
      control: { type: 'object' },
      description: 'Object with input decoration properties',
      table: {
        category: CATEGORY_CONTROL.CONTENT,
        type: {
          summary: 'IInputDecoration',
        },
      },
      type: { name: 'object', value: {} },
    },
    role: {
      control: { type: 'select' },
      description: 'Prop used for accesibility to asign a rol',
      table: {
        category: CATEGORY_CONTROL.MODIFIERS,
        type: {
          summary: 'ROLES',
        },
      },
      type: { name: 'string' },
    },
    truncate: {
      control: { type: 'boolean' },
      description: 'Indicates if text value is truncated when is too big',
      table: {
        category: CATEGORY_CONTROL.MODIFIERS,
        type: {
          summary: 'boolean',
        },
      },
      type: { name: 'boolean' },
    },
    type: {
      control: { type: 'text' },
      description:
        'The type attribute specifies the type of input element to display',
      table: {
        category: CATEGORY_CONTROL.MODIFIERS,
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string' },
    },
    variant: {
      control: { type: 'select' },
      description: 'Input date variant',
      options: Object.keys(InputVariantType),
      table: {
        category: CATEGORY_CONTROL.MODIFIERS,
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string', required: true },
    },
  };
};
