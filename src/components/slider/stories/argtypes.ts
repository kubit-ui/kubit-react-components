import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn } from '@/types';

import { SliderType } from '../types';

export const argtypes = (variants: IThemeObjectVariants, themeSelected: string): ArgTypesReturn => {
  return {
    theme: {
      table: {
        disable: true,
      },
    },
    variant: {
      description: 'Slider variant',
      type: { name: 'string', required: true },
      control: { type: 'select' },
      options: Object.keys(variants[themeSelected].SliderVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    type: {
      description: 'It indicates if slider is discrete or continuous',
      type: { name: 'string' },
      control: { type: 'select' },
      options: Object.keys(SliderType),
      table: {
        type: {
          summary: 'SliderType',
          detail: Object.keys(SliderType).join(', '),
        },
        defaultValue: { summary: SliderType.DISCRETE },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    range: {
      description: 'It indicates if is a range slider',
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
    id: {
      description: 'Slider´s id',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    min: {
      description: 'Slider´s min value',
      type: { name: 'number' },
      control: { type: 'number' },
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: { summary: 0 },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    max: {
      description: 'Slider´s max value',
      type: { name: 'number' },
      control: { type: 'number' },
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: { summary: 100 },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    step: {
      description: 'Slider´s step value',
      type: { name: 'number' },
      control: { type: 'number' },
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: { summary: 1 },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    initialStepOffset: {
      description: 'Slider´s initial step offset',
      type: { name: 'number' },
      control: { type: 'number' },
      table: {
        type: {
          summary: 'number',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    defaultValue: {
      description: 'Slider´s default value',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'number or array',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    value: {
      description: 'Slider´s value',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'number or array',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    onChange: {
      description: 'Function to call when the inner Slider´s value change',
      control: false,
      table: {
        type: {
          summary: '(value: number | number[]) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onDragStart: {
      description: 'Function excecuted when dragging the thumb',
      control: false,
      table: {
        type: {
          summary: '() => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onDragEnd: {
      description: 'Function excecuted when drop the thumb',
      control: false,
      table: {
        type: {
          summary: '() => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    disabled: {
      description: 'It indicates if slider is disable',
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
    label: {
      description: 'Slider´s label in text format',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'SliderLabelType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    leftHelperText: {
      description: 'Slider´s left helper text',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    rightHelperText: {
      description: 'Slider´s right helper text',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    tooltip: {
      description: 'Slider´s tooltip',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'SliderTooltipType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    rightTooltip: {
      description: 'When range, Slider´s right tooltip',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'SliderTooltipType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    incrementButton: {
      description:
        'Slider´s increment button. Pressing this button will increase the value of the slider',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'SliderButtonType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    decrementButton: {
      description:
        'Slider´s decrement button. Pressing this button will decrease the value of the slider',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'SliderButtonType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    thumbIcon: {
      description: 'Slider´s thumb icon. When range, left thumb icon',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    rightThumbIcon: {
      description: 'When range, Slider´s right thumb icon',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    ariaLabel: {
      description: 'Slider´s ariaLabel',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    rightAriaLabel: {
      description: 'When range, Slider´s right ariaLabel',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    ariaLabelBy: {
      description: 'Slider´s ariaLabelBy',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    rightAriaLabelBy: {
      description: 'When range, Slider´s right ariaLabelBy',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    dataTestId: {
      control: { type: 'text' },
      type: { name: 'string' },
      description: 'String used for testing',
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
