import type { ArgTypes } from 'storybook/internal/types';

import { VirtualKeyboardVariantType } from '@/lib/designSystem/kubit/components/virtualKeyboard/variants';
import { configArgTypes } from '@/lib/storybook/argtypes/argtypes';
import { getDisabledArgTypes } from '@/lib/storybook/argtypes/disabledArgTypes';
import { getIconArgTypes } from '@/lib/storybook/argtypes/iconArgTypes';
import { getStringtArgTypes } from '@/lib/storybook/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/lib/storybook/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/lib/storybook/constants/categoryControl';

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ...getDisabledArgTypes([
      'digits',
      'onDigitButtonClick',
      'onRemoveButtonClick',
    ]),
    icon: getIconArgTypes({ isString: true, name: 'remove button' }),
    iconAltText: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'iconAltText',
      name: 'virtualKeyboard',
    }),
    id: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'id',
      name: 'virtualKeyboard',
    }),
    variant: {
      ...getVariantArgTypes({
        keyVariant: 'variant',
        name: 'virtualKeyboard',
        variants: Object.keys(VirtualKeyboardVariantType).reduce(
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
