import type { ArgTypes } from 'storybook/internal/types';

import { configArgTypes } from '@/lib/storybook/argtypes/argtypes';
import { getBooleanArgTypes } from '@/lib/storybook/argtypes/booleanArgTypes';
import { getDisabledArgTypes } from '@/lib/storybook/argtypes/disabledArgTypes';
import { getIconArgTypes } from '@/lib/storybook/argtypes/iconArgTypes';
import { getStringtArgTypes } from '@/lib/storybook/argtypes/stringArgTypes';
import { CATEGORY_CONTROL } from '@/lib/storybook/constants/categoryControl';

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ...getDisabledArgTypes([
      'complex',
      'fileExtension',
      'onClick',
      'tabIndex',
      'twistAnimationTransformValue',
    ]),
    altText: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'altText',
      name: 'icon',
    }),
    ['aria-checked']: getBooleanArgTypes({
      descriptionName: 'icon',
      name: 'aria-checked',
      subCategory: CATEGORY_CONTROL.ACCESIBILITY,
    }),
    ['aria-controls']: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'aria-controls',
      name: 'icon',
    }),
    ['aria-expanded']: getBooleanArgTypes({
      descriptionName: 'icon',
      name: 'aria-expanded',
      subCategory: CATEGORY_CONTROL.ACCESIBILITY,
    }),
    ['aria-label']: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'aria-label',
      name: 'icon',
    }),
    color: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'color',
      name: 'icon',
    }),
    disabled: getBooleanArgTypes({
      descriptionName: 'icon',
      name: 'disabled',
      subCategory: CATEGORY_CONTROL.ACCESIBILITY,
    }),
    fallbackIcon: getIconArgTypes({
      isString: true,
      name: 'icon',
    }),
    height: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'height',
      name: 'icon',
    }),
    icon: {
      ...getIconArgTypes({
        isString: true,
        name: 'icon',
      }),
      type: { name: 'string', required: true },
    },
    id: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'id',
      name: 'icon',
    }),
    loading: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'loading',
      name: 'icon',
    }),
    rotate: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'rotate',
      name: 'icon',
    }),
    screenReaderText: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'screenReaderText',
      name: 'icon',
    }),
    transitionDuration: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'transitionDuration',
      name: 'icon',
    }),
    width: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'width',
      name: 'icon',
    }),
  };
};
