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
      control: { type: 'select' },
      type: { name: 'string', required: true },
      description: 'Pagination variant',
      options: Object.keys(variants[themeSelected].PaginationVariantsTheme || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    currentStep: {
      control: { type: 'number' },
      type: { name: 'number', required: true },
      description: 'Indicate the parent current position. The max value is maxStepsNumber',
      table: {
        type: {
          summary: 'number',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    maxStepsNumber: {
      control: { type: 'number', min: 2 },
      type: { name: 'number', required: true },
      description: 'Set the max steps number. The min value is 2',
      table: {
        type: {
          summary: 'number',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    maxCountersNumber: {
      control: { type: 'number' },
      type: { name: 'number' },
      description: 'Set the custom steps number to show. The min value is 2',
      table: {
        type: {
          summary: 'number',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    paginationLeftButtonControl: {
      control: { type: 'object' },
      type: { name: 'object' },
      description: 'Set the custom properties for the left button control',
      table: {
        type: {
          summary: 'IPaginationButtonControl',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    paginationRightButtonControl: {
      control: { type: 'object' },
      type: { name: 'object' },
      description: 'Set the custom properties for the right button control',
      table: {
        type: {
          summary: 'IPaginationButtonControl',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    onStepClick: {
      control: false,
      description: 'Set the function to execute when a step is clicked',
      table: {
        type: {
          summary: '(step: number, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
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
