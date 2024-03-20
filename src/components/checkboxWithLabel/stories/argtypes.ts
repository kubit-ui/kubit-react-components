import { CATEGORY_CONTROL } from '@/constants';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn } from '@/types';

import { argtypes as checkboxArgTypes } from '../../checkbox/stories/argtypes';
import { CheckboxWithLabelState } from '../types';

export const argtypes = (variants: IThemeObjectVariants, themeSelected: string): ArgTypesReturn => {
  return {
    theme: {
      table: {
        disable: true,
      },
    },
    // EXTENDED properties from Checkbox
    ...checkboxArgTypes(variants, themeSelected),
    variant: {
      type: { name: 'string', required: true },
      control: { type: 'select' },
      description: 'Container variant',
      options: Object.keys(variants[themeSelected].CheckboxWithLabelVariants || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    initialChecked: {
      description: 'It is initially checked',
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
    state: {
      description: 'CheckboxWithLabel state type',
      options: Object.keys(CheckboxWithLabelState),
      control: { type: 'select' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'CheckboxWithLabelState',
          detail: Object.keys(CheckboxWithLabelState).join(', '),
        },
        defaultValue: { summary: CheckboxWithLabelState.DEFAULT_SELECTED },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    description: {
      description: 'Object with description properties',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'CheckboxWithLabelDescriptionType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    label: {
      description: 'Object with label properties',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'CheckboxLabelType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    checked: {
      description: 'Is checked?',
      table: {
        disable: true,
        category: CATEGORY_CONTROL.MODIFIERS,
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
