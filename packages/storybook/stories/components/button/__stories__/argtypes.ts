import type { ArgTypes } from 'storybook/internal/types';

import {
  ButtonSizeType,
  ButtonVariantType,
} from '@/lib/designSystem/kubit/components/variants';
import { getAdditionalClassesArgTypes } from '@/lib/storybook/argtypes/additionalClassesArgTypes';
import { configArgTypes } from '@/lib/storybook/argtypes/argtypes';
import { getBooleanArgTypes } from '@/lib/storybook/argtypes/booleanArgTypes';
import { getDisabledArgTypes } from '@/lib/storybook/argtypes/disabledArgTypes';
import { getIconArgTypes } from '@/lib/storybook/argtypes/iconArgTypes';
import { getSelectorArgTypes } from '@/lib/storybook/argtypes/selectorArgTypes';
import { getStringtArgTypes } from '@/lib/storybook/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/lib/storybook/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/lib/storybook/constants/categoryControl';
import { POSITIONS } from '@/lib/types/positions/positions';

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ...getDisabledArgTypes([
      'id',
      'additionalVariantClasses',
      'additionalSizeClasses',
      'onClick',
      'form',
      'role',
      'cssVariantClasses',
      'cssSizeClasses',
      'ghostText',
      'alignText',
      'tabIndex',
      'icon',
      'loader',
    ]),
    'additionalSizeClasses.button': {
      ...getAdditionalClassesArgTypes({
        name: 'button',
        subCategory: 'additionalSizeClasses',
      }),
      table: {
        ...getAdditionalClassesArgTypes({
          name: 'button',
          subCategory: 'additionalSizeClasses',
        }).table,
        category: 'MODIFIERS',
      },
    },
    'additionalSizeClasses.icon': {
      ...getAdditionalClassesArgTypes({
        name: 'icon',
        subCategory: 'additionalSizeClasses',
      }),
      table: {
        ...getAdditionalClassesArgTypes({
          name: 'icon',
          subCategory: 'additionalSizeClasses',
        }).table,
        category: 'MODIFIERS',
      },
    },
    'additionalVariantClasses.button': {
      ...getAdditionalClassesArgTypes({
        name: 'button',
        subCategory: 'additionalVariantClasses',
      }),
      table: {
        ...getAdditionalClassesArgTypes({
          name: 'button',
          subCategory: 'additionalVariantClasses',
        }).table,
        category: 'MODIFIERS',
      },
    },
    'additionalVariantClasses.icon': {
      ...getAdditionalClassesArgTypes({
        name: 'icon',
        subCategory: 'additionalVariantClasses',
      }),
      table: {
        ...getAdditionalClassesArgTypes({
          name: 'icon',
          subCategory: 'additionalVariantClasses',
        }).table,
        category: 'MODIFIERS',
      },
    },
    children: getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      keyName: 'children',
      name: 'button',
    }),
    disabled: getBooleanArgTypes({
      descriptionName: 'button',
      name: 'disabled',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),

    fullWidth: getBooleanArgTypes({
      descriptionName: 'button',
      name: 'fullWidth',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    icon: getIconArgTypes({ name: 'icon' }),
    iconPosition: getSelectorArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      defaultValue: POSITIONS.LEFT,
      keyName: 'iconPosition',
      name: 'button',
      options: {
        [POSITIONS.LEFT]: POSITIONS.LEFT,
        [POSITIONS.RIGHT]: POSITIONS.RIGHT,
      },
    }),
    loading: getBooleanArgTypes({
      descriptionName: 'loading',
      name: 'loading',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    minWidth: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'minWidth',
      name: 'button',
    }),
    size: {
      ...getVariantArgTypes({
        keyVariant: 'size',
        name: 'button',
        variants: { ...ButtonSizeType },
      }),
      table: {
        ...getVariantArgTypes({
          keyVariant: 'size',
          name: 'button',
          variants: { ...ButtonSizeType },
        }).table,
        category: 'MODIFIERS',
      },
    },
    type: getSelectorArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'type',
      name: 'button',
      options: {
        button: 'button',
        reset: 'reset',
        submit: 'submit',
      },
    }),
    variant: {
      ...getVariantArgTypes({
        name: 'button',
        variants: { ...ButtonVariantType },
      }),
      table: {
        ...getVariantArgTypes({
          name: 'button',
          variants: { ...ButtonVariantType },
        }).table,
        category: 'MODIFIERS',
      },
    },
  };
};
