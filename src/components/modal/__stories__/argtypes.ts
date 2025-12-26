import type { ArgTypes } from 'storybook/internal/types';

import { ModalVariantType } from '@/lib/designSystem/kubit/components/modal/variants';
import { configArgTypes } from '@/lib/storybook/argtypes/argtypes';
import { getBooleanArgTypes } from '@/lib/storybook/argtypes/booleanArgTypes';
import { getDisabledArgTypes } from '@/lib/storybook/argtypes/disabledArgTypes';
import { getStringtArgTypes } from '@/lib/storybook/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/lib/storybook/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/lib/storybook/constants/categoryControl';

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ...getDisabledArgTypes([
      'closeButton',
      'closeIcon',
      'content',
      'contentContainer',
      'contentScrollArias',
      'dragIcon',
      'footer',
      'onClose',
      'onKeyDown',
      'popover',
      'title',
    ]),
    blocked: getBooleanArgTypes({
      descriptionName: 'modal',
      name: 'blocked',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    customHeightAllDevices: getBooleanArgTypes({
      descriptionName: 'modal',
      name: 'customHeightAllDevices',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    customWidthAllDevices: getBooleanArgTypes({
      descriptionName: 'modal',
      name: 'customWidthAllDevices',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    disableFocusableContent: getBooleanArgTypes({
      descriptionName: 'modal',
      name: 'disableFocusableContent',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    id: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'id',
      name: 'modal',
    }),
    maxHeight: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'maxHeight',
      name: 'modal',
    }),
    maxWidth: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'maxWidth',
      name: 'modal',
    }),
    minContentHeight: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'minContentHeight',
      name: 'modal',
    }),
    minHeight: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'minHeight',
      name: 'modal',
    }),
    minWidth: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'minWidth',
      name: 'modal',
    }),
    open: getBooleanArgTypes({
      descriptionName: 'modal',
      name: 'open',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    portalId: getStringtArgTypes({
      category: CATEGORY_CONTROL.CUSTOMIZATION,
      keyName: 'portalId',
      name: 'modal',
    }),
    variant: {
      ...getVariantArgTypes({
        keyVariant: 'variant',
        name: 'modal',
        variants: Object.keys(ModalVariantType).reduce(
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
