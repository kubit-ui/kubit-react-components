import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn } from '@/types';

export const argtypes = (variants: IThemeObjectVariants, themeSelected: string): ArgTypesReturn => {
  return {
    theme: {
      table: {
        disable: true,
      },
    },
    variant: {
      control: { type: 'select' },
      type: { name: 'string', required: true },
      description: 'Page control automate variant',
      options: Object.keys(variants[themeSelected].PageControlAutomateVariant || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    mediaProgressBar: {
      description: 'Object with progressBar properties',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'PageControlProgressBarType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    leftArrow: {
      description: 'Object with leftArrow properties',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'PageControlArrowsType',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    rightArrow: {
      description: 'Callback function to execute when the rightArrow is clicked',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'PageControlArrowsType',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    playingInitially: {
      description: 'It makes to start or not the component automatically',
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
    playing: {
      description: 'It indicates if indicator is running or not',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    playStop: {
      description: 'Object with play/stop properties',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'PageControlPlayStopMediaButtonType',
        },
        category: CATEGORY_CONTROL.CONTENT,
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
