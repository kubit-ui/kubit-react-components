import type { ArgTypes } from 'storybook/internal/types';

import {
  ButtonSizeType,
  ButtonVariantType,
} from '@/lib/designSystem/kubit/components/button/variants';
import { configArgTypes } from '@/lib/storybook/argtypes/argtypes';
import { getBooleanArgTypes } from '@/lib/storybook/argtypes/booleanArgTypes';
import { getDisabledArgTypes } from '@/lib/storybook/argtypes/disabledArgTypes';
import { getIconArgTypes } from '@/lib/storybook/argtypes/iconArgTypes';
import { getSelectorArgTypes } from '@/lib/storybook/argtypes/selectorArgTypes';
import { getStringtArgTypes } from '@/lib/storybook/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/lib/storybook/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/lib/storybook/constants/categoryControl';
import { POSITIONS } from '@/lib/types/positions/positions';

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ...getDisabledArgTypes([
      'altIcon',
      'ariaControls',
      'ariaExpanded',
      'ariaLabel',
      'children',
      'form',
      'ghostText',
      'loader',
      'onClick',
      'role',
      'tabIndex',
    ]),
    alignText: getStringtArgTypes({
      category: CATEGORY_CONTROL.CUSTOMIZATION,
      keyName: 'alignText',
      name: 'Allow to override text-align css button prop',
    }),
    ariaDescribedby: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'ariaDescribedby',
      name: 'Aria text that should be read when the button is focused',
    }),
    ariaLabelText: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'ariaLabelText',
      name: 'aria-label applied to text container',
    }),
    disabled: getBooleanArgTypes({
      descriptionName: 'Specifies if the button element is disabled or not',
      name: 'disabled',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    fullWidth: getBooleanArgTypes({
      descriptionName: 'Show full width',
      name: 'fullWidth',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    icon: getIconArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      name: 'Add icon',
    }),
    iconPosition: getSelectorArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'iconPosition',
      name: 'Set icon position',
      options: Object.keys(POSITIONS).reduce(
        (acc, key) => ({ ...acc, [key]: key }),
        {},
      ),
    }),
    loaderAltText: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'loaderAltText',
      name: 'Set the loader alternative text',
    }),
    loading: getBooleanArgTypes({
      descriptionName: 'Is fetching',
      name: 'loading',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    minWidth: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'minWidth',
      name: 'Set button min width size',
    }),
    rel: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'rel',
      name: 'Link rel attribute. Used to specify the relationship between the current document and the linked resource.',
    }),
    size: getSelectorArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'size',
      name: 'Button size',
      options: Object.keys(ButtonSizeType).reduce(
        (acc, key) => ({ ...acc, [key]: key }),
        {},
      ),
    }),
    target: getSelectorArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'target',
      name: 'Set the target into anchor tag',
      options: {},
    }),
    type: getSelectorArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'type',
      name: 'Define buttons type',
      options: {
        button: 'button',
        reset: 'reset',
        submit: 'submit',
      },
    }),
    url: getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      keyName: 'url',
      name: 'Link url',
    }),
    variant: getVariantArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyVariant: 'variant',
      name: 'Button variant',
      variants: Object.keys(ButtonVariantType).reduce(
        (acc, key) => ({ ...acc, [key]: key }),
        {},
      ),
    }),
  };
};
