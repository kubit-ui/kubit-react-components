import type { ArgTypes } from 'storybook/internal/types';

import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';

import { configArgTypes } from '@/stories/argtypes/argtypes';
import { getBooleanArgTypes } from '@/stories/argtypes/booleanArgTypes';
import { getDisabledArgTypes } from '@/stories/argtypes/disabledArgTypes';
import { getHtmlComponentArgTypes } from '@/stories/argtypes/htmlComponentArgTypes';
import { getNumbertArgTypes } from '@/stories/argtypes/numberArgTypes';
import { getSelectorArgTypes } from '@/stories/argtypes/selectorArgTypes';
import { getStringtArgTypes } from '@/stories/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/stories/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/stories/constants/categoryControl';

const { TextVariantType } = KUBIT_VARIANTS;

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ...getDisabledArgTypes(['htmlFor', 'onClick']),
    align: getSelectorArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'align',
      name: 'text',
      options: {
        center: 'center',
        justify: 'justify',
        left: 'left',
        right: 'right',
      },
    }),
    children: getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      keyName: 'children',
      name: 'text',
    }),
    color: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'color',
      name: 'text',
    }),
    component: getHtmlComponentArgTypes({
      name: 'text',
    }),
    cursor: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'cursor',
      name: 'text',
    }),
    draggable: getBooleanArgTypes({
      descriptionName: 'text',
      name: 'draggable',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    id: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'id',
      name: 'text',
    }),
    maxTruncatedLines: getNumbertArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'maxTruncatedLines',
      name: 'text',
    }),
    role: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'role',
      name: 'text',
    }),
    textWrap: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'textWrap',
      name: 'text',
    }),
    transform: getSelectorArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'transform',
      name: 'text',
      options: {
        capitalize: 'capitalize',
        lowercase: 'lowercase',
        none: 'none',
        uppercase: 'uppercase',
      },
    }),
    truncate: getBooleanArgTypes({
      descriptionName: 'text',
      name: 'truncate',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    url: getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      keyName: 'url',
      name: 'text',
    }),
    variant: {
      ...getVariantArgTypes({
        name: 'text',
        variants: { ...TextVariantType },
      }),
      table: {
        ...getVariantArgTypes({
          name: 'text',
          variants: { ...TextVariantType },
        }).table,
        category: 'MODIFIERS',
      },
    },
    weight: getNumbertArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'weight',
      name: 'text',
    }),
    wordBreak: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'wordBreak',
      name: 'text',
    }),
    wordWrap: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'wordWrap',
      name: 'text',
    }),
  };
};
