import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';
import type { ArgTypes } from 'storybook/internal/types';

import { configArgTypes } from '@/stories/argtypes/argtypes';
import { getBooleanArgTypes } from '@/stories/argtypes/booleanArgTypes';
import { getDisabledArgTypes } from '@/stories/argtypes/disabledArgTypes';
import { getNumbertArgTypes } from '@/stories/argtypes/numberArgTypes';
import { getStringtArgTypes } from '@/stories/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/stories/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/stories/constants/categoryControl';

const { TabsVariantType } = KUBIT_VARIANTS;

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ...getDisabledArgTypes([
      'content',
      'leftIcon',
      'rightIcon',
      'onSelectTab',
      'tabs',
    ]),
    allowFocusTabPanel: getBooleanArgTypes({
      descriptionName: 'tabs',
      name: 'allowFocusTabPanel',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    autoWidth: getBooleanArgTypes({
      descriptionName: 'tabs',
      name: 'autoWidth',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    defaultSelectedTab: getNumbertArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'defaultSelectedTab',
      name: 'tabs',
    }),
    hideLabelForSingleTab: getBooleanArgTypes({
      descriptionName: 'tabs',
      name: 'hideLabelForSingleTab',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    leftControlAriaLabel: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'leftControlAriaLabel',
      name: 'tabs',
    }),
    maxTabsInView: getNumbertArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'maxTabsInView',
      name: 'tabs',
    }),
    minTabsInView: getNumbertArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'minTabsInView',
      name: 'tabs',
    }),
    rightControlAriaLabel: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'rightControlAriaLabel',
      name: 'tabs',
    }),
    selectedTab: getNumbertArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'selectedTab',
      name: 'tabs',
    }),
    variant: {
      ...getVariantArgTypes({
        keyVariant: 'variant',
        name: 'tabs',
        variants: Object.keys(TabsVariantType).reduce(
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
