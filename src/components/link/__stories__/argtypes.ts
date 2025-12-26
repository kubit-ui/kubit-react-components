import type { ArgTypes } from 'storybook/internal/types';

import { LinkVariant } from '@/lib/designSystem/kubit/components/link/variants';
import { TextVariantType } from '@/lib/designSystem/kubit/components/text/variants';
import { configArgTypes } from '@/lib/storybook/argtypes/argtypes';
import { getBooleanArgTypes } from '@/lib/storybook/argtypes/booleanArgTypes';
import { getDisabledArgTypes } from '@/lib/storybook/argtypes/disabledArgTypes';
import { getIconArgTypes } from '@/lib/storybook/argtypes/iconArgTypes';
import { getNumbertArgTypes } from '@/lib/storybook/argtypes/numberArgTypes';
import { getSelectorArgTypes } from '@/lib/storybook/argtypes/selectorArgTypes';
import { getStringtArgTypes } from '@/lib/storybook/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/lib/storybook/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/lib/storybook/constants/categoryControl';

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ...getDisabledArgTypes(['onClick', 'role', 'target']),
    action: getSelectorArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'action',
      name: 'link',
      options: {
        inline: 'inline',
        navigation: 'navigation',
      },
    }),
    alignCenter: getBooleanArgTypes({
      descriptionName: 'link',
      name: 'alignCenter',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    ['aria-describedby']: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'aria-describedby',
      name: 'link',
    }),
    ['aria-label']: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'aria-label',
      name: 'link',
    }),
    children: getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      keyName: 'children',
      name: 'link',
    }),
    color: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'color',
      name: 'link',
    }),
    disabled: getBooleanArgTypes({
      descriptionName: 'link',
      name: 'disabled',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    draggable: getBooleanArgTypes({
      descriptionName: 'link',
      name: 'draggable',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    icon: getIconArgTypes({ name: 'icon' }),
    iconPosition: getSelectorArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'iconPosition',
      name: 'link',
      options: {
        bottom: 'bottom',
        left: 'left',
        right: 'right',
        top: 'top',
      },
    }),
    id: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'id',
      name: 'link',
    }),
    rel: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'rel',
      name: 'link',
    }),
    textVariant: getSelectorArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'textVariant',
      name: 'link',
      options: { ...TextVariantType },
    }),
    url: getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      keyName: 'url',
      name: 'link',
    }),
    variant: {
      ...getVariantArgTypes({
        name: 'link',
        variants: { ...LinkVariant },
      }),
      table: {
        ...getVariantArgTypes({
          name: 'link',
          variants: { ...LinkVariant },
        }).table,
        category: 'MODIFIERS',
      },
    },
    weight: getNumbertArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'weight',
      name: 'link',
    }),
  };
};
