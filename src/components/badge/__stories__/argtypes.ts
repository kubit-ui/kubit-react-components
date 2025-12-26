import type { ArgTypes } from 'storybook/internal/types';

import {
  BadgeSize,
  BadgeVariant,
} from '@/lib/designSystem/kubit/components/badge/variants';
import {
  DotSizeType,
  DotVariantType,
} from '@/lib/designSystem/kubit/components/dot/variants';
import { getAdditionalClassesArgTypes } from '@/lib/storybook/argtypes/additionalClassesArgTypes';
import { configArgTypes } from '@/lib/storybook/argtypes/argtypes';
import { getBooleanArgTypes } from '@/lib/storybook/argtypes/booleanArgTypes';
import { getDisabledArgTypes } from '@/lib/storybook/argtypes/disabledArgTypes';
import { getIconArgTypes } from '@/lib/storybook/argtypes/iconArgTypes';
import { getStringtArgTypes } from '@/lib/storybook/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/lib/storybook/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/lib/storybook/constants/categoryControl';

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ...getDisabledArgTypes([
      'cssVariantClasses',
      'cssSizeClasses',
      'onClick',
      'onBadgeBlur',
      'active',
      'dot',
      'icon',
      'additionalVariantClasses',
      'additionalSizeClasses',
      'labelIcon',
      'label',
    ]),
    'additionalSizeClasses.badge': {
      ...getAdditionalClassesArgTypes({
        name: 'badge',
        subCategory: 'additionalSizeClasses',
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
    'additionalSizeClasses.button': {
      ...getAdditionalClassesArgTypes({
        name: 'button',
        subCategory: 'additionalSizeClasses',
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
    'additionalSizeClasses.dot': {
      ...getAdditionalClassesArgTypes({
        name: 'dot',
        subCategory: 'additionalSizeClasses',
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
    'additionalSizeClasses.dotcontainer': {
      ...getAdditionalClassesArgTypes({
        name: 'dotcontainer',
        subCategory: 'additionalSizeClasses',
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
    'additionalSizeClasses.icon': {
      ...getAdditionalClassesArgTypes({
        name: 'icon',
        subCategory: 'additionalSizeClasses',
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
    'additionalSizeClasses.label': {
      ...getAdditionalClassesArgTypes({
        name: 'label',
        subCategory: 'additionalSizeClasses',
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
    'additionalSizeClasses.labelcontainer': {
      ...getAdditionalClassesArgTypes({
        name: 'labelcontainer',
        subCategory: 'additionalSizeClasses',
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
    'additionalSizeClasses.labelicon': {
      ...getAdditionalClassesArgTypes({
        name: 'labelicon',
        subCategory: 'additionalSizeClasses',
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
    'additionalVariantClasses.badge': {
      ...getAdditionalClassesArgTypes({
        name: 'badge',
        subCategory: 'additionalVariantClasses',
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
    'additionalVariantClasses.button': {
      ...getAdditionalClassesArgTypes({
        name: 'button',
        subCategory: 'additionalVariantClasses',
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
    'additionalVariantClasses.dot': {
      ...getAdditionalClassesArgTypes({
        name: 'dot',
        subCategory: 'additionalVariantClasses',
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
    'additionalVariantClasses.dotcontainer': {
      ...getAdditionalClassesArgTypes({
        name: 'dotcontainer',
        subCategory: 'additionalVariantClasses',
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
    'additionalVariantClasses.icon': {
      ...getAdditionalClassesArgTypes({
        name: 'icon',
        subCategory: 'additionalVariantClasses',
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
    'additionalVariantClasses.label': {
      ...getAdditionalClassesArgTypes({
        name: 'label',
        subCategory: 'additionalVariantClasses',
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
    'additionalVariantClasses.labelcontainer': {
      ...getAdditionalClassesArgTypes({
        name: 'labelcontainer',
        subCategory: 'additionalVariantClasses',
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
    'additionalVariantClasses.labelicon': {
      ...getAdditionalClassesArgTypes({
        name: 'labelicon',
        subCategory: 'additionalVariantClasses',
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
    ['aria-controls']: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'aria-controls',
      name: 'badge',
    }),
    ['aria-expanded']: getBooleanArgTypes({
      descriptionName: 'badge',
      name: 'aria-expanded',
      subCategory: CATEGORY_CONTROL.ACCESIBILITY,
    }),
    ['aria-hidden']: getBooleanArgTypes({
      descriptionName: 'badge',
      name: 'aria-hidden',
      subCategory: CATEGORY_CONTROL.ACCESIBILITY,
    }),
    ['aria-label']: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'aria-label',
      name: 'badge',
    }),
    ariaLiveText: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'ariaLiveText',
      name: 'badge',
    }),
    customDotTranslate: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'customDotTranslate',
      name: 'badge',
    }),
    disabled: getBooleanArgTypes({
      descriptionName: 'badge',
      name: 'disabled',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    'dot.maxNumber': getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      extraDescription: 'Maximum number to display before showing +',
      keyName: 'maxNumber',
      name: 'dot',
      subcategory: 'dot',
    }),
    'dot.number': getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      extraDescription: 'Number to display in the dot',
      keyName: 'number',
      name: 'dot',
      subcategory: 'dot',
    }),
    'dot.size': getVariantArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyVariant: 'size',
      name: 'dot',
      subCategory: 'dot',
      variants: { ...DotSizeType },
    }),
    'dot.variant': getVariantArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyVariant: 'variant',
      name: 'dot',
      subCategory: 'dot',
      variants: { ...DotVariantType },
    }),
    hasDot: getBooleanArgTypes({
      descriptionName: 'notification dot',
      name: 'hasDot',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    'icon.icon': getIconArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      name: 'badge icon',
      subcategory: 'icon',
    }),
    'label.content': getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      extraDescription: 'Text content for the badge label',
      keyName: 'content',
      name: 'badge label',
      subcategory: 'label',
    }),
    'labelIcon.icon': getIconArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      name: 'label icon',
      subcategory: 'labelIcon',
    }),
    role: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'role',
      name: 'badge',
    }),
    size: {
      ...getVariantArgTypes({
        keyVariant: 'size',
        name: 'badge',
        variants: { ...BadgeSize },
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
    variant: {
      ...getVariantArgTypes({
        name: 'badge',
        variants: { ...BadgeVariant },
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
  };
};
