import type { ArgTypes } from 'storybook/internal/types';

import { MessageVariantType } from '@/lib/designSystem/kubit/components/message/variants';
import { configArgTypes } from '@/lib/storybook/argtypes/argtypes';
import { getBooleanArgTypes } from '@/lib/storybook/argtypes/booleanArgTypes';
import { getDisabledArgTypes } from '@/lib/storybook/argtypes/disabledArgTypes';
import { getSelectorArgTypes } from '@/lib/storybook/argtypes/selectorArgTypes';
import { getStringtArgTypes } from '@/lib/storybook/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/lib/storybook/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/lib/storybook/constants/categoryControl';

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ...getDisabledArgTypes([
      'onClose',
      'onActionButtonClick',
      'actionButton',
      'closeIcon',
      'icon',
      'title',
    ]),
    align: getSelectorArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      defaultValue: 'left',
      keyName: 'align',
      name: 'message',
      options: {
        center: 'center',
        left: 'left',
      },
    }),
    ariaLive: getSelectorArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      defaultValue: 'off',
      keyName: 'ariaLive',
      name: 'message',
      options: {
        assertive: 'assertive',
        off: 'off',
        polite: 'polite',
      },
    }),
    ariaMessageId: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'ariaMessageId',
      name: 'message',
    }),
    children: getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      keyName: 'children',
      name: 'message',
    }),
    closeIconAriaLabel: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'closeIconAriaLabel',
      name: 'message',
    }),
    dataTestId: getStringtArgTypes({
      category: CATEGORY_CONTROL.TESTING,
      keyName: 'dataTestId',
      name: 'message',
    }),
    extraAriaDescribedBy: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'extraAriaDescribedBy',
      name: 'message',
    }),
    extraAriaLabelledBy: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'extraAriaLabelledBy',
      name: 'message',
    }),
    variant: {
      ...getVariantArgTypes({
        name: 'message',
        variants: { ...MessageVariantType },
      }),
      table: {
        ...getVariantArgTypes({
          name: 'message',
          variants: { ...MessageVariantType },
        }).table,
        category: 'MODIFIERS',
      },
    },
    visible: getBooleanArgTypes({
      descriptionName: 'message',
      name: 'visible',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
  };
};
