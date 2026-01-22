import type { ArgTypes } from 'storybook/internal/types';

import { BreadcrumbsVariant } from '@/lib/designSystem/kubit/components/breadcrumbs/variants';
import { LinkVariant } from '@/lib/designSystem/kubit/components/link/variants';
import { TextVariantType } from '@/lib/designSystem/kubit/components/text/variants';
import { getAdditionalClassesArgTypes } from '@/lib/storybook/argtypes/additionalClassesArgTypes';
import { configArgTypes } from '@/lib/storybook/argtypes/argtypes';
import { getDisabledArgTypes } from '@/lib/storybook/argtypes/disabledArgTypes';
import { getIconArgTypes } from '@/lib/storybook/argtypes/iconArgTypes';
import { getNumbertArgTypes } from '@/lib/storybook/argtypes/numberArgTypes';
import { getSelectorArgTypes } from '@/lib/storybook/argtypes/selectorArgTypes';
import { getVariantArgTypes } from '@/lib/storybook/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/lib/storybook/constants/categoryControl';
import { TextComponentOptions } from '@/lib/storybook/constants/textComponentOptions';

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ...getDisabledArgTypes([
      'cssClasses',
      'additionalClasses',
      'link',
      'dividerIcon',
      'crumbs',
    ]),
    'additionalClasses.breadcrumbs': {
      ...getAdditionalClassesArgTypes({
        name: 'breadcrumbs',
        subCategory: 'additionalClasses',
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
    'additionalClasses.crumb': {
      ...getAdditionalClassesArgTypes({
        name: 'crumb',
        subCategory: 'additionalClasses',
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
    'additionalClasses.icondivider': {
      ...getAdditionalClassesArgTypes({
        name: 'icondivider',
        subCategory: 'additionalClasses',
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
    'additionalClasses.icondividercontainer': {
      ...getAdditionalClassesArgTypes({
        name: 'icondividercontainer',
        subCategory: 'additionalClasses',
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
    'additionalClasses.lastonecrumb': {
      ...getAdditionalClassesArgTypes({
        name: 'lastonecrumb',
        subCategory: 'additionalClasses',
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
    'additionalClasses.link': {
      ...getAdditionalClassesArgTypes({
        name: 'link',
        subCategory: 'additionalClasses',
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
    'additionalClasses.linkcontainer': {
      ...getAdditionalClassesArgTypes({
        name: 'linkcontainer',
        subCategory: 'additionalClasses',
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
    'dividerIcon.icon': {
      ...getIconArgTypes({
        name: 'icon',
        subcategory: 'dividerIcon',
      }),
      table: { category: CATEGORY_CONTROL.CONTENT },
    },
    lastOneCrumbComponent: getSelectorArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'lastOneCrumbComponent',
      name: 'breadcrumbs',
      options: TextComponentOptions.reduce(
        (acc, key) => ({
          ...acc,
          [key]: key,
        }),
        {},
      ),
    }),
    'link.action': getVariantArgTypes({
      keyVariant: 'action',
      name: 'action',
      subCategory: 'link',
      variants: { external: 'external', navigation: 'navigation' },
    }),
    'link.textVariant': getVariantArgTypes({
      keyVariant: 'textVariant',
      name: 'textVariant',
      subCategory: 'link',
      variants: Object.keys(TextVariantType).reduce(
        (acc, key) => ({
          ...acc,
          [key]: key,
        }),
        {},
      ),
    }),
    'link.variant': {
      ...getVariantArgTypes({
        keyVariant: 'variant',
        name: 'variant',
        subCategory: 'link',
        variants: Object.keys(LinkVariant).reduce(
          (acc, key) => ({
            ...acc,
            [key]: key,
          }),
          {},
        ),
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
    minCharLimit: {
      ...getNumbertArgTypes({
        category: CATEGORY_CONTROL.MODIFIERS,
        keyName: 'minCharLimit',
        name: 'breadcrumbs',
      }),
      table: {
        ...getNumbertArgTypes({
          category: CATEGORY_CONTROL.MODIFIERS,
          keyName: 'minCharLimit',
          name: 'breadcrumbs',
        }).table,
        defaultValue: { summary: '20' },
      },
    },
    variant: {
      ...getVariantArgTypes({
        keyVariant: 'variant',
        name: 'breadcrumbs',
        variants: Object.keys(BreadcrumbsVariant).reduce(
          (acc, key) => ({
            ...acc,
            [key]: key,
          }),
          {},
        ),
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
  };
};
