import { CATEGORY_CONTROL } from '@/constants/categoryControl/categoryControl';
import { ArgTypesReturn } from '@/types/type/type';

import { CssAnimationExecuteOption } from '../types/cssAnimation';
import { CssAnimationVariants } from '../types/variant';

export const argtypes = (): ArgTypesReturn => {
  return {
    variant: {
      type: { name: 'string', required: true },
      control: { type: 'select' },
      description: 'CssAnimationVariants variant',
      options: Object.keys(CssAnimationVariants || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    options: {
      description:
        'CssAnimation options (duration, enterDuration, exitDuration ,delay, iterationCount, timingFunction, ...)',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'ICssAnimationOptions',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    exec: {
      description: 'CssAnimation execute option',
      options: Object.keys(CssAnimationExecuteOption),
      type: { name: 'string' },
      control: { type: 'select' },
      table: {
        type: {
          summary: 'CssAnimationExecuteOption',
          detail: Object.keys(CssAnimationExecuteOption).join(', '),
        },
        defaultValue: {
          summary: CssAnimationExecuteOption.HIDDEN,
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
        category: CATEGORY_CONTROL.TESTING,
      },
    },
  };
};
