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
      description: 'ProgressBar variant',
      options: Object.keys(variants[themeSelected].ProgressBarVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    size: {
      type: { name: 'string', required: true },
      control: { type: 'select' },
      description: 'ProgressBar size',
      options: Object.keys(variants[themeSelected].ProgressBarSizeType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    barAriaLabel: {
      control: { type: 'text' },
      type: { name: 'string' },
      description: 'When used as slider, aria label for bar',
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    percentProgressCompleted: {
      description: 'Number that represent the percentage completed of the bar',
      control: { type: 'number' },
      type: { name: 'number' },
      table: {
        type: {
          summary: 'number',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    onChange: {
      description: 'When used as slider, event called when value changes',
      type: { name: 'function' },
      control: false,
      table: {
        type: {
          summary: '(value: number) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onDragStart: {
      description: 'When used as slider, event called when start dragging',
      type: { name: 'function' },
      control: false,
      table: {
        type: {
          summary: '() => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onDragEnd: {
      description: 'When used as slider, event called when stop dragging',
      type: { name: 'function' },
      control: false,
      table: {
        type: {
          summary: '() => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    tooltip: {
      description: 'When used as slider, thumb tooltip',
      type: { name: 'object' },
      table: {
        type: {
          summary: 'SliderTooltipType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    dataTestIdBar: {
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
    dataTestIdProgressBar: {
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
