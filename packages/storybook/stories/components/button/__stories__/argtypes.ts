import type { ArgTypes } from 'storybook/internal/types';

import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';
import { POSITIONS } from '@kubit-ui-web/react-components';

import { getAdditionalClassesArgTypes } from '@/stories/argtypes/additionalClassesArgTypes';
import { configArgTypes } from '@/stories/argtypes/argtypes';
import { getBooleanArgTypes } from '@/stories/argtypes/booleanArgTypes';
import { getDisabledArgTypes } from '@/stories/argtypes/disabledArgTypes';
import { getIconArgTypes } from '@/stories/argtypes/iconArgTypes';
import { getSelectorArgTypes } from '@/stories/argtypes/selectorArgTypes';
import { getStringtArgTypes } from '@/stories/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/stories/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/stories/constants/categoryControl';

const { ButtonSizeType, ButtonVariantType } = KUBIT_VARIANTS;

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
