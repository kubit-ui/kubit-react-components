import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';
import type { ArgTypes } from 'storybook/internal/types';

import { configArgTypes } from '@/stories/argtypes/argtypes';
import { getBooleanArgTypes } from '@/stories/argtypes/booleanArgTypes';
import { getDisabledArgTypes } from '@/stories/argtypes/disabledArgTypes';
import { getStringtArgTypes } from '@/stories/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/stories/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/stories/constants/categoryControl';

const { ModalVariantType } = KUBIT_VARIANTS;

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
