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
      description: 'MediaProgressBar variant',
      options: Object.keys(variants[themeSelected].MediaProgressBarVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    onBarChange: {
      description: 'Function to change the current bar',
      control: false,
      table: {
        type: {
          summary: '(indexBar: number) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    handleProgressBarMoved: {
      description: 'Function to calculate the time left to finish from the total time',
      control: false,
      table: {
        type: {
          summary: '(newDuration: number) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onBarClick: {
      description: 'Callback function to execute when the progressBar is clicked',
      control: false,
      table: {
        type: {
          summary: '() => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onBarKeyDown: {
      description: 'Callback function to execute when the progressBar is keydown (enter or space)',
      control: false,
      table: {
        type: {
          summary: '() => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    playingExternal: {
      description: 'Duration in miliseconds of each bar',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    circular: {
      description: 'When the last bar ends, it starts again from the first one',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    barsNum: {
      description: 'Number of bars showed',
      control: { type: 'number' },
      type: { name: 'number' },
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: { summary: 1 },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    barAriaLabel: {
      control: { type: 'object' },
      type: { name: 'string' },
      description:
        'Aria label for each bar. Can be build using the current bar and the bars length using the keywords "{{currentBar}}" and "{{barsNum}}"',
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    barProgressDuration: {
      description: 'Time in milisecondos of the animation duration',
      control: { type: 'number' },
      type: { name: 'number', required: true },
      table: {
        type: {
          summary: 'number',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    currentBar: {
      description: 'Bar which has the focus',
      control: { type: 'number' },
      type: { name: 'number', required: true },
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: { summary: 0 },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    clickableBars: {
      description: 'Bars are clickable or not',
      control: { type: 'boolean' },
      type: { name: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
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
