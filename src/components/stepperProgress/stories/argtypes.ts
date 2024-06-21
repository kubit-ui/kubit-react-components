import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn } from '@/types';

export const argtypes = (
  variantsObject: IThemeObjectVariants,
  themeSelected: string
): ArgTypesReturn => {
  return {
    variant: {
      description: 'Select the component theme',
      type: { name: 'string', required: true },
      control: { type: 'select' },
      options: Object.keys(variantsObject[themeSelected].StepperProgressVariants || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    maxSteps: {
      description: 'Max steps numbers. Max value: 10',
      type: { name: 'number', required: true },
      control: { type: 'number', min: 0, max: 10 },
      table: {
        type: {
          summary: 'number',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    initialStep: {
      description: 'Initial Step',
      type: { name: 'number' },
      control: { type: 'number' },
      table: {
        type: {
          summary: 'number',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    currentStep: {
      description: 'Current step number, It shouldnt be greater than maximum value of maxSteps',
      type: { name: 'number', required: true },
      control: { type: 'number', min: 0, max: 10 },
      table: {
        type: {
          summary: 'number',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    ariaLabel: {
      description: 'Aria label text for progress bar',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    prefixAriaLabel: {
      description: 'Prefixes for creating the visual text',
      type: { name: '{ step: string; of: string, completed: string }' },
      control: { type: 'object' },
      table: {
        type: {
          summary: '{ step: string; of: string, completed: string }',
        },
        defaultValue: {
          // eslint-disable-next-line quotes
          summary: "{ step: 'step', of: 'of', completed: 'completed' }",
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    id: {
      description: 'Id',
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
      description: 'Test id',
      type: { name: 'string' },
      control: false,
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
