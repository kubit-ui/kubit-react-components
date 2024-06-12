import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn } from '@/types';

import { StepperNumberOrientationType } from '../types';

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
      description: 'Stepper number variant',
      options: Object.keys(variants[themeSelected].StepperNumberVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    orientation: {
      description: 'Select stepper orientation',
      options: Object.keys(StepperNumberOrientationType),
      control: { type: 'select' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'StepperNumberOrientationType',
          detail: Object.keys(StepperNumberOrientationType).join(', '),
        },
        defaultValue: {
          summary: StepperNumberOrientationType.HORIZONTAL,
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    horizontalOrientationWidth: {
      description: 'Step horizontal width',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    completedStepIcon: {
      description: 'Icon of step with state COMPLETED',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    steps: {
      description: 'List of steps (contains name of each step)',
      control: { type: 'object' },
      type: { name: 'array', required: true },
      table: {
        type: {
          summary: 'string[]',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    currentStep: {
      description: 'Father current step',
      control: { type: 'number' },
      type: { name: 'number' },
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: {
          summary: 0,
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    ['aria-label']: {
      description: 'Set the section-tag aria-label',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    screenReaderTextBuilder: {
      description: 'Set the aria-label prefix and suffix for every step',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'StepperNumberprefixSuffixType',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
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
